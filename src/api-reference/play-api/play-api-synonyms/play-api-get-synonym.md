---
title: Get Synonym
publish-date: 2020-03-20 00:00 am
categories: play-api,play-api-synonyms
author: oscarm@empathy.co
order: 1
---

# Get Synonym

## About this endpoint
Get a specific synonym

## Request
Define the request using all the available params detailed in the box.

### Request
**GET** `https://api.empathybroker.com/play/v1/INSTANCE_ID/synonyms/<id>`

## Response
Once the request is performed, the following data is retrieved in *json*format.

### Response
```json
{
      "alternatives": [],
      "batched": false,
      "created_on": "2020-03-12T17:36:46.000Z",
      "enabled": true,
      "extra": {
        "user": "test@test.com"
      },
      "id": "5e6a732ecb5403000e6354e9",
      "lang": "en_GB",
      "synonyms": [
        "Tweed",
        "Boucle",
        "boucle",
        "tweed"
      ],
      "type": "basic",
      "updated_on": "2020-03-12T17:36:46.000Z"
}
```

