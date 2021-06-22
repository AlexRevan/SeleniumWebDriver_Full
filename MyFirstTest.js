const { Builder, By, Key, until } = require('selenium-webdriver')

const driver = new Builder().forBrowser('chrome').build();

driver
    .get('http://www.yandex.ru/')
    .then((_) => driver.quit())


