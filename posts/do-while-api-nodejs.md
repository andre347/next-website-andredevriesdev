---
title: How to use a 'do... while' loop for API pagination
date: "2020-02-24"
template: post
draft: false
description: Many APIs provide their data in several pages. In order to grab all of the data of these pages you have to make multiple API requests in a loop. In JavaScript there are multiple ways of writing such a loop. In this blog I take a look at the 'do... while' loop.
category: JavaScript
socialImage: https://res.cloudinary.com/dmim37dbf/image/upload/v1582569379/do-while-blog/do-whileloop.png
tags:
  - javascript
  - nodejs
---

![image](https://res.cloudinary.com/dmim37dbf/image/upload/v1582569379/do-while-blog/do-whileloop.png)

There are various ways of looping in JavaScript. We have the regular 'for' loop, 'for/in', 'for/of' and the regular 'while' loop. Each have their strengths, weaknesses and use cases. By using an example of looping over multiple pages of an API I want to take a look at another type of loop, the **'do... while'** loop.

## The Problem

In my day-to-day job I have to work a lot with APIs. One characteristics of APIs is that they often provide the user with multiple 'pages' of data. There are clear reasons why you want to split up your data into parts. One of them is the resources that it takes to serve up all the data in one API call. Multiple trips might be more efficient and quicker. However, very often we want to have access to all the data in one go. A solution for grabbing all of the data is to loop over all the pages and grab the pieces you are interested in.

An example of a REST API that uses pagination is the Star Wars API. One of my favourite APIs to illustrate said problem. You can find the official documentation [here](https://swapi.co/). Don't worry about rate limits or costs. This API is free to use. I use it in almost all my training sessions.

## The Syntax

Before we're going to implement this recursion we're going to take a look at the syntax of the 'do...while' loop. According to [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/do...while) this type of statement _"creates a loop that executes a specified statement until the test condition evaluates to false. The condition is evaluated after executing the statement, resulting in the specified statement executing at least once."_

The important part of the definition is that this loop executes at least once. Especially with API calls this is useful because you want to check if there resource is available for which you are requesting the data. If there are no more pages then it doesn't continue. A regular 'while' loop on the other hand keeps executing a code block until a condition is met. The syntax for this loop is easier than the do...while loop. But let's take a look at how to create a do... while loop:

```js
// Basic do while loop
// Logs a message to the console
// @andre347_

function doLoop() {
  // create an empty message
  let message = "";
  // we want to log a message 5 times
  let i = 5;
  // execute this code block..
  do {
    message += `The number decreased to ${i} \n`;
    // decrement i in each loop - so 5, 4, 3, 2, 1
    i--;
  } while (i > 0);
  // while i is more than 0 log something to the console
  console.log(message);
}

// make sure we call our function
console.time("Timer");
doLoop();
console.timeEnd("Timer");
```

If you run this with NodeJS (I used node v12 with the experimental flag for modules) you will see a message being logged five times. The message kept on being logged until it ran 5 times. We want to use similar logic for our API pagination. The key of the do... while loop is in the while condition. This code block controls how often a loop will run. Make sure you don't create [infinite loops](https://www.dummies.com/web-design-development/avoid-infinite-loops-javascript/) because that can crash your browser or node environment. These loops are the ones that never finish.

## API Pagination

The Star Wars API contains all kinds of data related to the Star Wars universe. These resources are split into individual endpoints. One of them is '/people' - which contains information of all characters in the movies. When you inspect the first page of this endpoint you see a big object. The top section of this object is useful for the recursion.

```json
{
  "count": 87,
  "next": "https://swapi.co/api/people/?page=2",
  "previous": null,
  "results": [
    {
      "name": "Luke Skywalker",
      "height": "172",
      "mass": "77",
      ...etc
    }
  ]
}
```

This object contains a 'next' property. Which is the next page of data we want to grab in our API call. The logic to stop the loop is to check if there is still a next page. If not, then we got all the data. See below implementation.

```js
async function getPages() {
  // set some variables
  const baseUrl = `https://swapi.co/api/people/?format=json&page=`;
  let page = 1;
  // create empty array where we want to store the people objects for each loop
  let people = [];
  // create a lastResult array which is going to be used to check if there is a next page
  let lastResult = [];
  do {
    // try catch to catch any errors in the async api call
    try {
      // use node-fetch to make api call
      const resp = await fetch(`${baseUrl}${page}`);
      const data = await resp.json();
      lastResult = data;
      data.results.forEach((person) => {
        // destructure the person object and add to array
        const { name, height, films } = person;
        people.push({ name, height, films });
      });
      // increment the page with 1 on each loop
      page++;
    } catch (err) {
      console.error(`Oeps, something is wrong ${err}`);
    }
    // keep running until there's no next page
  } while (lastResult.next !== null);
  // let's log out our new people array
  console.log(people);
}

console.time("Time my API call");
getPages();
console.timeEnd("Time my API call");
```

This should give you a nice array with all the characters (87) and their height plus the movies in which they appeared.

**You can find all the code for this blog post in this [Github repository](https://github.com/andre347/do-while-loop-api)**

Originally posted at [andredevries.dev](https://andredevries.dev/posts/do-while-api-nodejs/)
