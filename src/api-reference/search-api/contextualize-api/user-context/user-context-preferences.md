---
title: User Context - Preferences
publish-date: 2020-06-05 10:25 am
categories: search-api,contextualize-api,user-context
author: pedroo@empathy.co
order: 1
---

# User Context - Preferences

## About this Endpoint
Returns the top product attributes for a specific user.

The product attribute preferences are calculated based on user clicks, add-to-carts and purchases and the values are normalized using a linear function.

### Request
**GET** `https://api.empathybroker.com/contextsearch/v2/usercontext/preferences/{instance_id}?{Input_Parameters}`

**Input Parameters**

| Parameter name                                                                                                             | Data Type |
| -------------------------------------------------------------------------------------------------------------------------- | --------- |
| **Required:**                                                                                                              |           |
| [user](/api-reference/search-api/contextualize-api/contextualize-input-parameter-glossary/)                                                                  | String    |
| **Not required:**                                                                                                          |           |
| [session](/api-reference/search-api/contextualize-api/contextualize-input-parameter-glossary/)                                                               | String    |
| [rows](/api-reference/search-api/contextualize-api/contextualize-input-parameter-glossary/) | Integer   |
### URL example
```
https://api.empathybroker.com/contextsearch/v2/usercontext/preferences/ebdemo?user=user_test&session=session_test&rows=5
```

## Responses
Responses examples for successful and failing calls to the endpoint.

"*userPreferences*" objects don't have a fixed order and it may change in between requests. Nevertheless, values for each *preference* are sorted by "*weight*" in descending order.

Remember that your EB Contextualize configuration could use different fields for the preferences calculations, so the ones showing aside ("*brand*" and "*gender*") are just examples.

### 200
**Successful request**

Type: application/json  

```json
{
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

