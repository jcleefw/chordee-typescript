(this.webpackJsonppff=this.webpackJsonppff||[]).push([[0],{28:function(e,t,n){e.exports=n(40)},33:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var a,r=n(0),c=n.n(r),o=n(23),l=n.n(o),i=(n(33),n(12)),u=n(2),m=function(){return c.a.createElement("nav",{className:"border fixed split-nav row"},c.a.createElement("div",{className:"nav-brand"},c.a.createElement("h3",null,c.a.createElement("a",{href:"#"},"Chordee"))),c.a.createElement("div",{className:"collapsible"},c.a.createElement("label",{htmlFor:"collapsible1"},c.a.createElement("div",{className:"bar1"}),c.a.createElement("div",{className:"bar2"}),c.a.createElement("div",{className:"bar3"}))),c.a.createElement("div",{className:"collapsible-body"},c.a.createElement("ul",{className:"inline"},c.a.createElement("li",null,c.a.createElement(i.b,{to:"/"},"Home")),c.a.createElement("li",null,c.a.createElement(i.b,{to:"/fretboard"},"Fretboard")),c.a.createElement("li",null,c.a.createElement(i.b,{to:"/metronome-app"},"Metronome App")))))},s=n(27),f=n(41),d=n(45);n(44),n(42);!function(e){e.c="C",e.d="D",e.e="E",e.f="F",e.g="G",e.a="A",e.b="B"}(a||(a={}));var v=["a","a#","b","c","c#","d","d#","e","f","f#","g","g#"],h=function(e){return 100/e},g=function(e){return function(t){return function(e){return function(t){return t*h(e)}}(e)(t)+h(e)/2}},E=function(e){return"".concat(e.note).concat(e.octave)},b=function(e,t){return function(n){var a=function(e){return{top:g(e)(0),bottom:g(e)(e-1)}}(t),r=a.top,o=a.bottom,l=100/e*n;return c.a.createElement("line",{className:"fret fret-".concat(n),key:"fret-".concat(n),x1:"".concat(l,"%"),x2:"".concat(l,"%"),y1:"".concat(r,"%"),y2:"".concat(o,"%")})}},p=function(e){var t=e.nrOfStrings,n=e.nrOfFrets;return c.a.createElement("g",null,Object(f.a)(function(e){return function(t){var n=g(e)(t);return c.a.createElement("line",{className:"str str-".concat(t),key:"str-".concat(t),x1:"0%",x2:"100%",y1:"".concat(n,"%"),y2:"".concat(n,"%")})}}(t),t),Object(d.a)(1,n).map(b(n,t)))},w=function(e){var t=e.nrOfStrings,n=g(t)(0),a=g(t)(t-1)-n;return c.a.createElement("rect",{x:"0",y:"".concat(n,"%"),width:"100%",height:"".concat(a,"%"),fill:"black"})},x=function(e){var t=e.width,n=e.offset,a=e.children;return c.a.createElement("svg",{width:"".concat(t,"%"),height:"100%",x:"".concat(n,"%"),y:"0"},a)},y=function(e){var t=e.children;return c.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",version:"1.1",width:"100%",height:"100%",stroke:"black",strokeWidth:"1",fill:"white",shapeRendering:"geometricPrecision",style:{overflow:"visible"}},t)},O=function(e){var t=e.boardHeight,n=e.children;return c.a.createElement("div",{className:"board",style:{height:"".concat(t,"px")}},n)},k=n(9),j=n(10),N=n(43);function H(){var e=Object(k.a)(["\n  background: white;\n  padding: 0 5px;\n"]);return H=function(){return e},e}function C(){var e=Object(k.a)(["\n  position: relative;\n  font-size: 0.8rem;\n"]);return C=function(){return e},e}function F(){var e=Object(k.a)(["\n  display: flex;\n  align-items: center;\n"]);return F=function(){return e},e}function S(){var e=Object(k.a)(["\n  display: flex;\n  flex-direction: column;\n"]);return S=function(){return e},e}var A=j.a.div(S()),B=j.a.div(F()),U=j.a.div(C()),W=j.a.span(H()),z=function(e){var t=e.tuning,n=e.showOctave,a=void 0!==n&&n,r=e.boardHeight,o=Object(N.a)(t),l=o.map((function(e,n){var l=function(e,t){var n=v.indexOf(e.note.toLowerCase())+1,a=[],r=e.octave;return Object(f.a)((function(){a.push({note:v[n],octave:r}),n<11?n+=1:(n=0,r+=1)}),t),a}(o[n],15),i=100/t.length,u=r/6,m=l.map((function(e,t){var r=a?E(e):e.note;return c.a.createElement(U,{className:"fret-note",style:{width:"".concat(i,"%"),textAlign:"center"},key:"note-".concat(n,"-").concat(t),"data-note":E(e)},c.a.createElement(W,null,r.toUpperCase()))}));return c.a.createElement(B,{className:"fret-row",style:{height:"".concat(u,"px")},key:"row-".concat(n)},m)}));return c.a.createElement("foreignObject",{width:"100%",height:"100%"},c.a.createElement(A,null,l))};function D(){var e=Object(k.a)(["\n  font-size: 0.9rem;\n  color: green;\n  font-family: 'Patrick Hand SC';\n  font-weight: bold;\n"]);return D=function(){return e},e}function J(){var e=Object(k.a)(["\n  margin-top: 4px;\n"]);return J=function(){return e},e}var P,G=j.a.div(J()),I=j.a.div(D()),L=function(e){var t=e.tuning,n=e.boardHeight/t.length;return c.a.createElement("foreignObject",{width:"100%",height:"100%"},c.a.createElement(G,null,function(e){var t=e.map((function(e){return"".concat(e.note).concat(e.octave).toUpperCase()}));return Object(N.a)(t)}(t).map((function(e,t){return c.a.createElement(I,{style:{height:n},key:t},e.toUpperCase())}))))};function M(){var e=Object(k.a)(["\n  margin-top: 50px;\n  background-color: white;\n"]);return M=function(){return e},e}!function(e){e[e.small=20]="small",e[e.medium=25]="medium",e[e.large=30]="large",e[e.xlarge=40]="xlarge"}(P||(P={}));var R=j.a.div(M()),$=[{note:a.e,octave:2},{note:a.a,octave:2},{note:a.d,octave:3},{note:a.g,octave:3},{note:a.b,octave:3},{note:a.e,octave:4}],q=6*P.large,K=function(){return c.a.createElement(R,{className:"container container-lg container-xl"},c.a.createElement("div",null,s.a.get("D major").notes),c.a.createElement(O,{boardHeight:q},c.a.createElement(y,null,c.a.createElement(x,{width:3,offset:0},c.a.createElement(L,{tuning:$,boardHeight:q})),c.a.createElement(x,{width:.75,offset:3},c.a.createElement(w,{nrOfStrings:6})),c.a.createElement(x,{width:95,offset:3.75},c.a.createElement(p,{nrOfStrings:6,nrOfFrets:15}),c.a.createElement(z,{boardHeight:q,tuning:$})))))},Q=function(){return c.a.createElement(R,null,c.a.createElement("div",null,"Hello"))},T=function(){return c.a.createElement("div",{className:"paper"},c.a.createElement(i.a,null,c.a.createElement(m,null),c.a.createElement(u.c,null,c.a.createElement(u.a,{exact:!0,path:"/"},c.a.createElement(Q,null)),c.a.createElement(u.a,{path:"/fretboard"},c.a.createElement(K,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(T,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[28,1,2]]]);
//# sourceMappingURL=main.94faa1a3.chunk.js.map