"use strict";(self.webpackChunkcommerce_webapi=self.webpackChunkcommerce_webapi||[]).push([[537],{83782:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return o},default:function(){return p}});var a=n(87462),r=n(63366),d=(n(15007),n(64983)),l=n(91515),i=["components"],o={},m={_frontmatter:o},s=l.Z;function p(e){var t=e.components,n=(0,r.Z)(e,i);return(0,d.mdx)(s,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,d.mdx)("h1",{id:"manage-source-selection-algorithms"},"Manage source selection algorithms"),(0,d.mdx)("p",null,"Inventory Management uses the Source Selection Algorithm (SSA) to track the salable quantities of product inventory across all sources and make recommendations for partial and full shipments."),(0,d.mdx)("p",null,"The SSA uses stocks and sources to check the sales channel for incoming product requests and determines the available inventory. The algorithm:"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},"Calculates the aggregated virtual salable quantity of all assigned sources per stock"),(0,d.mdx)("li",{parentName:"ul"},"Subtracts the Out-of-Stock Threshold amount from salable quantity to protect against overselling and support concurrent checkout"),(0,d.mdx)("li",{parentName:"ul"},"Reserves inventory quantities at checkout, deducting from in-stock inventory at order processing and shipment"),(0,d.mdx)("li",{parentName:"ul"},"Supports backorders with enhanced options for negative thresholds")),(0,d.mdx)("p",null,"The SSA also manages shipments by providing recommendations for the best sources to ship partial or all products or override the selections to:"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},"Ship partial shipments, sending only a few products from specific sources and completing the full order at a later date."),(0,d.mdx)("li",{parentName:"ul"},"Ship the entire order from one source."),(0,d.mdx)("li",{parentName:"ul"},"Break the order into partial shipments across multiple sources in different amounts to keep a balanced stock across all warehouses and stores.")),(0,d.mdx)("p",null,"Third parties can also extend SSA to create customized algorithms for recommending cost-effective shipments."),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Service names:")),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-http"},"inventorySourceSelectionApiGetSourceSelectionAlgorithmListV1\ninventorySourceSelectionApiSourceSelectionServiceV1\ninventoryDistanceBasedSourceSelectionApiGetDistanceProviderCodeV1\ninventoryDistanceBasedSourceSelectionApiGetDistanceV1\ninventoryDistanceBasedSourceSelectionApiGetLatLngFromAddressV1\n")),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"REST endpoints:")),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-http"},"GET /V1/inventory/source-selection-algorithm-list\nPOST /V1/inventory/source-selection-algorithm-result\n")),(0,d.mdx)("h2",{id:"get-the-list-of-available-source-selection-algorithms"},"Get the list of available source selection algorithms"),(0,d.mdx)("p",null,"Currently, Inventory Management supports only the default SSA for priority. Third-party developers and future releases may add support for additional algorithms."),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Sample usage:")),(0,d.mdx)("p",null,(0,d.mdx)("inlineCode",{parentName:"p"},"GET <host>/rest/us/V1/inventory/source-selection-algorithm-list")),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Payload:")),(0,d.mdx)("p",null,"None"),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Response:")),(0,d.mdx)("p",null,"An array containing a list of SSA codes, titles, and descriptions."),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-json"},'[\n    {\n        "code": "distance",\n        "title": "Distance Priority",\n        "description": "Algorithm which provides Source Selections based on shipping address distance from the source"\n    },\n    {\n        "code": "priority",\n        "title": "Source Priority",\n        "description": "Algorithm which provides Source Selections based on predefined priority of Source"\n    }\n]\n')),(0,d.mdx)("h2",{id:"run-the-ssa"},"Run the SSA"),(0,d.mdx)("p",null,"The ",(0,d.mdx)("inlineCode",{parentName:"p"},"POST V1/inventory/source-selection-algorithm-result")," endpoint uses the algorithm defined by the ",(0,d.mdx)("inlineCode",{parentName:"p"},"algorithmCode")," attribute to calculate the recommended sources and quantities for each item defined in the items array."),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Sample usage:")),(0,d.mdx)("p",null,(0,d.mdx)("inlineCode",{parentName:"p"},"POST <host>/rest/<store_code>/V1/inventory/source-selection-algorithm-result")),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"inventoryRequest parameters:")),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"Name"),(0,d.mdx)("th",{parentName:"tr",align:null},"Description"),(0,d.mdx)("th",{parentName:"tr",align:null},"Type"),(0,d.mdx)("th",{parentName:"tr",align:null},"Requirements"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"stock_id")),(0,d.mdx)("td",{parentName:"tr",align:null},"The ID of the stock"),(0,d.mdx)("td",{parentName:"tr",align:null},"Integer"),(0,d.mdx)("td",{parentName:"tr",align:null},"Required")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"items")),(0,d.mdx)("td",{parentName:"tr",align:null},"An array containing the SKU and quantity of items in the order"),(0,d.mdx)("td",{parentName:"tr",align:null},"Array"),(0,d.mdx)("td",{parentName:"tr",align:null},"Required")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"sku")),(0,d.mdx)("td",{parentName:"tr",align:null},"The SKU of a product to be shipped"),(0,d.mdx)("td",{parentName:"tr",align:null},"String"),(0,d.mdx)("td",{parentName:"tr",align:null},"Required for each item")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"qty")),(0,d.mdx)("td",{parentName:"tr",align:null},"The quantity of a product to be shipped"),(0,d.mdx)("td",{parentName:"tr",align:null},"Float"),(0,d.mdx)("td",{parentName:"tr",align:null},"Required for each item")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"algorithmCode")),(0,d.mdx)("td",{parentName:"tr",align:null},"The name of the SSA to implement. For 2.3, this value must be ",(0,d.mdx)("inlineCode",{parentName:"td"},"priority"),"."),(0,d.mdx)("td",{parentName:"tr",align:null},"String"),(0,d.mdx)("td",{parentName:"tr",align:null},"Required")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"destination_address")),(0,d.mdx)("td",{parentName:"tr",align:null},"An extension attribute that defines the shipment address when the Distance Priority SSA is used."),(0,d.mdx)("td",{parentName:"tr",align:null},"Object"),(0,d.mdx)("td",{parentName:"tr",align:null},"Required for the Distance Priority SSA")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"country")),(0,d.mdx)("td",{parentName:"tr",align:null},"The country code of the shipping address"),(0,d.mdx)("td",{parentName:"tr",align:null},"String"),(0,d.mdx)("td",{parentName:"tr",align:null},"Required for the Distance Priority SSA")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"postcode")),(0,d.mdx)("td",{parentName:"tr",align:null},"The postal code of the shipping address"),(0,d.mdx)("td",{parentName:"tr",align:null},"String"),(0,d.mdx)("td",{parentName:"tr",align:null},"Required for the Distance Priority SSA")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"street")),(0,d.mdx)("td",{parentName:"tr",align:null},"The street address of the shipping address"),(0,d.mdx)("td",{parentName:"tr",align:null},"String"),(0,d.mdx)("td",{parentName:"tr",align:null},"Required for the Distance Priority SSA")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"region")),(0,d.mdx)("td",{parentName:"tr",align:null},"The region code of the shipping address"),(0,d.mdx)("td",{parentName:"tr",align:null},"String"),(0,d.mdx)("td",{parentName:"tr",align:null},"Required for the Distance Priority SSA")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"city")),(0,d.mdx)("td",{parentName:"tr",align:null},"The city of the shipping address"),(0,d.mdx)("td",{parentName:"tr",align:null},"String"),(0,d.mdx)("td",{parentName:"tr",align:null},"Required for the Distance Priority SSA")))),(0,d.mdx)("h3",{id:"source-priority-algorithm"},"Source Priority Algorithm"),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Payload:")),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-json"},'{\n    "inventoryRequest": {\n        "stockId": 2,\n        "items": [{\n            "sku": "24-WB01",\n            "qty": 20\n        },\n        {\n            "sku": "24-WB03",\n            "qty": 50\n        }]\n    },\n    "algorithmCode": "priority"\n}\n')),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Response:")),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-json"},'{\n    "source_selection_items": [\n        {\n            "source_code": "baltimore_wh",\n            "sku": "24-WB01",\n            "qty_to_deduct": 20,\n            "qty_available": 35\n        },\n        {\n            "source_code": "austin_wh",\n            "sku": "24-WB01",\n            "qty_to_deduct": 0,\n            "qty_available": 10\n        },\n        {\n            "source_code": "reno_wh",\n            "sku": "24-WB01",\n            "qty_to_deduct": 0,\n            "qty_available": 25\n        },\n        {\n            "source_code": "baltimore_wh",\n            "sku": "24-WB03",\n            "qty_to_deduct": 19,\n            "qty_available": 19\n        },\n        {\n            "source_code": "reno_wh",\n            "sku": "24-WB03",\n            "qty_to_deduct": 31,\n            "qty_available": 42\n        }\n    ],\n    "shippable": true\n}\n')),(0,d.mdx)("h3",{id:"distance-priority-algorithm"},"Distance Priority algorithm"),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Payload:")),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-json"},'{\n    "inventoryRequest": {\n        "stockId": 2,\n        "items": [{\n            "sku": "24-WB01",\n            "qty": 20\n        },\n        {\n            "sku": "24-WB03",\n            "qty": 50\n        }],\n        "extension_attributes": {\n            "destination_address": {\n                "country": "US",\n                "postcode": "10577",\n                "street": "3003 Purchase St",\n                "region": "43",\n                "city": "Purchase"\n            }\n        }\n    },\n    "algorithmCode": "distance"\n}\n')),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Response:")),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-json"},'{\n    "source_selection_items": [\n        {\n            "source_code": "baltimore_wh",\n            "sku": "24-WB01",\n            "qty_to_deduct": 20,\n            "qty_available": 35\n        },\n        {\n            "source_code": "austin_wh",\n            "sku": "24-WB01",\n            "qty_to_deduct": 0,\n            "qty_available": 10\n        },\n        {\n            "source_code": "reno_wh",\n            "sku": "24-WB01",\n            "qty_to_deduct": 0,\n            "qty_available": 25\n        },\n        {\n            "source_code": "baltimore_wh",\n            "sku": "24-WB03",\n            "qty_to_deduct": 19,\n            "qty_available": 19\n        },\n        {\n            "source_code": "reno_wh",\n            "sku": "24-WB03",\n            "qty_to_deduct": 31,\n            "qty_available": 42\n        }\n    ],\n    "shippable": true\n}\n')),(0,d.mdx)("h2",{id:"determine-distances-for-the-distance-priority-algorithm"},"Determine distances for the Distance Priority algorithm"),(0,d.mdx)("p",null,"Adobe Commerce provides several endpoints to help determine GPS coordinates."),(0,d.mdx)("h3",{id:"get-the-distance-provider-code"},"Get the distance provider code"),(0,d.mdx)("p",null,"The ",(0,d.mdx)("inlineCode",{parentName:"p"},"GET /V1/inventory/get-distance-provider-code")," endpoint returns the configured distance provider for the Distance Priority algorithm. The value can be ",(0,d.mdx)("inlineCode",{parentName:"p"},"google")," or ",(0,d.mdx)("inlineCode",{parentName:"p"},"offline"),"."),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Sample usage:")),(0,d.mdx)("p",null,(0,d.mdx)("inlineCode",{parentName:"p"},"GET <host>/rest/<store_code>/V1/inventory/get-distance-provider-code")),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Payload:")),(0,d.mdx)("p",null,"None"),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Response:")),(0,d.mdx)("p",null,(0,d.mdx)("inlineCode",{parentName:"p"},"offline")),(0,d.mdx)("h3",{id:"get-the-distance-between-two-points"},"Get the distance between two points"),(0,d.mdx)("p",null,"The ",(0,d.mdx)("inlineCode",{parentName:"p"},"GET /V1/inventory/get-distance")," endpoint calculates the distance between two points, given the longitude and latitude of the source and distance."),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"URL parameters:")),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"Name"),(0,d.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"source[lat]")),(0,d.mdx)("td",{parentName:"tr",align:null},"The latitude of the source")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"source[lng]")),(0,d.mdx)("td",{parentName:"tr",align:null},"The longitude of the source")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"destination[lat]")),(0,d.mdx)("td",{parentName:"tr",align:null},"The latitude of the destination")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"destination[lng]")),(0,d.mdx)("td",{parentName:"tr",align:null},"The longitude of the destination")))),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Sample usage:")),(0,d.mdx)("p",null,(0,d.mdx)("inlineCode",{parentName:"p"},"GET /V1/inventory/get-distance?source[lat]=30.271129&source[lng]=-97.7437&destination[lat]=39.290882&destination[lng]=-76.610759")),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Payload:")),(0,d.mdx)("p",null,"None"),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Response:")),(0,d.mdx)("p",null,"The distance, in kilometers"),(0,d.mdx)("h3",{id:"get-the-latitude-and-longitude-of-the-shipping-address"},"Get the latitude and longitude of the shipping address"),(0,d.mdx)("p",null,"The ",(0,d.mdx)("inlineCode",{parentName:"p"},"GET /V1/inventory/get-latlng-from-address")," endpoint calculates the latitude and longitude of the shipping address."),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"URL parameters:")),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"Name"),(0,d.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"address","[country]"),(0,d.mdx)("td",{parentName:"tr",align:null},"The country code of the shipping address")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"address","[postcode]"),(0,d.mdx)("td",{parentName:"tr",align:null},"The postal code of the shipping address")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"address","[street]"),(0,d.mdx)("td",{parentName:"tr",align:null},"The street of the shipping address")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"address","[region]"),(0,d.mdx)("td",{parentName:"tr",align:null},"The region code of the shipping address")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"address","[city]"),(0,d.mdx)("td",{parentName:"tr",align:null},"The city of the shipping address")))),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Sample usage:")),(0,d.mdx)("p",null,(0,d.mdx)("inlineCode",{parentName:"p"},"GET /V1/inventory/get-latlng-from-address?address[country]=US&address[postcode]=10577&address[street]=123%20Oak&address[region]=NY&address[city]=Purchase")),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Payload:")),(0,d.mdx)("p",null,"None"),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Response:")),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-json"},'{\n    "lat": 41.0384,\n    "lng": -73.7156\n}\n')))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-rest-inventory-manage-source-selection-md-57f8f40430d5321d3922.js.map