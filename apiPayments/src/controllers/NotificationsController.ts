import { Request, Response } from "express";
import { processPayment } from "../services/payments.service";
import { processNotification } from "../services/notifications.service";

export class NotificationsController {
  static createNotification(req: Request, res: Response) {
    try {
      const { type, message } = req.body;
      const result = processNotification(type, message);
      res.json({
        message: "Notificacion enviada correctamente",
        success: true,
        FinalMessage: result,
      });
      console.log("REQ.BODY:", req.body);

    } catch (error) {
      res
        .status(400)
        .json({ message: "Error al enviar la notificacion", success: false });
    }
  }
}
