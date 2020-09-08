---
title: How to integrate Alteryx with Slack
date: "2019-10-26"
template: post
draft: false
description: In this blog post I will explain how you can integrate Alteryx with Slack. This integration means you can interact with your Alteryx Gallery from within your Slack environment. This example includes slash commands to find a list of workflows in your Gallery and the ability to execute a workflow with said slash command.
socialImage: https://res.cloudinary.com/dmim37dbf/image/upload/v1572105634/slack-alteryx-blog-post/alteryx-slack.png
tags:
  - alteryx
  - javascript
  - nodejs
category: Alteryx
---

### Many businesses and teams use [Slack](https://slack.com/intl/en-gb/) as their primary means of communication. Slack offers lots of options to extend the tool, you could for example integrate Twitter or have a channel where you can see all files on a Google Drive. These integrations are great because you have one central place where you can work. In this blog post I will explain how I integrated the Alteryx Gallery with Slack so you are able to run published workflows and analytic apps from within this communication platform.

![](https://res.cloudinary.com/dmim37dbf/image/upload/v1572107313/slack-alteryx-blog-post/slacktoalteryx.gif)

## What & Why?

The idea to integrate Alteryx and Slack isn't from myself. During Inspire Europe 2019 I attended a great talk by [Daniel Brun](https://twitter.com/DanielPBrun) from [Inviso](https://inviso.dk) about utilising Alteryx's Gallery APIs. Having used these myself for a couple of projects (including being able to run workflows in Tableau) I found his demonstration of a Slack integration really interesting. One of the cool things he showed was how you could use Slack to 'communicate' with the Gallery API. As we don't use Slack for our internal communication at work - we use [Convo](https://convo.com) - I first had to learn a bit about the API possibilities of Slack and then see how I could combine this with Alteryx.

![](https://res.cloudinary.com/dmim37dbf/image/upload/v1572106115/slack-alteryx-blog-post/Screenshot_2019-10-26_at_17.07.52.png)

Slack has a lot of options for integrating external apps and tools - you can read more about those [here](https://api.slack.com). The one that I choose for this little project was the ability to work with Alteryx through 'slash commands'. These are little functions you can run by using the forward slash followed by a predefined keyword. An example of an in-build slash command is the '/away' to indicate to your team members that you're away from your keyboard. You also have other custom integrations for polls where you can type '/poll' followed by some options for the rest of the team to vote on.

## How?

I only created this as a proof of concept where the web server that powers the Slack integration runs 'locally' on my machine. However, you could easily adjust the code slightly to make it run on your own web server so that everyone can use it. I would highly recommend looking into AWS Lambda functions as a way to host this application. These serverless functions are a great way to save on resource costs but it also means you don't need a dedicated server running.

I built this Slack to Alteryx application in NodeJS and used a service called '[ngrok](https://ngrok.com)' to make my locally running server accessible to Slack. The url to your server needs to be publicly accessible to Slack (which your local machine is not of course). Ngrok is a great little utility you can use but please don't use it in production.

## Start here

### **Setting Up Slack**

First you want to create an application in Slack. Head over to [this page](https://api.slack.com/apps/new) to do that. Give your app a name (that's totally up to you and you can change it later), and add it to your workspace of choice. These apps behave the same as people on your team — the app can post messages, add emoji reactions, respond to messages etc.

![](https://res.cloudinary.com/dmim37dbf/image/upload/v1572101447/slack-alteryx-blog-post/firstscreenshot.png)

When you click on your application you can customise it. You want to go to 'Add features and functionality' and click the 'Slash Commands'. You then want to setup your commands. These can be anything - I used /runworkflow for running a specific workflow and /workflowlist to generate a list of workflows on your Alteryx Gallery.

![](https://res.cloudinary.com/dmim37dbf/image/upload/v1572101447/slack-alteryx-blog-post/firstscreenshot.png)

When you create such a command you need to specify a few things:

1. The command - this is up to you
2. The url - this needs to be the url of where your server is running. More about that later. For now just enter a dummy url.
3. A description - some information for the user when they type this command

![](https://res.cloudinary.com/dmim37dbf/image/upload/v1572102839/slack-alteryx-blog-post/editcommand.png)

### Setting up the Alteryx app

Once you've finished with setting up the slash commands in the Slack interface it's time to configure the Alteryx application. I built this part in NodeJS (JavaScript). It's a small server that interacts with the Alteryx Subscription API. This API allows you to programmatically interact with your Alteryx Gallery. I've published all the code on my Github which you can find [here](https://github.com/andre347/slack-alteryx-integration). Please download/clone it and follow the steps below.

1. Use your terminal / command prompt and navigate to the location where you downloaded the Github repository
2. Make sure you have NodeJS installed - you can download the latest version here
3. In your terminal / command prompt run `npm install` to install all the dependencies
4. Once everything has been installed run `npm run dev` to start the development server. This will start a server on [localhost](http://localhost) port 1234.

The server that you just started has two POST routes. What that means is that these routes wait for something that they can receive and then some code will execute. These two routes are /alteryx and /workflows. The former is the one that listens for a slash command on /runworkflow and the latter for a the command /workflowlist. However, your integration doesn't work just yet. You also need to enter the Gallery URL and the keys of your Alteryx Gallery into the keys.js file. These can be found in your Admin Settings on the Gallery. After you entered these keys your server should restart itself. I built this for a quick proof of concept which means that you need to enter the workflow ID that you like to run also in this keys.js file. However, you can easily modify the code so that the user in Slack can just enter any workflow ID and it will run specifically that one. You can find the workflow IDs by looking at the last part of the url of a workflow.

5. Download ngrok so you can make your [localhost](http://localhost) public. _Please don't use this in production_

6. In order to run ngrok you need to navigate to the folder where you downloaded it and run `./ngrok http 1234`

7. This should make port 1234 open to the internet and allows Slack to send POST requests to your server.

8. Copy the URL (either HTTP or HTTPS should work) and go back into the configuration window of your slash commands. Now replace the dummy url you specified with the URL that ngrok gave you. Make sure you add the correct route to the url. So it would be url + '/alteryx' for the runworkflow slash command, and url + '/workflows' for the /workflowlist.

Now you should be able to get back into Slack and use these commands. In order to generate a list of workflows you have to say /workflowlist (or however you specified it in the setup). You should also add a number after the slash command to specify how many workflow you'd like to see. For running workflows you run /runworkflow and it runs the workflow which you specified in the keys.js file.

### Next Steps

As mentioned previously, this was created in a few hours for a little proof of concept but I think this can be quite powerful. This gives you the ability to work with Alteryx workflows from within your Slack workspace. For example, if you quickly want to run a workflow in order to check some numbers or to generate an output that you want to analyse.

You actually don't want to run this little web server on your local machine. I recommend to deploy this on AWS and to use AWS Lambda functions. Let me know if you are interested in such a setup and we can have a chat.
