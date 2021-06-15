---
title: Events
publish-date: 2020-06-08 10:12 am
categories: search-api,contextualize-api
author: pedroo@empathy.co
order: 6
---

# Events

## About this Endpoint
Process received tagging events to get user behaviours.

### Request
**POST** `https://api.empathybroker.com/contextsearch/v2/events/`

**Query Parameters** Not needed

**Body**

```json
[
  {
    "site_id": "site_id",
    "event_type": "query",
    "metadata": {
        "equalize_id": "equalize_id", // the equalizer identifier applied during the search the request
        "timestamp": 123123123123, // timestamp (in epoch milliseconds) when the event was originated
        "host_referrer": "", // HTTP Referer
        "user_agent": "", // HTTP User-Agent,
        "ip": "127.0.0.1",
        "geo_ip": {
            "country": "ES",
            "city": "Madrid",
            "latitude": 40.417,
            "longitude": -3.703,
        }
    },
    "fields": {
        // global fields
        "user": "user_id_hash",
        "session": "session_id_hash",
        "front": "default",
        "q": "blue dress",
        "page": 1,

        // click/add2cart/wishlist fields
        "title": "Product Title",
        "product_id": "12345678",
        "url": "http://empathybroker.com/",
        "type": 1,
        "position": 1
    },
    "filters": {
        "lang": "en",
        "scope": "mobile",
        "store": "1234",
        "catalog": "5678"
    },
    "extra_fields": {
        "origin": "default",
        "user_type": "recurrent",
        "spellcheck": "false",
        "filtered": "false",
        "contextualize": "true",

        // click/add2cart/wishlist fields
        "boosted": "default",
        "boostedId": "1234"
    },
    "schema_version": "v2"   
  }
]
```

## Responses
Responses examples for successful and failing calls to the endpoint.

### 200
**Successful information retrieve**

Type: application/json  

```json
{
  "status": "ok",
  "entity": {
    "errors": [
      {
        "position": 3,
        "status": "errors"
      }
    ],
    "ignored": [
      {
        "position": 0,
        "status": "ignored"
      }
    ],
    "processed": [
      {
        "position": 1,
        "status": "ok"
      },
      {
        "position": 2,
        "status": "ok"
      }
    ]
  }
}
```
### 401
**The user performing the action doesn't meet the security criteria**

Type: application/json

```json
{
  "code": 401,
  "message": "Unauthorized"
}
```
### 403
**The token for the user performing the action doesn't have access**

Type: application/json

```json
{
  "code": 403,
  "error": "HTTP 403 Forbidden"
}
```

