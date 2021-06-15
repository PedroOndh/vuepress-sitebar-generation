---
title: Hourly Terms Success
publish-date: 2019-07-25 00:00 am
categories: stats-api,stats-api-terms-report
author: laram@empathy.co
order: 2
---

# Hourly Terms Success

## About this report
This report return the main KPIs of a search term and their hourly _distribution_ in the specified date range

## Request
Beside a datetime range and and optinally a set of filters, this reports requires a search term.

**GET** `https://api.empathybroker.com/stats/v2/analysis/{Instance_ID}/HourlyDistTermSuccess`

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
`https://api.empathybroker.com/stats/v2/analysis/ebdemo/HourlyDist?start_date=2019-07-11T00:00:00Z&end_date=2019-07-11T00:00:00Z&filters=scope&scope=desktop`

