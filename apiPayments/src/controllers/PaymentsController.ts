import { Request, Response } from "express";
import { processPayment } from "../services/payments.service";

export class PaymentsController {
  static createPayment(req: Request, res: Response) {
    try {
      const { type, amount } = req.body;
      const numericAmount = parseFloat(amount);
      const result = processPayment(type, numericAmount);
      res.json({
        message: "Pago realizao correctamente",
        success: true,
        finalAmount: result,
      });
    } catch (error) {
      res
        .status(400)
        .json({ message: "Error al procesar el pago", success: false });
    }
  }
}
