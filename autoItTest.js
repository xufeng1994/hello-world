/**
 * autoit自动化测试工具
 * 
 * download：https://www.autoitscript.com/site/autoit/downloads/
 */

require("chromedriver")
var webdriver = require("selenium-webdriver")
var process = require("child_process") 
var path = require("path")
var exepath = path.join(__dirname,"..","..","studyeveryday.exe")
var web = new webdriver.Builder().forBrowser("chrome").build();
var By = webdriver.By;
web.get("http://www.baidu.com")
web.findElement(By.className('soutu-btn')).click()                    //  找到上传图片图标
web.findElement(By.className('upload-pic')).click().then(function (){ // 找到上传图片按钮 然后执行如下方法
   process.execFileSync(exepath); 
})    