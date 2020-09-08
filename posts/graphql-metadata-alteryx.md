---
title: Tableau Metadata API, GraphQL and how to get data with Alteryx - Part Two
date: "2020-02-21"
template: post
draft: false
description: In late 2019 Tableau released the Metadata API. This is a new API that allows you to query assets and metadata about your Tableau systems. It allows you to track lineage, do impact analysis and find content on your server. In this second blog post I discuss how to query the GraphQL API and how to use Alteryx get get data out of the API is.
category: Alteryx
socialImage: https://res.cloudinary.com/dmim37dbf/image/upload/v1580493179/graphql-blog/Part_Two.png
tags:
  - tableau
  - alteryx
  - graphql
---

_This is part two of a two-part blog series about the new Tableau Metadata API. I think it's very important that before you start using this new API you should have some basic understanding of the concepts of REST, GraphQL and of metadata. You can find the first part [here](/posts/graphql-metadata-tableau/) where I discuss these topics and in this blog post I will explain how you can use Alteryx to connect to this API._

![https://res.cloudinary.com/dmim37dbf/image/upload/v1580493179/graphql-blog/Part_Two.png](https://res.cloudinary.com/dmim37dbf/image/upload/v1580493179/graphql-blog/Part_Two.png)

Alteryx and Tableau are two no-code tools that seamlessly work together. Almost every project that I start working on in Tableau has some sort of data preparation element to it which I often do in Alteryx. These are also the two main tools we teach in our [Dataschool](https://www.thedataschool.co.uk/). Besides being extremely good with ETL, Alteryx also has the ability to connect and query web services. What this means is that you don't need a coding background to query, send or post data to APIs. These types of actions are often perceived as advanced, and only limited to those that have a vast amount of experience with designing and querying APIs. In this blog post I want to take a look at a new API that was launched by the Tableau Developer team last year: the **Metadata API**. This is part two of this blog series and in this post you are going to learn how to connect to this API with Alteryx.

You can download the workflow that I use in the blog post [here](https://github.com/andre347/alteryx-metadata-api)

![https://res.cloudinary.com/dmim37dbf/image/upload/v1580400773/graphql-blog/Screenshot_2020-01-30_at_16.11.33.png](https://res.cloudinary.com/dmim37dbf/image/upload/v1580400773/graphql-blog/Screenshot_2020-01-30_at_16.11.33.png)_The completed workflow_

## What is the authentication flow for this API?

There are two ways of accessing the Metadata API. The **first** one is through an interactive query-tool. This tool is called GraphiQL and you can access it through the browser when you are already signed in to your Tableau Server or Online instance. The **second** way is programmatically. For this authentication method you need to acquire an authentication token. In this blog post we are focussing on the second option. We are going to use Alteryx to authenticate, followed by sending a GraphQL query to the API. If you want to learn option one, how to use the GraphiQL tool, then I would suggest watching the video below. In this video I explain more about the Metadata API, what GraphQL is and how the GraphiQL tool works in the browser.

<center>
<iframe width="100%" height="415" src="https://www.youtube.com/embed/JD0uQf0zs5Y" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</center>

## How to acquire an authentication token with Alteryx?

You need an authentication token for each request you make to the Metadata API. This token basically tells Tableau Server or Tableau Online who you are and it then verifies your identity. There are two ways to obtain an authentication token. The first one is to generate a personal access token. If you want to learn more about these types of tokens then read [my previous blog post](https://andredevries.dev/posts/personal-access-tokens-tableau/) on this topic. The second one is to use your username and password. For security reasons I would not suggest using the latter option.

There is a quick way of obtaining a token by using the Publish to Tableau Server tool in Alteryx. But there's no fun in that. Let's do this authentication ourselves with just a few tools. If you're impatient then you can download the completed workflow here.

We start with a text input tool to specify the server url, api version (at least 3.6), personal access token name and the personal access token secret and the site id.

![https://res.cloudinary.com/dmim37dbf/image/upload/v1581601692/graphql-blog/serverurl.png](https://res.cloudinary.com/dmim37dbf/image/upload/v1581601692/graphql-blog/serverurl.png)

![https://res.cloudinary.com/dmim37dbf/image/upload/v1581601695/graphql-blog/token.png](https://res.cloudinary.com/dmim37dbf/image/upload/v1581601695/graphql-blog/token.png)

I split these into two text inputs. But you can also do this in one.

Next step is to construct the signin url like so:

![https://res.cloudinary.com/dmim37dbf/image/upload/v1581601807/graphql-blog/server_rul_siging.png](https://res.cloudinary.com/dmim37dbf/image/upload/v1581601807/graphql-blog/server_rul_siging.png)

After this you want to create the login body. I used a JSON payload in this example but you can also construct this as XML. The login body contains the payload that you send to Tableau Server with the Personal Access Token Name and the Personal Access Token Secret. You need to construct it as follows:

![https://res.cloudinary.com/dmim37dbf/image/upload/v1581602663/graphql-blog/Screenshot_2020-02-13_at_14.01.01.png](https://res.cloudinary.com/dmim37dbf/image/upload/v1581602663/graphql-blog/Screenshot_2020-02-13_at_14.01.01.png)

For those that want to copy paste:

    '{
        "credentials": {
        "personalAccessTokenName": '+ '"' + [personalAccessTokenName]+ '"'+',
        "personalAccessTokenSecret":
        '+ '"' + [personalAccessTokenSecret] + '"'+',
        "site": {
        "contentUrl": '+ '"' + [contentUrl] + '"'+'
            }
        }
    }'

![https://res.cloudinary.com/dmim37dbf/image/upload/v1581602530/graphql-blog/body-payload.png](https://res.cloudinary.com/dmim37dbf/image/upload/v1581602530/graphql-blog/body-payload.png)

Now you can send a post request to the login url and it should return you an Authentication Token. Make sure you configure the Headers in the Download tool so that the Content-Type is 'application/json'. The authentication token that you receive from Tableau needs to be add to each request you make to the Metadata API. This needs to be added to the header and set to 'X-Tableau-Auth'. Once that's done we can take a look at how to make a request to the Metadata API with Alteryx.

## How to make queries to the Metadata API?

First of all, you need to make sure you are using Tableau Server or Online version 2019.3 or later. The GraphQL endpoint is enabled by default in Tableau Online. For Tableau Server you need to be, first of all a server admin, and run the 'tsm maintenance metadata-services enable' command. In comparison with REST, there is only one API endpoint. Rather than requesting data from this endpoint, you send data to it. If you have not seen this in action then I would recommend taking a look at the video I posted at the beginning of this blogpost.

In order to make a request to the GraphQL endpoint you need to append '/api/metadata/graphql' to the end of your base Tableau Server URL. For Tableau Online you need to go to the base url + '[/metadata/graphiql/](https://10ax.online.tableau.com/metadata/graphiql/)'

## How to construct a query in Alteryx

If you've watched the video I posted in the beginning of this blogpost then you would have seen that you need to construct a query in JSON format. I always find this a bit tricky to do in Alteryx because you need to make sure you have your single or double quotes in the right place. Unfortunately, there is not such a thing as [JSON.stringify](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) in Alteryx. If you download the workflow you can see I already added two queries in the formula tool called 'Query Formula'. The first one is structured like so:

![queryimage](https://res.cloudinary.com/dmim37dbf/image/upload/v1582286102/graphql-blog/Screenshot_2020-02-21_at_11.54.58.png)

This is how the query look in GraphiQL:

![graphiqlimage](https://res.cloudinary.com/dmim37dbf/image/upload/v1582285920/graphql-blog/Screenshot_2020-02-21_at_11.51.47.png)

This query gets the datasources on the site that you are logged in, the IDs of these data sources, the last time the extract was refreshes and the actual name of the datasources. If you think about what the so-called benefits are for using GraphQL over REST here is that with the Tableau REST API you would have to make multiple requests to different endpoints to get the same data. In GraphQL we just have one endpoint and we get the data back that we request and nothing more.

This little query is of course just an example and you can copy and run any of the queries you create in GraphiQL (the in-browser tool that I used in the video). Make sure that you then re-configure the cross-tab tool after the JSON Parse tool. Because it depends on how nested your query is before you can actually parse it.

## In conclusion

I think the Tableau Metadata API has a lot of potential. In these two blog posts we only discussed making queries to the API, but GraphQL also supports mutations. Which you could compare to making 'POST' or 'PUT' request in REST APIs. This is an area of the Metadata API I still have to discover.
