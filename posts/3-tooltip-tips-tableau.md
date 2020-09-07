---
title: "3 Tooltip Tips in Tableau"
date: "2016-05-15 15:00:00"
template: post
draft: false
slug: "/posts/three-tooltip-tips-in-tableau/"
category: "Tableau"
description: "Tooltips are often neglected and overseen in Tableau. Sometimes you see great dashboards which tell an amazing story but once you start hovering over marks you'll notice that the designer didn't pay any attention to the tooltips. In this blog post I'll give you some tips on how to format your tooltips."
socialImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Tableau_Logo.png/1600px-Tableau_Logo.png"
tags:
  - "tableau"
---

[Source](https://medium.com/@andre.devries/3-tooltip-tips-in-tableau-e1d58ba4cc24 "Permalink to 3 Tooltip Tips in Tableau – Andre de Vries – Medium")

# 3 Tooltip Tips in Tableau – Andre de Vries – Medium

![Go to the profile of Andre de Vries][1]

Tooltips are often neglected and overseen in Tableau. Sometimes you see great dashboards which tell an amazing story but once you start hovering over marks you'll notice that the designer didn't pay any attention to the tooltips. You'll see the default tooltip Tableau gives you which include all the fields in your view in in Arial 10. For me tooltips are part of the finishing touch of a Tableau dashboard and every great viz should have tooltips that are first of all, formatted, fit to the overall design of the dashboard and engage the enduser with the story that is being told in the viz.

In a recent viz of mine I used some techniques in the tooltips which I had never used before. You can see the dashboard [**here**][2]. In this blog I will share three techniques with you that I used and that will make your tooltips look great.

1. _Use dynamic colouring in the tooltips_
2. _Use a calculation to include/exclude elements in a tooltip_
3. _Use a calculation to change the starting text of tooltip elements depending on a dimension (yes, I had no idea how to concisely describe this tip)_

Because the data I used was so suitable for telling a great story, global conflicts since the end of the Cold War, I also wanted my tooltips to convey this story. Many thanks again to the Uppsala Conflict Data Program for making [this dataset publicly available][3].

#### **Dynamic Colouring**

This tip has been around for quite some time but it's very useful and instantly makes your tooltips look great. In my dataset I had conflict regions and I had them coloured in my scatter plot but I also wanted this colour to be reflected in the tooltips. The trick here is to split the members in your dimension into individual calculations. The IIF function can help you with this. In the image below I selected the region 'Africa', and when the Region is not Africa it would return a null or a space. If you repeat this calculation for every member you want to colour, for my viz I had to create 5 separate calculations for each region, then you can apply this to your tooltip.

![][4]

This was the tooltip I used in my viz:

![][5]

When you drag all the individual (region) calculations in the tooltip you can colour them accordingly. This is how the tooltip looked when I hovered over a mark that has Africa as the region. Because I included null (or a space) in the calculation it will not show the other regions in the dataset.

![][6]

#### **Include Exclude elements in a tooltip**

This technique builds on the previous tip and is useful when you only want to show data when there is actually something to show. Sometimes you have null values or zeros in your dataset but you still have the title of the dimension or measure in your tooltip. With this calculation, which you can tweak and make as advanced as you want, you can even remove the dimension title by including this in the calculation.

My dataset contained the number of people that died on a particular day split by conflict party and whether there were civilian victims. The dataset also contained data on so-called 'unknown deaths', which were not confirmed. However, there were not always civilian or unknown deaths so I wanted this to only show up in my tooltip if there were victims.

![][7]

My calculation evaluates whether there are civilian victims and then returns this value plus a text string saying 'civilians were killed'. This will return a tooltip that includes for example _'18 civilians were killed'_ but it won't show up at all when there were no civilian victims. I then created another calculation which was similar to this one but here I only wanted to have the unknown death toll to show up when this was higher than the total number of reported deaths. The story I tried to convey here was how (un)transparent conflict reporting was across different regions and conflicts.

![][8]

#### **Change the starting text of a tooltip element**

![][9]

The third and final tip is useful when you have a dimension that contains text and you want this to show up in your tooltip. The dataset I had contained a text field called 'Where'. This dimension was made up of descriptions of conflict events and where they had taken place. However, the description was not always consistent. For example, occasionally an event had taken place '_in_' a village or city, or '_near_' a particular area. When you drag this 'Where' dimension in your view you can't make a grammatically correct sentence in the tooltip. I solved this issue by creating a calculation that looked for the first four characters in the sentence and returned a white space or a null when this was 'near' but if this wasn't 'near' then the sentence would start with in. I then added this calculation to the tooltip.

![][10]

[1]: https://cdn-images-1.medium.com/fit/c/100/100/1*tGdCsXyy90JvZ3c4EdEsjQ.jpeg
[2]: https://public.tableau.com/profile/andre.de.vries#!/vizhome/ForgottenConflicts/CONFLICTMAP
[3]: http://ucdp.uu.se/
[4]: https://cdn-images-1.medium.com/max/1600/0*NQIdF6dyq8ONCXrz.
[5]: https://cdn-images-1.medium.com/max/1600/0*3lQ80GIAARs6mcdC.
[6]: https://cdn-images-1.medium.com/max/1200/0*JRiVD8rfHL_-1J5B.
[7]: https://cdn-images-1.medium.com/max/1600/0*I25aXlvHMik4RNAd.
[8]: https://cdn-images-1.medium.com/max/1600/0*YpzodVhy5qr_JfhZ.
[9]: https://cdn-images-1.medium.com/max/1200/1*c8lAned0hspWmQQfIYna1A.png
[10]: https://cdn-images-1.medium.com/max/1600/0*kmh-94glgO4fCE0C.
