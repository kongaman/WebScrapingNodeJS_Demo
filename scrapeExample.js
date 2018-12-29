var webdriver = require('selenium-webdriver') , 
    By = webdriver.By;
var driver = new webdriver.Builder() 
    .forBrowser('chrome')
    .build();

driver.get('file://' + __dirname + '/Example.html');

pause(2, scrapeExample);

/*
* Scraping the Example.html Page for demonstartion of various selenium elements + methods
*/

function scrapeExample() {

    console.log('Scraping the page...')


}

function pause(time, funcName){         // wait before doing function
    setTimeout(funcName, time * 1000);  // delay time in seconds
    /*
    * Example would be
    * Pause(2, scrapeExample);
    * ==> calls the metod after 2 seconds of delay
    */

}

function quitDriver() {
    driver.close();
    driver.quit();
}