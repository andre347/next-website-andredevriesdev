---
tags:
  - aws
  - react
date: "2020-08-25"
template: post
draft: false
socialImage: https://res.cloudinary.com/dmim37dbf/image/upload/v1598358119/s3-react-blog/React_S3_Hosting.png
title: How to host a React application on AWS S3
category: AWS
description: There are many ways to host your website on Amazon Web Services (AWS). One of the easiest is to use an S3 bucket to host your static website. In this video & blog I show you how easy it is to host a React application in this way.
---

<center>
<iframe width="560" height="315" src="https://www.youtube.com/embed/BZcSUInHBfc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</center>

There are many ways to host your website on Amazon Web Services (AWS). One of the easiest is to use an S3 bucket to host your static website. Setup and configuration is fairly straightforward for this option. Take a look at the video and see how easy it is. In the video I explain how you can either manually build out your React application and then upload it to a bucket, or use the AWS CLI to automate the deployment.

## Prerequisites

1. AWS Account
2. AWS CLI installed on your machine
3. IAM User / role
4. Local credentials of the AWS User
5. NodeJS & npm installed

## Steps to Upload to S3

As shown in the video:

1. Scaffold a React application by running:

   ```bash
   npx create-react app nameofApp
   ```

1. Create an S3 bucket

1. Change Properties to allow static website hosting (index.html for the Index document.)

1. Change Permissions of Bucket Policy (replace NameOFBucket with your bucket name from 2)

   ```bash
   {
       "Version": "2012-10-17",
       "Statement": [
           {
               "Sid": "AllowPublicReadAccess",
               "Effect": "Allow",
               "Principal": "*",
               "Action": "s3:GetObject",
               "Resource": "arn:aws:s3:::NameOFBucket/*"
           }
       ]
   }
   ```

1. Build out the React application and copy contents of build folder over to S3

   ```bash
   yarn build
   ```

1. Setup S3 Sync - syncs directories and S3 prefixes. Recursively copies new and updated files from the source directory to the destination. Modify the package.json file and add a 'deploy' script that syncs the content of the build folder with the bucket:

   ```bash
   "deploy": "aws s3 sync build/ s3://nameofbucket"
   ```

1. Each time you want to deploy a new version of your app run:

   ```bash
   yarn build && yarn deploy
   ```
