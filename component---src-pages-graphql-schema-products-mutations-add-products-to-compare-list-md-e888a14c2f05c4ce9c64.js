"use strict";(self.webpackChunkcommerce_webapi=self.webpackChunkcommerce_webapi||[]).push([[1183],{66569:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return s},default:function(){return u}});var a=n(87462),o=n(63366),i=(n(15007),n(64983)),r=n(91515),l=n(9386),d=["components"],s={},m={_frontmatter:s},p=r.Z;function u(e){var t=e.components,n=(0,o.Z)(e,d);return(0,i.mdx)(p,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("h1",{id:"addproductstocomparelist-mutation"},"addProductsToCompareList mutation"),(0,i.mdx)("p",null,"The ",(0,i.mdx)("inlineCode",{parentName:"p"},"addProductsToCompareList")," mutation adds products to the comparison list."),(0,i.mdx)("p",null,"You must specify the unique ID of the comparison list as well as a list of product IDs to be added to the comparison list."),(0,i.mdx)("h2",{id:"syntax"},"Syntax"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-graphql"},"mutation {\n    addProductsToCompareList(\n        input: AddProductsToCompareListInput\n    ) {\n        CompareList\n    }\n}\n")),(0,i.mdx)("h2",{id:"example-usage"},"Example usage"),(0,i.mdx)("p",null,"The following example shows how to add two products to the existing comparison list with the ",(0,i.mdx)("inlineCode",{parentName:"p"},"uid")," value of ",(0,i.mdx)("inlineCode",{parentName:"p"},"sssXyGZkTFksdPnxNoK1ut6OiV4bbchD"),"."),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Request:")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-graphql"},'mutation {\n  addProductsToCompareList(\n    input: {\n      uid: "sssXyGZkTFksdPnxNoK1ut6OiV4bbchD",\n      products: ["3", "4"]\n    }\n  ) {\n    uid\n    item_count\n    attributes {\n      code\n      label\n    }\n    items {\n      uid\n      product {\n        sku\n        name\n        description {\n          html\n        }\n      }\n    }\n  }\n}\n')),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Response:")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "addProductsToCompareList": {\n      "uid": "sssXyGZkTFksdPnxNoK1ut6OiV4bbchD",\n      "item_count": 4,\n      "attributes": [\n        {\n          "code": "sku",\n          "label": "SKU"\n        },\n        {\n          "code": "description",\n          "label": "Description"\n        },\n        {\n          "code": "short_description",\n          "label": "Short Description"\n        },\n        {\n          "code": "activity",\n          "label": "Activity"\n        }\n      ],\n      "items": [\n        {\n          "uid": "1",\n          "product": {\n            "sku": "24-MB01",\n            "name": "Joust Duffle Bag",\n            "description": {\n              "html": "<p>The sporty Joust Duffle Bag can\'t be beat - not in the gym, not on the luggage carousel, not anywhere. Big enough to haul a basketball or soccer ball and some sneakers with plenty of room to spare, it\'s ideal for athletes with places to go.<p>\\n<ul>\\n<li>Dual top handles.</li>\\n<li>Adjustable shoulder strap.</li>\\n<li>Full-length zipper.</li>\\n<li>L 29\\" x W 13\\" x H 11\\".</li>\\n</ul>"\n            }\n          }\n        },\n        {\n          "uid": "2",\n          "product": {\n            "sku": "24-MB04",\n            "name": "Strive Shoulder Pack",\n            "description": {\n              "html": "<p>Convenience is next to nothing when your day is crammed with action. So whether you\'re heading to class, gym, or the unbeaten path, make sure you\'ve got your Strive Shoulder Pack stuffed with all your essentials, and extras as well.</p>\\n<ul>\\n<li>Zippered main compartment.</li>\\n<li>Front zippered pocket.</li>\\n<li>Side mesh pocket.</li>\\n<li>Cell phone pocket on strap.</li>\\n<li>Adjustable shoulder strap and top carry handle.</li>\\n</ul>"\n            }\n          }\n        },\n        {\n          "uid": "3",\n          "product": {\n            "sku": "24-MB03",\n            "name": "Crown Summit Backpack",\n            "description": {\n              "html": "<p>The Crown Summit Backpack is equally at home in a gym locker, study cube or a pup tent, so be sure yours is packed with books, a bag lunch, water bottles, yoga block, laptop, or whatever else you want in hand. Rugged enough for day hikes and camping trips, it has two large zippered compartments and padded, adjustable shoulder straps.</p>\\n<ul>\\n<li>Top handle.</li>\\n<li>Grommet holes.</li>\\n<li>Two-way zippers.</li>\\n<li>H 20\\" x W 14\\" x D 12\\".</li>\\n<li>Weight: 2 lbs, 8 oz. Volume: 29 L.</li>\\n<ul>"\n            }\n          }\n        },\n        {\n          "uid": "4",\n          "product": {\n            "sku": "24-MB05",\n            "name": "Wayfarer Messenger Bag",\n            "description": {\n              "html": "<p>Perfect for class, work or the gym, the Wayfarer Messenger Bag is packed with pockets. The dual-buckle flap closure reveals an organizational panel, and the roomy main compartment has spaces for your laptop and a change of clothes. An adjustable shoulder strap and easy-grip handle promise easy carrying.</p>\\n<ul>\\n<li>Multiple internal zip pockets.</li>\\n<li>Made of durable nylon.</li>\\n</ul>"\n            }\n          }\n        }\n      ]\n    }\n  }\n}\n')),(0,i.mdx)("h2",{id:"input-attributes"},"Input attributes"),(0,i.mdx)("p",null,"The ",(0,i.mdx)("inlineCode",{parentName:"p"},"AddProductsToCompareListInput")," input object defines the product IDs to be compared within an existing comparison list."),(0,i.mdx)("h3",{id:"addproductstocomparelistinput-attributes"},"AddProductsToCompareListInput attributes"),(0,i.mdx)("p",null,"The ",(0,i.mdx)("inlineCode",{parentName:"p"},"AddProductsToCompareListInput")," object contains the following attributes:"),(0,i.mdx)("table",null,(0,i.mdx)("thead",{parentName:"table"},(0,i.mdx)("tr",{parentName:"thead"},(0,i.mdx)("th",{parentName:"tr",align:null},"Attribute"),(0,i.mdx)("th",{parentName:"tr",align:null},"Data Type"),(0,i.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,i.mdx)("tbody",{parentName:"table"},(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"products")),(0,i.mdx)("td",{parentName:"tr",align:null},"[ID!]","!"),(0,i.mdx)("td",{parentName:"tr",align:null},"An array of product ",(0,i.mdx)("inlineCode",{parentName:"td"},"id")," values to add to the comparison list. Note that these are not ",(0,i.mdx)("inlineCode",{parentName:"td"},"uid")," values")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"uid")),(0,i.mdx)("td",{parentName:"tr",align:null},"ID!"),(0,i.mdx)("td",{parentName:"tr",align:null},"The unique ID of a ",(0,i.mdx)("inlineCode",{parentName:"td"},"CompareList")," object")))),(0,i.mdx)("h2",{id:"output-attributes"},"Output attributes"),(0,i.mdx)("p",null,"The ",(0,i.mdx)("inlineCode",{parentName:"p"},"CompareList")," output object contains the following attribute:"),(0,i.mdx)(l.Z,{mdxType:"CompareListOutput"}),(0,i.mdx)("h2",{id:"related-topics"},"Related topics"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"../../products/queries/compare-list.md"},"compareList query")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"assign-compare-list.md"},"assignCompareListToCustomer mutation")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"create-compare-list.md"},"createCompareList mutation")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"delete-compare-list.md"},"deleteCompareList mutation")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"remove-from-compare-list.md"},"removeProductsFromCompareList mutation"))))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-graphql-schema-products-mutations-add-products-to-compare-list-md-e888a14c2f05c4ce9c64.js.map