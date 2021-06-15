---
title: Daily Distribution Categories
publish-date: 2019-07-25 00:00 am
categories: stats-api,stats-api-categories-reports
author: laram@empathy.co
order: 2
---

# Daily Distribution Categories

## Getting started
This report returns the relevant KPIs for a specific category and its distribution for the date range selected.

[STEP-BY-STEP GUIDE to gather data from any report using the Empathy Stats API](/api-reference/stats-api/)

## Request
To retrieve data from this report, define the request using all the available params and filters detailed in the box. 
First, ensure you [get your token](/api-reference/stats-api#stats-api-stepbystepguide).

**GET** `https://api.empathybroker.com/stats/v2/analysis/{Instance_ID}/DailyCategoryDist`

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
`https://api.empathybroker.com/stats/v2/analysis/ebdemo/DailyCategoryDist?start_date=2019-07-10&end_date=2019-07-13&category_id=1030204572`

## Response
Once the request is performed, the following KPIs are retrieved shaped in _json_ format:

* **KPIs retrieved for the category in the period selected**: _total_ _queries_, _clicks_, _adds to wishlist, adds to cart, findability, sessions, sponsored clicks, clicks on first page and next pages._
* **Main KPIs distributed by day:** clicks, success clicks, adds to cart.

```json

{
    "data": {
        "query_count": 0,
        "click_count": 601677,
        "wishlist_count": 0,
        "add2cart_count": 57741,
        "checkout_count": 0,
        "conversion_count": 0,
        "success_count": 580406,
        "click_count_pct": 100,
        "wishlist_count_pct": 100,
        "add2cart_count_pct": 100,
        "checkout_count_pct": 100,
        "conversion_count_pct": 0,
        "success_count_pct": 100,
        "no_results_count": 0,
        "no_results_count_pct": 100,
        "term_count": 0,
        "term_avg": 0,
        "apicall_count": 0,
        "findability": 100,
        "clicks_data": [
            {
                "datetime": "2019-07-10T00:00:00Z",
                "value": 207156,
                "pct": 100
            },
            {
                "datetime": "2019-07-11T00:00:00Z",
                "value": 205792,
                "pct": 100
            },
            {
                "datetime": "2019-07-12T00:00:00Z",
                "value": 188729,
                "pct": 100
            }
        ],
        "success_data": [
            {
                "datetime": "2019-07-10T00:00:00Z",
                "value": 199667,
                "pct": 100
            },
            {
                "datetime": "2019-07-11T00:00:00Z",
                "value": 198438,
                "pct": 100
            },
            {
                "datetime": "2019-07-12T00:00:00Z",
                "value": 182301,
                "pct": 100
            }
        ],
        "add2cart_data": [
            {
                "datetime": "2019-07-10T00:00:00Z",
                "value": 21080,
                "pct": 100
            },
            {
                "datetime": "2019-07-11T00:00:00Z",
                "value": 19873,
                "pct": 100
            },
            {
                "datetime": "2019-07-12T00:00:00Z",
                "value": 16788,
                "pct": 100
            }
        ],
        "checkout_data": [
            {
                "datetime": "2019-07-10T00:00:00Z",
                "value": 0,
                "pct": 100
            },
            {
                "datetime": "2019-07-11T00:00:00Z",
                "value": 0,
                "pct": 100
            },
            {
                "datetime": "2019-07-12T00:00:00Z",
                "value": 0,
                "pct": 100
            }
        ]
    },
    "params": {
        "site_id": "pullbear",
        "start_date": 1562716800000,
        "end_date": 1562976000000,
        "filters": [],
        "category_id": "1030204572",
        "bucket_size": "day",
        "browsing": false
    }
}

```

