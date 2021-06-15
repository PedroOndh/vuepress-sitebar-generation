---
title: Top queries
publish-date: 2019-07-26 00:00 am
categories: stats-api,stats-api-top-reports
author: laram@empathy.co
order: 1
---

# Top queries

## Getting started
This report calculate the top queries in the system for the selected date range and within the mandatory set of pivots.

[Here](/api-reference/stats-api/#stats-api-stepbystepguide) the step-by-step guide to gather data from any report using the Empathy Stats API

## Request
To retrieve data from this report, define the request using all the available params and filters detailed in the box. First, ensure you[ get your token](/api-reference/stats-api/#stats-api-stepbystepguide).

**GET** `https://api.empathybroker.com/stats/v2/analysis/{Instance_ID}/TopQueries`

**Query Parameters**

**Bearer Token** [here](/api-reference/stats-api/#stats-api-stepbystepguide) instructions to get your token

**Example Request**

## Response
Once the request is performed, the following KPIs are retrieved shaped in json format by default:

```json

data: {}{}{}

```

