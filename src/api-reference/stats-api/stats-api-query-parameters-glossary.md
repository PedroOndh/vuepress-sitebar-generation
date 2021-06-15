---
title: Query parameters glossary
publish-date: 2019-07-26 00:00 am
categories: stats-api
author: laram@empathy.co
order: 13
---

# Query parameters glossary

## Main Parameters

| PARAMETER | DESCRIPTION |   TYPE  | REQUIRED |
|---------|-------------|:-------:|:----------:|
| start_date |Initial date of the data request| Int (ISO 8601 format)  |  YES|
| end_date |Finish date (not included) of the data request| Int (ISO 8601 format)|  YES|
| format |Output format, it can be either 'json' o 'csv'. Value by default is *json*| String|  NO|


## Filters & Pivots

| PARAMETER | DESCRIPTION |   TYPE|
|---------|-------------|:-------:|
| scope     |Scope of the query (i.e device type: desktop, mobile..)|String|
| lang      |Language of the query (i.e es,it,fr...)| String  |
| store     |Store id for data requested| String  |
| catalog   |Catalog value for data requested| String  |
| section   |Section value for data requested| String  |

**IMPORTANT:** Filters to be used should be listed within the "filters" parameter. Filters values should be added as independent params.

**EXAMPLE:** `dailyDist?filters=lang,store&lang=es&store=142856`

## Report specific parameters

| PARAMETER | DESCRIPTION | TYPE | REQUIRED | REPORT |
|---------|-------------|:----:|:----------:|:----------:|
| type   |Type of terms to return (0: all, 1: queries w/results, 2: no results queries)|Int|No|Terms, Keyword and Top Reports|
| terms      |Query to search|String|Yes except in [Term Success Report](/api-reference/stats-api/stats-api-terms-report/stats-api-terms-success-report/)|Terms reports|
| keyword      |Given a keyword, find all those queries that contain it together with the times all the keywords appear|String|No|Keyword Reports|
| terms      |is used to trigger the TOP 'n' categories which contain, among its words, the ones specified in this array|String|No|Category reports|
| levels      |Refer to the category position in a given breadcrumb (i.e. '[Man > Pants], 'Pants' in this case has a level 2). When a certain level or levels are specified within the request, only those meeting the criteria are shown (not those before 'n-level' or after 'n-level')|list[str]|No|Category reports|
| parent_ids      |Return only those categories which immediate predecessor category is among these IDs.|list[str]|No|Category reports|
| success      |Order results by successCount|Bool|No|Category reports|
| browsing      |For customers that are tagging navigation (aka browse) events setting this field to True toggles the report to browsing mode: the categories include a "views_data" field and all fields refers to browsing data.|Bool|No|Category reports|
| category_id      |Category to calculate its distribution|String|Yes|Category Distribution Report|
| top_k      |Number of results by group of pivots|Int|No|Top Reports|
| group      |Return results grouped by pivots (false, true)|String|No|Top Reports|
| min_sessions      |Minimum sessions, where the pair of queries was repeated, required to return each result|Int|No|Next Queries Reports|
| group      |Return results grouped by pivots (false, true)|String|No|Top Reports|
| config_id      |Equalize config to filter|String|No|Equalize Config Report|
| boost_id      |Id of a boost to include in the response|String|No|Boost Config Report|

## Format Parameters

|   PARAMETER  | DESCRIPTION | TYPE | REQUIRED | REPORT |
|------------|-------------|:----:|:----------:|:---------:|
| offset       | Number of results to omit|Int|NO|All reports|
| rows     |Number of results to return | Int  |  No|All reports|
| evol      | Calculate the Evolution for specific parameters in the response. |Bool|NO|All reports|

