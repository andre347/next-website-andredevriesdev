---
title: "ES6: What are Classes?"
date: "2019-03-14"
template: post
draft: false
description: ES6 (ECMAScript 2015) introduced a 'new' way of creating constructor functions and prototypes - classes. In this blog I explain how to create classes and why they're being used.
category: "JavaScript"
socialImage: https://res.cloudinary.com/dmim37dbf/image/upload/v1552570190/classes.png
tags:
  - javascript
  - es6
---

### ES6 (ECMAScript 2015) introduced a 'new' way of creating constructor functions and prototypes - classes. New is in quotes here because JavaScript actually doesn't have classes. They are what is commonly known as 'synthetical' sugar. However, I think this type of sugar makes it a lot easier to work with prototypes in JS. Let's take a look at how to create classes and why developers are using them in this blog post.

![ES6: What are Classes?](https://res.cloudinary.com/dmim37dbf/image/upload/v1552570190/classes.png)

If you start learning React, and also if you dive deeper into JavaScript, you will see a lot of things called classes and this is a part of the programming language that you certainly have to learn. **Classes** are _blueprints_ for JavaScript objects. This means that you can create one class and then re-use it. Developers that come from other programming languages (such as Java or Python) will recognise classes immediately. For JavaScript only developers these classes might look a bit foreign. It also took a while for me to actually wrap my head around them.

## Defining Classes

In the [official MDN docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes) we can read the following about defining classes:

> Classes are in fact "special functions", and just as you can define function expressions and function declarations, the class syntax has two components: class expressions and class declarations.

Let's look at class declarations first. We can define a class called 'circle' like so:

```javascript
class Circle {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
  }
}
```

This is an example class for creating SVG circles. These circle need an x and y position but also a radius (r).

An important thing to note here is that classes are not _hoisted._ This means that you can't access your class before you have declared it. You can do this with normal function declarations. This means you can't do the following:

```javascript
// so you can't do this

const c = new Circle(); // Oops, error message

class Circle {}
```

But this _should_ work:

```javascript
class Circle {}

const c = new Circle(); // yep, no error message
```

Functions in classes are called 'methods'. You create them in the same way as normal functions but they are called differently. If we take a look at the first code block in this blog post we see a _constructor_ function. This function is a special type of function. It's being used for creating and initialising an object. You can only have one of these constructor functions in your class. In here you then assign (or bind) the values you pass into the class. The bit between the curly braces after the class declaration is called the body of the class. That is where we see this constructor function, but you can also create other methods here.

```javascript
// a class called circle, with 1 method called showMessage

class Circle {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
  }
  showMessage() {
    return `Your circle has a radius of ${this.r}`;
  }
}

const c = new Circle(100, 200, 400);
console.log(c.showMessage());
```

The main reason why JavaScript developers use classes is because they make it easy to _reproduce_ logic. Imagine you create a class called 'car'. This car class can receive several values, such as the colour of the car, the brand and the top speed. You then have to bind these values in the constructor function. On top of that you can add methods to this car class. A good example would be a drive() or brake() method. These can then be called (which means you execute the methods) and that makes your car either start driving or braking. The good thing about attaching these methods is that they are, as I mentioned before, reproducible. If you have five different cars you don't have to create separate drive and brake functions for each car. Let's see how this looks in a code block:

```javascript
// class car being created

class Car {
  constructor(colour, brand, topSpeed) {
    this.colour = colour;
    this.brand = brand;
    this.topSpeed = topSpeed;
  }
  drive() {
    return `Your ${this.brand} is driving.. vroooemmm vroemmmm`;
  }
  brake() {
    return `Your ${this.brand} is braking.. iiiieeeee`;
  }
}

// use the class

const bmw = new Car("red", "bwm", 220);
```

## Super (man)?

When I started out with learning about classes I often encountered this thing called 'super'. In the beginning I wasn't too sure what it was doing and why developers were using it. Now I know and understand that _Super_ is being used for inheritance. Which to me just sounds like a fancy word for duplicating the class (so creating a new class) and then you're able to add new values and methods. This means you are 'inheriting' the old class. Let's look at an example.

```javascript
// create a basic class with drive method
class Car {
  constructor(colour, brand) {
    this.colour = colour;
    this.brand = brand;
  }

  drive() {
    return `Your ${this.brand} is driving.. vroooemmm vroemmmm`;
  }
}

// extend the class
class NewCar extends Car {
  constructor(speed, topSpeed) {
    super(colour, brand);
    this.colour = colour;
    this.brand = brand;
    this.speed = speed;
    this.topSpeed = topSpeed;
  }
  maxSpeed() {
    if (this.speed < this.topSpeed && this.speed > 0) {
      return `Your ${this.brand} is driving slower than its max`;
    } else {
      return `You're going fast..`;
    }
  }
}
```

Inside a class (newCar for example) you are able to access a parent class (in this case the 'Car' class) by using _super()._ You then have access to the properties of the parent class - those properties are the drive method and also the values.
