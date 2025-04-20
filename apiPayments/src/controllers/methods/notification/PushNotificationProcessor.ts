import { INotificationProcessor } from "../../../services/notifications";

export class PushProcessor implements INotificationProcessor {
    process(message: string): string {
      return `PUSH enviado con el mensaje: ${message}`;
    }
  }