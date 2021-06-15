---
title: Google Data Studio Connector 
publish-date: 2020-02-12 00:00 am
categories: stats-api,data-integration
author: danielgg@empathy.co
order: 1
---

# Google Data Studio Connector 

## What is about
Empathy Stats API can be integrated with Data Studio. You can easily connect to a variety of search perform data sources and visualise through highly configurable charts and tables.

With Data Studio, now you can create, share and collaborate your insights with your team in a fast way.

![Google data studio logo](/docs-empathy/assets/media/google-datastudio-size-small.png "dscc-logo")

## Step-by-step
### Add your Empathy Instance ID
Each Empathy project has **INSTANCE_ID** assigned. This ID will be required every time you create a report and will be provided by your Account Manager or by the [Empathy Support Team](http://support.empathybroker.com/).

### Have a look to the metrics and dimensions available 
One you have  your **instance_id** you can connect and create your reports. But firstly you need to take a look into the metrics and dimensions glossary to have a clear idea what would you have to use.

* **[Dscc Empathy Glossary](/api-reference/stats-api/data-integration/dataintegration-dscc/dataintegration-dscc-glossary/)**

### Create a report
Now you are able to create your own data reports!

For more information, how the connector works click [here](https://datastudio.google.com/reporting/0B5FF6JBKbNJxOWItcWo2SVVVeGc/page/DjD)

![Connector Dashboard](/docs-empathy/assets/media/empathy.co-data-studio-connector-dashboard.png "dscc-dashboard")


## Filter Control
With the new version of DSCC and thanks to our integration, filtering has never been so easy.

Click in the top toolbar. Select your filter as a dimension and hit the preview button in the upper right corner.

![filterControl](/docs-empathy/assets/media/filtercontrol.png "filter Control")

Now you can select between the different filters that we offer you and the KPIs will update themselves.

![filterControl2](/docs-empathy/assets/media/filtercontrol3.png "filter Control 2")

## KPIs Percentages
In order to view your KPIs as a percentage you will need to do a small conversion inside the connector once you have selected the chart.

Be sure to edit the default aggregation mode and change it to 'Median'.

![kpipercentages](/docs-empathy/assets/media/percentkpi.png "KPI Percentages")

\
In this way you can obtain the percentage of the KPIs returned correctly.

![kpipercentages2](/docs-empathy/assets/media/percentkpi2.png "KPI Percentages 2")

