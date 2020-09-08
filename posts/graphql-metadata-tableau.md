---
title: Tableau Metadata API, GraphQL and how to get data with Alteryx - Part One
date: "2020-02-20"
template: post
draft: false
description: In late 2019 Tableau released the Metadata API. This is a new API that allows you to query assets and metadata about your Tableau systems. It allows you to track lineage, do impact analysis and find content on your server. In this first blog post I discuss what this new API can do, how it works and what GraphQL is. In the second post I will explain how to use Alteryx to connect and query the API.
category: Tableau
socialImage: https://res.cloudinary.com/dmim37dbf/image/upload/v1580493179/graphql-blog/Part_One.png
tags:
  - tableau
  - alteryx
  - graphql
---

_This is part one of a two-part blog series about the new Tableau Metadata API. I think it's very important that before you start using this new API you should have some basic understanding of the concepts of REST, GraphQL and of metadata. In this first part I discuss these topics and in the next blog post I will explain how you can use Alteryx to connect to this API._

![https://res.cloudinary.com/dmim37dbf/image/upload/v1580493179/graphql-blog/Part_One.png](https://res.cloudinary.com/dmim37dbf/image/upload/v1580493179/graphql-blog/Part_One.png)

Alteryx and Tableau are two no-code tools that seamlessly work together. Almost every project that I start working on in Tableau has some sort of data preparation element to it which I often do in Alteryx. These are also the two main tools we teach in our [Dataschool](https://www.thedataschool.co.uk/). Besides being extremely good with ETL, Alteryx also has the ability to connect and query web services. What this means is that you don't need a coding background to query, send or post data to APIs. These types of actions are often perceived as advanced, and only limited to those that have a vast amount of experience with designing and querying APIs. In this blog post I want to take a look at a new API that was launched by the Tableau Developer team last year: the **Metadata API**. First I'm going to do discuss what metadata is, followed by a piece on GraphQL. If you immediately want to know how to use Alteryx to connect to this new API then I would click on [this link](/posts/graphql-metadata-alteryx/), which will send you to Part Two.

## What is the Metadata API?

The Tableau Metadata API enables you to discover and query assets and metadata indexed by the [Tableau Catalog](https://www.tableau.com/en-gb/products/add-ons/catalog). There is no additional cost to using this API. The only requirement is that you need to be on Tableau Server version 2019.3 or later. Some the tasks that you can perform are:

- Discover data published to your server or online instance
- Track lineage
- Perform impact analysis

Metadata is basically data about your data. What that means is that the information that you can get out of this API is all about the assets that are on your server. You have three types of assets through this API (source: [Tableau Metadata API Documentation](https://help.tableau.com/current/api/metadata_api/en-us/docs/meta_api_model.html)):

1. General Tableau Content
2. Tableau Server / Online Specific content
3. External assets that are linked to Tableau content

### 1) General Tableau Content

Content unique to the Tableau platform, this includes:

- Data sources - both published and embedded
- Workbooks
- Sheets - including dashboards and stories
- Fields: calculated, column - as they relate to the data source, group, bin, set, hierarchy, combined, and combined set
- Filters: data source
- Parameters
- Flows

### 2) Tableau Online and Tableau Server specific content

Content which you can only find on Server or Online:

- Sites
- Projects
- Users
- Certifications and certifiers
- Data quality warnings and messages

### 3) External assets associated with Tableau content

The Metadata API treats information about any data that comes from outside of the Tableau environment as external assets. External assets include the following:

- Databases - includes local files, remote connections to servers, and web data connectors (WDCs)
- Tables - includes queries (custom SQL)

If you have used Tableau Server for a while you might think, why is this special because we already have the Tableau Server Repository (Postgres database) and the REST API? Well, first of all, you can get a lot more information from the new Metadata API. Tableau has a few more databases that power the server, but generally these are not really open to everyone (unlike the Postgres database). These are now also surfaced through this API. Secondly, you now have an API interface to query this data. The Postgres database on the other hand, is a database. Which means that you have to do fairly complex table joining to get to your desired result. With the Metadata API you get Tableau content and assets. The connection between the two is called a 'relationship'. The way this relationship is exposed to you is through GraphQL - which is a query language for APIs. Let's take a look at this concept next.

## A little bit of history

The Metadata API is a different type of API then you might be used to. At the time of writing there are basically two API protocols that are extremely popular on the web: REST and GraphQL. REST has been around for a long time and the _de facto_ architecture for communicating and sending data on the internet. It's based on the idea that you use CRUD operations (Create, Read, Update and Delete) over HTTP. These verbs allow you to get or post data to services on the web. However, GraphQL is gaining a lot more traction in the last two or so years. This protocol, created and subsequently open-sourced by [Facebook](https://graphql.org/), tackles a lot of the flaws of REST and gives both the creator and the user of GraphQL based APIs a more seamless experience. GraphQL is seen as a query language for APIs that describes _how to ask for and return only the data that you are interested in_. It's using a type system that you define. You are also not limited to a particular database technology.

## GraphQL vs REST

REST has been the most common type of API structure in the last decade. REST has a predefined schema through multiple endpoints. Often you need to make multiple API requests to get the data that you require. You have to make multiple 'trips' to get the data you want. Let's look at an example.

Imagine the website on which you read this blog. All the blog posts are stored in some kind of database with multiple authors. In REST you would have two endpoints, one for the blog posts, and one for the authors. You then first need to grab the authors list in order to find all the blog posts for one author. The returned data and schema (columns) are predefined by the creator of the endpoints. This means your query could return data that you are not interested in. With GraphQL on the other hand, you just have one endpoint. You don't query this endpoint _for all the data_, you create your own schema and post that to this endpoint. You then exactly know what data you will get back. The query that you write is basically the JSON structure that you also get back from the API. Thus, the main difference between GraphQL and REST is that REST returns a fixed data structure, whilst GraphQL has a more flexible approach.

If you want to learn more about GraphQL then I would recommend watching the YouTube video below from Bytesized. This video really describes and explores GraphQL and the concepts of a query, mutation and resolvers. This latter two concepts are not necessarily needed for Tableau's Medata API but they help you with further understanding GraphQL.

<center>
<iframe width="100%" height="415" src="https://www.youtube.com/embed/HWE1zlhQiT8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</center>

## What's next?

In the next blog post I'm going to explain how to write queries and how to interact with the Metadata API. As this is a GraphQL based API it is a little bit different than REST APIs. After that we're going to use Alteryx to grab data through the API.
