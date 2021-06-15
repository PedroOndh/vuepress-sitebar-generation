---
title: Query Context
publish-date: 2020-06-05 12:08 pm
categories: search-api,contextualize-api
author: pedroo@empathy.co
order: 3
---

# Query Context

## What is this about?
Returns the top product attributes and the top specific products for a specific query. Both the attributes and specific products weights are calculated based on user clicks, add-to-carts and purchases and the values are normalized using a linear function.

## About this Endpoint
Structure for calling the endpoint.

### Request
**GET** `https://api.empathybroker.com/contextsearch/v2/querycontext/all/{instance_id}?{Input_parameters}`

**Input Parameters**

| Parameter name                                                      | Data Type |
| ------------------------------------------------------------------- | --------- |
| **Required:**                                                       |           |
| [query](/api-reference/search-api/contextualize-api/contextualize-input-parameter-glossary/)          | String    |
| [lang](/api-reference/search-api/contextualize-api/contextualize-input-parameter-glossary/)           | String    |
| **Not required:**                                                   |           |
| [attributes.row](/api-reference/search-api/contextualize-api/contextualize-input-parameter-glossary/) | Integer   |
| [products.rows](/api-reference/search-api/contextualize-api/contextualize-input-parameter-glossary/)  | Integer   |
| [events.min](/api-reference/search-api/contextualize-api/contextualize-input-parameter-glossary/)     | Integer   |
| [userAttributes](/api-reference/search-api/contextualize-api/contextualize-input-parameter-glossary/) | String   |
| [maxTries](/api-reference/search-api/contextualize-api/contextualize-input-parameter-glossary/)       | Integer   |
### URL example
```
https://api.empathybroker.com/contextsearch/v2/querycontext/all/ebdemoquery=dress&lang=en&attributes.rows=3&products.rows=2&userAttributes=gender:male,size:M&maxTries=3&events.min=25
```

## Responses
Responses examples for successful and failing calls to the endpoint.

"*topAttributes*" objects don't have a fixed order and it may change in between requests. Nevertheless, values for each attribute are sorted by "*weight*" in descending order.

"*topProducts*" are sorted by "*weight*" in descending order.

### 200
**Successful request**

Type: application/json  

```
{
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

