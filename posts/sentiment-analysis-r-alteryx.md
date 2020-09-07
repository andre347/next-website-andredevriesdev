---
title: Sentiment Analysis in Tableau & R
date: "2016-03-02"
template: post
draft: false
description: In this blog I will run you through the basics of one element of text analysis, sentiment analysis, how to connect and install R, R Server and R packages. I will be using some Twitter data to illustrate the sentiment analysis in Tableau.
socialImage: https://www.theinformationlab.co.uk/wp-content/uploads/2016/03/blog-image-two2.png
category: "Tableau"
tags:
  - tableau
---

## Sentiment Analysis in Tableau & R

At the Tableau Partner Summit in London I attended a session about statistics and sets in Tableau. In this session, Oliver Linder, Sales Consultant at Tableau, explained the basics of the R integration in Tableau. During this presentation he explained step-by-step how to connect the R server in Tableau and he did a short demonstration of how to write a calculated field in which you can calculate the correlation between two variables with R.

This session made me think about different ways of applying the capabilities of R in Tableau and one of my main analytic interests is corpus analysis. Tableau doesn’t natively support Natural Language Processing (NLP) for various reasons but with the R integration you can do basic text analysis on your set of text. In this blog I will run you through the basics of one element of text analysis, sentiment analysis, how to connect and install R, R Server and R packages. I will be using some Twitter data to illustrate the sentiment analysis.

What is Sentiment Analysis?
First of all, what is sentiment analysis? We call this the process of computationally identifying, processing and categorising text data in order to obtain opinions and attitudes towards certain themes, topics, products etc. There are several methods to recognise or mine people’s attitudes, ranging from human analysis to supervised and unsupervised machine learning with programming languages such as Python and R (“bag of words”) . Sentiment analysis can be object/feature based when we determine the expressed sentiment on different objects of entities, or based on document level. The latter determines the polarity of, for example, news items or product reviews. There are several ways of showing sentiment, from the most common three polarity levels positive, neutral and negative to polarity scales of, for example, -10 to +10.

Getting the data
Now that we know the principle elements of sentiment analysis we can apply this to a set of text. For this blog I downloaded some raw Twitter data from the API through Alteryx. I limited the API call to 5,000 tweets and used the keywords “Tableau” and “#Tableau” to find the most recent tweets mentioning these keywords.

alteryx twitter api

How to install and setup R?

This isn’t by far the most cleaned text data set I ever worked with, or the most sophisticated Alteryx workflow, but that is not the purpose of this blog. Once Alteryx has completed the workflow we can move towards downloading and installing R and RStudio. You can download both here and here. The latter is called an integrated development environment (IDE) for R. After installation you need to start the R Server in order to make a connection with Tableau. This is a server that allows applications to access R functionality. You can also host the R Server on your local machine, which I did for this blog. The installation of both is self explanatory and when you open RStudio you need to type the following commands in the console to install the Rserve:
install.packages(“Rserve”)
library(Rserve)
Rserve()

I installed R and RStudio on a Mac so I needed to change the last command that executes the Rserve to Rserve(args=”–no-save”). You will see a response from R saying that the Rserve is starting and it will return you to the command line in order to write more code when it’s done.

rserve

After you’ve successfully installed R and RStudio and you have your Rserver running you can make the connection with Tableau. The official documentation from Tableau to set up the connection is straightforward. You can connect to R by going to the Help Menu in Tableau Desktop choose Settings and Performance > Manage R Connection.

connectionr

Note that in Tableau 9.3 this will be changed to Help > Settings and performance > Manage External Service Connection. As you can see Tableau removed Rserve in the dropdown, but this doesn’t mean Tableau will stop the support of R. When you run the server locally you can set the connection as described in the image. You can test the connection by clicking on Test Connection and Tableau will return a message saying “Successfully connected to the Rserve service”.

R in Tableau

Next you want to connect to your text data, in this case my Twitter corpus with tweets about Tableau. There are four functions to pass R expressions in calculated fields:

SCRIPT_BOOL
SCRIPT_INT
SCRIPT_REAL
SCRIPT_STR

For text analysis we need to use the latter, SCRIPT_STR. These four R expressions are included in the Table Calculations window. They consist of the following elements (R expression, (.arg1, .arg2)’, AGG([Field1]), AGG([Field2]). You can add in more arguments than two. In this case, arg1 is Field1 and arg2 is Field2. As you can see you have to input an aggregate or a constant number in order to make the calculation valid. Before we can write our sentiment analysis calculation, we first need to install a couple of R packages. There are various R packages that do text analysis but in this blog we are using tm and Sentiment. You can either download them here and here or you can run the following scripts in your R console:

tm:
install.packages(“tm”)
download.file(“http://cran.cnr.berkeley.edu/src/contrib/Archive/Rstem/Rstem_0.4-1.tar.gz”, “Rstem_0.4-1.tar.gz”)
install.packages(“Rstem_0.4-1.tar.gz”, repos=NULL, type=”source”)

sentiment:
download.file(“http://cran.r-project.org/src/contrib/Archive/sentiment/sentiment_0.2.tar.gz”, “sentiment.tar.gz”)
install.packages(“sentiment.tar.gz”, repos=NULL, type=”source”)

This sentiment package is relatively old which means that you need an older version of R installed on your machine to run the package. It has two functions:
classify_polarity: classify text as positive, neutral or negative.
classify_emotion: analyse text and classify it in different types of emotion: anger, disgust, fear, joy, sadness, and surprise.

Because I have a very raw data set coming out of the Twitter API it also means I have a lof of dimensions. However, I only need one dimension in this case, the TweetBody. This dimension contains the 140 characters of text. There are two ways of loading R expressions in Tableau, you can either add them to the Rserve config or you need to load the packages in your calculation. In the latter case you need to add “library(sentiment);” to the calculation.

I created a calculation called “Sentiment” and it calls classify_polarity:

calc

As you can see I call the R package from within Tableau and I use the classify_polarity to find positive, neutral or negative tweets and I only use one argument, arg1. This argument looks at my text attribute.

This is how the output looks:

output

This is as you might have gathered by now a basic sentiment analysis package that has several flaws. Some of the negative tweets are in fact not negative. However, this can be fixed by going in the lexicon of the Sentiment package. This R package is based on a lexicon, which is a technique that uses a dictionary of words to assess whether a bunch of text is positive, negative or neutral. You can access the lexicon of this package in your library folder under sentiment\data\subjectivity.csv.gz and change how the sentiment package assesses the polarity.

Tableau has no out of the box text analytics implemented but with this small and quick R package you can run your corpus analysis from within Tableau. You can also download other text analytic packages and the logic for applying them to Tableau calculations will be similar to what I described above.

Edit: When you encounter problems with an outdated sentiment package you can follow the steps in this post.
