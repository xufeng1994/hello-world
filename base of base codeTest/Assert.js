const assert = new require("assert")
require("chromedriver")
const webdriver = require("selenium-webdriver")
var web = new webdriver.Builder().forBrowser("chrome").build();
web.get("http://www.baidu.com"); // open baidu 
web.getTitle().then(function(title){
    console.log(title)
    assert.notEqual(title,"百度一下你就知道")    
})


/**
 *   都是自己瞎JB写的
 *  
 const a = 1 ;
const b = 2 ;
function equal(){
    return assert(a,b)
}
equal();
   
var a = "qwer"
var b = "asdf"
var c  = a
assert.equal(a,c,"相等")
assert.equal(a,b,"两个不相等")  
**/
