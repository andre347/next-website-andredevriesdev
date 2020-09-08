---
title: Why Alteryx solves your Problems
date: "2017-07-01"
template: post
draft: false
description: How retracing and iterating backwards from your solution to your problem can be used within Alteryx
socialImage: https://cdn-images-1.medium.com/max/1600/1*V6_D53sRu89JubiXRHeCKg.jpeg
category: "Alteryx"
tags:
  - alteryx
---

[Source](https://medium.com/@andre.devries/why-alteryx-solves-your-problems-d9fa96aea75e "Permalink to Why Alteryx solves your Problems – Andre de Vries – Medium")

# Why Alteryx solves your Problems – Andre de Vries – Medium

![Why Alteryx solves your Problems](https://cdn-images-1.medium.com/max/1600/1*V6_D53sRu89JubiXRHeCKg.jpeg)

## How retracing and iterating backwards from your solution to your problem can be used within Alteryx

![][2]

A couple of weeks ago I flew to Italy for a holiday. Even though my flight was at 11am, I was at the airport at 9.30am. I set my alarm for 7.30am that day. An hour before I had to head to the airport. You're probably wondering what my holiday, and in particular my itinerary, has to do with [Alteryx][3], a self-service BI tool. I'll get to that in a bit, but let's see what I just described: I retraced my steps of that day. I did exactly the same prior to my flight, just to make sure I wouldn't miss my flight. This is a problem-solving technique I utilise not only in my day-to-day job as a Tableau & Alteryx Consultant but for almost every problem I encounter.

I approached my problem, being on-time at the airport otherwise I'd miss my flight, by tracing my steps backwards. What I mean with that is that the first element of every problem is actually understanding the problem. This is essential. Holiday is something I absolutely didn't want to miss so the issue was clear. What if my train was late? What if it was busy at airport security? All of these elements could potentially lead to me missing my flight. Breaking down the problem into smaller parts or elements is called chunking. However, I don't do this from the beginning (the problem) but by starting with the solution (be at the airport at 9.30am) — this is what Bobby Fischer would call _'retrograde analysis'_.

Let's bring in Alteryx and let me explain how this piece of software can help you apply these 3 problem solving techniques:

1. **Understanding the problem**
2. **Breaking down the problem**
3. **Working backwards**

This week I spent a couple of days at our [Information Lab's Data School ][4]where I introduced Alteryx to our latest cohort.

Besides seeing the disbelief of some of our new consulting analysts who realised that they wasted so much time in other BI tools, it was a perfect opportunity to demonstrate these problem-solving techniques. Alteryx is a modern BI tool that applies an intuitive and iterative drag 'n drop system and empowers the everyday data analysts. You don't have to write a single line of Python code to scrape some tables from Wikipedia or write a VBA Macro to union some Excel files. All of this is done with configurable 'tools' on a big white canvas.

Of course, it's all great to not have to write code but what makes Alteryx stand out for me is its iterative nature. I know how my Alteryx output has to look like because I always output to Tableau. This means that I know the data structure of the input, but also my desired output. The hard part is actually the bit in between these two stages.

Let me demonstrate my normal 'plan of attack' when I work in Alteryx. The screenshot below is an Alteryx workflow that cleans a text file with weather data from the Netherlands. It's part of a larger workflow where I automatically grab the latest weather data from the [KNMI][5] website.

![][6]

An Alteryx (Batch) Macro that cleans 1 'messy' text file but can be run x-number of times over similar files.

The issue I had was very clear, a [colleague][7] had asked me if I could give him the latest weather data, but this had to be automated so he could get it on a daily base. I created this workflow about 4 months ago but I can still very easily retrace the steps I took back then in order to create an output. When I started documenting this flow, which can be completely done within the tool itself, I started from the right hand side, the output, and worked my way back to the input. This problem-solving technique works perfectly when I have to do a document handover to clients or colleagues because I've broken down the steps in between the input and the output — for example convert dates, remove rows and change the order of the columns. The best part is that I can iterate over this workflow if I need to make changes, I don't have to start from scratch again.

An Alteryx workflow looks very much identical to the 'not-missing-my-holiday-flight-scenario' I described in the introduction. In order to not miss my flight I had to be at the airport at least 1,5hrs in advance, which meant I had to take an early train, and that forced me to set my alarm at 7.30am.

![][8]

We apply this same teaching logic in the Dataschool — identify the solution, breaking it into chunks and retracing the steps. We try to get the students think about the solution first and then apply the knowledge they have of the tool to get to this point. This not only works for teaching Alteryx, but also making it on time for flights!

[1]: https://cdn-images-1.medium.com/fit/c/100/100/1*tGdCsXyy90JvZ3c4EdEsjQ.jpeg
[2]: https://cdn-images-1.medium.com/max/1600/1*V6_D53sRu89JubiXRHeCKg.jpeg
[3]: http://www.alteryx.com
[4]: http://www.thedataschool.co.uk
[5]: http://www.knmi.nl
[6]: https://cdn-images-1.medium.com/max/2600/1*_YnOfInO543Anw8IqayHnw.png
[7]: https://twitter.com/__valantis
[8]: https://cdn-images-1.medium.com/max/2000/1*dk8iBxtJUIVWJgcytBly-w.png
