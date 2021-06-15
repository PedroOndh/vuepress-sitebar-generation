---
title: Facets
publish-date: 2020-04-09 00:00 am
categories: stats-api,stats-api-facets-reports
author: davidc@empathy.co
order: 1
---

# Facets

## About this report
This report returns the following metrics distributed by facet for the selected date range: volume of queries, clicks, success, adds to cart, adds to wishlist and checkout.

## Request
This report requires a date range. And additionally, a combination of filters can be specified to narrow down the results.

**GET** `https://api.empathybroker.com/stats/v2/{Instance_ID}/Facets`

**Query Parameters**


  | PARAMETER             |   TYPE  |
  |-----------------------|:-------:|
  | [start_date](/api-reference/stats-api/stats-api-query-parameters-glossary/#tagging-input-parameters-glossary-common)            |Int (ISO 8601 format)|
  | [end_date](/api-reference/stats-api/stats-api-query-parameters-glossary/#tagging-input-parameters-glossary-common)              |Int (ISO 8601 format)|
  | [filters](/api-reference/stats-api/stats-api-query-parameters-glossary/#tagging-input-parameters-glossary-filters)               |list[str] |


**Bearer Token** [Get your token](/api-reference/stats-api/#stats-api-stepbystepguide)

**Example request:** 
`https://api.empathybroker.com/stats/v2/ebdemo/Facets?start_date=2019-07-10&end_date=2019-07-17&filters=lang,scope&lang=es_ES&scope=desktop`

## Response
The following KPIs are returned:
 * __Total values for the date range and filters selected__: _total queries_, _total clicks_, _total adds to wishlist_, _total adds to cart_ and _total checkouts_.
 * __Distributed values by facet:__ _number of queries_, _number of clicks_, _number of adds to wishlist_, _number of adds to cart_ and _number of checkouts_.
* __Distributed values by facet value:__ _number of queries_, _number of clicks_, _number of adds to wishlist_, _number of adds to cart_ and _number of checkouts_.

```json
{
    "data": [
        {
            "query_count": 799,
            "click_count": 523,
            "success_count": 473,
            "wishlist_count": 0,
            "add2cart_count": 40,
            "checkout_count": 0,
            "click_count_pct": 65.46,
            "success_count_pct": 59.20,
            "wishlist_count_pct": 0.0,
            "add2cart_count_pct": 5.01,
            "checkout_count_pct": 0.0,
            "facets": [
                {
                    "facet_name": "color",
                    "query_count": 799,
                    "click_count": 523,
                    "success_count": 473,
                    "wishlist_count": 0,
                    "add2cart_count": 40,
                    "checkout_count": 0,
                    "click_count_pct": 65.46,
                    "success_count_pct": 59.20,
                    "wishlist_count_pct": 0.0,
                    "add2cart_count_pct": 5.01,
                    "checkout_count_pct": 0.0,
                    "values": [
                        {
                            "facet_name": "color",
                            "facet_value": "Red",
                            "query_count": 311,
                            "click_count": 201,
                            "success_count": 170,
                            "wishlist_count": 0,
                            "add2cart_count": 21,
                            "checkout_count": 0,
                            "click_count_pct": 64.63,
                            "success_count_pct": 54.66,
                            "wishlist_count_pct": 0.0,
                            "add2cart_count_pct": 6.75,
                            "checkout_count_pct": 0.0
                        },
                        {
                            "facet_name": "color",
                            "facet_value": "Beige",
                            "query_count": 248,
                            "click_count": 124,
                            "success_count": 115,
                            "wishlist_count": 0,
                            "add2cart_count": 4,
                            "checkout_count": 0,
                            "click_count_pct": 50.0,
                            "success_count_pct": 46.37,
                            "wishlist_count_pct": 0.0,
                            "add2cart_count_pct": 1.61,
                            "checkout_count_pct": 0.0
                        },
                        {
                            "facet_name": "color",
                            "facet_value": "Black",
                            "query_count": 240,
                            "click_count": 198,
                            "success_count": 188,
                            "wishlist_count": 0,
                            "add2cart_count": 15,
                            "checkout_count": 0,
                            "click_count_pct": 82.5,
                            "success_count_pct": 78.33,
                            "wishlist_count_pct": 0.0,
                            "add2cart_count_pct": 6.25,
                            "checkout_count_pct": 0.0
                        }
                    ]
                }
            ]
        }
    ],
    "params": {
        "site_id": "ebdemo",
        "start_date": 1583020800000,
        "end_date": 1583366400000,
        "filters": []
    }
}
```

