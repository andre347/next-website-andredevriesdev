---
title: "NEW! The easiest way to embed Tableau into Salesforce"
date: "2020-09-22"
template: post
draft: false
description: At The Information Lab, we have lots of Tableau users and customers that are interested in integrating the power of their interactive data visualisations with Salesforce. This has always been possible but it needed a little bit of coding wizardry to embed Tableau in a Salesforce page. Therefore this was not accessible for everyone. But this has changed! You can now use the easy to configure drag and drop Lightning Web Component (LWC) that Tableau has just released! Let's take a look at this new feature in this blog post.
socialImage: https://res.cloudinary.com/dmim37dbf/image/upload/v1600772855/Tableau-LWC/lvcthumnail.png
category: Tableau
tags:
  - tableau
  - salesforce
---

At The Information Lab, we have lots of Tableau users and customers that are interested in integrating the power of their interactive data visualisations with Salesforce. This has always been possible but it needed a little bit of coding wizardry to embed Tableau in a Salesforce page. Therefore this was not accessible for everyone. But this has changed! You can now use the easy to configure drag and drop Lightning Web Component (LWC) that Tableau has just released! Let's take a look at this new feature in this blog post.

## How to enable in Salesforce?

You can enable the LWC for your Salesforce account by heading over to this [AppExchange page](https://appexchange.salesforce.com/appxListingDetail?listingId=a0N4V00000GF1cSUAT). Or if you are already logged into Salesforce you can navigate to any page (for example the Sales console) and click on the Settings cog and then 'Edit Page'.

![Install LWC](https://res.cloudinary.com/dmim37dbf/image/upload/v1600762128/Tableau-LWC/installlvc.png)

We have written about the Tableau and Salesforce integration extensively in [this](https://www.theinformationlab.co.uk/2019/10/24/embedding-tableau-into-salesforce-a-guide/) blog post by [Ravi](https://twitter.com/Scribblr_42), and I've recorded [two videos](https://www.theinformationlab.co.uk/2020/03/24/how-to-embed-tableau-dashboards-into-salesforce/) about this in the past. However, configuring this was a little bit tedious, and setting up a basic embed page took quite some time.

## Background

Tableau has now released a new way to embed and integrate Tableau’s visual analytics solutions into Salesforce. This allows Salesforce admins and developers to use Tableau dashboards in any Salesforce Lightning environment (Sales, Marketing, Service, etc). This integration is a Lightning Component. You can use these in many Salesforce experiences and tools, such as Lightning Communities. Lightning web components are custom HTML elements built using HTML and modern JavaScript.

If you want a quick look at how you can set this integration up and what you can do with it then take a look at the video below from Tableau's Developer Advocate [Geraldine Zanolli](https://twitter.com/illonage) (Gigi).

<center>
<iframe width="560" height="315" src="https://www.youtube.com/embed/BliG1NbNg0w" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</center>

## What do I need?

The only thing you need to get started is the URL of your Tableau dashboard. You can use either Tableau Server, Online or Public. All three platforms have a 'Share' button. This button contains the URL that you need for embedding Tableau. Which means you don't copy the URL from the browser address bar. In any page that allows the integration of web components you can click on the Settings Cog. This should bring you to a page that looks like the one below.

![Embed LWC in Salesforce](https://res.cloudinary.com/dmim37dbf/image/upload/v1600443387/Tableau-LWC/embed-lwc.png)

Tableau has also updated the [documentation](https://help.tableau.com/current/pro/desktop/en-us/embed_ex_lwc.htm) for embedding visualisations into Salesforce. The updates also explain how to setup Single Sign On (SSO) for those that want a seamless login experience for both Tableau & Salesforce.
