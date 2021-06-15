---
title: User Context
publish-date: 2020-06-03 00:00 am
categories: search-api,contextualize-api
author: pedroo@empathy.co
order: -1
---

# User Context

## What is this about?
Returns the top product attributes and the last visited specific products for a specific user and session. While "*userPreferences*" are query-agnostic, "*userLastViewedProducts*" are returned for the specific query requested.

The product attribute preferences are calculated based on user clicks, add-to-carts and purchases and the values are normalized using a linear function.

"*userLastViewedProducts*" weight is calculated using the difference between the last time there was an interaction with the product and "now". So, the more recent events will have more weight than others that happened long ago.

## About this Endpoint
Structure for calling the endpoint.

### Request
**GET** `https://api.empathybroker.com/contextsearch/v2/usercontext/all/{instance_id}?{Input_Parameters}`

**Input Parameters**

| Parameter name                                                                                                             | Data Type |
| -------------------------------------------------------------------------------------------------------------------------- | --------- |
| **Required:**                                                                                                              |           |
| [user](/api-reference/search-api/contextualize-api/contextualize-input-parameter-glossary/)                                                                  | String    |
| [query](/api-reference/search-api/contextualize-api/contextualize-input-parameter-glossary/)                                                                 | String    |
| **Not required:**                                                                                                          |           |
| [session](/api-reference/search-api/contextualize-api/contextualize-input-parameter-glossary/)                                                               | String    |
| [preferences.rows](/api-reference/search-api/contextualize-api/contextualize-input-parameter-glossary/) | Integer   |
| [last_products.rows](/api-reference/search-api/contextualize-api/contextualize-input-parameter-glossary/)                                                    | Integer   |
| [session.preferences.rows](/api-reference/search-api/contextualize-api/contextualize-input-parameter-glossary/)                                              | Integer   |
| [session.last_products.rows](/api-reference/search-api/contextualize-api/contextualize-input-parameter-glossary/)                                            | Integer   |
### URL example
```
https://api.empathybroker.com/contextsearch/v2/usercontext/all/ebdemo?user=user_test&session=session_test&query=dress&preferences.rows=5&last_products.rows=5&session.preferences.rows=5&session.last_products.rows=5
```

## Responses
Responses examples for successful and failing calls to the endpoint.

"*userPreferences*" objects don't have a fixed order and it may change in between requests. Nevertheless, values for each *preference* are sorted by "*weight*" in descending order.

Remember that your EB Contextualize configuration could use different fields for the preferences calculations, so the ones showing aside (“*brand*” and “*gender*”) are just examples.

### 200
**Successful request**

Type: application/json  

```
{
  "userPreferences": [
    {
      "field":"brand",
      "values": [
        {"value":"apple","weight":3},
        {"value":"sony","weight":2.1}
      ]
    },
    {
      "field":"gender",
      "values": [
        {"value":"woman","weight":3}
      ]
    }
  ],
  "sessionPreferences": [
    {
      "field":"brand",
      "values": [
        {"value":"apple","weight":3}
      ]
    },
    {
      "field":"gender",
      "values": [
        {"value":"woman","weight":3}
      ]
    }
  ],
  "userLastViewedProducts": [
    {"value":"213115", weight:3},
    {"value":"213149", weight:1.3}
  ],
  "sessionLastViewedProducts": [
    {"value":"213142", weight:3}
  ]
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

