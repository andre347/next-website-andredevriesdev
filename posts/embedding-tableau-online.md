---
title: "Embedding with Tableau Online: An Overview"
date: "2021-05-24"
template: post
draft: false
category: "Tableau"
description: "Lately, we've been getting more and more client requests and interest in using Tableau Online for embedding Tableau dashboards into custom applications. With the majority of tools and applications moving to a managed cloud-hosted service they would also like to do that with Tableau. Often we recommend a self-hosted Tableau Server as this gives the most flexibility and all server features. Let's take a look at how Tableau Online and Server differ and when Online might be a good solution for embedded analytics.."
socialImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Tableau_Logo.png/1600px-Tableau_Logo.png"
tags:
  - "tableau"
---

Blog written and updated as of May 2021

Lately, we've been getting more and more client requests and interest in using Tableau Online for embedding Tableau dashboards into custom applications. With the majority of tools and applications moving to a managed cloud-hosted service they would also like to do that with Tableau. Often we recommend a self-hosted Tableau Server as this gives the most flexibility and all server features. Let's take a look at how Tableau Online and Server differ and when Online might be a good solution for embedded analytics. The Information Lab also offers a managed service on AWS which sits in between Online and Server and is fully managed by us, but with the benefits of Tableau Server.

## What is Embedded Analytics?

With Embedded Analytics we refer to the ability to integrate interactive Tableau views and dashboards into web pages, news articles, blog posts, custom applications, portals etc. Our customers often want to 'white label' their content and insights into a place that is familiar to their customers. Users of these platforms are often not aware that Tableau powers these interactive experiences. You can see examples of the public-facing examples we've created here: [https://embedding.theinformationlab.co.uk/examples](https://embedding.theinformationlab.co.uk/examples)

Regardless if you use Tableau Server or Online, embedded analytics with Tableau offers many benefits;

- the ability to provide reports with dynamic and live data
- interactive reports and dashboards that are fast to build
- competitive advantages: integrations with your applications

## Tableau Server vs Online

The main difference between Tableau Online and Tableau Server is that Online is hosted on a cloud platform that is fully managed by Tableau. There is no need for you to manage and control upgrades and monitor the infrastructure. If you don't have the internal resources to host a server then Online is a perfect solution. Getting up and running with an account is also really fast. However, there are some downsides in comparison with Tableau Server. Some of these are especially important in an embedded analytics setup: authentication, multi-tenancy and customisation of the server environment. Let's dive into these in a bit more detail below.

## Authentication

Authentication relates to how your users can sign in to the Tableau Online site. This process will identify the user's identity. This is probably the most important factor if you choose between Server or Online. You want to set up some sort of Single Sign-On (SSO) mechanism so users don't have to sign in to the embedded dashboard. A key difference with Tableau Server is that with Online, at the time of writing, you can't use [Trusted Authentication](https://help.tableau.com/current/server/en-us/trusted_auth.htm). The Tableau Online [documentation](https://help.tableau.com/current/online/en-us/security_auth.htm) mentions three ways of doing SSO:

1. OpenID Connect with Google
2. OpenID Connect with Salesforce
3. Using a SAML Identity Provider (IdP)

Important to note here is that Tableau Online only accepts e-mail addresses as usernames. This means that you need to make sure your IdP has the e-mail addresses of your users.

Another important element that has caught me out a few times already is that you need to configure your SAML IdP to allow iFrame embedding. With every method of embedding Tableau, you are adding an iframe of the viz on a page. There are quite a few steps involved with enabling SAML on a Tableau site. You can find all those steps [here](https://help.tableau.com/current/online/en-us/saml_config_site.htm). Step 6 is important for our use case and this is, unfortunately, different depending on which IdP you are using. Also, something to stress here is that if your SAML IdP doesn't support signing in through an iframe then you have to use a pop-up to authenticate. This means your dashboard users see a popup that they either need to accept or re-enter their credentials.

Something else that you need to consider when using SAML is that with the SAML session the user can access the entire Tableau Online interface. With Tableau Server you have a concept called Restricted Trusted Tickets - which gives you a token that's only valid for viewing a viz and no other Tableau Server elements. This token cannot be used to navigate to the server URL and log in. With SAML on Tableau Online, this is a possibility.

### Adding Users

If you want to automate the process of adding users to your Tableau Online site then you are a bit limited in options. Tableau thus-far only supports Okta and OneLogin for [SCIM](https://help.tableau.com/current/online/en-us/scim_config_online.htm). If you are not using one of these two IdPs then you have to roll your own solution by using either [Tableau's REST API](https://help.tableau.com/current/api/rest_api/en-us/REST/rest_api.htm) or [TabCMD](https://help.tableau.com/current/online/en-us/to_tabcmd_section.htm) and your IdP.

## Multi-tenancy

When you opt for Tableau Online you can only have one site per account. Pricing for Tableau Online is therefore per user, per site/account. Besides pricing, you also need to consider your adoption and development strategy. A Tableau Online site is therefore single-tenant: the single instance is supporting multiple customers who are using the same infrastructure.

With Tableau Server on the other hand you can create separate silos by deploying multiple sites. This means you can isolate different users and content to different sites. A very common setup is to have a deployment strategy with a development, test and production site. But this configuration is completely up to you. With Tableau Server you also have the ability run completely separate server instances which you can use to test upgrades to your environment. Upgrades on Tableau Online are automatic which means you can't control when they happen. You will receive a notification when there is downtime or when upgrades are scheduled so you can inform your users.

## Customise your server

With Tableau Server you have full control over your environment and you can configure it in whatever way you want (within the boundaries of the EULA). If you are planning a large deployment you might run into the [100GB disk limit](https://www.tableau.com/products/techspecs#online) per account of Online. Although I think Tableau can be flexible with this limit if you ask them. Another somewhat smaller limitation is that you only have the standard Tableau supported fonts on Online. Whilst with Server you can install custom fonts and use those in your visualisations. It is therefore recommended that when you are embedding Tableau Online the font matches the font that is being used throughout your custom application.

Tableau Server contains a [repository](https://help.tableau.com/current/server/en-us/server_process_repository.htm), often called the 'Postgres' database, which stores server data. This data includes server users, group, permissions, projects, data source and a whole lot more. It's a database that many Server Admins use daily and give them greater insight into the content on the server. Tableau Online, however, has a more limited '[admin view](https://help.tableau.com/current/online/en-us/adminview_insights.htm)' - that allows you to monitor different types of site activity. This does provide you with some level of insight but nowhere near the level of detail as the Server repository. On top of that, Tableau Online doesn't provide you with a lot of logs whenever an error happens. You will need to contact Tableau Support (who are typically really fast in replying) who will be able to assist you when an error happens.

## Conclusion

Tableau Online has made some great strides in the last few years and can be seen as a serious option for embedded analytics deployments. The fact that you don't have to manage any of the infrastructure and have to worry about upgrades is a big plus. If you are considering using Tableau Online I would first of all focus on the authentication side of things. You are going to have to use either OpenID or SAML with the identity providers listed in the official documentation. The second thing you have to realise is that by default Tableau Online only gives you one site. This could be seen as a limitation by some companies. If you are looking for an option that has the easy of not having to manage Tableau Online, but you want all the features from Tableau Server, the the managed Server hosting by The Information Lab might be an interesting option. Contact you account manager or drop us an e-mail at info @ theinformationlab dot co dot uk.
