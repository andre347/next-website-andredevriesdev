---
title: Deploying multiple AWS Amplify environments on Vercel
date: "2021-04-28"
template: post
draft: false
description: I am working on a large Next.js project that uses Vercel for hosting and some of the backend is provided by AWS Amplify. I had to find a way to link specific Amplify environments to different Git branches and deployment branches on Vercel. This didn't seem as straightforward as expected.
# socialImage: https://upload.wikimedia.org/wikipedia/commons/4/4b/Tableau_Logo.png
category: "AWS"
tags:
  - tableau
  - javascript
  - reactjs
---

I am working on a large Next.js project that uses Vercel for hosting and some of the backend is provided by AWS Amplify. I had to find a way to link specific Amplify environments to different Git branches and deployment branches on Vercel. This didn't seem as straightforward as expected.

### Problem

AWS Amplify is a great platform for creating backend applications. With a few commands, you can create serverless functions, authentication and storage tables. Within an Amplify 'project,' you can have multiple environments. These are isolated containers that have their own version of the resources that you created. For example, you can have a development Cognito pool (authentication) and a production Cognito pool. Both live in the same project but are in different environments. If you use Amplify also for hosting your frontend would automatically pick up the correct backend environment. However, Next.js is not fully supported yet by Amplify. Hence I opted for using Vercel for the hosting, and the backend provided by AWS. The problem is that when you switch between git branches and Amplify environments (amplify env checkout nameofenv) you automatically generate a new 'aws-exports.js', overwriting the old one. This also means when you merge changes from your development branch into your production branch it keeps on overwriting that file. This aws exports file is super important because it contains the logic for choosing which resources to use from which Amplify environment.

### Solution

I don't think this is the perfect solution but I found it works for me. In my workflow, I have _two_ Git branches: development and production. These link to _two_ deployments on Vercel from the same repository. In Amplify I have _one_ project with two environments: development and production. The key here is to **not** include the 'aws-exports.js' file your .gitignore file. Otherwise, it won't pick up the correct environment when deployed to Vercel. The next step is to add the 'aws-exports.js' file to a new file in the root of your repo: .gitattributes. In this file you only have to add this line:

```
aws-exports.js merge=ours
```

Then you need to run this command (just a one of thing):

```
git config --global merge.ours.driver true
```

What this does is not include this file when you merge changes from development into production.

The next step is to always switch both the git branch and the amplify environment when you switch between branches. This is essential. You can then merge and or make changes in the branch and push up to Vercel. I created two aliases in my .zshrc file to make sure I don't mess up when making changes (make sure to reboot your shell after making changes to this file).

```
# alias for  Dev
alias dev-branchexample="git checkout development && amplify env checkout dev"

# alias for Prod
alias prod-branchexample="git checkout production && amplify env checkout prod"
```

This makes sure that you use the correct Amplify environment linked to the correct branch on Vercel.
