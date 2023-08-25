"use strict";(self.webpackChunkcommerce_webapi=self.webpackChunkcommerce_webapi||[]).push([[9207],{1505:function(e,n,t){t.r(n),t.d(n,{_frontmatter:function(){return l},default:function(){return h}});var i,a=t(87462),s=t(63366),m=(t(15007),t(64983)),o=t(91515),d=["components"],l={},r=(i="InlineAlert",function(e){return console.warn("Component "+i+" was not imported, exported, or provided by MDXProvider as global scope"),(0,m.mdx)("div",e)}),p={_frontmatter:l},u=o.Z;function h(e){var n=e.components,t=(0,s.Z)(e,d);return(0,m.mdx)(u,(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,m.mdx)("h1",{id:"updatewishlist-mutation"},"updateWishlist mutation"),(0,m.mdx)("p",null,"The ",(0,m.mdx)("inlineCode",{parentName:"p"},"updateWishlist")," mutation updates the properties of a wish list. Adobe Commerce allows customers to change the name and visibility of wish lists."),(0,m.mdx)(r,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,m.mdx)("p",null,"Use the ",(0,m.mdx)("a",{parentName:"p",href:"update-products.md"},"updateProductsInWishlist mutation")," to modify the contents of a wish list."),(0,m.mdx)("p",null,"This mutation requires a valid ",(0,m.mdx)("a",{parentName:"p",href:"../../customer/mutations/generate-token.md"},"customer authentication token"),"."),(0,m.mdx)("h2",{id:"syntax"},"Syntax"),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-graphql"},"mutation {\n  updateWishlist(\n    wishlistUid: ID!\n    name: String\n    visibility: WishlistVisibilityEnum\n  ) {\n    UpdateWishlistOutput\n  }\n}\n")),(0,m.mdx)("h2",{id:"reference"},"Reference"),(0,m.mdx)("p",null,"The ",(0,m.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/commerce/webapi/graphql-api/index.html#mutation-updateWishlist"},(0,m.mdx)("inlineCode",{parentName:"a"},"updateWishlist"))," reference provides detailed information about the types and fields defined in this mutation."),(0,m.mdx)("h2",{id:"example-usage"},"Example usage"),(0,m.mdx)("p",null,"The following example changes the name of an existing wish list."),(0,m.mdx)("p",null,(0,m.mdx)("strong",{parentName:"p"},"Request:")),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-graphql"},'mutation {\n  updateWishlist(\n    wishlistUid: 4\n    name: "My favorite things"\n    visibility: PUBLIC\n  ) {\n    name\n    uid\n    visibility\n  }\n}\n')),(0,m.mdx)("p",null,(0,m.mdx)("strong",{parentName:"p"},"Response:")),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "updateWishlist": {\n      "name": "My favorite things",\n      "uid": "4",\n      "visibility": "PUBLIC"\n    }\n  }\n}\n')))}h.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-graphql-schema-wishlist-mutations-update-md-9119f95ec984e1e9ee2e.js.map