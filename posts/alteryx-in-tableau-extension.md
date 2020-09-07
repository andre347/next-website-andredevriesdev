---
title: How to Run Alteryx in a Tableau Dashboard
date: "2019-01-04"
template: post
draft: false
description: Ever wanted to execute your Alteryx workflows or analytic apps from within your Tableau dashboard? Read how in this blog!
category: "Tableau"
socialImage: https://cdn-images-1.medium.com/max/1600/1*gZkBJWwNX5P6Lipkox_d9Q.png
tags:
  - tableau
  - alteryx
---

Ever wanted to execute your Alteryx workflows or analytic apps from within your Tableau dashboard? _Now you can with the Run Alteryx in Tableau Extension!_

![How to Run Alteryx in a Tableau Dashboard](https://cdn-images-1.medium.com/max/1600/1*gZkBJWwNX5P6Lipkox_d9Q.png)

What you'll need in order to use this extension is Alteryx (obvs) Designer & Server. You also need to use a version of Tableau that supports the use of extensions (2018.2+)

Want to see this extension in action? Watch the video below

<center>
<iframe width="100%" height="415" src="https://www.youtube.com/embed/ClbkxeLemKQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</center>

You can grab the source code for this extension from [my Github page][3]. In there you'll also find the .trex file that you need to load into your Tableau dashboard.

> As mentioned in the video and on my Github page — this extension is not a fully finished product yet. It's been stuck on my harddrive for too long and I'd like others to start using/testing it and therefore you're also free to make changes as you like. I've also encountered some bugs so please bear that in mind when you start using it.

The stack behind this extension is [Vue.js][4] with [Vuetify][5] and [Vuex][6] for state management. I use the [Alteryx Gallery API][7] to send and get requests to Alteryx.

[1]: https://cdn-images-1.medium.com/fit/c/100/100/1*tGdCsXyy90JvZ3c4EdEsjQ.jpeg
[2]: https://cdn-images-1.medium.com/max/1600/1*gZkBJWwNX5P6Lipkox_d9Q.png
[3]: https://github.com/andre347/run-alteryx-tableau-extension
[4]: https://vuejs.org/
[5]: https://vuetifyjs.com/en/
[6]: https://vuex.vuejs.org/
[7]: https://gallery.alteryx.com/api-docs/
