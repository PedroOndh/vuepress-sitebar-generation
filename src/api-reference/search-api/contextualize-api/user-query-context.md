---
title: User and Query Context
publish-date: 2020-06-05 00:00 am
categories: search-api,contextualize-api
author: pedroo@empathy.co
order: 5
---

# User and Query Context

## What is this about?
Returns the user context information (top product attributes and the last visited products) and the query context (top product attributes and the top specific products) for a specific user and query. While the "*userPreferences*" are query agnostic, "*userLastViewedProducts*"*and* the "*queryContext"* information are returned for the specific requested query.

The product attribute preferences are calculated based on user clicks, add-to-carts and purchases and the values are normalized using a linear function.

"*userLastViewedProducts*" weight is calculated using the difference between the last time there was an interaction with the product and "now". So, the more recent events will have more weight than others that happened long ago.

## About this Endpoint
Structure for calling the endpoint.

### Request
**GET** `https://api.empathybroker.com/contextsearch/v2/all/{instance_id}?{Input_Parameters}`

**Input Parameters**

| Parameter name                                                                                                             | Data Type |
| -------------------------------------------------------------------------------------------------------------------------- | --------- |
| **Required:**                                                                                                              |           |
| [user](/api-reference/search-api/contextualize-api/contextualize-input-parameter-glossary/)                                                                  | String    |
| [query](/api-reference/search-api/contextualize-api/contextualize-input-parameter-glossary/)                                                                 | String    |
| [lang](/api-reference/search-api/contextualize-api/contextualize-input-parameter-glossary/)           | String    |
| **Not required:**                                                                                                          |           |
| [session](/api-reference/search-api/contextualize-api/contextualize-input-parameter-glossary/)                                                               | String    |
| [preferences.rows](/api-reference/search-api/contextualize-api/contextualize-input-parameter-glossary/) | Integer   |
| [last_products.rows](/api-reference/search-api/contextualize-api/contextualize-input-parameter-glossary/)                                                    | Integer   |
| [session.preferences.rows](/api-reference/search-api/contextualize-api/contextualize-input-parameter-glossary/)                                              | Integer   |
| [session.last_products.rows](/api-reference/search-api/contextualize-api/contextualize-input-parameter-glossary/)                                            | Integer   |
| [attributes.row](/api-reference/search-api/contextualize-api/contextualize-input-parameter-glossary/) | Integer   |
| [products.rows](/api-reference/search-api/contextualize-api/contextualize-input-parameter-glossary/)  | Integer   |
| [events.min](/api-reference/search-api/contextualize-api/contextualize-input-parameter-glossary/)     | Integer   |
| [userAttributes](/api-reference/search-api/contextualize-api/contextualize-input-parameter-glossary/) | String   |
| [maxTries](/api-reference/search-api/contextualize-api/contextualize-input-parameter-glossary/)       | Integer   |
### URL example
```
https://api.empathybroker.com/contextsearch/v2/all/ebdemo?user=id_1234&session=id_5678&query=dress&lang=en&preferences.rows=1&last_products.rows=2&session.preferences.rows=3&session.last_products.rows=3&attributes.rows=3&products.rows=2&userAttributes=gender:male,size:M&maxTries=3&events.min=25
```

## Responses
Responses examples for successful and failing calls to the endpoint.

"*userPreferences*" and "*topAttributes*" objects don't have a fixed order and it may change in between requests. Nevertheless, "*values"* are sorted by "*weight*" in descending order.

"*topProducts*" are sorted by "*weight*" in descending order.

Remember that your EB Contextualize configuration could use different fields for the preferences and *topAttributes* calculations, so the ones showing aside ("*brand*" and "*gender*") are just examples.

### 200
**Successful request**

Type: application/json  

```
{
  "userContext": {
    "userPreferences": [
      {
        "field": "brand",
        "values": [
          {"value": "apple", "weight": 3},
          {"value": "sony", "weight": 2.1}
        ]
      },
      {
        "field": "gender",
        "values": [
          {"value": "woman", "weight": 3}
        ]
      }
    ],
    "sessionPreferences": [
      {
        "field": "brand",
        "values": [
          {"value": "apple", "weight": 3}
        ]
      },
      {
        "field": "gender",
        "values": [
          {"value": "woman", "weight": 3}
        ]
      }
    ],
    "userLastViewedProducts": [
      {"value":"213115", weight:"3"},
      {"value":"213149", weight:"1.3"}
    ],
    "sessionLastViewedProducts": [
      {"value":"213142", weight:"3"}
    ]
  },
  "queryContext": {
    "topAttributes": [
      {
        "field": "brand",
        "values": [
          {"value": "apple", "weight": 3},
          {"value": "sony", "weight": 1.8}
        ]
      },
      {
        "field": "category",
        "values": [
          {"value": "mobiles", "weight": 3}
        ]
      }
    ],
    "topProducts": [
      {"value":"213115", weight:"3"},
      {"value":"213149", weight:"1.3"}
    ]
  }
}
```
### 400
**Mandatory query parameter is missing**

Type: application/json

```json
{
  "code": 400,
  "error": "XXX is mandatory"
}
```
### 404
**Either client or endpoint don't exist**

Type: application/json

```json
{
  "code": 400,
  "error": "XXX not found"
}
```

