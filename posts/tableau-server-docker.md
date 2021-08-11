---
title: Installing a Single Node Tableau Server in a Docker Container
date: 2021/08/11
template: post
draft: false
description: Since Tableau Server version 2021.2 you can deploy a Tableau Server on Linux in a Docker container. In this blog post I take a look at this new new process.
category: Tableau
socialImage: https://res.cloudinary.com/dmim37dbf/image/upload/v1628689404/tableau-docker-blog/tableau-docker.png
tags:
  - tableau
  - docker
---

> If you are new to Docker I would recommend reading [my introduction blog post](https://andredevries.dev/posts/docker-basics) on it.

Since Tableau version 2021.2 'Project Humpback' went into general availability. This was the codename for the project that allows you to deploy and run a Tableau Server using Docker containers and Kubernetes. According to the [official Tableau blog post](https://www.tableau.com/about/blog/2021/6/deploy-tableau-server-linux-docker-container) this will unlock _"a new and streamlined way to deploy and manage Tableau Server in the cloud and when embedded in applications, as well as introduces efficiencies to testing Tableau Server."_

## Why containers?

There are several reasons why Tableau is moving towards containerisation for deploying Tableau Servers. One of them is customer demand. There have been many questions from the [community](https://community.tableau.com/s/question/0D54T00000F33GlSAJ/tableau-server-on-containerkubernetes) whether Tableau was going to adopt this technology.

Containers provide several benefits:

- A standard way to package programs for consistent deployment through 'images'
- Faster deployment because there is no need to provision hardware and setting it all up before deploying your application
- Repeatability and automation: with Docker containers you can easily test your deployments, strip them down and roll back if need. This means you can include these in your CI/CD pipelines more easily

## My approach

I spent about an afternoon playing with Docker containers and Tableau Server and thought it might be good to write down my thoughts and the process I went through. An important thing to note here is that this was mainly for _testing_ purposes and a learning opportunity to understand the installation and deployment process. This deployment was nowhere near a production type deployment.

At the time of writing the [official documentation](https://help.tableau.com/current/server-linux/en-us/server-in-container.htm#prerequisites) shows a few limitations that you need to be aware of:

- Tableau Server in a Container only supports license activation using [Server ATR](https://help.tableau.com/current/server-linux/en-us/atr_service.htm), which requires the container to have internet access. Therefore, offline activation in an air-gapped environment is not possible.
- Tableau Server in a Container does not currently support the Resource Monitoring Tool (RMT) agent.
- Kerberos is not supported in Tableau Server in a Container

To get up and running quickly I spun up an EC2 machine on AWS. In the first release, the entire Tableau Server will become one image. This is very important to note because this means that if you are using an EC2 machine (or equivalent on any other cloud provider) it needs to match the recommend machine requirements from Tableau. I launched an Amazon Linux 2 machine (m5.4xlarge) and installed Docker on it. I followed [this tutorial](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/docker-basics.html) to install Docker on this EC2 machine. You have to run a few commands to install it:

```bash
# Update the packages
sudo yum update -y

# Install Docker
sudo amazon-linux-extras install docker

# Start Docker Daemon
sudo service docker start

# Add the ec2-user to the docker group so you can execute Docker commands without using sudo.
sudo usermod -a -G docker ec2-user
```

If you are new to Docker I would continue with the tutorial listed above because it demonstrates how to use it and how you can easily spin up a little web-server. However, this is not needed when you want to deploy Tableau Server in a container.

A few useful Docker commands that I would recommend learning are:

```bash
# List Docker images
docker images

# List running Docker containers
docker ps

# List all Docker containers
docker ps -all
# or
docker ps -a

# Remove an image
docker image rm <IDofContainer>

# Remove a container
docker container rm <IDofContainer>

# Access a running container and use bash
docker exec -it <IDofContainer> bash

# Stop a container
docker stop <IDofContainer>
```

## Prepare the Docker image

The [quick start guide](https://help.tableau.com/current/server-linux/en-us/server-in-container.htm#before-you-begin) lists out two steps for you to take:

1. Build the Docker image
2. Run the Docker image

For step one Tableau created a 'container setup tool'. This will help you with building the image. You need to download three things to be able to build the image: the container setup tool (.tar.gz), the Tableau Server installation file (.rpm) and any Database drivers you want to install (PostgresSQL for example). You can download the first two [here](https://www.tableau.com/support/releases/server/2021.2.1) (scroll to the bottom). The setup tool is zipped up if you download it. Run this to unzip it (and cd into the new folder that is created):

```bash
tar -xzf tableau-server-container-setup-tool-<VERSION>.tar.gz
```

In this folder you will find a 'reg-info.json' file. This is the registration file. This file will be used to register the Tableau Server instance running in the image. Fill it in with your details.

This is where I stopped and started building my first Tableau Server Docker image. This one failed. Don't do this. You also need some environment variables that are ingested at build time. The docs were not super clear on this but you need to create a file that contains key-value pairs. From the docs:

```
UNPRIVILEGED_TABLEAU_UID=1012
UNPRIVILEGED_TABLEAU_GID=1020
TABLEAU_USERNAME=myuser
TABLEAU_PASSWORD=pw
```

The username and password are what you can use to log in to your server once it has been deployed and installed. You can see all the environment variables that you can add [here](https://help.tableau.com/current/server-linux/en-us/server-in-container.htm#customizing-the-image). I also added my license key here. This meant my environment file looked like this:

```
UNPRIVILEGED_TABLEAU_UID=1012
UNPRIVILEGED_TABLEAU_GID=1020
TABLEAU_USERNAME=myuser
TABLEAU_PASSWORD=pw
LICENSE_KEY=mytableaukey
```

## Build the Docker image

At this point, you can start building an image. However, it would not contain any database drivers or other files that you might want to include with the installation. The Tableau Server image does not come with pre-installed data connectors or drivers. If you want to use those you need to include them in the customer-files folder that was in the folder that you extracted earlier. The official docs give a good step-by-step guide on how to achieve this:

1. Make sure the Tableau Server in a Container setup tool is installed properly
2. Download the driver from the Tableau driver page: [https://www.tableau.com/en-us/support/drivers(Link opens in a new window)](https://www.tableau.com/en-us/support/drivers)
3. Copy the downloaded driver file into the customer-files directory in the Tableau Server in a Container setup tool.

   The `customer-files` directory will be copied into the docker image. It will be located in the following path inside the container: `/docker/customer-files`

4. Edit the file in the Tableau Server in a Container setup tool `customer-files/setup-script` to tell Docker how to install the driver.

   The script is just an executable bash file that is executed when the Docker image is built. (Technically it can be used to perform any arbitrary actions in the image including environment setup, configuration, etc.)

   The script will be run inside the container so be mindful that the commands must work when executed inside the Tableau Server in a Container image.

   For example, if you want to install a driver named mydriver.rpm you would write this in `setup-script`:

   ```bash
   yum install -y /docker/customer-files/mydriver.rpm
   ```

You can now run the build script. If you want to check what options you can pass in you can run './src/build-image -h' first and it will list out what you can and should pass to this command.

Run the build script like so:

```bash
# make sure you reference the correct location of the installation file (e.g. ../tableau-server-2021-2-1.x86_64.rpm)
./build-image --accepteula -i tableau-server-image.rpm

# if you want to reference your environment file add the -e flag and you can give your image a name by adding -o
./build-image --accepteula -i tableau-server-image.rpm -o docker-tableau -e environment
```

The first time I ran this command I hit an error saying:

```
Cannot retrieve metalink for repository: epel/x86_64. Please verify its path and try again
```

This might be related to the Amazon box that I was using. I solved it by running this [command](https://stackoverflow.com/a/27667111) from [this](https://stackoverflow.com/questions/26734777/yum-error-cannot-retrieve-metalink-for-repository-epel-please-verify-its-path) useful StackOverflow thread.

## Run the Docker container

Once that issue was solved I re-ran the build command and the build was successful. After a few minutes the image should be build. You can then run a container with this image:

```bash
docker run -p 8080:8080 -d docker-tableau
```

The port numbers you see bind port 8080 on the host machine with port 8080 on the container. The last 8080 is the port on the container. After you run this command you can run 'docker container ps'. This will now show that your container is running and it's starting the install of the Tableau Server. A really useful tip for finding out what is going on when you are running the container is running this command:

```bash
docker logs --follow <idofcontainer>
```

This command will watch the logs that the container generates and displays them for you in the terminal. Really useful when your container all of a sudden stops itself. This process should take about 10-20 minutes. After this you can interact with your Tableau Server by using the 'docker exec' command:

```bash
# check if all TS processes are running
docker exec it <idofcontainer> tsm status -v

# fully interact with the container
docker exec -it <idofcontainer> bash
```

## Closing thoughts

All in all, I think this is a really good start for containerising Tableau Server. Tableau has committed to breaking the server into more components so you can fully leverage Kubernetes and maybe other container orchestration tools. I think this would increase the adoption of Tableau Server across IT departments that are cloud-native and deploy all their applications through containers. Tableau Server has always been a special beast in terms of installing, deploying and managing it and it needs some specific server training to fully understand it. This should become a whole lot easier in the future for those that are already familiar with Docker.
