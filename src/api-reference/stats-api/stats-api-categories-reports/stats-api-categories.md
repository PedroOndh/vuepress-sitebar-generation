---
title: Categories
publish-date: 2019-07-25 00:00 am
categories: stats-api,stats-api-categories-reports
author: laram@empathy.co
order: 1
---

# Categories

## Getting started
This report calculates the top categories for the selected date range returning more relevant KPIs for each of them.

* [STEP-BY-STEP GUIDE to gather data from any report using the Empathy Stats API](/api-reference/stats-api/)

## Request
To retrieve data from this report, define the request using all the available params and filters detailed in the box. 
First, ensure you [get your token](/api-reference/stats-api/#stats-api-stepbystepguide).

**GET** `https://api.empathybroker.com/stats/v2/analysis/{Instance_ID}/TopCategories`

**Query Parameters**

| PARAMETER                                                                                                   | TYPE                  |
| ----------------------------------------------------------------------------------------------------------- | --------------------- |
| [start_date](/api-reference/stats-api/stats-api-query-parameters-glossary/#tagging-input-parameters-glossary-common) | Int (ISO 8601 format) |
| [end_date](/api-reference/stats-api/stats-api-query-parameters-glossary/#tagging-input-parameters-glossary-common)   | Int (ISO 8601 format) |
| [filters](/api-reference/stats-api/stats-api-query-parameters-glossary/#tagging-input-parameters-glossary-filters)   | list\[str]            |
| [type](/api-reference/stats-api/stats-api-query-parameters-glossary/#stats-report-specific-params)                   | int                   |
| [terms](/api-reference/stats-api/stats-api-query-parameters-glossary/#stats-report-specific-params)                  | str                   |

**Bearer Token** [Get your token](/api-reference/stats-api/#stats-api-stepbystepguide)

**Example request:** 
`https://api.empathybroker.com/stats/v2/analysis/ebdemo/TopCategories?start_date=2019-07-10&end_date=2019-07-13`

## Response
Once the request is performed, the following KPIs are retrieved shaped in _json_ format:

* **KPIs retrieved for each category**: _total_ _clicks_, _adds to wishlist, adds to cart, checkout counts and success counts._
* **Category info:** for each category also name, id, level and the corresponding breadcrumb are returned.

```json

{
    "data": [
        {
            "query_count": 0,
            "click_count": 601677,
            "wishlist_count": 0,
            "add2cart_count": 57741,
            "checkout_count": 0,
            "conversion_count": 0,
            "success_count": 580406,
            "category_name": "Woman",
            "category_id": "1030204572",
            "level": 1,
            "breadcrumb": [
                "Woman"
            ]
        },
        {
            "query_count": 0,
            "click_count": 533173,
            "wishlist_count": 0,
            "add2cart_count": 51576,
            "checkout_count": 0,
            "conversion_count": 0,
            "success_count": 524035,
            "category_name": "New",
            "category_id": "1030017536",
            "level": 2,
            "breadcrumb": [
                "Mujer",
                "Novedades"
            ]
        },
        {
            "query_count": 0,
            "click_count": 517794,
            "wishlist_count": 0,
            "add2cart_count": 50756,
            "checkout_count": 0,
            "conversion_count": 0,
            "success_count": 497856,
            "category_name": "Woman",
            "category_id": "1010141503",
            "level": 1,
            "breadcrumb": [
                "Woman"
            ]
        },
        {
            "query_count": 0,
            "click_count": 452266,
            "wishlist_count": 0,
            "add2cart_count": 48155,
            "checkout_count": 0,
            "conversion_count": 0,
            "success_count": 441655,
            "category_name": "Camisetas",
            "category_id": "1030204631",
            "level": 3,
            "breadcrumb": [
                "Woman",
                "Clothing",
                "T-shirts"
            ]
        },
        {
            "query_count": 0,
            "click_count": 441129,
            "wishlist_count": 0,
            "add2cart_count": 52980,
            "checkout_count": 0,
            "conversion_count": 0,
            "success_count": 422172,
            "category_name": "Woman",
            "category_id": "1030204567",
            "level": 1,
            "breadcrumb": [
                "Woman"
            ]
        },
        {
            "query_count": 0,
            "click_count": 434291,
            "wishlist_count": 0,
            "add2cart_count": 41446,
            "checkout_count": 0,
            "conversion_count": 0,
            "success_count": 418297,
            "category_name": "Woman",
            "category_id": "1030204549",
            "level": 1,
            "breadcrumb": [
                "Woman"
            ]
        },
        {
            "query_count": 0,
            "click_count": 351482,
            "wishlist_count": 0,
            "add2cart_count": 30704,
            "checkout_count": 0,
            "conversion_count": 0,
            "success_count": 350988,
            "category_name": "Netflix Stranger Things",
            "category_id": "1030163002",
            "level": 3,
            "breadcrumb": [
                "Herren",
                "Editorials",
                "Netflix Stranger Things"
            ]
        },
        {
            "query_count": 0,
            "click_count": 351482,
            "wishlist_count": 0,
            "add2cart_count": 30704,
            "checkout_count": 0,
            "conversion_count": 0,
            "success_count": 350988,
            "category_name": "Colección",
            "category_id": "1030164002",
            "level": 4,
            "breadcrumb": [
                "Herren",
                "Editorials",
                "Netflix Stranger Things",
                "Kollektion"
            ]
        },
        {
            "query_count": 0,
            "click_count": 347007,
            "wishlist_count": 0,
            "add2cart_count": 46694,
            "checkout_count": 0,
            "conversion_count": 0,
            "success_count": 331840,
            "category_name": "Woman",
            "category_id": "1030204565",
            "level": 1,
            "breadcrumb": [
                "Woman"
            ]
        },
        {
            "query_count": 0,
            "click_count": 341830,
            "wishlist_count": 0,
            "add2cart_count": 27626,
            "checkout_count": 0,
            "conversion_count": 0,
            "success_count": 338263,
            "category_name": "New",
            "category_id": "1030017537",
            "level": 2,
            "breadcrumb": [
                "Hombre",
                "Novedades"
            ]
        },
        {
            "query_count": 0,
            "click_count": 331770,
            "wishlist_count": 0,
            "add2cart_count": 29771,
            "checkout_count": 0,
            "conversion_count": 0,
            "success_count": 330614,
            "category_name": "Editorials",
            "category_id": "1030120529",
            "level": 2,
            "breadcrumb": [
                "Hombre",
                "Editorials"
            ]
        },
        {
            "query_count": 0,
            "click_count": 323693,
            "wishlist_count": 0,
            "add2cart_count": 32119,
            "checkout_count": 0,
            "conversion_count": 0,
            "success_count": 310896,
            "category_name": "Clothing",
            "category_id": "1010141506",
            "level": 2,
            "breadcrumb": [
                "Woman",
                "Clothing"
            ]
        },
        {
            "query_count": 0,
            "click_count": 285645,
            "wishlist_count": 0,
            "add2cart_count": 23906,
            "checkout_count": 0,
            "conversion_count": 0,
            "success_count": 276548,
            "category_name": "Mujer",
            "category_id": "1030204547",
            "level": 1,
            "breadcrumb": [
                "Mujer"
            ]
        },
        {
            "query_count": 0,
            "click_count": 283383,
            "wishlist_count": 0,
            "add2cart_count": 23922,
            "checkout_count": 0,
            "conversion_count": 0,
            "success_count": 274615,
            "category_name": "Man",
            "category_id": "1030204573",
            "level": 1,
            "breadcrumb": [
                "Hombre"
            ]
        },
        {
            "query_count": 0,
            "click_count": 246206,
            "wishlist_count": 0,
            "add2cart_count": 20342,
            "checkout_count": 0,
            "conversion_count": 0,
            "success_count": 237582,
            "category_name": "Man",
            "category_id": "1010141504",
            "level": 1,
            "breadcrumb": [
                "Hombre"
            ]
        },
        {
            "query_count": 0,
            "click_count": 243976,
            "wishlist_count": 0,
            "add2cart_count": 18857,
            "checkout_count": 0,
            "conversion_count": 0,
            "success_count": 240193,
            "category_name": "T-shirts",
            "category_id": "1030204791",
            "level": 3,
            "breadcrumb": [
                "Man",
                "Clothing",
                "T-shirts"
            ]
        },
        {
            "query_count": 0,
            "click_count": 234916,
            "wishlist_count": 0,
            "add2cart_count": 23335,
            "checkout_count": 0,
            "conversion_count": 0,
            "success_count": 227754,
            "category_name": "Man",
            "category_id": "1030204568",
            "level": 1,
            "breadcrumb": [
                "Herren"
            ]
        },
        {
            "query_count": 0,
            "click_count": 226791,
            "wishlist_count": 0,
            "add2cart_count": 23424,
            "checkout_count": 0,
            "conversion_count": 0,
            "success_count": 219278,
            "category_name": "Clothing",
            "category_id": "1030207046",
            "level": 2,
            "breadcrumb": [
                "Mujer",
                "Ropa"
            ]
        },
        {
            "query_count": 0,
            "click_count": 220287,
            "wishlist_count": 0,
            "add2cart_count": 21358,
            "checkout_count": 0,
            "conversion_count": 0,
            "success_count": 211805,
            "category_name": "Woman",
            "category_id": "1030204561",
            "level": 1,
            "breadcrumb": [
                "Woman"
            ]
        },
        {
            "query_count": 0,
            "click_count": 219881,
            "wishlist_count": 0,
            "add2cart_count": 19892,
            "checkout_count": 0,
            "conversion_count": 0,
            "success_count": 210609,
            "category_name": "Rebajas",
            "category_id": "1030207052",
            "level": 2,
            "breadcrumb": [
                "Woman",
                "Sale"
            ]
        },
        {
            "query_count": 0,
            "click_count": 206334,
            "wishlist_count": 0,
            "add2cart_count": 25930,
            "checkout_count": 0,
            "conversion_count": 0,
            "success_count": 197487,
            "category_name": "Woman",
            "category_id": "1030204569",
            "level": 1,
            "breadcrumb": [
                "Woman"
            ]
        },
        {
            "query_count": 0,
            "click_count": 205843,
            "wishlist_count": 0,
            "add2cart_count": 17386,
            "checkout_count": 0,
            "conversion_count": 0,
            "success_count": 199066,
            "category_name": "Man",
            "category_id": "1030204550",
            "level": 1,
            "breadcrumb": [
                "Hombre"
            ]
        },
        {
            "query_count": 0,
            "click_count": 203422,
            "wishlist_count": 0,
            "add2cart_count": 17936,
            "checkout_count": 0,
            "conversion_count": 0,
            "success_count": 195514,
            "category_name": "Woman",
            "category_id": "1030204553",
            "level": 1,
            "breadcrumb": [
                "Woman"
            ]
        },
        {
            "query_count": 0,
            "click_count": 201853,
            "wishlist_count": 0,
            "add2cart_count": 20597,
            "checkout_count": 0,
            "conversion_count": 0,
            "success_count": 193438,
            "category_name": "Woman",
            "category_id": "1030204563",
            "level": 1,
            "breadcrumb": [
                "Woman"
            ]
        },
        {
            "query_count": 0,
            "click_count": 179740,
            "wishlist_count": 0,
            "add2cart_count": 20756,
            "checkout_count": 0,
            "conversion_count": 0,
            "success_count": 168861,
            "category_name": "Sale",
            "category_id": "1030207115",
            "level": 2,
            "breadcrumb": [
                "Woman",
                "Sale"
            ]
        },
        {
            "query_count": 0,
            "click_count": 178562,
            "wishlist_count": 0,
            "add2cart_count": 17196,
            "checkout_count": 0,
            "conversion_count": 0,
            "success_count": 170735,
            "category_name": "Woman",
            "category_id": "1030204559",
            "level": 1,
            "breadcrumb": [
                "Woman"
            ]
        },
        {
            "query_count": 0,
            "click_count": 173340,
            "wishlist_count": 0,
            "add2cart_count": 18182,
            "checkout_count": 0,
            "conversion_count": 0,
            "success_count": 168554,
            "category_name": "Man",
            "category_id": "1030204566",
            "level": 1,
            "breadcrumb": [
                "Heren"
            ]
        },
        {
            "query_count": 0,
            "click_count": 165521,
            "wishlist_count": 0,
            "add2cart_count": 17221,
            "checkout_count": 0,
            "conversion_count": 0,
            "success_count": 158374,
            "category_name": "Woman",
            "category_id": "1030204574",
            "level": 1,
            "breadcrumb": [
                "Woman"
            ]
        },
        {
            "query_count": 0,
            "click_count": 164377,
            "wishlist_count": 0,
            "add2cart_count": 19439,
            "checkout_count": 0,
            "conversion_count": 0,
            "success_count": 156452,
            "category_name": "Trousers",
            "category_id": "1030207206",
            "level": 4,
            "breadcrumb": [
                "Woman",
                "Sale",
                "Clothing",
                "Trousers"
            ]
        },
        {
            "query_count": 0,
            "click_count": 161401,
            "wishlist_count": 0,
            "add2cart_count": 21302,
            "checkout_count": 0,
            "conversion_count": 0,
            "success_count": 156155,
            "category_name": "Clothing",
            "category_id": "1030207116",
            "level": 2,
            "breadcrumb": [
                "Woman",
                "Clothing"
            ]
        },
        {
            "query_count": 0,
            "click_count": 156626,
            "wishlist_count": 0,
            "add2cart_count": 15018,
            "checkout_count": 0,
            "conversion_count": 0,
            "success_count": 149474,
            "category_name": "Woman",
            "category_id": "1030204555",
            "level": 1,
            "breadcrumb": [
                "Woman"
            ]
        },
        {
            "query_count": 0,
            "click_count": 152867,
            "wishlist_count": 0,
            "add2cart_count": 15227,
            "checkout_count": 0,
            "conversion_count": 0,
            "success_count": 147540,
            "category_name": "Clothing",
            "category_id": "1030210596",
            "level": 2,
            "breadcrumb": [
                "Mujer",
                "Ropa"
            ]
        },
        {
            "query_count": 0,
            "click_count": 151873,
            "wishlist_count": 0,
            "add2cart_count": 14260,
            "checkout_count": 0,
            "conversion_count": 0,
            "success_count": 144956,
            "category_name": "Rebajas",
            "category_id": "1030210595",
            "level": 2,
            "breadcrumb": [
                "Woman",
                "Sale"
            ]
        },
        {
            "query_count": 0,
            "click_count": 148161,
            "wishlist_count": 0,
            "add2cart_count": 14563,
            "checkout_count": 0,
            "conversion_count": 0,
            "success_count": 140622,
            "category_name": "Woman",
            "category_id": "1030204557",
            "level": 1,
            "breadcrumb": [
                "Woman"
            ]
        },
        {
            "query_count": 0,
            "click_count": 138626,
            "wishlist_count": 0,
            "add2cart_count": 20502,
            "checkout_count": 0,
            "conversion_count": 0,
            "success_count": 134001,
            "category_name": "Clothing",
            "category_id": "1030207130",
            "level": 2,
            "breadcrumb": [
                "Damen",
                "Kleidung"
            ]
        },
        {
            "query_count": 0,
            "click_count": 137883,
            "wishlist_count": 0,
            "add2cart_count": 14332,
            "checkout_count": 0,
            "conversion_count": 0,
            "success_count": 132385,
            "category_name": "Woman",
            "category_id": "1030204552",
            "level": 1,
            "breadcrumb": [
                "Woman"
            ]
        },
        {
            "query_count": 0,
            "click_count": 137113,
            "wishlist_count": 0,
            "add2cart_count": 11876,
            "checkout_count": 0,
            "conversion_count": 0,
            "success_count": 131535,
            "category_name": "Ropa",
            "category_id": "1030207053",
            "level": 3,
            "breadcrumb": [
                "Woman",
                "Sale",
                "Clothing"
            ]
        },
        {
            "query_count": 0,
            "click_count": 136034,
            "wishlist_count": 0,
            "add2cart_count": 16852,
            "checkout_count": 0,
            "conversion_count": 0,
            "success_count": 131851,
            "category_name": "Pantalons",
            "category_id": "1030207189",
            "level": 3,
            "breadcrumb": [
                "Woman",
                "Clothing",
                "Trousers"
            ]
        },
        {
            "query_count": 0,
            "click_count": 134551,
            "wishlist_count": 0,
            "add2cart_count": 14184,
            "checkout_count": 0,
            "conversion_count": 0,
            "success_count": 131933,
            "category_name": "Manga corta",
            "category_id": "1030204633",
            "level": 4,
            "breadcrumb": [
                "Dla Niej",
                "Odzież",
                "Koszulki",
                "Krótki rękaw"
            ]
        },
        {
            "query_count": 0,
            "click_count": 129949,
            "wishlist_count": 0,
            "add2cart_count": 18714,
            "checkout_count": 0,
            "conversion_count": 0,
            "success_count": 126583,
            "category_name": "Jeans",
            "category_id": "1030204692",
            "level": 3,
            "breadcrumb": [
                "Woman",
                "Clothing",
                "Jeans"
            ]
        },
        {
            "query_count": 0,
            "click_count": 129712,
            "wishlist_count": 0,
            "add2cart_count": 16833,
            "checkout_count": 0,
            "conversion_count": 0,
            "success_count": 125696,
            "category_name": "Denim Collection",
            "category_id": "953503",
            "level": 3,
            "breadcrumb": [
                "Mujer",
                "Ropa",
                "Denim Collection"
            ]
        },
        {
            "query_count": 0,
            "click_count": 124190,
            "wishlist_count": 0,
            "add2cart_count": 14164,
            "checkout_count": 0,
            "conversion_count": 0,
            "success_count": 117061,
            "category_name": "Clothing",
            "category_id": "1030207119",
            "level": 3,
            "breadcrumb": [
                "Woman",
                "Sale",
                "Clothing"
            ]
        },
        {
            "query_count": 0,
            "click_count": 123223,
            "wishlist_count": 0,
            "add2cart_count": 11244,
            "checkout_count": 0,
            "conversion_count": 0,
            "success_count": 118004,
            "category_name": "Ropa",
            "category_id": "1030210603",
            "level": 3,
            "breadcrumb": [
                "Woman",
                "Sale",
                "Clothing"
            ]
        },
        {
            "query_count": 0,
            "click_count": 122932,
            "wishlist_count": 0,
            "add2cart_count": 9788,
            "checkout_count": 0,
            "conversion_count": 0,
            "success_count": 117157,
            "category_name": "Ropa",
            "category_id": "1010141511",
            "level": 2,
            "breadcrumb": [
                "Hombre",
                "Ropa"
            ]
        },
        {
            "query_count": 0,
            "click_count": 121729,
            "wishlist_count": 0,
            "add2cart_count": 9212,
            "checkout_count": 0,
            "conversion_count": 0,
            "success_count": 118180,
            "category_name": "Man",
            "category_id": "1030204562",
            "level": 1,
            "breadcrumb": [
                "Man"
            ]
        },
        {
            "query_count": 0,
            "click_count": 121213,
            "wishlist_count": 0,
            "add2cart_count": 15508,
            "checkout_count": 0,
            "conversion_count": 0,
            "success_count": 113308,
            "category_name": "Sale",
            "category_id": "1030207129",
            "level": 2,
            "breadcrumb": [
                "Woman",
                "Sale"
            ]
        },
        {
            "query_count": 0,
            "click_count": 118710,
            "wishlist_count": 0,
            "add2cart_count": 8840,
            "checkout_count": 0,
            "conversion_count": 0,
            "success_count": 114381,
            "category_name": "Hombre",
            "category_id": "1030204548",
            "level": 1,
            "breadcrumb": [
                "Hombre"
            ]
        },
        {
            "query_count": 0,
            "click_count": 116543,
            "wishlist_count": 0,
            "add2cart_count": 8316,
            "checkout_count": 0,
            "conversion_count": 0,
            "success_count": 113244,
            "category_name": "Man",
            "category_id": "1030204554",
            "level": 1,
            "breadcrumb": [
                "Erkek"
            ]
        },
        {
            "query_count": 0,
            "click_count": 115941,
            "wishlist_count": 0,
            "add2cart_count": 9177,
            "checkout_count": 0,
            "conversion_count": 0,
            "success_count": 112949,
            "category_name": "Man",
            "category_id": "1030204564",
            "level": 1,
            "breadcrumb": [
                "Dla niego"
            ]
        },
        {
            "query_count": 0,
            "click_count": 115266,
            "wishlist_count": 0,
            "add2cart_count": 10507,
            "checkout_count": 0,
            "conversion_count": 0,
            "success_count": 111048,
            "category_name": "Abrigos y Cazadoras",
            "category_id": "1030204597",
            "level": 4,
            "breadcrumb": [
                "Woman",
                "Sale",
                "Clothing",
                "Coats and jackets"
            ]
        }
    ],
    "params": {
        "site_id": "ebdemo",
        "start_date": 1562716800000,
        "end_date": 1562976000000,
        "filters": [],
        "offset": 0,
        "rows": 50,
        "evol": false,
        "terms": null,
        "levels": [],
        "parent_ids": [],
        "success_sort": false,
        "browsing": false
    }
}


```

