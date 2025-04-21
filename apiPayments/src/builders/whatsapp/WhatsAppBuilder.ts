import { INotificationBuilder } from '../interfaces/INotificationBuilder';
import { WhatsAppNotification } from './WhatsAppNotification';

export class WhatsAppBuilder implements INotificationBuilder {
  private whatsapp: WhatsAppNotification = new WhatsAppNotification();

  reset(): void {
    this.whatsapp = new WhatsAppNotification();
  }

  setBasicInfo(data: any): void {
    this.whatsapp.phoneNumber = data.phoneNumber;
    this.whatsapp.message = data.message;
  }

  setOptionalData(data: any): void {
    this.whatsapp.mediaUrl = data.mediaUrl;
    this.whatsapp.caption = data.caption;
    this.whatsapp.interactiveButtons = data.interactiveButtons || [];
    this.whatsapp.language = data.language || 'es';
  }

  getNotification(): WhatsAppNotification {
    return this.whatsapp;
  }
}
