---
title: Click Event
publish-date: 2019-06-06 00:00 am
categories: tagging-api,tagging-api-search-tagging
author: laram@empathy.co
order: 3
---

# Click Event

## About this event
Click events should be triggered whenever an user clicks on a product in the search results page.

The click event, as the other interation events, collects information on the product clicked (product id,  title, url), on the results grid  (position within the page and page number within the results) and on the original query (query term).

## Implementation
Parameter definitions and implementation details for each one of the supported integrations provided.

### REST API
**GET** `https://api.empathybroker.com/tagging/v1/track/{instance_ID}/click`

**Query parameters**


  | PARAMETER             | TYPE    |
  | --------------------- |:-------:|
  | [q](/api-reference/tagging-api/tagging-input-parameters-glossary/#tagging-input-parameters-glossary-common)                     | String  |
  | [title](/api-reference/tagging-api/tagging-input-parameters-glossary/#tagging-input-parameters-glossary-common)                 | String  |
  | [productId](/api-reference/tagging-api/tagging-input-parameters-glossary/#tagging-input-parameters-glossary-common)             | String  |
  | [position](/api-reference/tagging-api/tagging-input-parameters-glossary/#tagging-input-parameters-glossary-common)              | Integer |
  | [page](/api-reference/tagging-api/tagging-input-parameters-glossary/#tagging-input-parameters-glossary-common)                  | Integer |
  | [url](/api-reference/tagging-api/tagging-input-parameters-glossary/#tagging-input-parameters-glossary-common)                   | String  |
  | [filters](/api-reference/tagging-api/tagging-input-parameters-glossary/#tagging-input-parameters-glossary-filters)              |    -    |
  | [additional common parameters](/api-reference/tagging-api/tagging-input-parameters-glossary/#tagging-input-parameters-add-common-params) |    -    |
  | [user parameters](/api-reference/tagging-api/tagging-input-parameters-glossary/#tagging-input-parameters-user-params)       |    -    |


**Response**
```200 OK``` if successful

**Example**
`https://api.empathybroker.com/tagging/v1/track/myinstanceid/click?q=jeans&title=Jeans_acid_wash_skinny&productId=0001-2589-3698&page=1&url=https://mypdppage.com&scope=desktop&lang=es&store=es&session=83065720-6d15-4bda-a7a8-bf87eb9637ce&user=744b0f7a-32c9-4f89-9427-d84135aefa7e`
### JAVASCRIPT
```javascript
//1. Define Options JSON variable as follows:
var options = {
      //JSON object containing: filters, additional parameters and user parameters.
};

//2. Perform the following function call:
empathyTAG.trackClick(terms, page, position, productId, title, url, options, callback);
```

**Input parameters**


  | PARAMETER             | TYPE      |
  |-----------------------|:---------:|
  | [terms](/api-reference/tagging-api/tagging-input-parameters-glossary/#tagging-input-parameters-glossary-common)     | String  |
  | [page](/api-reference/tagging-api/tagging-input-parameters-glossary/#tagging-input-parameters-glossary-common)      | Integer |
  | [position](/api-reference/tagging-api/tagging-input-parameters-glossary/#tagging-input-parameters-glossary-common)  | Integer |
  | [productId](/api-reference/tagging-api/tagging-input-parameters-glossary/#tagging-input-parameters-glossary-common) | String  |
  | [url](/api-reference/tagging-api/tagging-input-parameters-glossary/#tagging-input-parameters-glossary-common)       | String  |
  | [title](/api-reference/tagging-api/tagging-input-parameters-glossary/#tagging-input-parameters-glossary-common)     | String  |
  | options   |JSON Object containing [filters](/api-reference/tagging-api/tagging-input-parameters-glossary/#tagging-input-parameters-glossary-filters), [user parameters](/api-reference/tagging-api/tagging-input-parameters-glossary/#tagging-input-parameters-user-params) or [additional interactions parameters](/api-reference/tagging-api/tagging-input-parameters-glossary/#tagging-input-parameters-add-interaction-params)|
  | callback  | Function      |



**Example**
```javascript
var options = {
   scope: "desktop",
   lang: "en"
};

empathyTAG.trackClick("jeans", 1, 4, "0001-2589-9427", "Jeans acid wash skinny", "https://mypdppage.com", options, "");
```

