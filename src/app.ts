import express, { Application } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import logger from "morgan";
import routes from "./routes";
import { globalErrorHandler } from "./middlewares/globalErrorHandler";
import { connectDB } from "./config/db";

export const app: Application = express();

// Middlewares
app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use(logger("dev"));
app.use(globalErrorHandler);
app.use(routes);
connectDB();

const PORT: number = 5050;

if (process.env.NODE_ENV == "development") {
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
}
