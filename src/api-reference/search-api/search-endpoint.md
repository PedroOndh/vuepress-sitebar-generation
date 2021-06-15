---
title: Search Endpoint
publish-date: 2019-12-09 10:00 am
categories: search-api
author: iagof@empathy.co
order: 1
---

# Search Endpoint

## About this Endpoint
Once you get your **URL_SEARCH** and your **INSTANCE_ID** you can access the service using this url

### Request
**GET** `https://api.empathybroker.com/search/v1/query/{instance_ID}/search?{Input_Parameters}`

**Input Parameters**

Parameter|Data Type
--|:--:
[q](/api-reference/search-api/search-input-parameter-glossary/#main-parameters-search) | String
[lang](/api-reference/search-api/search-input-parameter-glossary/#main-parameters-search)|String
[start](/api-reference/search-api/search-input-parameter-glossary/#optional-parameters-search)|Integer
[rows](/api-reference/search-api/search-input-parameter-glossary/#optional-parameters-search)|Integer
[topTrends.rows](/api-reference/search-api/search-input-parameter-glossary/#optional-parameters-search)|Integer
[filter](/api-reference/search-api/search-input-parameter-glossary/#optional-parameters-search)|String
[boost](/api-reference/search-api/search-input-parameter-glossary/#optional-parameters-search) |String
[facet](/api-reference/search-api/search-input-parameter-glossary/#optional-parameters-search)|String
[sort](/api-reference/search-api/search-input-parameter-glossary/#optional-parameters-search)|String
[jsonCallback](/api-reference/search-api/search-input-parameter-glossary/#optional-parameters-search)|String
[suggestions.suggestion.docs](/api-reference/search-api/search-input-parameter-glossary/#optional-parameters-search)|String




## Implementation
**Sorting**  
Send us a request with the fields you want to use for SORTING and we will configure it.  
title A-Z: `sort=name_sort asc`

**Boosting**  
Boosting allows you to modify the default ranking pushing to the top the documents matching the specified queries.      
Boosting Nike and Rebook products:  
`boost=brand:Nike^2.1 OR brand:Rebook^1.3 `

**Faceting**  
Send us a request with the list of fields that you want to use for FACETING and we will add it to the config.  
`facet={!ex=brand_facet}brand_facet` 


Here you can see an example of how to consume this service using Java. 

### Java
```java
Client client;
WebTarget target;
public void init(){
    client = ClientBuilder.newClient();
    target = client.target("https://api.empathybroker.com/search/v1/query/{instance_id}/search")
       //Query parameters
        .queryParam("lang","ES")
        .queryParam("start",0)
        .queryParam("rows",5)
        .queryParam("sort","name_sort asc")
        .queryParam("sort","name_sort asc")
        .queryParam("boost","brand:Nike^2.1 OR brand:Rebook^1.3")
        .queryParam("facet","{!ex=brand_facet}brand_facet")
   
}
 
public JSON getResponse(String query){
    return target.queryParam("q",query).request(MediaType.APPLICATION_JSON).get(JSON.class)
}
```

## Output
Example of multiple possible outputs from this endpoint

### Results + TopTrends
By default the service will return two json nodes, one for the search results (content) and another one for the topTrends.
```javascript
{
    content: {
        numFound: 14, /*Number of the documents return by the service*/
        docs: [ /*Json array with the documents returned by the service. Each one will contain all the fields configured to be returned by the search service.*/
                {
                    name: "Samsung Galaxy Note 10.1"
                },
                {
                    name: "Samsung SNH-1010N Smartcam"
                },
        ],
        facets: [/*filters, will contain one entry for each facet contained in the request using the facets param or directly configured in the search service by the EB Team.*/
                {
                    facet: "brand",
                    values: [
                        {
                            value: "samsung",
                            count: 13,
                            filter: "brand:samsung"
                        },
                        {
                            value: "SBS",
                            count: 1,
                            filter: "brand:SBS"
                        }
                    ]
                }
        ]
    },
    topTrends: [/*Popular trends, including category facet for the first one.*/
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
### SpellCheck + TopTrends
The search engine can detect grammatical errors and automatically correct it, for example searching by "sammsung" the system will suggest "samsung" in the spellchecked node.

```javascript
{
    content: {
        numFound: 2,
        docs: [
                {
                    name: "Samsung Galaxy Note 10.1"
                },
                {
                    name: "Samsung SNH-1010N Smartcam"
                },
        ],
        facets: [
                {
                    facet: "brand",
                    values: [
                        {
                            value: "samsung",
                            count: 13,
                            filter: "brand:samsung"
                        },
                        {
                            value: "fitbit",
                            count: 1,
                            filter: "brand:fitbit"
                        }
                    ]
                }
        ],
        spellchecked: "samsung"
    },
    topTrends: [
        {
            title: "<b>samsung</b>",
            title_raw: "samsung"
        }
    ]
}
```
### Suggestions + TopTrends
For example searching by "samsung panasonic" the search engine detects than there're no products with both terms but there are products with each term separately.

```javascript
{
    content: {
        suggestions: [ 
                    {   /*Term suggested by the search engine */
                        suggestion: "panasonic",
                        /*Number of results using the suggestion*/
                        numFound: 101,
                        docs: [ /*A sample of the results using this suggestion*/
                            {
                                name: "Panasonic KX-TG 8621"
                            },
                            {
                                name: "Panasonic KX-TGP 550"
                            }
                        ]
                    },
                    {
                        suggestion: "samsung",
                        numFound: 14,
                        docs: [
                           {
                                name: "Samsung Galaxy Note 10.1"
                           },
                           {
                                name: "Samsung SNH-1010N Smartcam"
                           }
                        ]
                    }
        ]
   },
   topTrends: [ ]
}

```

