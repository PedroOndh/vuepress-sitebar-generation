---
title: Daily Terms Success
publish-date: 2019-07-25 00:00 am
categories: stats-api,stats-api-terms-report
author: laram@empathy.co
order: 2
---

# Daily Terms Success

## About this report
This report return the main KPIs of a search term and their daily _distribution_ in the specified date range

## Request
Beside a date range and and optinally a set of filters, this reports requires a search term.

**GET** `https://api.empathybroker.com/stats/v2/analysis/{Instance_ID}/DailyDistTermSuccess`

**Query Parameters**

| PARAMETER                                                                                                   | TYPE                  |
| ----------------------------------------------------------------------------------------------------------- | --------------------- |
| [start_date](/api-reference/stats-api/stats-api-query-parameters-glossary/#tagging-input-parameters-glossary-common) | Int (ISO 8601 format) |
| [end_date](/api-reference/stats-api/stats-api-query-parameters-glossary/#tagging-input-parameters-glossary-common)   | Int (ISO 8601 format) |
| [filters](/api-reference/stats-api/stats-api-query-parameters-glossary/#tagging-input-parameters-glossary-filters)   | list\[str]            |
| [type](/api-reference/stats-api/stats-api-query-parameters-glossary/#stats-report-specific-params)                   | int                   |
| [terms](/api-reference/stats-api/stats-api-query-parameters-glossary/#stats-report-specific-params)                  | str                   |

**Bearer Token** [Get your token](/api-reference/stats-api/#stats-api-stepbystepguide)

**Example request:** 
`https://api.empathybroker.com/stats/v2/analysis/ebdemo/DailyDistTermSuccess?start_date=2019-07-10&end_date=2019-07-13&filters=lang,scope&lang=es_ES&scope=desktop&terms=camiseta`

## Response
KPIs are returned as:
    * __Total values__ for the dates, filters and terms specified.
    * __Distribution values__ by day.

```json

{
    "data": {
        "query_count": 16858,
        "click_count": 6395,
        "wishlist_count": 0,
        "add2cart_count": 1140,
        "checkout_count": 0,
        "conversion_count": 0,
        "success_count": 3374,
        "click_count_pct": 37.93,
        "wishlist_count_pct": 0,
        "add2cart_count_pct": 6.76,
        "checkout_count_pct": 0,
        "conversion_count_pct": 0,
        "success_count_pct": 20.01,
        "no_results_count": 0,
        "no_results_count_pct": 0,
        "term_count": 0,
        "term_avg": 0,
        "apicall_count": 0,
        "findability": 20.01,
        "queries_data": [
            {
                "datetime": "2019-07-10T00:00:00Z",
                "value": 6326,
                "pct": 100
            },
            {
                "datetime": "2019-07-11T00:00:00Z",
                "value": 5778,
                "pct": 100
            },
            {
                "datetime": "2019-07-12T00:00:00Z",
                "value": 4754,
                "pct": 100
            }
        ],
        "clicks_data": [
            {
                "datetime": "2019-07-10T00:00:00Z",
                "value": 2380,
                "pct": 37.62
            },
            {
                "datetime": "2019-07-11T00:00:00Z",
                "value": 2305,
                "pct": 39.89
            },
            {
                "datetime": "2019-07-12T00:00:00Z",
                "value": 1710,
                "pct": 35.97
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
                "value": 417,
                "pct": 6.59
            },
            {
                "datetime": "2019-07-11T00:00:00Z",
                "value": 421,
                "pct": 7.29
            },
            {
                "datetime": "2019-07-12T00:00:00Z",
                "value": 302,
                "pct": 6.35
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
        "findability_data": [
            {
                "datetime": "2019-07-10T00:00:00Z",
                "value": 1259,
                "pct": 19.9
            },
            {
                "datetime": "2019-07-11T00:00:00Z",
                "value": 1189,
                "pct": 20.58
            },
            {
                "datetime": "2019-07-12T00:00:00Z",
                "value": 926,
                "pct": 19.48
            }
        ]
    },
    "params": {
        "site_id": "ebdemo",
        "start_date": 1562716800000,
        "end_date": 1562976000000,
        "filters": [],
        "terms": "camiseta"
    }
}

```


