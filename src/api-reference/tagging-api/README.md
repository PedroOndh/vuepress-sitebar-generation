---
title: Tagging API
publish-date: 2019-05-21 00:00 am
categories: undefined
author: laram@empathy.co
---

# Tagging API

## What is this about?
Use the Empathy Tagging API to capture the interactions of your customers with  either the search engine or the site navigation menus (or both!).  The data collected in this way forms the basis of Empathy's contextual and analytics services and API's.
      
The following interactions can be tracked using Empathy's Tagging API: 
* [**Search tagging events**](tagging-api-search-tagging) are used to track interactions  with the search engine and the results page: [_query_](tagging-api-search-tagging/tagging-api-search-tagging-query-event/), [_click_](tagging-api-search-tagging/tagging-api-search-tagging-click-event/), [_wishlist_](tagging-api-search-tagging/tagging-api-search-tagging-wishlist-event/), [_add2cart_](tagging-api-search-tagging/tagging-api-search-tagging-add2cart-event/), and [_checkout_](tagging-api-search-tagging/tagging-api-search-tagging-checkout-event/).
* [**Browse tagging events**](tagging-api-browse-tagging) are used to track interactions  with the site navigation menus and category pages:  [_category view_](tagging-api-browse-tagging/tagging-api-browse-tagging-category-event/), [_product view_](tagging-api-browse-tagging/tagging-api-browse-tagging-product-event/), [_add2cart_](tagging-api-browse-tagging/tagging-api-browse-tagging-add2cart-event/) and [_checkout_](tagging-api-browse-tagging/tagging-api-browse-tagging-checkout-event/).

## Instrumentation step by step
### Step 1: Get instance ID
Each Empathy project has **INSTANCE_ID** assigned. This ID will be required in any of the tagging instrumentation methods available and will be provided by your Account Manager or by the [Empathy Support Team](http://support.empathybroker.com).

### Step 2: Choose a tagging instrumentation method 
Empathy supports the following methods to integrate the tagging service and perform the event tracking calls:
* **Empathy REST API:** a GET request is performed to a different endpoint for each instrumented event.
* **Empathy JavaScript Tagging Library:** a Javascript function call for each one of the events is provided  in a custom Javascript library.
* [**Tag Manager Tagging Instrumentation:**](tagging-api-addon-tag-manager) built-in integrations  are provided for some of the most popular tag managers. Other tag managers can be integrated easily. 

### Step 3: Tagging initialisation code
After the scope of the integration has been defined (search, browse or both), a tagging instrumentation method has been chosen and an INSTANCE_ID has been received, the tagging integration can be started. 

Some instrumentations, in particular Javascript, will require running an initialization code before triggering any actual event.

#### REST API

No explicit initialisation needed.
#### JAVASCRIPT
```javascript
//1. Import Javascript Library
<script      src="https://assets.empathybroker.com/apijs/1.4/empathy.resources.js"type="text/javascript"></script>

//2. Create an instance of the service
var instanceID = <instanceID>
var environment = <staging|live>
var consent = true|false; //If user has accepted cookies or not
var empathyTAG = new EmpathyBrokerTAG(instanceID, environment,consent)
```

#### TAG MANAGERS

1. Add one new tag with the following configuration:

Tag_Type: Custom HTML Tag or similar

Tag_Trigger: As soon as page starts loading

Tag_Scope: All pages

Tag_Code: code below to import JS Library

 ```javascript

 <script
 src="https://assets.empathybroker.com/apijs/1.4/empathy.resources.js"
 type="text/javascript"></script>

 ```


 2. Add another new tag with the following configuration:
    
    
    Tag_Type: Custom HTML Tag or similar
    
    
    Tag_Trigger: After Tag described in point 1
    
    
    Tag_Scope: All pages
    
    
    Tag_Code: code below to create an instance of the service JS Library

     ```javascript

     var instanceID = <instanceID>

     var environment = <staging|live>

     var empathyTAG = new EmpathyBrokerTAG(instanceID, environment)

     ```

### Step 4: Tagging documentation
* [**Search tagging**](/api-reference/tagging-api/tagging-api-search-tagging/)
* [**Browse tagging**](/api-reference/tagging-api/tagging-api-browse-tagging/)


