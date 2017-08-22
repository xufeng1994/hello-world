require("chromedriver")
const path = require("path")
var webdriver = require("selenium-webdriver")
var web = new  webdriver.Builder().forBrowser("chrome").build();
var By = webdriver.By;
web.get("http://www.baidu.com")
web.findElement(By.className('soutu-btn')).click()
baiduImage = path.join(__dirname,"moreProduct.png")   // path 中join 方法可以将返回一个文件路径
                                                      //_dername 表示的是当前目录
web.findElement(By.className('upload-pic')).sendKeys(baiduImage)

