require("chromedriver")
const fs = require('fs');
var webdriver = require("selenium-webdriver")
var web = new webdriver.Builder().forBrowser("chrome").build();
var By = webdriver.By;


describe('hooks', function () {
    var assert = require('assert');

    before(function () {
        // runs before all tests in this block
        console.log("before")
    })


    after( function () {
        // runs after all tests in this block

    });

    beforeEach( function () {

    });

    afterEach(async function () {
        // runs after each test in this block
        console.log("after")
        await web.takeScreenshot().then(function (screenshot) {
            fs.writeFileSync("pic/"+new Date().valueOf()+".png", screenshot, "base64")

        });
    });

    // test cases


    describe('测试用户注册登录', function () {

        this.timeout(60 * 1000)
        describe('注册用户', function () {
            it('导航到登录页面', async function () {
                await web.get("http://192.168.198.129:3000")
            });
            it("点击注册按钮", async function () {
                await web.findElement({ css: '[href="/signup"]' }).click()
            });
            it("导航到用户注册页面", async function () {
                let singupurl = await web.getCurrentUrl();
                return assert.equal("http://192.168.198.129:3000/signup", singupurl)
            });

        });
    });
});


