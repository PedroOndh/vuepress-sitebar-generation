---
title: Category Event
publish-date: 2019-06-06 00:00 am
categories: tagging-api,tagging-api-browse-tagging
author: laram@empathy.co
order: 1
---

# Category Event

## About this event
The browse category event is used to track impressions of the product category pages when an user is navigating a site.

The event collects details related to the category viewed as id and number of products displayed.

## Implementation
Parameter definitions and implementation details for each one of the supported integrations provided.

### REST API
**GET** `https://api.empathybroker.com/tagging/v1/track/{instance_ID}/browseCategory`

**Query parameters**

| PARAMETER             | TYPE    |
|-----------------------|:-------:|
| [categoryId](/api-reference/tagging-api/tagging-input-parameters-glossary/#tagging-input-parameters-glossary-common) | String  |
| [totalHits](/api-reference/tagging-api/tagging-input-parameters-glossary/#tagging-input-parameters-glossary-common)| Integer |
| [page](/api-reference/tagging-api/tagging-input-parameters-glossary/#tagging-input-parameters-glossary-common)| Integer |
| [filters](/api-reference/tagging-api/tagging-input-parameters-glossary/#tagging-input-parameters-glossary-filters)| String  |
| [additional common parameters](/api-reference/tagging-api/tagging-input-parameters-glossary/#tagging-input-parameters-add-common-params)|-|
| [user parameters](/api-reference/tagging-api/tagging-input-parameters-glossary/#tagging-input-parameters-user-params)       |-|


**Response**
```200 OK``` if successful

**Example**
`https://api.empathybroker.com/tagging/v1/track/myinstanceid/browseCategory?categoryId=84a534|RootCatName1/55d7047|ChildCat1/5f57048|ChildCat23&totalHits=124&page=1&url=https://mypdppage.com&scope=desktop&lang=es&store=es&session=83065720-6d15-4bda-a7a8-bf87eb9637ce&user=744b0f7a-32c9-4f89-9427-d84135aefa7e`  
### JAVASCRIPT

```javascript

//1. Define Options JSON variable as follows:

var options = {
      //JSON object containing: filters, additional parameters and user parameters.
};

//2. Perform the following function call:

empathyTAG.trackBrowseCategory( categoryid, results, page, options, callback);

```

**Input parameters**


    | PARAMETER | TYPE        |
    
    | --------- | ----------- |
    
    | [categoryid](/api-reference/tagging-api/tagging-input-parameters-glossary/#tagging-input-parameters-glossary-common)|String|
    
    | [results](/api-reference/tagging-api/tagging-input-parameters-glossary/#tagging-input-parameters-glossary-common)   | Integer|
    
    | [page](/api-reference/tagging-api/tagging-input-parameters-glossary/#tagging-input-parameters-glossary-common)      | Integer|
    
    | [position](/api-reference/tagging-api/tagging-input-parameters-glossary/#tagging-input-parameters-glossary-common)|Integer|
    
    | [url](/api-reference/tagging-api/tagging-input-parameters-glossary/#tagging-input-parameters-glossary-common)|String|
    
    | options   | JSON Object containing [filters](/api-reference/tagging-api/tagging-input-parameters-glossary/#tagging-input-parameters-glossary-filters), [user parameters](/api-reference/tagging-api/tagging-input-parameters-glossary/#tagging-input-parameters-user-params) or [additional query parameters](/api-reference/tagging-api/tagging-input-parameters-glossary/#tagging-input-parameters-add-params) |
    
    | callback  | Function|


**Example**

```javascript

var options = {
   scope: "desktop",
   lang: "en"
};


empathyTAG.trackBrowseCategory("84a534|RootCatName1/55d7047|ChildCat1/5f57048|ChildCat23",
124, 2, options, function(){});

```

