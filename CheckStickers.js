const { Builder, By, until } = require('selenium-webdriver')
const chrome = require('selenium-webdriver/chrome');
const assert = require("assert");
const options = new chrome.Options();
options.addArguments(["start-maximized"]);

const driver = new Builder().withCapabilities(({'unexpectedAlertBehaviour': 'dismiss'})).forBrowser('chrome').setChromeOptions(options).build();

driver
    .get('http://localhost/litecart')
    .then((_) => driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//h3[@class="title"]'))), 1000))
    .then(async (_) => {
        const goodsCount = await driver.findElements(By.xpath('//li[@class="product column shadow hover-light"]')).length();
        const labelsCount = await driver.findElements(By.xpath('//li[@class="product column shadow hover-light"]//div[@class[contains(., "sticker ")]]')).length();
        //assert.deepStrictEqual(goodsCount, labelsCount);
        await assert.strictEqual(goodsCount, labelsCount);
        /*if (goodsCount === labelsCount) {
            return 'Okay';
        }
        else {
            return 'Error';
        }*/
    })
    .then((_) => driver.quit())


