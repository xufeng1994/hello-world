/**
 * 读取json文件
*/
require("chromedriver")
const path = require("path")
var webdriver = require("selenium-webdriver")
var web = new webdriver.Builder().forBrowser("chrome").build();
var By = webdriver.By;
web.get("http://www.baidu.com")

//read json
var data = require("./data.json")
let info = data.factory

 console.log(info)

for(var every of info){
    console.log(every.worker)
    web.findElement(By.id("kw")).clear()
    web.sleep(3000)
    web.findElement(By.id('kw')).sendKeys(every.worker)
}
web.sleep(3000)
web.quit()