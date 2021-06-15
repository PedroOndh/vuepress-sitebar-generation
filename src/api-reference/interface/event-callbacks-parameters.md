---
title: Event callbacks parameters
publish-date: 2019-12-16 00:00 am
categories: interface
author: ivant@empathy.co
---

# Event callbacks parameters

## Event callbacks parameters
This is the list of parameters that are sent in the **data** object to
each callback function in the **eventCallbacks** object:


| Parameter         |Description                                                  | query, filter, clearFilters, resultsEnd, sort, columnChange, open, close | click | add2cart | checkout |
| :----------------: | :----------------------------------------------------------- | :-----------------------------------------------------------: | :----: |:-------: | :-------: |
| **catalog**       | Catalog identifier provided to X in the snippet.             | X                                                            | X     | X        | X        |
| **context**       | Page where the **add2cart** event was triggered. The possible values for this parameter are:`'SRP'`: search results page`'PDP'`: product details pageThis parameter is typically used as a discriminator to determine whether to add a product to the cart when the add to cart button is present in the search results page.|                                                              |       | X        |          |
| **contextualize** | Whether the query has been contextualized.                   | X                                                            | X     | X        | X        |
| **filtered**      | Whether the query has been filtered.                         | X                                                            | X     | X        | X        |
| **follow**        | Whether the user has been redirected to the product page after tracking the event. |                                                              | X     | X        | X        |
| **lang**          | Language identifier provided to X in the snippet.            | X                                                            | X     | X        | X        |
| **origin**        | Origin of the query that originated the event. The possible values for this parameter are:`'default', 'empathize_category', 'empathize_term', 'history', 'next_query', 'next_query_grid', 'linked', 'partial', 'related_tag', 'spellcheck', 'no_results', 'empty_search', 'empathize_recommendations'` | X                                                            | X     | X        | X        |
| **page**          | Page number where the event was originated.In case of the **query** event, it means the page number that was loaded (1 for the initial query; 2, 3, 4... for the subsequent pages as the user scrolls down or paginates).For product-related events, it means the page number of the result that triggered the event. | X                                                            | X     | X        | X        |
| **position**      | Specific grid position (starting at 1) of the result that triggered the event. |                                                              | X     | X        | X        |
| **productId**     | Unique identifier of the product in the feed.                |                                                              | X     | X        | X        |
| **q**             | Query that originated the event.                             | X                                                            | X     | X        | X        |
| **scope**         | Scope provided to X in the snippet.                          | X                                                            | X     | X        | X        |
| **session**       | Unique identifier of the user session (only present if **consent** was set to **true** in the configuration). | X                                                            | X     | X        | X        |
| **spellcheck**    | Whether spellcheck has been applied to the query.            | X                                                            | X     | X        | X        |
| **store**         | Store provided to X in the snippet.                          | X                                                            | X     | X        | X        |
| **title**         | Name of the result that triggered the event.                 |                                                              | X     | X        | X        |
| **totalHits**     | Number of results matching the query.                        | X                                                            |       |          |          |
| **url**           | URL of the result that triggered the event.                  |                                                              | X     | X        | X        |
| **user**          | Unique identifier of the user (only present if **consent** was set to **true** in the configuration). | X                                                            | X     | X        | X        |
| **user_type**     | User type (only present if **consent** was set to **true** in the configuration).The possible values for this parameter are:`'new', 'recurrent'` | X                                                            | X     | X        | X        |

