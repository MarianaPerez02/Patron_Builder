export class PushNotification {
    deviceToken!: string;
    title?: string;
    message!: string;
    imageUrl?: string;
    clickAction?: string;
    priority?: 'urgente' | 'normal';
  
    send() {
      console.log(`Enviando Push a ${this.deviceToken}: ${this.message}`);
    }
  }
  