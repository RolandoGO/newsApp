(this["webpackJsonpnews-app"]=this["webpackJsonpnews-app"]||[]).push([[0],{11:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),s=n(5),i=n.n(s),a=(n(11),n(2)),o=n(4),j=n.n(o),u=n(6);function l(){return(l=Object(u.a)(j.a.mark((function e(t,n){var c,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=c4f372dc99f64484b65beec5fd0ed60a");case 3:return c=e.sent,e.next=6,c.json();case 6:r=e.sent,t(r.articles),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),n({error:e.t0,msj:"error en el recurso o de conectividad"});case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}var d=function(e,t){return l.apply(this,arguments)},b=Object(c.createContext)(),h=n(0);function O(e){var t=e.content,n=Object(c.useContext)(b).handleExit,r=Object(c.useState)(""),s=Object(a.a)(r,2),i=s[0],o=s[1];return Object(c.useEffect)((function(){if(t.content){var e=t.content.split("[")[0];o(e)}}),[t]),Object(h.jsxs)("div",{id:"news",children:[Object(h.jsx)("div",{id:"exitNews",onClick:n}),Object(h.jsxs)("h3",{children:["Author: ",t.author]}),Object(h.jsx)("p",{children:i}),Object(h.jsx)("a",{href:t.url,children:"Go to the Page"})]})}function p(e){var t=e.tittle,n=Object(c.useContext)(b).handleContent,r=t.title.replace("- "+t.source.name,"");return Object(h.jsxs)("div",{id:"newsContainer",children:[Object(h.jsx)("div",{id:"SeeNews",onClick:function(){return n(t)}}),Object(h.jsxs)("article",{id:"tittleAndImage",children:[Object(h.jsx)("h2",{children:r}),Object(h.jsx)("p",{children:t.description}),Object(h.jsxs)("h3",{children:['"',t.source.name,'"']})]}),t.urlToImage?Object(h.jsx)("img",{src:t.urlToImage,alt:""}):null]})}var x=function(){var e=Object(c.useState)([]),t=Object(a.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)(null),i=Object(a.a)(s,2),o=i[0],j=i[1],u=Object(c.useState)(),l=Object(a.a)(u,2),x=l[0],f=l[1];Object(c.useEffect)((function(){d(r,j)}),[]);var v=function(e){return{handleContent:function(t){e(t)},handleExit:function(){e(null)}}}(f);return Object(h.jsxs)("div",{id:"mainContainer",children:[o?Object(h.jsx)("p",{id:"errorMsj",children:o.msj}):null,Object(h.jsxs)(b.Provider,{value:v,children:[Object(h.jsx)("h1",{children:"Rolo News Display"}),x?Object(h.jsx)(O,{content:x}):n.map((function(e){return Object(h.jsx)(p,{tittle:e},e.url)}))]})]})};i.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(x,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.6ff6fccc.chunk.js.map