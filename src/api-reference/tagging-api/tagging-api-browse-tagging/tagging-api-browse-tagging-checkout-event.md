---
title: Checkout Event
publish-date: 2019-06-06 00:00 am
categories: tagging-api,tagging-api-browse-tagging
author: laram@empathy.co
order: 3
---

# Checkout Event

## About this event
The browse checkout event is used to track transactions of products selected  from a product category page or from a product detail page.
As in other browse interaction events, product and category details are collected. 

## Implementation
Parameter definitions and implementation details for each one of the supported integrations provided.

### REST API
**GET** `https://api.empathybroker.com/tagging/v1/track/{instance_ID}/browseCheckout`

**Query parameters**

Please refer to the [browse product event parameters](/api-reference/tagging-api/tagging-api-browse-tagging/tagging-api-browse-tagging-product-event/).

Revenue information can be provided with the additional [revenue parameters](/api-reference/tagging-api/tagging-input-parameters-glossary/#tagging-input-parameters-glossary-revenue).

- - -

**Response**
`200 OK` if successful

**Example**
`https://api.empathybroker.com/tagging/v1/track/myinstanceid/browseCheckout?categoryId=84a534|RootCatName1/55d7047|ChildCat1/5f57048|ChildCat23&productId=0001-2589-3698&position=12&page=1&url=https://mypdppage.com&scope=desktop&lang=es&store=es&session=83065720-6d15-4bda-a7a8-bf87eb9637ce&user=744b0f7a-32c9-4f89-9427-d84135aefa7e`
### JAVASCRIPT
```javascript
//1. Define Options JSON variable as follows:
var options = {
   scope: "desktop",
   lang: "en"
};
//2. Perform the following function call:
empathyTAG.browseCheckout(categoryid, page, position, productid, title, url, options, callback);
```

**Input parameters**

Please refer to the [browse product event parameters](/api-reference/tagging-api/tagging-api-browse-tagging/tagging-api-browse-tagging-product-event/).

Revenue information can be provided with the following optional parameters.

| PARAMETER                                                                                                                       | TYPE   |
| ------------------------------------------------------------------------------------------------------------------------------- | ------ |
| [revenue](/api-reference/tagging-api/tagging-input-parameters-glossary/#tagging-input-parameters-glossary-common)                                                                                                                         | Number |
| [currency](/api-reference/tagging-api/tagging-input-parameters-glossary/#tagging-input-parameters-glossary-common)                       | String |
| [transactionId](/api-reference/tagging-api/tagging-input-parameters-glossary/#tagging-input-parameters-glossary-common)                  | String |


**Example**

```javascript
var options = {
   scope: "desktop",
   lang: "en"
};

empathyTAG.browseCheckout("84a534|RootCatName1/55d7047|ChildCat1/5f57048|ChildCat23", 1, 2, "0001-2589-3698", "Jeans_Skinny_Acid_Wash", "https://mypdppage.com", options, function(){});
```

