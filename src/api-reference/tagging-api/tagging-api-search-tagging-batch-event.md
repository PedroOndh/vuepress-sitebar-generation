---
title: Track multiple events (batch)
publish-date: 2021-01-11 12:26 pm
categories: tagging-api
author: danih@empathy.co
order: 4
---

# Track multiple events (batch)

## About this endpoint
The endpoint can be used to **track multiple events of the same type** all at once.

The type of events that can be tracked are the same as the single event endpoints for search (*query*, *click*, *wishlist*, *checkout* and *add2cart)* and browse events (*category*, *product*, *add2cart* and *checkout).*

## Implementation
The request must be made using the POST method with a JSON body containing the **array of events** to track.

### REST API
**POST** `https://api.empathybroker.com/tagging/v1/track/{instance_ID}/{sink_ID}/batch`

The `sink_ID` is the name of the event to track (*query*, *click*, *wishlist*, *add2cart*, *checkout*, *browseCategory*, *browseProduct*, *browseAdd2Cart*, *browseCheckout*).

**Body**

The body must be specified in JSON format and contains the array of events to be tracked. The properties of each event object are the same as the query parameters used for each type of event at the single event endpoint. 

Please, refer to each individual event endpoint in the [Search Tagging](/api-reference/tagging-api/tagging-api-search-tagging) and the [Browse Tagging](/api-reference/tagging-api/tagging-api-browse-tagging) sections to see the specific parameter for each type of event.

**Response**

`200 OK` if all events are tracked successfully. 

If an event fails to be tracked the response code will be the highest HTTP code of each individual message, and the response body will be a JSON array with individual objects per event:

```json
[
  {
    "code": 200
  }, 
  {
    "code": 400,
    "error": "com.eb.tagging.util.exception.SerializationException: Field [q] is mandatory and cannot be null or empty"
  } 
]
```

**Example for checkout events**

`https://api.empathybroker.com/tagging/v1/track/myinstanceid/checkout/batch`

```json
[
  {
    "q": "jeans",
    "title": "Jeans_acid_wash_skinny",
    "productId": "0001-2589-3698",
    "page": "1",
    "url": "https://mypdppage.com",
    "scope": "desktop",
    "lang": "es",
    "store": "es", 
    "session": "83065720-6d15-4bda-a7a8-bf87eb9637ce",
    "user": "744b0f7a-32c9-4f89-9427-d84135aefa7e",
    "transactionId": "42313-PWM",
    "currency": "USD",
    "revenue": "30.50"

  },
  {
    "q": "jeans",
    "title": "Jeans_acid_wash_skinny",
    "productId": "0001-2589-3700",
    "page": "1",
    "url": "https://mypdppage.com",
    "scope": "desktop",
    "lang": "es",
    "store": "es", 
    "session": "83065720-6d15-4bda-a7a8-bf87eb9637ce",
    "user": "744b0f7a-32c9-4f89-9427-d84135aefa7e",
    "transactionId": "42314-PWM",
    "currency": "USD",
    "revenue": "10.00"
  }
]
```

