(()=>{"use strict";var e={309:(e,n,t)=>{t.d(n,{Z:()=>a});var i=t(645),r=t.n(i)()((function(e){return e[1]}));r.push([e.id,".home-welcome {\n  color: green;\n}",""]);const a=r},195:(e,n,t)=>{t.d(n,{Z:()=>a});var i=t(645),r=t.n(i)()((function(e){return e[1]}));r.push([e.id,".menu-container {\n  position: relative;\n  overflow: hidden;\n}\n.menu-container h1 {\n  text-align: center;\n  z-index: 2;\n}\n/* You could use :after - it doesn't really matter */\n.menu-container:before {\n  content: ' ';\n  display: block;\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 1;\n  opacity: 0.4;\n  /* background-image: url('../img/bg-menu.jpg'); */\n  background-repeat: no-repeat;\n  background-position: 50% 0;\n  background-size: cover;\n}\n\n.menu-items-details-1 {\n  \n}",""]);const a=r},145:(e,n,t)=>{t.d(n,{Z:()=>a});var i=t(645),r=t.n(i)()((function(e){return e[1]}));r.push([e.id,"*,\n*::before,\n*::after {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n.navbar {\n  height: 50px;\n  width: 100%;\n  border-bottom: 1px solid red;\n  background-color: lightblue;\n\n  display: flex;\n  align-items: center;\n\n}\n\n.nav-left,\n.nav-right {\n  width: 50%;\n}\n\n.nav-right {\n  display: flex;\n  justify-content: flex-end;\n}\n\n.nav-right .nav-list {\n  display: flex;\n  list-style-type: none;\n}\n\n.nav-list .list-item {\n  padding: 0 0.5em;\n}\n\n.brand {\n  width: fit-content;\n}",""]);const a=r},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=e(n);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,i){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(i)for(var a=0;a<this.length;a++){var o=this[a][0];null!=o&&(r[o]=!0)}for(var c=0;c<e.length;c++){var d=[].concat(e[c]);i&&r[d[0]]||(t&&(d[2]?d[2]="".concat(t," and ").concat(d[2]):d[2]=t),n.push(d))}},n}},379:(e,n,t)=>{var i,r=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}(),a=[];function o(e){for(var n=-1,t=0;t<a.length;t++)if(a[t].identifier===e){n=t;break}return n}function c(e,n){for(var t={},i=[],r=0;r<e.length;r++){var c=e[r],d=n.base?c[0]+n.base:c[0],s=t[d]||0,l="".concat(d," ").concat(s);t[d]=s+1;var u=o(l),m={css:c[1],media:c[2],sourceMap:c[3]};-1!==u?(a[u].references++,a[u].updater(m)):a.push({identifier:l,updater:h(m,n),references:1}),i.push(l)}return i}function d(e){var n=document.createElement("style"),i=e.attributes||{};if(void 0===i.nonce){var a=t.nc;a&&(i.nonce=a)}if(Object.keys(i).forEach((function(e){n.setAttribute(e,i[e])})),"function"==typeof e.insert)e.insert(n);else{var o=r(e.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}return n}var s,l=(s=[],function(e,n){return s[e]=n,s.filter(Boolean).join("\n")});function u(e,n,t,i){var r=t?"":i.media?"@media ".concat(i.media," {").concat(i.css,"}"):i.css;if(e.styleSheet)e.styleSheet.cssText=l(n,r);else{var a=document.createTextNode(r),o=e.childNodes;o[n]&&e.removeChild(o[n]),o.length?e.insertBefore(a,o[n]):e.appendChild(a)}}function m(e,n,t){var i=t.css,r=t.media,a=t.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=i;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(i))}}var p=null,f=0;function h(e,n){var t,i,r;if(n.singleton){var a=f++;t=p||(p=d(n)),i=u.bind(null,t,a,!1),r=u.bind(null,t,a,!0)}else t=d(n),i=m.bind(null,t,n),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return i(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;i(e=n)}else r()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=(void 0===i&&(i=Boolean(window&&document&&document.all&&!window.atob)),i));var t=c(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var i=0;i<t.length;i++){var r=o(t[i]);a[r].references--}for(var d=c(e,n),s=0;s<t.length;s++){var l=o(t[s]);0===a[l].references&&(a[l].updater(),a.splice(l,1))}t=d}}}}},n={};function t(i){if(n[i])return n[i].exports;var r=n[i]={id:i,exports:{}};return e[i](r,r.exports,t),r.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var i in n)t.o(n,i)&&!t.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:n[i]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var i=n.getElementsByTagName("script");i.length&&(e=i[i.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),(()=>{var e=t(379),n=t.n(e),i=t(145);n()(i.Z,{insert:"head",singleton:!1}),i.Z.locals;const r=document.getElementById("content"),a=document.createElement("nav"),o=document.createElement("ul"),c=document.createElement("li"),d=document.createElement("li"),s=document.createElement("li"),l=document.createElement("div");var u=t(195);n()(u.Z,{insert:"head",singleton:!1}),u.Z.locals;const m=t.p+"743bc7e55970605f6737d0e3f9dd7a99.jpg",p=document.getElementById("content"),f=document.getElementById("content"),h=document.getElementById("content");var v=t(309);n()(v.Z,{insert:"head",singleton:!1}),v.Z.locals;const g=document.getElementById("content"),b=()=>{const e=document.createElement("div");e.classList.add("home-welcome"),e.innerText="Welcome fellas",g.appendChild(e)};b();const y=()=>{content.innerHTML=""};l.onclick=()=>{y(),b()},(()=>{const e=document.createElement("div");a.classList.add("navbar"),l.classList.add("brand"),l.innerText="RestYourAnt",e.appendChild(l),e.classList.add("nav-left");const n=document.createElement("div");n.classList.add("nav-right"),n.appendChild((o.classList.add("nav-list"),c.classList.add("list-item"),c.innerText="menu",o.appendChild(c),d.classList.add("list-item"),d.innerText="contact",o.appendChild(d),s.classList.add("list-item"),s.innerText="about",o.appendChild(s),o)),a.appendChild(e),a.appendChild(n),document.body.insertBefore(a,r)})(),c.addEventListener("click",(()=>{y(),(()=>{const e=document.createElement("div");e.classList.add("menu-container"),p.appendChild(e);const n=document.createElement("h1");n.innerText="menu",e.appendChild(n);const t=document.createElement("div");t.classList.add("menu-items"),e.appendChild(t);const i=document.createElement("div");i.classList.add("menu-item"),t.appendChild(i);const r=document.createElement("h2");r.classList.add("menu-item-heading"),r.innerText="Starter",i.appendChild(r);const a=document.createElement("div");a.classList.add("menu-items-details-1"),i.appendChild(a);const o=document.createElement("div"),c=new Image;c.src=m,o.classList.add("menu-image"),o.appendChild(c),a.appendChild(o);const d=document.createElement("div");d.classList.add("menu-info"),a.appendChild(d),document.createElement("div"),document.createElement("div"),document.createElement("div"),document.createElement("div"),document.createElement("div")})()})),d.addEventListener("click",(()=>{y(),(()=>{const e=document.createElement("h1");e.innerText="Contact goes here!",f.appendChild(e)})()})),s.addEventListener("click",(()=>{y(),(()=>{const e=document.createElement("h1");e.innerText="About goes here!",h.appendChild(e)})()}))})()})();