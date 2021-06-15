---
title: Play Api
publish-date: 2020-02-25 00:00 am
categories: undefined
author: oscarm@empathy.co
order: 5
---

# Play Api

## What is this about?
The Play API is in charge of handle all the tooling elements used to customize the search experience.

## Step by step guide
### Step 1: Getting  your USER API token
To perform the different requests to the Play API, a user token is needed. To obtain the token you must perform the following request. The credentials sended in the request are the same you use to access any Empathy Services.

**POST** `https://api.empathybroker.com/user/v1/user/login`

**Query parameters** No needed.

**Body**

```json
{
  "email": "myusername@myemaildomain.com",
  "password": "myPassword_123"
}
```

**Bearer Token** No needed

**Response**

```json
{
    "expiration_date": "2019-07-25T16:54:13Z",
    "user_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NiJ9.eyJlYjo6aWQiOiI1Y2ExZDQxYzkyODZkZTAwMTVjMzNjMmEiLCJlYjo6cm9sZXMiOnsiU0VBUkNIX0FOQUxZU1QiOlsiKiJdLCJFQl9VU0VSUyI6WyIqIl0sIkVCX1NFUlZJQ0VTIjpbIioiXSwiRUJfSU5GTyI6WyIqIl0sIkVCX0ZFRURTIjpbIioiXSwiRUJfQURNSU4iOlsiKiJdfSwiZXhwIjoxNTY0MDczNjUzLCJpYXQiOjE1NjQwNDQ4NTMsImlzcyI6IlVzZXJTZXJ2aWNlIiwianRpIjoieGRaeGRSZEZrMFkvc2Q0KyIsInN1YiI6ImxhcmFtQGVtcGF0aHkuY28ifQ.yY2MtO_wGk03u902onbhEWV6Oa_zBD8WQr9r8_oIZ3pmvqT4KEaT-jBGmpJZ0FJsz5rZ4SPBeRyGQxwa_NT7Mg"
}
```
### Step 2: Perform the different requests to the Play API
Like the other services you should obtain your **INSTANCE_ID**. This ID is going to be used in all the request to the play service. You can choose between the following ways to use the Play API:

* Rest API: You can make HTTP requests directly to our API using the bearer token retrieved in the previous step. The PLAY_URL to make request is https://api.empathybroker.com/play/v1/**INSTANCE_ID**
* Dashboard/Playboard: You can also use Play API using our graphical user interface.

### Step 3: Start using the available endpoints
Once you have the PLAY_URL you are ready to use the following endpoints

* [Links](/api-reference/play-api/play-api-links/)
* [Equalize](/api-reference/play-api/play-api-equalize/)
* [Blacklists](/api-reference/play-api/play-api-blacklists/)
* [Boosts](/api-reference/play-api/play-api-boosts/)
* [Synonyms](/api-reference/play-api/play-api-synonyms/)


