var webdriver = require('selenium-webdriver') , 
    By = webdriver.By;
var driver = new webdriver.Builder() 
    .forBrowser('chrome')
    .build();

driver.get('file://' + __dirname + '/exception.html');

pause(2, scrapeExample);

/*
* Scraping the Example.html Page for demonstartion of various selenium elements + methods
*/

function scrapeExample() {

    console.log('Scraping the page...');
    // 1. Find Textfield Element by its id and fill it 
    // Exception --> field is hidden
    // 
    driver.findElement(By.id('name')).sendKeys("Chris Scrapegoat").then(null, function(exeption){
        console.log("Element not visible --> " + exeption.name);
    });

    // 2. Find the "female"-Radiobutton by its xpath and click on the field
    // Execption xpath wrong too much [
    driver.findElement(By.xpath('//input[[@value="female"]')).click().then(null, function(exeption){
        console.log("Wrong xpath --> " + exeption.name);
    });
   
    // 3. Find Checkbox by its name click on it
    // Exeception vehicle 3 doesnt exist
    driver.findElement(By.name('vehicle3')).click().then(function(success){
        console.log('Click successfull');
    }, function(exeption){
        console.log("Vehicle 3 doesnt exist --> " + exeption.name);
    });
    
    
    pause(10, quitDriver);
}

function pause(time, funcName){         // wait before doing function
    setTimeout(funcName, time * 1000);  // delay time in seconds
    /*
    * Example would be
    * Pause(2, scrapeExample);
    * ==> calls the method after 2 seconds of delay
    */

}

function quitDriver() {
    driver.close();
    driver.quit();
}