"use strict";(self.webpackChunkcommerce_webapi=self.webpackChunkcommerce_webapi||[]).push([[9710],{72294:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return u},default:function(){return s}});var m=a(87462),n=a(63366),r=(a(15007),a(64983)),l=a(91515),d=a(77958),o=["components"],u={},i={_frontmatter:u},p=l.Z;function s(e){var t=e.components,a=(0,n.Z)(e,o);return(0,r.mdx)(p,(0,m.Z)({},i,a,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"updatecustomeremail-mutation"},"updateCustomerEmail mutation"),(0,r.mdx)("p",null,"Use the ",(0,r.mdx)("inlineCode",{parentName:"p"},"updateCustomerEmail")," mutation to change the email address for the logged-in customer."),(0,r.mdx)("p",null,"To return or modify information about a customer, we recommend you use customer tokens in the header of your GraphQL calls. However, you also can use ",(0,r.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/commerce/webapi/get-started/authentication/gs-authentication-session"},"session authentication"),"."),(0,r.mdx)("h2",{id:"syntax"},"Syntax"),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"mutation: updateCustomerEmail(email: String! password: String!): CustomerOutput")),(0,r.mdx)("h2",{id:"example-usage"},"Example usage"),(0,r.mdx)("p",null,"The following call updates the customer's email address."),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Request:")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-graphql"},'mutation {\n  updateCustomerEmail(email: "new_email@example.com", password: "roni_cost3@example.com") {\n    customer {\n      email\n    }\n  }\n}\n')),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Response:")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "updateCustomerEmail": {\n      "customer": {\n        "email": "new_email@example.com"\n      }\n    }\n  }\n}\n')),(0,r.mdx)("h2",{id:"input-attributes"},"Input attributes"),(0,r.mdx)("p",null,"The ",(0,r.mdx)("inlineCode",{parentName:"p"},"updateCustomerEmail")," mutation requires the following inputs:"),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Attribute"),(0,r.mdx)("th",{parentName:"tr",align:null},"Data Type"),(0,r.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"email")),(0,r.mdx)("td",{parentName:"tr",align:null},"String!"),(0,r.mdx)("td",{parentName:"tr",align:null},"The customer's new email address")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"password")),(0,r.mdx)("td",{parentName:"tr",align:null},"String!"),(0,r.mdx)("td",{parentName:"tr",align:null},"The customer's password")))),(0,r.mdx)("h2",{id:"output-attributes"},"Output attributes"),(0,r.mdx)("p",null,"The ",(0,r.mdx)("inlineCode",{parentName:"p"},"updateCustomerEmail")," mutation returns the ",(0,r.mdx)("inlineCode",{parentName:"p"},"customer")," object."),(0,r.mdx)("p",null,"The following table lists the top-level attributes of the ",(0,r.mdx)("inlineCode",{parentName:"p"},"customer")," object. See the ",(0,r.mdx)("a",{parentName:"p",href:"../../customer/queries/customer.md"},(0,r.mdx)("inlineCode",{parentName:"a"},"customer")," query")," for complete details about this object."),(0,r.mdx)(d.default,{mdxType:"Customer"}),(0,r.mdx)("h2",{id:"related-topics"},"Related topics"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"../queries/customer.md"},"customer query")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"create-v2.md"},"updateCustomerV2 mutation"))))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-graphql-schema-customer-mutations-update-email-md-01746d4a6be9f47c28b1.js.map