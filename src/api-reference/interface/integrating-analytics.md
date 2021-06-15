---
title: Integrating Analytics Tools
publish-date: 2019-12-16 00:00 am
categories: interface
author: ivant@empathy.co
---

# Integrating Analytics Tools

## Integrating Analytics Tools
There are times when you as a user might be returning from a product page to the search. Or opening the URL your best friend just shared with you. Or just reloading the page after your laptop ran out of battery power. In all those situations, X needs to be able to store and recreate its previous state. And to do so, it uses the URL query string.

In order to make search as fast and interactive as possible, X does not refresh the page when it modifies the query string. Looking at it from an analytics perspective, this means X will not trigger page view events in platforms that depend on page reload (such as Google Analytics).

If that happens, all those valuable search insights will be lost. What can we do then?

Fortunately, this loss is easy to prevent by using the eventCallbacks object, which gives you a lot of control over how and when you wish to track your data.

```javascript
eventCallbacks: {
  query: function(data) {
    // Filter out queries that were loaded from the URL, such as page reloads
    // or going back from product page (those are automatically tracked by GA)
    if (data.origin !== 'linked') {
    // Push the page view event manually in any other situation
    window.dataLayer.push({...});
    }
  }
}
```
In the example above, we can see one of the most typical approaches:

1. First, we define a custom callback function bound to the query event.

2. Inside of that function, we perform a basic check to filter out all
those situations that trigger a page reload (those are automatically
tracked by GA).

3. Once we have filtered out the undesired query events (which could
contain additional checks if necessary), we manually push the page view
event.
* The specific syntax for pushing the event may vary depending on the platform and its implementation.

