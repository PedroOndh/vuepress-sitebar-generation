---
title: Product Event
publish-date: 2019-06-06 00:00 am
categories: tagging-api,tagging-api-browse-tagging
author: laram@empathy.co
order: 2
---

# Product Event

## About this event
The browse product event is used to track product clicks within a category view page. 

This event collects info on the clicked product (id, title, url) and on the category (id, page and position withn page)  where the product was located.

## Implementation
Parameter definitions and implementation details for each one of the supported integrations provided.

### REST API
**GET** `https://api.empathybroker.com/tagging/v1/track/{instance_ID}/browseProduct`

**Query parameters**


  | PARAMETER             | TYPE    |
  |-----------------------|---------|
  | [productId](/api-reference/tagging-api/tagging-input-parameters-glossary/#tagging-input-parameters-glossary-common)             | String  |
  | [categoryId](/api-reference/tagging-api/tagging-input-parameters-glossary/#tagging-input-parameters-glossary-common)            | Integer |
  | [position](/api-reference/tagging-api/tagging-input-parameters-glossary/#tagging-input-parameters-glossary-common)              | Integer |
  | [page](/api-reference/tagging-api/tagging-input-parameters-glossary/#tagging-input-parameters-glossary-common)                  | String  |
  | [url](/api-reference/tagging-api/tagging-input-parameters-glossary/#tagging-input-parameters-glossary-common)                   | String  |
  | [title](/api-reference/tagging-api/tagging-input-parameters-glossary/#tagging-input-parameters-glossary-common)                 | String  |
  | [filters](/api-reference/tagging-api/tagging-input-parameters-glossary/#tagging-input-parameters-glossary-filters)              | String  |
  | [additional common parameters](/api-reference/tagging-api/tagging-input-parameters-glossary/#tagging-input-parameters-add-common-params) | -       |
  | [user parameters](/api-reference/tagging-api/tagging-input-parameters-glossary/#tagging-input-parameters-user-params)       | -       |


**Response**
```200 OK``` if successful

**Example**
`https://api.empathybroker.com/tagging/v1/track/myinstanceid/browseProduct?categoryId=84a534|RootCatName1/55d7047|ChildCat1/5f57048|ChildCat23&productId=0001-2589-3698&position=12&page=1&url=https://mypdppage.com&scope=desktop&lang=es&store=es&session=83065720-6d15-4bda-a7a8-bf87eb9637ce&user=744b0f7a-32c9-4f89-9427-d84135aefa7e`
### JAVASCRIPT
```javascript
//1. Define Options JSON variable as follows:
var options = {
      //JSON object containing: filters, additional parameters and user parameters.
};

//2. Perform the following function call:
empathyTAG.trackBrowseProduct(categoryid, page, position, productid, title, url, options, callback);
```

**Input parameters**


  | PARAMETER             | TYPE    |
  |-----------------------|---------|
  | [categoryId](/api-reference/tagging-api/tagging-input-parameters-glossary/#tagging-input-parameters-glossary-common)            | Integer |
  | [page](/api-reference/tagging-api/tagging-input-parameters-glossary/#tagging-input-parameters-glossary-common)                  | String  |
  | [position](/api-reference/tagging-api/tagging-input-parameters-glossary/#tagging-input-parameters-glossary-common)              | Integer |
  | [productId](/api-reference/tagging-api/tagging-input-parameters-glossary/#tagging-input-parameters-glossary-common)             | String  |
  | [title](/api-reference/tagging-api/tagging-input-parameters-glossary/#tagging-input-parameters-glossary-common)                 | String  |
  | [url](/api-reference/tagging-api/tagging-input-parameters-glossary/#tagging-input-parameters-glossary-common)                   | String  |
  | options   |JSON Object containing [filters](/api-reference/tagging-api/tagging-input-parameters-glossary/#tagging-input-parameters-glossary-filters), [user parameters](/api-reference/tagging-api/tagging-input-parameters-glossary/#tagging-input-parameters-user-params) or [additional interactions parameters](/api-reference/tagging-api/tagging-input-parameters-glossary/#tagging-input-parameters-add-interaction-params)|
  | callback  | Function      |


**Example**
```javascript
var options = {
   scope: "desktop",
   lang: "en"
};

empathyTAG.trackBrowseProduct("84a534|RootCatName1/55d7047|ChildCat1/5f57048|ChildCat23", 1, 2, "0001-2589-3698", "Jeans_Skinny_Acid_Wash", "https://mypdppage.com", options, function(){});

```

