"use strict";(self.webpackChunkcommerce_webapi=self.webpackChunkcommerce_webapi||[]).push([[7525],{96781:function(e,n,t){t.r(n),t.d(n,{_frontmatter:function(){return s},default:function(){return c}});var a,r=t(87462),o=t(63366),m=(t(15007),t(64983)),d=t(91515),l=t(79770),i=t(91971),p=["components"],s={},u=(a="InlineAlert",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,m.mdx)("div",e)}),x={_frontmatter:s},y=d.Z;function c(e){var n=e.components,t=(0,o.Z)(e,p);return(0,m.mdx)(y,(0,r.Z)({},x,t,{components:n,mdxType:"MDXLayout"}),(0,m.mdx)("h1",{id:"updatecompanyrole-mutation"},"updateCompanyRole mutation"),(0,m.mdx)("p",null,"Use the ",(0,m.mdx)("inlineCode",{parentName:"p"},"updateCompanyRole")," mutation to update the company role and permissions."),(0,m.mdx)("p",null,"You can get the role ID and the list of all resources defined within the company using the ",(0,m.mdx)("a",{parentName:"p",href:"../queries/company.md"},(0,m.mdx)("inlineCode",{parentName:"a"},"company"))," query."),(0,m.mdx)(l.Z,{mdxType:"B2BRoles"}),(0,m.mdx)("h2",{id:"syntax"},"Syntax"),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-graphql"},"mutation {\n    updateCompanyRole(\n        input: CompanyRoleUpdateInput!\n    ) {\n        UpdateCompanyRoleOutput\n    }\n}\n")),(0,m.mdx)("h2",{id:"example-usage"},"Example usage"),(0,m.mdx)("p",null,"The following example updates the name of a company role."),(0,m.mdx)("p",null,(0,m.mdx)("strong",{parentName:"p"},"Request:")),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-graphql"},'mutation {\n  updateCompanyRole(\n    input: {\n      id: "Mg=="\n      name: "Company Admin (updated)"\n    }\n  ) {\n    role {\n      id\n      name\n      permissions {\n        id\n        text\n        sort_order\n        children {\n          id\n          text\n          sort_order\n          children {\n            id\n            text\n            sort_order\n          }\n        }\n      }\n    }\n  }\n}\n')),(0,m.mdx)("p",null,(0,m.mdx)("strong",{parentName:"p"},"Response:")),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "updateCompanyRole": {\n      "role": {\n        "id": "Mg==",\n        "name": "Company Admin (updated)",\n        "permissions": [\n          {\n            "id": "Magento_Company::index",\n            "text": "All",\n            "sort_order": 100,\n            "children": [\n              {\n                "id": "Magento_Company::view",\n                "text": "Company Profile",\n                "sort_order": 100,\n                "children": [\n                  {\n                    "id": "Magento_Company::view_account",\n                    "text": "Account Information (View)",\n                    "sort_order": 100\n                  },\n                  {\n                    "id": "Magento_Company::view_address",\n                    "text": "Legal Address (View)",\n                    "sort_order": 200\n                  },\n                  {\n                    "id": "Magento_Company::contacts",\n                    "text": "Contacts (View)",\n                    "sort_order": 300\n                  },\n                  {\n                    "id": "Magento_Company::payment_information",\n                    "text": "Payment Information (View)",\n                    "sort_order": 400\n                  },\n                  {\n                    "id": "Magento_Company::shipping_information",\n                    "text": "Shipping Information (View)",\n                    "sort_order": 450\n                  }\n                ]\n              },\n              {\n                "id": "Magento_Company::user_management",\n                "text": "Company User Management",\n                "sort_order": 200,\n                "children": [\n                  {\n                    "id": "Magento_Company::roles_view",\n                    "text": "View roles and permissions",\n                    "sort_order": 100\n                  },\n                  {\n                    "id": "Magento_Company::users_view",\n                    "text": "View users and teams",\n                    "sort_order": 300\n                  }\n                ]\n              },\n              {\n                "id": "Magento_Company::credit",\n                "text": "Company Credit",\n                "sort_order": 500,\n                "children": [\n                  {\n                    "id": "Magento_Company::credit_history",\n                    "text": "View",\n                    "sort_order": 500\n                  }\n                ]\n              }\n            ]\n          }\n        ]\n      }\n    }\n  }\n}\n')),(0,m.mdx)("p",null,'You can change or add permissions to the company role using "permissions" attribute.'),(0,m.mdx)(u,{variant:"warning",slots:"text",mdxType:"InlineAlert"}),(0,m.mdx)("p",null,'To add new or change current permissions, you also must send all the current permissions every time you use the "permissions" attribute. The company role permissions are rewritten completely from the "permissions" attribute.'),(0,m.mdx)("h2",{id:"input-attributes"},"Input attributes"),(0,m.mdx)("p",null,"The ",(0,m.mdx)("inlineCode",{parentName:"p"},"CompanyRoleUpdateInput")," input object defines the company role data."),(0,m.mdx)("h3",{id:"companyroleupdateinput-attributes"},"CompanyRoleUpdateInput attributes"),(0,m.mdx)("p",null,"The ",(0,m.mdx)("inlineCode",{parentName:"p"},"CompanyRoleUpdateInput")," object contains the following attributes:"),(0,m.mdx)("table",null,(0,m.mdx)("thead",{parentName:"table"},(0,m.mdx)("tr",{parentName:"thead"},(0,m.mdx)("th",{parentName:"tr",align:null},"Attribute"),(0,m.mdx)("th",{parentName:"tr",align:null},"Data Type"),(0,m.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,m.mdx)("tbody",{parentName:"table"},(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"id")),(0,m.mdx)("td",{parentName:"tr",align:null},"ID!"),(0,m.mdx)("td",{parentName:"tr",align:null},"The encoded company role ID for updating")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"name")),(0,m.mdx)("td",{parentName:"tr",align:null},"String"),(0,m.mdx)("td",{parentName:"tr",align:null},"Role name.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"permissions")),(0,m.mdx)("td",{parentName:"tr",align:null},"[String!]"),(0,m.mdx)("td",{parentName:"tr",align:null},"A list of role permission resources.")))),(0,m.mdx)("h2",{id:"output-attributes"},"Output attributes"),(0,m.mdx)("p",null,"The ",(0,m.mdx)("inlineCode",{parentName:"p"},"UpdateCompanyRoleOutput")," output object contains the following attribute:"),(0,m.mdx)("table",null,(0,m.mdx)("thead",{parentName:"table"},(0,m.mdx)("tr",{parentName:"thead"},(0,m.mdx)("th",{parentName:"tr",align:null},"Attribute"),(0,m.mdx)("th",{parentName:"tr",align:null},"Data Type"),(0,m.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,m.mdx)("tbody",{parentName:"table"},(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"role")),(0,m.mdx)("td",{parentName:"tr",align:null},"CompanyRole!"),(0,m.mdx)("td",{parentName:"tr",align:null},"Contains company role data")))),(0,m.mdx)("h3",{id:"companyrole-attributes"},"CompanyRole attributes"),(0,m.mdx)(i.Z,{mdxType:"CompanyRole"}),(0,m.mdx)("h2",{id:"errors"},"Errors"),(0,m.mdx)("table",null,(0,m.mdx)("thead",{parentName:"table"},(0,m.mdx)("tr",{parentName:"thead"},(0,m.mdx)("th",{parentName:"tr",align:null},"Error"),(0,m.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,m.mdx)("tbody",{parentName:"table"},(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"User role with this name already exists. Enter a different name to save this role.")),(0,m.mdx)("td",{parentName:"tr",align:null},"The company cannot have multiple company roles with the same name.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},'Unable to set "allow" for the resource because its parent resource(s) is set to "deny".')),(0,m.mdx)("td",{parentName:"tr",align:null},"To allow permission for the company role, you must allow all the permissions of the parent tree.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"No such entity with roleId = xxx")),(0,m.mdx)("td",{parentName:"tr",align:null},"The company role with ID ",(0,m.mdx)("inlineCode",{parentName:"td"},"xxx")," doesn't exist.")))))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-graphql-schema-b-2-b-company-mutations-update-role-md-cd8d8a26a381334899e9.js.map