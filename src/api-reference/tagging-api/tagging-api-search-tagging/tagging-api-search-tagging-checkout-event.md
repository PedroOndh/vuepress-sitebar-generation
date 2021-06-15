---
title: Checkout Event
publish-date: 2019-06-06 00:00 am
categories: tagging-api,tagging-api-search-tagging
author: laram@empathy.co
order: 6
---

# Checkout Event

## About this event
The checkout event is used to track transactions of products selected from a search results page or from a product detail page after a search.

The checkout event should be triggered after the user has confirmed the purchase and a separate checkout event  is required for each product in the shopping cart that was added to the cart from a search result.

## Implementation
Parameter definitions and implementation details for each one of the supported integrations provided.

### API REST
**GET** `https://api.empathybroker.com/tagging/v1/track/{instance_ID}/checkout`

**Query parameters**

Please refer to the [click event's parameters](/api-reference/tagging-api/tagging-api-search-tagging/tagging-api-search-tagging-click-event/).

**Extra checkout parameters**

| PARAMETER             | TYPE    |
| --------------------- |:-------:|
|[transactionId](/api-reference/tagging-api/tagging-input-parameters-glossary/#tagging-input-parameters-glossary-common)|String|
|[revenue](/api-reference/tagging-api/tagging-input-parameters-glossary/#tagging-input-parameters-glossary-common)|String|
|[currency](/api-reference/tagging-api/tagging-input-parameters-glossary/#tagging-input-parameters-glossary-common)|String|


**Response** `200 OK` if successful

**Example** `https://api.empathybroker.com/tagging/v1/track/myinstanceid/checkout?q=jeans&title=Jeans_acid_wash_skinny&productId=0001-2589-3698&page=1&url=https://mypdppage.com&scope=desktop&lang=es&store=es&session=83065720-6d15-4bda-a7a8-bf87eb9637ce&user=744b0f7a-32c9-4f89-9427-d84135aefa7e&transactionId=42313-PWM&currency=USD&revenue=30.50`
### JAVASCRIPT
```javascript
//1. Define Options JSON variable as follows:
var options = {
      //JSON object containing: filters, additional parameters and user parameters.
};

//2. Perform the following function call:
empathyTAG.checkout(terms, page, position, productId, title, url, options, callback);
```

**Input parameters**

Please refer to the [click event's parameters](/api-reference/tagging-api/tagging-api-search-tagging/tagging-api-search-tagging-click-event/).

**Example**

```javascript
var options = {
   scope: "desktop",
   lang: "en"
};

empathyTAG.checkout("jeans", 1, 4, "0001-2589-9427", "Jeans acid wash skinny", "https://mypdppage.com", options, "");
``

