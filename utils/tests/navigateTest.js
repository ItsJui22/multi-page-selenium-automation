const { By, until } = require("selenium-webdriver");
const createDriver = require("../utils/driver");

(async function navigateTest() {
    let driver = await createDriver();

    try {
        await driver.get("https://practicetestautomation.com/practice-test-login/");

        await driver.findElement(By.id("username")).sendKeys("student");
        await driver.findElement(By.id("password")).sendKeys("Password123");
        await driver.findElement(By.id("submit")).click();

        await driver.wait(until.elementLocated(By.linkText("Log out")), 5000);

        let logoutBtn = await driver.findElement(By.linkText("Log out"));
        await logoutBtn.click();

        await driver.wait(until.urlContains("practicetestautomation.com"), 5000);

        console.log("✅ Navigation Test Passed!");
    } catch (err) {
        console.log("❌ Navigation Test Failed:", err);
    } finally {
        await driver.quit();
    }
})();
