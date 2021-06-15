---
title: Category Context - Preview
publish-date: 2020-06-08 11:48 am
categories: search-api,contextualize-api,category-context
author: pedroo@empathy.co
order: 3
---

# Category Context - Preview

## What is this about?
As discussed in [the endpoint to obtain the category scores](/api-reference/search-api/contextualize-api/category-context/) of the category products, the results depend on the users' navigation events and the weights given by the client for the fields within each category. In order to have a vision of the changes that cause the changes in the weights of the fields (**equalize**) within a category, can obtain a fast preview of the results with this endpoint.

These results will be obtained by sending a customized equalize and calculating these scores taking into account only some days of navigation events data within a category.

## About this Endpoint
Structure for calling the endpoint.

### Request
**GET** `https://api.empathybroker.com/contextsearch/v2/categorycontext/{instance_id}/preview?{Input_Parameters}`

**Input Parameters**

| Parameter name                                                                                                             | Data Type |
| -------------------------------------------------------------------------------------------------------------------------- | --------- |
| **Required:**                                                                                                              |           |
| [categoryEqualize](/api-reference/search-api/contextualize-api/contextualize-input-parameter-glossary/)                                                                  | Object    |
| [categoryEqualizeEvents](/api-reference/search-api/contextualize-api/contextualize-input-parameter-glossary/)                                                                 | Object    |
| [categoryId](/api-reference/search-api/contextualize-api/contextualize-input-parameter-glossary/)                                                                 | Integer    |
| **Not required:**                                                                                                          |           |
| [lang](/api-reference/search-api/contextualize-api/contextualize-input-parameter-glossary/)                                                               | String    |
| [field](/api-reference/search-api/contextualize-api/contextualize-input-parameter-glossary/) | Object   |
| [maxProducts](/api-reference/search-api/contextualize-api/contextualize-input-parameter-glossary/)                                                    | Integer   |
### URL example
```
https://api.empathybroker.com/contextsearch/v2/categorycontext/ebdemo/preview?categoryId=125151632&categoryEqualize={"price":5,"stock":4,"color":1}&categoryEqualizeEvents={"browseProduct":1,"browseCheckout":3}
```

## Responses
Responses examples for successful and failing calls to the endpoint.


### 200
**Successful request**

Type: application/json  

```
[
  {
      "pid": "656296",
      "eb_name": "Product 1",
      "eb_image": "../assets/product1.jpg",
      "scores": {
            "price": 0.3055021834061135,
            "stock": 0.054012821703985886,
            "color": 0.20550218340611354,
            "events" 0.1100000001
      },
      "events": {
            "browseCheckout": 0,
            "browseProduct": 10,
            "browseAdd2Cart": 3
    },
      "score": 0.675017188516213
  },
  {
      "pid": "2352351",
      "eb_name": "Product 2",
      "eb_image": "../assets/product2.jpg",
      "scores": {
            "price": 0.30078602620087336,
            "stock": 0.062488153860447836,
            "color": 0.20078602620087338,
            "events" 0.1100000001
      },
      "events": {
            "browseCheckout": 0,
            "browseProduct": 10,
            "browseAdd2Cart": 3
      },
      "score": 0.675017188616213
  },
  {
      "pid": "7515814",
      "eb_name": "Product 3",
      "eb_image": "../assets/product3.jpg",
      "scores": {
            "price": 0.3005240174672489,
            "stock": 0.02924742172256806,
            "color": 0.20052401746724893,
            "events" 0.1100000001
      },
      "events": {
            "browseCheckout": 0,
            "browseProduct": 10,
            "browseAdd2Cart": 3
      },
      "score": 0.675017188616213
  },
  ...
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

