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
     await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//span[@class="name" and text()="Appearence"]'))), 1000);
     await driver.findElement(By.xpath('//span[@class="name" and text()="Appearence"]')).click();
     await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//h1[text()=" Template"]'))), 1000);
    })
    .then(async (_) => {
     await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//span[@class="name" and text()="Template"]'))), 1000);
     await driver.findElement(By.xpath('//span[@class="name" and text()="Template"]')).click();
     await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//h1[text()=" Template"]'))), 1000);
    })
    .then(async (_) => {
     await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//span[@class="name" and text()="Logotype"]'))), 1000);
     await driver.findElement(By.xpath('//span[@class="name" and text()="Logotype"]')).click();
     await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//h1[text()=" Logotype"]'))), 1000);
    })
    .then(async (_) => {
     await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//span[@class="name" and text()="Catalog"]'))), 1000);
     await driver.findElement(By.xpath('//span[@class="name" and text()="Catalog"]')).click();
     await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//h1[text()=" Catalog"]'))), 1000);
    })
    .then(async (_) => {
     await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//li[@id="doc-catalog"]//span[@class="name" and text()="Catalog"]'))), 1000);
     await driver.findElement(By.xpath('//li[@id="doc-catalog"]//span[@class="name" and text()="Catalog"]')).click();
     await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//h1[text()=" Catalog"]'))), 1000);
    })
    .then(async (_) => {
     await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//span[@class="name" and text()="Product Groups"]'))), 1000);
     await driver.findElement(By.xpath('//span[@class="name" and text()="Product Groups"]')).click();
     await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//h1[text()=" Product Groups"]'))), 1000);
    })
    .then(async (_) => {
     await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//span[@class="name" and text()="Option Groups"]'))), 1000);
     await driver.findElement(By.xpath('//span[@class="name" and text()="Option Groups"]')).click();
     await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//h1[text()=" Option Groups"]'))), 1000);
    })
    .then(async (_) => {
     await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//span[@class="name" and text()="Manufacturers"]'))), 1000);
     await driver.findElement(By.xpath('//span[@class="name" and text()="Manufacturers"]')).click();
     await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//h1[text()=" Manufacturers"]'))), 1000);
    })
    .then(async (_) => {
        await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//span[@class="name" and text()="Suppliers"]'))), 1000);
        await driver.findElement(By.xpath('//span[@class="name" and text()="Suppliers"]')).click();
        await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//h1[text()=" Suppliers"]'))), 1000);
    })
    .then(async (_) => {
        await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//span[@class="name" and text()="Delivery Statuses"]'))), 1000);
        await driver.findElement(By.xpath('//span[@class="name" and text()="Delivery Statuses"]')).click();
        await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//h1[text()=" Delivery Statuses"]'))), 1000);
    })
    .then(async (_) => {
        await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//span[@class="name" and text()="Sold Out Statuses"]'))), 1000);
        await driver.findElement(By.xpath('//span[@class="name" and text()="Sold Out Statuses"]')).click();
        await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//h1[text()=" Sold Out Statuses"]'))), 1000);
    })
    .then(async (_) => {
        await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//span[@class="name" and text()="Quantity Units"]'))), 1000);
        await driver.findElement(By.xpath('//span[@class="name" and text()="Quantity Units"]')).click();
        await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//h1[text()=" Quantity Units"]'))), 1000);
    })
    .then(async (_) => {
        await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//a[@href[contains(., "app=catalog&doc=csv")]]//span[@class="name" and text()="CSV Import/Export"]'))), 1000);
        await driver.findElement(By.xpath('//a[@href[contains(., "app=catalog&doc=csv")]]//span[@class="name" and text()="CSV Import/Export"]')).click();
        await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//h1[text()=" CSV Import/Export"]'))), 1000);
    })
    .then(async (_) => {
        await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//span[@class="name" and text()="Countries"]'))), 1000);
        await driver.findElement(By.xpath('//span[@class="name" and text()="Countries"]')).click();
        await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//h1[text()=" Countries"]'))), 1000);
    })
    .then(async (_) => {
        await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//span[@class="name" and text()="Currencies"]'))), 1000);
        await driver.findElement(By.xpath('//span[@class="name" and text()="Currencies"]')).click();
        await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//h1[text()=" Currencies"]'))), 1000);
    })
    .then(async (_) => {
        await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//span[@class="name" and text()="Customers"]'))), 1000);
        await driver.findElement(By.xpath('//span[@class="name" and text()="Customers"]')).click();
        await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//h1[text()=" Customers"]'))), 1000);
    })
    .then(async (_) => {
        await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//li[@id="doc-customers"]//span[@class="name" and text()="Customers"]'))), 1000);
        await driver.findElement(By.xpath('//li[@id="doc-customers"]//span[@class="name" and text()="Customers"]')).click();
        await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//h1[text()=" Customers"]'))), 1000);
    })
    .then(async (_) => {
        await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//a[@href[contains(., "app=customers&doc=csv")]]//span[@class="name" and text()="CSV Import/Export"]'))), 1000);
        await driver.findElement(By.xpath('//a[@href[contains(., "app=customers&doc=csv")]]//span[@class="name" and text()="CSV Import/Export"]')).click();
        await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//h1[text()=" CSV Import/Export"]'))), 1000);
    })
    .then(async (_) => {
        await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//span[@class="name" and text()="Newsletter"]'))), 1000);
        await driver.findElement(By.xpath('//span[@class="name" and text()="Newsletter"]')).click();
        await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//h1[text()=" Newsletter"]'))), 1000);
    })
    .then(async (_) => {
        await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//span[@class="name" and text()="Geo Zones"]'))), 1000);
        await driver.findElement(By.xpath('//span[@class="name" and text()="Geo Zones"]')).click();
        await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//h1[text()=" Geo Zones"]'))), 1000);
    })
    .then(async (_) => {
        await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//span[@class="name" and text()="Languages"]'))), 1000);
        await driver.findElement(By.xpath('//span[@class="name" and text()="Languages"]')).click();
        await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//h1[text()=" Languages"]'))), 1000);
    })
    .then(async (_) => {
        await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//li[@id="doc-languages"]//span[@class="name" and text()="Languages"]'))), 1000);
        await driver.findElement(By.xpath('//li[@id="doc-languages"]//span[@class="name" and text()="Languages"]')).click();
        await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//h1[text()=" Languages"]'))), 1000);
    })
    .then(async (_) => {
        await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//span[@class="name" and text()="Storage Encoding"]'))), 1000);
        await driver.findElement(By.xpath('//span[@class="name" and text()="Storage Encoding"]')).click();
        await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//h1[text()=" Storage Encoding"]'))), 1000);
    })
    .then(async (_) => {
        await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//span[@class="name" and text()="Modules"]'))), 1000);
        await driver.findElement(By.xpath('//span[@class="name" and text()="Modules"]')).click();
        await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//h1[text()=" Job Modules"]'))), 1000);
    })
    .then(async (_) => {
        await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//span[@class="name" and text()="Background Jobs"]'))), 1000);
        await driver.findElement(By.xpath('//span[@class="name" and text()="Background Jobs"]')).click();
        await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//h1[text()=" Job Modules"]'))), 1000);
    })
    .then(async (_) => {
        await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//span[@class="name" and text()="Customer"]'))), 1000);
        await driver.findElement(By.xpath('//span[@class="name" and text()="Customer"]')).click();
        await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//h1[text()=" Customer Modules"]'))), 1000);
    })
    .then(async (_) => {
        await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//span[@class="name" and text()="Shipping"]'))), 1000);
        await driver.findElement(By.xpath('//span[@class="name" and text()="Shipping"]')).click();
        await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//h1[text()=" Shipping Modules"]'))), 1000);
    })
    .then(async (_) => {
        await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//span[@class="name" and text()="Payment"]'))), 1000);
        await driver.findElement(By.xpath('//span[@class="name" and text()="Payment"]')).click();
        await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//h1[text()=" Payment Modules"]'))), 1000);
    })
    .then(async (_) => {
        await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//span[@class="name" and text()="Order Total"]'))), 1000);
        await driver.findElement(By.xpath('//span[@class="name" and text()="Order Total"]')).click();
        await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//h1[text()=" Order Total Modules"]'))), 1000);
    })
    .then(async (_) => {
        await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//span[@class="name" and text()="Order Success"]'))), 1000);
        await driver.findElement(By.xpath('//span[@class="name" and text()="Order Success"]')).click();
        await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//h1[text()=" Order Success Modules"]'))), 1000);
    })
    .then(async (_) => {
        await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//span[@class="name" and text()="Order Action"]'))), 1000);
        await driver.findElement(By.xpath('//span[@class="name" and text()="Order Action"]')).click();
        await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//h1[text()=" Order Action Modules"]'))), 1000);
    })
    .then(async (_) => {
        await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//span[@class="name" and text()="Orders"]'))), 1000);
        await driver.findElement(By.xpath('//span[@class="name" and text()="Orders"]')).click();
        await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//h1[text()=" Orders"]'))), 1000);
    })
    .then(async (_) => {
        await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//li[@id="doc-orders"]//span[@class="name" and text()="Orders"]'))), 1000);
        await driver.findElement(By.xpath('//li[@id="doc-orders"]//span[@class="name" and text()="Orders"]')).click();
        await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//h1[text()=" Orders"]'))), 1000);
    })
    .then(async (_) => {
        await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//span[@class="name" and text()="Order Statuses"]'))), 1000);
        await driver.findElement(By.xpath('//span[@class="name" and text()="Order Statuses"]')).click();
        await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//h1[text()=" Order Statuses"]'))), 1000);
    })
    .then(async (_) => {
        await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//span[@class="name" and text()="Pages"]'))), 1000);
        await driver.findElement(By.xpath('//span[@class="name" and text()="Pages"]')).click();
        await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//h1[text()=" Pages"]'))), 1000);
    })
    .then(async (_) => {
        await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//span[@class="name" and text()="Reports"]'))), 1000);
        await driver.findElement(By.xpath('//span[@class="name" and text()="Reports"]')).click();
        await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//h1[text()=" Monthly Sales"]'))), 1000);
    })
    .then(async (_) => {
        await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//span[@class="name" and text()="Monthly Sales"]'))), 1000);
        await driver.findElement(By.xpath('//span[@class="name" and text()="Monthly Sales"]')).click();
        await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//h1[text()=" Monthly Sales"]'))), 1000);
    })
    .then(async (_) => {
        await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//span[@class="name" and text()="Most Sold Products"]'))), 1000);
        await driver.findElement(By.xpath('//span[@class="name" and text()="Most Sold Products"]')).click();
        await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//h1[text()=" Most Sold Products"]'))), 1000);
    })
    .then(async (_) => {
        await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//span[@class="name" and text()="Most Shopping Customers"]'))), 1000);
        await driver.findElement(By.xpath('//span[@class="name" and text()="Most Shopping Customers"]')).click();
        await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//h1[text()=" Most Shopping Customers"]'))), 1000);
    })
    .then(async (_) => {
        await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//span[@class="name" and text()="Settings"]'))), 1000);
        await driver.findElement(By.xpath('//span[@class="name" and text()="Settings"]')).click();
        await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//h1[text()=" Settings"]'))), 1000);
    })
    .then(async (_) => {
        await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//span[@class="name" and text()="Store Info"]'))), 1000);
        await driver.findElement(By.xpath('//span[@class="name" and text()="Store Info"]')).click();
        await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//h1[text()=" Settings"]'))), 1000);
    })
    .then(async (_) => {
        await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//span[@class="name" and text()="Defaults"]'))), 1000);
        await driver.findElement(By.xpath('//span[@class="name" and text()="Defaults"]')).click();
        await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//h1[text()=" Settings"]'))), 1000);
    })
    .then(async (_) => {
        await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//span[@class="name" and text()="General"]'))), 1000);
        await driver.findElement(By.xpath('//span[@class="name" and text()="General"]')).click();
        await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//h1[text()=" Settings"]'))), 1000);
    })
    .then(async (_) => {
        await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//span[@class="name" and text()="Listings"]'))), 1000);
        await driver.findElement(By.xpath('//span[@class="name" and text()="Listings"]')).click();
        await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//h1[text()=" Settings"]'))), 1000);
    })
    .then(async (_) => {
        await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//span[@class="name" and text()="Images"]'))), 1000);
        await driver.findElement(By.xpath('//span[@class="name" and text()="Images"]')).click();
        await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//h1[text()=" Settings"]'))), 1000);
    })
    .then(async (_) => {
        await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//span[@class="name" and text()="Checkout"]'))), 1000);
        await driver.findElement(By.xpath('//span[@class="name" and text()="Checkout"]')).click();
        await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//h1[text()=" Settings"]'))), 1000);
    })
    .then(async (_) => {
        await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//span[@class="name" and text()="Advanced"]'))), 1000);
        await driver.findElement(By.xpath('//span[@class="name" and text()="Advanced"]')).click();
        await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//h1[text()=" Settings"]'))), 1000);
    })
    .then(async (_) => {
        await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//span[@class="name" and text()="Security"]'))), 1000);
        await driver.findElement(By.xpath('//span[@class="name" and text()="Security"]')).click();
        await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//h1[text()=" Settings"]'))), 1000);
    })
    .then(async (_) => {
        await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//span[@class="name" and text()="Slides"]'))), 1000);
        await driver.findElement(By.xpath('//span[@class="name" and text()="Slides"]')).click();
        await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//h1[text()=" Slides"]'))), 1000);
    })
    .then(async (_) => {
        await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//span[@class="name" and text()="Tax"]'))), 1000);
        await driver.findElement(By.xpath('//span[@class="name" and text()="Tax"]')).click();
        await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//h1[text()=" Tax Classes"]'))), 1000);
    })
    .then(async (_) => {
        await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//span[@class="name" and text()="Tax Classes"]'))), 1000);
        await driver.findElement(By.xpath('//span[@class="name" and text()="Tax Classes"]')).click();
        await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//h1[text()=" Tax Classes"]'))), 1000);
    })
    .then(async (_) => {
        await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//span[@class="name" and text()="Tax Rates"]'))), 1000);
        await driver.findElement(By.xpath('//span[@class="name" and text()="Tax Rates"]')).click();
        await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//h1[text()=" Tax Rates"]'))), 1000);
    })
    .then(async (_) => {
        await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//span[@class="name" and text()="Translations"]'))), 1000);
        await driver.findElement(By.xpath('//span[@class="name" and text()="Translations"]')).click();
        await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//h1[text()=" Search Translations"]'))), 1000);
    })
    .then(async (_) => {
        await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//span[@class="name" and text()="Search Translations"]'))), 1000);
        await driver.findElement(By.xpath('//span[@class="name" and text()="Search Translations"]')).click();
        await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//h1[text()=" Search Translations"]'))), 1000);
    })
    .then(async (_) => {
        await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//span[@class="name" and text()="Scan Files"]'))), 1000);
        await driver.findElement(By.xpath('//span[@class="name" and text()="Scan Files"]')).click();
        await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//h1[text()=" Scan Files For Translations"]'))), 1000);
    })
    .then(async (_) => {
        await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//a[@href[contains(., "app=translations&doc=csv")]]//span[@class="name" and text()="CSV Import/Export"]'))), 1000);
        await driver.findElement(By.xpath('//a[@href[contains(., "app=translations&doc=csv")]]//span[@class="name" and text()="CSV Import/Export"]')).click();
        await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//h1[text()=" CSV Import/Export"]'))), 1000);
    })
    .then(async (_) => {
        await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//span[@class="name" and text()="Users"]'))), 1000);
        await driver.findElement(By.xpath('//span[@class="name" and text()="Users"]')).click();
        await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//h1[text()=" Users"]'))), 1000);
    })
    .then(async (_) => {
        await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//span[@class="name" and text()="vQmods"]'))), 1000);
        await driver.findElement(By.xpath('//span[@class="name" and text()="vQmods"]')).click();
        await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//h1[text()=" vQmods"]'))), 1000);
    })
    .then(async (_) => {
        await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//li[@id="doc-vqmods"]//span[@class="name" and text()="vQmods"]'))), 1000);
        await driver.findElement(By.xpath('//li[@id="doc-vqmods"]//span[@class="name" and text()="vQmods"]')).click();
        await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//h1[text()=" vQmods"]'))), 1000);
    })
    .then((_) => driver.quit())


