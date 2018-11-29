"use strict";

var http = require('http');
var url = require('url');

http.createServer(function (req, res) {
let k = url.parse(req.url, true);
let values = k.query;

let operations = {
	"/add" : (a, b) => a + b,
	"/sub" : (a, b) => a - b,
	"/mul" : (a, b) => a * b,
	"/div" : (a, b) => a / b
}

let operator = k.pathname;
let reg = /^\d+$/;

if (!reg.test(values.value1) || !reg.test(values.value2)) {
	res.write('Values aren't a numbers');
} else if (!(operator in operations)) {
	res.write('Not Valid operator, enter: "/add, /sub, /div, /mul"');
} else {
	let val1 = parseInt(values.value1);
	let val2 = parseInt(values.value2);
	
	res.write('<h1>Result = ' + operations[operator](val1, val2) + '</h1>' +
	'<style> h1 { text-align: center } </style>');
}


res.end();
}).listen(4444);