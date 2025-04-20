import { INotificationProcessor } from "../../../services/notifications";

export class WhatsappProcesor implements INotificationProcessor {
    process(message: string): string {
      return `WhatsApp enviado con el mensaje: ${message}`;
    }
  }