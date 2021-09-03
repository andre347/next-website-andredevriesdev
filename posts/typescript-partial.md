---
title: Partial Types in TypeScript
date: 2021/09/03
template: post
draft: false
description: A partial type is a small part of the TypeScript language, but this feature has solved some major annoyances and issues that I ran into while using types with the useState hook in React.
category: "TypeScript"
socialImage: https://res.cloudinary.com/dmim37dbf/image/upload/v1630658242/typescript-partial-blog/typescript-partial.png
tags:
  - javascript
  - reactjs
  - typescript
---

Let's imagine we have the following **CarModel** interface:

```js
interface CarModel {
  brandName: string;
  topSpeed: number;
  numberOfDoors: number;
  isAutomatic?: boolean;
}
```

We are also using a functional React component with the useState hook.

```js
const [car, setCar] = React.useState({});
```

You can see that we are setting the initial state to an empty object. If we would not use TypeScript then we would not see any error messages or type issues. However, by providing a type to this state variable we will run into errors. We can provide a type to the useState hook by doing the following in TypeScript:

<!-- prettier-ignore -->
```js
const [car, setCar] = React.useState<CarModel>({});
```

However, TypeScript does not like this because our intial state is an empty object and is missing the required properties that are specified in the **CarModel** interface. TypeScript is 😡. You will get an error message along the lines of:

```js
Argument of type '{}' is not assignable to parameter of type 'CarModel | (() => CarModel)'.
```

My initial approach to this was setting an alternative type in the useState hook that defines an empty object. Something like this:

<!-- prettier-ignore -->
```js
const [car, setCar] = React.useState<CarModel | object>({});
```

But that does not play nice in the rest of your code because you will not get any of the useful autocompletions (IntelliSense) that TypeScript offers when using the car variable. After some Googling I found [this StackOverflow thread](https://stackoverflow.com/questions/60109782/react-and-typescript-usestate-on-a-object) that uses the 'Partial' type in TypeScript. The partial type has been created to solve this specific usecase. We need to wrap the partial around the type definition and then TypeScript will stop yelling at you and you also get the nice IntelliSense in your text editor.

<!-- prettier-ignore -->
```js
const [car, setCar] = React.useState<Partial<CarModel>>({});
```
