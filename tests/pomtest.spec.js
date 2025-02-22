import { expect, test } from "@playwright/test";
import LoginPage from "./../Pages/LoginPage";

let loginPage;

test.describe("Login Tests", () => {
  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
  });

  test("Logging in with Credentials", async () => {
    await loginPage.navigate();
    await loginPage.loging("tomsmith", "SuperSecretPassword!");
  });
});
