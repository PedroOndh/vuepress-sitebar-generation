---
title: Search API Input Parameter Glossary
publish-date: 2019-12-09 00:00 am
categories: search-api
author: iagof@empathy.co
---

# Search API Input Parameter Glossary

## Main Parameters
Parameter|Description|Data Type|Mandatory
:--:|--|:--:|:--:
q|The query for the request| String|**Yes**
lang|Set the language for the query|String|**Yes**
m|Set the number of results|String|**Yes**




## Optional Parameters
Parameter|Description|Data Type|Mandatory
:--:|--|:--:|:--:
start|It is used to paginate the results from a query|Integer|**No**
rows|It is used to paginate the results from a query|Integer|**No**
topTrends.rows| Specify a number of rows for the topTrends section. If is not specified, the rows params will be used|Integer|**No**
filter| Set the query filters| String|**No**
boost | boosting a query in lucene format| String|**No**
facet|Set the query facets|String|**No**
sort|Sort the results|String|**No**
jsonCallback|Name of the callback that will be executed after the request| String|**No**
suggestions.suggestion.docs|Number of results to include for each suggestion|String|**No**
store|The store identifier used by the request (Part of the uri params specified by config)|String|**No**
warehouse|The warehouse identifier used by the request (Part of the uri params specified by config)|String|**No**
catalogue|The catalogue identifier used by the request (Part of the uri params specified by config)|String|**No**
type|Set the type of links that you want to search by|String|**No**
portal|Set the portal|String|**No**
scope|Set the scope|String|**No**
session|Set the session|String|**No**/**Yes(Only for DW endpoint)**
user|Set the user|String|**No**/**Yes(Only for DW endpoint)**

