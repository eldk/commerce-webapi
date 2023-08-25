"use strict";(self.webpackChunkcommerce_webapi=self.webpackChunkcommerce_webapi||[]).push([[3092],{51782:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return m},default:function(){return o}});var a=n(87462),r=n(63366),i=(n(15007),n(64983)),d=n(91515),l=n(42680),u=["components"],m={},p={_frontmatter:m},s=d.Z;function o(e){var t=e.components,n=(0,r.Z)(e,u);return(0,i.mdx)(s,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("h1",{id:"giftregistrytypes-query"},"giftRegistryTypes query"),(0,i.mdx)("p",null,"The ",(0,i.mdx)("inlineCode",{parentName:"p"},"giftRegistryTypes")," query returns a list of available gift registry types."),(0,i.mdx)("h2",{id:"syntax"},"Syntax"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-graphql"},"giftRegistryTypes: [GiftRegistryType]\n")),(0,i.mdx)("h2",{id:"reference"},"Reference"),(0,i.mdx)("p",null,"The ",(0,i.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/commerce/webapi/graphql-api/index.html#query-giftRegistryTypes"},(0,i.mdx)("inlineCode",{parentName:"a"},"giftRegistryTypes"))," reference provides detailed information about the types and fields defined in this query."),(0,i.mdx)("h2",{id:"example-usage"},"Example usage"),(0,i.mdx)("p",null,"The following example returns information about the list of available gift registry types."),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Request:")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-graphql"},"query{\n  giftRegistryTypes{\n    label\n    uid\n    dynamic_attributes_metadata {\n      label\n      input_type\n      is_required\n      code\n    }\n  }\n}\n")),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Response:")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "giftRegistryTypes": [\n      {\n        "label": "Birthday",\n        "uid": "MQ==",\n        "dynamic_attributes_metadata": [\n          {\n            "label": "Country",\n            "input_type": "country",\n            "is_required": true,\n            "code": "event_country"\n          },\n          {\n            "label": "Event Date",\n            "input_type": "date",\n            "is_required": true,\n            "code": "event_date"\n          }\n        ]\n      },\n      {\n        "label": "Baby Registry",\n        "uid": "Mg==",\n        "dynamic_attributes_metadata": [\n          {\n            "label": "Role",\n            "input_type": "select",\n            "is_required": true,\n            "code": "role"\n          },\n          {\n            "label": "Country",\n            "input_type": "country",\n            "is_required": true,\n            "code": "event_country"\n          },\n          {\n            "label": "Baby Gender",\n            "input_type": "select",\n            "is_required": true,\n            "code": "baby_gender"\n          }\n        ]\n      },\n      {\n        "label": "Wedding",\n        "uid": "Mw==",\n        "dynamic_attributes_metadata": [\n          {\n            "label": "Role",\n            "input_type": "select",\n            "is_required": true,\n            "code": "role"\n          },\n          {\n            "label": "Country",\n            "input_type": "country",\n            "is_required": true,\n            "code": "event_country"\n          },\n          {\n            "label": "Wedding Date",\n            "input_type": "date",\n            "is_required": true,\n            "code": "event_date"\n          },\n          {\n            "label": "Location",\n            "input_type": "text",\n            "is_required": true,\n            "code": "event_location"\n          },\n          {\n            "label": "Number of Guests",\n            "input_type": "text",\n            "is_required": true,\n            "code": "number_of_guests"\n          }\n        ]\n      }\n    ]\n  }\n}\n')),(0,i.mdx)("h2",{id:"output-attributes"},"Output attributes"),(0,i.mdx)("p",null,"The ",(0,i.mdx)("inlineCode",{parentName:"p"},"giftRegistryTypes")," array returns the following attributes:"),(0,i.mdx)("table",null,(0,i.mdx)("thead",{parentName:"table"},(0,i.mdx)("tr",{parentName:"thead"},(0,i.mdx)("th",{parentName:"tr",align:null},"Attribute"),(0,i.mdx)("th",{parentName:"tr",align:null},"Data Type"),(0,i.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,i.mdx)("tbody",{parentName:"table"},(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"dynamic_attributes_metadata")),(0,i.mdx)("td",{parentName:"tr",align:null},"[",(0,i.mdx)("a",{parentName:"td",href:"#giftregistrydynamicattributemetadatainterface-attributes"},"GiftRegistryDynamicAttributeMetadataInterface"),"]"),(0,i.mdx)("td",{parentName:"tr",align:null},"An array of attributes that define elements of the gift registry. Each attribute is specified as a code-value pair")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"label")),(0,i.mdx)("td",{parentName:"tr",align:null},"String!"),(0,i.mdx)("td",{parentName:"tr",align:null},"The display name of the gift registry type")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"uid")),(0,i.mdx)("td",{parentName:"tr",align:null},"ID!"),(0,i.mdx)("td",{parentName:"tr",align:null},"The unique ID assigned to the gift registry")))),(0,i.mdx)("h3",{id:"giftregistrydynamicattributemetadatainterface-attributes"},"GiftRegistryDynamicAttributeMetadataInterface attributes"),(0,i.mdx)(l.Z,{mdxType:"GiftRegistryMetadata"}))}o.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-graphql-schema-gift-registry-queries-types-md-0445b2eded51e1590f9d.js.map