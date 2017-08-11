require("chromedriver");
var web =require("selenium-webdriver");
var baidu = new web.Builder().forBrowser("chrome").build();
var by = web.By;
baidu.get("http://www.baidu.com");
//baidu.findElement({id: "kw"}).sendKeys("qwer");
//baidu.findElement({id: "su"}).click();
// baidu.findElement(by.xpath('//*[@id="1"]/h3/a')).click();
baidu.findElement(by.xpath('//*[@id="u1"]/a[4]')).click();