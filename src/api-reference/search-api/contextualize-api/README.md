---
title: Contextualize API
publish-date: 2020-06-03 00:00 am
categories: search-api
author: pedroo@empathy.co
order: 1
---

# Contextualize API

## What is this about?
Contextualize API provides access to user behavioural data that can be used to improve search results ranking.

The data provided by this API addresses different use cases: 

* **context per query**: user interaction data utilizing *index field signals* and *products* 

  * the **user context**: 1 to 1 personalization
  * the **query context:** crowd aggregated behaviour
* **context per category**: product-based interaction weights per category

## Step by step guide
### Step 1: Getting your INSTANCE_ID
undefined

### Step 2: Ask for Contextualize activation
Once you have an **INSTANCE_ID,** the next step is to activate the contextualisation for your searches.

Our integrations experts will setup the most interesting fields for each use case and, from that moment, interactions and searches of each user will generate a totally anonymous preference profile that will allow personalising the results.

### Step 3: Enabling data collection via events
In case empathy frontend is used, the integration is already included. Otherwise implementation of tagging events needed.

### Step 4: Start using the available endpoints
Once contexts have been activated you can start using the endpoints listed underneath

* [User Context](/api-reference/search-api/contextualize-api/user-context/)

  * [User Context - Products](/api-reference/search-api/contextualize-api/user-context/user-context-products/)
  * [User Context - Preferences](/api-reference/search-api/contextualize-api/user-context/user-context-preferences/)
* [Query Context](/api-reference/search-api/contextualize-api/query-context/)

  * [Query Context - Attributes](/api-reference/search-api/contextualize-api/query-context/query-context-attributes/)
  * [Query Context - Products](/api-reference/search-api/contextualize-api/query-context/query-context-products/)
* [User and Query Context ](/api-reference/search-api/contextualize-api/user-query-context/)
* [Events](/api-reference/search-api/contextualize-api/contextualize-events/)
* [Category Context](/api-reference/search-api/contextualize-api/category-context/)

  * [Category Context - Preview](/api-reference/search-api/contextualize-api/category-context/category-context-preview/)


