require("chromedriver");
 var webdriver = require("selenium-webdriver"); 
var web = new webdriver.Builder().forBrowser("chrome").build();       //新建一个web 打开浏览器
web.get("http://www.baidu.com");                                      //打开一个网页
web.findElement({id:"kw"}).sendKeys("xufeng");                        //找到搜索框，键入xufeng
web.findElement({id:"su"}).click();                                   //找到搜索框，点击
web.get("http://www.yahoo.com");
web.findElement({id:"uh-search-box"}).sendKeys("xufeng");
web.findElement({id:"uh-search-button"}).click();
