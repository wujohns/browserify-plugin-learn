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