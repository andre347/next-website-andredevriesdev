---
title: "Scheduling dbt Core with Github Actions"
date: 2021/12/07
template: post
draft: true
description: "dbt is a great tool for data transformation. All of your data pipelines and configurations are written in common file types such as SQL and YAML. There are also many third-party tools you can use and configure to schedule and automate your dbt runs. In this blog post, I explain how you can set this up via one of these solutions: Github Actions."
category: DBT
socialImage: https://res.cloudinary.com/dmim37dbf/image/upload/v1638911250/dbt-blog-github-action/dbt-github.png
tags:
  - dbt
  - data analytics
  - github
---

I have been using dbt more and more as my main tool for data transformation and data modelling. [dbt Labs](https://www.getdbt.com/) (the company behind dbt) offers two types of products: dbt Cloud and dbt Core. The latter is an open-source CLI tool, which gives you the main components of a dbt project. The cloud offering (dbt Cloud) includes a lot more functionality, including an easy way to schedule your dbt runs. However, if you don't want to use dbt Cloud or want a bit more flexibility for configuring your dbt runs then you could also use Github Actions as a way of deploying and running your models. In fact, the analytics pipeline of this website uses this particular setup with a daily Github Action job. There are a lot more options for orchestrating dbt Core, including using Apache Airflow but I found Github Actions to be an easy and lightweight solution.

## What are Github Actions?

dbt is built for [git](https://git-scm.com/) and it is the perfect tool to integrate with your continuous integration and continuous delivery (CI/CD) pipeline. [Github Actions](https://github.com/features/actions) make it easy to automate your software workflows and allows you to automate your build, test, and deployment pipeline. Typically Github provides the virtual machines for you to run your workflows, making it super easy to get up and running. They also have a [generous free tier](https://docs.github.com/en/actions/learn-github-actions/usage-limits-billing-and-administration). Actions are typically [configured](https://docs.github.com/en/actions/learn-github-actions/events-that-trigger-workflows) to run on particular _triggers_ such as forking a repo, commenting on an issue, pushing to a branch etc. You can also configure actions to run on a schedule via CRON. That is the option we are going to look at in this blog post.

## How to configure Github Actions for dbt

Github Actions workflows are defined by a YAML file, which is checked into your repository in a `.github/workflows` folder. It will run when it is triggered by an event in your repository, or it can be triggered manually, or at a defined schedule (CRON). You can configure Github Actions for any of your repositories on Github. There are a few steps involved for each workflow you want to configure. Let's take a look at configuring one for your dbt project:

1. Create `.github/workflows/` directory in the root of your dbt project to store your workflow YAML files
2. In this folder create a file called 'schedule_dbt_job.yml'
3. Copy/paste the YAML below

   ```yaml
   name: schedule_dbt_job

   on:
   schedule:
       # run at 7AM every single day
       # https://crontab.guru <-- for generating CRON expression
       - cron: "0 7 * * *"
   push:
       branches:
       # run on push to development branch
       - development
   env:
   DBT_PROFILES_DIR: ./

   DBT_SNOWFLAKE_USERNAME: ${{ secrets.DBT_SNOWFLAKE_USERNAME }}
   DBT_SNOWFLAKE_PW: ${{ secrets.DBT_SNOWFLAKE_PW }}
   DBT_SNOWFLAKE_ROLE: ${{ secrets.DBT_SNOWFLAKE_ROLE }}

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

       # dbt related commands here - run use --target prod/dev to run for specific environments
       - name: Run dbt models
           run: dbt run

       - name: Test dbt models
           run: dbt test
   ```

4. Create a `profiles.yml` [file](https://docs.getdbt.com/reference/profiles.yml/) in the root of your dbt project if it does not exist yet. In this document you have to configure your connection details for setting up a connection to your datawarehouse. In this YAML you will see that I am using Snowflake, but this should also work for any of other datawarehouses that are supported by dbt (Google Big Query & Amazon Redshift).

   ```yaml
   default:
     outputs:
       dev:
       type: snowflake
       threads: 1
       account: "{{ env_var('DBT_SNOWFLAKE_ACCOUNT') }}"
       user: "{{ env_var('DBT_SNOWFLAKE_USERNAME') }}"
       role: "{{ env_var('DBT_SNOWFLAKE_ROLE') }}"
       password: "{{ env_var('DBT_SNOWFLAKE_PW') }}"
       database: "{{ env_var('DBT_SNOWFLAKE_DATABASE') }}"
       warehouse: "{{ env_var('DBT_SNOWFLAKE_WAREHOUSE') }}"
       schema: "{{ env_var('DBT_SNOWFLAKE_SCHEMA') }}"
       client_session_keep_alive: False
       query_tag: github_action_query
   ```

5. Before we can schedule this dbt project we need to configure the [environment variables](https://docs.github.com/en/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idstepsenv) in your Github repo. Whenever your Github Action runs it will use these variables at run time. You can configure these secrets via Settings > Secrets > New Repository Secret. You need to add all the variables that are specified in the YAML above. For example, the Snowflake Account variable would be 'DBT_SNOWFLAKE_ACCOUNT'.

![https://res.cloudinary.com/dmim37dbf/image/upload/v1638908821/dbt-blog-github-action/dbt-secrets-github-action.png](https://res.cloudinary.com/dmim37dbf/image/upload/v1638908821/dbt-blog-github-action/dbt-secrets-github-action.png)

## Wrap-up

You should now be able to push all of your changes to your Github repository. If you navigate to Github you will see an 'Actions' tab. In here you will be able to see all of your past runs. Whenever I develop and test my dbt setup in Github I also use the push to branch event in my workflow YAML - rather than waiting till it is the configured CRON time!
