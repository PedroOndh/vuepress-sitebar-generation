---
title: Integrating Add to Cart and Checkout
publish-date: 2019-12-16 00:00 am
categories: interface
author: ivant@empathy.co
---

# Integrating Add to Cart and Checkout

## Identifying a product page and integrating add2Cart and checkout
EmpathyX public API offers ways to identify a page as a product page and facilitates tracking of add2Cart and checkout.

**For this integration to work properly, it is mandatory that the landing on the PDP page comes from an EmpathyX search. If we visit the PDP page directly without searching for or clicking on any product in EmpathyX, this add2cart logic will not work because the action of clicking on a result causes the item to be stored in local storage (to be used later).**

| Method                       | Parameter                       | Description                                                                                                                                                                                                                                                                                                                                                                                             |
| ---------------------------- | ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| productPage                  | productId: string               | This function must be called after initializing EmpathyX in a product page, passing the current product id as parameter. Please note that the **productId** must be an existing field in the feed and should be specified beforehand to our team. **This method gets the result from the localStorage and moves it to the sessionStorage. The best practice is launching this call when the PDP load.** |
| add2CartOnProductPageClicked |                                 | This function should be hooked into the add2cart's button onclick handler and it doesn't need any parameter. **This method gets the result from the sessionStorage and launch a tagging request in order to track de add2cart event.**                                                                                                                                                                  |
| checkout                     | productsIds: string / string\[] | This function should be hooked into the checkout's button onclick handler. It expects the checkout/baskets product id/list of products ids.                                                                                                                                                                                                                                                             |

### Identifying a product page
In order to allow EmpathyX to identify the current page as a product page, our public API has a productPage function that only requires a string parameter (the product id that the page belongs to).

Please note that the productId must be an existing field in the feed and should be specified beforehand to our team.

```javascript
function initEmpathyX() {
  EmpathyX.init({
    instance: '{API_INSTANCE}',
    lang: 'en',
    scope: 'mobile',
    currency: 'EUR',
    consent: false
  });
  EmpathyX.productPage('{PRODUCT_ID}');
}
```
### Integrating add2Cart
```javascript
// HTML approach
<button class="add2Cart" onclick="EmpathyX.addToCartOnProductPageClicked()"/>
// JS addEventListener approach

<script>  document.querySelector('{ADD_TO_CART_SELECTOR}').addEventListener('click', function() {
        EmpathyX.addToCartOnProductPageClicked();
    });
</script>
```

Notice that add2cart event has to be fired as many times as product is added to cart and related with the quantity of products added to cart. (i.e if quantity == 2, the event has to be fired twice)
### Integrating checkout
```javascript
<script>
document.querySelector('<checkout>').addEventListener('click', function() {
    // Get the product ids from your basket/checkout in any manner (your custom implementation)
    var productsIds = getCheckoutProductsIds();
    EmpathyX.checkout(productsIds);
});
</script>
```
Notice that product's quantity has to be considered when creating the productsIds array  (i.e if quantity == 2, the productId has to be added twice to the productsIds array)

