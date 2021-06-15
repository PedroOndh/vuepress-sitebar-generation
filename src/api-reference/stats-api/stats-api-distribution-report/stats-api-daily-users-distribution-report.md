---
title: Daily Users Distribution
publish-date: 2020-11-03 10:56 am
categories: stats-api,stats-api-distribution-report
author: davidc@empathy.co
order: 4
---

# Daily Users Distribution

## About this report
This report returns the following metrics distributed by day for the selected date range: _users_, _sessions_, _queries_, _queries from identified users_, _queries per user_ and _percentage of queries from identified users_.

## Request
This report takes start and end dates and, optionally, a set of filters to narrow down the results.

**GET** `https://api.empathybroker.com/stats/v2/{Instance_ID}/DailyUsersDist`

**Query Parameters**


  | PARAMETER             |   TYPE  |
  |-----------------------|:-------:|
  | [start_date](/api-reference/stats-api/stats-api-query-parameters-glossary/#tagging-input-parameters-glossary-common)            |Int (ISO 8601 format)|
  | [end_date](/api-reference/stats-api/stats-api-query-parameters-glossary/#tagging-input-parameters-glossary-common)              |Int (ISO 8601 format)|
  | [filters](/api-reference/stats-api/stats-api-query-parameters-glossary/#tagging-input-parameters-glossary-filters)               |list[str] |


**Bearer Token** [Get your token](/api-reference/stats-api/#stats-api-stepbystepguide)

**Example request:** 
`https://api.empathybroker.com/stats/v2/ebdemo/DailyUsersDist?start_date=2020-10-15&end_date=2020-10-31&filters=lang,scope&lang=es_ES&scope=desktop`

## Response
The following KPIs are returned:
* __Total values for the date range and filters selected__: _total users_, _sessions_, _queries_, _queries from identified users_, _queries per user_ and _percentage of queries from identified users_.
* __Distributed values by day__: _users_, _sessions_, _queries_, _queries from identified users_, _queries per user_ and _percentage of queries from identified users_.

```json
{
  "data": {
    "daily_data": [
      {
        "daily_user_count": 4,
        "daily_session_count": 4,
        "query_count": 10,
        "query_count_identified": 10,
        "queries_per_user": 2.5,
        "query_count_identified_pct": 100.0,
        "date": "2020-10-21T00:00:00Z"
      },
      {
        "daily_user_count": 1,
        "daily_session_count": 1,
        "query_count": 2,
        "query_count_identified": 2,
        "queries_per_user": 2.0,
        "query_count_identified_pct": 100.0,
        "date": "2020-10-23T00:00:00Z"
      }
    ],
    "daily_user_count_total": 5,
    "daily_session_count_total": 5,
    "query_count": 12,
    "query_count_identified": 12,
    "queries_per_user": 2.4,
    "query_count_identified_pct": 100.0
  },
  "params": {
    "site_id": "zara",
    "start_date": 1602720000000,
    "end_date": 1604102400000,
    "filters": [
      {
        "values": [
          "en_US"
        ],
        "filter": "lang"
      }
    ]
  }
}
```


