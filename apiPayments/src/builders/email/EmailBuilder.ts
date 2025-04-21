import { INotificationBuilder } from '../interfaces/INotificationBuilder';
import { EmailNotification } from './EmailNotification';

export class EmailBuilder implements INotificationBuilder {
  private email: EmailNotification;

  constructor() {
    this.email = new EmailNotification();
  }

  reset(): void {
    this.email = new EmailNotification();
  }

  setBasicInfo(data: any): void {
    this.email.to = data.to;
    this.email.subject = data.subject;
    this.email.body = data.body;
  }

  setOptionalData(data: any): void {
    this.email.cc = data.cc || [];
    this.email.bcc = data.bcc || [];
    this.email.attachments = data.attachments || [];
    this.email.priority = data.priority || 'normal';
  }

  getNotification(): EmailNotification {
    return this.email;
  }
}
