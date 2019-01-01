var webdriver = require('selenium-webdriver') , 
    By = webdriver.By;
var chrome = require('chromedriver'); //requiring chromedriver installed via NPM
var fs = require('fs');
var driver = new webdriver.Builder() 
    .forBrowser('chrome')
    .build();

driver.get('http://jazebakram.com/'); // website to scrape

pause(2, screenshot);

/*
* Scraping the Example.html Page for demonstartion of various selenium elements + methods
*/

function screenshot() {

    console.log('Taking a screenshot! 3 2 1"');
    driver.takeScreenshot().then(function(image, err){
        fs.writeFile('./images/jazebweb.png', image, 'base64', function(err){
            console.log(err);
            if(err == null){
                console.log("Screenshot captured and saved in images directory");
            }
        });
    });
   
    
    pause(4, quitDriver);
}

function pause(time, funcName){         // wait before doing function
    setTimeout(funcName, time * 1000);  // delay time in seconds
}

function quitDriver() {
    driver.close();
    driver.quit();
}