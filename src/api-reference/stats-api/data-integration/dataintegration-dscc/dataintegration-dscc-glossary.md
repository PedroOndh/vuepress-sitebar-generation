---
title: Building Blocks Glossary
publish-date: 2020-02-12 00:00 am
categories: stats-api,data-integration,dataintegration-dscc
author: danielgg@empathy.co
order: 1
---

# Building Blocks Glossary

## DailyList


| Name                   | Type      | Description                                                                  |
| ---------------------- | --------- | ---------------------------------------------------------------------------- |
| Date Time              | Dimension | Dimension to set a period of time where data will show.                      |
| Total Queries          | Metric    | Total quantity of performed search queries.                                  |
| Click-Through (%)      | Metric    | User percentage by clicks on a product in the search results page.           |
| AddToCart-Through (%)  | Metric    | Products percentage that are added to the user cart from the search results. |
| WishList-Through (%)   | Metric    | Products that are added to the user wishlist from the search results.        |
| Checkout-Through (%)   | Metric    | User percentage that confirmed the purchase.                                 |
| Findability (%)        | Metric    | Success rate porcentage by positioning the search product on the first page. |
| No-Results Queries (%) | Metric    | No success search queries percentage.                                        |

## Term Success


| Name        | Type      | Description                                                                         |
| ----------- | --------- | ----------------------------------------------------------------------------------- |
| Query       | Dimension | Successful searches terms performed.                                                |
| Quantity    | Metric    | Total Queries performed by term.                                                    |
| Check out   | Metric    | Number of users that confirmed the purchase by term.                                |
| Clicks      | Metric    | Number of clicks on a product in the search results page by term.                   |
| Add to Cart | Metric    | Number of products that are added to the user cart from the search results by term. |

## Term Success No Results


| Name                | Type      | Description                              |
| ------------------- | --------- | ---------------------------------------- |
| No-Results Queries  | Dimension | Not successful searches terms performed. |
| No-Results quantity | Metric    | Total Queries performed by term.         |

## Filter


| Name   | Type      | Description                                     |
| ------ | --------- | ----------------------------------------------- |
| Store  | Dimension | Filter Dimension search bases on user ID Store. |
| Scope  | Dimension | Filter Dimension search bases on user device.   |
| Lang   | Dimension | Filter Dimension search bases on user lang.     |
| Portal | Dimension | Filter dimension search bases on the track.     |

