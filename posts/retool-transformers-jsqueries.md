---
tags:
  - retool
date: "2023-01-11"
template: post
draft: false
socialImage:
title: "JavaScript in Retool: Transformers vs Queries"
category: Retool
description: "Retool applications really come to live when you sprinkle in some JavaScript. The real magic behind a lot of your data manipulation and UI control is defined by how and where you write JavaScript. There are two ways to add business logic to your applications via JS: transformers & queries. In this blog post we will look at the differences between the two."
---

Retool applications really come to live when you sprinkle in some JavaScript. The real magic behind a lot of your data manipulation and UI control is defined by how and where you write JavaScript. There are two ways to add business logic to your applications via JS: _transformers_ & _queries_. In this blog post we will look at the differences between the two.

In short, both JS transformers and JS queries are building blocks that let you perform custom data processing and retrieval operations in Retool, but they have slight differences and there are several reason why you would use one over the other.

## JavaScript Transformers

A JavaScript [transformer](https://docs.retool.com/docs/transformers) is a piece of code that allows you to read and change data that has been returned by queries and components in your Retool app. For example, you could use a JS transformer to format a date, or to calculate the total cost of an order. A simple use case for a transformer would be if your data set returns two columns: firstName and lastName, you could create a transformer that combines the two fields and creates one field called 'fullName'. An important thing to note is that transformers will not allow you to control components or trigger (JS) queries.

Within transformers you use the `{{ }}` notation to bring in data. The transformer will run **automatically** when the objects that are referenced with the `{{ }}` change. This means for example that when you have a [select component](https://retool.com/components/select) which filters a dataset that is being returned by a transformer, any of the changes in this select component will trigger the transformer. As you probably guess having many transformers in your Retool app can negatively impact the performance of the app. In very complex app with a lot of dependencies these transformers are typically the first place where you start looking when performance becomes a problem.

The two main use cases for transformers are:

1. Data manipulation: modify the structure of your datasets or bring multiple result sets together. You can then reference them via `{{ transformer.value }}`
1. Helper functions:

## JavaScript Queries

A [JavaScript (JS) query](https://docs.retool.com/docs/scripting-retool), on the other hand, allows you to create interactivity between components and queries. Unlike transformers, you can trigger other queries with JS queries. This allows you to manipulate the state of your application and interact with the components in your app. A common use case for JS queries is to run a particular resource query, for example to query an API, for each item in an array. This array can for example be rows in a table. Which means you can run this API request for each row. You can see an example of this use case [here](https://docs.retool.com/docs/scripting-retool#trigger-a-query-for-each-item-in-an-array). A key component for this use case is the ability to pass in a variable called an `additionalScope`. This allows you to customise the behaviour of the query. You can find more info about this additionalScope [here](https://docs.retool.com/docs/scripting-retool#trigger-a-query).

Similar to transformers, JS queries can also return data. However, the biggest difference is that JS transformers automatically run when the referenced data changes, whilst JS queries _need to be triggered_ via a UI interactions (button clicked!) or on page load (see advanced tab). Another big difference with JS transformers is that JS queries have success and failure event handlers - transformers do not.

Transformers also always need to return data, this is not necessarily needed for JS queries. They can control the state of UI components (modal open / close) without returning any data.

The main use cases for using JS queries are:

1. Conditionally trigger queries: You can leverage JavaScript queries to programmatically trigger based on certain input conditions (e.g. triggering notifications based on success of a query).
1. Create a more complex API logic: you could for example trigger a JS query via a button, which executes another query, manipulats the returned data and then shows a select component.
1. Centralise logic in your app: there are a lot of places in Retool where you can write JS, but whenever there is a depedency between the JS you write you might want to add all of it in a JS query. This makes your queries more streamlined and easier to debug.

## Summary

|                                            | Transformers                                      | JS Queries                                |
| ------------------------------------------ | ------------------------------------------------- | ----------------------------------------- |
| **When does it execute?**                  | Everytime the referenced object via {{ }} changes | Based on user interaction or on page load |
| **Main use case?**                         | Data manipulation & helper functions              | Creating complex business logic           |
| **Does it need a return statement?**       | Yes ✅                                            | No ❌                                     |
| **Can you control UI elements?**           | No ❌                                             | Yes ✅                                    |
| **Can you trigger other queries?**         | No ❌                                             | Yes ✅                                    |
| **Can you control UI elements?**           | No ❌                                             | Yes ✅                                    |
| **Can you handle success & failure?**      | No ❌                                             | Yes ✅                                    |
| **How do we reference the returned data?** | {{ transformer._value_}}                          | {{ jsquery._data_ }}                      |
