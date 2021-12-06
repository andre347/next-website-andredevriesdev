---
title: "Scheduling dbt Core with Github Actions"
date: 2021/12/07
template: post
draft: true
description: The data space is a super interesting area to be involved in. Some tools have been around for many years and have defined how we operate and work with data. However, lately we have seen some trends around tooling appear that are worth investigating. In this blog post, I will discuss three key trends that I think will define the future of the data landscape.
category: dbt
socialImage: https://res.cloudinary.com/dmim37dbf/image/upload/c_scale,h_600/v1638043234/data-trend-blog/nick-fewings-zF_pTLx_Dkg-unsplash.jpg
tags:
  - dbt
  - data analytics
---

I have been using dbt more and more as my main tool for data transformation and data modelling. dbt Labs (the company behind dbt) offers two types of products: dbt Cloud and dbt Core. The latter is an open source CLI tool, which gives you the main components of a dbt project. The cloud offering (dbt Cloud) includes a lot more functionality, including an easy way to schedule your dbt runs. However, if you don't want to use dbt Cloud or want a bit more flexibility for configuring your dbt runs then you could also use Github Actions as a way of deploying and running your models. In fact, the analytics side of this website uses this particular setup with a daily Github Action job. There are a lot more options for orchastrating dbt Core, including using Apache Airflow but I found Github Actions to be an easy and lightweight solution.

## What are Github Actions?

dbt is built for git and it is the perfect tool to integrate with your continuous integration and continuous delivery (CI/CD) pipeline. [Github Actions](https://github.com/features/actions) make it easy to automate your software workflows and allows you to automate your build, test, and deployment pipeline. Typically Gtihub provides the virtual machines for you to run your workflows, making it super easy to get up an running. They also have a [generous free tier](https://docs.github.com/en/actions/learn-github-actions/usage-limits-billing-and-administration). Actions typically [configured](https://docs.github.com/en/actions/learn-github-actions/events-that-trigger-workflows) run on particular _triggers_ such as forking a repo, commenting on an issue, pushing to a branch etc. You can also configure actions to run on a schedule via CRON. That is the option we are going to look at in this blog post.

# How to configure Github Actions for dbt

Github Actions workflows are defined by a YAML file, which is checked in to your repository in a `.github/workflows` folder. It will run when it is triggered by an event in your repository, or they can be triggered manually, or at a defined schedule (CRON). You can configure Github Actions for any of your repositories on Github. There are a few steps involved for each workflow you want to configure. Let's take a look at configuring one for your dbt project:

1. Create `.github/workflows/` directory to store your workflow YAML files
2. In this folder create file called 'schedule_dbt_job.yml'

```yaml
name: schedule_dbt_job

on:
  schedule:
    # run at 7AM every single day
    - cron: "0 7 * * *"
  push:
    branches:
      # run on push to development branch
      - development
env:
  DBT_PROFILES_DIR: ./

  DBT_SNOWFLAKE_USERNAME: ${{ secrets.DBT_SNOWFLAKE_USERNAME }}
  DBT_SNOWFLAKE_PW: ${{ secrets.DBT_SNOWFLAKE_PW }}

jobs:
  schedule_dbt_job:
    name: schedule_dbt_job
    runs-on: ubuntu-latest

    steps:
      - name: Check out
        uses: actions/checkout@master

      - uses: actions/setup-python@v1
        with:
          python-version: "3.7.x"

      - name: Install dependencies
        run: |
          pip install dbt
          dbt deps

      # Add dbt seed or other commands here if needed
      - name: Run dbt models
        run: dbt run

      - name: Test dbt models
        run: dbt test
```
