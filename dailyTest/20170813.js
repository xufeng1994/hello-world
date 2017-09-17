require("chromedriver");
 var web =require("selenium-webdriver");
 var chrome = require("selenium-webdriver/chrome")

 var website = new web.Builder().forBrowser("chrome").setChromeOptions(new chrome.Options().headless()).build();   

 function openweb(url){
    website.get("http://www."+ url + ".com");            // 输入网址的格式
 }
openweb("baidu");                                        //  输入网址的名称就好了
openweb("sohu");