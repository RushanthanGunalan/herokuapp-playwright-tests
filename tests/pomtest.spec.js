import { expect, test } from "@playwright/test";
import PomManager from "../Pages/PomManager";

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
