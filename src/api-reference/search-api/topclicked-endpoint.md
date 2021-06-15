---
title: Top Clicked API
publish-date: 2019-12-10 00:00 am
categories: search-api
author: iagof@empathy.co
order: 6
---

# Top Clicked API

## About this endpoint
The Top Clicked endpoint will return the most clicked products

### Request
**GET**
`https://api.empathybroker.com/search/v1/query/{instance_id}/topclicked?{Input_Parameters}`

**Input Parameters**

Parameter|Data Type
--|:--:
[lang](/api-reference/search-api/search-input-parameter-glossary/#main-parameters-search)|String

## Implementation
Here is an example of a simple implementation in Java to consume the service

### Java
```java
Client client;
WebTarget target;
public void init(){
    client = ClientBuilder.newClient();
    target = client.target("https://api.empathybroker.com/search/v1/query/{instance_id}/topclicked")

        

   
}
 
public JSON getResponse(String lang){
    return target.queryParam("lang",lang).request(MediaType.APPLICATION_JSON).get(JSON.class)
}
```

## Output
The Query Signals will return the most clicked terms in Json format.

### output
```javascript

{
    topclicked: {
        docs: [
                {
                    id: "ARTICLE_ID",
                    name: "ARTICLE_NAME",
                    url: "ARTICLE_URL",
                    image: "IMAGE_NAME",
                    *other_fields*: "FIELD_NAME"*
                },
                ...
            ]
        }
}
```

