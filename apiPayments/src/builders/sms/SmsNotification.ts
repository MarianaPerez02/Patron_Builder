export class SmsNotification {
    phoneNumber!: string;
    message!: string;
    senderId?: string;
    deliveryReportRequired?: boolean;
    scheduleTime?: string; // ISO string
  }
  