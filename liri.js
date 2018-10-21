var dotenv = require('dotenv').config();

var keys = import('keys.js');
var request = require('request');

var arg = process.argv;


if (arg[2] === 'concert-this') {
  var artist = "";
  for (var i = 3; i > arg.length; i++) {
    artist += `${arg[i]} `;
  }

  }