---
title: Browse Tagging
publish-date: 2019-06-06 00:00 am
categories: tagging-api
author: laram@empathy.co
order: 3
---

# Browse Tagging

## What is about
The purpose of the browse tagging API is to track the user interactions in the product category pages,  ie. when using the site main navigation menus.       

This page collects the different events that have to be tracked with links to the pages with detailed description  and instrumentation details. 

## Events to track
* **[Category events](tagging-api-browse-tagging-category-event/):**  should be triggered when an user navigates to a category page using the site navigation menus.
* **[Product events](tagging-api-browse-tagging-product-event/):**  should be triggered when a product is selected for display (ie. cliked) within a category page.
* **[Add2Cart events](tagging-api-browse-tagging-add2cart-event/):**  should be triggered when a product is added to the cart during navigation (either directly form a shortcut in the  category view or from a product detail page).
* **[Checkout](tagging-api-browse-tagging-checkout-event/):**  should be triggered after the purchase of a product that was added to the cart from a category page.

*Add2carts & checkouts* correspond not only to actions performed directly on the category pages, 
  but to actions from the product details pages or elsewhere after navigating from a category page. 

