var webdriver = require('selenium-webdriver');
var fs = require('fs');
var chrome = require('chromedriver');

var driver = null;
const delayFactor = 1;
const travelinsurance = 'circlecover';
var site = require('./' + travelinsurance);
var params = require('./'+ travelinsurance + '/data.js').data;
const filePath = travelinsurance + '.csv';
var currentParams = undefined;
console.log('running travel isnurance website: ' + travelinsurance);


function loopingParams(){
    console.log('looping Params');
    if (params.length < 1) {
        console.log("There are no test cases left");
        return;
    }
    currentParams = params.shift();

    execTestCases();
}

function execTestCases(){
    driver = new webdriver.Builder().forBrowser('chrome').build();
    console.log('running : ' + JSON.stringify(currentParams));
    var _groupType = 
    currentParams.ages.length === 1 ? 'individual'
    : currentParams.ages.length === 2 ? 'couple'
    : 'family';

    site.Run(
        currentParams.tripType,
        currentParams.location,
        _groupType,
        currentParams.tripDays,
        currentParams.ages,
        delayFactor,
        driver,
        function(results){ //callback function to save data to csv-file

        });
}