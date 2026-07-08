import { test, expect } from "@playwright/test";

test("two users interact", async ({ browser }) => {
    let TTACartContext1 = await browser.newContext();
    let TTACartPage1 = await TTACartContext1.newPage();

    let TTABankContext2 = await browser.newContext();
    let TTABankPage1 = await TTABankContext2.newPage();
    await TTACartPage1.goto("https://app.thetestingacademy.com/playwright/ttacart/");
    await TTABankPage1.goto("https://tta-bank-digital-973242068062.us-west1.run.app/");
    console.log("Admin URL:", TTACartPage1.url());
    console.log("Guest URL:", TTABankPage1.url());
    await TTACartPage1.close();
    await TTABankPage1.close();

});