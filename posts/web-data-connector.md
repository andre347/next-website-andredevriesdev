---
title: Web Data Connector for Tableau Public
date: "2019-06-03"
template: post
draft: false
description: Tableau Public is a great platform for showcasing your data visualisations. Now you can also start analysing the data about all your visualisations with a new web data connector (WDC) that I created. With the Tableau Public WDC you will be able to get insight into the number of views, favourites and other information related to your published dashboards.
socialImage: https://theinformationlab.co.uk/wp-content/uploads/2019/05/Web-Data-Connector.png
category: "Tableau"
tags:
  - tableau
  - javascript
---

### Tableau Public is a great platform for showcasing your data visualisations. Now you can also start analysing the data about all your visualisations with a new web data connector (WDC) that I created. With the Tableau Public WDC you will be able to get insight into the number of views, favourites and other information related to your published dashboards.

![Web Data Connector for Tableau Public](https://theinformationlab.co.uk/wp-content/uploads/2019/05/Web-Data-Connector.png)

## For anyone that wants to jump in immediately:

<ol><li>Copy this link: <a href="https://tableau-public.wdc.dev/">https://tableau-public.wdc.dev/</a></li><li>Open up Tableau and click 'Web Data Connector'. You can use any version since v9.1. This is the version where Web Data Connectors were introduced.</li><li>Find your Tableau Public Username. If you go to your Tableau Public page you can find it in the URL.</li><li>Enter your username and Tableau will start getting your profile data!</li></ol>

<p>If you get stuck please click on the 'About' tab on the WDC page to read a step-by-step instruction on how to find your Tableau Public account.</p>

<div class="wp-block-image"><figure class="aligncenter"><img src="https://www.theinformationlab.co.uk/wp-content/uploads/2019/05/Screenshot-2019-05-31-at-16.58.21.png" alt="" class="wp-image-13839"/><figcaption>Check it out <a href="https://tableau-public.wdc.dev/">here</a>!</figcaption></figure></div>

## Background to the WDC:

The Tableau Public API is a bit of a hidden API. It's not officially documented anywhere except for a few really good blog posts from community members. You can read more about the API in <a href="https://twitter.com/highvizability?lang=en">Jeffrey Schaffer's </a><a href="https://www.dataplusscience.com/TableauPublicAPI.html">blog</a> and <a href="https://twitter.com/marc_ds5">Marc Reid</a> recently wrote an excellent <a href="https://datavis.blog/2019/05/13/tableau-public-api/">blog</a> about it. I would highly recommend reading Marc's blog because he built a complete dashboard based off the data which is a great starting point. This dashboard also demonstrates many of the new features in Tableau's latest release (version 2019.2).

## Want to get data for multiple users? </h3>

That's possible! Please provide a comma separated list of username. You can enter that in the same text input box as where you put the username in step 3. I haven't really tested what the maximum number of users is. So please break it and report back!

## Can I refresh my data?

Yes, you can if you use Tableau Server. You can set up a refresh schedule and refresh the data. Every web data connection in Tableau is an extract. Therefore you are setting up an extract refresh schedule. This also means your data will not be 'live' but you can of course set the web data connection to refresh near live.

If you publish a workbook that relies on a web data connection on Tableau Public you can unfortunately not setup an extract refresh.
