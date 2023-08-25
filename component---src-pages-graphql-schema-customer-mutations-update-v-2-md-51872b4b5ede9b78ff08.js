"use strict";(self.webpackChunkcommerce_webapi=self.webpackChunkcommerce_webapi||[]).push([[3044],{74336:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return x},default:function(){return g}});var n,r=a(87462),m=a(63366),d=(a(15007),a(64983)),l=a(91515),i=a(71558),o=a(67275),u=a(29029),p=a(68059),s=["components"],x={},N=(n="TabsBlock",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),(0,d.mdx)("div",e)}),c={_frontmatter:x},h=l.Z;function g(e){var t=e.components,a=(0,m.Z)(e,s);return(0,d.mdx)(h,(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,d.mdx)("h1",{id:"updatecustomerv2-mutation"},"updateCustomerV2 mutation"),(0,d.mdx)("p",null,"The ",(0,d.mdx)("inlineCode",{parentName:"p"},"updateCustomerV2")," mutation updates the personal information in an existing customer account. Use the ",(0,d.mdx)("a",{parentName:"p",href:"update-email.md"},(0,d.mdx)("inlineCode",{parentName:"a"},"updateCustomerEmail")," mutation")," to update the customer's email address."),(0,d.mdx)("p",null,"The ",(0,d.mdx)("inlineCode",{parentName:"p"},"updateCustomerV2")," mutation supersedes the ",(0,d.mdx)("inlineCode",{parentName:"p"},"updateCustomer")," mutation as the means to update a customer account. The input objects differ between these two mutations. The ",(0,d.mdx)("inlineCode",{parentName:"p"},"updateCustomer")," mutation required the ",(0,d.mdx)("inlineCode",{parentName:"p"},"CustomerInput")," object, as did the ",(0,d.mdx)("inlineCode",{parentName:"p"},"createCustomer")," mutation. Updating a customer does not require any specific attribute, while several attributes are required when you create a customer. You could not determine this by looking at the schema for those mutations. The ",(0,d.mdx)("inlineCode",{parentName:"p"},"updateCustomerV2")," mutation requires the ",(0,d.mdx)("inlineCode",{parentName:"p"},"CustomerUpdateInput")," object, which it does not share with the ",(0,d.mdx)("a",{parentName:"p",href:"create-v2.md"},(0,d.mdx)("inlineCode",{parentName:"a"},"createCustomerV2")," mutation"),"."),(0,d.mdx)("p",null,"To return or modify information about a customer, we recommend you use customer tokens in the header of your GraphQL calls. However, you also can use ",(0,d.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/commerce/webapi/get-started/authentication/gs-authentication-session"},"session authentication"),"."),(0,d.mdx)("h2",{id:"syntax"},"Syntax"),(0,d.mdx)("p",null,(0,d.mdx)("inlineCode",{parentName:"p"},"mutation: {updateCustomerV2(input: CustomerUpdateInput!) {CustomerOutput}}")),(0,d.mdx)("h2",{id:"example-usage"},"Example usage"),(0,d.mdx)(N,{orientation:"horizontal",slots:"heading, content",repeat:"2",theme:"light",mdxType:"TabsBlock"}),(0,d.mdx)("h3",{id:"246"},"2.4.6"),(0,d.mdx)(o.Z,{mdxType:"Example246"}),(0,d.mdx)("h3",{id:"247-beta"},"2.4.7-beta"),(0,d.mdx)(u.Z,{mdxType:"Example247"}),(0,d.mdx)("h2",{id:"input-attributes"},"Input attributes"),(0,d.mdx)("p",null,"The following table lists the attributes you can use as input for the ",(0,d.mdx)("inlineCode",{parentName:"p"},"updateCustomerV2")," mutation."),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"Attribute"),(0,d.mdx)("th",{parentName:"tr",align:null},"Data Type"),(0,d.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"allow_remote_shopping_assistance")),(0,d.mdx)("td",{parentName:"tr",align:null},"Boolean"),(0,d.mdx)("td",{parentName:"tr",align:null},"Indicates whether the customer has enabled remote shopping assistance")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"custom_attributes")),(0,d.mdx)("td",{parentName:"tr",align:null},"[AttributeValueInput!]"),(0,d.mdx)("td",{parentName:"tr",align:null},"The customer's custom attributes (2.4.7-beta only)")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"date_of_birth")),(0,d.mdx)("td",{parentName:"tr",align:null},"String"),(0,d.mdx)("td",{parentName:"tr",align:null},"The customer's date of birth. In keeping with current security and privacy best practices, be sure you are aware of any potential legal and security risks associated with the storage of customers' full date of birth (month, day, year) along with other personal identifiers, such as full name, before collecting or processing such data.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"dob")),(0,d.mdx)("td",{parentName:"tr",align:null},"String"),(0,d.mdx)("td",{parentName:"tr",align:null},"Deprecated. Use ",(0,d.mdx)("inlineCode",{parentName:"td"},"date_of_birth")," instead. The customer's date of birth")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"firstname")),(0,d.mdx)("td",{parentName:"tr",align:null},"String"),(0,d.mdx)("td",{parentName:"tr",align:null},"The customer's first name")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"gender")),(0,d.mdx)("td",{parentName:"tr",align:null},"Int"),(0,d.mdx)("td",{parentName:"tr",align:null},"The customer's gender (Male - 1, Female - 2)")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"is_subscribed")),(0,d.mdx)("td",{parentName:"tr",align:null},"Boolean"),(0,d.mdx)("td",{parentName:"tr",align:null},"Indicates whether the customer subscribes to the store's newsletter")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"lastname")),(0,d.mdx)("td",{parentName:"tr",align:null},"String"),(0,d.mdx)("td",{parentName:"tr",align:null},"The customer's last name")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"middlename")),(0,d.mdx)("td",{parentName:"tr",align:null},"String"),(0,d.mdx)("td",{parentName:"tr",align:null},"The customer's middle name")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"password")),(0,d.mdx)("td",{parentName:"tr",align:null},"String"),(0,d.mdx)("td",{parentName:"tr",align:null},"The customer's password")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"prefix")),(0,d.mdx)("td",{parentName:"tr",align:null},"String"),(0,d.mdx)("td",{parentName:"tr",align:null},"An honorific, such as Dr., Mr., or Mrs.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"suffix")),(0,d.mdx)("td",{parentName:"tr",align:null},"String"),(0,d.mdx)("td",{parentName:"tr",align:null},"A value such as Sr., Jr., or III")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"taxvat")),(0,d.mdx)("td",{parentName:"tr",align:null},"String"),(0,d.mdx)("td",{parentName:"tr",align:null},"The customer's Tax/VAT number (for corporate customers)")))),(0,d.mdx)("p",null,"The ",(0,d.mdx)("inlineCode",{parentName:"p"},"AttributeValueInput")," object contains the following attributes:"),(0,d.mdx)(p.Z,{mdxType:"BetaNote"}),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"Attribute"),(0,d.mdx)("th",{parentName:"tr",align:null},"Data Type"),(0,d.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"attribute_code")),(0,d.mdx)("td",{parentName:"tr",align:null},"String!"),(0,d.mdx)("td",{parentName:"tr",align:null},"The code of the attribute")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"selected_options")),(0,d.mdx)("td",{parentName:"tr",align:null},"[AttributeInputSelectedOption!]"),(0,d.mdx)("td",{parentName:"tr",align:null},"An array containing selected options for a select or multiselect attribute")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"value")),(0,d.mdx)("td",{parentName:"tr",align:null},"String"),(0,d.mdx)("td",{parentName:"tr",align:null},"The value assigned to the attribute")))),(0,d.mdx)("p",null,"The ",(0,d.mdx)("inlineCode",{parentName:"p"},"AttributeInputSelectedOption")," specifies selected option for dropdown or multiselect attribute value.\nThis object contains the following attributes:"),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"Attribute"),(0,d.mdx)("th",{parentName:"tr",align:null},"Data Type"),(0,d.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"value")),(0,d.mdx)("td",{parentName:"tr",align:null},"String!"),(0,d.mdx)("td",{parentName:"tr",align:null},"The attribute option value")))),(0,d.mdx)("h2",{id:"output-attributes"},"Output attributes"),(0,d.mdx)("p",null,"The ",(0,d.mdx)("inlineCode",{parentName:"p"},"CustomerOutput")," object contains the ",(0,d.mdx)("inlineCode",{parentName:"p"},"Customer")," object."),(0,d.mdx)("p",null,"The following table lists the top-level attributes of the ",(0,d.mdx)("inlineCode",{parentName:"p"},"customer")," object. See the ",(0,d.mdx)("a",{parentName:"p",href:"../../customer/queries/customer.md"},(0,d.mdx)("inlineCode",{parentName:"a"},"customer")," query")," for complete details about this object."),(0,d.mdx)(i.Z,{mdxType:"Customer"}),(0,d.mdx)("h2",{id:"related-topics"},"Related topics"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("a",{parentName:"li",href:"../../customer/queries/customer.md"},"customer query")),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("a",{parentName:"li",href:"create-v2.md"},"createCustomerV2 mutation")),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("a",{parentName:"li",href:"create-address.md"},"createCustomerAddress mutation")),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("a",{parentName:"li",href:"update-address.md"},"updateCustomerAddress mutation")),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("a",{parentName:"li",href:"update-email.md"},"updateCustomerEmail mutation")),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("a",{parentName:"li",href:"delete-address.md"},"deleteCustomerAddress mutation"))))}g.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-graphql-schema-customer-mutations-update-v-2-md-51872b4b5ede9b78ff08.js.map