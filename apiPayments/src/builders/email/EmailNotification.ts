export class EmailNotification {
    to!: string;
    subject!: string;
    body!: string;
    cc?: string[];
    bcc?: string[];
    attachments?: string[];
    priority?: string;
  }
  