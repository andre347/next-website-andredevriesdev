---
title: "How to install TailwindCSS?"
date: "2020-01-01"
template: post
draft: false
description: In the previous blog post I explained what TailwindCSS is. In this post we will install the framework and discuss the various ways you can actually install it. This might not be one of the most exciting blog post out there, but it's more of an exercise and a resource for myself.
category: "CSS"
socialImage: https://res.cloudinary.com/dmim37dbf/image/upload/v1577894799/tailwind/How_to_install.png
tags:
  - css
  - javascript
---

![How to install tailwindcss](https://res.cloudinary.com/dmim37dbf/image/upload/v1577894799/tailwind/How_to_install.png)

### Getting started with Tailwind..

There are a few ways to get started with TailwindCSS. The quickest is by using a CDN link. CDN stands for Content Delivery Network and is a way to deliver web pages and packages to users. A CDN link is just a normal URL which you add to your HTML file and it contains the code that is being loaded and run when you add it to your project. Therefore this is the fastest way to install Tailwind in your project. Copy the following bit of text and add it to the _HEAD_ of your HTML file:

    <link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet">

You basically load the full library when you use a CDN. However, as the [official documentation](https://tailwindcss.com/docs/installation/#using-tailwind-via-cdn) states you have a few things that you have to take into account when you use the CDN link:

- You can't customise Tailwind's default theme
- You can't install third-party plugins
- You can't enable features like group-hover
- You can't use any directives like @apply, @variants, etc.

For these reasons, and the fact that you load a complete library but you probably only use a handful of classes, I would only use the CDN link for quick mockups or small projects. If you want to use Tailwind in a bigger project then I would follow the steps below.

### Install prerequisites first..

The following set of instructions is relevant for simple setups with no frontend framework (read React, Vue or Svelte). I'll write another blog post a bit later in which I explain how to use Tailwind in a React project.

Before you start _please_ install the following (you can skip these steps if you already have them):

- [NodeJS](https://nodejs.org/en/) (and npm)
- [VS Code](https://code.visualstudio.com/)
- [Tailwind CSS Intellisense for intelligent auto-completion in VS Code](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)
- [CSS in HTML Autocomplete Extension](https://marketplace.visualstudio.com/items?itemName=ecmel.vscode-html-css) for VS Code
- [Live Server extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) VS Code

If you've done a bit of coding in the past then you probably have almost the full list installed on your machine already. In order to use Tailwind you need to follow a few more steps. I've listed them below. However, if you don't want to follow the instructions below you can download a starter project that I created from [this repository](https://github.com/andre347/tailwind-starter). You can either clone or download the repo. Then you need to install the dependencies (by running 'npm install'). After that you can open the HTML file in the public folder with the live server extension that you installed. The benefit of this extension is that it auto-reloads your browser when you make a change in your code.

If you want to setup your own project then keep on reading.

### Project Setup for Tailwind..

Open up your Terminal or Command Prompt and run the following commands:

    $ mkdir my-first-tailwind-project && cd my-first-tailwind-project
    $ npm init —y
    $ npm i tailwindcss postcss-cli autoprefixer
    $ npx tailwind init
    $ touch postcss.config.js

After you've ran all of the commands you should have a directory called 'my-first-tailwind-project'. In here you have a bunch of files. The last command you ran is the creation of a postcss config file. [PostCSS](https://github.com/postcss/postcss) is a pretty nifty tool and has various purposes. One of those is that it allows you to use modern day CSS whilst still being able to support older browsers. It got plenty of other use cases but what we use it for in a Tailwind project is that it allows us to use Tailwind as a plugin. Another plugin that we installed is the autoprefixer package. This library also helps with cross-browser support. You can learn more about this package on its [Github page](https://github.com/postcss/autoprefixer).

Open up the postcss.config.js file and copy paste the following code:

    module.exports = {plugins: [require("tailwindcss"), require("autoprefixer")]};

The next step is to create a build script in your package.json file. Copy the following line into this file:

    "build": "postcss css/tailwind.css -o public/css/tailwind.css"

You don't have to run this command yet. First create a tailwind.css file. Do this outside of your public folder. This means your blank tailwind.css file is now located in css/tailwind.css. Add the following three lines in this file:

    *@tailwind* base;

    *@tailwind* components;

    *@tailwind* utilities;

What will happen at runtime is that these lines will be turned into CSS by Tailwind.

We're almost done. Now you can run 'npm run build'. This will create a css folder inside a public folder. This is the big tailwind.css file. The very last steps is to create an index.html file in which you reference this newly created tailwind.css file You can copy paste the following to complete the installation:

    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>Tailwind Example</title>
        <link rel="stylesheet" href="./css/tailwind.css" />
      </head>
      <body>
        <h1 class="text-4xl text-blue-500 text-center font-bold">
          Hello from Tailwind!
        </h1>
      </body>
    </html>

You can now open the HTML file in the browser, or if you want hot reloading when you make code changes you should right click the HTML file and open it with the live server extension.

If you paid close attention you might have noticed that we're generating a fairly large CSS file. The [official docs](https://tailwindcss.com/docs/controlling-file-size) also talk about this problem. This file will be loaded on each page load. However, no one really uses this full CSS file. In a future blog post I will discuss how we can reduce the size of this file by utilising a package called PurgeCSS.
