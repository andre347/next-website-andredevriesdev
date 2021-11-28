---
title: "Three key trends that will shape the future of the data space"
date: 2021/11/27
template: post
draft: true
description: The data space is a super interesting area to be involved in. Some tools have been around for many years and have defined how we operate and work with data. However, lately we have seen some trends around tooling appear that are worth investigating. In this blog post, I will discuss three key trends that I think will define the future of the data landscape.
category: Data Analytics
socialImage: https://res.cloudinary.com/dmim37dbf/image/upload/c_scale,h_600/v1638043234/data-trend-blog/nick-fewings-zF_pTLx_Dkg-unsplash.jpg
tags:
  - data analytics
---

![direction](https://res.cloudinary.com/dmim37dbf/image/upload/c_scale,h_600/v1638043234/data-trend-blog/nick-fewings-zF_pTLx_Dkg-unsplash.jpg)

I have been working in the 'data space' for almost eight years. During this time I have seen many tools and 'trends' pass by, some more interesting than others. Lately, we have seen the emergence of a really interesting and important movement where data teams are more and more **treating data projects as software engineering projects**.

What I also notice is that in any of the stages of a data project we lack proper standardisation and frameworks. I know this is a bit of a controversial opinion and some of you will disagree. Because, in fact, as a language, we have had SQL for god knows how many years. Same for CRON for scheduling data loads - and there are probably lots of others that I now forget. With these tools, you can build proper production-ready 'data pipelines'. I don't disagree with that statement, but I feel things are changing and we are at a crossroads. It's not necessarily the new tooling that excites me but the _frameworks_ in which these tools operate. Let me expand on that, and in this blog post I want to highlight **three key trends** that I think will define the data space for the next five years (or ten, or not at all - but we'll see).

Before we dive into the key trends that I have seen being popularised in the last 18-24 months, we need to define what I mean by the 'data space' and who is part of it. To me, this comprises anyone that has some kind of role or responsibility for the data that is being actioned upon in their company. This encompasses anyone with a data analytics background to a data engineer or analytics engineer. I am still on the fence if you should add data scientist to this bucket because to me data science plays on a whole different level. The skill-set that these roles warrant is often only taught in universities, especially on a PhD level.

## #1. ETL becomes ELT

Often claimed to be a marketing buzz that is being created by companies who want to become relevant in the data industry. The advent of cloud technologies and the rapid expansion of cloud-native SaaS products has led to many professionals question the traditional 'Extract - Transform - Load' paradigm and are coining ELT over ETL (see where the 'L' shifted to?).

Traditionally if you worked with data you took it from a source system, you 'massaged' it in such a way that it could be analysed straight away after loading it into a database. The main reason for dropping analytics-ready data into a database was because it was often expensive to store lots of data in these systems, and only a handful of people managed and administrated these databases (high cost and low availability of skills). Another reason was that BI tools, which are typically at the end of an ETL pipeline, could only read super clean datasets and struggled with anything that was not 'structured' enough.

However, with the rise of companies and products such as [Snowflake](https://www.snowflake.com), [Databricks](https://databricks.com) and [Google BigQuery](https://cloud.google.com/bigquery) we are letting go of this convention of transforming after load. Nowadays you can drop the raw data that comes from your operational sources directly into the data warehouse. You can then create views and tables on top of this data. This gives both the data engineer and the data analyst flexibility in terms of pulling data for analysis.

## #2. Versioning and Git becomes a first-class citizen in a data project

As I mentioned in the introduction, data analysts and engineers are increasingly adopting concepts from software engineering. For tools in the data space, it has become a necessity to support version control systems such as [git](https://git-scm.com). These systems help with recording changes made to files (diffs) by keeping a track of modifications done to the content of the files. This has been a thing for many years in software projects. You might think why is this important to data? Well, software projects and also data projects are often conducted in a team. I also see this happening to many of our customers. There is more and more collaboration happening - in the reporting side (BI) but also in the data transformation layer. Teams work together on features that need to be implemented in the main product. Git helps with this and it can manage and track all the changes that have been made to the source code. Individual developers can create feature branches that are either fixes to the source code or implementations of new features.

![git](https://res.cloudinary.com/dmim37dbf/image/upload/c_scale,h_600/v1638043726/data-trend-blog/yancy-min-842ofHC6MaI-unsplash.jpg)

A typical data delivery pipeline now uses git to manage and track the source code. Developers can merge their changes/features to the development or test branch before they promote them to the main (production) branch. From my own experience and what I obs at many companies is that they don't apply this deployment pipeline in their data projects yet. There could be various reasons for this. I think it might be because the toolset that they use is not set up for it (looking at you BI tools!) or they need to change their internal culture. I hope that in the future versioning and git becomes part of the 'data culture' that many promote at organisations.

## #3. Testing takes a central place in the data pipeline

This third trend has primarily been popularised by [dbt](https://www.getdbt.com) and is something I increasingly advocate: **testing**. Tests are assertations that are being made about your code and how it behaves. Within web development this is essential. Having proper tests implemented allows you to deploy new features and it makes your code robust from breaking. I believe this trend needs a lot more attention from the major players in the data space. Testing is not only for checking if your values match your expectations. It's also important for instilling trust in your data. Trust in data is still a major problem in our industry and we should welcome every tool and process that aims to help with that.

dbt believes every data project is a software engineering project. I kind of agree, but not everyone in this space is a software engineer. This is why I think we need better tooling for writing tests and these should almost become tool-agnostic.

In dbt your tests are just SQL queries. It has a few tests out of the box which are super easy to implement. Want to test if the values in your column are unique? Then you can use this test in your configuration file for your model and after each model deployment it will run some SQL to test this assertion for uniqueness. dbt is built on the [assumption](https://discourse.getdbt.com/t/understanding-idempotent-data-transformations/518) that transformations of your data are _idempotent_ - the output of calling your code multiple times does not differ from calling it only once. In traditional ETL (and going back to trend number 1) you often have a workflow that is scheduled to run on a particular frequency. For example, you often load data on a daily basis from a source system. However, if for some reason your scheduled task did not complete you also miss data from that specific day. Because dbt only runs on data that is already loaded into your data warehouse it does not have that problem. Idempotency is also important for testing - you want to make certain assertions about your data (My products have a price tag of X so I cannot expect any values above X to appear). Each time your data flow runs you would expect this test to pass.

## Conclusion

The three key trends that I described in this blog post are 1) ELT is the new ETL, 2) Version control is imperative for any data project and 3) testing your data increases trust. Whilst trend one is something that only specific tools in the data industry champion, I see trend two and three to be something every tool, but also user, should adopt. Together with these trends we see other concepts appear: repeatability and modularity. Your analytics code should easily be portable to other places and toolkits ("define once and deploy anywhere"). I believe that these trends will shape the future of the data landscape, but both the tools that we have at our disposal and the users/analysts should be open to adopting them.
