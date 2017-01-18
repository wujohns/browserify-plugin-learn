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

                        module.exports = {"xxx":"_xxx_aravo_1","BBArea":"_BBArea_aravo_4","aaa":"_aaa_aravo_9"};
                        (function() {
                            var head = document.getElementsByTagName('head')[0];
                            var link = document.createElement('link');
                            link.rel = 'stylesheet';
                            link.type = 'text/css';
                            link.href = 'data:text/css;base64,Ll94eHhfYXJhdm9fMSB7CiAgYmFja2dyb3VuZC1jb2xvcjogI2FhYTsKfQouX0JCQXJlYV9hcmF2b180IHsKICBoZWlnaHQ6IDEwMHB4OwogIHdpZHRoOiAxMDBweDsKICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjOwp9Ci5fQkJBcmVhX2FyYXZvXzQuX2FhYV9hcmF2b185IHsKICBoZWlnaHQ6IDIwMHB4Owp9Ci8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJa1U2TDJkcGRHaDFZaTlpY205M2MyVnlhV1o1TFhCc2RXZHBiaTFzWldGeWJpOXpjbU12YzNSNWJHVXVZM056SWl3aVBHbHVjSFYwSUdOemN5QXhQaUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lRVUZCUVR0RlFVTkpMSFZDUVVGQk8wTkRRMGc3UVVSRlJEdEZRVU5KTEdOQlFVRTdSVUZEUVN4aFFVRkJPMFZCUTBFc2RVSkJRVUU3UTBOQlNEdEJSRU5ITzBWQlEwa3NZMEZCUVR0RFEwTlFJaXdpWm1sc1pTSTZJblJ2TG1OemN5SjkgKi8='
                            head.appendChild(link);
                        }())
                    
},{}],4:[function(require,module,exports){

                        module.exports = {"BBAreaa":"_BBAreaa_1r57m_1"};
                        (function() {
                            var head = document.getElementsByTagName('head')[0];
                            var link = document.createElement('link');
                            link.rel = 'stylesheet';
                            link.type = 'text/css';
                            link.href = 'data:text/css;base64,Ll9CQkFyZWFhXzFyNTdtXzEgewogIGhlaWdodDogMTAwcHg7CiAgd2lkdGg6IDEwMHB4OwogIGJhY2tncm91bmQtY29sb3I6ICNhYWE7Cn0KLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYklrVTZMMmRwZEdoMVlpOWljbTkzYzJWeWFXWjVMWEJzZFdkcGJpMXNaV0Z5Ymk5emNtTXZjM1I1YkdVeUxtTnpjeUlzSWp4cGJuQjFkQ0JqYzNNZ01qNGlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklrRkJRVUU3UlVGRFNTeGpRVUZCTzBWQlEwRXNZVUZCUVR0RlFVTkJMSFZDUVVGQk8wTkRRMGdpTENKbWFXeGxJam9pZEc4dVkzTnpJbjA9ICov'
                            head.appendChild(link);
                        }())
                    
},{}]},{},[1])

//# sourceMappingURL=bundle.js.map
