import { WhatsAppNotification } from './WhatsAppNotification';
import { INotificationBuilder } from '../interfaces/INotificationBuilder';

export class WhatsAppBuilder implements INotificationBuilder<WhatsAppNotification> {
  private wa!: WhatsAppNotification;

  reset(): void {
    this.wa = new WhatsAppNotification();
  }

  setPhoneNumber(phoneNumber: string) {
    this.wa.phoneNumber = phoneNumber;
    return this;
  }

  setMessage(message: string) {
    this.wa.message = message;
    return this;
  }

  setMediaUrl(url: string) {
    this.wa.mediaUrl = url;
    return this;
  }

  setCaption(caption: string) {
    this.wa.caption = caption;
    return this;
  }

  setInteractiveButtons(buttons: string[]) {
    this.wa.interactiveButtons = buttons;
    return this;
  }

  setLanguage(lang: string) {
    this.wa.language = lang;
    return this;
  }

  build(): WhatsAppNotification {
    return this.wa;
  }
}
