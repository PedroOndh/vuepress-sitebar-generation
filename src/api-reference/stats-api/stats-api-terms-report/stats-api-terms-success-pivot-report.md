---
title: Daily Pivot Terms Success
publish-date: 2019-07-25 00:00 am
categories: stats-api,stats-api-terms-report
author: laram@empathy.co
order: 4
---

# Daily Pivot Terms Success

## Getting started
This report calculates the “success” of each search term for the selected date range grouped by the filters specified as pivots. 

## Request
A date range, togheter with a pivot list and a term are all required. Filtres can be used to restrict the scope of the results.

**GET** `https://api.empathybroker.com/stats/v2/analysis/{Instance_ID}/PivotDistribution`

**Query Parameters**

| PARAMETER                                                                                                   | TYPE                  |
| ----------------------------------------------------------------------------------------------------------- | --------------------- |
| [start_date](/api-reference/stats-api/stats-api-query-parameters-glossary/#tagging-input-parameters-glossary-common) | Int (ISO 8601 format) |
| [end_date](/api-reference/stats-api/stats-api-query-parameters-glossary/#tagging-input-parameters-glossary-common)   | Int (ISO 8601 format) |
| [filters](/api-reference/stats-api/stats-api-query-parameters-glossary/#tagging-input-parameters-glossary-filters)   | list\[str]            |
| [type](/api-reference/stats-api/stats-api-query-parameters-glossary/#stats-report-specific-params)                   | int                   |
 
| [terms](/api-reference/stats-api/stats-api-query-parameters-glossary/#stats-report-specific-params)                  | str                   |
  
| [pivots](/api-reference/stats-api/stats-api-query-parameters-glossary/#stats-report-specific-params)                  | str                   |
  
**Bearer Token** [Get your token](/api-reference/stats-api/#stats-api-stepbystepguide)

**Example request:** 
`https://api.empathybroker.com/stats/v2/analysis/ebdemo/PivotDistribution?start_date=2019-07-10&end_date=2019-07-13&filters=lang,scope&lang=es_ES&scope=desktop&terms=camiseta`

## Response
KPIs for the  date range, filters and terms are returned grouped by the specified pivots.

```json

{
    "data": [
        {
            "query_count": 6979,
            "click_count": 2749,
            "wishlist_count": 0,
            "add2cart_count": 268,
            "checkout_count": 0,
            "conversion_count": 0,
            "success_count": 2749,
            "pivots": [
                {
                    "value": "mobileappandroid",
                    "pivot": "scope"
                }
            ]
        },
        {
            "query_count": 4006,
            "click_count": 678,
            "wishlist_count": 0,
            "add2cart_count": 39,
            "checkout_count": 0,
            "conversion_count": 0,
            "success_count": 486,
            "pivots": [
                {
                    "value": "mobile",
                    "pivot": "scope"
                }
            ]
        },
        {
            "query_count": 2493,
            "click_count": 2986,
            "wishlist_count": 0,
            "add2cart_count": 253,
            "checkout_count": 0,
            "conversion_count": 0,
            "success_count": 2986,
            "pivots": [
                {
                    "value": "mobileappios",
                    "pivot": "scope"
                }
            ]
        },
        {
            "query_count": 1254,
            "click_count": 132,
            "wishlist_count": 0,
            "add2cart_count": 29,
            "checkout_count": 0,
            "conversion_count": 0,
            "success_count": 81,
            "pivots": [
                {
                    "value": "desktop",
                    "pivot": "scope"
                }
            ]
        },
        {
            "query_count": 454,
            "click_count": 50,
            "wishlist_count": 0,
            "add2cart_count": 2,
            "checkout_count": 0,
            "conversion_count": 0,
            "success_count": 37,
            "pivots": [
                {
                    "value": "tablet",
                    "pivot": "scope"
                }
            ]
        }
    ],
    "params": {
        "site_id": "ebdemo",
        "start_date": 1563408000000,
        "end_date": 1563840000000,
        "filters": [],
        "pivots": [
            "scope"
        ],
        "terms": "camiseta",
        "type": 0
    }
}
```

