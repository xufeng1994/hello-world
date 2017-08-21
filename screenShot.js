require("chromedriver")
const fs = require('fs');
var webdriver = require("selenium-webdriver")
var web = new webdriver.Builder().forBrowser("chrome").build();
var By = webdriver.By;
web.get("http://www.baidu.com")
web.takeScreenshot().then(function (screenshot) {
    fs.writeFileSync("baidu.png", screenshot, "base64")
})

let gengduo = web.findElement(By.name('tj_briicon'))
web.actions().mouseMove(gengduo).perform();

web.takeScreenshot().then(function (screenshot) {
    fs.writeFileSync("moreProduct.png", screenshot, "base64")
})

web.findElement(By.name('tj_nuomi')).click();

web.takeScreenshot().then(function (screenshot) {
    fs.writeFileSync("nuomi.png", screenshot, "base64")
})
web.sleep(3000)
web.findElement(By.xpath('//*[@id="j-catg-list"]/div[1]/div[1]/dl/dt/a')).click();

web.takeScreenshot().then(function (screenshot) {
    fs.writeFileSync("nuomi-meishi.png", screenshot, "base64")
})                                           