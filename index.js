require("chromedriver");
 var webdriver = require("selenium-webdriver");
var web = new webdriver.Builder().forBrowser("chrome").build();
web.get("http://www.baidu.com");
web.findElement({id:"kw"}).sendKeys("xufeng");
web.findElement({id:"su"}).click();
web.get("http://www.yahoo.com");
web.findElement({id:"uh-search-box"}).sendKeys("xufeng");
web.findElement({id:"uh-search-button"}).click();
