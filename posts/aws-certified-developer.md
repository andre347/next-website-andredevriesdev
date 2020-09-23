---
title: "How I became an AWS Certified Developer - how to pass the associate exam!"
date: "2020-08-30"
template: post
draft: false
description: A few months ago I passed the AWS Certified Developer Associate Exam. This exam tests your knowledge of the core AWS services that you need to use for developing, deploying and debugging cloud based applications. In this blog post I give more background to the exam and give some tips & tricks on how you can pass!
category: "AWS"
socialImage: https://res.cloudinary.com/dmim37dbf/image/upload/v1598815756/aws-developer-associate-blog/AWS-Developer-Associate.png
tags:
  - aws
  - cloud
  - 100daysofcloud
---

A few months ago I passed the [AWS Certified Developer Associate Exam](https://aws.amazon.com/certification/certified-developer-associate/). This exam tests your knowledge of the core AWS services that you need to use for developing, deploying and debugging cloud based applications. AWS Certifications are currently one of the most sought-after credentials that you can have in the industry and I thought it would be helpful to share my experience and tips for this exam. This should therefore be a helpful blog post for those that want to start out in the tech sector or have an interest in becoming a developer who uses Amazon Web Services. I found the exam itself quite hard but it was really rewarding and a learned a ton!

## Introduction

Amazon Web Services (AWS) is vast and there is a lot to learn. It currently comprises more than 200 services. I was pretty overwhelmed when I started delving into it. The first exam that I tried was the [Cloud Practitioner](https://aws.amazon.com/certification/certified-cloud-practitioner/). I passed that one earlier this year. To me, that exam felt kind of an entry exam into AWS and the cloud. There were lots of high level questions about a myriad of services, ranging from virtualization to machine learning and databases. This made it really hard to know beforehand if I studied enough. That was different for the Certified Developer Associate exam - **the focus point of this blog post.**

## Exam details

The format of the exam is multiple-choice. There are no open questions and you don't have to write an essay. Typically the exam is held in a test centre but because we are living in a global pandemic AWS has moved all their exams to an online proctor environment. I'm still on the fence if I like that setup. A proctor is someone that constantly pays attention to you while you do the exam. For the full 130 minutes! This means that with even the slightest of movements of your hands or face the screen will be paused and you will be asked why you are moving. I literally got stopped while I was grabbing my glass of water that was standing next to the laptop. I found this really frustrating and it dropped my focus, especially the first time when I did the Cloud Practitioner exam. The second time around, for the Developer Associate, I just accepted it (and didn't drink any water).

## How I studied for the exam

Before we jump into the specifics of the exam I want to explain how I prepared myself for this exam. I think that everyone has a different way of learning so please don't take this as gospel. I think the time between registering for the exam and actually taking it was about 3,5 weeks. Even though I've used AWS quite a lot in the last few months I had to learn a lot about certain services I had never used. I mainly studied through the [Udemy](https://www.udemy.com/course/aws-certified-developer-associate/) course and the [practice exams](https://tutorialsdojo.com/) that I mention below. Especially the practice exams give you a good sense of what you know and what you need to focus on. For me this was mainly learning more about [DynamoDB](https://aws.amazon.com/dynamodb/) and the CI/CD Pipeline. Whenever I study for a particular topic I try to immerse myself into the material. I do that via books, podcasts and YouTube videos. I have listed out a whole bunch of resources at the end of this blog post but the main reason I read books and listen to podcasts is that you get some 'real' opinions about the AWS services you are learning about. The Udemy course from A Cloud Guru is great, but it's a very structured and un-opinionated approach to learning about the cloud. While if you, for example, listen to a podcast about Serverless (e.g. the Real-World Serverless podcast by [The Burning Monk](https://theburningmonk.com/2020/03/announcing-the-new-real-world-serverless-podcast/)) you get more in-depth explanations of the various study topics.

## Prerequisites

Let's start with the requirements for this exam. The Developer Associate exam is one of three associate level exams. The other two are the Solutions Architect and the SysOps Administrator. Find more information about those exams [here](https://aws.amazon.com/certification/). AWS states the you need a certain amount of experience and in some cases even a few years of hands-on experience to pass them. However, there are no real prerequisites to _register_ for the exam. Anyone can therefore sign up, even if you don't hold any AWS certifications.

The breakdown of the exam questions are as follows:

- Deployment: 22%
- Security: 26%
- Development: 30%
- Refactoring: 10%
- Monitoring: 12%

AWS recommends you have the following knowledge and experience for the Developer Associate exam:

- In-depth knowledge of at least one high-level programming language
- Understanding of core AWS services, uses, and basic AWS architecture best practices
- Proficiency in developing, deploying, and debugging cloud-based applications using AWS
- Ability to use the AWS service APIs, AWS CLI, and SDKs to write applications
- Ability to identify key features of AWS services
- Understanding of the AWS shared responsibility model
- Understanding of application lifecycle management
- Ability to use a CI/CD pipeline to deploy applications on AWS
- Ability to use or interact with AWS services
- Ability to apply a basic understanding of cloud-native applications to write code
- Ability to write code using AWS security best practices (e.g., not using secret and access keys in the code, instead using IAM roles)
- Ability to author, maintain, and debug code modules on AWS
- Proficiency writing code for serverless applications
- Understanding of the use of containers in the development process

This is a big list and you are tested on each item. But some are more important then others. I'll therefore break down the _most essential ones_ below:

### In-depth knowledge of at least one high-level programming language

This is the first one in the list and might scare a few people. Do I really need to know or even learn a complete programming language to be able to pass this exam? The answer is a _no, but it might help._ What I mean with that is that you don't actually have to write code, but you have to understand it. It also helps with your further career in AWS. Even though you can do a lot in the AWS Console, many Cloud Developers are using the [CLI](https://aws.amazon.com/cli/) and [CloudFormation](https://aws.amazon.com/cloudformation/) to deploy their 'infrastructure as code'. Because the questions are multiple choice you can use the art of elimination to get to the right answers for these types of questions if you're not too certain. The ones I got that involved code where related to caching and which code snippet demonstrated caching most effectively.

### Understanding of core AWS services, uses, and basic AWS architecture best practices

Even though this exam focuses heavily on the developer side of AWS, I would still recommend that it is important you have a solid understanding of the core services such as [EC2](https://aws.amazon.com/ec2/), [S3](https://aws.amazon.com/s3/), [IAM](https://aws.amazon.com/iam/) and [RDS](https://aws.amazon.com/rds/). Many questions have these services listed in possible answers so knowing what you can (and can't do) with them is very important. I didn't get any questions around actually designing or architecting solutions in a [VPC](https://aws.amazon.com/vpc/). This is mainly because lots of the developer services are all moving towards a 'serverless' setup. With serverless a lot of the detailed architectures are already taken care of for you. Another point that always comes back in AWS exams is best practices. These often relate to security best practices. A rule of thumb when you work with AWS is that you are responsible of securing what's in the cloud, while AWS secures the cloud itself.

### Ability to use a CI/CD pipeline to deploy applications on AWS

This one is super important and I got a lot of questions on. CI/CD stands for Continuous Integration and Continuous Deployment. These are paradigms that developers use when they (automatically) deploy and build their code. Understanding what 'blue and green' deployments are is important, but you're not being tested if you know the definition of these terms. Often the questions are written as little case studies where you have to select which deployment strategy is the most suitable. 'Suitable' is then also defined in the question itself. I would recommend using or playing around with [AWS Codepipeline](https://aws.amazon.com/codepipeline/) on your own to understand the moving parts. This AWS service is kind of an umbrella service that comprises '[Codecommit](https://aws.amazon.com/codecommit/)' (AWS's Github), [Codebuild](https://aws.amazon.com/codebuild/) & [CodeDeploy](https://aws.amazon.com/codedeploy/). Another tool that you need to understand in this category is [X-Ray](https://aws.amazon.com/xray/). A tool that can help you with analyse, debug and monitor your applications.

### Proficiency writing code for serverless applications

You can take this requirement a bit broader and think about serverless applications as a whole. Because in the exam there are quite a few questions related to serverless computing. You need to be able to articulate the differences between a 'traditional deployment' and a serverless deployment. In the former, the user has to provision their own instances, maintain and update the operating system, install applications and handle and configure autoscaling themselves. All of this is not needed when you move to a serverless framework. You only have to take care of writing the code of your application and monitor it. Everything else, like autoscaling, is taken care of by AWS. Services that you need know in this section are: [AWS Lambda](https://aws.amazon.com/lambda/), [API Gateway](https://aws.amazon.com/api-gateway/), [DynamoDB](https://aws.amazon.com/dynamodb/), [Step Functions](https://aws.amazon.com/step-functions/), [Athena](https://aws.amazon.com/athena) and [Kinesis](https://aws.amazon.com/kinesis/). Of this list I would really recommend studying Lambda, Gateway and DynamoDB.

### Understanding of the use of containers in the development process

This is something I didn't focus on at all while studying. I didn't get many questions about it either so I wouldn't worry to much if you've never used Docker and Kubernetes. However, I would read up a bit on the AWS services that help you with deploying containers on AWS ([AWS ECS](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/docker-basics.html)) because they might be mentioned as potential answers in other non container related questions.

## Resources I used to study:

There are a whole bunch of resources that I used to study. The most important thing to stress when you are studying for AWS exams is to get hands-on experience with the services. This hands-on experience gives you a good grips on the console. However, for the Developer Associate exam I would also focus on learning CloudFormation and how to use the [AWS Serverless Application Model](https://aws.amazon.com/serverless/sam/) (SAM). Almost all the things you can do in the console you can also do by using the various APIs that AWS offers (e.g. AWS CLI). The majority of resources that I list below will give you this firsthand experience:

- **A Cloud Guru Developer Associate Course** ([Udemy](https://www.udemy.com/course/aws-certified-developer-associate/)): a well-known resource for online cloud training. A Cloud Guru has a whole bunch of courses and this one is quite good and gives you a solid understanding of the developer side of AWS.
- **Exam Readiness AWS Certified Developer Associate** ([YouTube](https://www.youtube.com/watch?v=HOPUwmq95kk)): recording of a presentation that walks you through the various elements of the exam. Contains practice questions and lots of tips & tricks.
- **TutorialsDojo** ([Website](https://tutorialsdojo.com/)): this is where I bought access to practices exams. This was my primary method of testing what elements of the exam I had to pay more attention to.
- **AWS Simplified** ([YouTube](https://www.youtube.com/channel/UCraiFqWi0qSIxXxXN4IHFBQ)): very informative YouTube channel that has lots of bite-size videos about various AWS services.
- **DynamoDB Guide** ([Website](https://www.dynamodbguide.com/)): built by [Alex DeBrie](https://www.alexdebrie.com/). He's an AWS Hero and the author of [The DynamoDB Book](https://www.dynamodbbook.com/)
- **Off-by-one** ([newsletter](https://offbynone.io/)): I signed up for two AWS related newsletters but also had a look through the backlog of this newsletter by [Jeremy Daly](https://twitter.com/jeremy_daly). It's a great way to learn more about the vast and growing ecosystem of serverless.
- **Last Week in AWS** ([newsletter](https://www.lastweekinaws.com/)): not specifically focused on the developer side of AWS but a good all-round weekly newsletter that keep you informed about what's new in AWS.
- **Serverless Chats** ([podcast](https://www.serverlesschats.com/episodes/)): a very informative but sometimes highly technical podcast from Jeremy Daly.
- **Real World Serverless** ([podcast](https://theburningmonk.com/2020/03/announcing-the-new-real-world-serverless-podcast/)): a podcast by Yan, who is an AWS Hero who specialises in everything related to serverless. Contains lots of very good examples of serverless implementations from various companies.
