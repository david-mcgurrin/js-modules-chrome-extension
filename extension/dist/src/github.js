parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"tJyG":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.sayHello=void 0;var e=function(e){var o=(new Date).getHours(),t="Good morning!";return o>=12&&o<=17?t="Good luck!":o>=17&&(t="Good evening!"),"".concat(t," ").concat(e)};exports.sayHello=e;
},{}],"GaEU":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.product=exports.sum=void 0;var r=function(r,e){return r+e};exports.sum=r;var e=function(r,e){return r*e};exports.product=e;
},{}],"pdzq":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=12345,t=e;exports.default=t;
},{}],"YBil":[function(require,module,exports) {
"use strict";var o=require("./modules/greeting.js"),e=require("./modules/math-functions.js"),t=s(require("./modules/github-auth.js"));function s(o){return o&&o.__esModule?o:{default:o}}var n=4,c=6;console.log("Hello and welcome to the github.js file!"),console.log("The contents of this file only run on Github, as oultined in the content scripts section of the manifest.json file."),console.log("Using Parceljs we are able to make use of imports!"),console.log(""),console.log((0,o.sayHello)("Nice to see you!")),console.log("The sum of ".concat(n," and ").concat(c," is ").concat((0,e.sum)(n,c),".")),console.log("The product of ".concat(n," and ").concat(c," is ").concat((0,e.product)(n,c),".")),console.log("The test token is ".concat(t.default,"."));
},{"./modules/greeting.js":"tJyG","./modules/math-functions.js":"GaEU","./modules/github-auth.js":"pdzq"}]},{},["YBil"], null)
//# sourceMappingURL=src/github.js.map