---
title: Discovery Wall Top Clicked
publish-date: 2019-12-10 00:00 am
categories: search-api
author: iagof@empathy.co
order: 8
---

# Discovery Wall Top Clicked

## About this endpoint
This is basically the same endpoint that [TopClicked](/api-reference/search-api/topclicked-endpoint) but with different tagging and the possibility of filtering.

### request 
**GET** `https://api.empathybroker.com/search/v1/query/{instance_id}/dw-topclicked?{Input_Parameters}`

**Input Parameters**

Parameter|Data Type
--|:--:
[lang](/api-reference/search-api/search-input-parameter-glossary/#main-parameters-search)|String
[filterParam](/api-reference/search-api/search-input-parameter-glossary/#optional-parameters-search)|String

## Implementation
Here is a simple example for consume this endpoint in Java

### java
```java
Client client;
WebTarget target;
public void init(){
    client = ClientBuilder.newClient();
    target = client.target("https://api.empathybroker.com/search/v1/query/{instance_id}/dw-topclicked")
       //Query parameters
        .queryParam("lang","ES")
           
}
 
public JSON getResponse(String filters){
    return target.queryParam("filterParam",filters).request(MediaType.APPLICATION_JSON).get(JSON.class)
}
```

## Output
The service will return a json containing the most clicked articles in the day before filtered by the section specified

### output
```javascript

{
  "topclicked": {
    "docs": [
      {
        "style": "Suit",
        "name": "100% Cashmere Sweater",
        "url": "https://st.mngbcn.com/rcs/pics/static/T3/fotos/S9/33075712_99_B.jpg",
        "image": "https://st.mngbcn.com/rcs/pics/static/T3/fotos/S9/33075712_99.jpg",
        "description": "Cashmere fabric, Straight design, Rounded neck, Long sleeve with elastic cuffs, Openwork details, Cable knit finish",
        "longDescription": "",
        "color": [
          "Ecru tones",
          "Beige tones",
          "Reds",
          "Pinks",
          "Greys",
          "Blacks"
        ],
        "id": "33075712070",
        "shortDescription": "",
        "reference": "33075712",
        "categories": [
          "woman",
          "cardigans and sweaters"
        ],
        "hierarchical_category": [
          "woman/cardigans and sweaters"
        ],
        "colortagging_1": [
          "black"
        ],
        "ebTagging": {
          "click": "https://api-staging.empathybroker.com/tagging/v1/track/ebdemo/click?productId=33075712070&amp;catalog=default&amp;origin=default&amp;store=default&amp;title=100%25+Cashmere+Sweater&amp;type=100&amp;follow=true&amp;contextualizeApplied=none&amp;url=https://st.mngbcn.com/rcs/pics/static/T3/fotos/S9/33075712_99_B.jpg&amp;externalBoosted=false&amp;filtered=false&amp;contextualizeEnabled=false&amp;scope=default&amp;page=1&amp;position=1&amp;lang=en",
          "add2cart": "https://api-staging.empathybroker.com/tagging/v1/track/ebdemo/add2cart?productId=33075712070&amp;catalog=default&amp;origin=default&amp;store=default&amp;title=100%25+Cashmere+Sweater&amp;type=100&amp;follow=true&amp;contextualizeApplied=none&amp;url=https://st.mngbcn.com/rcs/pics/static/T3/fotos/S9/33075712_99_B.jpg&amp;externalBoosted=false&amp;filtered=false&amp;contextualizeEnabled=false&amp;scope=default&amp;page=1&amp;position=1&amp;lang=en",
          "wishlist": "https://api-staging.empathybroker.com/tagging/v1/track/ebdemo/wishlist?productId=33075712070&amp;catalog=default&amp;origin=default&amp;store=default&amp;title=100%25+Cashmere+Sweater&amp;type=100&amp;follow=true&amp;contextualizeApplied=none&amp;url=https://st.mngbcn.com/rcs/pics/static/T3/fotos/S9/33075712_99_B.jpg&amp;externalBoosted=false&amp;filtered=false&amp;contextualizeEnabled=false&amp;scope=default&amp;page=1&amp;position=1&amp;lang=en",
          "conversion": "https://api-staging.empathybroker.com/tagging/v1/track/ebdemo/add2cart?productId=33075712070&amp;catalog=default&amp;origin=default&amp;store=default&amp;title=100%25+Cashmere+Sweater&amp;type=100&amp;follow=true&amp;contextualizeApplied=none&amp;url=https://st.mngbcn.com/rcs/pics/static/T3/fotos/S9/33075712_99_B.jpg&amp;externalBoosted=false&amp;filtered=false&amp;contextualizeEnabled=false&amp;scope=default&amp;page=1&amp;position=1&amp;lang=en",
          "checkout": "https://api-staging.empathybroker.com/tagging/v1/track/ebdemo/checkout?productId=33075712070&amp;catalog=default&amp;origin=default&amp;store=default&amp;title=100%25+Cashmere+Sweater&amp;type=100&amp;follow=true&amp;contextualizeApplied=none&amp;url=https://st.mngbcn.com/rcs/pics/static/T3/fotos/S9/33075712_99_B.jpg&amp;externalBoosted=false&amp;filtered=false&amp;contextualizeEnabled=false&amp;scope=default&amp;page=1&amp;position=1&amp;lang=en"
        }
      }
    ]
  }
}
```

