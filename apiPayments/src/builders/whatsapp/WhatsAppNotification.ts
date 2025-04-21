export class WhatsAppNotification {
    phoneNumber!: string;
    message!: string;
    mediaUrl?: string;
    caption?: string;
    interactiveButtons?: string[];
    language?: string;
  
    send() {
      console.log(`Enviando WhatsApp a ${this.phoneNumber}: ${this.message}`);
    }
  }
  