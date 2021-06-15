---
title: User API
publish-date: 2020-06-11 11:06 am
categories: play-api
author: pedroo@empathy.co
---

# User API

## What is this about?
Like any other API, there some methods that should check the user authorizations to grant or forbid some features and data access. To standarize this behaviour all services must implement their checks in the way this wiki specifies.

## user_token
The [login](/api-reference/user-api/login/) method from the User Service generates tokens that can be used for authentication with all other services. These tokens have a default expiration time of 1 hour from the moment they have been generated and must be renewed. Tokens for special operations or users may have different expiration times.

## Service Authorization
The user_token value must be sent using the Authorization HTTP header using the following format:

```
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ
```

