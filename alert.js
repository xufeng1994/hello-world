require("chromedriver")
var webdriver = require("selenium-webdriver")
var web = new  webdriver.Builder().forBrowser("chrome").build();
var By = webdriver.By;
web.get("file:///D:/AutoTest/MyProject/hello-world/example.html")
web.switchTo().alert().then(function(alert){
    web.sleep(3000)
    return alert.accept();
})