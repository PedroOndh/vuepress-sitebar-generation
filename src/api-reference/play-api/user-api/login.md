---
title: Login
publish-date: 2020-06-11 11:22 am
categories: play-api,user-api
author: pedroo@empathy.co
---

# Login

## About this endpoint
A simple login service method to check if the login and password credentials are valid. This should return an authorization matrix if the login is successful.

**POST** `https://assets.empathybroker.com/user/login`

**Request Data**

```json
{
    "email": "email@email.com",
    "password": "password"
}
```

| Name     | Type   | Optional | Description                      |
| -------- | ------ | -------- | -------------------------------- |
| email    | string | false    | user's email who wants to log in |
| password | string | false    | user password                    |

## Responses
Responses examples for successful and failing calls to the endpoint.

### 200
**Sucessful login**

```json

{
    "user_token": token,
    "expiration_date": expiration_date
}
```
### 401
**Invalid login credentials**

```json
{
  "err": "invalid.login.credentials"
}
```

