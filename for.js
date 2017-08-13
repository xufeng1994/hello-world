require("chromedriver")
var web =require("selenium-webdriver");
var baidu = new web.Builder().forBrowser("chrome").build();
function openweb(url){
    for(let i = 0; i++; i<10){
    baidu.get("http://www."+ url + ".com");            // 输入网址的格式
    }
}
openweb("sina")
/**function forLoop(){
    
    for (let i = 0; i++; i<10){
        openweb("sina");
    }
}
forLoop();
**/