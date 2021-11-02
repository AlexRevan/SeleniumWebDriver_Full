const { Builder, By, until } = require('selenium-webdriver')
const chrome = require('selenium-webdriver/chrome');
const options = new chrome.Options();
options.addArguments(["start-maximized"]);

const driver = new Builder().withCapabilities(({'unexpectedAlertBehaviour': 'dismiss'})).forBrowser('chrome').setChromeOptions(options).build();

driver
    .get('http://localhost/litecart/admin/')
    .then((_) =>
        driver.findElement(By.name('username')).sendKeys('admin')
    )
    .then((_) =>
        driver.findElement(By.name('password')).sendKeys('admin')
    )
    .then((_) =>
        driver.findElement(By.name('login')).click()
    )
    .then(async (_) => {
        let mainMenuOptions = await driver.findElements(By.xpath('//li[@id="app-"]'));
        for (let i = 0; i < mainMenuOptions.length; i++) {
            driver.findElement(mainMenuOptions).click();
            await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//h1'))), 1000);
        }

    }).then((_) => driver.quit());



