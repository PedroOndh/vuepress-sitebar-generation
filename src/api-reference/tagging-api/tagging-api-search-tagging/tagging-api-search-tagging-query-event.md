---
title: Query Event
publish-date: 2019-06-06 00:00 am
categories: tagging-api,tagging-api-search-tagging
author: laram@empathy.co
order: 2
---

# Query Event

## About this event
Query events are  used to track search interactions and have to be triggered every time a search is performed and results are displayed or updated.

The intent is to collect information related to the query like the search terms, and number of results returned.

## Implementation
Parameter definitions and implementation details for each one of the supported integrations provided.

### API REST
**GET** `https://api.empathybroker.com/tagging/v1/track/{instance_ID}/query`

**Query parameters**

| PARAMETER                                                                                                                       | TYPE    |
| ------------------------------------------------------------------------------------------------------------------------------- | ------- |
| [q](/api-reference/tagging-api/tagging-input-parameters-glossary/#tagging-input-parameters-glossary-common)                              | String  |
| [totalHits](/api-reference/tagging-api/tagging-input-parameters-glossary/#tagging-input-parameters-glossary-common)                      | Integer |
| [page](/api-reference/tagging-api/tagging-input-parameters-glossary/#tagging-input-parameters-glossary-common)                           | Integer |
| [filters](/api-reference/tagging-api/tagging-input-parameters-glossary/#tagging-input-parameters-glossary-filters)                       | String  |
| [additional common parameters](/api-reference/tagging-api/tagging-input-parameters-glossary/#tagging-input-parameters-add-common-params) | \-      |
| [user parameters](/api-reference/tagging-api/tagging-input-parameters-glossary/#tagging-input-parameters-user-params)                    | \-      |

**Response**
`200 OK` if successful

**Example**
`https://api.empathybroker.com/tagging/v1/track/myinstanceid/query?q=jeans&totalHits=148&referrer=https://myreferrer.com&scope=desktop&lang=es&store=es&session=83065720-6d15-4bda-a7a8-bf87eb9637ce&user=744b0f7a-32c9-4f89-9427-d84135aefa7e`
### JAVASCRIPT

```javascript
//1. Define options JSON variable as follows:
var options = {
      //JSON object containing: filters, additional parameters and user parameters.
};

//2. Perform the following function call:
empathyTAG.trackQuery(terms, results, page, options, callback);

```
**Input parameters**

  | PARAMETER | TYPE        |
  | --------- | ----------- |
  | [terms](/api-reference/tagging-api/tagging-input-parameters-glossary/#tagging-input-parameters-glossary-common)     | String      |
  | [results](/api-reference/tagging-api/tagging-input-parameters-glossary/#tagging-input-parameters-glossary-common)   | Integer     |
  | [page](/api-reference/tagging-api/tagging-input-parameters-glossary/#tagging-input-parameters-glossary-common)      | Integer     |
  | options   | JSON Object containing [filters](/api-reference/tagging-api/tagging-input-parameters-glossary/#tagging-input-parameters-glossary-filters), [user parameters](/api-reference/tagging-api/tagging-input-parameters-glossary/#tagging-input-parameters-user-params) or [additional query parameters](/api-reference/tagging-api/tagging-input-parameters-glossary/#tagging-input-parameters-add-params) |
  | callback  | Function|

**Example**

```javascript

var options = {
   lang : "es",
   scope : "desktop",
   session : "83065720-6d15-4bda-a7a8-bf87eb9637ce",
   user : "744b0f7a-32c9-4f89-9427-d84135aefa7e"
};

empathyTAG.trackQuery("jeans", 152, 1, options, "");
```

