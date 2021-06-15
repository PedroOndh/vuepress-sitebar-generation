const sidebarConfig = [
  {
    "title": "Empathy for Developers",
    "collapsable": true,
    "children": [
      "/Empathy-for-Developers/"
    ]
  },
  {
    "title": "Api reference",
    "collapsable": true,
    "children": [
      {
        "title": "Index api",
        "collapsable": true,
        "children": [
          "/api-reference/index-api/",
          "/api-reference/index-api/best-practices",
          {
            "title": "Common api",
            "collapsable": true,
            "children": [
              "/api-reference/index-api/common-api/",
              "/api-reference/index-api/common-api/check-job-state",
              "/api-reference/index-api/common-api/reimport-a-job",
              "/api-reference/index-api/common-api/retrieve-jobs-list"
            ]
          },
          {
            "title": "Post new feed",
            "collapsable": true,
            "children": [
              "/api-reference/index-api/post-new-feed/",
              "/api-reference/index-api/post-new-feed/post-curl",
              "/api-reference/index-api/post-new-feed/post-empathy",
              "/api-reference/index-api/post-new-feed/post-postman"
            ]
          }
        ]
      },
      {
        "title": "Interface",
        "collapsable": true,
        "children": [
          "/api-reference/interface/",
          "/api-reference/interface/event-callbacks-parameters",
          "/api-reference/interface/integrating-add-to-cart-and-checkout",
          "/api-reference/interface/integrating-analytics",
          "/api-reference/interface/interface-dynamic-configurations",
          "/api-reference/interface/polyfills-and-browser-support"
        ]
      },
      {
        "title": "Play api",
        "collapsable": true,
        "children": [
          "/api-reference/play-api/",
          {
            "title": "Mvt user manual",
            "collapsable": true,
            "children": [
              "/api-reference/play-api/mvt-user-manual/",
              "/api-reference/play-api/mvt-user-manual/coin-toss-api"
            ]
          },
          "/api-reference/play-api/play-api-blacklists",
          "/api-reference/play-api/play-api-boosts",
          "/api-reference/play-api/play-api-equalize",
          "/api-reference/play-api/play-api-links",
          {
            "title": "Play api synonyms",
            "collapsable": true,
            "children": [
              "/api-reference/play-api/play-api-synonyms/",
              "/api-reference/play-api/play-api-synonyms/play-api-disable-synonym",
              "/api-reference/play-api/play-api-synonyms/play-api-enable-synonym",
              "/api-reference/play-api/play-api-synonyms/play-api-get-synonym",
              "/api-reference/play-api/play-api-synonyms/play-api-get-synonyms"
            ]
          },
          {
            "title": "User api",
            "collapsable": true,
            "children": [
              "/api-reference/play-api/user-api/",
              "/api-reference/play-api/user-api/login",
              "/api-reference/play-api/user-api/refresh"
            ]
          }
        ]
      },
      {
        "title": "Search api",
        "collapsable": true,
        "children": [
          "/api-reference/search-api/",
          {
            "title": "Contextualize api",
            "collapsable": true,
            "children": [
              "/api-reference/search-api/contextualize-api/",
              {
                "title": "Category context",
                "collapsable": true,
                "children": [
                  "/api-reference/search-api/contextualize-api/category-context/",
                  "/api-reference/search-api/contextualize-api/category-context/category-context-preview"
                ]
              },
              "/api-reference/search-api/contextualize-api/contextualize-events",
              "/api-reference/search-api/contextualize-api/contextualize-input-parameter-glossary",
              {
                "title": "Query context",
                "collapsable": true,
                "children": [
                  "/api-reference/search-api/contextualize-api/query-context/",
                  "/api-reference/search-api/contextualize-api/query-context/query-context-attributes",
                  "/api-reference/search-api/contextualize-api/query-context/query-context-products"
                ]
              },
              {
                "title": "User context",
                "collapsable": true,
                "children": [
                  "/api-reference/search-api/contextualize-api/user-context/",
                  "/api-reference/search-api/contextualize-api/user-context/user-context-preferences",
                  "/api-reference/search-api/contextualize-api/user-context/user-context-products"
                ]
              },
              "/api-reference/search-api/contextualize-api/user-query-context"
            ]
          },
          "/api-reference/search-api/dw-contextualized-products",
          "/api-reference/search-api/dw-new-products",
          "/api-reference/search-api/dw-topclicked-endpoint",
          "/api-reference/search-api/links-search-endpoint",
          "/api-reference/search-api/nextqueries-search-endpoint",
          "/api-reference/search-api/query-signals-search-endpoint",
          "/api-reference/search-api/related-tags-endpoint",
          "/api-reference/search-api/search-empathize",
          "/api-reference/search-api/search-endpoint",
          "/api-reference/search-api/search-input-parameter-glossary",
          "/api-reference/search-api/skusearch-search-endpoint",
          "/api-reference/search-api/topclicked-endpoint"
        ]
      },
      {
        "title": "Stats api",
        "collapsable": true,
        "children": [
          "/api-reference/stats-api/",
          {
            "title": "Data integration",
            "collapsable": true,
            "children": [
              "/api-reference/stats-api/data-integration/",
              {
                "title": "Dataintegration dscc",
                "collapsable": true,
                "children": [
                  "/api-reference/stats-api/data-integration/dataintegration-dscc/",
                  "/api-reference/stats-api/data-integration/dataintegration-dscc/dataintegration-dscc-glossary"
                ]
              }
            ]
          },
          {
            "title": "Stats api browse distribution report",
            "collapsable": true,
            "children": [
              "/api-reference/stats-api/stats-api-browse-distribution-report/",
              "/api-reference/stats-api/stats-api-browse-distribution-report/stats-api-daily-browse-distribution-report"
            ]
          },
          {
            "title": "Stats api categories reports",
            "collapsable": true,
            "children": [
              "/api-reference/stats-api/stats-api-categories-reports/",
              "/api-reference/stats-api/stats-api-categories-reports/stats-api-categories",
              "/api-reference/stats-api/stats-api-categories-reports/stats-api-daily-distribution-categories"
            ]
          },
          {
            "title": "Stats api distribution report",
            "collapsable": true,
            "children": [
              "/api-reference/stats-api/stats-api-distribution-report/",
              "/api-reference/stats-api/stats-api-distribution-report/stats-api-daily-distribution-report-pivot",
              "/api-reference/stats-api/stats-api-distribution-report/stats-api-daily-distribution-report",
              "/api-reference/stats-api/stats-api-distribution-report/stats-api-daily-users-distribution-report",
              "/api-reference/stats-api/stats-api-distribution-report/stats-api-hourly-distribution-report"
            ]
          },
          {
            "title": "Stats api facets reports",
            "collapsable": true,
            "children": [
              "/api-reference/stats-api/stats-api-facets-reports/",
              "/api-reference/stats-api/stats-api-facets-reports/stats-api-facets-report"
            ]
          },
          {
            "title": "Stats api keywords report",
            "collapsable": true,
            "children": [
              "/api-reference/stats-api/stats-api-keywords-report/",
              "/api-reference/stats-api/stats-api-keywords-report/stats-api-keyword-daily-distribution",
              "/api-reference/stats-api/stats-api-keywords-report/stats-api-keyword-report"
            ]
          },
          {
            "title": "Stats api next queries",
            "collapsable": true,
            "children": [
              "/api-reference/stats-api/stats-api-next-queries/",
              "/api-reference/stats-api/stats-api-next-queries/stats-api-next-queries-report"
            ]
          },
          {
            "title": "Stats api origins reports",
            "collapsable": true,
            "children": [
              "/api-reference/stats-api/stats-api-origins-reports/",
              "/api-reference/stats-api/stats-api-origins-reports/stats-api-origins-report"
            ]
          },
          "/api-reference/stats-api/stats-api-query-parameters-glossary",
          {
            "title": "Stats api related reports",
            "collapsable": true,
            "children": [
              "/api-reference/stats-api/stats-api-related-reports/",
              "/api-reference/stats-api/stats-api-related-reports/stats-api-related-add2cart",
              "/api-reference/stats-api/stats-api-related-reports/stats-api-related-add2wishlist",
              "/api-reference/stats-api/stats-api-related-reports/stats-api-related-click"
            ]
          },
          {
            "title": "Stats api terms report",
            "collapsable": true,
            "children": [
              "/api-reference/stats-api/stats-api-terms-report/",
              "/api-reference/stats-api/stats-api-terms-report/stats-api-terms-success-daily-report",
              "/api-reference/stats-api/stats-api-terms-report/stats-api-terms-success-hourly-report",
              "/api-reference/stats-api/stats-api-terms-report/stats-api-terms-success-pivot-report",
              "/api-reference/stats-api/stats-api-terms-report/stats-api-terms-success-report"
            ]
          },
          {
            "title": "Stats api tooling reports",
            "collapsable": true,
            "children": [
              "/api-reference/stats-api/stats-api-tooling-reports/",
              "/api-reference/stats-api/stats-api-tooling-reports/stats-api-equalize-config"
            ]
          },
          {
            "title": "Stats api top reports",
            "collapsable": true,
            "children": [
              "/api-reference/stats-api/stats-api-top-reports/",
              "/api-reference/stats-api/stats-api-top-reports/stats-api-top-clicked",
              "/api-reference/stats-api/stats-api-top-reports/stats-api-top-queries"
            ]
          },
          {
            "title": "Stats api trending reports",
            "collapsable": true,
            "children": [
              "/api-reference/stats-api/stats-api-trending-reports/",
              "/api-reference/stats-api/stats-api-trending-reports/stats-api-opportunities",
              "/api-reference/stats-api/stats-api-trending-reports/stats-api-trending"
            ]
          }
        ]
      },
      {
        "title": "Tagging api",
        "collapsable": true,
        "children": [
          "/api-reference/tagging-api/",
          "/api-reference/tagging-api/tagging-api-addon-tag-manager",
          {
            "title": "Tagging api browse tagging",
            "collapsable": true,
            "children": [
              "/api-reference/tagging-api/tagging-api-browse-tagging/",
              "/api-reference/tagging-api/tagging-api-browse-tagging/tagging-api-browse-tagging-add2cart-event",
              "/api-reference/tagging-api/tagging-api-browse-tagging/tagging-api-browse-tagging-category-event",
              "/api-reference/tagging-api/tagging-api-browse-tagging/tagging-api-browse-tagging-checkout-event",
              "/api-reference/tagging-api/tagging-api-browse-tagging/tagging-api-browse-tagging-product-event"
            ]
          },
          {
            "title": "Tagging api search tagging",
            "collapsable": true,
            "children": [
              "/api-reference/tagging-api/tagging-api-search-tagging/",
              "/api-reference/tagging-api/tagging-api-search-tagging/tagging-api-search-tagging-add2cart-event",
              "/api-reference/tagging-api/tagging-api-search-tagging/tagging-api-search-tagging-checkout-event",
              "/api-reference/tagging-api/tagging-api-search-tagging/tagging-api-search-tagging-click-event",
              "/api-reference/tagging-api/tagging-api-search-tagging/tagging-api-search-tagging-query-event",
              "/api-reference/tagging-api/tagging-api-search-tagging/tagging-api-search-tagging-wishlist-event"
            ]
          },
          "/api-reference/tagging-api/tagging-api-search-tagging-batch-event",
          "/api-reference/tagging-api/tagging-input-parameters-glossary"
        ]
      },
      {
        "title": "X apps",
        "collapsable": true,
        "children": [
          "/api-reference/x-apps/",
          "/api-reference/x-apps/x-apps-android"
        ]
      }
    ]
  },
  {
    "title": "Explore empathy platform",
    "collapsable": true,
    "children": [
      "/explore-empathy-platform/",
      {
        "title": "Experience search & discovery",
        "collapsable": true,
        "children": [
          "/explore-empathy-platform/experience-search-&-discovery/"
        ]
      }
    ]
  }
]

export default sidebarConfig