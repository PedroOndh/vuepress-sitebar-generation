---
title: Next Queries API
publish-date: 2019-12-10 00:00 am
categories: search-api
author: iagof@empathy.co
order: 6
---

# Next Queries API

## About this endpoint
The Query Signals endpoint return a set of next queries made by other users after the initial query.

### Request
**GET**
`https://api.empathybroker.com/search/v1/query/{instance_id}/nextqueries?{Input_Parameters}`

**Input Parameters**

Parameter|Data Type
--|:--:
[q](/api-reference/search-api/search-input-parameter-glossary/#main-parameters-search)|String
[lang](/api-reference/search-api/search-input-parameter-glossary/#main-parameters-search)|String

## Implementation
Here is an example of a simple implementation in Java to consume this service

### Java
```java
Client client;
WebTarget target;
public void init(){
    client = ClientBuilder.newClient();
    target = client.target("https://api.empathybroker.com/search/v1/query/{instance_id}/nextqueries")
        .queryParam("q","query") //Query parameters
        .queryParam("lang","ES")

   
}
 
public JSON getResponse(String query){
    return target.queryParam("q",query).request(MediaType.APPLICATION_JSON).get(JSON.class)
}
```

## Output
The output will be a Json response that contains the next queries based on  the initial query

### output
```javascript
[
    {
        "query": "jeans"
    },
    {
        "query": "blouse"
    }
]
```

