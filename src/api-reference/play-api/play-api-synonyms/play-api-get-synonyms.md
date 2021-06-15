---
title: Get Synonyms
publish-date: 2020-03-20 00:00 am
categories: play-api,play-api-synonyms
author: oscarm@empathy.co
order: -2
---

# Get Synonyms

## About this endpoint
Get list of synonyms

## Request
Define the request using all the available params and filters detailed in the box.

### Request
**GET** `https://api.empathybroker.com/play/v1/INSTANCE_ID/synonyms`

| Parameter Name | Required | Description                                 |
| -------------- | -------- | ------------------------------------------- |
| rows           | False    | Number of rows                              |
| pkw            | False    | Filter by synonym keywords (partial search) |
| offset         | False    | Elements to skip                            |
| lang           | False    | Filter by synonym language                  |
| kw             | False    | Filter by synonym keywords (exact search)   |
| enabled        | False    | Filter by enabled synonyms                  |

## Response
Once the request is performed, the following data is retrieved in *json* format.

### Response
```json
{
  "num_found": 2,
  "results": [
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
  },
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
          "edited",
          "editable"
        ],
        "type": "basic",
        "updated_on": "2020-03-12T17:36:46.000Z"
  }
  ]
}

```

