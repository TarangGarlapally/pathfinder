(this.webpackJsonppathfinder=this.webpackJsonppathfinder||[]).push([[0],{10:function(t,e,n){},11:function(t,e,n){"use strict";n.r(e);var r=n(1),c=n.n(r),o=n(4),i=n.n(o),s=n(2),a=n(0);function u(t){var e=Object(r.useState)(t.type),n=Object(s.a)(e,2),c=n[0],o=n[1],i=Object(r.useContext)(j),u=i.cursorState,d=i.setCursorState,l=Object(r.useContext)(b).setSloc,f=Object(r.useContext)(O).setDloc,v=function(t){"source"!==c&&"destination"!==c&&(t.target.style.backgroundColor="black",o("wall"))};return Object(a.jsx)("div",{id:t.id,type:c,className:"gridCube "+t.color,onDragOver:v,onClick:function(t){return"source"===u?(t.target.style.backgroundColor="green",o("source"),l(t.target.id),void d("destination")):"destination"===u?(t.target.style.backgroundColor="red",o("destination"),f(t.target.id),void d("blank")):void v(t)}})}function d(){for(var t=[],e=0;e<20;e++){for(var n=[],r=0;r<40;r++){n.push({id:e.toString()+" "+r.toString(),color:"white",type:"blank"})}t.push(n)}return Object(a.jsx)("div",{className:"grid",children:t.map((function(t,e){return Object(a.jsx)("div",{className:"gridOut",children:t.map((function(t,e){return Object(a.jsx)(u,{id:t.id.toString(),color:t.color,type:t.type},e)}))},e)}))})}function l(){var t=Object(r.useContext)(j),e=t.cursorState,n=t.setCursorState,c=Object(r.useContext)(b).sloc;Object(r.useContext)(O).dloc;return Object(a.jsxs)("div",{style:{textAlign:"center"},children:[Object(a.jsx)("br",{}),Object(a.jsx)("button",{onClick:function(t){t.preventDefault(),"source"===e||"destination"===e?alert("Set both source and destination"):document.getElementById("res").innerHTML=function(t,e){function n(t){for(var e=2e3,n=-1,r=0;r<t.length;r++)t[r].f<=e&&(e=t[r].f,n=r);return n}for(var r=[{f:0,id:t.split(" ")},{f:2,id:[0,1]}];0!==r.length;){var c=n(r);r[c],r.splice(c,1);for(var o=0;o<8;o++);}return t}(c)},children:"Find Path"}),Object(a.jsx)("button",{onClick:function(t){t.preventDefault();for(var e=0;e<20;e++)for(var r=0;r<40;r++)document.getElementById(e.toString()+" "+r.toString()).style.backgroundColor="white";n("source"),document.getElementById("res").innerHTML=""},children:"Reset"}),Object(a.jsx)("p",{id:"res"})]})}var j=Object(r.createContext)(),b=Object(r.createContext)(),O=Object(r.createContext)();var f=function(){var t=Object(r.useState)("source"),e=Object(s.a)(t,2),n=e[0],c=e[1],o=Object(r.useState)(""),i=Object(s.a)(o,2),u=i[0],f=i[1],v=Object(r.useState)(""),g=Object(s.a)(v,2),x=g[0],h=g[1];return Object(a.jsx)(j.Provider,{value:{cursorState:n,setCursorState:c},children:Object(a.jsx)(b.Provider,{value:{sloc:u,setSloc:f},children:Object(a.jsx)(O.Provider,{value:{dloc:x,setDloc:h},children:Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(l,{}),Object(a.jsx)(d,{})]})})})})},v=(n(10),function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,12)).then((function(e){var n=e.getCLS,r=e.getFID,c=e.getFCP,o=e.getLCP,i=e.getTTFB;n(t),r(t),c(t),o(t),i(t)}))});i.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(f,{})}),document.getElementById("root")),v()}},[[11,1,2]]]);
//# sourceMappingURL=main.ffaa8192.chunk.js.map