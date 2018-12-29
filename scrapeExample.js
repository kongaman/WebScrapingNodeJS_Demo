var webdriver = require('selenium-webdriver') , 
    By = webdriver.By;
var driver = new webdriver.Builder() 
    .forBrowser('chrome')
    .build();

driver.get('file://' + __dirname + '/Example.html');

function scrapeExample() {

    //statement


}


function quitDriver() {
    driver.close();
    driver.quit();
}