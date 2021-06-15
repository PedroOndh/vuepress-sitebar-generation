---
title: Daily Distribution Keyword
publish-date: 2019-07-25 00:00 am
categories: stats-api,stats-api-keywords-report
author: laram@empathy.co
order: 2
---

# Daily Distribution Keyword

## Getting started
This report returns the performance of each keyword used on queries or the keyword specified. the “success” of each search term for the selected date range drilledown by the filter specified.

* [STEP-BY-STEP GUIDE to gather data from any report using the Empathy Stats API](/api-reference/stats-api/)

## Request
To retrieve data from this report, define the request using all the available params and filters detailed in the box. 

First, ensure you [get your token](/api-reference/stats-api/#stats-api-stepbystepguide).

**GET** `https://api.empathybroker.com/stats/v2/analysis/{Instance_ID}/DistKeyword`

**Query Parameters**

| PARAMETER                                                                                                   | TYPE                  |
| ----------------------------------------------------------------------------------------------------------- | --------------------- |
| [start_date](/api-reference/stats-api/stats-api-query-parameters-glossary/#tagging-input-parameters-glossary-common) | Int (ISO 8601 format) |
| [end_date](/api-reference/stats-api/stats-api-query-parameters-glossary/#tagging-input-parameters-glossary-common)   | Int (ISO 8601 format) |
| [filters](/api-reference/stats-api/stats-api-query-parameters-glossary/#tagging-input-parameters-glossary-filters)   | list\[str]            |
| [type](/api-reference/stats-api/stats-api-query-parameters-glossary/#stats-report-specific-params)                   | int                   |
| [k](/api-reference/stats-api/stats-api-query-parameters-glossary/#stats-report-specific-params)eyword                | str                   |

**Bearer Token** [Get your token](/api-reference/stats-api/#stats-api-stepbystepguide)

**Example request:** 
`https://api.empathybroker.com/stats/v2/analysis/ebdemo/DistKeyword?start_date=2019-07-10&end_date=2019-07-13&filters=lang,scope&lang=es_ES&scope=desktop&terms=camiseta`

## Response
Once the request is performed, the following KPIs are retrieved shaped in _json_ format:

* **Total values for the date range selected and keyword specified:** total queries, clicks, adds to wishlist, total terms, avg terms by query, adds to cart, findability, sessions, users and new users.
* **Distributed values by day:** users, sessions, findability %, clicks, queries, adds to wishlist, adds to cart and no results count.

```json

{
    "data": {
        "query_count": 77661,
        "click_count": 40042,
        "wishlist_count": 0,
        "add2cart_count": 9001,
        "checkout_count": 0,
        "conversion_count": 0,
        "success_count": 31283,
        "click_count_pct": 51.56,
        "wishlist_count_pct": 0,
        "add2cart_count_pct": 11.59,
        "checkout_count_pct": 0,
        "conversion_count_pct": 0,
        "success_count_pct": 40.28,
        "no_results_count": 2907,
        "no_results_count_pct": 3.74,
        "term_count": 0,
        "term_avg": 0,
        "apicall_count": 0,
        "findability": 40.28,
        "queries_data": [
            {
                "datetime": "2019-07-10T00:00:00Z",
                "value": 33578,
                "pct": 100
            },
            {
                "datetime": "2019-07-11T00:00:00Z",
                "value": 21460,
                "pct": 100
            },
            {
                "datetime": "2019-07-12T00:00:00Z",
                "value": 22623,
                "pct": 100
            }
        ],
        "clicks_data": [
            {
                "datetime": "2019-07-10T00:00:00Z",
                "value": 17016,
                "pct": 50.68
            },
            {
                "datetime": "2019-07-11T00:00:00Z",
                "value": 11618,
                "pct": 54.14
            },
            {
                "datetime": "2019-07-12T00:00:00Z",
                "value": 11408,
                "pct": 50.43
            }
        ],
        "wishlist_data": [
            {
                "datetime": "2019-07-10T00:00:00Z",
                "value": 0,
                "pct": 0
            },
            {
                "datetime": "2019-07-11T00:00:00Z",
                "value": 0,
                "pct": 0
            },
            {
                "datetime": "2019-07-12T00:00:00Z",
                "value": 0,
                "pct": 0
            }
        ],
        "add2cart_data": [
            {
                "datetime": "2019-07-10T00:00:00Z",
                "value": 3780,
                "pct": 11.26
            },
            {
                "datetime": "2019-07-11T00:00:00Z",
                "value": 2616,
                "pct": 12.19
            },
            {
                "datetime": "2019-07-12T00:00:00Z",
                "value": 2605,
                "pct": 11.51
            }
        ],
        "checkout_data": [
            {
                "datetime": "2019-07-10T00:00:00Z",
                "value": 0,
                "pct": 0
            },
            {
                "datetime": "2019-07-11T00:00:00Z",
                "value": 0,
                "pct": 0
            },
            {
                "datetime": "2019-07-12T00:00:00Z",
                "value": 0,
                "pct": 0
            }
        ],
        "conversion_data": [
            {
                "datetime": "2019-07-10T00:00:00Z",
                "value": 0,
                "pct": 0
            },
            {
                "datetime": "2019-07-11T00:00:00Z",
                "value": 0,
                "pct": 0
            },
            {
                "datetime": "2019-07-12T00:00:00Z",
                "value": 0,
                "pct": 0
            }
        ],
        "no_results_data": [
            {
                "datetime": "2019-07-10T00:00:00Z",
                "value": 2483,
                "pct": 7.39
            },
            {
                "datetime": "2019-07-11T00:00:00Z",
                "value": 259,
                "pct": 1.21
            },
            {
                "datetime": "2019-07-12T00:00:00Z",
                "value": 165,
                "pct": 0.73
            }
        ],
        "findability_data": [
            {
                "datetime": "2019-07-10T00:00:00Z",
                "value": 13470,
                "pct": 40.12
            },
            {
                "datetime": "2019-07-11T00:00:00Z",
                "value": 8740,
                "pct": 40.73
            },
            {
                "datetime": "2019-07-12T00:00:00Z",
                "value": 9073,
                "pct": 40.11
            }
        ]
    },
    "params": {
        "site_id": "ebdemo",
        "start_date": 1562716800000,
        "end_date": 1562976000000,
        "filters": [],
        "keyword": "camiseta",
        "type": 0,
        "bucket": "day"
    }
}


```

