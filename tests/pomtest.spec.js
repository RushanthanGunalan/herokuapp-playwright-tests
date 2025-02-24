import { expect, test } from "@playwright/test";
import PomManager from "../Pages/PomManager";
import CommonActions from "./../utils/CommonActions";

let pm;

test.describe("Login Tests", () => {
  test.beforeEach(async ({ page }) => {
    pm = new PomManager(page);
  });

  test.afterEach(async ({ page }) => {
    await page.close();
  });

  test("Logging in with Credentials", async () => {
    await pm.loginPage.navigate();
    await pm.loginPage.login("tomsmith", "SuperSecretPassword!");
    await pm.securePage.assertLoggedInMessage("You logged into a secure area!");
  });

  test("Testing Logging with incorrect Username", async () => {
    await pm.loginPage.navigate();
    await pm.loginPage.login("Incorrect User", "SuperSecretPassword!");
    await pm.loginPage.assertedErrorMessage("Your username is invalid!");
  });

  test("Testing Logging with incorrect Password", async () => {
    await pm.loginPage.navigate();
    await pm.loginPage.login("tomsmith", "incorrect password");
    await pm.loginPage.assertedErrorMessage("Your password is invalid!");
  });
});

test.describe("Checkbox Checking and Verfication", () => {
  test.beforeEach(async ({ page }) => {
    pm = new PomManager(page);
  });

  test.afterEach(async ({ page }) => {
    await page.close();
  });

  test("Check and UnCheck Checkboxes", async () => {
    await pm.checkboxPage.navigate();
    await pm.checkboxPage.checkChecbox(1);
    await pm.checkboxPage.assertCheckbox(1, true);

    await pm.checkboxPage.navigate();
    await pm.checkboxPage.checkChecbox(2);
    await pm.checkboxPage.assertCheckbox(2, false);
  });
});

test.describe("Notify Message Verification", () => {
  test.beforeEach(async ({ page }) => {
    pm = new PomManager(page);
  });

  test.afterEach(async ({ page }) => {
    await page.close();
  });

  test("test notify", async () => {
    await pm.notifyPage.navigate();
    await pm.notifyPage.clickNotify();
    // await pm.notifyPage.assertNotifyMessage(
    //   "Action unsuccesful, please try again" || "Action successful"
    // );

    await pm.notifyPage.assertNotifyMessage([
      "Action unsuccesful, please try again",
      "Action successful",
    ]);
  });
});

test.describe("Refreshing the page once to find the typo", () => {
  test.beforeEach(async ({ page }) => {
    pm = new PomManager(page);
  });

  test.afterEach(async ({ page }) => {
    await page.close();
  });

  test("Checking for the randomized typo", async () => {
    await pm.typoPage.navigate();
    await pm.typoPage.reloadPage();
    await pm.typoPage.assertTypo(
      "Sometimes you'll see a typo, other times you won't."
    );
  });
});
