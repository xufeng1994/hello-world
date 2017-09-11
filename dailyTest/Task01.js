require('chromedriver')
const webdriver=require('selenium-webdriver')
let until=webdriver.until;
var by = webdriver.By;
var fs = require("fs")
var path = require("path");
const web=new webdriver.Builder().forBrowser('chrome').build()
var nuomipath = path.join(__dirname,"nuomi.png")
web.get('http://192.168.198.129:3000/')
web.manage().window().maximize()
web.findElement(by.css('body > div.navbar > div > div > ul > li:nth-child(5) > a')).click()
web.sleep(1000)
web.findElement(by.css('body > div.navbar > div > div > ul > li:nth-child(6) > a')).click()
web.findElement(by.id('name')).sendKeys('xufeng')
web.findElement(by.id('pass')).sendKeys('xf13451082032')
web.findElement(by.id('pass')).submit();                                                //  登录操作
web.findElement(by.className('span-success')).click()                                   //点击发布话题
web.sleep(2000)
web.findElement(by.id('tab-value')).click() 
web.findElement(by.css('#tab-value > option:nth-child(2)')).click()                     //选择第二行的元素
web.findElement(by.id('title')).sendKeys('添加图片一次')                                 //输入标题
// //  添加链接   
// web.findElement(by.className("eicon-link")).click()                                                      
// web.findElement(by.css('body > div.modal.hide.fade.in > div.modal-body > form > div:nth-child(1) > div > input[type="text"]')).sendKeys("百度海贼王")
// web.findElement(by.name("link")).sendKeys("www.baidu.com")
// web.findElement(by.className("btn btn-primary")).click() 
//定位正文元素 位置并且输入文字
web.findElement(by.css('.CodeMirror.cm-s-paper')).click()
let txt = web.findElement(by.xpath('//*[@id="create_topic_form"]/fieldset/div/div/div[2]/div[6]/div[2]'))
web.actions().mouseMove(txt).sendKeys("早起的鸟儿被虫吃").perform()
//添加图片
web.findElement(by.css('.eicon-image')).click()
 web.findElement(by.name('file')).sendKeys(nuomipath)
web.sleep(3000)
 // 提交话题    有点问题    使用正文中元素submit方法提交话题
 web.findElement(by.className('CodeMirror cm-s-paper')).submit()

