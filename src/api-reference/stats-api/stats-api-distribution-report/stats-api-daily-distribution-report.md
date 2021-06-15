---
title: Daily Distribution
publish-date: 2019-07-25 00:00 am
categories: stats-api,stats-api-distribution-report
author: laram@empathy.co
order: 1
---

# Daily Distribution

## About this report
This report returns the following metrics distributed by day for the selected date range: _queries_, _clicks_, _adds to cart_, _adds to wishlist_ , _queries with no results_, _findability_, _users_ and _sessions_.

## Request
This report takes start and end dates and, optionally, a set of filters to narrow down the results.

**GET** `https://api.empathybroker.com/stats/v2/analysis/{Instance_ID}/DailyDist`

**Query Parameters**


  | PARAMETER             |   TYPE  |
  |-----------------------|:-------:|
  | [start_date](/api-reference/stats-api/stats-api-query-parameters-glossary/#tagging-input-parameters-glossary-common)            |Int (ISO 8601 format)|
  | [end_date](/api-reference/stats-api/stats-api-query-parameters-glossary/#tagging-input-parameters-glossary-common)              |Int (ISO 8601 format)|
  | [filters](/api-reference/stats-api/stats-api-query-parameters-glossary/#tagging-input-parameters-glossary-filters)               |list[str] |


**Bearer Token** [Get your token](/api-reference/stats-api/#stats-api-stepbystepguide)

**Example request:** 
`https://api.empathybroker.com/stats/v2/analysis/ebdemo/DailyDist?start_date=2019-07-10&end_date=2019-07-17&filters=lang,scope&lang=es_ES&scope=desktop`

## Response
The following KPIs are returned:
* __Total values for the date range and filters selected__: _total queries_, _clicks_, _adds to wishlist_, _total terms_, _avg terms by query_, _adds to cart_, _findability_, _sessions_, _users_ and _new users_.
* __Distributed values by day__: _users_, _sessions_, _findability _, _clicks_, _queries_, _adds to wishlist_, _adds to cart_ and _no results count_.

```json
{
    "data": {
        "query_count": 3031352,
        "click_count": 1436008,
        "wishlist_count": 0,
        "add2cart_count": 201617,
        "conversion_count": 0,
        "success_count": 1183342,
        "click_count_pct": 47.37,
        "wishlist_count_pct": 0,
        "add2cart_count_pct": 6.65,
        "conversion_count_pct": 0,
        "success_count_pct": 39.04,
        "no_results_count": 277934,
        "no_results_count_pct": 9.17,
        "term_count": 5140544,
        "term_avg": 1.7,
        "apicall_count": 0,
        "findability": 39.04,
        "daily_unique_users_count": 553219,
        "daily_unique_sessions_count": 639981,
        "daily_unique_new_users_count": 264868,
        "daily_unique_users_avg": 110643.8,
        "daily_unique_sessions_avg": 127996.2,
        "queries_data": [
            {
                "datetime": "2019-07-10T00:00:00Z",
                "value": 725726,
                "pct": 100
            },
            {
                "datetime": "2019-07-11T00:00:00Z",
                "value": 678814,
                "pct": 100
            },
            {
                "datetime": "2019-07-12T00:00:00Z",
                "value": 548537,
                "pct": 100
            },
            {
                "datetime": "2019-07-13T00:00:00Z",
                "value": 509887,
                "pct": 100
            },
            {
                "datetime": "2019-07-14T00:00:00Z",
                "value": 568388,
                "pct": 100
            }
        ],
        "clicks_data": [
            {
                "datetime": "2019-07-10T00:00:00Z",
                "value": 338087,
                "pct": 46.59
            },
            {
                "datetime": "2019-07-11T00:00:00Z",
                "value": 317398,
                "pct": 46.76
            },
            {
                "datetime": "2019-07-12T00:00:00Z",
                "value": 245469,
                "pct": 44.75
            },
            {
                "datetime": "2019-07-13T00:00:00Z",
                "value": 240334,
                "pct": 47.13
            },
            {
                "datetime": "2019-07-14T00:00:00Z",
                "value": 294720,
                "pct": 51.85
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
            },
            {
                "datetime": "2019-07-13T00:00:00Z",
                "value": 0,
                "pct": 0
            },
            {
                "datetime": "2019-07-14T00:00:00Z",
                "value": 0,
                "pct": 0
            }
        ],
        "add2cart_data": [
            {
                "datetime": "2019-07-10T00:00:00Z",
                "value": 51797,
                "pct": 7.14
            },
            {
                "datetime": "2019-07-11T00:00:00Z",
                "value": 46200,
                "pct": 6.81
            },
            {
                "datetime": "2019-07-12T00:00:00Z",
                "value": 33401,
                "pct": 6.09
            },
            {
                "datetime": "2019-07-13T00:00:00Z",
                "value": 32151,
                "pct": 6.31
            },
            {
                "datetime": "2019-07-14T00:00:00Z",
                "value": 38068,
                "pct": 6.7
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
            },
            {
                "datetime": "2019-07-13T00:00:00Z",
                "value": 0,
                "pct": 0
            },
            {
                "datetime": "2019-07-14T00:00:00Z",
                "value": 0,
                "pct": 0
            }
        ],
        "no_results_data": [
            {
                "datetime": "2019-07-10T00:00:00Z",
                "value": 68457,
                "pct": 9.43
            },
            {
                "datetime": "2019-07-11T00:00:00Z",
                "value": 62545,
                "pct": 9.21
            },
            {
                "datetime": "2019-07-12T00:00:00Z",
                "value": 51585,
                "pct": 9.4
            },
            {
                "datetime": "2019-07-13T00:00:00Z",
                "value": 47561,
                "pct": 9.33
            },
            {
                "datetime": "2019-07-14T00:00:00Z",
                "value": 47786,
                "pct": 8.41
            }
        ],
        "findability_data": [
            {
                "datetime": "2019-07-10T00:00:00Z",
                "value": 278493,
                "pct": 38.37
            },
            {
                "datetime": "2019-07-11T00:00:00Z",
                "value": 263639,
                "pct": 38.84
            },
            {
                "datetime": "2019-07-12T00:00:00Z",
                "value": 203892,
                "pct": 37.17
            },
            {
                "datetime": "2019-07-13T00:00:00Z",
                "value": 198485,
                "pct": 38.93
            },
            {
                "datetime": "2019-07-14T00:00:00Z",
                "value": 238833,
                "pct": 42.02
            }
        ],
        "unique_users_data": [
            {
                "datetime": "2019-07-10T00:00:00Z",
                "value": 126735,
                "avg_queries": 5.65
            },
            {
                "datetime": "2019-07-11T00:00:00Z",
                "value": 123625,
                "avg_queries": 5.42
            },
            {
                "datetime": "2019-07-12T00:00:00Z",
                "value": 104407,
                "avg_queries": 5.17
            },
            {
                "datetime": "2019-07-13T00:00:00Z",
                "value": 95173,
                "avg_queries": 5.28
            },
            {
                "datetime": "2019-07-14T00:00:00Z",
                "value": 103279,
                "avg_queries": 5.43
            }
        ],
        "unique_sessions_data": [
            {
                "datetime": "2019-07-10T00:00:00Z",
                "value": 148341,
                "avg_queries": 4.83
            },
            {
                "datetime": "2019-07-11T00:00:00Z",
                "value": 143823,
                "avg_queries": 4.66
            },
            {
                "datetime": "2019-07-12T00:00:00Z",
                "value": 119455,
                "avg_queries": 4.52
            },
            {
                "datetime": "2019-07-13T00:00:00Z",
                "value": 109293,
                "avg_queries": 4.6
            },
            {
                "datetime": "2019-07-14T00:00:00Z",
                "value": 119069,
                "avg_queries": 4.71
            }
        ]
    },
    "params": {
        "site_id": "ebdemo",
        "start_date": 1562716800000,
        "end_date": 1563148800000,
        "filters": [
            {
                "values": [
                    "es_ES"
                ],
                "filter": "lang"
            }
        ]
    }
}

```


