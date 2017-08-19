require("chromedriver")
var webdriver = require("selenium-webdriver")
var web = new  webdriver.Builder().forBrowser("chrome").build();
var By = webdriver.By;
web.get("http://www.baidu.com")
web.findElement(By.id('kw')).sendKeys("eason");
web.findElement(By.id("su")).click();
web.sleep(5000);
web.findElement(By.xpath('//*[@id="2"]/h3/a')).click();
web.getAllWindowHandles().then(function(handles){
    // console.log(handles.length);
    web.switchTo().window(handles[0]).then(function(){
        web.sleep(3000);
        web.findElement(By.xpath('//*[@id="3"]/h3/a')).click();
        console.log(handles.length);
    })
});