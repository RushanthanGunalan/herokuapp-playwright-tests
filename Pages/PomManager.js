import { expect } from "@playwright/test";
import LoginPage from "./LoginPage";
import SecurePage from "./SecurePage";
import CheckboxPage from "./CheckboxPage";
import NotificationPage from "./NotificationPage";

export default class PomManager {
  constructor(page) {
    this.page = page;
    this.loginPage = new LoginPage(page);
    this.securePage = new SecurePage(page);
    this.checkboxPage = new CheckboxPage(page);
    this.notifyPage = new NotificationPage(page);
  }
}
