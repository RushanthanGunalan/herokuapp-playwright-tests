import { expect } from "@playwright/test";
import CommonActions from "../utils/CommonActions";

export default class NotificationPage {
  constructor(page) {
    this.actions = new CommonActions(page);
  }

  async navigate() {
    await this.actions.navigate(
      "https://the-internet.herokuapp.com/notification_message_rendered"
    );
  }

  async clickNotify() {
    await this.actions.click("#content > div > p > a");
  }

  async getNotifyMessage() {
    return await this.actions.getText("#flash");
  }

  //   async assertNotifyMessage(actualMessage) {
  //     const message = await this.getNotifyMessage();
  //     expect(message).toContain(actualMessage);
  //   }

  async assertNotifyMessage(expectedMessages) {
    const message = await this.getNotifyMessage();
    expect(expectedMessages.includes(message)); //OR logic using an array
  }
}
