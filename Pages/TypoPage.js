import { expect } from "@playwright/test";
import CommonActions from "../utils/CommonActions";

export default class TypoPage {
  constructor(page) {
    this.actions = new CommonActions(page);
  }

  async navigate() {
    await this.actions.navigate("https://the-internet.herokuapp.com/typos");
  }

  async CheckForTypo() {
    return await this.actions.getText("#content > div > p:nth-child(3)");
  }

  async reloadPage() {
    await this.actions.reload(); // Call the reload method from CommonActions
  }

  async assertTypo(expectedWord) {
    const CorrectWord = await this.CheckForTypo();
    expect(CorrectWord).toContain(expectedWord);
  }
}
