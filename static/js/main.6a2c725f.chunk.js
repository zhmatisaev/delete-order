(this["webpackJsonporder-redux"]=this["webpackJsonporder-redux"]||[]).push([[0],{63:function(e,t,r){},64:function(e,t,r){},74:function(e,t,r){"use strict";r.r(t);var n=r(0),c=r.n(n),i=r(8),a=r.n(i),s=(r(63),r(64),r(52)),o=r(16),j=[{title:"burger",price:150},{title:"cola",price:80},{title:"fries",price:150},{title:"tea",price:50}],d=r(32),l="ADD_ORDER",u="DELETE_ORDER",b=r(111),O=r(108),p=r(109),x=r(105),h=r(51),f=r.n(h),v=r(104),y=r(110),m=r(106),C=r(4);function g(e){return Object(C.jsx)(m.a,Object(o.a)({elevation:6,variant:"filled"},e))}var k=function(){var e=Object(d.c)((function(e){return e.orders})),t=Object(d.b)();Object(n.useEffect)((function(){localStorage.setItem("orders",JSON.stringify(e))}),[e]);var r=c.a.useState(!1),i=Object(s.a)(r,2),a=i[0],o=i[1],h=function(){o(!0),setTimeout((function(){o(!1)}),1e3)};return Object(C.jsxs)("div",{style:w.orderContainer,children:[Object(C.jsxs)("div",{style:w.menuContainer,children:[Object(C.jsx)(v.a,{variant:"outlined",onClick:h,children:"Open success snackbar"}),Object(C.jsx)("h1",{children:"Menu"}),Object(C.jsx)(O.a,{children:j.map((function(e,r){return Object(C.jsx)(p.a,{title:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432 \u0437\u0430\u043a\u0430\u0437\u044b",children:Object(C.jsxs)(b.a,{onClick:function(){t({type:l,payload:e}),h()},style:{cursor:"pointer"},children:[e.title," ",Object(C.jsx)("b",{children:e.price})]},r)})}))})]}),Object(C.jsxs)("div",{style:w.basketContainer,children:[Object(C.jsx)("h1",{children:"Orders"}),Object(C.jsx)(O.a,{children:e.length?e.map((function(e,r){return Object(C.jsxs)(b.a,{children:[Object(C.jsxs)("span",{children:[e.title," "]}),Object(C.jsxs)("b",{children:[": ",e.price," * ",e.count," = ",e.sum]}),Object(C.jsx)("span",{onClick:function(){return t({type:u,payload:e})},children:Object(C.jsx)(f.a,{})})]},r)})):Object(C.jsxs)("div",{children:[Object(C.jsx)(x.a,{}),Object(C.jsx)(x.a,{animation:!1}),Object(C.jsx)(x.a,{animation:"wave"})]})})]}),Object(C.jsx)(y.a,{open:a,autoHideDuration:6e3,children:Object(C.jsx)(g,{severity:"success",children:"\u0417\u0430\u043a\u0430\u0437 \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d!"})})]})},w={orderContainer:{display:"flex",justifyContent:"space-between"},menuContainer:{width:"50%"},basketContainer:{width:"50%"}};var E=function(){return Object(C.jsx)("div",{className:"App",children:Object(C.jsx)(k,{})})},D=r(38),S=r(42),I={orders:JSON.parse(localStorage.getItem("orders"))||[],totalPrice:0,totalCount:0},J=Object(D.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l:var r=e.orders.findIndex((function(e){return e.title===t.payload.title}));if(-1!==r){var n=Object(S.a)(e.orders);return n[r].count=n[r].count+1,n[r].sum=n[r].sum+t.payload.price,Object(o.a)(Object(o.a)({},e),{},{orders:n})}return Object(o.a)(Object(o.a)({},e),{},{orders:[].concat(Object(S.a)(e.orders),[{title:t.payload.title,price:t.payload.price,count:1,sum:t.payload.price}])});case u:var c=e.orders.findIndex((function(e){return e.title===t.payload.title})),i=Object(S.a)(e.orders);if(-1!==c)return i[c].count>1?(i[c].count=i[c].count-1,i[c].sum=i[c].sum+t.payload.price,Object(o.a)(Object(o.a)({},e),{},{orders:i})):Object(o.a)(Object(o.a)({},e),{},{orders:i.filter((function(e){return e.title!==i[c].title}))});default:return e}}));a.a.render(Object(C.jsx)(c.a.StrictMode,{children:Object(C.jsx)(d.a,{store:J,children:Object(C.jsx)(E,{})})}),document.getElementById("root"))}},[[74,1,2]]]);
//# sourceMappingURL=main.6a2c725f.chunk.js.map