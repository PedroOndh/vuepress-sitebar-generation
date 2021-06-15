---
title: Daily Browse Distribution
publish-date: 2019-07-25 00:00 am
categories: stats-api,stats-api-browse-distribution-report
author: laram@empathy.co
order: 1
---

# Daily Browse Distribution

## About this report
This report returns the following metrics distributed by day for the selected date range: volume of _views_, _clicks_, _adds to cart_, _adds to wishlist_, _findability_, _users_ and _sessions_.

## Request
This reports requires a date range. Additionally, a combination of filters can be specicified to narrow down the results.

**GET** `https://api.empathybroker.com/stats/v2/analysis/{Instance_ID}/BrowseDailyDist`

**Query Parameters**


  | PARAMETER             |   TYPE  |
  |-----------------------|:-------:|
  | [start_date](/api-reference/stats-api/stats-api-query-parameters-glossary/#tagging-input-parameters-glossary-common)            |Int (ISO 8601 format)|
  | [end_date](/api-reference/stats-api/stats-api-query-parameters-glossary/#tagging-input-parameters-glossary-common)              |Int (ISO 8601 format)|
  | [filters](/api-reference/stats-api/stats-api-query-parameters-glossary/#tagging-input-parameters-glossary-filters)               |list[str] |


**Bearer Token** [Get your token](/api-reference/stats-api/#stats-api-stepbystepguide)

**Example request:** 
`https://api.empathybroker.com/stats/v2/analysis/ebdemo/BrowseDailyDist?start_date=2019-07-10&end_date=2019-07-17&filters=lang,scope&lang=es_ES&scope=desktop`

## Response
The following KPIs are returned:
 * __Total values for the date range and filters selected__: _total views_, _clicks_, _adds to wishlist_, 
       _adds to cart_, _findability_, _sessions_, _users_ and _new users._
 * __Distributed values by day__: _users_, _sessions_, _findability_, _clicks_, _queries_, _adds to wishlist_, _adds to cart_ and _no results count_.

```json

{
    "data": {
        "view_count": 972155,
        "click_count": 35279,
        "wishlist_count": 0,
        "add2cart_count": 6376,
        "checkout_count": 0,
        "conversion_count": 0,
        "success_count": 30420,
        "click_count_pct": 3.63,
        "wishlist_count_pct": 0,
        "add2cart_count_pct": 0.66,
        "checkout_count_pct": 0,
        "conversion_count_pct": 0,
        "success_count_pct": 3.13,
        "no_results_count": 7283,
        "no_results_count_pct": 0.75,
        "findability": 3.13,
        "daily_unique_users_count": 17298,
        "daily_unique_sessions_count": 19260,
        "daily_unique_new_users_count": 4529,
        "daily_unique_users_avg": 5766,
        "daily_unique_sessions_avg": 6420,
        "views_data": [
            {
                "datetime": "2019-07-10T00:00:00Z",
                "value": 335680,
                "pct": 100
            },
            {
                "datetime": "2019-07-11T00:00:00Z",
                "value": 314941,
                "pct": 100
            },
            {
                "datetime": "2019-07-12T00:00:00Z",
                "value": 321534,
                "pct": 100
            }
        ],
        "clicks_data": [
            {
                "datetime": "2019-07-10T00:00:00Z",
                "value": 12641,
                "pct": 3.77
            },
            {
                "datetime": "2019-07-11T00:00:00Z",
                "value": 13076,
                "pct": 4.15
            },
            {
                "datetime": "2019-07-12T00:00:00Z",
                "value": 9562,
                "pct": 2.97
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
                "value": 2122,
                "pct": 0.63
            },
            {
                "datetime": "2019-07-11T00:00:00Z",
                "value": 2730,
                "pct": 0.87
            },
            {
                "datetime": "2019-07-12T00:00:00Z",
                "value": 1524,
                "pct": 0.47
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
                "value": 2649,
                "pct": 0.79
            },
            {
                "datetime": "2019-07-11T00:00:00Z",
                "value": 2205,
                "pct": 0.7
            },
            {
                "datetime": "2019-07-12T00:00:00Z",
                "value": 2429,
                "pct": 0.76
            }
        ],
        "findability_data": [
            {
                "datetime": "2019-07-10T00:00:00Z",
                "value": 10745,
                "pct": 3.2
            },
            {
                "datetime": "2019-07-11T00:00:00Z",
                "value": 11291,
                "pct": 3.59
            },
            {
                "datetime": "2019-07-12T00:00:00Z",
                "value": 8384,
                "pct": 2.61
            }
        ],
        "unique_users_data": [
            {
                "datetime": "2019-07-10T00:00:00Z",
                "value": 5478,
                "avg_queries": 1
            },
            {
                "datetime": "2019-07-11T00:00:00Z",
                "value": 7226,
                "avg_queries": 1
            },
            {
                "datetime": "2019-07-12T00:00:00Z",
                "value": 4594,
                "avg_queries": 1
            }
        ],
        "unique_sessions_data": [
            {
                "datetime": "2019-07-10T00:00:00Z",
                "value": 6005,
                "avg_queries": 1
            },
            {
                "datetime": "2019-07-11T00:00:00Z",
                "value": 8114,
                "avg_queries": 1
            },
            {
                "datetime": "2019-07-12T00:00:00Z",
                "value": 5141,
                "avg_queries": 1
            }
        ]
    },
    "params": {
        "site_id": "ebdemo",
        "start_date": 1562716800000,
        "end_date": 1562976000000,
        "filters": []
    }
}

``` 

