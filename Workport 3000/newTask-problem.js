require('chromedriver')
const webdriver=require('selenium-webdriver')
let until=webdriver.until;
var by = webdriver.By;
var fs = require("fs")
var path = require("path");
const web=new webdriver.Builder().forBrowser('chrome').build()
var baidupath = path.join(__dirname,"..","baidu.png")
web.get('http://192.168.198.129:3000/')
web.manage().window().maximize()
web.findElement(by.css('body > div.navbar > div > div > ul > li:nth-child(6) > a')).click()
web.findElement(by.id('name')).sendKeys('xufeng')
web.findElement(by.id('pass')).sendKeys('xf13451082032')
web.findElement(by.id('pass')).submit();                                                   //  登录操作
web.findElement(by.className('span-success')).click()                                   //点击发布话题
web.sleep(2000)
web.findElement(by.id('tab-value')).click()                                             //点击话题选择
web.findElement(by.css('#tab-value > option:nth-child(2)')).click()                       //选择第二行的元素
// driver.findElement({id:'tab-value'}).click();
// driver.findElement({css:'#tab-value>option:nth-child(2)'}).click()
web.findElement(by.id('title')).sendKeys('早点睡吧，宝贝们')                                 //输入标题
web.findElement(by.css('CodeMirror-scroll')).click()
web.findElement(by.css('CodeMirror-scroll')).sendKeys('早起的鸟儿有虫吃')
// web.findElement(by.className('eicon-image')).click()
// web.findElement(by.name('file')).sendKeys(baidupath)
web.sleep(3000)

web.findElement(by.className('CodeMirror-scroll')).submit();



// var txtpath = by.className('CodeMirror-scroll')                               // 使用移动鼠标的方法 定位正文元素位置输入字段
// web.actions().mouseMove(web.findElement(txtpath)).click().perform();
// web.findElement(txtpath).sendKeys("早起的鸟儿有从吃")
// web.findElement(txtpath).submit();




// web.findElement({css:'.fa.fa-trash'}).click();
// web.switchTo().alert().then((alert)=>{
//     web.sleep(5000);
//     return alert.accept();
// })