/**
 * selenium-webdriver 
 * 
 * 显示等待与隐示等待
 * 
 *  显示等待  sleep
 *  隐示等待  wait  
 * 
 * wait 的用法
 * 
 */
require("chromedriver")
const webdriver = require("selenium-webdriver")
const by = webdriver.By;
const until = webdriver.until;
const web = new webdriver.Builder().forBrowser("chrome").build();
web.get("http://map.baidu.com/")
web.findElement(by.id("sole-input")).sendKeys("中华艺术宫")

var button1 = web.wait(until.elementLocated(by.css('#ui3-suggest-scroll > ul > li:nth-child(1)')),5000)
button1.click()

var button2 = web.wait(until.elementLocated(by.css('#card-1 > div > ul > li.search-item.scenery-item > div.cf.mb_5 > div.col-r > div.mt_5.h_20 > a')),5000)
button2.click()