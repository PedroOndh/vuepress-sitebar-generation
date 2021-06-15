---
title: Query Signals API
publish-date: 2019-12-10 00:00 am
categories: search-api
author: iagof@empathy.co
order: 5
---

# Query Signals API

## About this endpoint
This endpoint will return both, the [related tags](/api-reference/search-api/related-tags-endpoint) and [next queries](/api-reference/search-api/next-queries-endpoint), for the query using only one endpoint.

### Request
**GET**  
`https://api.empathybroker.com/search/v1/query/{instance_id}/querysignals?{Input_Parameters}
`  

**Input Parameters**  

Parameter|Data Type
--|:--:
[q](www.empathy.co/docs/search-api/search-input-parameter-glossary/#main-parameters-search)|String
[lang](www.empathy.co/docs/search-api/search-input-parameter-glossary/#main-parameters-search)|String


## Implementation
Here is an example of a simple implementation in Java to consume this service.

### Java
```java
Client client;
WebTarget target;
public void init(){
    client = ClientBuilder.newClient();
    target = client.target("https://api.empathybroker.com/search/v1/query/{instance_id}/querysignals")
       //Query parameters
        .queryParam("lang","ES")

   
}
 
public JSON getResponse(String query){
    return target.queryParam("q",query).request(MediaType.APPLICATION_JSON).get(JSON.class)
}
```

## Output
The endpoint will return a Json with the relatedTags and the nextQueries Nodes.


### Response
```javascript
{
    "nextQueries": [
        {
            "query": "jeans"
        },
        {
            "query": "blouse"
        }
    ],
    "relatedTags": [
        {
            "tag": "white",
            "query": "white shirt"
        },
        {
            "tag": "long sleeve",
            "query": "long sleeve shirt"
        },
        {
            "tag": "striped",
            "query": "shirt striped"
        }
    ]
}
```

