/**
 *  百度地图的一系列操作
 * 
 */
require("chromedriver")
const webdriver = require("selenium-webdriver")
const by = webdriver.By;
const web = new webdriver.Builder().forBrowser("chrome").build();
web.get("http://map.baidu.com/")
web.findElement(by.id("sole-input")).sendKeys("中华艺术宫")
web.sleep(3000)
web.findElement(by.css('#ui3-suggest-scroll > ul > li:nth-child(1)')).click()
web.sleep(5000)
web.findElement(by.css('#card-1 > div > ul > li.search-item.scenery-item > div.cf.mb_5 > div.col-r > div.mt_5.h_20 > a')).click();