---
title: Google Sheets as a Backend with Next.js
date: 2021/07/22
template: post
draft: false
description: With the data fetching strategies in Next.js you can turn almost any database into your own backend. In this blog post you will learn how I quickly and securely used Google Sheets as a CMS for a static site built with Next.js.
category: "JavaScript"
socialImage: https://res.cloudinary.com/dmim37dbf/image/upload/v1627151231/Misc/blog-next-googlesheet.png
tags:
  - javascript
  - reactjs
---

A while ago (mid-2020) a colleague of mine asked me whether we could create a nice _'landing page with a video grid'_ when a new version of [Tableau](tableau.com/) landed. That way we could give a nice and integrated learning experience for our users without them having to navigate YouTube and the YouTube algorithm. My initial reaction was 'Yes of course! But we need some kind of database to persist the data and metadata about the videos'. On top of that, we also needed the database to be easily accessible and adjustable. Potentially a cumbersome process. Around this time [Next.js](nextjs.org/), my favourite React framework, was [upgraded to version 9.3](https://nextjs.org/blog/next-9-3). With that release it actually became even easier to create a statically generated site that was fast, SEO optimised and could be updated quickly. And that was also when we decided to use [Google Sheets](https://www.google.com/sheets/about/) as a database - something I've always discouraged customers to do.

Since I built that website, you can find it [here](https://videos.theinformationlab.io/), I've created many applications with Next.js so I want to share how I built it and more importantly how easy it is to integrate Google Sheets as your data provider. The beauty of Next.js is that, while I used Google Sheets, you can connect to any database and use that as the data layer in your application. In fact, you can also use static markdown files to render blog posts - that's how I built the website on which you are reading this.

## Next.js

For those that are new to Next.js - it is a React framework that puts the developer experience first. It allows you to immediately jump into writing React without having to painfully set up your configuration. Even though for this project I did not use TypeScript, you can enable this by running [a simple command](https://nextjs.org/docs/basic-features/typescript) and you are off to the races. More about that in maybe a future blog post.

![https://res.cloudinary.com/dmim37dbf/image/upload/v1627148028/Misc/video-landing-page.gif
](https://res.cloudinary.com/dmim37dbf/image/upload/v1627148028/Misc/video-landing-page.gif)

## Setting up Google Sheets

If you take a look at the [website](https://videos.theinformationlab.io/) you can see a rather simple grid of videos. However, those videos were created and recorded by different people and at different points in time. The data for those video cards come from a Google Sheet, which was the easiest way for everyone to update a shared document.

You need to have a few things in place for using Google Sheets as your database/CMS:

- A Google account
- A Google Sheet + sheet ID (you get this from the URL)
- Service Account - this connects as a specific "bot" user-generated by Google for your application. Info for setting this up can be found [here](https://theoephraim.github.io/node-google-spreadsheet/#/getting-started/authentication?id=service-account)
- A clientsecret JSON file, which you should have generated by now if you followed the instructions in the previous point

## getStaticProps

Once you have generated the clientsecret.json file you can move to your Next.js project and implement the integration. The easiest way to start one is to use 'create-next-app' by running:

```bash
npx create-next-app
# or
yarn create next-app
```

As mentioned in the introduction, Next.js 9.3 gave us some new APIs for [data fetching](https://nextjs.org/docs/basic-features/data-fetching). Those methods give you as the developer complete freedom if you want to Statically generate your site, Server render the site or use Client side rendering. What is even better, is that you can choose per page which data fetching method you want to use. If you want to dive deeper into these data fetching strategies then I would recommend reading [this blog post](https://www.smashingmagazine.com/2021/04/incremental-static-regeneration-nextjs/) by [Lee Robinson](https://twitter.com/leeerob) about statically rendering pages. In this video page, I only use a method called 'getStaticProps'. Next.js then pre-renders this page at build time using the data returned by the getStaticProps method. As seen in the [official docs:](https://nextjs.org/docs/basic-features/data-fetching#getstaticprops-static-generation)

```jsx
export async function getStaticProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  };
}
```

## getStaticProps & Google Sheets

We now know that whatever props are being returned by this getStaticProps function can be used by your page component. This means that the props we need to return are the rows in our Google Sheet. In my instance, every row is one video. To communicate with the Google Sheets API I used an npm package called ['google-spreadsheet'](https://www.npmjs.com/package/google-spreadsheet). Install it with npm or yarn:

```bash
npm i google-spreadsheet
# or
yarn add google-spreadsheet
```

I created a separate file from which I export a function called **getVideoData()** - this function makes the call to the Google Sheets API and returns the data for the Sheet you have specified in* new GoogleSpreadsheet(yourSheetId)*. Authentication via the Google Sheets API is handled by the credentials from the 'clientsecret.json' file. Because getStaticProps runs at build time you do not have to worry about potentially exposing these secrets to the public.

```js
const { GoogleSpreadsheet } = require("google-spreadsheet");
// credentials you have generated when creating the service account. TIP: DO NOT check this into your Git repo and it to your .gitignore file
const creds = require("../clientsecret.json");

// Create a document object using the ID of the spreadsheet - obtained from its URL.
const doc = new GoogleSpreadsheet("yourSheetId");

export async function getVideoData() {
  try {
    // google sheets
    await doc.useServiceAccountAuth(creds);
    await doc.loadInfo(); // loads document properties and worksheets
    const sheet = doc.sheetsByIndex[0]; // or use doc.sheetsById[id] -- get first sheet in the document

    const rows = await sheet.getRows(); // return the rows from the 1st sheet
    const allVideos = rows.map((row) => {
      // return the data for each video (or whatever each row is in your sheet)
      return {
        id: row.Video,
      };
    });
    // this returns the videos
    return allVideos;
  } catch (error) {
    //   log any errors to the console
    console.log(error);
  }
}
```

I imported this file into the index page. This is also the page that exports this 'getStaticProps' function. One thing to note here is that only page components can use these data fetching APIs. Next.js will throw you an error message if you are trying to use these methods outside of a page component.

```js
export async function getStaticProps() {
  // Get external data from the file system, API, DB, etc.
  const data = await getVideoData();

  // The value of the `props` key will be
  //  passed to the `Home` component
  return {
    props: { data },
  };
}
```

## Update the page

There was no need to dynamically update the content of this page for our use case. However, if it was, then that would have been super easy to do in Next.js. The only thing to update is the object that is being returned by _getStaticProps_ and add a key of 'revalidate' and an amount in seconds after which page re-generation can occur. This is super useful if your Google Sheets gets updated regularly. There is no need to rebuild your site manually, Next.js will handle that for you in the background! This is called **'incremental static regeneration'**. Quite a mouthful!

```js
export async function getStaticProps() {
  // Get external data from the file system, API, DB, etc.
  const data = await getVideoData();

  // The value of the `props` key will be
  //  passed to the `Home` component
  return {
    props: { data },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    // docs: https://nextjs.org/docs/basic-features/data-fetching#incremental-static-regeneration
    revalidate: 10, // In seconds
  };
}
```