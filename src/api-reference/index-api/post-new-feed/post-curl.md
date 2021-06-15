---
title: Post using CURL instructions
publish-date: 2020-06-11 09:33 am
categories: index-api,post-new-feed
author: pedroo@empathy.co
order: 1
---

# Post using CURL instructions

## What is this about?
Detailed instructions on how to use the Empathy Index API Through Post using CURL instructions.

First consult [Empathy Index API](/api-reference/index-api/)

## Step by step guide
### Step 1: Endpoint
To send a new feed to be indexed you must build a POST request to the following URL (replace constants with the values that the Empathy team has provided to you):

**POST** `INDEX_SERVICE_URL/services/jobs/submit/INDEX_TOKEN/FEED_ID`
### Step 2: Samples using CURL
### \- Text File (default)

```
curl -H "Content-Type:text/xml" -d @YOUR_FILE -X POST https://INDEX_SERVICE_URL/services/jobs/submit/INDEX_TOKEN/FEED_ID
```

  You must include the headers according your contents, for example use:

* Please note that in **@YOUR_FILE** the @ denote that is a file, **it's mandatory** (ex. @my_feed.xml)
* Content-Type:text/xml -> XML DATA
* Content-Type:application/json -> JSON DATA
* **INDEX_SERVICE_URL** could be:

  * [https://preindex.empathybroker.com](https://preindex.empathybroker.com/services/jobs/submit/)
  * [https://index.empathybroker.com](https://index.empathybroker.com/)

### \- Binary File

```
curl -H"Content-Type:application/zip"--data-binary @YOUR_FILE -X POST https://INDEX_SERVICE_URL/services/jobs/submit/INDEX_TOKEN/FEED_ID
```

  If you use a binary file, like zip or gzip files your must specify a new parameter called *\--data-binary*:

* Please note that in **@YOUR_FILE** the @ denote that is a file, **it's mandatory** (ex. @my_feed.xml)
* Content-Type:application/zip -> ZIP files
* Content-Type:application/gzip -> GZIP files

### \- Please ask us for other options

### Step 3: Check indexer jobs
CURL call will return a state of the indexation where it will detail if everything went OK, or there was any kind of error. Sometimes thought, the response will give you an "state: QUEUED" that might not be really clear. In case you want to check an historic of your indexing calls and see if anything is stuck you can access to this: 

`https://preindex.empathybroker.com/services/jobs/INDEX_TOKEN`


