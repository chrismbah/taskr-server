// src/app.ts
import express, { Application, Request, Response, NextFunction } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import logger from "morgan";
import routes from "./routes";
import { globalErrorHandler } from "./middlewares/errors.middleware";
import { connectDB } from "./config/db";
import AppError from "./utils/AppError";
import "./config";

export const app: Application = express();
// Middlewares
app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use(logger("dev"));
app.use("/api/v1/", routes);

app.use(function(req, res, next) {  
  res.header('Access-Control-Allow-Origin', req.headers.origin);
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
// Handle undefined routes with AppError
app.use((req: Request, res: Response, next: NextFunction) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

// Global error handler
app.use(globalErrorHandler);

connectDB();
const PORT: number = 5050;
if (
  process.env.NODE_ENV == "development" ||
  process.env.NODE_ENV == "production"
) {
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
}

export default app;
