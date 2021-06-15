---
title: Refresh
publish-date: 2020-06-11 11:32 am
categories: play-api,user-api
author: pedroo@empathy.co
order: 2
---

# Refresh

## About this endpoint
Get a fresh token using the token implicit on headers.

**POST** `https://assets.empathybroker.com/user/refresh`

**Request Data** Not needed

## Responses
Responses examples for successful and failing calls to the endpoint.

### 200
**Token refreshed**

```json

{
    "user_token": token,
    "expiration_date": expiration_date
}
```
### 400
**Bad params**

```json
{
    "err": "invalid.login.credentials"
}
```
### 401
**Token error**

```json
{
    "err": "invalid.login.credentials"
}
```
### 404
**User don't exists**

```json
{
    "err": "invalid.login.credentials"
}
```

