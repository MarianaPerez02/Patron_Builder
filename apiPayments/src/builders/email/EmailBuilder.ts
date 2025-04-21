import { EmailNotification } from './EmailNotification';
import { INotificationBuilder } from '../interfaces/INotificationBuilder';

export class EmailBuilder implements INotificationBuilder<EmailNotification> {
  private email!: EmailNotification;

  reset(): void {
    this.email = new EmailNotification();
  }

  setTo(to: string) {
    this.email.to = to;
    return this;
  }

  setSubject(subject: string) {
    this.email.subject = subject;
    return this;
  }

  setBody(body: string) {
    this.email.body = body;
    return this;
  }

  setCc(cc: string[]) {
    this.email.cc = cc;
    return this;
  }

  setBcc(bcc: string[]) {
    this.email.bcc = bcc;
    return this;
  }

  setAttachments(attachments: string[]) {
    this.email.attachments = attachments;
    return this;
  }

  setPriority(priority: 'alta' | 'media' | 'baja') {
    this.email.priority = priority;
    return this;
  }

  build(): EmailNotification {
    return this.email;
  }
}
