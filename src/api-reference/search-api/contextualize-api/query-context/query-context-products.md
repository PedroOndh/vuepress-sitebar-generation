---
title: Query Context - Products
publish-date: 2020-06-05 12:09 pm
categories: search-api,contextualize-api,query-context
author: pedroo@empathy.co
order: 4
---

# Query Context - Products

## About this Endpoint
Returns the top specific products for a specific query. The specific product weights are calculated based on user clicks, add-to-carts and purchases and the values are normalized using a linear function.

### Request
**GET** `https://api.empathybroker.com/contextsearch/v2/querycontext/products/{instance_id}?{Input_Parameters}`

**Input Parameters**

| Parameter name                                                                                           | Data Type |
| -------------------------------------------------------------------------------------------------------- | --------- |
| **Required:**                                                                                            |           |
| [query](/api-reference/search-api/contextualize-api/contextualize-input-parameter-glossary/)                       | String    |
| [lang](/api-reference/search-api/contextualize-api/contextualize-input-parameter-glossary/)                      | String    |
| **Not required:**                                                                                        |           |
| [rows](/api-reference/search-api/contextualize-api/contextualize-input-parameter-glossary/)                    | Integer    |
| [events.min](/api-reference/search-api/contextualize-api/contextualize-input-parameter-glossary/)           | Integer   |
| [userAttributes](/api-reference/search-api/contextualize-api/contextualize-input-parameter-glossary/)         | String   |
| [maxTries](/api-reference/search-api/contextualize-api/contextualize-input-parameter-glossary/)   | Integer   |
### URL example
```
https://api.empathybroker.com/contextsearch/v2/querycontext/products/ebdemo?query=dress&lang=en&rows=2&userAttributes=gender:male,size:M&maxTries=3&events.min=25
```

## Responses
Responses examples for successful and failing calls to the endpoint.

"*topProducts*" are sorted by "*weight*" in descending order.

### 200
**Successful request**

Type: application/json  

```
[
  {"value":"213115", weight:"3"},
  {"value":"213149", weight:"1.3"}
]  
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

