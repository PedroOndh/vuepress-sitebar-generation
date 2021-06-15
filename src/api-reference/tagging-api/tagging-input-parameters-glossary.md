---
title: Input Parameters Glossary
publish-date: 2019-06-13 00:00 am
categories: tagging-api
author: laram@empathy.co
order: 5
---

# Input Parameters Glossary

## Main Parameters

| PARAMETER | DESCRIPTION |   TYPE  | REQUIRED | TAGGING |
|---------|-------------|:-------:|:----------:|:---------:|
| q/terms         |Search term of the query (i.e jeans, red lipstick, wood table ...) | String  |  YES| Search |
| totalHits/results |Number of the results for the search term or the number of products in a category | Integer |  YES|Search and Browse|
| page      |Number of the page visualised by the user| Integer |  YES|Search |
| position       | Position of the product selected|Integer|NO|Search and Browse|
| categoryId|Category ID to track (i.e JQW_458h, cat_name, catName1 ...)| String  |  NO|Browse|
| productId  |Id of the product of the interaction (i.e PR_1111, 014-025-2 ...)| String  |  NO|Search and Browse|
| title  |Title of the product of the interaction (i.e jeans slouchy black, red lipstick ...)| String  |  YES|Search and Browse|
| revenue  |Revenue of the specific product purchased (i.e 30.65, 1.5 ...)| String  |  YES|Search|
| currency  |Currency used in revenue param (i.e DKK, USD, EUR ...)| String  |  YES|Search|
| transactionId  |Transaction ID (i.e 457892-WD, 342a-54f-167 ...)| String  |  YES|Search|


## Filters

| PARAMETER | DESCRIPTION |   TYPE  | REQUIRED | TAGGING |
|---------|-------------|:-------:|:----------:|:--------------------------------------:|
| scope     |Scope of the query (i.e device type)|String|NO|Search and Browse|
| lang      |Language of the query (i.e es,it,fr...)| String  |YES|Search and Browse|
| store     |Store id assigned to the query performed| String  |NO|Search and Browse|
| catalog   |Catalog value assigned to the query performed| String  |NO|Search and Browse|
| section   |Section value assigned to the query performed| String  |NO|Search and Browse|

**IMPORTANT:** Filter values have to be defined with Delivery Team before its integration.

## User Parameters

| PARAMETER | DESCRIPTION | TYPE | REQUIRED | TAGGING |
|------------|-------------|----|----------|---------|
| session   |Session id who launched the search. Short term id. Recommended expiration about 30'|[UUID](https://en.wikipedia.org/wiki/Universally_unique_identifier)|Required for analytics and _next queries_ service|Search and Browse|
| user      |User id who launched the search|[UUID](https://en.wikipedia.org/wiki/Universally_unique_identifier)|Required for analytics and _next queries_ service|Search and Browse|
| user_type      |Collects if user is new, recurrent or ignored|String|No|Search and Browse|

**IMPORTANT:** 
- Both ids must be added for next queries service to work. If one of them is not available, session and user parameters could be the same UUID.
- If user params are not sent, they'll be generated randomly in each request to Empathy services.
- By using JS Library Integration: _consent_ parameter has to be included in the instance initialisation collecting if user accepted or not cookies.
- By using API REST Integration: both parameters have to be empty if user has not accepted cookies.

## Additional Common Parameters
|   PARAMETER  | DESCRIPTION | TYPE | REQUIRED | TAGGING |
|------------|-------------|----|----------|---------|
| origin       | Type of the query performed by the user (default, empathize, linked, next query ...)|String|NO|Search|
| filtered     | Checks whether the query/view has been filtered or not |String|NO|Search|
| boosted      | Boost descriptor (use "default" for manual boosts).If boosted value is "default" a boostId is required |String|NO|Search|
| boostedId    | Manual boost Id, required for default boosts. |String |NO|Search|
| jsonCallback | Name of the callback that will be executed after the request. | Short |NO|Search|
| front     | Front end identifier |String|NO|Search and Browse|
| spellcheck   | Checks whether the query has come via spellcheck or not |String|NO|Search|

## Additional Interactions Parameters
| PARAMETER | DESCRIPTION                                                        | TYPE    | REQUIRED | TAGGING           |
| --------- | ------------------------------------------------------------------ | ------- | -------- | ----------------- |
| type      | Clicked result's type                                              | String  | NO       | Search            |
| url       | URL of the product detail page corresponding to the clicked result | String  | YES      | Search and Browse |
| follow    | If set to true, user is redirected to url parameter value          | Boolean | YES      | Search and Browse |

## Revenue Parameters
| PARAMETER     | DESCRIPTION                                                                                                                                                                              | TYPE   | REQUIRED | TAGGING |
| ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ | -------- | ------- |
| transactionId | Arbitrary identifier to link all checkout events that correspond to a unique transaction - typically a UUID, the important thing is for it to be unique and consistent for transactions. | String | NO       | Browse  |
| revenue       | Numeric value of the product revenue/price                                                                                                                                               | Number | NO       | Browse  |
| currency      | Currency code for the revenue amount. Must be a valid ISO 4217 currency code.                                                                                                            | String | NO       | Browse  |

