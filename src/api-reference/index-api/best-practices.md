---
title: How to structure your catalogue (Feed)
publish-date: 2020-06-10 16:39 pm
categories: index-api
author: pedroo@empathy.co
---

# How to structure your catalogue (Feed)

## What is this about?
**Your catalogue is very important to us and we want to make the most of it!**

Before sending a catalogue, with the data of all the products and associated behaviour of these, a series of steps should be important to take into account so that Empathy can recognize it.

## Format
First, the feed files must be sent in **XML/Json** format or **Zip** containing them.

Encoding of the file should be **“utf-8”**

## Feed types
There can be two types:

* Catalog (complete feed):

  * One with all languages → must have a field language inside
  * One per language
* Deltas: types:

  * Update data (replace invalid data by new ones)
  * Delete data.
  * Insert data.

## Required fields
There are some *minimum required fields* needed to be valid:

* **ID: identifier of each product:** Must be unique
* **Name:** String of the name of a product (should have sense)
* **Image:**

  **\-** Check url (should not be broken or partial)

  \- Sizes of them
* **Product url:** Check url (should not be broken or partial)
* **Price:** Number format
* **Category:** Must follow a hierarchy (see example below)
* **Language**, can be:

  \- One feed for one language

  \- One feed with all the languages: the content MUST have a field language

**NOTE: None of them should be empty.**

## Desired fields
And some desired fields would be also great to be included:

* **Category id:** A unique value for the category
* **Description:** Must be specific for the product
* **Sale price:** Number format
* **Color:**

  **\-** Css value format

  \- Common name (blue instead of aquamarina)
* **Aditional image**
* **Brand**

## Let us see an example of this in xml
![](https://searchbroker.atlassian.net/wiki/download/thumbnails/1561231361/Screenshot%202019-09-27%20at%2014.48.12.png?version=1&modificationDate=1569588511408&cacheVersion=1&api=v2&width=939&height=400)

## Example in JSON format

```json
[
    {
        "id_product": "119040",
        "id_manufacturer": "323",
        "reference": "119040-0",
        "name": "The Mandalorian t-shirt Star Wars retro",
        "link": "https://www.customer.com/the-mandalorian-t-shirt-star-wars-retro.html",
        "includes": "",
        "description": "T-shirt with the mandalorian symbol, so you can show the power of force",
        "brand": "Disney",
        "image": "https://www.customer.com/media/i/img_397.jpg",
        "thumb": "https://www.customer.com/media/i/cache/image/240x240/q3df78eab93725d0gs685fb8d27136e9p/i/m/img_397.jpg",
        "visualizations": "0",
        "conversion_rate": "0",
        "sales_period": "0.000",
        "sales_total": "0",
        "available_date": "",
        "stock": 0,
        "colour": "grey",
        "discount_type": "",
        "tematicas": [
            {
                "id": "370",
                "name": "Star Wars"
            },
            {
                "id": "1968",
                "name": "The Mandalorian"
            }
        ],
        "category": [
            {
                "id": "292",
                "name": "Ropa"
            },
            {
                "id": "293",
                "name": "T-shirts & Shirts"
            },
            {
                "id": "358",
                "name": "Merchandising"
            },
            {
                "id": "446",
                "name": "Fashion"
            }
        ],
        "price": 19.99,
        "price_discounted": 16.99,
        "skus": [
            {
                "id_product_attribute": "0934751",
                "reference": "119040-119234",
                "visualizations": null,
                "conversion_rate": "0.0000",
                "sales_period": "0",
                "sales_total": null,
                "available_date": "",
                "size": "S",
                "stock": "0"
            }
        ]
    }
]
```

## When is a feed not valid?
* **Incorrect format:** tags to close, missing commas....
* **Incorrect codification:** of characters inside feeds



If these instructions are followed it will be much easier to start working with a proper feed. :)

