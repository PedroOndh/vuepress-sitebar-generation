---
title: Coin Toss service API
publish-date: 2019-09-18 00:00 am
categories: play-api,mvt-user-manual
author: jorgey@empathy.co
---

# Coin Toss service API

## Requests
**Find the randomly assigned experiments for a user**

**GET**  `https://api.empathybroker.com/mvt/v1/cointoss/{instance_ID}/UserAssignment`

**Query Parameters**

| Parameter | Type   |
| --------- | ------ |
| user_id   | String |

**Response** `200 OK` [UserAssignment](#coin-toss-schemes)

If the requested user has no experiment assigned the list of Category Equalize will be empty in the response. An error code in the `4xx` range indicates a mistake in the information provided to the API, e.g.: a non-existent site ID or incorrect parameters.

## Errors
This API uses standard HTTP error codes. Most of the time the body of the response will include a message describing the error and providing some hints about its cause.

## Schemes
UserAssignment

### Example 1
*Example with multiple experiments assigned*

```json
{
  "category_equalize": [
    {
      "experiment_id": "5d41b6ae4cedfd0001ba2100",
      "scope": "null_454",
      "configuration_id": "5d3579ab0e939100123db533"
    },
    {
      "experiment_id": "5d2d7c5e8f7d130001b90352",
      "scope": "557153_null",
      "configuration_id": "5d1ca2ba3dfec7000fac1a50"
    }
  ],
  "user_id: "3216c3aa-d535-467c-8d3b-2d456716af71"
}
```
### Example 2
*Example with no experiments assigned*

```json
{
  "category_equalize": [],
  "user_id: "3216c3aa-d535-467c-8d3b-2d456716af71"
}
```


