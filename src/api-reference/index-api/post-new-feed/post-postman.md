---
title: POST using Postman
publish-date: 2020-06-11 10:28 am
categories: index-api,post-new-feed
author: pedroo@empathy.co
---

# POST using Postman

## What is this about?
How to perform the post of a new feed to the service using Postman application.

## Step by step guide
### Step 1
To ease things a little bit you can use [Postman](https://www.getpostman.com/) as a method to deliver the new feed to the service.

### Step 2
First you need to set up a POST request pointing to:

`INDEX_SERVICE_URL/services/jobs/submit/INDEX_TOKEN/FEED_ID
`

Where INDEX_SERVICE_URL could be:

* <https://preindex.empathybroker.com>
* [https://index.empathybroker.com](https://index.empathybroker.com/)

The INDEX_TOKEN is the one obtained from Jenkins when adding your index to the index platform.

The FEED_ID is the name of your feed.

![](https://searchbroker.atlassian.net/wiki/download/thumbnails/1612513751/Screenshot%202019-11-27%20at%2017.28.36.png?version=1&modificationDate=1574872155337&cacheVersion=1&api=v2&width=562&height=250)

### Step 3
Upload your feed to the request using the Body → form-data option, and then on the Key param setting File as the choice:



![](https://searchbroker.atlassian.net/wiki/download/thumbnails/1612513751/Screenshot%202019-11-27%20at%2017.31.47.png?version=1&modificationDate=1574872475729&cacheVersion=1&api=v2&width=522&height=250)

### Step 4
The Header should be automatically populated as Postman analyses the file to extract its type, in case it doesn't happen here is the header Postman uses for an XML catalog:



![](https://searchbroker.atlassian.net/wiki/download/thumbnails/1612513751/Screenshot%202019-11-28%20at%2010.11.17.png?version=1&modificationDate=1574932490705&cacheVersion=1&api=v2&width=602&height=250)

### Step 5
Finally just send the request and you will see the output in the console with the result.

### Step 6
If you want to verify your test you can go to:

`https://preindex.empathybroker.com/services/jobs/INDEX_TOKEN`


