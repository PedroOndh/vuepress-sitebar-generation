---
title: Related Click
publish-date: 2019-07-25 00:00 am
categories: stats-api,stats-api-related-reports
author: laram@empathy.co
order: 1
---

# Related Click

## Getting started
This report retrieves relevant information about all the clicks for a given query for the given date range.

* [STEP-BY-STEP GUIDE to gather data from any report using the Empathy Stats API](/api-reference/stats-api/)

## Request
To retrieve data from this report, define the request using all the available params and filters detailed in the box. 
First, ensure you [get your token](/api-reference/stats-api/#stats-api-stepbystepguide).

**GET** `https://api.empathybroker.com/stats/v2/analysis/{Instance_ID}/RelatedClick`

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
`https://api.empathybroker.com/stats/v2/analysis/ebdemo/RelatedClick?start_date=2019-07-10&end_date=2019-07-13&terms=camiseta`

## Response
Once the request is performed, the following data is retrieved shaped in _json_ format:

* **KPIs retrieved for each product clicked**: _title_, _product_id_, number of clicks and percentage of clicks of this product among all_._

```json

{
    "data": {
        "products": [
            {
                "terms": "camiseta",
                "title": "Camiseta oversize",
                "url": "501222534",
                "product_id": "501222534-250",
                "related_count": 195,
                "related_count_pct": 4.91,
                "evol": "NAN"
            },
            {
                "terms": "camiseta",
                "title": "Camiseta negra",
                "url": "501222422",
                "product_id": "501222422-800",
                "related_count": 57,
                "related_count_pct": 1.43,
                "evol": "NAN"
            },
            {
                "terms": "camiseta",
                "title": "Camiseta Villanas Disney",
                "url": "501598384",
                "product_id": "501598384-833",
                "related_count": 48,
                "related_count_pct": 1.21,
                "evol": "NAN"
            },
            {
                "terms": "camiseta",
                "title": "Camiseta cropped básica canalé",
                "url": "501476511",
                "product_id": "501476511-640",
                "related_count": 43,
                "related_count_pct": 1.08,
                "evol": "NAN"
            },
            {
                "terms": "camiseta",
                "title": "Camiseta print fotográfico personajes",
                "url": "501215814",
                "product_id": "501215814-800",
                "related_count": 37,
                "related_count_pct": 0.93,
                "evol": "NAN"
            },
            {
                "terms": "camiseta",
                "title": "Camiseta Eleven Max",
                "url": "501630125",
                "product_id": "501630125-687",
                "related_count": 37,
                "related_count_pct": 0.93,
                "evol": "NAN"
            },
            {
                "terms": "camiseta",
                "title": "Camiseta cropped",
                "url": "501222364",
                "product_id": "501222364-805",
                "related_count": 34,
                "related_count_pct": 0.86,
                "evol": "NAN"
            },
            {
                "terms": "camiseta",
                "title": "Camiseta manga larga",
                "url": "501223018",
                "product_id": "501223018-805",
                "related_count": 34,
                "related_count_pct": 0.86,
                "evol": "NAN"
            },
            {
                "terms": "camiseta",
                "title": "Camiseta tie-dye psicodelia",
                "url": "501548086",
                "product_id": "501548086-015",
                "related_count": 32,
                "related_count_pct": 0.81,
                "evol": "NAN"
            },
            {
                "terms": "camiseta",
                "title": "Camiseta Starcourt",
                "url": "501630138",
                "product_id": "501630138-807",
                "related_count": 32,
                "related_count_pct": 0.81,
                "evol": "NAN"
            },
            {
                "terms": "camiseta",
                "title": "Camiseta rayas parche",
                "url": "501570200",
                "product_id": "501570200-300",
                "related_count": 31,
                "related_count_pct": 0.78,
                "evol": "NAN"
            },
            {
                "terms": "camiseta",
                "title": "Camiseta Kodak rayas multicolor",
                "url": "501274655",
                "product_id": "501274655-800",
                "related_count": 30,
                "related_count_pct": 0.75,
                "evol": "NAN"
            },
            {
                "terms": "camiseta",
                "title": "Camiseta blanca rayas colores",
                "url": "501643270",
                "product_id": "501643270-250",
                "related_count": 28,
                "related_count_pct": 0.7,
                "evol": "NAN"
            },
            {
                "terms": "camiseta",
                "title": "Camiseta básica cropped costura",
                "url": "501550365",
                "product_id": "501550365-512",
                "related_count": 28,
                "related_count_pct": 0.7,
                "evol": "NAN"
            },
            {
                "terms": "camiseta",
                "title": "Camiseta Ramones logo y dibujo",
                "url": "501351176",
                "product_id": "501351176-250",
                "related_count": 26,
                "related_count_pct": 0.65,
                "evol": "NAN"
            },
            {
                "terms": "camiseta",
                "title": "Camiseta texto vuelta manga",
                "url": "501553374",
                "product_id": "501553374-800",
                "related_count": 25,
                "related_count_pct": 0.63,
                "evol": "NAN"
            },
            {
                "terms": "camiseta",
                "title": "Camiseta Coyote Correcaminos rosa",
                "url": "501570146",
                "product_id": "501570146-620",
                "related_count": 25,
                "related_count_pct": 0.63,
                "evol": "NAN"
            },
            {
                "terms": "camiseta",
                "title": "Top bandeau animal print",
                "url": "501220170",
                "product_id": "501220170-051",
                "related_count": 24,
                "related_count_pct": 0.6,
                "evol": "NAN"
            },
            {
                "terms": "camiseta",
                "title": "Camiseta logo neón",
                "url": "501633090",
                "product_id": "501633090-800",
                "related_count": 24,
                "related_count_pct": 0.6,
                "evol": "NAN"
            },
            {
                "terms": "camiseta",
                "title": "Camiseta básica texto delantero",
                "url": "501552545",
                "product_id": "501552545-064",
                "related_count": 24,
                "related_count_pct": 0.6,
                "evol": "NAN"
            },
            {
                "terms": "camiseta",
                "title": "Camiseta básica cropped costura",
                "url": "501550365",
                "product_id": "501550365-805",
                "related_count": 24,
                "related_count_pct": 0.6,
                "evol": "NAN"
            },
            {
                "terms": "camiseta",
                "title": "Camiseta personajes",
                "url": "501630115",
                "product_id": "501630115-805",
                "related_count": 24,
                "related_count_pct": 0.6,
                "evol": "NAN"
            },
            {
                "terms": "camiseta",
                "title": "Camiseta Mickey Mouse Disney",
                "url": "501547294",
                "product_id": "501547294-250",
                "related_count": 23,
                "related_count_pct": 0.58,
                "evol": "NAN"
            },
            {
                "terms": "camiseta",
                "title": "Camiseta La Bella durmiente",
                "url": "501598403",
                "product_id": "501598403-805",
                "related_count": 23,
                "related_count_pct": 0.58,
                "evol": "NAN"
            },
            {
                "terms": "camiseta",
                "title": "Camiseta calavera all over",
                "url": "501372572",
                "product_id": "501372572-250",
                "related_count": 23,
                "related_count_pct": 0.58,
                "evol": "NAN"
            },
            {
                "terms": "camiseta",
                "title": "Camiseta rayas verticales azul",
                "url": "501627114",
                "product_id": "501627114-305",
                "related_count": 23,
                "related_count_pct": 0.58,
                "evol": "NAN"
            },
            {
                "terms": "camiseta",
                "title": "Camiseta Las tres Gracias",
                "url": "501546436",
                "product_id": "501546436-250",
                "related_count": 23,
                "related_count_pct": 0.58,
                "evol": "NAN"
            },
            {
                "terms": "camiseta",
                "title": "Camiseta Minnie Mouse grande",
                "url": "501547254",
                "product_id": "501547254-833",
                "related_count": 22,
                "related_count_pct": 0.55,
                "evol": "NAN"
            },
            {
                "terms": "camiseta",
                "title": "Camiseta rayas verticales mostaza",
                "url": "501627121",
                "product_id": "501627121-060",
                "related_count": 22,
                "related_count_pct": 0.55,
                "evol": "NAN"
            },
            {
                "terms": "camiseta",
                "title": "Camiseta con personajes en bici",
                "url": "501215862",
                "product_id": "501215862-250",
                "related_count": 22,
                "related_count_pct": 0.55,
                "evol": "NAN"
            },
            {
                "terms": "camiseta",
                "title": "Playera genio",
                "url": "501545708",
                "product_id": "501545708-833",
                "related_count": 21,
                "related_count_pct": 0.53,
                "evol": "NAN"
            },
            {
                "terms": "camiseta",
                "title": "Playera manzana",
                "url": "501551191",
                "product_id": "501551191-250",
                "related_count": 21,
                "related_count_pct": 0.53,
                "evol": "NAN"
            },
            {
                "terms": "camiseta",
                "title": "Camiseta foto",
                "url": "501219080",
                "product_id": "501219080-805",
                "related_count": 20,
                "related_count_pct": 0.5,
                "evol": "NAN"
            },
            {
                "terms": "camiseta",
                "title": "Camiseta texto",
                "url": "501550874",
                "product_id": "501550874-250",
                "related_count": 20,
                "related_count_pct": 0.5,
                "evol": "NAN"
            },
            {
                "terms": "camiseta",
                "title": "Camiseta rejilla",
                "url": "501550488",
                "product_id": "501550488-712",
                "related_count": 20,
                "related_count_pct": 0.5,
                "evol": "NAN"
            },
            {
                "terms": "camiseta",
                "title": "Camiseta boda",
                "url": "501549495",
                "product_id": "501549495-250",
                "related_count": 20,
                "related_count_pct": 0.5,
                "evol": "NAN"
            },
            {
                "terms": "camiseta",
                "title": "Camiseta tirantes anchos",
                "url": "501548604",
                "product_id": "501548604-805",
                "related_count": 20,
                "related_count_pct": 0.5,
                "evol": "NAN"
            },
            {
                "terms": "camiseta",
                "title": "Camiseta tie-dye texto",
                "url": "501366043",
                "product_id": "501366043-800",
                "related_count": 20,
                "related_count_pct": 0.5,
                "evol": "NAN"
            },
            {
                "terms": "camiseta",
                "title": "Camiseta negra",
                "url": "501357157",
                "product_id": "501357157-800",
                "related_count": 19,
                "related_count_pct": 0.48,
                "evol": "NAN"
            },
            {
                "terms": "camiseta",
                "title": "Camiseta  Boys",
                "url": "501218930",
                "product_id": "501218930-251",
                "related_count": 19,
                "related_count_pct": 0.48,
                "evol": "NAN"
            },
            {
                "terms": "camiseta",
                "title": "Camiseta coral París",
                "url": "501579242",
                "product_id": "501579242-649",
                "related_count": 19,
                "related_count_pct": 0.48,
                "evol": "NAN"
            },
            {
                "terms": "camiseta",
                "title": "Camiseta tie-dye",
                "url": "501400441",
                "product_id": "501400441-805",
                "related_count": 19,
                "related_count_pct": 0.48,
                "evol": "NAN"
            },
            {
                "terms": "camiseta",
                "title": "Camiseta texto vuelta manga",
                "url": "501553374",
                "product_id": "501553374-061",
                "related_count": 19,
                "related_count_pct": 0.48,
                "evol": "NAN"
            },
            {
                "terms": "camiseta",
                "title": "Camiseta bordado 'We want it''",
                "url": "501220821",
                "product_id": "501220821-529",
                "related_count": 18,
                "related_count_pct": 0.45,
                "evol": "NAN"
            },
            {
                "terms": "camiseta",
                "title": "Camiseta Urban Army blanco roto",
                "url": "501413145",
                "product_id": "501413145-251",
                "related_count": 18,
                "related_count_pct": 0.45,
                "evol": "NAN"
            },
            {
                "terms": "camiseta",
                "title": "Camiseta print pecho colores",
                "url": "501539992",
                "product_id": "501539992-500",
                "related_count": 18,
                "related_count_pct": 0.45,
                "evol": "NAN"
            },
            {
                "terms": "camiseta",
                "title": "Camiseta blanca texto animal print",
                "url": "501220828",
                "product_id": "501220828-805",
                "related_count": 18,
                "related_count_pct": 0.45,
                "evol": "NAN"
            },
            {
                "terms": "camiseta",
                "title": "Camiseta estampada rayas",
                "url": "501555897",
                "product_id": "501555897-104",
                "related_count": 17,
                "related_count_pct": 0.43,
                "evol": "NAN"
            },
            {
                "terms": "camiseta",
                "title": "Camiseta manga corta básica",
                "url": "501546590",
                "product_id": "501546590-250",
                "related_count": 17,
                "related_count_pct": 0.43,
                "evol": "NAN"
            },
            {
                "terms": "camiseta",
                "title": "Camiseta rib paneles",
                "url": "501549089",
                "product_id": "501549089-805",
                "related_count": 17,
                "related_count_pct": 0.43,
                "evol": "NAN"
            }
        ],
        "count": 629,
        "total_related": 3974
    },
    "params": {
        "site_id": "ebdemo",
        "start_date": 1562716800000,
        "end_date": 1562976000000,
        "filters": [],
        "offset": 0,
        "rows": 50,
        "evol": false,
        "terms": "camiseta",
        "terms_hash": 3056641706526030737
    }
}

```

