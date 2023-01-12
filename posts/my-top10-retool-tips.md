---
tags:
  - retool
date: "2023-01-06"
template: post
draft: false
socialImage:
title: "My Top 10 App-Building Tips in Retool"
category: Retool
description: Retool is the fastest way to build internal applications. In this blog post I am going to highlight ten of my favourite app-building tips that will make your life as a Retool developer a lot easier!
---

### 1. Duplicate any columns in a table by referencing the 'currentRow' property

Imagine you want to use the contents of a particular row for a new custom column. Retool has a handy property on the table that allows you to reference data in the [currentRow](https://docs.retool.com/docs/data-in-tables#custom-columns). You can then calculate data based on other values in that particular row. For example, if you want to create a new custom column where you calculate `Revenue` from `Quantity` and `Price` you can use `currentRow` in the value of the new column.

![gif of currentRow](https://res.cloudinary.com/dmim37dbf/image/upload/v1673027027/retool-app-building-tips-blog/currentRow.gif)

### 2. Conditionally set the row colour in a table with 'currentRow' property

There are other use cases for the currentRow property besides using it as values in custom columns. You can also leverage it in your design. For example, to conditionality set the row colour in a table. This is a very common ask and can visually draw your users to particular rows in your table - often this is used to indicate good or bad.

In the code snippet below we are highlighting each row where the quantity ordered is less than ten in red. You set this in the `Row Color` input at the bottom of the table configuration.

<!-- prettier-ignore -->
```js
{{  currentRow.quantity < 10 ? "red" : ""  }}
```

![row colour gif
](https://res.cloudinary.com/dmim37dbf/image/upload/v1673027048/retool-app-building-tips-blog/currentRow-color.png)

### 3. Create an inline bar chart in your table with some CSS magic

This one is really cool and feels a bit hacky. With some CSS magic you can add dynamic bar charts to your Retool tables. The secret here is to use the column type 'HTML'. This type allows you to write any valid HTML (and CSS!). In the example below I have created a new custom column and dropped in this snippet as the value:

```html
<div
  style="background: salmon; 
  padding: 3px; 
  margin: 1px; 
  height: 22px;
  width: {{ Math.floor(100 * currentRow.quantity / maxQuantity.value) }}%; 
  font: 10px sans-serif; 
  text-align: left; 
  word-wrap: normal;
  color: white; "
>
  {{currentRow.quantity}}
</div>
```

Which generates this:

![bar chart css](https://res.cloudinary.com/dmim37dbf/image/upload/v1673026999/retool-app-building-tips-blog/bar-chart-css.png)

### 4. Quickly build forms to write data back to your database

Retool allows you to build more, with less. We want you to build your apps as fast as possible. One really good quality-of-life improvement that the product team launched at the end of 2022 was the ability to quickly generate forms with input fields from your table data. This allows you to quickly build CRUD applications on top of your databases.

![dynamic form from table data
](https://res.cloudinary.com/dmim37dbf/image/upload/v1673027062/retool-app-building-tips-blog/dynamic-form.gif)

### 5. Use the utils.downloadPage() method to quickly export your page

While you want your users to stay in your Retool app as much as possible, there are often use cases where you want to generate a snapshot of your app. This is a common ask for apps that are more of a data dashboard. You can hook up a JS Query to for example a click handler on a button which downloads the page as a PDF. You can provide a filename, which components you want to exclude from the export, which CSS properties to include / exclude from the image, a scale property to define the resolution, and a fullscreen property to export the whole page.

### 6. Quickly duplicate components by using CMD + D

Super quick and handy way to build out an app is to duplicate a component or a selection of components with CMD + D

### 7. Pretty format your code with CMD + L

I found this one out by accident! Anywhere you can write JavaScript or SQL in Retool you can hit CMD + L and it nicely formats your code. Is this the first step to a Prettier integration for Retool?

### 8. Quickly toggle the page panels with CMD + B / J / U

Another handy keyboard shortcut! When developing Retool applications you find yourself toggling between the various panels a lot. Teaching yourself some keyboard shortcuts will save you so much time. CMD + B is for the left 'app state' side bar, CMD + J for the query panel and CMD + U for the component panel.

### 9. Use modules to group Retool components that are frequently used

Retool [modules](https://docs.retool.com/docs/modules) are a group of reusable components and queries. If you find yourself building the same type of apps consisting of the same components over and over again, you can leverage modules to group them and re-use in other applications. With modules you can provide 'input' and 'output' data. Input data can be data you can reuse to set state in your module components or for usage in queries. Output data typically contains data generated by a query that runs inside of the module.

Common use cases for modules are header components which should typically be consistent across your business' applications.

### 10. Want to quickly travel back in your app history? Use the '?\_historyOffset=5' url param

This is a great tip for troubleshooting problems in your applications and figure out when they were introduced! Append `?\_historyOffset=5` to the URL of your Retool app and you roll back 5 steps in your history. I often use this when my app gets stuck and does not reload.
