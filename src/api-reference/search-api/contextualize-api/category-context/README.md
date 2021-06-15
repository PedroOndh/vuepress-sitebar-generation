---
title: Category context
publish-date: 2020-06-08 10:37 am
categories: search-api,contextualize-api
author: pedroo@empathy.co
order: 7
---

# Category context

## What is this about?
The category context allows to evaluate the user navigation data to offer a **score to each product** that indicates the weight that it has *within each category* according to this data and the concrete configurations of the product fields given by the client.

Returns the scores for the products indicated in the categories configured for the client. This method get all the categories available for the client and check what is the score weight for each one of the product ids indicated in the request. Is required that this endpoint *receive at least one product id* to get the scores.

## About this Endpoint
Structure for calling the endpoint.

### Request
**GET** `https://api.empathybroker.com/contextsearch/v2/categorycontext/{instance_id}/scores?pid={pid}&pid={pid}&pid={pid}`

**Input Parameters**

| Parameter name                                                                                           | Data Type |
| -------------------------------------------------------------------------------------------------------- | --------- |
| **Required:**                                                                                            |           |
| [pid](/api-reference/search-api/contextualize-api/contextualize-input-parameter-glossary/)                      | Integer    |
| **Not required:**                                                                                        |           |
| [lang](/api-reference/search-api/contextualize-api/contextualize-input-parameter-glossary/)                    | String    |
### URL example


```
https://api.empathybroker.com/contextsearch/v2/categorycontext/ebdemo/scores?pid=2201331&pid=1265192&pid=1241510
```

## Responses
Responses examples for successful and failing calls to the endpoint.

### 200
**Successful request**

Type: application/json  

```json
[
 { "productId": "pid1",
   "scores": [
     {
       "categoryId": "1",
       "weight": 50.0
     } ,
     {
       "categoryId": "2",
       "weight": 10.0
     }
   ]
  },
 { "productId": "pid2",
   "scores": [
     {
       "categoryId": "3",
       "weight": 100.0
     }
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

