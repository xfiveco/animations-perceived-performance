(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";require("./modules/imageLoaded")(),require("./modules/preloader")();
},{"./modules/imageLoaded":2,"./modules/preloader":3}],2:[function(require,module,exports){
"use strict";module.exports=function(){var t=document.querySelector(".js-image-load");if(t)if(t.hasAttribute("data-target")){var e=new Image,a=document.querySelector(t.getAttribute("data-target")),d=t.getAttribute("xlink:href");e.src=d,e.onload=function(){a.classList.add("src-image-loaded")}}else t.onload=function(){this.classList.add("is-loaded")}};
},{}],3:[function(require,module,exports){
"use strict";module.exports=function(){var e=document.querySelector("body.is-loading");e&&setTimeout(function(){e.classList.remove("is-loading"),e.classList.add("is-loaded")},2e3)};
},{}]},{},[1])


//# sourceMappingURL=bundle.map.json