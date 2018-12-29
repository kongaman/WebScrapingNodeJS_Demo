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

    console.log('Scraping the page...');
    // 1. Find Textfield Element by its id and fill it
    driver.findElement(By.id('name')).sendKeys("Chris Scrapegoat")
    console.log('namefield filled...');
    // 2. Find the "female"-Radiobutton by its xpath and click on the field
    driver.findElement(By.xpath('//input[@value="female"]')).click();
    console.log('gender set to female...');
    // 3. Find Checkbox by its name click on it
    driver.findElement(By.name('vehicle1')).click();
    console.log('Honda checked...');
    // 4. Find unordered list by its id and loop through it
    driver.findElements(By.id('fruits')).then(function(elements) {
        for (let i = 0; i < elements.length; i++) {
            elements[i].getText().then(function(text){
                console.log('List of elements in <ul>:\n' + text)
            });         
        }    
    });
    // 5. Find the "BMW"-selectlist-option by its xpath and click on it
    driver.findElement(By.xpath('//select[@id="cars"]/option[@value="BMW"]')).click();
    console.log('BMW selected...');
    // 6. Find the link by a part of its text and log it to console
    driver.findElement(By.partialLinkText('Jazeb'))
    .getAttribute('href').then(function(value){
        console.log("Link: " + value);
    });

    pause(4, quitDriver);
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