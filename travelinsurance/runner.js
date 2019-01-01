var webdriver = require('selenium-webdriver');
var fs = require('fs');
var chrome = require('chromedriver');

var driver = null;
const delayFactor = 1;
const travelinsurance = 'circlecover';
var site = require('./' + travelinsurance);
var params = require('./'+ travelinsurance + 'data.js').data;
const filePath = travelinsurance + '.csv';
var currentParams = undefined;
console.log('running travel isnurance website: ' + travelinsurance);
