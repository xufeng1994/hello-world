/**
 * 读取json文件
*/
require("chromedriver")
var webdriver = require("selenium-webdriver")
var data = require("./data.json") 
var web = new webdriver.Builder().forBrowser("chrome").build();
var By = webdriver.By;
web.get("http://www.baidu.com")

//read json
                        // 新建一个data 读取json文件
let info = data.factory                                   //新建一个info 对象 将data中的数据库factory 赋值进去

 console.log(info)                                        // 输出factory的对象内容

for(var every of info){                                   // 便利info 中的每个对象内容
    console.log(every.worker)                             // 输出
    web.sleep(5000) 
    web.findElement(By.id("kw")).clear()                  // 清空文本框的数据
    web.sleep(3000)
    web.findElement(By.id('kw')).sendKeys(every.worker)   // every.worker 是输出遍历后的每一个对象的值
}
web.sleep(3000)
web.quit()