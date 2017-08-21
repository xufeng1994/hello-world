require("chromedriver")
var webdriver = require("selenium-webdriver")
var web = new  webdriver.Builder().forBrowser("chrome").build();
var By = webdriver.By;
web.get("http://www.baidu.com")

let gengduo = web.findElement(By.name('tj_briicon'))
web.actions().mouseMove(gengduo).perform();  //  鼠标移动到更多产品按钮上
web.findElement(By.name('tj_nuomi')).click();
web.sleep(3000)
web.findElement(By.xpath('//*[@id="j-catg-list"]/div[1]/div[1]/dl/dt/a')).click();
 
