import { expect } from "@playwright/test";
import LoginPage from "./LoginPage";
import SecurePage from "./SecurePage";

export default class PomManager {
  constructor(page) {
    this.page = page;
    this.loginPage = new LoginPage(page);
    this.securePage = new SecurePage(page);
  }
}
