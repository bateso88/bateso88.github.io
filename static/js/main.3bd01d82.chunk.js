(this["webpackJsonpportfolio-website"]=this["webpackJsonpportfolio-website"]||[]).push([[0],{23:function(e,s,c){},33:function(e,s,c){},34:function(e,s,c){},35:function(e,s,c){},36:function(e,s,c){},37:function(e,s,c){"use strict";c.r(s);var t=c(1),a=c(16),i=c.n(a),n=(c(9),c(18)),l=c(4),r=(c(23),c(0));var j=function(){var e=Object(t.useState)(!1),s=Object(n.a)(e,2),c=s[0],a=s[1],i=function(){return a(!1)};return Object(r.jsx)("nav",{className:"navbar",children:Object(r.jsxs)("div",{className:"navbar-container",children:[Object(r.jsxs)(l.b,{to:"/",className:"navbar-logo",onClick:i,children:[Object(r.jsx)("i",{className:"fas fa-home"})," OB"]}),Object(r.jsx)("div",{className:"menu-icon",onClick:function(){return a(!c)},children:Object(r.jsx)("i",{className:c?"fas fa-times":"fas fa-bars"})}),Object(r.jsxs)("ul",{className:c?"nav-menu active":"nav-menu",children:[Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)(l.b,{to:"/",className:"nav-links",onClick:i,children:"Home"})}),Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)(l.b,{to:"/about",className:"nav-links",onClick:i,children:"About"})}),Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)(l.b,{to:"/projects",className:"nav-links",onClick:i,children:"Projects"})})]})]})})},o=c(2),b=(c(33),["btn--primary","btn--outline"]),m=["btn--medium","btn--large"],d=function(e){var s=e.children,c=e.type,t=e.onClick,a=e.buttonStyle,i=e.buttonSize,n=b.includes(a)?a:b[0],j=m.includes(i)?i:m[0];return Object(r.jsx)(l.b,{to:"/projects",className:"btn-mobile",children:Object(r.jsx)("button",{className:"btn ".concat(n," ").concat(j),onClick:t,type:c,children:s})})};c(34);var h=function(){return Object(r.jsxs)("div",{className:"hero-container",children:[Object(r.jsx)("video",{src:"../videos/video-2.mp4",autoPlay:!0,loop:!0,muted:!0}),Object(r.jsx)("h1",{children:"WELCOME!"}),Object(r.jsx)("p",{children:"Please browse my portfolio"}),Object(r.jsx)("div",{className:"hero-btns",children:Object(r.jsx)(d,{className:"btns",buttonStyle:"btn--outline",buttonSize:"btn--large",children:"PROJECTS"})})]})},x=(c(35),c(11));var O=function(){return Object(r.jsx)("div",{className:"footer-container",children:Object(r.jsx)("section",{className:"social-media",children:Object(r.jsxs)("div",{className:"social-media-wrap",children:[Object(r.jsx)("div",{className:"footer-logo",children:Object(r.jsx)(l.b,{to:"/",className:"social-logo",children:Object(r.jsx)("i",{className:"fas fa-home"})})}),Object(r.jsx)("div",{className:"footer-logo",children:Object(r.jsx)(l.b,{className:"social-logo",to:"./about",children:"About"})}),Object(r.jsx)("div",{className:"footer-logo",children:Object(r.jsx)(l.b,{className:"social-logo",to:"./projects",children:"Projects"})}),Object(r.jsxs)("div",{className:"social-icons",children:[Object(r.jsx)(x.a,{className:"social-icon-link github",href:"https://github.com/bateso88",target:"_blank","aria-label":"Github",children:Object(r.jsx)("i",{className:"fab fa-github"})}),Object(r.jsx)(x.a,{className:"social-icon-link linkedin",href:"https://www.linkedin.com/in/oliver-bates-89256812a/",target:"_blank","aria-label":"LinkedIn",children:Object(r.jsx)("i",{className:"fab fa-linkedin"})}),Object(r.jsx)(x.a,{className:"social-icon-link instagram",href:"https://www.instagram.com/baitso88/?hl=en",target:"_blank","aria-label":"Instagram",children:Object(r.jsx)("i",{className:"fab fa-instagram"})})]})]})})})};var u=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(h,{}),Object(r.jsx)(O,{})]})};function N(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h1",{className:"about",children:"ABOUT"}),Object(r.jsx)(O,{})]})}var f=function(e){return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("li",{className:"cards__item",children:Object(r.jsxs)(l.b,{className:"cards__item__link",to:e.path,children:[Object(r.jsx)("figure",{className:"cards__item__pic-wrap","data-category":e.label,children:Object(r.jsx)("img",{className:"cards__item__img",alt:"Travel Image",src:e.src})}),Object(r.jsx)("div",{className:"cards__item__info",children:Object(r.jsx)("h5",{className:"cards__item__text",children:e.text})})]})})})};c(36);var g=function(){return Object(r.jsxs)("div",{className:"cards",children:[Object(r.jsx)("h1",{children:"Check out my projects!"}),Object(r.jsx)("div",{className:"cards__container",children:Object(r.jsxs)("div",{className:"cards__wrapper",children:[Object(r.jsxs)("ul",{className:"cards__items",children:[Object(r.jsx)(f,{src:"images/img-1.jpg",text:"This is some text",label:"Number 1",path:"/about"}),Object(r.jsx)(f,{src:"images/img-1.jpg",text:"Some more stuff",label:"Number 2",path:"/about"})]}),Object(r.jsxs)("ul",{className:"cards__items",children:[Object(r.jsx)(f,{src:"images/img-1.jpg",text:"This is some text",label:"Number 1",path:"/about"}),Object(r.jsx)(f,{src:"images/img-1.jpg",text:"Some more stuff",label:"Number 2",path:"/about"}),Object(r.jsx)(f,{src:"images/img-1.jpg",text:"Some more stuff",label:"Number 2",path:"/about"})]})]})})]})};function p(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h1",{className:"projects",children:"PROJECTS"}),Object(r.jsx)(g,{}),Object(r.jsx)(O,{})]})}var v=function(){return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)(l.a,{children:[Object(r.jsx)(j,{}),Object(r.jsxs)(o.c,{children:[Object(r.jsx)(o.a,{path:"/",exact:!0,component:u}),Object(r.jsx)(o.a,{path:"/about",exact:!0,component:N}),Object(r.jsx)(o.a,{path:"/projects",exact:!0,component:p})]})]})})};i.a.render(Object(r.jsx)(v,{}),document.getElementById("root"))},9:function(e,s,c){}},[[37,1,2]]]);
//# sourceMappingURL=main.3bd01d82.chunk.js.map