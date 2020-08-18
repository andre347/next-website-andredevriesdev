---
title: How to easily create a Postgres database in Docker
date: "2020-08-18"
template: post
draft: false
description: Have you ever had the problem where a tool or a piece of software works fine on your machine, but the moment you install it on someone else's you get all kinds of issues? Well, I have, and particularly for this reason Docker was invented! In this blog post we will take a quick look at what Docker is and how easy it is to run a database in a Docker container. This container will work on any machine. I promise. Along the way you also learn some Docker specific lingo.
category: Cloud
socialImage: https://www.theinformationlab.co.uk/wp-content/uploads/2017/08/alteryx_logo.png
tags:
  - aws
  - docker
---

Have you ever had the problem where a tool or a piece of software works fine on your machine, but the moment you install it on someone else's you get all kinds of issues? Well, I have, and particularly for this reason Docker was invented! In this blog post we will take a quick look at what Docker is and how easy it is to run a database in a Docker container. This container will work on any machine. I promise. Along the way you also learn some Docker specific lingo.

## What is Docker?

According to the [official docs](https://docs.docker.com/get-started/overview/), Docker is and "_open platform for developing, shipping, and running applications. Docker enables you to separate your applications from your infrastructure so you can deliver software quickly. With Docker, you can manage your infrastructure in the same ways you manage your applications._"

For fully understanding Docker we also need to talk about the difference between Docker and a Virtual Machine (VM). The latter is often run in cloud environments like AWS and Azure. Whenever you create a VM you are sharing the **hardware** with others and other VMs. What these cloud environments are doing is virtualise the hardware. Docker doesn't do that and does it differently. In a VM you can have multiple Operating Systems running on the same hardware, whilst with Docker you virtualise the **Operating System**. Therefore, the big difference between VMs and Docker containers is that the former can have multiple (Guest) Operating Systems on the same hardware, through for example VMWare. Whilst when you install Docker, you are going to use the Docker Engine to create isolated entities on the OS. These entities are called containers. Docker therefor allows you to **automate** the deployment of applications in these containers.

## Let's install Docker

Enough theory, let's jump into installing Docker and firing up a Postgres database. In order to use Docker you first need to install it. You can either install Docker on a Desktop machine (both Windows and Mac), or on a server (Linux based installations). For this tutorial we're going to install Docker on a [Mac](https://docs.docker.com/docker-for-mac/install/). Windows installation instructions can be found [here](https://docs.docker.com/docker-for-windows/install/). For a Mac (and I think also for Windows) the installation is fairly straightforward. You download the app and drag it to Applications. Then you double click the [Docker.app](http://docker.app) and it should start. You can check if it's working if there is a Docker icon (the whale or ship like image with containers) on the top right next to your other small icons. If this is the case you can quickly follow the 'Hello World' example to get up and running.

## How to create a Postgres database

Hands down the easiest way of running a clean Postgres database is by running this command in a terminal window (after Docker has been installed):

```bash
docker run --name postgres-db -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres
```

But what does it do?

- Last section of the command grabs the latest 'postgres' Docker image from the [Docker Hub](https://hub.docker.com/_/postgres)
- -d means that you enable Docker to run the container in the background
- -p plus the port numbers means you map the containers port 5432 to the external port 5432 - this allows you to connect to it from the outside
- POSTGRES_PASSWORD sets the password to docker. This is the password that gives you access to your database
- the —name property gives your container a name and means you can easily find it back

Now you can connect to this brand new Postgres database in any tool that allows you to communicate with databases. I tend to use RazorSQL or DBeaver. You need to use the following connection details to actually connect to the DB:

- Host: localhost
- Port: 5432
- User: postgres
- Password: docker

Once connected you can do anything you want with the database (Create tables, load data etc). But as you can see the database is completely empty. However, the real power of Docker is when you want to easily provision a database that has already content in it. This can be a simple or a complex database structure and schema. The choice is all yours. What this also means is that you can easily spin up such a container (and shut it down). Let's see how below:

## Create a Dockerfile and Docker Image

In order to create a pre-populated database we need to create a Dockerfile. This is a bit of a strange file. At least the first time I saw one. It doesn't have a file extension. It's basically a text document that is being used by Docker and describes what it needs to do. Basically a set of instructions. In our example we want to do the following:

- Pull down the latest Postgres image from the Docker Hub
- Set the environment variable for password to 'docker'
- Create a database, let's call it 'world'
- Use a sql dump file to create the table schema and populate it with data

Above I described what I want in this file. Now let's create it. Create an new file and call it 'Dockerfile'. Use a text editor like VS Code to open it and add the following:

```bash
FROM postgres
ENV POSTGRES_PASSWORD docker
ENV POSTGRES_DB world
COPY world.sql /docker-entrypoint-initdb.d/
```

The last line points at a SQL dump file. You can find the one I'm using [here](https://www.postgresql.org/ftp/projects/pgFoundry/dbsamples/world/dbsamples-0.1/). Download it and put the .sql file in the same folder as the Dockerfile. Next step is to create our image by typing this command in the terminal:

```bash
docker build -t my-postgres-db ./
```

The above line tells Docker to build an image from the Dockerfile and give it a name of 'my-postgres-db'. In order to see your images you can run

```bash
docker images -a
```

Great, now we got our own image called 'my-postgres-db'. We can run it as a container by doing the following:

```bash
docker run -d --name my-postgresdb-container -p 5432:5432 my-postgres-db
```

You can now connect to this database by using the login details specified in the Dockerfile.

In case you want to remove images you can run this command:

```bash
docker image rm 'nameOfTheImage'
```
