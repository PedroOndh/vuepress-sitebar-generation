---
title: Daily Pivot Distribution
publish-date: 2019-07-25 00:00 am
categories: stats-api,stats-api-distribution-report
author: laram@empathy.co
order: 3
---

# Daily Pivot Distribution

## About this report
This report returns the following metrics distributed by day and by the selected pivot variable: _queries_, _clicks_, _adds to cart_, _adds to wishlist_ , queries with _no results_, _findability_, _users_ and _sessions_.

## Request
Date range and pivots have to be specified, aditional filters can be provided to narrow the report scope.

**GET** `https://api.empathybroker.com/stats/v2/analysis/{Instance_ID}/DailyPivotDist`

**Query Parameters**


  | PARAMETER             |   TYPE  |
  |-----------------------|:-------:|
  | [start_date](/api-reference/stats-api/stats-api-query-parameters-glossary/#tagging-input-parameters-glossary-common)            |Int (ISO 8601 format)|
  | [end_date](/api-reference/stats-api/stats-api-query-parameters-glossary/#tagging-input-parameters-glossary-common)              |Int (ISO 8601 format)|
  | [filters](/api-reference/stats-api/stats-api-query-parameters-glossary/#tagging-input-parameters-glossary-filters)               |list[str] |
  | [pivots](/api-reference/stats-api/stats-api-query-parameters-glossary/#tagging-input-parameters-glossary-filters)               |list[str] |


**Bearer Token** [Get your token](/api-reference/stats-api/#stats-api-stepbystepguide)

**Example request:** 
`https://api.empathybroker.com/stats/v2/analysis/ebdemo/DailyPivotDist?start_date=2019-07-10&end_date=2019-07-17&pivots=scope&filters=lang&lang=es_ES`

## Response
The following KPIs are returned:
* __Total values for the date range and filters selected__: _total queries_, _clicks_, _adds to wishlist_, _total terms_, _avg terms by query_, _adds to cart_, _findability_, _sessions_, _users_ and _new users_.
* __Distributed values by day and pivot value__: _users_, _sessions_, _findability _, _clicks_, _queries_, _adds to wishlist_, _adds to cart_ and _no results count_.

```json

{
    "data": {
        "query_count": 3031352,
        "click_count": 1436008,
        "wishlist_count": 0,
        "add2cart_count": 201617,
        "checkout_count": 0,
        "conversion_count": 0,
        "success_count": 1183342,
        "click_count_pct": 47.37,
        "wishlist_count_pct": 0,
        "add2cart_count_pct": 6.65,
        "checkout_count_pct": 0,
        "conversion_count_pct": 0,
        "success_count_pct": 39.04,
        "no_results_count": 277934,
        "no_results_count_pct": 9.17,
        "term_count": 5140544,
        "term_avg": 1.7,
        "apicall_count": 0,
        "findability": 39.04,
        "data": [
            {
                "pivots": [
                    {
                        "value": "default",
                        "pivot": "scope"
                    }
                ],
                "queries_data": [
                    {
                        "datetime": "2019-07-10T00:00:00Z",
                        "value": 216293,
                        "pct": 100
                    },
                    {
                        "datetime": "2019-07-11T00:00:00Z",
                        "value": 201593,
                        "pct": 100
                    },
                    {
                        "datetime": "2019-07-12T00:00:00Z",
                        "value": 155121,
                        "pct": 100
                    },
                    {
                        "datetime": "2019-07-13T00:00:00Z",
                        "value": 106999,
                        "pct": 100
                    },
                    {
                        "datetime": "2019-07-14T00:00:00Z",
                        "value": 115483,
                        "pct": 100
                    }
                ],
                "clicks_data": [
                    {
                        "datetime": "2019-07-10T00:00:00Z",
                        "value": 54771,
                        "pct": 25.32
                    },
                    {
                        "datetime": "2019-07-11T00:00:00Z",
                        "value": 52819,
                        "pct": 26.2
                    },
                    {
                        "datetime": "2019-07-12T00:00:00Z",
                        "value": 37820,
                        "pct": 24.38
                    },
                    {
                        "datetime": "2019-07-13T00:00:00Z",
                        "value": 26028,
                        "pct": 24.33
                    },
                    {
                        "datetime": "2019-07-14T00:00:00Z",
                        "value": 30505,
                        "pct": 26.42
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
                        "value": 9158,
                        "pct": 4.23
                    },
                    {
                        "datetime": "2019-07-11T00:00:00Z",
                        "value": 8121,
                        "pct": 4.03
                    },
                    {
                        "datetime": "2019-07-12T00:00:00Z",
                        "value": 5537,
                        "pct": 3.57
                    },
                    {
                        "datetime": "2019-07-13T00:00:00Z",
                        "value": 3769,
                        "pct": 3.52
                    },
                    {
                        "datetime": "2019-07-14T00:00:00Z",
                        "value": 4145,
                        "pct": 3.59
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
                        "value": 18173,
                        "pct": 8.4
                    },
                    {
                        "datetime": "2019-07-11T00:00:00Z",
                        "value": 16518,
                        "pct": 8.19
                    },
                    {
                        "datetime": "2019-07-12T00:00:00Z",
                        "value": 13197,
                        "pct": 8.51
                    },
                    {
                        "datetime": "2019-07-13T00:00:00Z",
                        "value": 9427,
                        "pct": 8.81
                    },
                    {
                        "datetime": "2019-07-14T00:00:00Z",
                        "value": 9036,
                        "pct": 7.82
                    }
                ],
                "findability_data": [
                    {
                        "datetime": "2019-07-10T00:00:00Z",
                        "value": 43368,
                        "pct": 20.05
                    },
                    {
                        "datetime": "2019-07-11T00:00:00Z",
                        "value": 41633,
                        "pct": 20.65
                    },
                    {
                        "datetime": "2019-07-12T00:00:00Z",
                        "value": 30166,
                        "pct": 19.45
                    },
                    {
                        "datetime": "2019-07-13T00:00:00Z",
                        "value": 20654,
                        "pct": 19.3
                    },
                    {
                        "datetime": "2019-07-14T00:00:00Z",
                        "value": 23375,
                        "pct": 20.24
                    }
                ]
            },
            {
                "pivots": [
                    {
                        "value": "mobileweb",
                        "pivot": "scope"
                    }
                ],
                "queries_data": [
                    {
                        "datetime": "2019-07-10T00:00:00Z",
                        "value": 277296,
                        "pct": 100
                    },
                    {
                        "datetime": "2019-07-11T00:00:00Z",
                        "value": 260397,
                        "pct": 100
                    },
                    {
                        "datetime": "2019-07-12T00:00:00Z",
                        "value": 219914,
                        "pct": 100
                    },
                    {
                        "datetime": "2019-07-13T00:00:00Z",
                        "value": 229464,
                        "pct": 100
                    },
                    {
                        "datetime": "2019-07-14T00:00:00Z",
                        "value": 260959,
                        "pct": 100
                    }
                ],
                "clicks_data": [
                    {
                        "datetime": "2019-07-10T00:00:00Z",
                        "value": 62579,
                        "pct": 22.57
                    },
                    {
                        "datetime": "2019-07-11T00:00:00Z",
                        "value": 59225,
                        "pct": 22.74
                    },
                    {
                        "datetime": "2019-07-12T00:00:00Z",
                        "value": 48541,
                        "pct": 22.07
                    },
                    {
                        "datetime": "2019-07-13T00:00:00Z",
                        "value": 50606,
                        "pct": 22.05
                    },
                    {
                        "datetime": "2019-07-14T00:00:00Z",
                        "value": 60783,
                        "pct": 23.29
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
                        "value": 11011,
                        "pct": 3.97
                    },
                    {
                        "datetime": "2019-07-11T00:00:00Z",
                        "value": 9740,
                        "pct": 3.74
                    },
                    {
                        "datetime": "2019-07-12T00:00:00Z",
                        "value": 7267,
                        "pct": 3.3
                    },
                    {
                        "datetime": "2019-07-13T00:00:00Z",
                        "value": 7706,
                        "pct": 3.36
                    },
                    {
                        "datetime": "2019-07-14T00:00:00Z",
                        "value": 8763,
                        "pct": 3.36
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
                        "value": 18984,
                        "pct": 6.85
                    },
                    {
                        "datetime": "2019-07-11T00:00:00Z",
                        "value": 17564,
                        "pct": 6.75
                    },
                    {
                        "datetime": "2019-07-12T00:00:00Z",
                        "value": 15184,
                        "pct": 6.9
                    },
                    {
                        "datetime": "2019-07-13T00:00:00Z",
                        "value": 14959,
                        "pct": 6.52
                    },
                    {
                        "datetime": "2019-07-14T00:00:00Z",
                        "value": 15541,
                        "pct": 5.96
                    }
                ],
                "findability_data": [
                    {
                        "datetime": "2019-07-10T00:00:00Z",
                        "value": 44153,
                        "pct": 15.92
                    },
                    {
                        "datetime": "2019-07-11T00:00:00Z",
                        "value": 41699,
                        "pct": 16.01
                    },
                    {
                        "datetime": "2019-07-12T00:00:00Z",
                        "value": 34407,
                        "pct": 15.65
                    },
                    {
                        "datetime": "2019-07-13T00:00:00Z",
                        "value": 35432,
                        "pct": 15.44
                    },
                    {
                        "datetime": "2019-07-14T00:00:00Z",
                        "value": 41492,
                        "pct": 15.9
                    }
                ]
            },
            {
                "pivots": [
                    {
                        "value": "mobile",
                        "pivot": "scope"
                    }
                ],
                "queries_data": [
                    {
                        "datetime": "2019-07-10T00:00:00Z",
                        "value": 17794,
                        "pct": 100
                    },
                    {
                        "datetime": "2019-07-11T00:00:00Z",
                        "value": 16431,
                        "pct": 100
                    },
                    {
                        "datetime": "2019-07-12T00:00:00Z",
                        "value": 12377,
                        "pct": 100
                    },
                    {
                        "datetime": "2019-07-13T00:00:00Z",
                        "value": 13542,
                        "pct": 100
                    },
                    {
                        "datetime": "2019-07-14T00:00:00Z",
                        "value": 14851,
                        "pct": 100
                    }
                ],
                "clicks_data": [
                    {
                        "datetime": "2019-07-10T00:00:00Z",
                        "value": 9319,
                        "pct": 52.37
                    },
                    {
                        "datetime": "2019-07-11T00:00:00Z",
                        "value": 8863,
                        "pct": 53.94
                    },
                    {
                        "datetime": "2019-07-12T00:00:00Z",
                        "value": 6607,
                        "pct": 53.38
                    },
                    {
                        "datetime": "2019-07-13T00:00:00Z",
                        "value": 7172,
                        "pct": 52.96
                    },
                    {
                        "datetime": "2019-07-14T00:00:00Z",
                        "value": 8327,
                        "pct": 56.07
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
                        "value": 1069,
                        "pct": 6.01
                    },
                    {
                        "datetime": "2019-07-11T00:00:00Z",
                        "value": 996,
                        "pct": 6.06
                    },
                    {
                        "datetime": "2019-07-12T00:00:00Z",
                        "value": 635,
                        "pct": 5.13
                    },
                    {
                        "datetime": "2019-07-13T00:00:00Z",
                        "value": 679,
                        "pct": 5.01
                    },
                    {
                        "datetime": "2019-07-14T00:00:00Z",
                        "value": 815,
                        "pct": 5.49
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
                        "value": 1994,
                        "pct": 11.21
                    },
                    {
                        "datetime": "2019-07-11T00:00:00Z",
                        "value": 1874,
                        "pct": 11.41
                    },
                    {
                        "datetime": "2019-07-12T00:00:00Z",
                        "value": 1238,
                        "pct": 10
                    },
                    {
                        "datetime": "2019-07-13T00:00:00Z",
                        "value": 1515,
                        "pct": 11.19
                    },
                    {
                        "datetime": "2019-07-14T00:00:00Z",
                        "value": 1562,
                        "pct": 10.52
                    }
                ],
                "findability_data": [
                    {
                        "datetime": "2019-07-10T00:00:00Z",
                        "value": 9242,
                        "pct": 51.94
                    },
                    {
                        "datetime": "2019-07-11T00:00:00Z",
                        "value": 8807,
                        "pct": 53.6
                    },
                    {
                        "datetime": "2019-07-12T00:00:00Z",
                        "value": 6556,
                        "pct": 52.97
                    },
                    {
                        "datetime": "2019-07-13T00:00:00Z",
                        "value": 7086,
                        "pct": 52.33
                    },
                    {
                        "datetime": "2019-07-14T00:00:00Z",
                        "value": 8242,
                        "pct": 55.5
                    }
                ]
            },
            {
                "pivots": [
                    {
                        "value": "appios",
                        "pivot": "scope"
                    }
                ],
                "queries_data": [
                    {
                        "datetime": "2019-07-10T00:00:00Z",
                        "value": 109226,
                        "pct": 100
                    },
                    {
                        "datetime": "2019-07-11T00:00:00Z",
                        "value": 105273,
                        "pct": 100
                    },
                    {
                        "datetime": "2019-07-12T00:00:00Z",
                        "value": 83804,
                        "pct": 100
                    },
                    {
                        "datetime": "2019-07-13T00:00:00Z",
                        "value": 82957,
                        "pct": 100
                    },
                    {
                        "datetime": "2019-07-14T00:00:00Z",
                        "value": 91785,
                        "pct": 100
                    }
                ],
                "clicks_data": [
                    {
                        "datetime": "2019-07-10T00:00:00Z",
                        "value": 131882,
                        "pct": 120.74
                    },
                    {
                        "datetime": "2019-07-11T00:00:00Z",
                        "value": 124443,
                        "pct": 118.21
                    },
                    {
                        "datetime": "2019-07-12T00:00:00Z",
                        "value": 97039,
                        "pct": 115.79
                    },
                    {
                        "datetime": "2019-07-13T00:00:00Z",
                        "value": 99122,
                        "pct": 119.49
                    },
                    {
                        "datetime": "2019-07-14T00:00:00Z",
                        "value": 125205,
                        "pct": 136.41
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
                        "value": 18344,
                        "pct": 16.79
                    },
                    {
                        "datetime": "2019-07-11T00:00:00Z",
                        "value": 17076,
                        "pct": 16.22
                    },
                    {
                        "datetime": "2019-07-12T00:00:00Z",
                        "value": 12359,
                        "pct": 14.75
                    },
                    {
                        "datetime": "2019-07-13T00:00:00Z",
                        "value": 12460,
                        "pct": 15.02
                    },
                    {
                        "datetime": "2019-07-14T00:00:00Z",
                        "value": 15469,
                        "pct": 16.85
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
                        "value": 15811,
                        "pct": 14.48
                    },
                    {
                        "datetime": "2019-07-11T00:00:00Z",
                        "value": 14743,
                        "pct": 14
                    },
                    {
                        "datetime": "2019-07-12T00:00:00Z",
                        "value": 12027,
                        "pct": 14.35
                    },
                    {
                        "datetime": "2019-07-13T00:00:00Z",
                        "value": 12023,
                        "pct": 14.49
                    },
                    {
                        "datetime": "2019-07-14T00:00:00Z",
                        "value": 11999,
                        "pct": 13.07
                    }
                ],
                "findability_data": [
                    {
                        "datetime": "2019-07-10T00:00:00Z",
                        "value": 112509,
                        "pct": 103.01
                    },
                    {
                        "datetime": "2019-07-11T00:00:00Z",
                        "value": 108085,
                        "pct": 102.67
                    },
                    {
                        "datetime": "2019-07-12T00:00:00Z",
                        "value": 84414,
                        "pct": 100.73
                    },
                    {
                        "datetime": "2019-07-13T00:00:00Z",
                        "value": 85600,
                        "pct": 103.19
                    },
                    {
                        "datetime": "2019-07-14T00:00:00Z",
                        "value": 106326,
                        "pct": 115.84
                    }
                ]
            },
            {
                "pivots": [
                    {
                        "value": "appand",
                        "pivot": "scope"
                    }
                ],
                "queries_data": [
                    {
                        "datetime": "2019-07-10T00:00:00Z",
                        "value": 105117,
                        "pct": 100
                    },
                    {
                        "datetime": "2019-07-11T00:00:00Z",
                        "value": 95120,
                        "pct": 100
                    },
                    {
                        "datetime": "2019-07-12T00:00:00Z",
                        "value": 77321,
                        "pct": 100
                    },
                    {
                        "datetime": "2019-07-13T00:00:00Z",
                        "value": 76925,
                        "pct": 100
                    },
                    {
                        "datetime": "2019-07-14T00:00:00Z",
                        "value": 85310,
                        "pct": 100
                    }
                ],
                "clicks_data": [
                    {
                        "datetime": "2019-07-10T00:00:00Z",
                        "value": 79536,
                        "pct": 75.66
                    },
                    {
                        "datetime": "2019-07-11T00:00:00Z",
                        "value": 72048,
                        "pct": 75.74
                    },
                    {
                        "datetime": "2019-07-12T00:00:00Z",
                        "value": 55462,
                        "pct": 71.73
                    },
                    {
                        "datetime": "2019-07-13T00:00:00Z",
                        "value": 57406,
                        "pct": 74.63
                    },
                    {
                        "datetime": "2019-07-14T00:00:00Z",
                        "value": 69900,
                        "pct": 81.94
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
                        "value": 12215,
                        "pct": 11.62
                    },
                    {
                        "datetime": "2019-07-11T00:00:00Z",
                        "value": 10267,
                        "pct": 10.79
                    },
                    {
                        "datetime": "2019-07-12T00:00:00Z",
                        "value": 7603,
                        "pct": 9.83
                    },
                    {
                        "datetime": "2019-07-13T00:00:00Z",
                        "value": 7537,
                        "pct": 9.8
                    },
                    {
                        "datetime": "2019-07-14T00:00:00Z",
                        "value": 8876,
                        "pct": 10.4
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
                        "value": 13495,
                        "pct": 12.84
                    },
                    {
                        "datetime": "2019-07-11T00:00:00Z",
                        "value": 11846,
                        "pct": 12.45
                    },
                    {
                        "datetime": "2019-07-12T00:00:00Z",
                        "value": 9939,
                        "pct": 12.85
                    },
                    {
                        "datetime": "2019-07-13T00:00:00Z",
                        "value": 9637,
                        "pct": 12.53
                    },
                    {
                        "datetime": "2019-07-14T00:00:00Z",
                        "value": 9648,
                        "pct": 11.31
                    }
                ],
                "findability_data": [
                    {
                        "datetime": "2019-07-10T00:00:00Z",
                        "value": 69221,
                        "pct": 65.85
                    },
                    {
                        "datetime": "2019-07-11T00:00:00Z",
                        "value": 63415,
                        "pct": 66.67
                    },
                    {
                        "datetime": "2019-07-12T00:00:00Z",
                        "value": 48349,
                        "pct": 62.53
                    },
                    {
                        "datetime": "2019-07-13T00:00:00Z",
                        "value": 49713,
                        "pct": 64.63
                    },
                    {
                        "datetime": "2019-07-14T00:00:00Z",
                        "value": 59398,
                        "pct": 69.63
                    }
                ]
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
        ],
        "pivots": [
            "scope"
        ]
    }
}
```


