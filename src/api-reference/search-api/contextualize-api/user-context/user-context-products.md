---
title: User Context - Products
publish-date: 2020-06-05 10:24 am
categories: search-api,contextualize-api,user-context
author: pedroo@empathy.co
---

# User Context - Products

## About this Endpoint
Returns the last visited specific products for a specific user and query.

"*userLastViewedProducts*" weight is calculated using the difference between the last time there was an interaction with the product and "now". So, the more recent events will have more weight than others that happened long ago.

### Request
**GET** `https://api.empathybroker.com/contextsearch/v2/usercontext/products/{instance_id}?{Input_Parameters}`

**Input Parameters**

| Parameter name                                                                                                             | Data Type |
| -------------------------------------------------------------------------------------------------------------------------- | --------- |
| **Required:**                                                                                                              |           |
| [user](/api-reference/search-api/contextualize-api/contextualize-input-parameter-glossary/)                                                                  | String    |
| [query](/api-reference/search-api/contextualize-api/contextualize-input-parameter-glossary/)                                                                 | String    |
| **Not required:**                                                                                                          |           |
| [session](/api-reference/search-api/contextualize-api/contextualize-input-parameter-glossary/)                                                               | String    |
| [rows](/api-reference/search-api/contextualize-api/contextualize-input-parameter-glossary/) | Integer   |
### URL example
```
https://api.empathybroker.com/contextsearch/v2/usercontext/products/ebdemo?user=user_test&session=session_test&query=dress&rows=5
```

## Responses
Responses examples for successful and failing calls to the endpoint.

### 200
**Successful request**

Type: application/json  

```
{
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

