---
title: MVT
publish-date: 2019-09-18 00:00 am
categories: play-api
author: jorgey@empathy.co
order: 6
---

# MVT

## Getting started
MVT (Multi Variate Testing) is a tool within the Empathy Playboard to help testing different search configurations and analyzing key performance metrics across them. 

You can find the MVT tool in your Empathy Playboard

1. Access EmpathySearch at your production environment Empathy Playboard: <https://playboard.empathybroker.com/login> 
2. Click the MVT button on the left-hand menu.

## Define an MVT test
**Access to the MVT creation tool** 

1. Within the Empathy Playboard, access MVT by clicking its button in the menu.
2. In the top-right corner, click the “New MVT” button.

![](/docs-empathy/assets/media/mvt-1.png)

 **Fill out the required information for the new test**

* **Name:** give your test a name to help you find it later.
* **Description:** enter a description for your test to help you find it later.
* **Type:** choose the kind of test you want to run  (just category equalize for now).
* **Category:**  category equalize tests a apply to a given category within the site - select it here.
* **Goal:** set the metric that you want to test for improvements (Findability, CTR, Add to Cart or Checkout).
* **Confidence level:** minimal statistical significance to reject the null hypothesis (ie. that both configs produce the same result). Higher values are better,  in the sense that they reduce the likelihood of a false positive, but for the same effect require larger samples to produce a positive result. 99% is recommended.
* **Total test traffic:** traffic split or amount of users that will take part in the test. It’s a number from 0% (no really a test…) up to 100% (all traffic is subjected to the test).  If the value is set below 100%, users that fall outside the test should just see the default configuration and their interactions will not count towards the results.

![](/docs-empathy/assets/media/mvt-2.png)

**Fill out the variants that will make up the test** 

1. Create at least two variants of the test and set the configs that you want to test and the percentage of traffic to be assigned for each variant.  
2. The sum of the traffic splits between variants has to equal 100% - it is recommended that you split the traffic evenly between variants.
3. For category equalize, only existing configs that apply to the test category will be available. 
4. Please note that if you want to include the current default site config for the category that applies to the test, you have to select it as one of the variants.

![](/docs-empathy/assets/media/mvt-3.png)

**Schedule your test or save a draft for later**

* **Running time:** set how long the test will run for.
* **Starting date:** enter the day to start the test.
* **Next available slot:** new tests need some time to set up before starting and can only be started within half hour slots — here you can set the starting time at the earliest possible slot or choose to schedule it later at a more convenient time.

![](/docs-empathy/assets/media/mvt-4.png)

## Check the status of all your tests
Within the Empathy Playboard, access the MVT by clicking its button in the menu. This will take you to the status list where you can follow the progress of your tests and perform actions on them. For example, here you can cancel, edit or remove a test as well as accessing its details to check its configuration or results if already finished.

![](/docs-empathy/assets/media/mvt-5.png)

## Analyze your test results
1. Within the Empathy Playboard, access MVT by clicking its button in the menu. This will take you to the tests status list.
2. Click on the “view” button in any finished test to see the results page.

Once each test has reached its completion date, the results will be available and displayed across insightful graphs within the test details. Metrics are computed only for relevant interactions depending on the test case and the statistical validity of the results after rigorous testing.

The image below shows an example of a finished tests, where you can see the evolution of views over time for each variant and the category tested. Here you can also recall the configuration applied to the test.

![](/docs-empathy/assets/media/mvt-6.png)

