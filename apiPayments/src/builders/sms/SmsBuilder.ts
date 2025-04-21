import { INotificationBuilder } from '../interfaces/INotificationBuilder';
import { SmsNotification } from './SmsNotification';

export class SmsBuilder implements INotificationBuilder {
  private sms: SmsNotification = new SmsNotification();

  reset(): void {
    this.sms = new SmsNotification();
  }

  setBasicInfo(data: any): void {
    this.sms.phoneNumber = data.phoneNumber;
    this.sms.message = data.message;
  }

  setOptionalData(data: any): void {
    this.sms.senderId = data.senderId;
    this.sms.deliveryReportRequired = data.deliveryReportRequired;
    this.sms.scheduleTime = data.scheduleTime;
  }

  getNotification(): SmsNotification {
    return this.sms;
  }
}
