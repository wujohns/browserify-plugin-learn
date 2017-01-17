(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var style = require('./style.css');
var style2 = require('./style2.css');
var lib = require('./lib');

console.log(style.BBArea);
var content = document.getElementById('content');
content.className = style.BBArea;

lib.bbfn();
},{"./lib":2,"./style.css":3,"./style2.css":4}],2:[function(require,module,exports){
module.exports = {
    bbfn: function () {
        console.log('----bbfn----');
    }
}
},{}],3:[function(require,module,exports){

                        module.exports = {"BBArea":"_BBArea_awrmr_1"};
                        
                    
},{}],4:[function(require,module,exports){

                        module.exports = {"BBArea":"_BBArea_dc85v_1"};
                        (function() { 
                            var head = document.getElementsByTagName('head')[0];
                            var style = document.createElement('style');
                            style.type = 'text/css';
                            var css = "._BBArea_dc85v_1 {\n  height: 100px;\n  width: 100px;\n  background-color: #aaa;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImlucHV0IiwiPGlucHV0IGNzcyAyPiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7Q0NDSCIsImZpbGUiOiJ0by5jc3MifQ== */";
                            if (style.styleSheet) {
                                style.styleSheet.cssText = css;
                            } else {
                                style.appendChild(document.createTextNode(css));
                            }
                            head.appendChild(style);
                        }())
                    
},{}]},{},[1])

//# sourceMappingURL=bundle.js.map
