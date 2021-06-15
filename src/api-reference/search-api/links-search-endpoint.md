---
title: Links API
publish-date: 2019-12-10 00:00 am
categories: search-api
author: iagof@empathy.co
order: 6
---

# Links API

## About this endpoint
The links endpoint will retrieve link results configured in the empathy dashboard.


### request
**GET**
`https://api.empathybroker.com/search/v1/query/{instance_id}/links?{Input_Parameters}`

**Input Parameters**  

Parameter|Data Type
--|:--:
[q](/api-reference/search-api/search-input-parameter-glossary/#main-parameters-search) | String
[lang](/api-reference/search-api/search-input-parameter-glossary/#main-parameters-search)|String
[m](/api-reference/search-api/search-input-parameter-glossary/#main-parameters-search)|Integer
[portal](/api-reference/search-api/search-input-parameter-glossary/#optional-parameters-search)|String
[scope](/api-reference/search-api/search-input-parameter-glossary/#optional-parameters-search)|String
[user](/api-reference/search-api/search-input-parameter-glossary/#optional-parameters-search)|String
[session](/api-reference/search-api/search-input-parameter-glossary/#optional-parameters-search) |String
[jsonCallback](/api-reference/search-api/search-input-parameter-glossary/#optional-parameters-search)|String


## Implementation
Here is a simple implementation in Java to consume this endpoint


### java
```java
Client client;
WebTarget target;
public void init(){
    client = ClientBuilder.newClient();
    target = client.target("https://api.empathybroker.com/search/v1/query/{instance_id}/links")
        .queryParam("lang","ES") //Query parameters
        .queryParam("m",10)
}
 
public JSON getResponse(String query){
    return target.queryParam("query",query).request(MediaType.APPLICATION_JSON).get(JSON.class)
}

```

## Output
The links endpoint will return a Json reponse that look like this.

### output
```javascript
{
    banner: [
    {   
        /*Link identifier (self generating value)*/
        id: "546dd382e4b08960f81c1392",
        /*Link title. It may contain highlighted text (configured when the link is created in the dashboard)*/
        title: "Promoted Banner Test Link",
        /*Link subtitle (configured when the link is created in the dashboard)*/
        subtitle: "",
        /*Link portal (configured when the link is created in the dashboard)*/
        portal: "",
        /*Link scope (configured when the link is created in the dashboard)*/        
        scope: "",
        /*Link title without highlighted text*/
        title_raw: "Promoted Banner Test Link",
        /*Link subtitle without highlighted text*/
        subtitle_raw: "",
        /*Destination url (configured when the link is created in the dashboard)*/
        url: "http://www.testlink.com",
        /*Destination url but using the tagging system to register the click*/
        trackable_url: "TRACKABLE_TEST_LINK",
        /*Image url (configured when the link is created in the dashboard)*/        
        imagename: "IMAGE_NAME"
    }
    ],
    promoted: [
    {
        id: "546dd382e4b08960f81c1395",
        title: "Promoted Test Link",
        subtitle: "",
        portal: "",
        scope: "",
        title_raw: "Promoted Test Link",
        subtitle_raw: "",
        url: "http://www.testlink.com",
        trackable_url: "TRACKABLE_TEST_LINK",
        imagename: "IMAGE_NAME"
    }
    ],
    direct: [
    {
        id: "54a17583e4b08f7d3fcfd8a9",
        title: "Direct Test Link",
        subtitle: "",
        portal: "",
        scope: "",
        title_raw: "Direct Test Link",
        subtitle_raw: "",
        url: "http://www.testlink.com",
        trackable_url: "TRACKABLE_TEST_LINK",
        imagename: "IMAGE_NAME"
    }
    ]
}
```

