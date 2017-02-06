(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var style = require('./style.css');
var style2 = require('./style2.css');
var lib = require('./lib');

console.log(style);
var content = document.getElementById('content');
content.className = style.BBArea + ' ' + style.aaa;

// var head = document.getElementsByTagName('head')[0];
// var link = document.createElement('link');
// link.rel = 'stylesheet';
// link.type = 'text/css';
// link.href = './dist/main.css';
// head.appendChild(link);

lib.bbfn();
},{"./lib":2,"./style.css":3,"./style2.css":4}],2:[function(require,module,exports){
module.exports = {
    bbfn: function () {
        console.log('----bbfn----');
    }
}
},{}],3:[function(require,module,exports){
module.exports = {"xxx":"_xxx_7gpjh_1","BBArea":"_BBArea_7gpjh_4","aaa":"_aaa_7gpjh_9"};
                            (function() {
                                var head = document.getElementsByTagName('head')[0];
                                var style = document.createElement('style');
                                style.type = 'text/css';
                                var css = "._xxx_7gpjh_1 {\n  background-color: #aaa;\n}\n._BBArea_7gpjh_4 {\n  height: 100px;\n  width: 100px;\n  background-color: #ccc;\n}\n._BBArea_7gpjh_4._aaa_7gpjh_9 {\n  height: 200px;\n}\n";
                                if (style.styleSheet) {
                                    style.styleSheet.cssText = css;
                                } else {
                                    style.appendChild(document.createTextNode(css));
                                }
                                head.appendChild(style);
                            }())
                        
},{}],4:[function(require,module,exports){
module.exports = {"BBAreaa":"_BBAreaa_vslf8_1"};
                            (function() {
                                var head = document.getElementsByTagName('head')[0];
                                var style = document.createElement('style');
                                style.type = 'text/css';
                                var css = "._BBAreaa_vslf8_1 {\n  height: 100px;\n  width: 100px;\n  background-color: #aaa;\n}\n";
                                if (style.styleSheet) {
                                    style.styleSheet.cssText = css;
                                } else {
                                    style.appendChild(document.createTextNode(css));
                                }
                                head.appendChild(style);
                            }())
                        
},{}]},{},[1])

//# sourceMappingURL=bundle.js.map
