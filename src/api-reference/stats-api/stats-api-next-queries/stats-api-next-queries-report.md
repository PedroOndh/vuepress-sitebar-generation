---
title: Next Queries
publish-date: 2019-07-26 00:00 am
categories: stats-api,stats-api-next-queries
author: laram@empathy.co
order: 1
---

# Next Queries

## Getting started
This report return the top relevant pair of queries (tuples q1 - q2) in a given date range.

* [The step-by-step guide to gather data from any report using the Empathy Stats API](/api-reference/stats-api/#stats-api-stepbystepguide)

## Request
To retrieve data from this report, define the request using all the available params and filters detailed in the box. First, ensure you[ get your token](/api-reference/stats-api/#stats-api-stepbystepguide).

**GET** `https://api.empathybroker.com/stats/v2/analysis/{Instance_ID}/NextQueries`

**Query Parameters**

| PARAMETER                                                                                                   | TYPE                  |
| ----------------------------------------------------------------------------------------------------------- | --------------------- |
| [start_date](/api-reference/stats-api/stats-api-query-parameters-glossary/#tagging-input-parameters-glossary-common) | Int (ISO 8601 format) |
| [end_date](/api-reference/stats-api/stats-api-query-parameters-glossary/#tagging-input-parameters-glossary-common)   | Int (ISO 8601 format) |
| [filters](/api-reference/stats-api/stats-api-query-parameters-glossary/#tagging-input-parameters-glossary-filters)   | list\[str]            |
| [min_sessions](/api-reference/stats-api/stats-api-query-parameters-glossary/#stats-report-specific-params)           | int                   |
| [Format parameters](/api-reference/stats-api/stats-api-query-parameters-glossary/#stats-report-specific-params)      | str                   |

**Bearer Token** [Get your token](/api-reference/stats-api/#stats-api-stepbystepguide)

**Example Request**
`https://api.empathybroker.com/stats/v2/analysis/{Instance_ID}/NextQueries?start_date=2019-07-10&end_date=2019-07-13`

## Response
Once the request is performed, the following KPIs are retrieved shaped in _json_ format by default:

* Ocurrences of each pair of queries in same session.
* Count of users containing that pair of queries in all their queries history.

```json

{
    "data": [
        {
            "query": "zapato",
            "query_next": "sandalia",
            "session_count": 135,
            "user_count": 131
        },
        {
            "query": "bañador",
            "query_next": "bikini",
            "session_count": 123,
            "user_count": 120
        },
        {
            "query": "sandalia",
            "query_next": "zapato",
            "session_count": 111,
            "user_count": 108
        },
        {
            "query": "bikini",
            "query_next": "bañador",
            "session_count": 96,
            "user_count": 90
        },
        {
            "query": "vestido",
            "query_next": "mono",
            "session_count": 77,
            "user_count": 73
        },
        {
            "query": "terlik",
            "query_next": "sandaletler",
            "session_count": 69,
            "user_count": 68
        },
        {
            "query": "обувь",
            "query_next": "сандалии",
            "session_count": 67,
            "user_count": 61
        },
        {
            "query": "deporte",
            "query_next": "leggings",
            "session_count": 64,
            "user_count": 60
        },
        {
            "query": "bañador",
            "query_next": "bañador moldeador",
            "session_count": 57,
            "user_count": 56
        },
        {
            "query": "calzado",
            "query_next": "sandalia",
            "session_count": 55,
            "user_count": 55
        },
        {
            "query": "bolso",
            "query_next": "bolso playa",
            "session_count": 53,
            "user_count": 52
        },
        {
            "query": "sandalia",
            "query_next": "sandalia plana",
            "session_count": 49,
            "user_count": 47
        },
        {
            "query": "bolso",
            "query_next": "bolsa",
            "session_count": 49,
            "user_count": 49
        },
        {
            "query": "sandalia",
            "query_next": "sandalia cuña",
            "session_count": 44,
            "user_count": 42
        },
        {
            "query": "sandalia",
            "query_next": "calzado",
            "session_count": 44,
            "user_count": 44
        },
        {
            "query": "zapato",
            "query_next": "zapato cuña cuña",
            "session_count": 43,
            "user_count": 42
        },
        {
            "query": "bra",
            "query_next": "bralette",
            "session_count": 43,
            "user_count": 36
        },
        {
            "query": "le",
            "query_next": "leggings",
            "session_count": 42,
            "user_count": 41
        },
        {
            "query": "water",
            "query_next": "watersports",
            "session_count": 41,
            "user_count": 41
        },
        {
            "query": "bikini",
            "query_next": "bikini sujetador",
            "session_count": 41,
            "user_count": 39
        },
        {
            "query": "mayo",
            "query_next": "bikini",
            "session_count": 40,
            "user_count": 40
        },
        {
            "query": "zapato",
            "query_next": "zapatilla",
            "session_count": 40,
            "user_count": 40
        },
        {
            "query": "leggings",
            "query_next": "deporte",
            "session_count": 40,
            "user_count": 36
        },
        {
            "query": "buty",
            "query_next": "klapki",
            "session_count": 38,
            "user_count": 36
        },
        {
            "query": "ba",
            "query_next": "bañador",
            "session_count": 38,
            "user_count": 36
        },
        {
            "query": "short",
            "query_next": "shorts",
            "session_count": 38,
            "user_count": 37
        },
        {
            "query": "bolso",
            "query_next": "bolso rafia",
            "session_count": 37,
            "user_count": 36
        },
        {
            "query": "pantalone",
            "query_next": "pantalon largo",
            "session_count": 36,
            "user_count": 32
        },
        {
            "query": "mater",
            "query_next": "maternity",
            "session_count": 34,
            "user_count": 32
        },
        {
            "query": "pijama",
            "query_next": "pijama corto",
            "session_count": 32,
            "user_count": 28
        },
        {
            "query": "elbise",
            "query_next": "tulum",
            "session_count": 32,
            "user_count": 30
        },
        {
            "query": "calzado",
            "query_next": "calzado cuña",
            "session_count": 32,
            "user_count": 32
        },
        {
            "query": "vestido",
            "query_next": "zapato",
            "session_count": 31,
            "user_count": 31
        },
        {
            "query": "обувь",
            "query_next": "кроссовки",
            "session_count": 31,
            "user_count": 31
        },
        {
            "query": "брюки",
            "query_next": "штаны",
            "session_count": 30,
            "user_count": 28
        },
        {
            "query": "bañador",
            "query_next": "bañador deportivo",
            "session_count": 30,
            "user_count": 29
        },
        {
            "query": "sandalia",
            "query_next": "sandalia cuña",
            "session_count": 30,
            "user_count": 30
        },
        {
            "query": "leggings",
            "query_next": "sujetador deportivo",
            "session_count": 29,
            "user_count": 27
        },
        {
            "query": "sandalia",
            "query_next": "sandalia tacon",
            "session_count": 28,
            "user_count": 27
        },
        {
            "query": "deporte",
            "query_next": "deporte leggings",
            "session_count": 28,
            "user_count": 26
        },
        {
            "query": "bikini",
            "query_next": "mayo",
            "session_count": 27,
            "user_count": 26
        },
        {
            "query": "bañador moldeador",
            "query_next": "bañador",
            "session_count": 27,
            "user_count": 27
        },
        {
            "query": "scarpe",
            "query_next": "sandali",
            "session_count": 27,
            "user_count": 25
        },
        {
            "query": "сандалии",
            "query_next": "обувь",
            "session_count": 27,
            "user_count": 26
        },
        {
            "query": "платье",
            "query_next": "платья",
            "session_count": 26,
            "user_count": 23
        },
        {
            "query": "elbise",
            "query_next": "pantolon",
            "session_count": 26,
            "user_count": 26
        },
        {
            "query": "chancleta",
            "query_next": "sandalia",
            "session_count": 25,
            "user_count": 25
        },
        {
            "query": "body",
            "query_next": "bañador",
            "session_count": 25,
            "user_count": 23
        },
        {
            "query": "elbise",
            "query_next": "etek",
            "session_count": 25,
            "user_count": 25
        }
    ],
    "params": {
        "site_id": "ebdemo",
        "start_date": 1562716800000,
        "end_date": 1562976000000,
        "filters": [],
        "offset": 0,
        "rows": 50,
        "evol": false,
        "min_sessions": 1
    }
}

```

