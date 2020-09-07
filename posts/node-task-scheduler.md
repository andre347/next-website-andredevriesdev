---
title: "How to create a Task Scheduler in NodeJS"
date: "2019-03-15"
template: post
draft: false
description: In this blog post I'm describing how to setup a task for running your node code on a particular schedule.
socialImage: https://res.cloudinary.com/dmim37dbf/image/upload/v1552678763/task_schedule.png
category: "NodeJS"
tags:
  - javascript
  - es6
  - nodejs
---

### Wes Bos posted a really useful [video](https://www.youtube.com/watch?v=rWc0xqroY4U) explaining how to scrape data from the web with NodeJS. In his second [video](https://www.youtube.com/watch?v=9dIHjegGeKo) he explained how to setup a schedule for this particular task. Something I'd never done before in Node so I thought this might come in useful in the future and therefore I should write a quick blog post about it.

![How to create a Task Scheduler in NodeJS](https://res.cloudinary.com/dmim37dbf/image/upload/v1552678763/task_schedule.png)

Whereas in Wes his video he grabs data from his own social media pages, I'm going to create a small app that runs on a schedule and downloads a random image every day at 6PM. I know right, who doesn't want to have a random image popping up on his or her disk every day?!

A few things we need to install first:

```javascript
    // create dir, go into it and install packages
    mkdir image-downloader && cd image-downloader &&
    npm i node-cron node-fetch esm
```

A quick break down of what you've just installed:

1. **node-cron**: this is the package for the task scheduler. It allows you to setup schedules that automatically perform something (often executes a function).
2. **node-fetch**: a way to use the fetch api. Which is a native browser API - but we don't have a browser when we use node. You can also use another package here. Axios is very popular one. It just allows you to download the content behind a url. Typically you use this for connecting to APIs or scraping the web.
3. **esm**: I had not used this one before but it's super useful. It allows you to write your code like you'd do in client side JavaScript such as in Vue or React. Which means you have access to things like import / exports. To enable this esm you have to install it and then add it to your run script. In my package.json file I added this line as the 'start' script:

```javascript
    "scripts": {
        "start": "node -r esm index.js"
      },
```

You could then run this script by doing `npm run start`.

## Create downloader

Now we got the necessary packages installed it's time to create the first file in which we'll just fetch one image: fetch.js

```javascript
// fetch.js

import fetch from "node-fetch";
import fs from "fs";

// create a function that grabs a random image

const fetchingData = async () => {
  const res = await fetch("https://picsum.photos/200?random");
  const date = Date.now();
  const dest = fs.createWriteStream(`./image-${date}.png`);
  res.body.pipe(dest);
};

// export the function so it can be used in the index.js file

export default fetchingData;
```

In order to get a random picture each time you execute this script, I use [Picsum](https://picsum.photos/). This website allows you to generate a random image with a fixed width and height. You can append those dimensions to the url. I also create a variable with the current date. This date will then be appended to the file name and prevents the files from being overwritten. Because we're working with promises here I'm using async/await.

If you want to test this file you can run it with `node -r esm fetch.js`

## Setup a schedule

Next you want to create an index.js file. This will be the main entry file and this one contains the node-cron function:

```javascript
import cron from "node-cron";

cron.schedule("* * * * *", () => {
  console.log(`this message logs every minute`);
});
```

This is a very small app which if you execute it will log a message to the console. This message will be repeated every minute. Cool, but not very useful. Let's add our image fetcher by importing it. The index.js file will then look like so:

```javascript
import cron from "node-cron";
import fetchingData from "./fetch";

cron.schedule("* * * * *", () => {
  console.log(`one minute passed, image downloaded`);
  fetchingData();
});
```

However, this will run the image downloader every minute. We can change the cron job by changing the first parameter that we're adding into the schedule function. The five stars you see mean that the function will run every minute. You can modify this by following this (taken from [here](https://github.com/node-cron/node-cron)):

     # ┌────────────── second (optional)
     # │ ┌──────────── minute
     # │ │ ┌────────── hour
     # │ │ │ ┌──────── day of month
     # │ │ │ │ ┌────── month
     # │ │ │ │ │ ┌──── day of week
     # │ │ │ │ │ │
     # │ │ │ │ │ │
     # * * * * * *

At first, I didn't really understand what this meant. After a bit of Googling I found the following website that was really useful as a cheatsheet; the [crontabguru](https://crontab.guru/)

This means you can setup a schedule for literally any time. Maybe once a year? Or every Tuesday at 8am in January and July. There's really no limitation. I continued by setting up a schedule to make it download every day at 6PM by setting it to this: `0 18 * * *`

The complete and final `index.js` file is then:

```javascript
import cron from "node-cron";
import fetchingData from "./fetch";

cron.schedule("0 18 * * *", () => {
  console.log(`one minute passed, image downloaded`);
  fetchingData();
});
```

Want to take a look at the full app or clone it? Head over to my Github [here](https://github.com/andre347/nodejs-task-scheduling)!
