---
title: Tableau’s Document API & Python
date: "2016-11-23"
template: post
draft: false
description: In this blog I will go through the basics of the Document API, what you can do with it and we are going to create a Python script to extract information from a Tableau data source.
socialImage: https://www.theinformationlab.co.uk/wp-content/uploads/2016/11/Screen-Shot-2016-11-23-at-15.27.551.png
category: "Python"
tags:
  - tableau
  - python
  - document-api
---

## Tableau’s Document API & Python

Who knew that Tableau had a Document API? I guess some of you, but to be fair, Tableau only released the Document API as part of their Developer tools together with the release of version 10. In Part One of this two-parter I will go through the basics of the Document API, what you can do with it and we are going to create a Python script to extract information from a Tableau data source.

Have you ever had the issue that you downloaded a workbook from Tableau Public and you get an error message saying that your Tableau version is not compatible with the workbook? Well, I think many of us have, and one way of solving this is to ‘hack the XML’. This sounds scary but it isn’t, and many have blogged about it. However, we can put this method to bed now, thanks to the Document API.

But now you are wondering, what precisely can I do with the Document API? This API is part of the Developer toolkit, which also includes the JavaScript API, Extract API and the REST API. All you need in order to work with the Document API is some knowledge of Python, but wait – don’t click away – I will walk you through setting up a basic Python script in this blog. With the Document API, Tableau gives you the opportunity to programatically update your Tableau workbooks and data sources.

Tableau has several so-called ‘Documents’. You have the .tds file, which is just a plain file containing your data source connection information, the TWB file, which also contains workbook information, and then you have the .tdsx and .twbx files. The latter two are zipped files, which contain more files (such as TDEs). What all these documents have in common is that they are XML files, which means you can open them in any text editor and make changes. You can literally extract everything out of the XML, from your data source connection information to field aliases and calculations. Basically everything you would drag and drop, colour or alias in Tableau is documented in the XML and now you can use the Document API to query this.

A couple of things you can do are: getting information from your workbook (for example detailed information about your fields) and update data connections in a published workbook. In this blog we will look at extracting fields from a .tds file but first we need to install the Document API library.

You can either clone the repo from Github or use pip in your command line (read more on pip here)

pip install tableaudocumentapi

Once installed we can start importing the Document API Library in order to find information on our data source (scroll down if you can’t wait to see the complete script).

// import Document API
from tableaudocumentapi import Datasource

The next step is to load the Tableau Data Source (.tds) file by creating a variable.

// load your tds file
sourceTDS = Datasource.from_file('your_file.tds')

I navigated to the file location before I started the script, if you haven’t you need to add the path of the file to the filename. Once done, we can now extract the first piece of information from our datasource, the total number of fields.

// number of fields
len(sourceTDS.fields)

However, this is not very clear if you run it because the output will just be a bunch of numbers. Let’s add some text to the output.

// number of fields
print '{} total fields in your data source'.format(len(sourceTDS.fields))

The next thing we can do is break this down by individual fields with a for loop. This will return the names of the fields and the field types. You can also add for example, field.calculation in the for loop, which will return a boolean if the field is a calculation. Another element you can add is the default field aggregation or the description of the field.

for field in sourceTDS.fields.values():
print field.name, field.datatype

The full code to write the output to a file:

Download link python-code.txt

The output will look similar to this:
screen-shot-2016-11-23-at-15-41-41

Congratulations, you’ve just successfully written a Python script to query Tableau’s Document API. This was just a basic example of using the Document API to extract fields from your data source. In this next blog post we will be digging deeper into the API.
