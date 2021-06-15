---
title: Skusearch API
publish-date: 2019-12-10 00:00 am
categories: search-api
author: iagof@empathy.co
order: 7
---

# Skusearch API

## About this endpoint
The main goal of this endpoint is to provide a set of parameters with the aim of searching SKUs (Stock keeping units).



### Request
**GET**
`https://api.empathybroker.com/search/v1/query/{instance_id}/skusearch?{Input_Parameters}`

**Input Parameters**

Parameter|Data Type
--|:--:
[q](/api-reference/search-api/search-input-parameter-glossary/#main-parameters-search) | String
[lang](/api-reference/search-api/search-input-parameter-glossary/#main-parameters-search)|String
[start](/api-reference/search-api/search-input-parameter-glossary/#optional-parameters-search)|Integer
[rows](/api-reference/search-api/search-input-parameter-glossary/#optional-parameters-search)|Integer
[warehouse](/api-reference/search-api/search-input-parameter-glossary/#optional-parameters-search)|Integer
[catalogue](/api-reference/search-api/search-input-parameter-glossary/#optional-parameters-search)|String
[origin](/api-reference/search-api/search-input-parameter-glossary/#optional-parameters-search) |String


## Implementation
Here is a simple example of an implementation in Java to consume this service

### java
```java
Client client;
WebTarget target;
public void init(){
    client = ClientBuilder.newClient();
    target = client.target("https://api.empathybroker.com/search/v1/query/{instance_id}/skusearch")
        //Query parameters
        .queryParam("lang","ES")

   
}
 
public JSON getResponse(String query){
    return target.queryParam("q",query).request(MediaType.APPLICATION_JSON).get(JSON.class)
}
``` 

## Output
The service will return a single json node per product/document and all attributes associated with the item type

### output
```javascript
"content": {
    "docs": [{
        "id": "500975676",
        "eb_id": "500975676-009",
        "internal_id": "500975676-009",
        "mocacoReference": "1628/311/009",
        "eb_sku": "1628/311/009",
        "minPrice": "19.99",
        "maxPrice": "19.99",
        "minOldPrice": "0.0",
        "maxOldPrice": "0.0",
        "name": "Sandalia azul tacón medio pulsera",
        "firstRootCategory": "1010141507",
        "idProduct": "500975676-009",
        "productId": "500975676",
        "reference": "1628/311",
        "displayReference": "1628/311",
        "img": {
            "timestamp": "1537979412849",
            "url": "/2018/I/1/1/p/1628/311/009/1628311009",
            "aux": [
                "1",
                "2",
                "3",
                "4",
                "5",
                "6"
            ],
            "type": [
                "1",
                "2",
                "3",
                "4"
            ]
            }
        }
    ],
    "numFound": 1
}

```

