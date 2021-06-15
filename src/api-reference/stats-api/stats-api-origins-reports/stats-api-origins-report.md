---
title: Origins
publish-date: 2020-04-09 00:00 am
categories: stats-api,stats-api-origins-reports
author: davidc@empathy.co
order: 1
---

# Origins

## About this report
This report returns the number of queries aggregated by origin for the selected date range.

## Request
This report requires a date range. And additionally, a combination of filters can be specified to narrow down the results.

**GET** `https://api.empathybroker.com/stats/v2/{Instance_ID}/Origins`

**Query Parameters**


  | PARAMETER             |   TYPE  |
  |-----------------------|:-------:|
  | [start_date](/api-reference/stats-api/stats-api-query-parameters-glossary/#tagging-input-parameters-glossary-common)            |Int (ISO 8601 format)|
  | [end_date](/api-reference/stats-api/stats-api-query-parameters-glossary/#tagging-input-parameters-glossary-common)              |Int (ISO 8601 format)|
  | [filters](/api-reference/stats-api/stats-api-query-parameters-glossary/#tagging-input-parameters-glossary-filters)               |list[str] |


**Bearer Token** [Get your token](/api-reference/stats-api/#stats-api-stepbystepguide)

**Example request:** 
`https://api.empathybroker.com/stats/v2/ebdemo/Origins?start_date=2019-07-10&end_date=2019-07-17&filters=lang,scope&lang=es_ES&scope=desktop`

## Response
The following KPIs are returned:
 * __Total values for the date range and filters selected__: _total queries._
 * __Number of queries distributed by origin.__

```json
{
    "data": [
        {
            "query_count": 549,
            "origins_data": [
                {
                    "origin": "default",
                    "query_count": 396,
                    "query_count_pct": 72.13
                },
                {
                    "origin": "empathize_term",
                    "query_count": 83,
                    "query_count_pct": 15.12
                },
                {
                    "origin": "next_query",
                    "query_count": 40,
                    "query_count_pct": 7.29
                },
                {
                    "origin": "product_not_found",
                    "query_count": 21,
                    "query_count_pct": 3.83
                },
                {
                    "origin": "back",
                    "query_count": 4,
                    "query_count_pct": 0.73
                },
                {
                    "origin": "empathize_trending",
                    "query_count": 3,
                    "query_count_pct": 0.55
                },
                {
                    "origin": "autocomplete_reference",
                    "query_count": 2,
                    "query_count_pct": 0.36
                }
            ]
        }
    ],
    "params": {
        "site_id": "ebdemo",
        "start_date": 1586131200000,
        "end_date": 1586217600000,
        "filters": []
    }
}
```

