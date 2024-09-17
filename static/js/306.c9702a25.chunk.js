"use strict";(self.webpackChunkprofail=self.webpackChunkprofail||[]).push([[306],{3696:function(e,t,r){var a=r(5323),n=r(903),o=r(2874),i=(r(7391),r(6345),r(2834));t.Z=function(e){var t=e.url_img;return(0,i.jsx)("div",{className:"project-wrapper__image load-hidden ",children:(0,i.jsx)(n.Z,{options:{max:4,"max-glare":.5},style:{with:"auto",padding:0,margin:0},className:"thumbnail border-0 rounded-2rem  ",children:(0,i.jsx)(o.tq,{zoom:!0,pagination:{dynamicBullets:!0},modules:[a.tl],className:"mySwiper border-dark border-2 border-sm-3 border rounded-2rem ",style:{backgroundColor:"#eef5ff"},children:t.map((function(e,t){return(0,i.jsx)(o.o5,{className:"",children:(0,i.jsx)("img",{alt:"Project Image1",className:"img-fluid  m-0",src:e})},t)}))})})})}},9431:function(e,t,r){var a=r(4165),n=r(5861),o=r(885),i=r(9867),l=r(606);t.Z=function(e){var t=(0,i.useState)(!0),r=(0,o.Z)(t,2),s=r[0],c=r[1],d=(0,i.useState)([]),u=(0,o.Z)(d,2),m=u[0],p=u[1],h=(0,i.useState)(""),x=(0,o.Z)(h,2),f=x[0],g=x[1],j=(0,i.useCallback)((0,n.Z)((0,a.Z)().mark((function t(){return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.Z.get(e).then((function(e){p(e.data),g(null)})).catch((function(e){g(e.message)})).finally((function(){return c(!1)}));case 2:case"end":return t.stop()}}),t)}))),[e]);return(0,i.useEffect)((function(){j()}),[e,f,j]),{loading:s,data:m,errorr:f}}},8448:function(e,t,r){r.d(t,{H:function(){return i}});var a=r(1652),n={"section-title":{delay:300,distance:"0px",origin:"bottom"},"hero-title":{delay:500,origin:window.innerWidth>768?"left":"bottom"},"hero-cta":{delay:1e3,origin:window.innerWidth>768?"left":"bottom"},"about-wrapper__image":{delay:600,origin:"bottom"},"about-wrapper__info":{delay:1e3,origin:window.innerWidth>768?"left":"bottom"},"project-wrapper__text":{delay:500,origin:window.innerWidth>768?"left":"bottom"},"project-wrapper__image":{delay:1e3,origin:window.innerWidth>768?"right":"bottom"},"contact-wrapper":{delay:800,origin:"bottom"}},o={easing:"cubic-bezier(0.5, 0, 0, 1)",distance:"30px",duration:1e3,desktop:!0,mobile:!0};function i(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];t.length<1&&(0,a.Z)().reveal(".".concat(t),o,n[t]),t.length>1&&t.map((function(e){return(0,a.Z)().reveal(".".concat(e),o,n[e])}))}},5129:function(e,t,r){r.r(t),r.d(t,{default:function(){return h}});var a=r(1413),n=r(885),o=r(9867),i=r(9595),l=r(7735),s=r(8448),c=r(1182),d=r(3696),u=r(2834),m=function(e){var t=e.data;console.log(t);var r=(0,o.useContext)(i.ZP).mode;(0,o.useEffect)((function(){(0,s.H)("project-wrapper__image","project-wrapper__text")}),[]);var n=function(e){l.ZP.event({category:e.target.text,action:e.target.text,label:"SEE URL",value:e.target.href})};return(0,u.jsxs)("div",{className:"row my-3 border rounded-2rem p-2 pb-4 p-md-4",children:[(0,u.jsx)("div",{className:"col-lg-4 col-sm-12 p-2",children:(0,u.jsxs)("div",{className:"project-wrapper__text load-hidden",children:[(0,u.jsxs)("div",{className:"d-flex",children:[(0,u.jsxs)("h3",{className:"project-wrapper__text-title",style:(0,a.Z)({},r.textColor),children:[t.title," "]}),(0,u.jsx)("h6",{className:"ms-auto p-2 px-3 mt-2 mb-auto text-light fw-bold rounded-2rem ",style:{backgroundColor:t.level[1],width:"max-content"},children:t.level[0]})]}),(0,u.jsxs)("div",{className:" ",children:[(0,u.jsx)("p",{className:"my-3",style:(0,a.Z)({},r.textColor),children:t.discription}),(0,u.jsx)("div",{className:"d-flex mt-3  ",children:t.icon.map((function(e,t){return(0,u.jsx)("div",{className:"text-center p-1",children:(0,u.jsx)("div",{style:{fill:e.icon_color},dangerouslySetInnerHTML:{__html:e.icon_logo}})},t)}))}),(0,u.jsxs)("div",{className:"d-flex pe-4",children:[(0,u.jsx)("span",{className:"card-subtitle mb-5 mt-3 fs-4 ",style:(0,a.Z)({},r.textColor),children:"22 Aug 2023"}),(0,u.jsxs)("span",{className:"ms-auto fs-4 ",style:(0,a.Z)({},r.textColor),children:[(0,u.jsx)(c.Zju,{})," ",t.vue]})]})]}),(0,u.jsxs)("div",{className:" mt-auto",children:[(0,u.jsx)("a",{onClick:n,rel:"noreferrer",target:"_blank",className:"cta-btn cta-btn--hero",href:t.url_see,children:"See Live"}),(0,u.jsx)("a",{onClick:n,rel:"noreferrer",target:"_blank",className:"cta-btn text-color-main p-auto",href:t.url_source,children:"Source Code"})]})]})}),(0,u.jsx)("div",{className:"col-lg-8 col-sm-12 ",style:(0,a.Z)({},r.bgColor),children:(0,u.jsx)(d.Z,{url_img:t.url_img})})]})},p=r(9431),h=function(){var e=(0,o.useContext)(i.ZP).mode,t=(0,p.Z)("https://bakkali.dev/db.json"),r=t.data,l=t.loading,c=t.errorr,d=(0,o.useState)(r),h=(0,n.Z)(d,2),x=h[0],f=h[1],g=(0,o.useState)(c),j=(0,n.Z)(g,2),b=j[0],v=j[1];(0,o.useEffect)((function(){(0,s.H)("section-title"),f(r),v(c)}),[r,c]);return(0,u.jsx)("section",{id:"projects",style:(0,a.Z)({},e.bgColor),className:"mt-0 pt-0",children:(0,u.jsx)("div",{className:"container px-0",children:(0,u.jsxs)("div",{className:"project-wrapper",children:[(0,u.jsx)("h2",{className:"section-title ",style:(0,a.Z)({},e.textColor),children:"My Projects"}),l&&(0,u.jsx)("div",{className:"spinner-border ",width:"3",height:"3px",style:(0,a.Z)({width:"8rem",height:"8rem"},e.textColor),role:"status",children:(0,u.jsx)("span",{className:"visually-hidden",children:"Loading..."})}),b&&(0,u.jsx)("div",{className:"py-3 d-block alert alert-danger  ",children:(0,u.jsxs)("h2",{children:[b," : 501"]})}),x&&!b&&!l&&x.map((function(e,t){return(0,u.jsx)(m,{data:e},t)}))]})})})}}}]);
//# sourceMappingURL=306.c9702a25.chunk.js.map