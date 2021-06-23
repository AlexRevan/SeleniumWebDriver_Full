const { Builder, By, until } = require('selenium-webdriver')

const driver = new Builder().forBrowser('chrome').build();

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
    .then((_) => driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//*[@title="My Store"]'))), 1000))
    .then((_) => driver.quit())


