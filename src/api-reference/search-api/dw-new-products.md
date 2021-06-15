---
title: Discovery Wall New Products
publish-date: 2019-12-10 00:00 am
categories: search-api
author: iagof@empathy.co
order: 10
---

# Discovery Wall New Products

## About this endpoint
The purpose of this endpoint is to search in the catalog the top products for the given queries.  

### request
**GET** `https://api.empathybroker.com/search/v1/query/{instance_id}/?products-by-queries{Input_Parameters}`

**Input Parameters**

Parameter|Type
--|:--:
[q](/api-reference/search-api/search-input-parameter-glossary/#main-parameters-search) | String
[lang](/api-reference/search-api/search-input-parameter-glossary/#main-parameters-search)|String

## Implementation
Here is an example of a simple inmplementation in Java for consume this endpoint

### java
```java
Client client;
WebTarget target;
public void init(){
    client = ClientBuilder.newClient();
    target = client.target("https://api.empathybroker.com/search/v1/query/{instance_id}/products-by-queries")
       //Query parameters
        .queryParam("lang","ES")
        
}
 
public JSON getResponse(String query){
    return target.queryParam("q",query).request(MediaType.APPLICATION_JSON).get(JSON.class)
}
```

## Output
The endpoint will return a Json containing the top products for the given queries

### output
```javascript
{
  "content": {
    "docs": [
      {
        "id": "4679",
        "internal_id": "4679",
        "reference": 4679.0,
        "name": "Leche Semidesnatada Brik",
        "description": "Leche Semidesnatada Brik 1 L",
        "brand": "PASCUAL",
        "imageUrl": "https://cdn-pre.aktiosdigitalservices.com/tol/consum/catalog/product/media/img/135x135/12542.jpg?t=20190906073304",
        "url": "https://preconsum.aktiosdigitalservices.com/consum/producto/pascual-/p-12542",
        "code": "12542",
        "eb_sku": "12542",
        "ebTagging": {
          "click": "https://api-staging.empathybroker.com/tagging/v1/track/consum/click?productId=4679&amp;catalog=default&amp;origin=default&amp;store=default&amp;title=Leche+Semidesnatada+Brik&amp;type=4&amp;follow=true&amp;contextualizeApplied=none&amp;url=https://preconsum.aktiosdigitalservices.com/consum/producto/pascual-/p-12542&amp;externalBoosted=false&amp;filtered=false&amp;contextualizeEnabled=false&amp;scope=default&amp;page=1&amp;position=1&amp;lang=es",
          "add2cart": "https://api-staging.empathybroker.com/tagging/v1/track/consum/add2cart?productId=4679&amp;catalog=default&amp;origin=default&amp;store=default&amp;title=Leche+Semidesnatada+Brik&amp;type=4&amp;follow=true&amp;contextualizeApplied=none&amp;url=https://preconsum.aktiosdigitalservices.com/consum/producto/pascual-/p-12542&amp;externalBoosted=false&amp;filtered=false&amp;contextualizeEnabled=false&amp;scope=default&amp;page=1&amp;position=1&amp;lang=es",
          "wishlist": "https://api-staging.empathybroker.com/tagging/v1/track/consum/wishlist?productId=4679&amp;catalog=default&amp;origin=default&amp;store=default&amp;title=Leche+Semidesnatada+Brik&amp;type=4&amp;follow=true&amp;contextualizeApplied=none&amp;url=https://preconsum.aktiosdigitalservices.com/consum/producto/pascual-/p-12542&amp;externalBoosted=false&amp;filtered=false&amp;contextualizeEnabled=false&amp;scope=default&amp;page=1&amp;position=1&amp;lang=es",
          "conversion": "https://api-staging.empathybroker.com/tagging/v1/track/consum/add2cart?productId=4679&amp;catalog=default&amp;origin=default&amp;store=default&amp;title=Leche+Semidesnatada+Brik&amp;type=4&amp;follow=true&amp;contextualizeApplied=none&amp;url=https://preconsum.aktiosdigitalservices.com/consum/producto/pascual-/p-12542&amp;externalBoosted=false&amp;filtered=false&amp;contextualizeEnabled=false&amp;scope=default&amp;page=1&amp;position=1&amp;lang=es",
          "checkout": "https://api-staging.empathybroker.com/tagging/v1/track/consum/checkout?productId=4679&amp;catalog=default&amp;origin=default&amp;store=default&amp;title=Leche+Semidesnatada+Brik&amp;type=4&amp;follow=true&amp;contextualizeApplied=none&amp;url=https://preconsum.aktiosdigitalservices.com/consum/producto/pascual-/p-12542&amp;externalBoosted=false&amp;filtered=false&amp;contextualizeEnabled=false&amp;scope=default&amp;page=1&amp;position=1&amp;lang=es"
        }
      }
    ],
    "numFound": 1,
    "ebTagging": {
      "query": "https://api-staging.empathybroker.com/tagging/v1/track/consum/query?externalBoosted=false&amp;filtered=false&amp;contextualizeEnabled=false&amp;totalHits=1&amp;catalog=default&amp;origin=default&amp;scope=default&amp;store=default&amp;page=1&amp;lang=es&amp;contextualizeApplied=none"
    }
  }
}
```

