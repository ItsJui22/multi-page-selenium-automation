const { By, until } = require("selenium-webdriver");
const createDriver = require("../utils/driver");

(async function formTest() {
    let driver = await createDriver();

    try {
        await driver.get("https://practicetestautomation.com/practice-test-exceptions/");

        await driver.findElement(By.id("add_btn")).click();

        await driver.wait(until.elementLocated(By.id("row2")), 5000);

        let input = await driver.findElement(By.xpath("//div[@id='row2']/input"));
        await input.sendKeys("Sanjida Automation Test");

        let saveBtn = await driver.findElement(By.id("save_btn"));
        await saveBtn.click();

        await driver.wait(until.elementTextContains(
            await driver.findElement(By.id("confirmation")),
            "Row 2 was saved"
        ), 5000);

        console.log("✅ Form Test Passed!");

    } catch (err) {
        console.log("❌ Form Test Failed:", err);
    } finally {
        await driver.quit();
    }
})();
