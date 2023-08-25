"use strict";(self.webpackChunkcommerce_webapi=self.webpackChunkcommerce_webapi||[]).push([[9214],{38578:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return i},default:function(){return g}});var a=n(87462),d=n(63366),o=(n(15007),n(64983)),l=n(91515),r=n(68059),m=["components"],i={},s=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.mdx)("div",t)}},p=s("InlineAlert"),u=s("CodeBlock"),c={_frontmatter:i},x=l.Z;function g(e){var t=e.components,n=(0,d.Z)(e,m);return(0,o.mdx)(x,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"manage-negotiable-quotes"},"Manage negotiable quotes"),(0,o.mdx)("p",null,"This topic describes the API requests required to initiate a negotiable quote and to prepare it to be converted to an order."),(0,o.mdx)(p,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,o.mdx)("p",null,"All negotiable quote requests require an admin authorization token."),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"REST Endpoints:")),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-json"},"POST /V1/negotiableQuote/request\nPOST /V1/negotiableQuote/draft\nPOST /V1/negotiableQuote/submitToCustomer\nPOST /V1/negotiableQuote/decline\nPOST /V1/negotiableQuote/pricesUpdated\nGET /V1/negotiableQuote/:quoteId/comments\nGET /V1/negotiableQuote/attachmentContent\nPUT /V1/negotiableQuote/:quoteId/shippingMethod\n")),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"NegotiableQuoteManagementInterface Parameters:")),(0,o.mdx)("p",null,"The following table lists the parameters defined in ",(0,o.mdx)("inlineCode",{parentName:"p"},"CompanyInterface"),"."),(0,o.mdx)("table",null,(0,o.mdx)("thead",{parentName:"table"},(0,o.mdx)("tr",{parentName:"thead"},(0,o.mdx)("th",{parentName:"tr",align:null},"Name"),(0,o.mdx)("th",{parentName:"tr",align:null},"Description"),(0,o.mdx)("th",{parentName:"tr",align:null},"Format"),(0,o.mdx)("th",{parentName:"tr",align:null},"Requirements"))),(0,o.mdx)("tbody",{parentName:"table"},(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"td"},"quoteId")),(0,o.mdx)("td",{parentName:"tr",align:null},"Identifies the target quote for the operation."),(0,o.mdx)("td",{parentName:"tr",align:null},"integer"),(0,o.mdx)("td",{parentName:"tr",align:null},"Required")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"td"},"quoteName")),(0,o.mdx)("td",{parentName:"tr",align:null},"The name of the quote to be created."),(0,o.mdx)("td",{parentName:"tr",align:null},"string"),(0,o.mdx)("td",{parentName:"tr",align:null},"Required")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"td"},"comment")),(0,o.mdx)("td",{parentName:"tr",align:null},"The comment to add to the quote."),(0,o.mdx)("td",{parentName:"tr",align:null},"string"),(0,o.mdx)("td",{parentName:"tr",align:null},"Optional")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"td"},"files")),(0,o.mdx)("td",{parentName:"tr",align:null},"An array of files to add to the quote"),(0,o.mdx)("td",{parentName:"tr",align:null},"array"),(0,o.mdx)("td",{parentName:"tr",align:null},"Optional")))),(0,o.mdx)("p",null,"The buyer or the seller can optionally attach up to 10 files to provide details about the quote. Each file must be converted into base64."),(0,o.mdx)("p",null,"The ",(0,o.mdx)("inlineCode",{parentName:"p"},"files")," array contains the following parameters"),(0,o.mdx)("table",null,(0,o.mdx)("thead",{parentName:"table"},(0,o.mdx)("tr",{parentName:"thead"},(0,o.mdx)("th",{parentName:"tr",align:null},"Name"),(0,o.mdx)("th",{parentName:"tr",align:null},"Description"),(0,o.mdx)("th",{parentName:"tr",align:null},"Format"),(0,o.mdx)("th",{parentName:"tr",align:null},"Requirements"))),(0,o.mdx)("tbody",{parentName:"table"},(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"td"},"base64_encoded_data")),(0,o.mdx)("td",{parentName:"tr",align:null},"A string in base 64 that defines the contents of the added file"),(0,o.mdx)("td",{parentName:"tr",align:null},"string"),(0,o.mdx)("td",{parentName:"tr",align:null},"Required")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"td"},"type")),(0,o.mdx)("td",{parentName:"tr",align:null},"Defines the type of file, such as ",(0,o.mdx)("inlineCode",{parentName:"td"},"text/plain")," or ",(0,o.mdx)("inlineCode",{parentName:"td"},"application/pdf")),(0,o.mdx)("td",{parentName:"tr",align:null},"string"),(0,o.mdx)("td",{parentName:"tr",align:null},"Optional")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"td"},"name")),(0,o.mdx)("td",{parentName:"tr",align:null},"The name of the file to be uploaded, such as ",(0,o.mdx)("inlineCode",{parentName:"td"},"quote.txt")," or ",(0,o.mdx)("inlineCode",{parentName:"td"},"quote.pdf"),"."),(0,o.mdx)("td",{parentName:"tr",align:null},"string"),(0,o.mdx)("td",{parentName:"tr",align:null},"Required")))),(0,o.mdx)("h3",{id:"request-a-negotiable-quote"},"Request a negotiable quote"),(0,o.mdx)("p",null,"Before initiating a negotiable quote, the following conditions must be met:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"A regular Commerce quote has been created (",(0,o.mdx)("inlineCode",{parentName:"li"},"POST /V1/customers/:customerId/carts")," or ",(0,o.mdx)("inlineCode",{parentName:"li"},"POST /V1/customers/carts/mine"),")"),(0,o.mdx)("li",{parentName:"ul"},"The quote contains items (",(0,o.mdx)("inlineCode",{parentName:"li"},"POST /V1/carts/:quoteId/items"),")")),(0,o.mdx)("p",null,"If the negotiable quote requires a shipping address (for negotiation or tax calculations), add it to the standard quote before initiating the negotiable quote (",(0,o.mdx)("inlineCode",{parentName:"p"},"POST /V1/carts/:cartId/shipping-information"),")"),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Service Name:")),(0,o.mdx)("p",null,(0,o.mdx)("inlineCode",{parentName:"p"},"negotiableQuoteNegotiableQuoteManagementV1")),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Sample Usage:")),(0,o.mdx)("p",null,(0,o.mdx)("inlineCode",{parentName:"p"},"POST <host>/rest/<store_code>/V1/negotiableQuote/request")),(0,o.mdx)(u,{slots:"heading, code",repeat:"2",languages:"JSON, JSON",mdxType:"CodeBlock"}),(0,o.mdx)("h4",{id:"payload"},"Payload"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "quoteId": 3,\n  "quoteName": "First quote",\n  "comment": "Requesting a 5% discount",\n  "files": [\n    {\n      "base64_encoded_data": "VGhhbmsgeW91IGZvciByZWFkaW5nIHRoZSBNYWdlbnRvIEIyQiBkb2N1bWVudGF0aW9uLg==",\n      "name": "quote.txt"\n    }\n  ]\n}\n')),(0,o.mdx)("h4",{id:"response"},"Response"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-json"},"// `true`, indicating the request was successful\n")),(0,o.mdx)("p",null,"Commerce creates a negotiable quote in the ",(0,o.mdx)("inlineCode",{parentName:"p"},"Created")," state."),(0,o.mdx)("h3",{id:"create-draft-quote-for-a-buyer"},"Create draft quote for a buyer"),(0,o.mdx)(r.Z,{mdxType:"BetaNote"}),(0,o.mdx)("p",null,"The ",(0,o.mdx)("inlineCode",{parentName:"p"},"POST /V1/negotiableQuote/draft")," request creates an empty negotiable quote for a specific buyer in the ",(0,o.mdx)("inlineCode",{parentName:"p"},"Draft")," state. The quote is not visible to the buyer."),(0,o.mdx)("p",null,"After creating the draft quote, use the ",(0,o.mdx)("a",{parentName:"p",href:"negotiable-update.md"},(0,o.mdx)("inlineCode",{parentName:"a"},"PUT /V1/negotiableQuote/:quoteId"))," request to modify the quote (add products, set discount, rename the quote, etc.)."),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Service Name:")),(0,o.mdx)("p",null,(0,o.mdx)("inlineCode",{parentName:"p"},"negotiableQuoteNegotiableQuoteDraftManagementV1")),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Sample Usage:")),(0,o.mdx)("p",null,(0,o.mdx)("inlineCode",{parentName:"p"},"POST <host>/rest/<store_code>/V1/negotiableQuote/draft")),(0,o.mdx)(u,{slots:"heading, code",repeat:"2",languages:"JSON, JSON",mdxType:"CodeBlock"}),(0,o.mdx)("h4",{id:"payload-1"},"Payload"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "customerId": 3\n}\n')),(0,o.mdx)("h4",{id:"response-1"},"Response"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-json"},"`321`  // An integer indicating the new quoteId\n")),(0,o.mdx)("h3",{id:"submit-a-negotiable-quote"},"Submit a negotiable quote"),(0,o.mdx)("p",null,"A negotiable quote can be submitted for review when it is in one of the following system states:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"Draft"),(0,o.mdx)("li",{parentName:"ul"},"Created"),(0,o.mdx)("li",{parentName:"ul"},"Processing by admin"),(0,o.mdx)("li",{parentName:"ul"},"Submitted by customer")),(0,o.mdx)("p",null,"When the negotiable quote is submitted for review:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"Commerce checks catalog prices (price per item), cart rules, and discounts then recalculates the prices and taxes. The shipping price and the negotiated price are not affected (if they are entered into the quote)."),(0,o.mdx)("li",{parentName:"ul"},"Items that are no longer active or available for this buyer are removed from the quote and prices are recalculated."),(0,o.mdx)("li",{parentName:"ul"},"The quote state is changed to ",(0,o.mdx)("inlineCode",{parentName:"li"},"Submitted by admin"),".")),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Service Name:")),(0,o.mdx)("p",null,(0,o.mdx)("inlineCode",{parentName:"p"},"negotiableQuoteNegotiableQuoteManagementV1")),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Sample Usage:")),(0,o.mdx)("p",null,(0,o.mdx)("inlineCode",{parentName:"p"},"POST <host>/rest/<store_code>/V1/negotiableQuote/submitToCustomer")),(0,o.mdx)(u,{slots:"heading, code",repeat:"2",languages:"JSON, JSON",mdxType:"CodeBlock"}),(0,o.mdx)("h4",{id:"payload-2"},"Payload"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "quoteId": 3,\n  "comment": "It\'d be our pleasure. Please proceed with your order."\n}\n')),(0,o.mdx)("h4",{id:"response-2"},"Response"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-json"},"// `true`, indicating the request was successful\n")),(0,o.mdx)("h3",{id:"update-a-quote"},"Update a quote"),(0,o.mdx)("p",null,"Use the ",(0,o.mdx)("inlineCode",{parentName:"p"},"PUT /V1/negotiableQuote/:quoteId")," request to update a quote. See ",(0,o.mdx)("a",{parentName:"p",href:"negotiable-update.md"},"Update a negotiable quote")," for use cases."),(0,o.mdx)("h3",{id:"recalculate-prices"},"Recalculate prices"),(0,o.mdx)("p",null,"The process of completing a negotiable quote can take days, or even longer. During that time, the prices for the items in the quote may have changed directly or indirectly.  For example, someone could have changed prices in the shared catalogs or adjusted price rules, and the prices in the negotiable quote are stale. The ",(0,o.mdx)("inlineCode",{parentName:"p"},"pricesUpdated")," request refreshes item prices, taxes, discounts, cart rules in the negotiable quote. Quotes that are locked for the seller will not be updated."),(0,o.mdx)("p",null,"The request can be applied to one or more quotes at the same time."),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Sample Usage:")),(0,o.mdx)("p",null,(0,o.mdx)("inlineCode",{parentName:"p"},"POST <host>/rest/<store_code>/V1/negotiableQuote/pricesUpdated")),(0,o.mdx)(u,{slots:"heading, code",repeat:"2",languages:"JSON, JSON",mdxType:"CodeBlock"}),(0,o.mdx)("h4",{id:"payload-3"},"Payload"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "quoteIds": [3]\n}\n')),(0,o.mdx)("h4",{id:"response-3"},"Response"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-json"},"// `true`, indicating the request was successful\n")),(0,o.mdx)("h3",{id:"set-the-shipping-method"},"Set the shipping method"),(0,o.mdx)("p",null,"A quote must meet the following conditions to set the shipping method:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"The system state must be ",(0,o.mdx)("inlineCode",{parentName:"li"},"created"),", ",(0,o.mdx)("inlineCode",{parentName:"li"},"processing_by_admin"),", or ",(0,o.mdx)("inlineCode",{parentName:"li"},"submitted_by_customer")),(0,o.mdx)("li",{parentName:"ul"},"The quote must have a shipping address but no shipping method or shipping price.")),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Sample Usage:")),(0,o.mdx)("p",null,(0,o.mdx)("inlineCode",{parentName:"p"},"PUT <host>/rest/<store_code>/V1/negotiableQuote/3/shippingMethod")),(0,o.mdx)(u,{slots:"heading, code",repeat:"2",languages:"JSON, JSON",mdxType:"CodeBlock"}),(0,o.mdx)("h4",{id:"payload-4"},"Payload"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "shippingMethod": "fixedrate"\n}\n')),(0,o.mdx)("h4",{id:"response-4"},"Response"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-json"},"// None\n")),(0,o.mdx)("h3",{id:"decline-a-quote"},"Decline a quote"),(0,o.mdx)("p",null,"The seller can decline a quote in any of the following system states:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"Created"),(0,o.mdx)("li",{parentName:"ul"},"Processing by admin"),(0,o.mdx)("li",{parentName:"ul"},"Submitted by customer")),(0,o.mdx)("p",null,"Declining a quote removes all custom pricing from the quote. If the buyer places an order, their standard catalog prices and discounts are applied."),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Service Name:")),(0,o.mdx)("p",null,(0,o.mdx)("inlineCode",{parentName:"p"},"negotiableQuoteNegotiableQuoteManagementV1")),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Sample Usage:")),(0,o.mdx)("p",null,(0,o.mdx)("inlineCode",{parentName:"p"},"POST <host>/rest/<store_code>/V1/negotiableQuote/decline")),(0,o.mdx)(u,{slots:"heading, code",repeat:"2",languages:"JSON, JSON",mdxType:"CodeBlock"}),(0,o.mdx)("h4",{id:"payload-5"},"Payload"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "quoteId": 80,\n  "reason": "Your order is too large. "\n}\n')),(0,o.mdx)("h4",{id:"response-5"},"Response"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-json"},"// `true`, indicating the request was successful\n")),(0,o.mdx)("h2",{id:"miscellaneous-operations"},"Miscellaneous operations"),(0,o.mdx)("p",null,"These tasks are not essential for completing a negotiable quote, but might be useful."),(0,o.mdx)("h3",{id:"list-all-comments-for-a-quote"},"List all comments for a quote"),(0,o.mdx)("p",null,"Commerce returns all the comments associated with the specified quote ID. The comments are listed in chronological order, with the oldest comment listed first. A ",(0,o.mdx)("inlineCode",{parentName:"p"},"creator_type")," value of ",(0,o.mdx)("inlineCode",{parentName:"p"},"3")," indicates the buyer made the comment. If the value is ",(0,o.mdx)("inlineCode",{parentName:"p"},"2"),", the seller commented."),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Sample Usage:")),(0,o.mdx)("p",null,(0,o.mdx)("inlineCode",{parentName:"p"},"GET <host>/rest/<store_code>/V1/negotiableQuote/87/comments")),(0,o.mdx)(u,{slots:"heading, code",repeat:"2",languages:"JSON, JSON",mdxType:"CodeBlock"}),(0,o.mdx)("h4",{id:"payload-6"},"Payload"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-json"},"// Not applicable\n")),(0,o.mdx)("h4",{id:"response-6"},"Response"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "entity_id": 6,\n    "parent_id": 87,\n    "creator_type": 3,\n    "is_decline": 0,\n    "is_draft": 0,\n    "creator_id": 1,\n    "comment": "Requesting a 5% discount",\n    "created_at": "2017-06-01 21:14:51",\n    "attachments": [\n    {\n      "attachment_id": 1,\n      "comment_id": 12,\n      "file_name": "hello.txt",\n      "file_path": "/h/e/hello.txt",\n      "file_type": null\n    }\n    ]\n  },\n  {\n    "entity_id": 7,\n    "parent_id": 87,\n    "creator_type": 2,\n    "is_decline": 0,\n    "is_draft": 0,\n    "creator_id": 1,\n    "comment": "We cannot discount Configurable Product 1, because the price is already discounted. We can adjust the overall price so the remaining items are discounted 5%. Please let us know whether this is acceptable. ",\n    "created_at": "2017-06-01 21:29:15",\n    "attachments": []\n  },\n  {\n    "entity_id": 8,\n    "parent_id": 87,\n    "creator_type": 3,\n    "is_decline": 0,\n    "is_draft": 0,\n    "creator_id": 1,\n    "comment": "That is fine. Please apply the discounts to our order.",\n    "created_at": "2017-06-01 21:30:30",\n    "attachments": []\n  },\n  {\n    "entity_id": 9,\n    "parent_id": 87,\n    "creator_type": 2,\n    "is_decline": 0,\n    "is_draft": 0,\n    "creator_id": 1,\n    "comment": "We&#039;re taking $27.50 off your quote total. That&#039;s 5% of the cost of the other items in your cart.",\n    "created_at": "2017-06-01 21:40:19",\n    "attachments": []\n  },\n  {\n    "entity_id": 10,\n    "parent_id": 87,\n    "creator_type": 3,\n    "is_decline": 0,\n    "is_draft": 0,\n    "creator_id": 1,\n    "comment": "Added a shipping address",\n    "created_at": "2017-06-01 21:43:03",\n    "attachments": []\n  },\n  {\n    "entity_id": 11,\n    "parent_id": 87,\n    "creator_type": 2,\n    "is_decline": 0,\n    "is_draft": 0,\n    "creator_id": 1,\n    "comment": "OK",\n    "created_at": "2017-06-01 21:44:16",\n    "attachments": []\n  }\n]\n')),(0,o.mdx)("h3",{id:"retrieve-a-negotiable-quote-attachment"},"Retrieve a negotiable quote attachment"),(0,o.mdx)("p",null,"Use the ",(0,o.mdx)("inlineCode",{parentName:"p"},"attachmentContent")," request to retrieve the files (in base64 format) attached to a negotiable quote."),(0,o.mdx)("p",null,(0,o.mdx)("inlineCode",{parentName:"p"},"negotiableQuoteAttachmentContentManagementV1")),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Sample Usage:")),(0,o.mdx)("p",null,(0,o.mdx)("inlineCode",{parentName:"p"},"GET <host>/rest/<store_code>/V1/negotiableQuote/attachmentContent")),(0,o.mdx)(u,{slots:"heading, code",repeat:"2",languages:"JSON, JSON",mdxType:"CodeBlock"}),(0,o.mdx)("h4",{id:"payload-7"},"Payload"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-json"},"// Not applicable\n")),(0,o.mdx)("h4",{id:"response-7"},"Response"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "quoteId": 2,\n  "quoteName": "First quote",\n  "files": [\n    {\n      "base64_encoded_data": "VGhhbmsgeW91IGZvciByZWFkaW5nIHRoZSBNYWdlbnRvIEIyQiBkb2N1bWVudGF0aW9uLg==",\n      "name": "quote.txt"\n    }\n  ]\n}\n')))}g.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-rest-b-2-b-negotiable-manage-md-9a834d010b64a8a6bdcd.js.map