import { INotificationProcessor } from "../../../services/notifications";

export class EmailProcessor implements INotificationProcessor {
    process(message: string): string {
    let finalMessage = message;
      return `Email enviado con el mensaje:` + finalMessage;
    }
  }