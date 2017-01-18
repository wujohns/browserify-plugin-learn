(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var style = require('./style.css');
var style2 = require('./style2.css');
var lib = require('./lib');

console.log(style.BBArea);
var content = document.getElementById('content');
content.className = 'BBArea';

lib.bbfn();
},{"./lib":2,"./style.css":3,"./style2.css":4}],2:[function(require,module,exports){
module.exports = {
    bbfn: function () {
        console.log('----bbfn----');
    }
}
},{}],3:[function(require,module,exports){

                    module.exports = {};
                    (function() { 
                        var head = document.getElementsByTagName('head')[0];
                        var style = document.createElement('style');
                        style.type = 'text/css';
                        var css = ".xxx {\n  background-color: #aaa;\n}\n.BBArea {\n  height: 100px;\n  width: 100px;\n  background-color: #ccc;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImlucHV0Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksc0JBQUE7O0FBR0o7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLnh4eCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2FhYTtcbn1cblxuLkJCQXJlYSB7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcbn0iXX0= */";
                        if (style.styleSheet) {
                            style.styleSheet.cssText = css;
                        } else {
                            style.appendChild(document.createTextNode(css));
                        }
                        head.appendChild(style);
                    }())
                
},{}],4:[function(require,module,exports){

                    module.exports = {};
                    (function() { 
                        var head = document.getElementsByTagName('head')[0];
                        var style = document.createElement('style');
                        style.type = 'text/css';
                        var css = ".BBAreaa {\n  height: 100px;\n  width: 100px;\n  background-color: #aaa;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImlucHV0Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQSIsInNvdXJjZXNDb250ZW50IjpbIi5CQkFyZWFhIHtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWFhO1xufSJdfQ== */";
                        if (style.styleSheet) {
                            style.styleSheet.cssText = css;
                        } else {
                            style.appendChild(document.createTextNode(css));
                        }
                        head.appendChild(style);
                    }())
                
},{}]},{},[1])

//# sourceMappingURL=bundle.js.map
