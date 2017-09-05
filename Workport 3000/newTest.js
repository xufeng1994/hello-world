require('chromedriver')
const webdriver=require('selenium-webdriver')
let until=webdriver.until;
let path = require('path')
const driver=new webdriver.Builder().forBrowser('chrome').build()
driver.get('http://192.168.198.129:3000/')
var baidupath = path.join(__dirname,"..","base of base codeTest","baidu.png")
var nuomipath = path.join(__dirname,"..","base of base codeTest","nuomi.png")
driver.manage().window().maximize()
driver.findElement({linkText:'登录'}).click();
driver.findElement({id:'name'}).sendKeys('xufeng');
driver.findElement({id:'pass'}).sendKeys('xf13451082032');
driver.findElement({css:'.span-primary'}).click();  //登录流程

driver.findElement({id:'create_topic_btn'}).click(); // 发布话题
driver.findElement({id:'tab-value'}).click();
driver.findElement({css:'#tab-value>option:nth-child(2)'}).click() //选择板块nth-child(i)
// driver.findElement({xpath:'//*[@id="tab-value"]/option[2]'}).click();
driver.findElement({id:'title'}).sendKeys('很晚了，亲们');
 driver.findElement({css:'.eicon-image'}).click();
 driver.findElement({name:'file'}).sendKeys(baidupath);
driver.sleep(3000);
driver.findElement({css:'.CodeMirror.cm-s-paper'}).click();// 进入div大块
let exec=driver.findElement({xpath:'//*[@id="create_topic_form"]/fieldset/div/div/div[2]/div[6]/div[2]'});// div语句块  
driver.actions().mouseMove(exec).sendKeys('来张帅照，呵呵').perform(); //actions方式
driver.findElement({className:'span-primary submit_btn'}).submit();
driver.sleep(3000);
 driver.findElement({css:'.eicon-image'}).click();
 driver.findElement({name:'file'}).sendKeys(nuomipath);
driver.sleep(3000)
driver.findElement({css:'.CodeMirror.cm-s-paper'}).click();
let ox=driver.findElement({xpath:'//*[@id="reply_form"]/div/div/div[2]/div[6]/div[2]'});
driver.sleep(5000);
driver.actions().mouseMove(ox).sendKeys('小伙子长得还不错吧?').perform();
driver.findElement({xpath:'//*[@id="reply_form"]/div/div/div[3]/input'}).submit();
driver.findElement({css:'.fa.fa-trash'}).click();
driver.switchTo().alert().then((alert)=>{
    driver.sleep(5000);
    return alert.accept();
})