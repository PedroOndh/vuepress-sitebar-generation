---
title: Add2Cart Event
publish-date: 2019-06-12 00:00 am
categories: tagging-api,tagging-api-search-tagging
author: laram@empathy.co
order: 5
---

# Add2Cart Event

## About this event
The add to cart event is used to track products that are added to the user cart from the search results, either  directly from the results page or through a product details page.

As in other interaction events, product and search information are collected.

## Implementation
Parameter definitions and implementation details for each one of the supported integrations provided.

### API REST
**GET** `https://api.empathybroker.com/tagging/v1/track/{instance_ID}/add2cart`

**Query parameters**

Please refer to the [click event's parameters](/api-reference/tagging-api/tagging-api-search-tagging/tagging-api-search-tagging-click-event/).

**Response**
`200 OK` if successful

**Example**
`https://api.empathybroker.com/tagging/v1/track/myinstanceid/add2cart?q=jeans&title=Jeans_acid_wash_skinny&productId=0001-2589-3698&page=1&url=https://mypdppage.com&scope=desktop&lang=es&store=es&session=83065720-6d15-4bda-a7a8-bf87eb9637ce&user=744b0f7a-32c9-4f89-9427-d84135aefa7e`
### JAVASCRIPT
```javascript
//1. Define Options JSON variable as follows:
var options = {
      //JSON object containing: filters, additional parameters and user parameters.
};

//2. Perform the following function call:
empathyTAG.trackAdd2Cart(terms, page, position, productId, title, url, options, callback);
```

**Input parameters**

Please refer to the [click event's parameters](/api-reference/tagging-api/tagging-api-search-tagging/tagging-api-search-tagging-click-event/).

**Example**

```javascript
var options = {
   scope: "desktop",
   lang: "en"
};

empathyTAG.trackAdd2Cart("jeans", 1, 4, "0001-2589-9427", "Jeans acid wash skinny", "https://mypdppage.com", options, "");
```

