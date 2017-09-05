require("chromedriver")
var webdriver = require("selenium-webdriver")
var web = new  webdriver.Builder().forBrowser("chrome").build();
var By = webdriver.By;

web.get("http://www.baidu.com")
web.findElement(By.id('kw')).sendKeys("eason");
web.findElement(By.id("su")).click();
web.sleep(5000);
web.findElement(By.xpath('//*[@id="3"]/h3/a')).click();
web.sleep(2000);
web.findElement(By.xpath('//*[@id="2"]/h3/a')).click();
web.getAllWindowHandles().then(function(handles){              // 先获取到总共打开的窗口，
    web.switchTo().window(handles[1]).then(function(){         //切换到新窗口操作
        web.sleep(3000);
        web.findElement(By.xpath('//*[@id="lemmaWgt-secondsKnow"]/div/ul/li[1]/a/span[2]')).click(); // 定位连接并点击
        console.log(handles.length);        //输出标签数量
    })
});
web.sleep(3000)
web.close();


web.get("https://login.anjuke.com/login/form")
web.switchTo().frame("iframeLoginIfm").then(function(){   // 通过frame ID 切换到 另外一个frame上操作
   web.findElement(By.id("pwdTab")).click()
   web.findElement(By.id("pwdUserNameIpt")).sendKeys("qwerasdfzxcv")
   web.findElement(By.id("pwdIpt")).sendKeys("fengzi1994")  
   web.findElement(By.id("pwdSubmitBtn")).click();
   web.sleep(3000);
   web.findElement(By.id("pwdUserNameIpt")).clear();
   web.findElement(By.id("pwdUserNameIpt")).sendKeys("914650562@qq.com")
   web.findElement(By.id("pwdIpt")).sendKeys("fengzi1994")  
   web.findElement(By.id("pwdSubmitBtn")).click();
})
web.sleep(3000)
web.quit()