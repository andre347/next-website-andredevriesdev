---
title: "ES6: Default vs Named Exports"
date: "2019-03-12"
template: post
draft: false
description: ES6 (ECMAScript 2015) introduced two types of module exports - default and named exports. In this blog I explain the differences between the two.
category: "JavaScript"
socialImage: https://res.cloudinary.com/dmim37dbf/image/upload/v1552471685/import_export.png
tags:
  - javascript
  - es6
---

#### ES6 (ECMAScript 2015) introduced two types of module exports: default and named exports.

Ever since learning JavaScript I've been struggling with how I can export and reference variables, functions and JS objects from one file to another. I think I've got it now, so this is a good moment to outline how and when you use these exports and what the main differences are. Let's also look at how we traditionally (pre-ES6) used functions and variables from multiple files.

![ES6: Default vs Named Exports](https://res.cloudinary.com/dmim37dbf/image/upload/v1552471685/import_export.png)

## What are imports and exports?

In the [official MDN docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export) we read the following definition of import and exports:

> The export statement is used when creating JavaScript modules to export functions, objects, or primitive values from the module so they can be used by other programs with the import statement.

## Pre-ES6

When you just use 'vanilla JS' - which means not a framework such as VueJS or ReactJS, you typically work with script tags in your index.html file. The only thing you then have to take into account is the order in which you put the links in the index file. If you're referencing a variable or function before you have created it in another file you'll get a warning which indicates that it can't find this value. However, you can easily fix this by shifting your script links around. That logic was fairly simple to understand for me. But the downside of this method is that your browser loads all the file contents and all files you have links for in your script tags, even if you don't use them. This can negatively impact page load. Take for example the data visualisation library D3.js. You can reference the library from a CDN link and it will on page load grab the whole JS file. The benefit of this is that you have access to all its functions and functionality. However, you are loading a lot of elements which you probably will never use.

## ES6 to the rescue

With ES6 we can now _import_ and _export_ modules in other files. What that means is that you can have several JS files that each have functions and variables that you can reference. ES6 gives us two ways of doing that: default and named exports. Let's take a look at the default export first.

I've encountered this default export one the most and it's essential to understand if you start working with modern front end frameworks such as VueJS and ReactJS. Let's look at an example:

```javascript
// importing a function
import sayHi from "./welcome";

// exporting a function in the 'welcome.js' file
export default function sayHi(name) {
  `Hello ${name}`;
}
```

This export can also be written like so:

```javascript
// importing a function
import sayHi from "./welcome";

// exporting a function in the 'welcome.js' file
function sayHi(name) {
  `Hello ${name}`;
}

export default sayHi;
```

For clarity I've put the import and the export in the same code block. But obviously these import and exports are in different files. You can see that you can either export the function at the end of the file, or inline when you create the function. There's no difference here. In my example I'm exporting a function, but you can also export classes, constants, objects etc.

There are a few things to note about the default export:

1. You can only have ONE default export per file
2. When you import from a default export you need to give it a name
3. This name can be anything when you import it - that's up to you - hence the 'default'
4. It is not possible to use var, let or const with export default.

This brings us to the named export. First an example:

```javascript
// exporting a function and a variable from the 'welcome.js' file
function sayHi(name) {
  `Hello ${name}`;
}

const age = 39;

export { sayHi, age };

// importing function and variable
import { sayHi, age } from "./welcome.js";
```

A few notes about the named export:

1. You can have as many named exports as you want
2. It's therefore useful if you need to specifically target certain elements from your imported JS file
3. You also have to use the same name in the import as the export

The problem with named exports is that you need to know the exact name of what's being exported because that's what you need to reference. Another problem is that if you need to import a lot of things then the number of variable names in between your moustaches '{}' might be large. The latter problem can be solved by using a wildcard when you do your import:

```javascript
    // grab everything - easier than the example below
    import * from './welcome.js'

    // import multiple
    import { one, two, three, four etc } from './numberFile.js'
```
