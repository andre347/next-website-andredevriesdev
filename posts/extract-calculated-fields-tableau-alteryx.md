---
title: Extracting Calculated Fields from Tableau with Alteryx
date: "2016-07-07"
template: post
draft: false
description: Have you ever thought about extracting your calculations from your Tableau workbook? Maybe you want or need to document all your calculations so you can easily show your colleagues the logic behind your calculations. In this blog I will share an Alteryx workflow that I built to extract calculations from a Tableau workbook and I will explain why you should download this workflow.
category: "Alteryx"
socialImage: https://www.theinformationlab.co.uk/wp-content/uploads/2016/06/calc-image2.png
tags:
  - tableau
  - alteryx
---

## Extracting Calculated Fields from Tableau with Alteryx

DISCLAIMER: XML ‘hacking’ is not officially supported by Tableau and therefore we recommend to always backup your Tableau workbook before you start tweaking the underlying code.

Have you ever thought about extracting your calculations from your Tableau workbook? Maybe you want or need to document all your calculations so you can easily show your colleagues the logic behind your calculations. In this blog I will share an Alteryx workflow that I built to extract calculations from a Tableau workbook and I will explain why you should download this workflow.

Why would you want to extract your calculations?

To document your work: if you have a workbook with lots of dimensions and measures and you also use multiple calculations your workbook can become quite cluttered. It would then be very useful to export your calculations so you can quickly reference them.
To send the calculations to colleagues that don’t have a Tableau desktop license: what if you have people in your organisation that don’t have a desktop license but still want to check your work or want to help you improve your calculations?
To investigate calculations in a workbook that has been sent to you: someone just sent you a workbook with a data source you are not familiar with and the workbook contains a lot of calculations. If you run this workflow you can quickly check the various features of the embedded Tableau calculations.
Sounds good, where can I download the workflow?

You can download the workflow from the Alteryx Gallery here so you can follow along in this blog. The workflow has been built in the most recent version of Alteryx. You can download 10.5 here.

Sweet, but how does this workflow work?

The Alteryx workflow runs off a .twb file. Tableau has several file formats (.twb, .twbx, .tds, etc). You can read more about the various file types in this excellent blog by Tableau Zen Master Jonathan Drummey. What you need to understand is that a Tableau workbook is basically an XML file containing metadata about your data sources, worksheets, dashboards, colours, parameters and calculated fields.

If you open the .twb file in a text editor or IDE, in fact any tool that can read XML will do the trick, you will see something similar to this: xml

Below you see the Alteryx workflow I built. It’s a combination of XML parse and Regular Expression tools.
workflow

The first step is to open the Tableau workbook file (.twb) as an XML file in Alteryx. You can also inspect the XML from within Alteryx by changing the user setting (Options > User Settings > Edit User settings > Advanced > Display XML in Properties window).

Once the XML has been parsed you can use Regex to extract particular elements of an XML child. I also used a Select tool to filter out only the outer XML columns I needed. In this case I used Regex to take out the Caption, Calculation Name, Formula, Datatype, Role and Type of each calculation in my workbook. I then used the output tool to output these six columns to a CSV file. See below an example of three calculations that I created in Tableau and then extracted with Alteryx.

output

When your workbook changes the only thing you have to do each time is to re-run the workflow and your output is updated with the latest calculations.

Nice, where can I learn more about hacking the XML?

If you want to read more about the possibilities of ‘hacking’ the XML you should also read this blog from my colleague Emma Whyte.

Update: Tableau enthusiast Michael Mixon created another Alteryx workflow that enables you to extract calculated fields from your Tableau workbook. You can read and download it here.
