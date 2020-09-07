---
title: "Alteryx’s Drive Time Engine"
date: "2017-06-27"
template: post
draft: false
description: In this blog post, I will walk you through setting up an environment in which you utilise the Alteryx Gallery API in order to embed apps and workflows. You will find code snippets that should help you understand how to use the Gallery API endpoints.
category: Alteryx
socialImage: https://www.theinformationlab.co.uk/wp-content/uploads/2017/08/alteryx_logo.png
tags:
  - alteryx
---

Alteryx takes out a lot of the heavy lifting for the data analyst with its data preparation and advanced predictive tools. In addition, one of the strong points of Alteryx is that it also gives the regular user the ability to perform spatial analytics. As an extra, Alteryx offers a Spatial Data license. In this blog I’ll discuss how you can setup this Spatial Data add-on and quickly leverage this additional package.

When you purchase an Alteryx Designer license you can opt for also including Spatial Data. You can read more about the various license packages [here](https://www.alteryx.com/products/pricing) or contact your [The Information Lab account manager](https://www.theinformationlab.co.uk). With the Spatial Data install you'll be able to do better and more precise decision making. The following will be added to your designer license but in this blog I only discuss the first two:

- - Drive Time Engine

- - Geocoder

- - DigitalGlobe Satellite imagery

- Postcode centroid coder

**Straight lines vs Drivetime**

When you’ve just purchased an Alteryx Designer license or if you are already an experienced user but you haven’t acquired the Spatial Data, you’ve probably noticed that some of the green tools (the Spatial tools) have greyed out drop-down menus in the configuration pane. This doesn’t mean that you can’t do any Spatial Analytics - on the contrary, you can do a lot (trade areas, find nearest, distance calculations etc.) However, all of this is limited to straight lines. What I mean with this is probably better illustrated with a drawing. Here you can see that Spatial Point A and B have a direct line between them. Keep in mind that these objects can be anything from the city you live in to the chair you’re sitting on. What this means is that if you bring it into Alteryx and you perform spatial processes, such a distance calculations, you will always use this straight line ("as the crow flies").

![](https://www.theinformationlab.co.uk/wp-content/uploads/2017/06/Picture11.png)

However, this is not the most effective and certainly not the most realistic way of calculating the distance. What if there’s a natural barrier such as a lake between A and B? With the regular Distance tool setup you’d be ignoring this obstacle and you’ll be artificially going through areas that you can’t actually access.

![](https://www.theinformationlab.co.uk/wp-content/uploads/2017/06/Picture2-705x407.png)

In comes the drivetime engine - when you configure your Distance Tool to utilise the Drivetime Engine you get a way more realistic result because Alteryx uses the TomTom dataset. This tool gives you three options when you calculate distances that are related to speed limits: Peak, Off-Peak and Night-Time driving. You can configure this to your liking. We can redraw our image as follows:

![](https://www.theinformationlab.co.uk/wp-content/uploads/2017/06/Picture3-705x403.png)

This drivetime data can also be utilised in other Spatial tools - for example the Trade Area tool. You would then be able to draw a radius around a particular spatial point that is not a fixed circle, but for example, a 10 minute drive. Because of speed limits on certain roads you'd be able to drive further in one way that in another. This is a very common use case for the retail industry where they want to find out how far customer live from a particular store.

Alteryx’s drive time engine will create a highly accurate polygon that follows the road network more precisely. If you acquire the UK Spatial Data Set you will be able to do more spatial processes in England, Scotland, Wales and Northern Ireland. Separate packages are available for US and Europe. These data sets are updated with the latest data on a quarterly base.

**Geocoding**

What if your data set contains those pesky zip codes but you can’t plot them on a map because you don’t have the corresponding Latitude and Longitude? This is where the second part of the add-on comes to the rescue. When you install the Spatial Data Add-on you’ll notice that you have a new Category in the top toolbar: Address. These tools have a different colour than the regular Spatial tools but you’ll be using them together on a regular base.

![](https://www.theinformationlab.co.uk/wp-content/uploads/2017/06/Picture4-705x88.png)

If your dataset contains a column with Zip Codes such as ‘EC4M 5S’ with an inner and outer postcode then you can use the UK-ROI Geocoder or the UK Postcode Geocoder tool to get more information about your spatial points. Some of the things that you can extract are the latitude and longitude, city, country and spatial object. The latter can then be used for further spatial analysis in Alteryx.
