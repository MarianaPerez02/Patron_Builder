import { Router } from "express";
import { body } from "express-validator";

import { PaymentsController } from "../controllers/PaymentsController";
import { validationResult } from "express-validator";
import { handleInputErrors } from "../middleware/validation";

const router = Router();

router.post(
  "/",
  body("type")
    .isString()
    .notEmpty()
    .isIn(["credit_card", "debit_card", "paypal"])
    .withMessage("El tipo de pago no es válido"),
  body("amount").isNumeric().notEmpty().withMessage("El monto no es válido"),
  handleInputErrors,
  PaymentsController.createPayment
);

export default router;
