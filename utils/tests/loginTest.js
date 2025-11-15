const { By } = require("selenium-webdriver");
const createDriver = require("../utils/driver");

(async function loginAutomation() {
    let driver = await createDriver();

    try {
        await driver.get("https://practicetestautomation.com/practice-test-login/");
        await driver.manage().window().maximize();

        await driver.findElement(By.id("username")).sendKeys("student");
        await driver.findElement(By.id("password")).sendKeys("Password123");
        await driver.findElement(By.id("submit")).click();

        let message = await driver.findElement(By.tagName("h1")).getText();

        if (message.includes("Logged In Successfully")) {
            console.log("✅ Login Test Passed!");
        } else {
            console.log("❌ Login Test Failed!");
        }
    } catch (err) {
        console.log("Error:", err);
    } finally {
        await driver.quit();
    }
})();
