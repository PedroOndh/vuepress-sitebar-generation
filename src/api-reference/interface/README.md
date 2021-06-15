---
title: Interface X
publish-date: 2019-12-16 00:00 am
categories: undefined
author: ivant@empathy.co
order: 3
---

# Interface X

## Overview
This guide is designed to help you integrate your X instance autonomously once it has been fully instrumented.

It provides detail on all the aspects of the integration, including initialization, accepted configurations, analytics and custom code hooking.

## Step-by-step guide
### Loading the X JavaScript resource
The first step for integrating X is loading the X JavaScript resource.

This resource contains a webpack bundle with all the logic, templates, styles and dependencies.

**{INSTANCE}** is a unique identifier provided by Empathy.

Please note that X and Search are totally independent, which means that staging resources for X will still consume production endpoints by default. We will see how to switch API endpoints later on.

#### X resources are served by a CDN through the following URLs
X resources are served by a CDN through the following URLs
Environment: **LIVE**

`https://assets.empathybroker.com/empathyx/`**`{INSTANCE}`**`/app.js`

Environment: **STAGING**

`https://preassets.empathybroker.com/empathyx/`**`{INSTANCE}`**`/app.js`

The recommended way to load the X JavaScript resource is by using the following tag in your HTML structure:

`<script defer src="https://assets.empathybroker.com/empathyx/{INSTANCE}/app.js"></script>`

The defer attribute helps to keep things blazing fast by loading the resource asynchronously and without blocking the page load. Once the script is ready, X will automatically call the global initEmpathyX function (see the Initializing X section).
### Initializing X
The second step for integrating X is setting up the initEmpathyX callback function. Having a callback function allows X to be loaded and initialized asynchronously.

Please note that the **initEmpathyX** function should be defined and available by the time the X resource finishes loading. Also, it is not recommended to call this function manually.

**Both the script and the initialization snippet must be present in the HTML of all pages where search is available**.

Inside of the initEmpathyX function, the global EmpathyX object is already available and X is ready to be initialized. To do that, you can use the init function:
```javascript
function initEmpathyX() {
  EmpathyX.init({
    instance: '{API_INSTANCE}',
    lang: 'en',
    scope: 'mobile',
    currency: 'EUR',
    consent: true
  });
}
```

