---
title: Related Tags API
publish-date: 2019-12-10 00:00 am
categories: search-api
author: iagof@empathy.co
order: 4
---

# Related Tags API

## About this endpoint
The Related Tags endpoint will return suggestion that include terms from the initial query.

### Request
**GET**  
`https://api.empathybroker.com/search/v1/query/{instance_id}/relatedtags?{Input_Parameters}`

**Input Parameters**

Parameter|Data Type  
--|:--:
[q](/api-reference/search-api/search-input-parameter-glossary/#main-parameters-search)|String
[lang](/api-reference/search-api/search-input-parameter-glossary/#main-parameters-search)|String

## Implementation
Theres a simple implementation in java to consume this endpoint.

### java
```java
Client client;
WebTarget target;
public void init(){
    client = ClientBuilder.newClient();
    target = client.target("https://api.empathybroker.com/search/v1/query/{instance_id}/relatedtags")
        //Query parameters
        .queryParam("lang","ES")

   
}
 
public JSON getResponse(String query){
    return target.queryParam("q",query).request(MediaType.APPLICATION_JSON).get(JSON.class)
}
```

## Output
The will return a Json node with the related tags for the query


### output
```javascript
[
    {
        tag: "ZZZZZZ",
        query: "BBB ZZZ"
    },
    {
        tag: "YYYYY",
        query: "YYYY BBBB"
    }
]
```

