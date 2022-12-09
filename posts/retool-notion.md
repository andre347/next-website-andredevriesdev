---
tags:
  - retool
  - notion
date: "2022-12-08"
template: post
draft: false
socialImage: https://res.cloudinary.com/dmim37dbf/image/upload/v1670603607/retool-notion-blog/og-image-notion-retool.png
title: "Step-by-Step Guide: Configuring Notion API for Retool"
category: Retool
description: Are you looking to connect Notion to Retool, but not sure where to start? In this blog post, I'll show you how to use the Notion API and set up a generic REST API connection in Retool to easily integrate these two powerful tools.
---

![banner](https://res.cloudinary.com/dmim37dbf/image/upload/v1670603607/retool-notion-blog/og-image-notion-retool.png)

Are you looking to connect Notion to [Retool](https://retool.com/), but not sure where to start? In this blog post, I'll show you how to use the [Notion API](https://developers.notion.com/) and set up a [generic REST API connection](https://retool.com/integrations/rest-api) to easily integrate these two powerful tools.

But first, let's talk about why we want to connect these two tools. Notion is a popular productivity and organisation tool that allows users to create and manage their own custom databases and workflows. Retool, on the other hand, is a powerful platform for building custom internal tools and applications. By connecting these two tools, we can easily integrate our Notion data and workflows into our Retool applications, allowing us to automate and streamline our processes even further.

Now, let's get started! Connecting Notion to Retool is easy, and only requires a few simple steps:

1. First, you'll need to obtain a Notion API key. To do this, log in to your Notion account and navigate to the "Integrations" section of the settings page. From here, click on the "Create New Integration" button and give your integration a name. Once you've done this, Notion will generate an API key for you.

2. The next step is to select which content in Notion should be accesible via the integration that you have just setup. In any Notion page you can add an integration. Use the dropdown on the top right, then select `Add Integration` and select the integration you have created in the previous step.

3. Next, open Retool and go to the "Resources" page. Here, you'll want to create a new resource by clicking on the "Create Resource" dropdown. On the next page you have to select the "Generic REST API" from the list of options.

In the resource setup screen, enter the following information:

- Resource Name: This can be anything you like, but I suggest using something descriptive like "Notion API"
- Base URL: [https://api.notion.com/v1](https://api.notion.com/)
- Headers:
  - Authorization: **Bearer yourTokenhere**
  - Content-Type: application/json
  - Notion-Version: 2022-02-22

Once you've entered all of the information, click "Save" to create the resource.

![Retool Notion Setup](https://res.cloudinary.com/dmim37dbf/image/upload/v1670342546/retool-notion-blog/notion-retool-setup.png)

And that's it! You've now successfully connected Notion to Retool using the Notion API and a generic REST API connection. You can now easily access your Notion data from within Retool and use it to build custom applications and automate your workflow.

### How to query data from the Notion API?

The Notion API [docs](https://developers.notion.com/) have some good code snippets to get you started with querying databases in Notion. Because we have created this resource as a generic connection we can query any database. All you need is the database or page ID. You can find that in the URL of the Notion page.

```
https://www.notion.so/username/{pageid}?v=
```

In order to query a database in a Retool app you can do the following:

1. Create a new query
2. Select the Resource you created earlier
3. Configure the POST endpoint as `https://api.notion.com/v1/databases/{database_id}/query` - where the first bit up to v1/ should already be provided in your Retool resources
4. Hit save & run

![retoolQuerysetup](https://res.cloudinary.com/dmim37dbf/image/upload/v1670600884/retool-notion-blog/notion_query.png)

### How to parse the API response

The structure of the response body from the Notion API is somewhat complex and you cannot easily drop it into a table component in Retool. You first need to parse out the fields and the values that you want. I have created a [JS transformer](https://docs.retool.com/docs/transformers) in Retool that contains a function that parses the response. You provide an array of field names that you want to extract from the Notion database, and it will return an array of objects containing these fields.

```js
// function to destructure each object / row in a database
// currently only parses data types of text, number, checkbox, email, url, date & select
function destructureObject(obj, props) {
 const values = {};
  const simpleTypes = ["number", "checkbox", "email", "url", "date", "phone_number"];
  props.forEach((prop) => {
    const { type } = obj[prop];
    if (simpleTypes.includes(type)) {
      return (values[prop] = obj[prop][obj[prop]?.type]);
    }
    if (type === "select") {
      return (values[prop] = obj[prop][obj[prop].type]?.name);
    }
    return (values[prop] = obj[prop][obj[prop].type][0]?.plain_text);
  });
  return values;
}

// data from the query to the Notion API
const notionData = {{ getNotionDatabaseData.data.results}}

// Columns in Notion database: Name, City, Sales, Checkbox, Email & URL
const normalisedData = notionData.map((item) => destructureObject(item.properties, [ "Name",
    "City",
    "Sales",
    "Checkbox",
    "Email",
    "URL",
    ]))

return normalisedData
```

You can re-use this transformer and provide a list of column headers in the array that returns the normalisedData. In this example I had a database with "Name", "Sales", "Checkbox", "Email and "URL". You can then use this transformer as the data in your Retool components.
