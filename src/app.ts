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

// Initializing an instance of the Express application
export const app: Application = express();

// Middleware to parse incoming JSON payloads in requests
app.use(express.json());

// Enabling CORS to allow requests from different origins
app.use(cors());

// Middleware to parse cookies attached to client requests
app.use(cookieParser());

// Middleware to log HTTP requests to the console in development
app.use(logger("dev"));

// Defining the main API route and linking it to the application's routes
app.use("/api/v1/", routes);

// Middleware to handle undefined routes, creating a 404 error if the route does not exist
app.use((req: Request, res: Response, next: NextFunction) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

// Middleware to handle all application errors globally
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