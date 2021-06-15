---
title: Tag Manager Integration
publish-date: 2019-06-06 00:00 am
categories: tagging-api
author: laram@empathy.co
order: 1
---

# Tag Manager Integration

## What is about
Empathy tagging is integrated with the tag managers shown, if you're using other tag manager, please select [other tag managers](#tagging-api-addon-other-tag-manager) option.
 
 <div style="display: flex; align-items: center; flex-wrap: wrap">
     <a href="#tagging-api-addon-tag-manager-google-tag-manager" style="width: 240px; flex-shrink: 0;">
         <figure>
          <img src="/docs-empathy/assets/media/docs__gtm-logo.png" alt="gtm-logo">
         </figure>
     </a>
     <a href="#tagging-api-addon-tag-manager-tealium-iq" style="width: 240px; flex-shrink: 0;">
         <figure>
          <img src="/docs-empathy/assets/media/docs__tealium-iq-logo.png" alt="tealium-logo">
         </figure>
     </a>
     <a href="#tagging-api-addon-other-tag-manager" style="width: 240px; flex-shrink: 0;">
         <figure>
          <img src="/docs-empathy/assets/media/docs__tag-manager-icon.png" alt="tag-manger-logo">
         </figure>
     </a>
 </div>
 

## Google Tag Manager Instrumentation
Empathy has its own Tag Templates in GTM. Just find them in [Tag Template gallery](https://tagmanager.google.com/gallery/#/?filter=empathy) and add start using them from your marketplace!

* **Empathy.co Search Query Template:**  Fire this tag each time a [query](/api-reference/tagging-api/tagging-api-search-tagging/tagging-api-search-tagging-query-event) is made.
* **Empathy.co Search Interactions Template:**  Fire one specific interactions tag once each of interaction events ([click](/api-reference/tagging-api/tagging-api-search-tagging/tagging-api-search-tagging-click-event),  [wishlist](/api-reference/tagging-api/tagging-api-search-tagging/tagging-api-search-tagging-wishlist-event),  [add2cart](/api-reference/tagging-api/tagging-api-search-tagging/tagging-api-search-tagging-add2cart-event) and  [checkout](/api-reference/tagging-api/tagging-api-search-tagging/tagging-api-search-tagging-checkout-event)) happens. Use the field "Action" to distinguish among different interactions inside the tag.
     

<video controls poster=""><source src="/docs-empathy/assets/media/gtmempathytemplate1_1.mp4" type="video/mp4"></video>

## Tealium iQ Instrumentation

Coming soon

## Other Tag Manager Instrumentation

It is possible to integrate the tagging into any other tag manager just by wrapping  one of the available [tagging instrumentation methods](/api-reference/tagging-api#tagging-api-search-tagging-instrumentation-methods) (**REST API**  or **Empathy JS Library**) as custom tags:
* **CUSTOM TAG 0:** If you are using the Javascript libary, include the custom tags to do the  [proper initialisation](/api-reference/tagging-api/#tagging-steps-step3-tagging-initisation-code).
* **CUSTOM TAG 1:** Should wrap a [query](/api-reference/tagging-api/tagging-api-search-tagging/tagging-api-search-tagging-query-event) event.
* **CUSTOM TAG 2 onwards:**  Should wrap  [click](/api-reference/tagging-api/tagging-api-search-tagging/tagging-api-search-tagging-click-event/),  [wishlist](/api-reference/tagging-api/tagging-api-search-tagging/tagging-api-search-tagging-wishlist-event/), [add2cart](/api-reference/tagging-api/tagging-api-search-tagging/tagging-api-search-tagging-add2cart-event/) &  [checkout](/api-reference/tagging-api/tagging-api-search-tagging/tagging-api-search-tagging-checkout-event/) events.

