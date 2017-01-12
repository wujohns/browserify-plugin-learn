var style = require('./style.css');
var style2 = require('./style2.css');
var lib = require('./lib');

console.log(style.BBArea);
var content = document.getElementById('content');
content.className = style.BBArea;

lib.bbfn();