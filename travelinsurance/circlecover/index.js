var webdriver = require('selenium-webdriver'); 
var By = webdriver.By;
var tripTypes =     {singleTrip:2, //Please Select is index 1
                    anualTrip:3,
                    cruise:4};
var destinations = {singleTrip:     {europe: 2, //Please Select is index 1
                                    australia: 3,
                                    wwExclude: 4,
                                    wwInclude: 5,
                                    uk: 6},
                    anualTrip:      {europe: 2, //Please Select is index 1
                                    wwInclude: 3},
                    cruise:         {europe: 2, //Please Select is index 1
                                    australia: 3,
                                    wwExclude: 4,
                                    wwInclude: 5,
                                    uk: 6}
                    };

function Run(tripType, location, groupType, tripDays,ages, delay, driver, resultsCallback){
    driver.get('https://www.circlecover.com');

    function pause(time, funcName){         // wait before doing function
        setTimeout(funcName, time * 1000);  // delay time in seconds
    }

    function ConvertDate(){
        var d = new Date();
        function Padding(S){ return (S < 10) ? '0' + S : S;}
        return [Padding(d.getDate()), Padding(d.getMonth()+1), d.getFullYear()].join('/')
    }

    pause(10, setCover);

    function setCover(){
        var id = tripTypes[tripType];
        driver.findElement(By.xpath('// select[@id="ddPolicyType"]/option[' + id + ']'));
    }

}