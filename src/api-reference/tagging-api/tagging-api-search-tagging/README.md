---
title: Search Tagging
publish-date: 2019-06-06 00:00 am
categories: tagging-api
author: laram@empathy.co
order: 2
---

# Search Tagging

## What is about
The purpose of the search tagging API is to track the search interactions of the users.       

This page collects the different events that have to be tracked with links to the pages with detailed description  and instrumentation details. 

## Events to track
These are the events on the search tagging API specification:
* **[Query events](/api-reference/tagging-api/tagging-api-search-tagging/tagging-api-search-tagging-query-event/)** 
  should be triggered for every search interaction, ie. any time a a search result page is shown or 
  updated.

* **[Click events](/api-reference/tagging-api/tagging-api-search-tagging/tagging-api-search-tagging-click-event/)** 
   should be triggered when an user clicks in a product within a search result page.

* **[Wishlist events](/api-reference/tagging-api/tagging-api-search-tagging/tagging-api-search-tagging-wishlist-event/)** 
   should be triggered when a product from a search result is added to the user wishlist after appearing in a search result. 
  
* **[Add2Cart events](/api-reference/tagging-api/tagging-api-search-tagging/tagging-api-search-tagging-add2cart-event/)** 
    should be triggered when a product is added to the user cart after appearing in a search result. 

* **[Checkout events](/api-reference/tagging-api/tagging-api-search-tagging/tagging-api-search-tagging-checkout-event/)** 
  should be triggered when any product is finally purchased after being added to the cart following a search.

  *Wishlist, add2carts & checkouts* correspond not only to actions performed directly on the search results pages, 
  but to actions from the product details pages or elsewhere after navigating from the search results page. 

