parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"zjSK":[function(require,module,exports) {
"use strict";var e=document.querySelector(".mobile-lang-trigger"),t=document.querySelector(".language-mobile-close"),n=document.querySelector(".language");e.addEventListener("click",function(){n.classList.add("language--show")}),t.addEventListener("click",function(){n.classList.toggle("language--show")});var a=document.querySelectorAll(".language__btn"),r=document.querySelector(".language__back"),i=document.querySelector(".language__btn--active"),o=function(){window.innerWidth>=1280?(r.innerHTML=i.getAttribute("data-short"),a.forEach(function(e){e.innerText=e.getAttribute("data-short")})):(r.innerHTML="",a.forEach(function(e){e.innerText=e.getAttribute("data-name")}))};window.addEventListener("load",o),window.addEventListener("resize",o),n.addEventListener("click",function(e){var t=e.target;t.classList.contains("language__btn")&&(document.querySelector(".language--show").classList.remove("language--show"),r.innerHTML=t.innerText)});
},{}]},{},["zjSK"], null)
//# sourceMappingURL=language.0bec9ab6.js.map