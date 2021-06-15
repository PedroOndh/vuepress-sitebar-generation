---
title: Reimport a job
publish-date: 2020-06-10 16:07 pm
categories: index-api,common-api
author: pedroo@empathy.co
---

# Reimport a job

## About this endpoint
Using this url with a **POST** request you will be able to reimport a previous JOB.

**POST** `INDEX_SERVICE_URL/services/jobs/reimport/INDEX_TOKEN/JOB_ID`

## Responses
The system will return a response like the one aside:

```json
{
  "id":"JOB_ID",
  "clientId":"CLIENT_NAME",
  "feedId":"FEED_ID",
  "fileId":"GENERATED_FILE_NAME",
  "state":"QUEUED",
  "date":"CURRENT_DATE"
}
```

