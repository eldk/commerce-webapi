"use strict";(self.webpackChunkcommerce_webapi=self.webpackChunkcommerce_webapi||[]).push([[1487],{19123:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return l},default:function(){return h}});var n=a(87462),o=a(63366),m=(a(15007),a(64983)),p=a(91515),r=a(11339),s=a(66864),d=["components"],l={},i={_frontmatter:l},c=p.Z;function h(e){var t=e.components,a=(0,o.Z)(e,d);return(0,m.mdx)(c,(0,n.Z)({},i,a,{components:t,mdxType:"MDXLayout"}),(0,m.mdx)("h1",{id:"express-checkout-for-other-paypal-solutions"},"Express Checkout for other PayPal solutions"),(0,m.mdx)("p",null,"Set the payment method code to ",(0,m.mdx)("inlineCode",{parentName:"p"},"payflow_express")," to process Express Checkout transactions when the payment method is set to any of the following:"),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},"Payflow Link"),(0,m.mdx)("li",{parentName:"ul"},"Payflow Pro"),(0,m.mdx)("li",{parentName:"ul"},"Payments Advanced"),(0,m.mdx)("li",{parentName:"ul"},"Payments Pro")),(0,m.mdx)("p",null,"PayPal Express Checkout enables customers to pay by credit card or from the security of their personal PayPal accounts. During checkout, the customer is redirected to the secure PayPal site to complete the payment information. The customer is then returned to the store to complete the remainder of the checkout process."),(0,m.mdx)("p",null,"From a GraphQL integration standpoint, this payment method is identical to the ",(0,m.mdx)("a",{parentName:"p",href:"payflow-link.md"},"PayPal Express Checkout")," payment method, with the exception that in the ",(0,m.mdx)("inlineCode",{parentName:"p"},"setPaymentMethodOnCart")," mutation, the payment method ",(0,m.mdx)("inlineCode",{parentName:"p"},"code")," is set to ",(0,m.mdx)("inlineCode",{parentName:"p"},"payflow_express"),"."),(0,m.mdx)("h2",{id:"paypal-express-checkout-workflow"},"PayPal Express Checkout workflow"),(0,m.mdx)("p",null,"The following diagram shows the workflow for placing an order when ",(0,m.mdx)("inlineCode",{parentName:"p"},"payflow_express")," is the specified payment method."),(0,m.mdx)("p",null,(0,m.mdx)("img",{parentName:"p",src:"/commerce-webapi/assets/d8907617999b05d0cf4c15d8a29c14aa/paypal-express-checkout.svg",alt:"PayPal Express Checkout sequence diagram"})),(0,m.mdx)("p",null,"The following steps describe the flow of calls required to complete a typical PayPal Express Checkout authorization. A successful purchase requires that you send three mutations to PayPal, and the buyer must approve the purchase by logging in to PayPal."),(0,m.mdx)(r.Z,{mdxType:"PaypalExpressCheckoutWorkflow"}),(0,m.mdx)("h2",{id:"setpaymentmethodoncart-mutation"},(0,m.mdx)("inlineCode",{parentName:"h2"},"setPaymentMethodOnCart")," mutation"),(0,m.mdx)("p",null,"When you set the payment method to one of the Express Checkout payment solutions discussed in this topic, you must set the ",(0,m.mdx)("inlineCode",{parentName:"p"},"code")," attribute to ",(0,m.mdx)("inlineCode",{parentName:"p"},"payflow_express"),". In addition, the payload must contain a ",(0,m.mdx)("inlineCode",{parentName:"p"},"payflow_express")," object, which defines the following attributes:"),(0,m.mdx)(s.Z,{mdxType:"PaypalExpressCheckoutAttributes"}),(0,m.mdx)("h3",{id:"example-usage"},"Example usage"),(0,m.mdx)("p",null,"The following example shows the ",(0,m.mdx)("inlineCode",{parentName:"p"},"setPaymentMethodOnCart")," mutation with the ",(0,m.mdx)("inlineCode",{parentName:"p"},"code")," set to ",(0,m.mdx)("inlineCode",{parentName:"p"},"payflow_express"),"."),(0,m.mdx)("p",null,(0,m.mdx)("strong",{parentName:"p"},"Request:")),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-graphql"},'mutation {\n  setPaymentMethodOnCart(input: {\n    cart_id: "rMQdWEecBZr4SVWZwj2AF6y0dNCKQ8uH"\n    payment_method: {\n        code: "payflow_express"\n        payflow_express: {\n          payer_id: "<PayPal_PayerID>"\n          token: "<PayPal_Token>"\n        }\n      }\n  }) {\n    cart {\n      selected_payment_method {\n        code\n      }\n    }\n  }\n}\n')),(0,m.mdx)("p",null,(0,m.mdx)("strong",{parentName:"p"},"Response:")),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "setPaymentMethodOnCart": {\n      "cart": {\n        "selected_payment_method": {\n          "code": "payflow_express",\n        }\n      }\n    }\n  }\n}\n')),(0,m.mdx)("h2",{id:"related-topics"},"Related topics"),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("a",{parentName:"li",href:"../schema/checkout/mutations/create-paypal-express-token.md"},(0,m.mdx)("inlineCode",{parentName:"a"},"createPaypalExpressToken")," mutation")),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("a",{parentName:"li",href:"../schema/cart/mutations/place-order.md"},(0,m.mdx)("inlineCode",{parentName:"a"},"placeOrder")," mutation")),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("a",{parentName:"li",href:"../schema/cart/mutations/set-payment-method.md"},(0,m.mdx)("inlineCode",{parentName:"a"},"setPaymentMethodOnCart")," mutation"))))}h.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-graphql-payment-methods-payflow-express-md-f4bef1cfdee143bd2761.js.map