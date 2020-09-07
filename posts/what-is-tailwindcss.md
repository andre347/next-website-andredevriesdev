---
title: "What is TailwindCSS?"
date: "2019-12-31"
template: post
draft: false
description: In 2020 I want to focus more on learning how to create effective designs and how to get better at designing user experiences. A really exciting framework that will help me with this is TailwindCSS. In the next few months, while I'm learning, I will write a few more blog posts about this CSS framework. In this first post I want to explain what TailwindCSS is.
category: "CSS"
socialImage: https://res.cloudinary.com/dmim37dbf/image/upload/v1577823114/tailwind/Tailwind_intro3.png
tags:
  - css
  - javascript
---

![What is tailwindcss](https://res.cloudinary.com/dmim37dbf/image/upload/v1577823114/tailwind/Tailwind_intro3.png)

## I find CSS really hard, I don't want to say that TailwindCSS makes it easy but it definitely makes it a lot more approachable!

According to the [official website](https://tailwindcss.com/), **TailwindCSS** is a _"a utility-first CSS framework for rapidly building custom designs"._ You probably think, yet another framework that does something slightly different and another thing I have to learn. Well yes, you need to learn Tailwinds API but the way this framework approaches design is something that I find very elegant. More about that later.

Tailwind is built and maintained by [Adam Wathan](https://twitter.com/adamwathan). As a project maintainer he focusses a lot on teaching the principles behind Tailwindand and about wider design principles. I would highly recommend checking out some of his [recordings](https://www.youtube.com/channel/UCy1H38XrN7hi7wHSClfXPqQ) in which he often rebuilds existing UI interfaces (think Twitter, Coinbase and Stripe) in Tailwind. To me this really shows the possibilities and flexibility of the framework because his videos are often not more than about two hours in length. This means that in two hours you can already design something from the ground up with Tailwind.

Thus far I've used Tailwind on a few projects. However, this was when the project was still in alpha. Version 1 was released a few months ago and Adam is already working on future versions. On the official [Github](https://github.com/tailwindcss/tailwindcss) page you see a real uptick in the number of users of the framework (18K stars at the time of writing). They also get lots of traction on Twitter and other social media pages. Therefore, I think this is the right time to delve more into it.

### But we already have plenty of CSS frameworks..

I agree. However, other CSS frameworks give you pre-created components such as dropdown menus, buttons and headers. These default elements all have the same style which results in lots of web applications having the same look and feel. **Tailwind** has a lower level API. In comparison with other popular frameworks such as Bootstrap and Bulma, you get a lot more freedom to customise your designs in Tailwind. Bootstrap is great, I use it a lot, but the moment you want a slightly different style you often have to modify and override custom styles. When I use React I often default to [Material UI](https://material-ui.com/) for my design. This library has some excellent components that follow Google's Material Design, but there is quite a lot of setup and you are very much baked into the Material style and its guidelines. Also, I found that customising the main Material UI style is actually very difficult.

### Utility first

What makes Tailwind special is the **utility-first approach**. What this means is that you don't have custom CSS files in which you link Id's and classes to HTML DOM elements. _A classic example with a div and a button:_

    <div class="button-container">
    	<button class="active-danger">Click Me!</button>
    </div>

    <style>
    .button-container {
        display: flex;
        max-width: 12rem;
        margin: 0 auto;
        padding: 1.5rem;
    }

    .active-danger {
    	color: 'white';
    	background-color: 'red';
    	padding: 1.5rem;
    }
    </style>

The classic example above would normally be split into two different files. A HTML file and a CSS file. You then reference the CSS file in the HTML. In terms of your workflow setup, this means you need to have two files open and you also need to come up with a good naming convention of your classes. Especially the latter is something I often struggle with. With Tailwind on the other hand, you actually apply pre-existing classes directly into your HTML. Without having to create a CSS file and write CSS. _An example:_

    <div class="max-w-sm mx-auto flex p-6">
    	<button class="bg-red-600 text-white p-6">Click Me!</button>
    </div>

In this **Tailwind** example I used:

- _Flexbox_ and _padding_: (flex and p-6) to control the layout of the container
- The max-width and margin utility to set the _width_ of the elements
- The _background_ colour (bg-red-600) and the font colour (text-white) to style the button

This only shows a glimpse of the utility classes you can use. For example, the background colour value is set to 600, which is very dark red. If you drop this down to 100 or 200, you get a lighter style of red. The padding value of six is now applied to the whole button. But you can also set horizontal or vertical padding to this element. If you want to see and read a full list of utility classes then head over to slick looking [documentation](https://tailwindcss.com/docs/utility-first/) to learn more!

### **Verdict**

I know this is something to get used to. It's a change to your workflow. But Tailwind gives you some benefits over the traditional approach of styling web apps:

- The growth of your CSS files. A real problem when you work on large projects is that you keep on adding CSS classes to the bottom of your CSS file (cascading problems).
- Coming up with names of your CSS classes. Because Tailwind has a utility-first approach there is not a real need to come up with a good naming convention of your classes. For example, 'bg-red-600' is clear, and you only have to remember this to give the background a reddish colour.

Take a look at this Codesandbox example to I mocked up with Tailwind CSS. If you click on the button on the bottom right you can inspect the classes I added.

<center>
<iframe
     src="https://codesandbox.io/embed/tailwind-static-jk2ol?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="tailwind-static"
     allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
     sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
   ></iframe></center>

In the next blog I'll write about how to install Tailwind CSS in your projects.
