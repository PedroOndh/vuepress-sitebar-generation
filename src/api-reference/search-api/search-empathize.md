---
title: Empathize API
publish-date: 2019-12-10 00:00 am
categories: search-api
author: iagof@empathy.co
order: 3
---

# Empathize API

## About this endpoint
The empathize endpoint will return the TopTrends for the query

### Request
**GET** `https://api.empathybroker.com/search/v1/query/{instance_id}/empathize?{Input_Parameters}`

**Input Parameters**  

Parameter|Data Type
--|:--:
[q](/api-reference/search-api/search-input-parameter-glossary/#main-parameters-search)|String
[lang](/api-reference/search-api/search-input-parameter-glossary/#main-parameters-search)|String
[start](/api-reference/search-api/search-input-parameter-glossary/#optional-parameters-search)|Integer
[rows](/api-reference/search-api/search-input-parameter-glossary/#optional-parameters-search)|Integer




## Implementation
Here is an example of a simple implementation in Java to consume this service

### Java
```java
Client client;
WebTarget target;
public void init(){
    client = ClientBuilder.newClient();
    target = client.target("https://api.empathybroker.com/search/v1/query/{instance_id}/empathize")
        //Query parameters
        .queryParam("lang","ES")
        .queryParam("start",0)
        .queryParam("rows",5)

   
}
 
public JSON getResponse(String query){
    return target.queryParam("q",query).request(MediaType.APPLICATION_JSON).get(JSON.class)
}
```

## Output
The empathize endpoint will return a single Json node with the TopTrends

### Output
```javascript
{
    topTrends: [
        {
            title: "<b>sams</b>ng",
            title_raw: "samsung",
            facets: [
                {
                    facet: "rootCategories_facet"
                    values: [
                        {
                             value: "Mobile Phones",
                             count: 5,
                             filter: "{!tag=rootFilter}rootCategories_facet:Mobile Phones"
                        },
                        {
                             value: "Phone Accessories",
                             count: 3,
                             filter: "{!tag=rootFilter}rootCategories_facet:Phone Accessories"
                        }
                    ]
                }
            ]
        },
        {
            title: "<b>sams</b>ung galaxy",
            title_raw: "samsung galaxy"
        },
        {
            title: "tablet <b>sams</b>ung",
            title_raw: "tablet samsung"
        }
    ]
}
```

