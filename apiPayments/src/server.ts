import express from "express";
import colors from "colors";
import morgan from "morgan";
import paymentsRoutes from "./routes/paymentsRoutes";
import notificationRoutes from "./routes/notificationsRoutes";

const app = express();

app.use(morgan("dev"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/payment", paymentsRoutes);
app.use("/api/notification", notificationRoutes);

export default app;
