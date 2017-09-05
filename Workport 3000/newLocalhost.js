require("chromedriver")
var webdriver = require("selenium-webdriver")
var web = new webdriver.Builder().forBrowser("chrome").build();
let fs = require('fs')
let path = require('path')
var By = webdriver.By;
web.get("http://192.168.198.129:3000")
web.sleep(2000);
web.manage().window().maximize();
web.findElement(By.xpath('/html/body/div[1]/div/div/ul/li[6]/a')).click();  //点击登录 进入登录界面
web.sleep(2000);
web.findElement(By.className('span-primary')).click();
web.sleep(2000);
web.findElement(By.id('name')).sendKeys('xufeng');
web.findElement(By.id('pass')).sendKeys('xf13451082032');
web.findElement(By.className('span-primary')).click();
web.findElement(By.className('span-success')).click();
web.findElement(By.id('tab-value')).click();
web.findElement(By.css('#tab-value > option:nth-child(4)')).click();
web.findElement(By.id('title')).sendKeys('招聘测试工程师')

var txt = web.findElement(By.className('CodeMirror-scroll'))
txt.click();
web.actions().mouseMove(txt).sendKeys('招随便一名测试工程师 颜值》80').perform();

web.findElement(By.className('span-primary submit_btn')).click();
web.sleep(5000)
web.quit();

