---
title: Stats API
publish-date: 2019-05-21 00:00 am
categories: undefined
author: laram@empathy.co
order: 6
---

# Stats API

## What is this about?
The Empathy Stats API is the service provided to access data stored in Empathy servers. This data can be retrieved and shaped into different reports, each one containing different data.

To get data from these reports, just follow the step-by-step guide below.

## Step by step guide
### Step 1: Getting your user an API token
To retrieve data from any report, a _user token_ is needed. To get it, the user may log in Stats API through a POST request shown here. This request will return the _user_token_.

The credentials are the same that are used to access any Empathy Service (Dashboard, Insights.. ). If you don't have this _username_ and _password_ , please ask the [Support Team](https://searchbroker.atlassian.net/servicedesk/customer/portal/1).

<video controls poster=""><source src="/docs-empathy/assets/media/stats-api-getting-token.mp4" type="video/mp4"></video>

**POST** `https://api.empathybroker.com/user/v1/user/login`

**Query parameters** No needed.

**Body**

```json
{
  "email": "myusername@myemaildomain.com",
  "password": "myPassword_123"
}
```

**Bearer Token** No needed.

**Response**

```json
{
    "expiration_date": "2019-07-25T16:54:13Z",
    "user_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NiJ9.eyJlYjo6aWQiOiI1Y2ExZDQxYzkyODZkZTAwMTVjMzNjMmEiLCJlYjo6cm9sZXMiOnsiU0VBUkNIX0FOQUxZU1QiOlsiKiJdLCJFQl9VU0VSUyI6WyIqIl0sIkVCX1NFUlZJQ0VTIjpbIioiXSwiRUJfSU5GTyI6WyIqIl0sIkVCX0ZFRURTIjpbIioiXSwiRUJfQURNSU4iOlsiKiJdfSwiZXhwIjoxNTY0MDczNjUzLCJpYXQiOjE1NjQwNDQ4NTMsImlzcyI6IlVzZXJTZXJ2aWNlIiwianRpIjoieGRaeGRSZEZrMFkvc2Q0KyIsInN1YiI6ImxhcmFtQGVtcGF0aHkuY28ifQ.yY2MtO_wGk03u902onbhEWV6Oa_zBD8WQr9r8_oIZ3pmvqT4KEaT-jBGmpJZ0FJsz5rZ4SPBeRyGQxwa_NT7Mg"
}
```
### Step 2: Refreshing the token
Eight hours after logging in, a fresh new _user_token_ will be needed. To get it, the request shown here should be performed using the old token as a token for this request.

**POST** `https://api.empathybroker.com/user/v1/user/refresh`

**Query parameters** No needed.

**Body** No needed

**Bearer Token** No needed.

**Response**

```json
{
    "expiration_date": "2019-07-25T16:54:13Z",
    "user_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NiJ9.eyJlYjo6aWQiOiI1Y2ExZDQxYzkyODZkZTAwMTVjMzNjMmEiLCJlYjo6cm9sZXMiOnsiU0VBUkNIX0FOQUxZU1QiOlsiKiJdLCJFQl9VU0VSUyI6WyIqIl0sIkVCX1NFUlZJQ0VTIjpbIioiXSwiRUJfSU5GTyI6WyIqIl0sIkVCX0ZFRURTIjpbIioiXSwiRUJfQURNSU4iOlsiKiJdfSwiZXhwIjoxNTY0MDczNjUzLCJpYXQiOjE1NjQwNDQ4NTMsImlzcyI6IlVzZXJTZXJ2aWNlIiwianRpIjoieGRaeGRSZEZrMFkvc2Q0KyIsInN1YiI6ImxhcmFtQGVtcGF0aHkuY28ifQ.yY2MtO_wGk03u902onbhEWV6Oa_zBD8WQr9r8_oIZ3pmvqT4KEaT-jBGmpJZ0FJsz5rZ4SPBeRyGQxwa_NT7Mg"
}

```

### Step 3: Choose the most suitable report
Once _user_token_ is obtained, you are ready to retrieve any of the following reports. You only have to choose reports that cover your business requirements.

To obtain more detail about them, just follow the links to each report's specific section:

* [Distribution Reports](/api-reference/stats-api/stats-api-distribution-report/) - view of a the site global metrics in a given time range.
* [Term Success Reports](/api-reference/stats-api/stats-api-terms-report/) - analysis of the perfomance of the different search terms.
* [Keyword Reports](/api-reference/stats-api/stats-api-keywords-report/) - hear terms are broken down into single keywords.
* [Category Reports](/api-reference/stats-api/stats-api-categories-reports/) - analysis of category performance for search or browse.
* [Related Reports](/api-reference/stats-api/stats-api-related-reports/) - analysis of products performance within an specific query.
* [Top Reports](/api-reference/stats-api/stats-api-top-reports/) - these query or click reports can be drilled down by specific filter values.
* [Next Queries Reports](/api-reference/stats-api/stats-api-next-queries/) - analysis of of query pairs within user juorneys.
* [Trending Reports](/api-reference/stats-api/stats-api-trending-reports/) - insights into trending searches or opportunities.
* [Tooling
  Reports](/api-reference/stats-api/stats-api-tooling-reports/) - analysis of different configurations of the search engine.

### Step 4: Get your data
Now you're ready to get your data. It will be returned and shaped in JSON or csv format. Below a quick video explaining the whole process:

<video controls poster=""><source src="/docs-empathy/assets/media/gettingdata.mp4" type="video/mp4"></video>


