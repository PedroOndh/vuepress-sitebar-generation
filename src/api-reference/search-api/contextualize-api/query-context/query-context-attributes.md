---
title: Query Context - Attributes
publish-date: 2020-06-05 12:09 pm
categories: search-api,contextualize-api,query-context
author: pedroo@empathy.co
order: 4
---

# Query Context - Attributes

## About this Endpoint
Returns the top product attributes for a specific query. The product attribute weights are calculated based on user clicks, add-to-carts and purchases and the values are normalized using a linear function.

### Request
**GET** `https://api.empathybroker.com/contextsearch/v2/querycontext/attributes/{client_id}?{Input_Parameters}`

**Input Parameters**

| Parameter name                                                                               | Data Type |
| -------------------------------------------------------------------------------------------- | --------- |
| **Required:**                                                                                |           |
| [query](/api-reference/search-api/contextualize-api/contextualize-input-parameter-glossary/)          | String    |
| [lang](/api-reference/search-api/contextualize-api/contextualize-input-parameter-glossary/)           | String    |
| **Not required:**                                                                            |           |
| [rows](/api-reference/search-api/contextualize-api/contextualize-input-parameter-glossary/)           | Number    |
| [event.min](/api-reference/search-api/contextualize-api/contextualize-input-parameter-glossary/)      | Number    |
| [userAttributes](/api-reference/search-api/contextualize-api/contextualize-input-parameter-glossary/) | String    |
| [maxTries](/api-reference/search-api/contextualize-api/contextualize-input-parameter-glossary/)       | Number    |
### URL example
```
https://api.empathybroker.com/contextsearch/v2/querycontext/attributes/ebdemo?query=dress&lang=en&rows=2&userAttributes=gender:male,size:M&maxTries=3&events.min=25
```

## Responses
Responses examples for successful and failing calls to the endpoint.

"*topAttributes*" objects don't have a fixed order and it may change in between requests. Nevertheless, values for each attribute are sorted by "*weight*" in descending order.

Remember that your EB Contextualize configuration could use different fields for the preference calculations, so the ones showing below ("*brand*" and "*gender*") are just examples.

### 200
**Successful request**

Type: application/json  

```json
[
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

