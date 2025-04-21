export class SmsNotification {
    phoneNumber!: string;
    message!: string;
    senderId?: string;
    deliveryReportRequired?: boolean;
    scheduleTime?: Date;
  
    send() {
      console.log(`Enviando SMS a ${this.phoneNumber}: "${this.message}"`);
    }
  }
  