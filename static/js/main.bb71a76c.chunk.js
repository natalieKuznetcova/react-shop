(this.webpackJsonpshop=this.webpackJsonpshop||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n.n(c),a=n(7),s=n.n(a),r=(n(13),n.p,n(14),n(0)),o=function(){return Object(r.jsx)("nav",{className:"red lighten-2",children:Object(r.jsxs)("div",{className:"nav-wrapper",children:[Object(r.jsx)("a",{href:"#",className:"brand-logo",children:"Shop"}),Object(r.jsx)("ul",{id:"nav-mobile",className:"right hide-on-med-and-down",children:Object(r.jsx)("li",{children:Object(r.jsx)("a",{href:"!#",children:"Repo"})})})]})})},l=function(){return Object(r.jsx)("footer",{className:"page-footer red lighten-1",children:Object(r.jsx)("div",{className:"footer-copyright",children:Object(r.jsxs)("div",{className:"container",children:["\xa9 ",(new Date).getFullYear()," Copyright Text",Object(r.jsx)("a",{className:"grey-text text-lighten-4 right",href:"#!",children:"More Links"})]})})})},d=n(8),j=n(2),u=n(3),b=function(e){var t=e.id,n=e.name,c=e.description,i=e.price,a=e.img,s=e.addToBasket,o=void 0===s?Function.prototype:s;return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("div",{className:"card",children:[Object(r.jsx)("div",{className:"card-image",children:Object(r.jsx)("img",{src:a,alt:n})}),Object(r.jsxs)("div",{className:"card-content",children:[Object(r.jsx)("span",{className:"card-title",children:n}),Object(r.jsx)("p",{children:c})]}),Object(r.jsxs)("div",{className:"card-action",children:[Object(r.jsx)("button",{className:"btn",onClick:function(){return o({id:t,name:n,price:i})},children:"Buy"}),Object(r.jsxs)("span",{className:"right",style:{fontSize:"1.8rem"},children:[i," coin"]})]})]})})},m=function(e){var t=e.goods,n=void 0===t?[]:t,c=e.addToBasket,i=void 0===c?Function.prototype:c;return n.length?Object(r.jsx)("div",{className:"goods",children:n.map((function(e){return Object(r.jsx)(b,{id:e.mainId,name:e.displayName,description:e.displayDescription,price:e.price.regularPrice,img:e.displayAssets[0].url,addToBasket:i},e.displayName)}))}):Object(r.jsx)("h3",{children:"Nothing here"})},h=function(){return Object(r.jsx)("div",{className:"progress",children:Object(r.jsx)("div",{className:"indeterminate"})})},O=function(e){var t=e.quantity,n=void 0===t?0:t,c=e.handleBasketShow,i=void 0===c?Function.prototype:c;return Object(r.jsxs)("div",{className:"cart red lighten-2 white-text",onClick:i,children:[Object(r.jsx)("i",{className:"material-icons",children:"shopping_cart"}),n?Object(r.jsx)("span",{className:"cart-quantity",children:n}):null]})},p=function(e){var t=e.id,n=e.name,c=e.price,i=e.quantity,a=e.removeFromBasket,s=void 0===a?Function.prototype:a,o=e.incItem,l=void 0===o?Function.prototype:o,d=e.decItem,j=void 0===d?Function.prototype:d;return Object(r.jsxs)("li",{className:"collection-item black-text",children:[n,Object(r.jsx)("i",{className:"material-icons basket-quantity",onClick:function(){return j(t)},children:"remove"}),i,Object(r.jsx)("i",{className:"material-icons basket-quantity",onClick:function(){return l(t)},children:"add"}),"= ",i?c*i:c,Object(r.jsx)("span",{className:"secondary-content",onClick:function(){return s(t)},children:Object(r.jsx)("i",{className:"material-icons basket-delete",children:"clear"})})]})},f=function(e){var t=e.order,n=void 0===t?[]:t,c=e.handleBasketShow,i=void 0===c?Function.prototype:c,a=e.removeFromBasket,s=void 0===a?Function.prototype:a,o=e.incItem,l=void 0===o?Function.prototype:o,d=e.decItem,u=void 0===d?Function.prototype:d,b=n.reduce((function(e,t){return e+t.quantity*t.price}),0);return Object(r.jsxs)("ul",{className:"collection basket-list",children:[Object(r.jsx)("li",{className:"collection-item active",children:"Basket"}),n.length?n.map((function(e){return Object(r.jsx)(p,Object(j.a)(Object(j.a)({},e),{},{removeFromBasket:s,incItem:l,decItem:u}),e.id)})):Object(r.jsx)("li",{className:"collection-item",children:"Cart is empty"}),Object(r.jsxs)("li",{className:"collection-item active list-style",children:["Total cost:",b,Object(r.jsx)("button",{className:"secondary-content btn-small",children:"Checkout"})]}),Object(r.jsx)("i",{className:"material-icons basket-close",onClick:i,children:"close"})]})},x=function(e){var t=e.name,n=void 0===t?"":t,i=e.closeAlert,a=void 0===i?Function.prototype:i;return Object(c.useEffect)((function(){var e=setTimeout(a,3e3);return function(){clearTimeout(e)}}),[n]),Object(r.jsx)("div",{id:"toast-container",children:Object(r.jsxs)("div",{className:"toast",children:[n," added to backet"]})})},v=function(){var e=Object(c.useState)([]),t=Object(u.a)(e,2),n=t[0],i=t[1],a=Object(c.useState)(!0),s=Object(u.a)(a,2),o=s[0],l=s[1],b=Object(c.useState)([]),p=Object(u.a)(b,2),v=p[0],y=p[1],N=Object(c.useState)(!1),g=Object(u.a)(N,2),k=g[0],F=g[1],B=Object(c.useState)(""),q=Object(u.a)(B,2),S=q[0],C=q[1],I=function(){F(!k)};return Object(c.useEffect)((function(){fetch("https://fortniteapi.io/v2/shop?lang=en",{headers:{Authorization:"7783a53e-867658c3-7ac1f801-b63fc5d0"}}).then((function(e){return e.json()})).then((function(e){e.shop&&i(e.shop),l(!1)}))}),[]),Object(r.jsxs)("div",{className:"container content",children:[Object(r.jsx)(O,{quantity:v.length,handleBasketShow:I}),o?Object(r.jsx)(h,{}):Object(r.jsx)(m,{goods:n,addToBasket:function(e){var t=v.findIndex((function(t){return t.id===e.id}));if(t<0){var n=Object(j.a)(Object(j.a)({},e),{},{quantity:1});y([].concat(Object(d.a)(v),[n]))}else{var c=v.map((function(e,n){return n===t?Object(j.a)(Object(j.a)({},e),{},{quantity:e.quantity+1}):e}));y(c)}C(e.name)}}),k&&Object(r.jsx)(f,{order:v,handleBasketShow:I,removeFromBasket:function(e){var t=v.filter((function(t){return t.id!==e}));y(t)},incItem:function(e){var t=v.map((function(t){if(t.id===e){var n=t.quantity+1;return Object(j.a)(Object(j.a)({},t),{},{quantity:n})}return t}));y(t)},decItem:function(e){var t=v.map((function(t){if(t.id===e){var n=t.quantity-1;return Object(j.a)(Object(j.a)({},t),{},{quantity:n>=0?n:0})}return t}));y(t)}}),S&&Object(r.jsx)(x,{name:S,closeAlert:function(){C("")}})]})};var y=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(o,{}),Object(r.jsx)(v,{}),Object(r.jsx)(l,{})]})},N=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),i(e),a(e),s(e)}))};s.a.render(Object(r.jsx)(i.a.StrictMode,{children:Object(r.jsx)(y,{})}),document.getElementById("root")),N()}},[[16,1,2]]]);
//# sourceMappingURL=main.bb71a76c.chunk.js.map