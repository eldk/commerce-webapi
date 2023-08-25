"use strict";(self.webpackChunkcommerce_webapi=self.webpackChunkcommerce_webapi||[]).push([[3048],{44629:function(t,e,a){a.r(e),a.d(e,{_frontmatter:function(){return o},default:function(){return x}});var n=a(87462),r=a(63366),d=(a(15007),a(64983)),m=a(91515),l=a(1741),i=["components"],o={},p={_frontmatter:o},u=m.Z;function x(t){var e=t.components,a=(0,r.Z)(t,i);return(0,d.mdx)(u,(0,n.Z)({},p,a,{components:e,mdxType:"MDXLayout"}),(0,d.mdx)("h1",{id:"categoryinterface-attributes"},"CategoryInterface attributes"),(0,d.mdx)("p",null,(0,d.mdx)("inlineCode",{parentName:"p"},"CategoryInterface")," defines attributes that can be returned in the ",(0,d.mdx)("a",{parentName:"p",href:"../queries/category-list.md"},(0,d.mdx)("inlineCode",{parentName:"a"},"categoryList")," query"),", ",(0,d.mdx)("a",{parentName:"p",href:"../queries/categories.md"},(0,d.mdx)("inlineCode",{parentName:"a"},"categories")," query"),", and the ",(0,d.mdx)("a",{parentName:"p",href:"../queries/products.md"},(0,d.mdx)("inlineCode",{parentName:"a"},"products")," query"),"."),(0,d.mdx)("h2",{id:"categoryinterface-attributes-1"},"CategoryInterface attributes"),(0,d.mdx)("p",null,"The following table defines the ",(0,d.mdx)("inlineCode",{parentName:"p"},"CategoryInterface")," attributes and objects."),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"Attribute"),(0,d.mdx)("th",{parentName:"tr",align:null},"Type"),(0,d.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"breadcrumbs")),(0,d.mdx)("td",{parentName:"tr",align:null},"[Breadcrumb]"),(0,d.mdx)("td",{parentName:"tr",align:null},"A Breadcrumb object contains information the categories that comprise the breadcrumb trail for the specified category")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"canonical_url")),(0,d.mdx)("td",{parentName:"tr",align:null},"String"),(0,d.mdx)("td",{parentName:"tr",align:null},"The relative canonical URL. This value is returned only if the system setting ",(0,d.mdx)("strong",{parentName:"td"},"Use Canonical Link Meta Tag For Categories")," is enabled")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"cms_block")),(0,d.mdx)("td",{parentName:"tr",align:null},"CmsBlock"),(0,d.mdx)("td",{parentName:"tr",align:null},"Contains a category CMS block. This attribute is defined in the ",(0,d.mdx)("inlineCode",{parentName:"td"},"CatalogCmsGraphQl")," module")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"created_at")),(0,d.mdx)("td",{parentName:"tr",align:null},"String"),(0,d.mdx)("td",{parentName:"tr",align:null},"Deprecated. This field should not be used on the storefront. Timestamp indicating when the category was created")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"default_sort_by")),(0,d.mdx)("td",{parentName:"tr",align:null},"String"),(0,d.mdx)("td",{parentName:"tr",align:null},"The attribute to use for sorting")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"description")),(0,d.mdx)("td",{parentName:"tr",align:null},"String"),(0,d.mdx)("td",{parentName:"tr",align:null},"An optional description of the category")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"id")),(0,d.mdx)("td",{parentName:"tr",align:null},"Int"),(0,d.mdx)("td",{parentName:"tr",align:null},"Deprecated. Use ",(0,d.mdx)("inlineCode",{parentName:"td"},"uid")," instead. An ID that uniquely identifies the category")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"level")),(0,d.mdx)("td",{parentName:"tr",align:null},"Int"),(0,d.mdx)("td",{parentName:"tr",align:null},"Indicates the depth of the category within the tree")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"name")),(0,d.mdx)("td",{parentName:"tr",align:null},"String"),(0,d.mdx)("td",{parentName:"tr",align:null},"The display name of the category")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"path_in_store")),(0,d.mdx)("td",{parentName:"tr",align:null},"String"),(0,d.mdx)("td",{parentName:"tr",align:null},"Category path in the store")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"path")),(0,d.mdx)("td",{parentName:"tr",align:null},"String"),(0,d.mdx)("td",{parentName:"tr",align:null},"The path to the category, as a string of category IDs, separated by slashes (/). For example, 1/2/20")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"position")),(0,d.mdx)("td",{parentName:"tr",align:null},"Int"),(0,d.mdx)("td",{parentName:"tr",align:null},"The position of the category relative to other categories at the same level in tree")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"product_count")),(0,d.mdx)("td",{parentName:"tr",align:null},"Int"),(0,d.mdx)("td",{parentName:"tr",align:null},"The number of products in the category that are marked as visible. By default, in complex products, parent products are visible, but their child products are not")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"products(<attributes>)")),(0,d.mdx)("td",{parentName:"tr",align:null},"CategoryProducts"),(0,d.mdx)("td",{parentName:"tr",align:null},"The list of products assigned to the category")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"staged")),(0,d.mdx)("td",{parentName:"tr",align:null},"Boolean!"),(0,d.mdx)("td",{parentName:"tr",align:null},"Indicates whether the category is staged for a future campaign")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"uid")),(0,d.mdx)("td",{parentName:"tr",align:null},"ID!"),(0,d.mdx)("td",{parentName:"tr",align:null},"The unique ID for an object implementing ",(0,d.mdx)("inlineCode",{parentName:"td"},"CategoryInterface"))),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"updated_at")),(0,d.mdx)("td",{parentName:"tr",align:null},"String"),(0,d.mdx)("td",{parentName:"tr",align:null},"Deprecated. This field should not be used on the storefront. Timestamp indicating when the category was updated")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"url_key")),(0,d.mdx)("td",{parentName:"tr",align:null},"String"),(0,d.mdx)("td",{parentName:"tr",align:null},"The URL key assigned to the category")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"url_path")),(0,d.mdx)("td",{parentName:"tr",align:null},"String"),(0,d.mdx)("td",{parentName:"tr",align:null},"The URL path assigned to the category")))),(0,d.mdx)("h3",{id:"breadcrumb-object"},"Breadcrumb object"),(0,d.mdx)("p",null,"A breadcrumb trail is a set of links that shows customers where they are in relation to other pages in the store."),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"Attribute"),(0,d.mdx)("th",{parentName:"tr",align:null},"Data type"),(0,d.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"category_id")),(0,d.mdx)("td",{parentName:"tr",align:null},"Int"),(0,d.mdx)("td",{parentName:"tr",align:null},"Deprecated. Use ",(0,d.mdx)("inlineCode",{parentName:"td"},"category_uid")," instead. An ID that uniquely identifies the category")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"category_level")),(0,d.mdx)("td",{parentName:"tr",align:null},"Int"),(0,d.mdx)("td",{parentName:"tr",align:null},"Indicates the depth of the category within the tree")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"category_name")),(0,d.mdx)("td",{parentName:"tr",align:null},"String"),(0,d.mdx)("td",{parentName:"tr",align:null},"The display name of the category")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"category_uid")),(0,d.mdx)("td",{parentName:"tr",align:null},"ID!"),(0,d.mdx)("td",{parentName:"tr",align:null},"The unique ID for a ",(0,d.mdx)("inlineCode",{parentName:"td"},"Breadcrumb")," object")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"category_url_key")),(0,d.mdx)("td",{parentName:"tr",align:null},"String"),(0,d.mdx)("td",{parentName:"tr",align:null},"The url key assigned to the category")))),(0,d.mdx)("h3",{id:"categoryproducts-object"},"CategoryProducts object"),(0,d.mdx)("p",null,"The ",(0,d.mdx)("inlineCode",{parentName:"p"},"products")," attribute can contain the following attributes:"),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"Attribute"),(0,d.mdx)("th",{parentName:"tr",align:null},"Data type"),(0,d.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"currentPage")),(0,d.mdx)("td",{parentName:"tr",align:null},"Int"),(0,d.mdx)("td",{parentName:"tr",align:null},"Specifies which page of results to return. The default value is 1")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"pageSize")),(0,d.mdx)("td",{parentName:"tr",align:null},"Int"),(0,d.mdx)("td",{parentName:"tr",align:null},"Specifies the maximum number of results to return at once. This attribute is optional. The default value is 20")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"sort")),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"ProductSortInput")),(0,d.mdx)("td",{parentName:"tr",align:null},"Specifies which attribute to sort on, and whether to return the results in ascending or descending order. ",(0,d.mdx)("a",{parentName:"td",href:"../../../usage/index.md"},"Searches and pagination in GraphQL")," describes sort orders")))),(0,d.mdx)("p",null,"The ",(0,d.mdx)("inlineCode",{parentName:"p"},"CategoryProducts")," object contains the following attributes:"),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"Attribute"),(0,d.mdx)("th",{parentName:"tr",align:null},"Data type"),(0,d.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"items")),(0,d.mdx)("td",{parentName:"tr",align:null},"[ProductInterface]"),(0,d.mdx)("td",{parentName:"tr",align:null},"An array of products that are assigned to the category. See ",(0,d.mdx)("a",{parentName:"td",href:"index.md"},"ProductInterface")," for more information")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"page_info")),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"SearchResultPageInfo")),(0,d.mdx)("td",{parentName:"tr",align:null},"An object that includes the ",(0,d.mdx)("inlineCode",{parentName:"td"},"page_info")," and ",(0,d.mdx)("inlineCode",{parentName:"td"},"currentPage")," values specified in the query")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"total_count")),(0,d.mdx)("td",{parentName:"tr",align:null},"Int"),(0,d.mdx)("td",{parentName:"tr",align:null},"The number of products in the category that are marked as visible. By default, in complex products, parent products are visible, but their child products are not")))),(0,d.mdx)("h3",{id:"cmsblock-attributes"},"CmsBlock attributes"),(0,d.mdx)(l.Z,{mdxType:"CmsBlockObject"}))}x.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-graphql-schema-products-interfaces-category-md-31a2744caf85a76012fc.js.map