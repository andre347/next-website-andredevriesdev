---
tags:
  - retool
date: "2023-08-14"
template: post
draft: false
socialImage: https://res.cloudinary.com/dmim37dbf/image/upload/v1692025434/filters-blog-retool/filters-retool.png
title: "Building Cascading Filters in Retool"
category: Retool
description: Cascading filtering is a technique that enables users to interactively narrow down data based on multiple selection criteria. In combination with the new table component they can be easily implemented, offering a seamless experience when creating interactive applications with dynamic data filtering.
---

In this step-by-step guide, we will explore how to leverage [Retool's](https://retool.com) intuitive interface and the flexibility of the [new table component](https://retool.com/blog/supercharging-the-retool-table/) to effortlessly create cascading filters. By the end of this guide, you'll be able to enhance your Retool applications with interactive filtering capabilities, providing users with a seamless and dynamic experience when working with data in their business applications.

## What is cascading filtering?

Cascading filtering is a technique that enables users to interactively narrow down data based on multiple selection criteria. In combination with the new table component they can be easily implemented, offering a seamless experience when creating interactive applications with dynamic data filtering.

With cascading filters, users can progressively refine their data views by selecting values in a hierarchical manner. For example, selecting a country can dynamically update the available options for selecting states, which in turn updates the available options for selecting cities. This hierarchical filtering allows users to efficiently navigate and explore large datasets, focusing on relevant subsets of data for analysis and decision-making.

<div style="display: flex; justify-content: center;">
  <img src="https://res.cloudinary.com/dmim37dbf/image/upload/v1692021383/filters-blog-retool/hierarchy.png" alt="example cascading filtering" width="500" height="300" />
</div>

The app that we will build in this guide is embedded below. Feel free to play around with it to get a feel for how cascading filters work:

<iframe src="https://andre347.retool.com/apps/Demos/Cascading%20Filters?_embed=true" width="100%" height="550px">

## Setting up the data

The structure of the data is importent when implementing cascading filters. In this example, we will use a dataset containing information about the population of cities in the United States and several countries in Europe. The dataset is structured as follows:

```
 [
  { country: "USA", state: "California", city: "Los Angeles", population: 3990456 },
...
]
```

Each row in this dataset is a city, and each city has a country, state, and population. The country and state are hierarchical, meaning that each state belongs to a country. This hierarchical structure is what enables us to implement cascading filters.

You could query the data from a database, or use Retool Database, but in this instance we're going to use a [Variable](https://docs.retool.com/apps/web/guides/store-temporary-data#store-data-using-variables) - the data is small enough that it's not worth the overhead of a database.

## Creating the application

In Retool we're using three text input components. One for each filter. We're also using a table component to display the filtered data. The table component is configured to display the data from the dataset we created earlier.

<div style="display: flex; justify-content: center;">
  <img src="https://res.cloudinary.com/dmim37dbf/image/upload/v1692022642/filters-blog-retool/CleanShot_2023-08-14_at_15.16.01_2x.png" alt="example cascading filtering" width="500" height="300" />
</div>

## Defining the filter options

The core use case for cascading filtering is to enable users to refine their data views by selecting values in a hierarchical manner. In our example, we want to enable users to select a country, then a state, and finally a city. To achieve this, we need to update the available options for each filter based on the selection in the previous filter. In order to create this JavaScript logic in Retool, we can use a [JavaScript Query](https://docs.retool.com/apps/scripting-events/guides/javascript) - in this app I called this query `transformData` but that naming queries is totally up to you.

This is the complete JavaScript code for updating the available options for the various filters, which is annoted with comments to explain the logic:

```javascript
// the variable contains the dataset
const data = geoData.value;

// the selected country & state
const selectedCountry = countrySelect.value;
const selectedState = stateSelect.value;

// get the unique options for the country filter
const getCountries = () => [...new Set(data.map((item) => item.country))];
// get the unique options for the state filter, based on the selected country
const getStates = (selectedCountries) => {
  let states = data
    .filter((item) => selectedCountries.includes(item.country))
    .map((item) => item.state);
  return [...new Set(states)];
};
// get the unique options for the city filter, based on the selected country & state
const getCities = (selectedCountries, selectedStates) => {
  let cities = [];

  if (selectedStates.length === 0) {
    cities = data
      .filter((item) => selectedCountries.includes(item.country))
      .map((item) => item.city);
  } else {
    cities = data
      .filter(
        (item) =>
          selectedCountries.includes(item.country) &&
          selectedStates.includes(item.state)
      )
      .map((item) => item.city);
  }

  return [...new Set(cities)];
};

// return the unique options for each filter and pass in the selections from the previous filters
return {
  countries: getCountries(),
  states: getStates(selectedCountry),
  cities: getCities(selectedCountry, selectedState),
};
```

Even though this JavaScript is specific to our country > state > city hierarchy example, the general approach can be applied to any dataset with hierarchical data. The code is structured in three parts:

1. Get the unique options for each filter
2. Get the user selections from the filters. E.g the selected country & state
3. Update the other filters based on the user selections

## Configuring the components

Now that we have the logic for updating the available options for each filter, we can configure the components to use this logic. We will start with the country filter, and then apply the same logic to the state and city filters.

<div style="display: flex; justify-content: center;">
  <img src="https://res.cloudinary.com/dmim37dbf/image/upload/v1692023517/filters-blog-retool/CleanShot_2023-08-14_at_15.30.31_2x.png" alt="example cascading filtering" width="800" />
</div>

The country filters data is coming from the `transformData` query. Every time you change a filter, the query will run again and update the available options for the other filters. This is the JavaScript code for the country filter. You can see the event handler specific at the bottom of the screenshot.

The final step is to update the default filters in the table component. This is done by using the new 'default filters' option - which makes it easy to setup filters on the table component. The default filters are configured to use the values from the country, state, and city filters. Intersects can be used when you send an array of filter options, includes is used when you send a single value.

<div style="display: flex; justify-content: center;">
  <img src="
https://res.cloudinary.com/dmim37dbf/image/upload/v1692024890/filters-blog-retool/CleanShot_2023-08-14_at_15.54.25_2x.png" alt="example cascading filtering" width="800" />
</div>
