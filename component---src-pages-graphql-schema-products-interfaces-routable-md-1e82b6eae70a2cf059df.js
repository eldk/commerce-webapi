"use strict";(self.webpackChunkcommerce_webapi=self.webpackChunkcommerce_webapi||[]).push([[9414],{41249:function(e,n,a){a.r(n),a.d(n,{_frontmatter:function(){return i},default:function(){return s}});var t=a(87462),r=a(63366),l=(a(15007),a(64983)),m=a(91515),u=a(51537),o=a(68059),d=["components"],i={},p={_frontmatter:i},c=m.Z;function s(e){var n=e.components,a=(0,r.Z)(e,d);return(0,l.mdx)(c,(0,t.Z)({},p,a,{components:n,mdxType:"MDXLayout"}),(0,l.mdx)("h1",{id:"routableinterface-attributes"},"RoutableInterface attributes"),(0,l.mdx)("p",null,'Some entities are "routable", meaning that they have URLs and can serve as the model for a rendered page. The following implementations of the ',(0,l.mdx)("inlineCode",{parentName:"p"},"RoutableInterface")," allow you to return details in the ",(0,l.mdx)("a",{parentName:"p",href:"../queries/route.md"},(0,l.mdx)("inlineCode",{parentName:"a"},"route")," query"),". ",(0,l.mdx)("inlineCode",{parentName:"p"},"RoutableUrl")," is returned when the URL is not linked to an entity."),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"types/bundle.md"},"BundleProduct")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"../queries/category-list.md#output-attributes"},"CategoryTree")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"../../store/queries/cms-page.md"},"CmsPage")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"types/configurable.md"},"ConfigurableProduct")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"types/downloadable.md"},"DownloadableProduct")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"types/gift-card.md"},"GiftCardProduct")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"types/grouped.md"},"GroupedProduct")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"types/simple.md"},"SimpleProduct")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"types/virtual.md"},"VirtualProduct")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"#routable-url"},"RoutableUrl")," (2.4.7-beta only)")),(0,l.mdx)("h2",{id:"routableinterface-attributes-1"},"RoutableInterface attributes"),(0,l.mdx)(u.Z,{mdxType:"RoutableInterface"}),(0,l.mdx)("h2",{id:"sample-query"},"Sample Query"),(0,l.mdx)("p",null,"The following query returns information about the specified URL key. The query contains multiple fragments so that it can be used for categories, CMS pages, and multiple product types."),(0,l.mdx)("p",null,(0,l.mdx)("strong",{parentName:"p"},"Request:")),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-graphql"},'{\n  route(url: "teton-pullover-hoodie.html") {\n    __typename\n    relative_url\n    redirect_code\n    type\n    ... on SimpleProduct {\n      sku\n      url_key\n      uid\n      url_rewrites {\n        url\n        parameters {\n          name\n          value\n        }\n      }\n    }\n    ... on ConfigurableProduct {\n      sku\n      image {\n        label\n      }\n      uid\n      url_key\n      url_suffix\n      url_rewrites {\n        parameters {\n          name\n          value\n        }\n      }\n      media_gallery {\n        url\n      }\n    }\n    ... on CategoryTree {\n      uid\n      product_count\n      canonical_url\n      products {\n        total_count\n        items {\n          sku\n          uid\n        }\n      }\n    }\n    ... on CmsPage {\n      content\n      content_heading\n      meta_title\n      meta_keywords\n      meta_description\n      page_layout\n      identifier\n      title\n      url_key\n    }\n    ... on GroupedProduct {\n      canonical_url\n      sku\n      items {\n        product {\n          uid\n          url_key\n        }\n      }\n    }\n    ... on BundleProduct {\n      items {\n        sku\n        required\n        type\n        title\n        options {\n          uid\n          is_default\n          can_change_quantity\n          price_type\n          quantity\n        }\n      }\n    }\n  }\n}\n')),(0,l.mdx)("p",null,(0,l.mdx)("strong",{parentName:"p"},"Response:")),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "route": {\n      "__typename": "ConfigurableProduct",\n      "relative_url": "teton-pullover-hoodie.html",\n      "redirect_code": 0,\n      "type": "PRODUCT",\n      "sku": "MH02",\n      "image": {\n        "label": "Teton Pullover Hoodie"\n      },\n      "uid": "ODY=",\n      "url_key": "teton-pullover-hoodie",\n      "url_suffix": ".html",\n      "url_rewrites": [\n        {\n          "parameters": [\n            {\n              "name": "id",\n              "value": "86"\n            }\n          ]\n        },\n        {\n          "parameters": [\n            {\n              "name": "id",\n              "value": "86"\n            },\n            {\n              "name": "category",\n              "value": "16"\n            }\n          ]\n        },\n        {\n          "parameters": [\n            {\n              "name": "id",\n              "value": "86"\n            },\n            {\n              "name": "category",\n              "value": "13"\n            }\n          ]\n        }\n      ],\n      "media_gallery": [\n        {\n          "url": "http://example.com/media/catalog/product/cache/3103a735c131a485a1ff51c24439c39b/m/h/mh02-black_main_1.jpg"\n        },\n        {\n          "url": "http://example.com/media/catalog/product/cache/3103a735c131a485a1ff51c24439c39b/m/h/mh02-black_alt1_1.jpg"\n        },\n        {\n          "url": "http://example.com/media/catalog/product/cache/3103a735c131a485a1ff51c24439c39b/m/h/mh02-black_back_1.jpg"\n        }\n      ]\n    }\n  }\n}\n')),(0,l.mdx)("h2",{id:"routable-url"},"Routable URL"),(0,l.mdx)(o.Z,{mdxType:"BetaNote"}),(0,l.mdx)("p",null,(0,l.mdx)("inlineCode",{parentName:"p"},"RoutableUrl")," is the default implementation of RoutableInterface. This type is returned when the URL is not linked to a product or CMS page or to a category. As a result, the ",(0,l.mdx)("inlineCode",{parentName:"p"},"RoutableUrl.type")," field always returns ",(0,l.mdx)("inlineCode",{parentName:"p"},"null"),"."),(0,l.mdx)("h3",{id:"example"},"Example"),(0,l.mdx)("p",null,"In the following example, an internal URL ",(0,l.mdx)("inlineCode",{parentName:"p"},"support.html")," is configured to redirect to an external URL ",(0,l.mdx)("inlineCode",{parentName:"p"},"https://support.example.com/")," using URL Rewrite."),(0,l.mdx)("p",null,(0,l.mdx)("strong",{parentName:"p"},"Request:")),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-graphql"},'{\n  route(url: "support.html") {\n    __typename\n    relative_url\n    redirect_code\n    type\n  }\n}\n')),(0,l.mdx)("p",null,(0,l.mdx)("strong",{parentName:"p"},"Response:")),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "route": {\n      "__typename": "RoutableUrl",\n      "relative_url": "https://support.example.com/",\n      "redirect_code": 302,\n      "type": null\n    }\n  }\n}\n')))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-graphql-schema-products-interfaces-routable-md-1e82b6eae70a2cf059df.js.map