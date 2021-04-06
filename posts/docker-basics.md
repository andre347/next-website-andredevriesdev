---
title: "The Basics of using Docker"
date: "2021-04-06"
template: post
draft: false
description: Docker is a great tool for creating, running and deploying your applications but it can all be a bit overwhelming. This blog post looks at some of the Docker concepts that should help you get started with this platform.
socialImage: https://res.cloudinary.com/dmim37dbf/image/upload/v1617706475/docker-blog/photo-1587149185211-28a2ef4c9a10.webp
category: "Docker"
tags:
  - Docker
---

Docker allows us to run applications inside containers. Running an application inside a container takes a single command: **docker run** or **docker container run**. Dockers tagline is that it's a platform for building, running and shipping applications. What the beauty of Docker is, is that if it runs on your machine it will also run on other machines. We've all been there when something runs on your infrastructure, but when you do exactly the same on a colleagues machine it doesn't work at all. There are plenty of reasons why this could be happening. For example, files might be missing, different configuration settings or the software packages that you are using have a version mismatch. These problems will be solved with Docker.

Docker will package up your whole application and all the dependencies it needs. You can then grab this package and deploy this on another machine. The tech behind this is called **'containerisation'**. More about that below. But first, let's talk about **virtualisation**

## What is virtualisation?

Virtualisation is a way to create 'virtual' computing place, as opposed to a 'physical environment. What this boils down to is that it allows you to install multiple operating systems on the same machine. For example, on my Macbook Pro I also got Windows running by using a tool called 'Parallels'. This is one of a few tools that allow you to run multiple OS's without having to reboot your laptop.

## What is containerisation?

Docker actually works differently and as I mentioned before, it uses containerisation. What Docker does is virtualise the operating system, not the actual hardware itself. Let's hop into a few key tools and concepts that will help you further understand Docker.

## Docker terminology

- **Docker Engine**: this is the application that supports everything involved with building, shipping and deploying container-based applications. It starts a daemon process that communicates client-server.
- **DockerFile**: a file containing a set of instructions to build a docker image. Dockerfiles don't have a file extension. It often specifies the operating system that powers the container, and also other application-level components (database, port settings, environment variables etc.).
- **Docker Image**: this is the container image that contains everything you need to run your application. See all your images by running 'docker image ls'
- **Docker Container**: lightweight, standalone, executable package of software that uses a Docker image. A container is therefore a runnable instance of an image.
- **Docker Hub**: a public repository of Docker images. This is the place to find images you can use.

## How to create a Docker Container?

The steps involved are:

1. Create a Dockerfile in the same folder as your application that contains the logic for your application (OS, web server, database etc)
1. Build the image by running **Docker build**.
   `docker build -t nameofapplication . ` -t is for tagging the container so it's easier to find it back
1. Start the app by running ` docker run -dp portOfHost:portOfContainer nameofapplication`. -d is for running in detached mode, in the background in your terminal
1. Shut it down by first listing the Docker container and find the ID of the one you want to stop: `docker ps`
1. Stop it: `docker stop <idofcontainer>`
1. Remove it: `docker rm <idofcontainer>`
