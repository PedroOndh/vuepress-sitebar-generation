---
title: Contextualize API Input Parameter Glossary
publish-date: 2020-06-05 00:00 am
categories: search-api,contextualize-api
author: pedroo@empathy.co
---

# Contextualize API Input Parameter Glossary

## Parameters Mandatory for Some Endpoints
| Parameter | Description                                                                   | Data Type | Endpoints                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --------- | ----------------------------------------------------------------------------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| user      | Identifier that represents an unique user along the client                    | String    | [User](/api-reference/search-api/contextualize-api/user-context/), [User - Products](/api-reference/search-api/contextualize-api/user-context/user-context-products/), [User - Preferences](/api-reference/search-api/contextualize-api/user-context/user-context-preferences/), [User and Query ](/api-reference/search-api/contextualize-api/user-query-context/)                                                                                                                                                                              |
| query     | Search term that user did                                                     | String    | [User](/api-reference/search-api/contextualize-api/user-context/), [User - Products](/api-reference/search-api/contextualize-api/user-context/user-context-products/), [Query](/api-reference/search-api/contextualize-api/query-context/), [Query - Attributes](/api-reference/search-api/contextualize-api/query-context/query-context-attributes/), [Query - Products](/api-reference/search-api/contextualize-api/query-context/query-context-products/), [User and Query ](/api-reference/search-api/contextualize-api/user-query-context/)                   |
| lang      | Language of the query                                                         | String    | [Query](/api-reference/search-api/contextualize-api/query-context/), [Query - Attributes](/api-reference/search-api/contextualize-api/query-context/query-context-attributes/), [Query - Products](/api-reference/search-api/contextualize-api/query-context/query-context-products/), [User and Query ](/api-reference/search-api/contextualize-api/user-query-context/), [Category](/api-reference/search-api/contextualize-api/category-context/), [Category - Preview](/api-reference/search-api/contextualize-api/category-context/category-context-preview/) |
| pid       | Search category scores for this product. Is required to send **one at least** | Integer   | [Category](/api-reference/search-api/contextualize-api/category-context/)                                                                                                                                                                                                                                                                                                                                                                                                                                             |

## Purely Optional Parameters
| Parameter                  | Description                                                                                    | Data Type | Default                                                                                 | Endpoints                                                                                                                                                                                                                                                                                                                            |
| -------------------------- | ---------------------------------------------------------------------------------------------- | --------- | --------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| rows (attributes)          | Number of values of each field                                                                 | Integer   | 1                                                                                       | [Query - Attributes](/api-reference/search-api/contextualize-api/query-context/query-context-attributes/),                                                                                                                                                                                                                                    |
| rows (products)            | Number of products to return                                                                   | Integer   | 5                                                                                       | [Query - Products](/api-reference/search-api/contextualize-api/query-context/query-context-products/)                                                                                                                                                                                                                                         |
| preferences.rows           | Number of user values of each field                                                            | Integer   | 1                                                                                       | [User](/api-reference/search-api/contextualize-api/user-context/), [](/api-reference/search-api/contextualize-api/user-context/user-context-products/)[User and Query](/api-reference/search-api/contextualize-api/user-query-context/)                                                                                                                         |
| last_products.rows         | Number of user products to return                                                              | Integer   | 5                                                                                       | [User](/api-reference/search-api/contextualize-api/user-context/), [](/api-reference/search-api/contextualize-api/user-context/user-context-products/)[User and Query](/api-reference/search-api/contextualize-api/user-query-context/)                                                                                                                         |
| session.preferences.rows   | Number of session values of each field                                                         | Integer   | 1                                                                                       | [User](/api-reference/search-api/contextualize-api/user-context/), [](/api-reference/search-api/contextualize-api/user-context/user-context-products/)[User and Query](/api-reference/search-api/contextualize-api/user-query-context/)                                                                                                                         |
| session.last_products.rows | Number of session products to return                                                           | Integer   | 5                                                                                       | [User](/api-reference/search-api/contextualize-api/user-context/), [](/api-reference/search-api/contextualize-api/user-context/user-context-products/)[User and Query](/api-reference/search-api/contextualize-api/user-query-context/)                                                                                                                         |
| attributes.rows            | Number of values of each field                                                                 | Integer   | 1                                                                                       | [Query](/api-reference/search-api/contextualize-api/query-context/), [](/api-reference/search-api/contextualize-api/user-context/user-context-products/)[User and Query](/api-reference/search-api/contextualize-api/user-query-context/)                                                                                                                       |
| products.rows              | Number of products to return                                                                   | Integer   | 5                                                                                       | [Query](/api-reference/search-api/contextualize-api/query-context/), [](/api-reference/search-api/contextualize-api/user-context/user-context-products/)[User and Query](/api-reference/search-api/contextualize-api/user-query-context/)                                                                                                                       |
| events.min                 | Minimum number of events required to return a field or product.                                | Integer   | client configuration / 10 ( in *Query Context - Attributes*: client configuration / 25) | [Query](/api-reference/search-api/contextualize-api/query-context/), [Query - Attributes](/api-reference/search-api/contextualize-api/query-context/query-context-attributes/), [Query - Products](/api-reference/search-api/contextualize-api/query-context/query-context-products/), [User and Query](/api-reference/search-api/contextualize-api/user-query-context/) |
| userAttributes             | User attributes to get segmentation data. *Format example:* userAttributes= gender:male,size:M | String    |                                                                                         | [Query](/api-reference/search-api/contextualize-api/query-context/), [Query - Attributes](/api-reference/search-api/contextualize-api/query-context/query-context-attributes/), [Query - Products](/api-reference/search-api/contextualize-api/query-context/query-context-products/), [User and Query](/api-reference/search-api/contextualize-api/user-query-context/) |
| maxTries                   | Max tries to do segmentation intents                                                           | Integer   | client configuration / 3                                                                | [Query](/api-reference/search-api/contextualize-api/query-context/), [Query - Attributes](/api-reference/search-api/contextualize-api/query-context/query-context-attributes/), [Query - Products](/api-reference/search-api/contextualize-api/query-context/query-context-products/), [User and Query](/api-reference/search-api/contextualize-api/user-query-context/) |

## Category Context Preview Parameters
| Parameter              | Description                                                 | Data Type | Mandatory | Default                                          | 
| ---------------------- | ----------------------------------------------------------- | --------- | --------- | ------------------------------------------------ |
| categoryEqualize       | Custom equalize to obtain products scores related to        | Object    | **Yes**   |                                                  |    
| categoryEqualizeEvents | Events weights to affect scores                             | Object    | **Yes**   |                                                       |
| categoryId             | CategoryId to get the product scores                        | Integer   | **Yes**   |                                                       |
| lang                   | Language of the category to request                         | String    | **No**    | There is a default lang in service configuration  |
| field                  | Field name to get value from the products in the preview    | Object    | **No**    | {"eb_name", "eb_image"}                          |     
| maxProducts            | Maximum of products in the output result (*max value*: 100) | Integer   | **No**    | 50                                               |
