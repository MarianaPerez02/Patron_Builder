import { INotificationProcessor } from "../../../services/notifications";

export class SmsProcessor implements INotificationProcessor {
    process(message: string): string {
      return `SMS enviado con el mensaje: ${message}`;
    }
  }