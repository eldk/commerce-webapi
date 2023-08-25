"use strict";(self.webpackChunkcommerce_webapi=self.webpackChunkcommerce_webapi||[]).push([[8753],{40510:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return p},default:function(){return s}});var n=a(87462),l=a(63366),d=(a(15007),a(64983)),r=a(91515),m=a(51362),i=["components"],p={},o={_frontmatter:p},u=r.Z;function s(e){var t=e.components,a=(0,l.Z)(e,i);return(0,d.mdx)(u,(0,n.Z)({},o,a,{components:t,mdxType:"MDXLayout"}),(0,d.mdx)("h1",{id:"setnegotiablequoteshippingmethods-mutation"},"setNegotiableQuoteShippingMethods mutation"),(0,d.mdx)("p",null,"The ",(0,d.mdx)("inlineCode",{parentName:"p"},"setNegotiableQuoteShippingMethods")," mutation sets one or more delivery methods on a negotiable quote. By default, the following delivery methods are supported:"),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"Label"),(0,d.mdx)("th",{parentName:"tr",align:null},"Carrier code"),(0,d.mdx)("th",{parentName:"tr",align:null},"Method code"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"DHL"),(0,d.mdx)("td",{parentName:"tr",align:null},"dhl"),(0,d.mdx)("td",{parentName:"tr",align:null},"Varies")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Federal Express"),(0,d.mdx)("td",{parentName:"tr",align:null},"fedex"),(0,d.mdx)("td",{parentName:"tr",align:null},"Varies")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Flat Rate"),(0,d.mdx)("td",{parentName:"tr",align:null},"flatrate"),(0,d.mdx)("td",{parentName:"tr",align:null},"flatrate")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Free Shipping"),(0,d.mdx)("td",{parentName:"tr",align:null},"freeshipping"),(0,d.mdx)("td",{parentName:"tr",align:null},"freeshipping")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Best Way"),(0,d.mdx)("td",{parentName:"tr",align:null},"tablerate"),(0,d.mdx)("td",{parentName:"tr",align:null},"bestway")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"United Parcel Service"),(0,d.mdx)("td",{parentName:"tr",align:null},"ups"),(0,d.mdx)("td",{parentName:"tr",align:null},"Varies")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"United States Postal Service"),(0,d.mdx)("td",{parentName:"tr",align:null},"usps"),(0,d.mdx)("td",{parentName:"tr",align:null},"Varies")))),(0,d.mdx)("p",null,"The negotiable quote must be in the UPDATED state to successfully set a shipping address."),(0,d.mdx)("p",null,"This query requires a valid ",(0,d.mdx)("a",{parentName:"p",href:"../../../customer/mutations/generate-token.md"},"customer authentication token"),"."),(0,d.mdx)("h2",{id:"syntax"},"Syntax"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-graphql"},"setNegotiableQuoteShippingMethods(\n    input: SetNegotiableQuoteShippingMethodsInput!\n): SetNegotiableQuoteShippingMethodsOutput\n")),(0,d.mdx)("h2",{id:"example-usage"},"Example usage"),(0,d.mdx)("p",null,"The following example sets the shipping method for a negotiable quote."),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Request:")),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-graphql"},'\nmutation {\n  setNegotiableQuoteShippingMethods(\n    input: {\n      quote_uid: "z13H2xRCqEiyVoPJmSmekvhOo4GdsVSp",\n      shipping_methods: [\n        {\n          carrier_code: "tablerate"\n          method_code: "bestway"\n        }\n      ]\n    }\n  ) {\n    quote {\n      uid\n      shipping_addresses {\n        selected_shipping_method {\n          carrier_code\n          carrier_title\n          method_code\n          method_title\n          amount {\n            value\n            currency\n          }\n        }\n      }\n    }\n  }\n}\n\n')),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Response:")),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "setNegotiableQuoteShippingMethods": {\n      "quote": {\n        "uid": "prFSdZyHOpMXeiJ32XlBzd8e1Mte9loS",\n        "shipping_addresses": [\n          {\n            "selected_shipping_method": {\n              "carrier_code": "tablerate",\n              "carrier_title": "Best Way",\n              "method_code": "bestway",\n              "method_title": "Table Rate",\n              "amount": {\n                "value": 29.95,\n                "currency": "USD"\n              }\n            }\n          }\n        ]\n      }\n    }\n  }\n}\n')),(0,d.mdx)("h2",{id:"input-attributes"},"Input attributes"),(0,d.mdx)("p",null,"The ",(0,d.mdx)("inlineCode",{parentName:"p"},"SetNegotiableQuoteShippingMethodsInput")," object contains the following attributes."),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"Attribute"),(0,d.mdx)("th",{parentName:"tr",align:null},"Data Type"),(0,d.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"quote_uid")),(0,d.mdx)("td",{parentName:"tr",align:null},"ID!"),(0,d.mdx)("td",{parentName:"tr",align:null},"The unique ID of a ",(0,d.mdx)("inlineCode",{parentName:"td"},"NegotiableQuote")," object")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"shipping_methods")),(0,d.mdx)("td",{parentName:"tr",align:null},"[ShippingMethodInput]","!"),(0,d.mdx)("td",{parentName:"tr",align:null},"An array of shipping methods to apply to the negotiable quote")))),(0,d.mdx)("h3",{id:"shippingmethodinput-object"},"ShippingMethodInput object"),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"Attribute"),(0,d.mdx)("th",{parentName:"tr",align:null},"Data Type"),(0,d.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"carrier_code")),(0,d.mdx)("td",{parentName:"tr",align:null},"String!"),(0,d.mdx)("td",{parentName:"tr",align:null},"A string that identifies a commercial carrier or an offline delivery method")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"method_code")),(0,d.mdx)("td",{parentName:"tr",align:null},"String!"),(0,d.mdx)("td",{parentName:"tr",align:null},"A string that indicates which service a commercial carrier will use to ship items. For offline delivery methods, this value is similar to the label displayed on the checkout page")))),(0,d.mdx)("h2",{id:"output-attributes"},"Output attributes"),(0,d.mdx)("p",null,"The ",(0,d.mdx)("inlineCode",{parentName:"p"},"SetNegotiableQuoteShippingMethodsOutput")," output object contains the following attribute."),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"Attribute"),(0,d.mdx)("th",{parentName:"tr",align:null},"Data Type"),(0,d.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"quote")),(0,d.mdx)("td",{parentName:"tr",align:null},"NegotiableQuote"),(0,d.mdx)("td",{parentName:"tr",align:null},"The updated negotiable quote")))),(0,d.mdx)("h3",{id:"negotiablequote-attributes"},"NegotiableQuote attributes"),(0,d.mdx)(m.Z,{mdxType:"NegotiableQuote"}))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-graphql-schema-b-2-b-negotiable-quote-mutations-set-shipping-methods-md-de7e5431f150ff2c3d4c.js.map