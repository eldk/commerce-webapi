"use strict";(self.webpackChunkcommerce_webapi=self.webpackChunkcommerce_webapi||[]).push([[5385],{73993:function(e,n,r){r.r(n),r.d(n,{_frontmatter:function(){return u},default:function(){return c}});var t=r(87462),a=r(63366),m=(r(15007),r(64983)),i=r(91515),d=["components"],u={},o={_frontmatter:u},p=i.Z;function c(e){var n=e.components,r=(0,a.Z)(e,d);return(0,m.mdx)(p,(0,t.Z)({},o,r,{components:n,mdxType:"MDXLayout"}),(0,m.mdx)("h1",{id:"removereturntracking-mutation"},"removeReturnTracking mutation"),(0,m.mdx)("p",null,"The ",(0,m.mdx)("inlineCode",{parentName:"p"},"removeReturnTracking")," mutation deletes a customer-entered entry that defines the shipping carrier and tracking number for a return request. Use the ",(0,m.mdx)("a",{parentName:"p",href:"../../customer/queries/customer.md"},(0,m.mdx)("inlineCode",{parentName:"a"},"customer")," query")," to retrieve valid ",(0,m.mdx)("inlineCode",{parentName:"p"},"carrier_uid")," values."),(0,m.mdx)("h2",{id:"syntax"},"Syntax"),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-graphql"},"mutation: {\n    removeReturnTracking(input: RemoveReturnTrackingInput!): RemoveReturnTrackingOutput\n}\n")),(0,m.mdx)("h2",{id:"reference"},"Reference"),(0,m.mdx)("p",null,"The ",(0,m.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/commerce/webapi/graphql-api/index.html#mutation-removeReturnTracking"},(0,m.mdx)("inlineCode",{parentName:"a"},"removeReturnTracking"))," reference provides detailed information about the types and fields defined in this mutation."),(0,m.mdx)("h2",{id:"example-usage"},"Example usage"),(0,m.mdx)("p",null,"The following example removes customer-entered tracking information for the specified return request. In the response, the ",(0,m.mdx)("inlineCode",{parentName:"p"},"shipping")," object is empty because the tracking information has been deleted."),(0,m.mdx)("p",null,(0,m.mdx)("strong",{parentName:"p"},"Request:")),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-graphql"},'\nmutation{\n  removeReturnTracking(input: {\n    return_shipping_tracking_uid: "Mw=="\n  }){\n    return {\n      uid\n      shipping {\n        tracking {\n          carrier {\n            uid\n            label\n          }\n          tracking_number\n          status {\n            text\n            type\n          }\n        }\n      }\n      items {\n        order_item {\n          product_name\n          product_sku\n        }\n      }\n    }\n  }\n}\n')),(0,m.mdx)("p",null,(0,m.mdx)("strong",{parentName:"p"},"Response:")),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "removeReturnTracking": {\n      "return": {\n        "uid": "Mw==",\n        "shipping": {\n          "tracking": []\n        },\n        "items": [\n          {\n            "order_item": {\n              "product_name": "Ryker LumaTech&trade; Tee (Crew-neck)",\n              "product_sku": "MS09-M-Red"\n            }\n          }\n        ]\n      }\n    }\n  }\n}\n')),(0,m.mdx)("h2",{id:"related-topics"},"Related topics"),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("a",{parentName:"li",href:"request-return.md"},(0,m.mdx)("inlineCode",{parentName:"a"},"requestReturn")," mutation")),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("a",{parentName:"li",href:"add-return-comment.md"},(0,m.mdx)("inlineCode",{parentName:"a"},"addReturnComment")," mutation")),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("a",{parentName:"li",href:"add-return-tracking.md"},(0,m.mdx)("inlineCode",{parentName:"a"},"addReturnTracking")," mutation"))))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-graphql-schema-orders-mutations-remove-return-tracking-md-cc9b74f7bb00ce93d4cb.js.map