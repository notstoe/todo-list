!function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";n.r(e),function(){const t=document.querySelector("#content"),e=document.createElement("div");e.classList.add("titleContainer");const n=document.createElement("h1");n.setAttribute("id","pageTitle"),n.textContent="To-Do";const o=document.createElement("h2");o.textContent="Your own personal To-Do list!",o.setAttribute("id","subtitle"),e.append(n,o),t.appendChild(e);const r=document.createElement("div");r.classList.add("containerTabContent");const c=document.createElement("div");c.classList.add("containerTabs");const i=document.createElement("p");i.textContent="+",i.classList.add("tab"),i.setAttribute("id","newTabBtn"),c.appendChild(i);const a=document.createElement("p");a.textContent="All Categories",a.classList.add("tab"),c.insertBefore(a,i),r.appendChild(c),t.appendChild(r);const d=document.createElement("div");d.classList.add("tabContent"),r.appendChild(d)}()}]);