---
title: Discovery Wall Contextualized Products
publish-date: 2019-12-10 00:00 am
categories: search-api
author: iagof@empathy.co
order: 9
---

# Discovery Wall Contextualized Products

## About this endpoint
The purpose of this endpoint is to search in all the catalog the products that match the user preferences. 

### Request
**GET** `https://api.empathybroker.com/search/v1/query/{instance_id}/?contextualized-products{Input_Parameters}`

**Input Parameters**

Parameter| Data Type
--|:--:
[lang](/api-reference/search-api/search-input-parameter-glossary/#main-parameters-search)|String
[user](/api-reference/search-api/search-input-parameter-glossary/#main-parameters-search)|String
[session](/api-reference/search-api/search-input-parameter-glossary/#main-parameters-search)|String

## Implementation
Here is a simple example of an implementation in Java for consume this endpoint

### java
```java
Client client;
WebTarget target;
public void init(){
    client = ClientBuilder.newClient();
    target = client.target("https://api.empathybroker.com/search/v1/query/{instance_id}/contextialized-products")
       //Query parameters
        .queryParam("lang","ES")
        .queryParam("session","session_example")
}
 
public JSON getResponse(String user){
    return target.queryParam("user",user).request(MediaType.APPLICATION_JSON).get(JSON.class)
}
``` 

## Output
The result will be a Json that contains the mathcing products

### output
```javascript
{
  "content": {
    "docs": [
      {
        "style": "Casual",
        "style_facet": [
          "Casual"
        ],
        "name": "Ice Cream Printed T-Shirt",
        "familyColor": "",
        "url": "https://st.mngbcn.com/rcs/pics/static/T3/fotos/S9/33000445_95_B.jpg",
        "image": "https://st.mngbcn.com/rcs/pics/static/T3/fotos/S9/33000445_95.jpg",
        "description": "Cotton fabric, Ice cream printed, Rounded neck, Sleeveless, Backstitched finish",
        "description_facet": [
          "Cotton fabric, Ice cream printed, Rounded neck, Sleeveless, Backstitched finish"
        ],
        "longDescription": "",
        "color": [
          "Pinks",
          "Greys",
          "Whites"
        ],
        "color_facet": [
          "Pinks",
          "Greys",
          "Whites"
        ],
        "_id": "33000445672",
        "id": "33000445672",
        "internal_id": "33000445672",
        "shortDescription": "",
        "brand": "",
        "brand_facet": [
          ""
        ],
        "reference": "33000445",
        "ebSKU": [
          "33000445"
        ],
        "categories": [
          "baby girl",
          "t-shirts"
        ],
        "hierarchical_category": [
          "baby girl/t-shirts"
        ],
        "eb_categories": [
          "789900198|baby girl/682168502|t-shirts"
        ],
        "colortagging_2": [
          "gray"
        ],
        "colortagging_2_auto": [
          "gray"
        ],
        "colortagging_2_facet": [
          "gray"
        ],
        "ebTagging": {
          "click": "https://api-staging.empathybroker.com/tagging/v1/track/ebdemo/click?productId=33000445672&amp;catalog=default&amp;origin=default&amp;store=default&amp;title=Ice+Cream+Printed+T-Shirt&amp;type=4&amp;follow=true&amp;contextualizeApplied=none&amp;url=https://st.mngbcn.com/rcs/pics/static/T3/fotos/S9/33000445_95_B.jpg&amp;externalBoosted=false&amp;filtered=false&amp;contextualizeEnabled=true&amp;scope=default&amp;page=1&amp;position=1&amp;lang=en",
          "add2cart": "https://api-staging.empathybroker.com/tagging/v1/track/ebdemo/add2cart?productId=33000445672&amp;catalog=default&amp;origin=default&amp;store=default&amp;title=Ice+Cream+Printed+T-Shirt&amp;type=4&amp;follow=true&amp;contextualizeApplied=none&amp;url=https://st.mngbcn.com/rcs/pics/static/T3/fotos/S9/33000445_95_B.jpg&amp;externalBoosted=false&amp;filtered=false&amp;contextualizeEnabled=true&amp;scope=default&amp;page=1&amp;position=1&amp;lang=en",
          "wishlist": "https://api-staging.empathybroker.com/tagging/v1/track/ebdemo/wishlist?productId=33000445672&amp;catalog=default&amp;origin=default&amp;store=default&amp;title=Ice+Cream+Printed+T-Shirt&amp;type=4&amp;follow=true&amp;contextualizeApplied=none&amp;url=https://st.mngbcn.com/rcs/pics/static/T3/fotos/S9/33000445_95_B.jpg&amp;externalBoosted=false&amp;filtered=false&amp;contextualizeEnabled=true&amp;scope=default&amp;page=1&amp;position=1&amp;lang=en",
          "conversion": "https://api-staging.empathybroker.com/tagging/v1/track/ebdemo/add2cart?productId=33000445672&amp;catalog=default&amp;origin=default&amp;store=default&amp;title=Ice+Cream+Printed+T-Shirt&amp;type=4&amp;follow=true&amp;contextualizeApplied=none&amp;url=https://st.mngbcn.com/rcs/pics/static/T3/fotos/S9/33000445_95_B.jpg&amp;externalBoosted=false&amp;filtered=false&amp;contextualizeEnabled=true&amp;scope=default&amp;page=1&amp;position=1&amp;lang=en",
          "checkout": "https://api-staging.empathybroker.com/tagging/v1/track/ebdemo/checkout?productId=33000445672&amp;catalog=default&amp;origin=default&amp;store=default&amp;title=Ice+Cream+Printed+T-Shirt&amp;type=4&amp;follow=true&amp;contextualizeApplied=none&amp;url=https://st.mngbcn.com/rcs/pics/static/T3/fotos/S9/33000445_95_B.jpg&amp;externalBoosted=false&amp;filtered=false&amp;contextualizeEnabled=true&amp;scope=default&amp;page=1&amp;position=1&amp;lang=en"
        }
      },
      {
        "style": "Casual",
        "style_facet": [
          "Casual"
        ],
        "name": "Ice Cream Printed T-Shirt",
        "familyColor": "",
        "url": "https://st.mngbcn.com/rcs/pics/static/T3/fotos/S9/33000445_95_B.jpg",
        "image": "https://st.mngbcn.com/rcs/pics/static/T3/fotos/S9/33000445_95.jpg",
        "description": "Cotton fabric, Ice cream printed, Rounded neck, Sleeveless, Backstitched finish",
        "description_facet": [
          "Cotton fabric, Ice cream printed, Rounded neck, Sleeveless, Backstitched finish"
        ],
        "longDescription": "",
        "color": [
          "Pinks",
          "Greys",
          "Whites"
        ],
        "color_facet": [
          "Pinks",
          "Greys",
          "Whites"
        ],
        "_id": "33000445311",
        "id": "33000445311",
        "internal_id": "33000445311",
        "shortDescription": "",
        "brand": "",
        "brand_facet": [
          ""
        ],
        "reference": "33000445",
        "ebSKU": [
          "33000445"
        ],
        "categories": [
          "baby girl",
          "t-shirts"
        ],
        "hierarchical_category": [
          "baby girl/t-shirts"
        ],
        "eb_categories": [
          "789900198|baby girl/682168502|t-shirts"
        ],
        "colortagging_2": [
          "gray"
        ],
        "colortagging_2_auto": [
          "gray"
        ],
        "colortagging_2_facet": [
          "gray"
        ],
        "ebTagging": {
          "click": "https://api-staging.empathybroker.com/tagging/v1/track/ebdemo/click?productId=33000445311&amp;catalog=default&amp;origin=default&amp;store=default&amp;title=Ice+Cream+Printed+T-Shirt&amp;type=4&amp;follow=true&amp;contextualizeApplied=none&amp;url=https://st.mngbcn.com/rcs/pics/static/T3/fotos/S9/33000445_95_B.jpg&amp;externalBoosted=false&amp;filtered=false&amp;contextualizeEnabled=true&amp;scope=default&amp;page=1&amp;position=2&amp;lang=en",
          "add2cart": "https://api-staging.empathybroker.com/tagging/v1/track/ebdemo/add2cart?productId=33000445311&amp;catalog=default&amp;origin=default&amp;store=default&amp;title=Ice+Cream+Printed+T-Shirt&amp;type=4&amp;follow=true&amp;contextualizeApplied=none&amp;url=https://st.mngbcn.com/rcs/pics/static/T3/fotos/S9/33000445_95_B.jpg&amp;externalBoosted=false&amp;filtered=false&amp;contextualizeEnabled=true&amp;scope=default&amp;page=1&amp;position=2&amp;lang=en",
          "wishlist": "https://api-staging.empathybroker.com/tagging/v1/track/ebdemo/wishlist?productId=33000445311&amp;catalog=default&amp;origin=default&amp;store=default&amp;title=Ice+Cream+Printed+T-Shirt&amp;type=4&amp;follow=true&amp;contextualizeApplied=none&amp;url=https://st.mngbcn.com/rcs/pics/static/T3/fotos/S9/33000445_95_B.jpg&amp;externalBoosted=false&amp;filtered=false&amp;contextualizeEnabled=true&amp;scope=default&amp;page=1&amp;position=2&amp;lang=en",
          "conversion": "https://api-staging.empathybroker.com/tagging/v1/track/ebdemo/add2cart?productId=33000445311&amp;catalog=default&amp;origin=default&amp;store=default&amp;title=Ice+Cream+Printed+T-Shirt&amp;type=4&amp;follow=true&amp;contextualizeApplied=none&amp;url=https://st.mngbcn.com/rcs/pics/static/T3/fotos/S9/33000445_95_B.jpg&amp;externalBoosted=false&amp;filtered=false&amp;contextualizeEnabled=true&amp;scope=default&amp;page=1&amp;position=2&amp;lang=en",
          "checkout": "https://api-staging.empathybroker.com/tagging/v1/track/ebdemo/checkout?productId=33000445311&amp;catalog=default&amp;origin=default&amp;store=default&amp;title=Ice+Cream+Printed+T-Shirt&amp;type=4&amp;follow=true&amp;contextualizeApplied=none&amp;url=https://st.mngbcn.com/rcs/pics/static/T3/fotos/S9/33000445_95_B.jpg&amp;externalBoosted=false&amp;filtered=false&amp;contextualizeEnabled=true&amp;scope=default&amp;page=1&amp;position=2&amp;lang=en"
        }
      }
    ],
    "numFound": 896365,
    "ebTagging": {
      "query": "https://api-staging.empathybroker.com/tagging/v1/track/ebdemo/query?externalBoosted=false&amp;filtered=false&amp;contextualizeEnabled=true&amp;totalHits=896365&amp;catalog=default&amp;origin=default&amp;scope=default&amp;store=default&amp;page=1&amp;lang=en&amp;contextualizeApplied=none"
    }
  }
}
```

