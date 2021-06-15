---
title: Hourly Distribution
publish-date: 2019-07-25 00:00 am
categories: stats-api,stats-api-distribution-report
author: laram@empathy.co
order: 2
---

# Hourly Distribution

## About this report
This report returns the following metrics distributed by hour for the selected date range: _queries_, _clicks_, _adds to cart_, _adds to wishlist_ , _queries_ with _no results_, _findability_, _users_ and _sessions_.

Hourly reports are only available for 90 days. 

## Request
To retrieve data from this report, define the request using all the available params and filters detailed in the box. First, ensure you [get your token](/api-reference/stats-api/#stats-api-stepbystepguide).

**GET** `https://api.empathybroker.com/stats/v2/analysis/{Instance_ID}/HourlyDist`

**Query Parameters**


  | PARAMETER             |   TYPE  |
  |-----------------------|:-------:|
  | [start_date](/api-reference/stats-api/stats-api-query-parameters-glossary/#tagging-input-parameters-glossary-common)            |Int (ISO 8601 format)|
  | [end_date](/api-reference/stats-api/stats-api-query-parameters-glossary/#tagging-input-parameters-glossary-common)              |Int (ISO 8601 format)|
  | [filters](/api-reference/stats-api/stats-api-query-parameters-glossary/#tagging-input-parameters-glossary-filters)               |list[str] |


**Bearer Token** [Get your token](/api-reference/stats-api/#stats-api-stepbystepguide)

**Example request:** 
`https://api.empathybroker.com/stats/v2/analysis/ebdemo/HourlyDist?start_date=2019-07-11T00:00:00Z&end_date=2019-07-12T00:00:00Z&filters=lang,scope&lang=es_ES&scope=desktop`

## Response
The following KPIs are returned: * __Total values for the date range and filters selected__: _total_ _queries_, _clicks_, _adds to wishlist_, 
    _total terms_, _avg terms by query_, _adds to cart_, _findability_, _sessions_, _users_ and _new users_._
* __Distributed values by hour__: _users_, _sessions_, _findability_, _clicks_, _queries_, _adds to wishlist_, 
    _adds to cart_ and _no results count_.

json
```json
{
    "data": {
        "query_count": 678814,
        "click_count": 317398,
        "wishlist_count": 0,
        "add2cart_count": 46200,
        "checkout_count": 0,
        "conversion_count": 0,
        "success_count": 263639,
        "click_count_pct": 46.76,
        "wishlist_count_pct": 0,
        "add2cart_count_pct": 6.81,
        "checkout_count_pct": 0,
        "conversion_count_pct": 0,
        "success_count_pct": 38.84,
        "no_results_count": 62545,
        "no_results_count_pct": 9.21,
        "term_count": 1149685,
        "term_avg": 1.69,
        "apicall_count": 0,
        "findability": 38.84,
        "daily_unique_users_count": 155098,
        "daily_unique_sessions_count": 157851,
        "daily_unique_new_users_count": 68731,
        "daily_unique_users_avg": 155098,
        "daily_unique_sessions_avg": 157851,
        "queries_data": [
            {
                "datetime": "2019-07-11T00:00:00Z",
                "value": 11906,
                "pct": 100
            },
            {
                "datetime": "2019-07-11T01:00:00Z",
                "value": 7814,
                "pct": 100
            },
            {
                "datetime": "2019-07-11T02:00:00Z",
                "value": 7851,
                "pct": 100
            },
            {
                "datetime": "2019-07-11T03:00:00Z",
                "value": 8679,
                "pct": 100
            },
            {
                "datetime": "2019-07-11T04:00:00Z",
                "value": 10160,
                "pct": 100
            },
            {
                "datetime": "2019-07-11T05:00:00Z",
                "value": 15388,
                "pct": 100
            },
            {
                "datetime": "2019-07-11T06:00:00Z",
                "value": 22244,
                "pct": 100
            },
            {
                "datetime": "2019-07-11T07:00:00Z",
                "value": 29018,
                "pct": 100
            },
            {
                "datetime": "2019-07-11T08:00:00Z",
                "value": 32371,
                "pct": 100
            },
            {
                "datetime": "2019-07-11T09:00:00Z",
                "value": 32182,
                "pct": 100
            },
            {
                "datetime": "2019-07-11T10:00:00Z",
                "value": 35289,
                "pct": 100
            },
            {
                "datetime": "2019-07-11T11:00:00Z",
                "value": 35298,
                "pct": 100
            },
            {
                "datetime": "2019-07-11T12:00:00Z",
                "value": 31837,
                "pct": 100
            },
            {
                "datetime": "2019-07-11T13:00:00Z",
                "value": 39140,
                "pct": 100
            },
            {
                "datetime": "2019-07-11T14:00:00Z",
                "value": 42627,
                "pct": 100
            },
            {
                "datetime": "2019-07-11T15:00:00Z",
                "value": 41944,
                "pct": 100
            },
            {
                "datetime": "2019-07-11T16:00:00Z",
                "value": 36859,
                "pct": 100
            },
            {
                "datetime": "2019-07-11T17:00:00Z",
                "value": 35074,
                "pct": 100
            },
            {
                "datetime": "2019-07-11T18:00:00Z",
                "value": 32038,
                "pct": 100
            },
            {
                "datetime": "2019-07-11T19:00:00Z",
                "value": 32706,
                "pct": 100
            },
            {
                "datetime": "2019-07-11T20:00:00Z",
                "value": 36433,
                "pct": 100
            },
            {
                "datetime": "2019-07-11T21:00:00Z",
                "value": 44006,
                "pct": 100
            },
            {
                "datetime": "2019-07-11T22:00:00Z",
                "value": 37072,
                "pct": 100
            },
            {
                "datetime": "2019-07-11T23:00:00Z",
                "value": 20878,
                "pct": 100
            }
        ],
        "clicks_data": [
            {
                "datetime": "2019-07-11T00:00:00Z",
                "value": 6506,
                "pct": 54.64
            },
            {
                "datetime": "2019-07-11T01:00:00Z",
                "value": 4022,
                "pct": 51.47
            },
            {
                "datetime": "2019-07-11T02:00:00Z",
                "value": 3135,
                "pct": 39.93
            },
            {
                "datetime": "2019-07-11T03:00:00Z",
                "value": 4042,
                "pct": 46.57
            },
            {
                "datetime": "2019-07-11T04:00:00Z",
                "value": 5055,
                "pct": 49.75
            },
            {
                "datetime": "2019-07-11T05:00:00Z",
                "value": 8430,
                "pct": 54.78
            },
            {
                "datetime": "2019-07-11T06:00:00Z",
                "value": 11110,
                "pct": 49.95
            },
            {
                "datetime": "2019-07-11T07:00:00Z",
                "value": 13653,
                "pct": 47.05
            },
            {
                "datetime": "2019-07-11T08:00:00Z",
                "value": 14756,
                "pct": 45.58
            },
            {
                "datetime": "2019-07-11T09:00:00Z",
                "value": 14213,
                "pct": 44.16
            },
            {
                "datetime": "2019-07-11T10:00:00Z",
                "value": 15253,
                "pct": 43.22
            },
            {
                "datetime": "2019-07-11T11:00:00Z",
                "value": 15926,
                "pct": 45.12
            },
            {
                "datetime": "2019-07-11T12:00:00Z",
                "value": 14222,
                "pct": 44.67
            },
            {
                "datetime": "2019-07-11T13:00:00Z",
                "value": 17825,
                "pct": 45.54
            },
            {
                "datetime": "2019-07-11T14:00:00Z",
                "value": 19771,
                "pct": 46.38
            },
            {
                "datetime": "2019-07-11T15:00:00Z",
                "value": 18691,
                "pct": 44.56
            },
            {
                "datetime": "2019-07-11T16:00:00Z",
                "value": 16502,
                "pct": 44.77
            },
            {
                "datetime": "2019-07-11T17:00:00Z",
                "value": 15155,
                "pct": 43.21
            },
            {
                "datetime": "2019-07-11T18:00:00Z",
                "value": 14252,
                "pct": 44.48
            },
            {
                "datetime": "2019-07-11T19:00:00Z",
                "value": 15044,
                "pct": 46
            },
            {
                "datetime": "2019-07-11T20:00:00Z",
                "value": 18007,
                "pct": 49.42
            },
            {
                "datetime": "2019-07-11T21:00:00Z",
                "value": 22325,
                "pct": 50.73
            },
            {
                "datetime": "2019-07-11T22:00:00Z",
                "value": 18671,
                "pct": 50.36
            },
            {
                "datetime": "2019-07-11T23:00:00Z",
                "value": 10832,
                "pct": 51.88
            }
        ],
        "wishlist_data": [
            {
                "datetime": "2019-07-11T00:00:00Z",
                "value": 0,
                "pct": 0
            },
            {
                "datetime": "2019-07-11T01:00:00Z",
                "value": 0,
                "pct": 0
            },
            {
                "datetime": "2019-07-11T02:00:00Z",
                "value": 0,
                "pct": 0
            },
            {
                "datetime": "2019-07-11T03:00:00Z",
                "value": 0,
                "pct": 0
            },
            {
                "datetime": "2019-07-11T04:00:00Z",
                "value": 0,
                "pct": 0
            },
            {
                "datetime": "2019-07-11T05:00:00Z",
                "value": 0,
                "pct": 0
            },
            {
                "datetime": "2019-07-11T06:00:00Z",
                "value": 0,
                "pct": 0
            },
            {
                "datetime": "2019-07-11T07:00:00Z",
                "value": 0,
                "pct": 0
            },
            {
                "datetime": "2019-07-11T08:00:00Z",
                "value": 0,
                "pct": 0
            },
            {
                "datetime": "2019-07-11T09:00:00Z",
                "value": 0,
                "pct": 0
            },
            {
                "datetime": "2019-07-11T10:00:00Z",
                "value": 0,
                "pct": 0
            },
            {
                "datetime": "2019-07-11T11:00:00Z",
                "value": 0,
                "pct": 0
            },
            {
                "datetime": "2019-07-11T12:00:00Z",
                "value": 0,
                "pct": 0
            },
            {
                "datetime": "2019-07-11T13:00:00Z",
                "value": 0,
                "pct": 0
            },
            {
                "datetime": "2019-07-11T14:00:00Z",
                "value": 0,
                "pct": 0
            },
            {
                "datetime": "2019-07-11T15:00:00Z",
                "value": 0,
                "pct": 0
            },
            {
                "datetime": "2019-07-11T16:00:00Z",
                "value": 0,
                "pct": 0
            },
            {
                "datetime": "2019-07-11T17:00:00Z",
                "value": 0,
                "pct": 0
            },
            {
                "datetime": "2019-07-11T18:00:00Z",
                "value": 0,
                "pct": 0
            },
            {
                "datetime": "2019-07-11T19:00:00Z",
                "value": 0,
                "pct": 0
            },
            {
                "datetime": "2019-07-11T20:00:00Z",
                "value": 0,
                "pct": 0
            },
            {
                "datetime": "2019-07-11T21:00:00Z",
                "value": 0,
                "pct": 0
            },
            {
                "datetime": "2019-07-11T22:00:00Z",
                "value": 0,
                "pct": 0
            },
            {
                "datetime": "2019-07-11T23:00:00Z",
                "value": 0,
                "pct": 0
            }
        ],
        "add2cart_data": [
            {
                "datetime": "2019-07-11T00:00:00Z",
                "value": 736,
                "pct": 6.18
            },
            {
                "datetime": "2019-07-11T01:00:00Z",
                "value": 515,
                "pct": 6.59
            },
            {
                "datetime": "2019-07-11T02:00:00Z",
                "value": 433,
                "pct": 5.52
            },
            {
                "datetime": "2019-07-11T03:00:00Z",
                "value": 501,
                "pct": 5.77
            },
            {
                "datetime": "2019-07-11T04:00:00Z",
                "value": 684,
                "pct": 6.73
            },
            {
                "datetime": "2019-07-11T05:00:00Z",
                "value": 1277,
                "pct": 8.3
            },
            {
                "datetime": "2019-07-11T06:00:00Z",
                "value": 1689,
                "pct": 7.59
            },
            {
                "datetime": "2019-07-11T07:00:00Z",
                "value": 2127,
                "pct": 7.33
            },
            {
                "datetime": "2019-07-11T08:00:00Z",
                "value": 2180,
                "pct": 6.73
            },
            {
                "datetime": "2019-07-11T09:00:00Z",
                "value": 2210,
                "pct": 6.87
            },
            {
                "datetime": "2019-07-11T10:00:00Z",
                "value": 2396,
                "pct": 6.79
            },
            {
                "datetime": "2019-07-11T11:00:00Z",
                "value": 2363,
                "pct": 6.69
            },
            {
                "datetime": "2019-07-11T12:00:00Z",
                "value": 2148,
                "pct": 6.75
            },
            {
                "datetime": "2019-07-11T13:00:00Z",
                "value": 2640,
                "pct": 6.75
            },
            {
                "datetime": "2019-07-11T14:00:00Z",
                "value": 2812,
                "pct": 6.6
            },
            {
                "datetime": "2019-07-11T15:00:00Z",
                "value": 2672,
                "pct": 6.37
            },
            {
                "datetime": "2019-07-11T16:00:00Z",
                "value": 2430,
                "pct": 6.59
            },
            {
                "datetime": "2019-07-11T17:00:00Z",
                "value": 2334,
                "pct": 6.65
            },
            {
                "datetime": "2019-07-11T18:00:00Z",
                "value": 2140,
                "pct": 6.68
            },
            {
                "datetime": "2019-07-11T19:00:00Z",
                "value": 2205,
                "pct": 6.74
            },
            {
                "datetime": "2019-07-11T20:00:00Z",
                "value": 2722,
                "pct": 7.47
            },
            {
                "datetime": "2019-07-11T21:00:00Z",
                "value": 3048,
                "pct": 6.93
            },
            {
                "datetime": "2019-07-11T22:00:00Z",
                "value": 2505,
                "pct": 6.76
            },
            {
                "datetime": "2019-07-11T23:00:00Z",
                "value": 1433,
                "pct": 6.86
            }
        ],
        "checkout_data": [
            {
                "datetime": "2019-07-11T00:00:00Z",
                "value": 0,
                "pct": 0
            },
            {
                "datetime": "2019-07-11T01:00:00Z",
                "value": 0,
                "pct": 0
            },
            {
                "datetime": "2019-07-11T02:00:00Z",
                "value": 0,
                "pct": 0
            },
            {
                "datetime": "2019-07-11T03:00:00Z",
                "value": 0,
                "pct": 0
            },
            {
                "datetime": "2019-07-11T04:00:00Z",
                "value": 0,
                "pct": 0
            },
            {
                "datetime": "2019-07-11T05:00:00Z",
                "value": 0,
                "pct": 0
            },
            {
                "datetime": "2019-07-11T06:00:00Z",
                "value": 0,
                "pct": 0
            },
            {
                "datetime": "2019-07-11T07:00:00Z",
                "value": 0,
                "pct": 0
            },
            {
                "datetime": "2019-07-11T08:00:00Z",
                "value": 0,
                "pct": 0
            },
            {
                "datetime": "2019-07-11T09:00:00Z",
                "value": 0,
                "pct": 0
            },
            {
                "datetime": "2019-07-11T10:00:00Z",
                "value": 0,
                "pct": 0
            },
            {
                "datetime": "2019-07-11T11:00:00Z",
                "value": 0,
                "pct": 0
            },
            {
                "datetime": "2019-07-11T12:00:00Z",
                "value": 0,
                "pct": 0
            },
            {
                "datetime": "2019-07-11T13:00:00Z",
                "value": 0,
                "pct": 0
            },
            {
                "datetime": "2019-07-11T14:00:00Z",
                "value": 0,
                "pct": 0
            },
            {
                "datetime": "2019-07-11T15:00:00Z",
                "value": 0,
                "pct": 0
            },
            {
                "datetime": "2019-07-11T16:00:00Z",
                "value": 0,
                "pct": 0
            },
            {
                "datetime": "2019-07-11T17:00:00Z",
                "value": 0,
                "pct": 0
            },
            {
                "datetime": "2019-07-11T18:00:00Z",
                "value": 0,
                "pct": 0
            },
            {
                "datetime": "2019-07-11T19:00:00Z",
                "value": 0,
                "pct": 0
            },
            {
                "datetime": "2019-07-11T20:00:00Z",
                "value": 0,
                "pct": 0
            },
            {
                "datetime": "2019-07-11T21:00:00Z",
                "value": 0,
                "pct": 0
            },
            {
                "datetime": "2019-07-11T22:00:00Z",
                "value": 0,
                "pct": 0
            },
            {
                "datetime": "2019-07-11T23:00:00Z",
                "value": 0,
                "pct": 0
            }
        ],
        "conversion_data": [
            {
                "datetime": "2019-07-11T00:00:00Z",
                "value": 0,
                "pct": 0
            },
            {
                "datetime": "2019-07-11T01:00:00Z",
                "value": 0,
                "pct": 0
            },
            {
                "datetime": "2019-07-11T02:00:00Z",
                "value": 0,
                "pct": 0
            },
            {
                "datetime": "2019-07-11T03:00:00Z",
                "value": 0,
                "pct": 0
            },
            {
                "datetime": "2019-07-11T04:00:00Z",
                "value": 0,
                "pct": 0
            },
            {
                "datetime": "2019-07-11T05:00:00Z",
                "value": 0,
                "pct": 0
            },
            {
                "datetime": "2019-07-11T06:00:00Z",
                "value": 0,
                "pct": 0
            },
            {
                "datetime": "2019-07-11T07:00:00Z",
                "value": 0,
                "pct": 0
            },
            {
                "datetime": "2019-07-11T08:00:00Z",
                "value": 0,
                "pct": 0
            },
            {
                "datetime": "2019-07-11T09:00:00Z",
                "value": 0,
                "pct": 0
            },
            {
                "datetime": "2019-07-11T10:00:00Z",
                "value": 0,
                "pct": 0
            },
            {
                "datetime": "2019-07-11T11:00:00Z",
                "value": 0,
                "pct": 0
            },
            {
                "datetime": "2019-07-11T12:00:00Z",
                "value": 0,
                "pct": 0
            },
            {
                "datetime": "2019-07-11T13:00:00Z",
                "value": 0,
                "pct": 0
            },
            {
                "datetime": "2019-07-11T14:00:00Z",
                "value": 0,
                "pct": 0
            },
            {
                "datetime": "2019-07-11T15:00:00Z",
                "value": 0,
                "pct": 0
            },
            {
                "datetime": "2019-07-11T16:00:00Z",
                "value": 0,
                "pct": 0
            },
            {
                "datetime": "2019-07-11T17:00:00Z",
                "value": 0,
                "pct": 0
            },
            {
                "datetime": "2019-07-11T18:00:00Z",
                "value": 0,
                "pct": 0
            },
            {
                "datetime": "2019-07-11T19:00:00Z",
                "value": 0,
                "pct": 0
            },
            {
                "datetime": "2019-07-11T20:00:00Z",
                "value": 0,
                "pct": 0
            },
            {
                "datetime": "2019-07-11T21:00:00Z",
                "value": 0,
                "pct": 0
            },
            {
                "datetime": "2019-07-11T22:00:00Z",
                "value": 0,
                "pct": 0
            },
            {
                "datetime": "2019-07-11T23:00:00Z",
                "value": 0,
                "pct": 0
            }
        ],
        "no_results_data": [
            {
                "datetime": "2019-07-11T00:00:00Z",
                "value": 1159,
                "pct": 9.73
            },
            {
                "datetime": "2019-07-11T01:00:00Z",
                "value": 737,
                "pct": 9.43
            },
            {
                "datetime": "2019-07-11T02:00:00Z",
                "value": 917,
                "pct": 11.68
            },
            {
                "datetime": "2019-07-11T03:00:00Z",
                "value": 852,
                "pct": 9.82
            },
            {
                "datetime": "2019-07-11T04:00:00Z",
                "value": 961,
                "pct": 9.46
            },
            {
                "datetime": "2019-07-11T05:00:00Z",
                "value": 1416,
                "pct": 9.2
            },
            {
                "datetime": "2019-07-11T06:00:00Z",
                "value": 1856,
                "pct": 8.34
            },
            {
                "datetime": "2019-07-11T07:00:00Z",
                "value": 2522,
                "pct": 8.69
            },
            {
                "datetime": "2019-07-11T08:00:00Z",
                "value": 2631,
                "pct": 8.13
            },
            {
                "datetime": "2019-07-11T09:00:00Z",
                "value": 2907,
                "pct": 9.03
            },
            {
                "datetime": "2019-07-11T10:00:00Z",
                "value": 3294,
                "pct": 9.33
            },
            {
                "datetime": "2019-07-11T11:00:00Z",
                "value": 3002,
                "pct": 8.5
            },
            {
                "datetime": "2019-07-11T12:00:00Z",
                "value": 2913,
                "pct": 9.15
            },
            {
                "datetime": "2019-07-11T13:00:00Z",
                "value": 3534,
                "pct": 9.03
            },
            {
                "datetime": "2019-07-11T14:00:00Z",
                "value": 3950,
                "pct": 9.27
            },
            {
                "datetime": "2019-07-11T15:00:00Z",
                "value": 3788,
                "pct": 9.03
            },
            {
                "datetime": "2019-07-11T16:00:00Z",
                "value": 3569,
                "pct": 9.68
            },
            {
                "datetime": "2019-07-11T17:00:00Z",
                "value": 3519,
                "pct": 10.03
            },
            {
                "datetime": "2019-07-11T18:00:00Z",
                "value": 3168,
                "pct": 9.89
            },
            {
                "datetime": "2019-07-11T19:00:00Z",
                "value": 3182,
                "pct": 9.73
            },
            {
                "datetime": "2019-07-11T20:00:00Z",
                "value": 3376,
                "pct": 9.27
            },
            {
                "datetime": "2019-07-11T21:00:00Z",
                "value": 3956,
                "pct": 8.99
            },
            {
                "datetime": "2019-07-11T22:00:00Z",
                "value": 3359,
                "pct": 9.06
            },
            {
                "datetime": "2019-07-11T23:00:00Z",
                "value": 1977,
                "pct": 9.47
            }
        ],
        "findability_data": [
            {
                "datetime": "2019-07-11T00:00:00Z",
                "value": 4930,
                "pct": 41.41
            },
            {
                "datetime": "2019-07-11T01:00:00Z",
                "value": 3280,
                "pct": 41.98
            },
            {
                "datetime": "2019-07-11T02:00:00Z",
                "value": 2602,
                "pct": 33.14
            },
            {
                "datetime": "2019-07-11T03:00:00Z",
                "value": 3257,
                "pct": 37.53
            },
            {
                "datetime": "2019-07-11T04:00:00Z",
                "value": 4118,
                "pct": 40.53
            },
            {
                "datetime": "2019-07-11T05:00:00Z",
                "value": 6955,
                "pct": 45.2
            },
            {
                "datetime": "2019-07-11T06:00:00Z",
                "value": 9226,
                "pct": 41.48
            },
            {
                "datetime": "2019-07-11T07:00:00Z",
                "value": 11400,
                "pct": 39.29
            },
            {
                "datetime": "2019-07-11T08:00:00Z",
                "value": 12149,
                "pct": 37.53
            },
            {
                "datetime": "2019-07-11T09:00:00Z",
                "value": 11946,
                "pct": 37.12
            },
            {
                "datetime": "2019-07-11T10:00:00Z",
                "value": 12861,
                "pct": 36.44
            },
            {
                "datetime": "2019-07-11T11:00:00Z",
                "value": 13253,
                "pct": 37.55
            },
            {
                "datetime": "2019-07-11T12:00:00Z",
                "value": 12039,
                "pct": 37.81
            },
            {
                "datetime": "2019-07-11T13:00:00Z",
                "value": 15114,
                "pct": 38.62
            },
            {
                "datetime": "2019-07-11T14:00:00Z",
                "value": 16217,
                "pct": 38.04
            },
            {
                "datetime": "2019-07-11T15:00:00Z",
                "value": 15531,
                "pct": 37.03
            },
            {
                "datetime": "2019-07-11T16:00:00Z",
                "value": 13768,
                "pct": 37.35
            },
            {
                "datetime": "2019-07-11T17:00:00Z",
                "value": 12663,
                "pct": 36.1
            },
            {
                "datetime": "2019-07-11T18:00:00Z",
                "value": 11942,
                "pct": 37.27
            },
            {
                "datetime": "2019-07-11T19:00:00Z",
                "value": 12469,
                "pct": 38.12
            },
            {
                "datetime": "2019-07-11T20:00:00Z",
                "value": 15251,
                "pct": 41.86
            },
            {
                "datetime": "2019-07-11T21:00:00Z",
                "value": 18503,
                "pct": 42.05
            },
            {
                "datetime": "2019-07-11T22:00:00Z",
                "value": 15296,
                "pct": 41.26
            },
            {
                "datetime": "2019-07-11T23:00:00Z",
                "value": 8869,
                "pct": 42.48
            }
        ],
        "unique_users_data": [
            {
                "datetime": "2019-07-11T00:00:00Z",
                "value": 2523,
                "avg_queries": 4.64
            },
            {
                "datetime": "2019-07-11T01:00:00Z",
                "value": 1647,
                "avg_queries": 4.68
            },
            {
                "datetime": "2019-07-11T02:00:00Z",
                "value": 1643,
                "avg_queries": 4.72
            },
            {
                "datetime": "2019-07-11T03:00:00Z",
                "value": 1746,
                "avg_queries": 4.91
            },
            {
                "datetime": "2019-07-11T04:00:00Z",
                "value": 2169,
                "avg_queries": 4.63
            },
            {
                "datetime": "2019-07-11T05:00:00Z",
                "value": 3474,
                "avg_queries": 4.36
            },
            {
                "datetime": "2019-07-11T06:00:00Z",
                "value": 5001,
                "avg_queries": 4.38
            },
            {
                "datetime": "2019-07-11T07:00:00Z",
                "value": 6419,
                "avg_queries": 4.47
            },
            {
                "datetime": "2019-07-11T08:00:00Z",
                "value": 7066,
                "avg_queries": 4.52
            },
            {
                "datetime": "2019-07-11T09:00:00Z",
                "value": 7352,
                "avg_queries": 4.31
            },
            {
                "datetime": "2019-07-11T10:00:00Z",
                "value": 8008,
                "avg_queries": 4.35
            },
            {
                "datetime": "2019-07-11T11:00:00Z",
                "value": 7812,
                "avg_queries": 4.46
            },
            {
                "datetime": "2019-07-11T12:00:00Z",
                "value": 7516,
                "avg_queries": 4.17
            },
            {
                "datetime": "2019-07-11T13:00:00Z",
                "value": 9102,
                "avg_queries": 4.24
            },
            {
                "datetime": "2019-07-11T14:00:00Z",
                "value": 9505,
                "avg_queries": 4.43
            },
            {
                "datetime": "2019-07-11T15:00:00Z",
                "value": 9269,
                "avg_queries": 4.47
            },
            {
                "datetime": "2019-07-11T16:00:00Z",
                "value": 8303,
                "avg_queries": 4.37
            },
            {
                "datetime": "2019-07-11T17:00:00Z",
                "value": 8134,
                "avg_queries": 4.26
            },
            {
                "datetime": "2019-07-11T18:00:00Z",
                "value": 7707,
                "avg_queries": 4.1
            },
            {
                "datetime": "2019-07-11T19:00:00Z",
                "value": 7858,
                "avg_queries": 4.11
            },
            {
                "datetime": "2019-07-11T20:00:00Z",
                "value": 8856,
                "avg_queries": 4.05
            },
            {
                "datetime": "2019-07-11T21:00:00Z",
                "value": 10377,
                "avg_queries": 4.18
            },
            {
                "datetime": "2019-07-11T22:00:00Z",
                "value": 8617,
                "avg_queries": 4.25
            },
            {
                "datetime": "2019-07-11T23:00:00Z",
                "value": 4994,
                "avg_queries": 4.12
            }
        ],
        "unique_sessions_data": [
            {
                "datetime": "2019-07-11T00:00:00Z",
                "value": 2577,
                "avg_queries": 4.55
            },
            {
                "datetime": "2019-07-11T01:00:00Z",
                "value": 1676,
                "avg_queries": 4.6
            },
            {
                "datetime": "2019-07-11T02:00:00Z",
                "value": 1678,
                "avg_queries": 4.62
            },
            {
                "datetime": "2019-07-11T03:00:00Z",
                "value": 1783,
                "avg_queries": 4.81
            },
            {
                "datetime": "2019-07-11T04:00:00Z",
                "value": 2206,
                "avg_queries": 4.55
            },
            {
                "datetime": "2019-07-11T05:00:00Z",
                "value": 3535,
                "avg_queries": 4.28
            },
            {
                "datetime": "2019-07-11T06:00:00Z",
                "value": 5089,
                "avg_queries": 4.31
            },
            {
                "datetime": "2019-07-11T07:00:00Z",
                "value": 6529,
                "avg_queries": 4.39
            },
            {
                "datetime": "2019-07-11T08:00:00Z",
                "value": 7182,
                "avg_queries": 4.45
            },
            {
                "datetime": "2019-07-11T09:00:00Z",
                "value": 7509,
                "avg_queries": 4.22
            },
            {
                "datetime": "2019-07-11T10:00:00Z",
                "value": 8147,
                "avg_queries": 4.28
            },
            {
                "datetime": "2019-07-11T11:00:00Z",
                "value": 7948,
                "avg_queries": 4.38
            },
            {
                "datetime": "2019-07-11T12:00:00Z",
                "value": 7652,
                "avg_queries": 4.1
            },
            {
                "datetime": "2019-07-11T13:00:00Z",
                "value": 9265,
                "avg_queries": 4.16
            },
            {
                "datetime": "2019-07-11T14:00:00Z",
                "value": 9676,
                "avg_queries": 4.35
            },
            {
                "datetime": "2019-07-11T15:00:00Z",
                "value": 9432,
                "avg_queries": 4.39
            },
            {
                "datetime": "2019-07-11T16:00:00Z",
                "value": 8453,
                "avg_queries": 4.3
            },
            {
                "datetime": "2019-07-11T17:00:00Z",
                "value": 8252,
                "avg_queries": 4.19
            },
            {
                "datetime": "2019-07-11T18:00:00Z",
                "value": 7855,
                "avg_queries": 4.02
            },
            {
                "datetime": "2019-07-11T19:00:00Z",
                "value": 7982,
                "avg_queries": 4.05
            },
            {
                "datetime": "2019-07-11T20:00:00Z",
                "value": 9028,
                "avg_queries": 3.98
            },
            {
                "datetime": "2019-07-11T21:00:00Z",
                "value": 10553,
                "avg_queries": 4.11
            },
            {
                "datetime": "2019-07-11T22:00:00Z",
                "value": 8755,
                "avg_queries": 4.18
            },
            {
                "datetime": "2019-07-11T23:00:00Z",
                "value": 5089,
                "avg_queries": 4.04
            }
        ]
    },
    "params": {
        "site_id": "ebdemo",
        "start_date": 1562803200000,
        "end_date": 1562850000000,
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

