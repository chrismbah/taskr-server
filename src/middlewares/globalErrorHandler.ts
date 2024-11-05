import { Request, Response, NextFunction } from "express";
import AppError from "../utils/AppError";
import { AppResponse } from "../utils/AppResponse"; // Adjust the path as necessary

// Error Handler for Development Environment
const devError = (err: AppError, res: Response) => {
  AppResponse(res, err.statusCode, {
    status: err.status,
    error: err,
    message: err.message,
    stack: err.stack,
  });
};

// Error Handler for Production Environment
const prodError = (err: AppError, res: Response) => {
  if (err.isOperational) {
    AppResponse(res, err.statusCode, {
      status: err.status,
      message: err.message,
    });
  } else {
    console.error("ERROR", err);
    AppResponse(res, 500, null, "Something went wrong!");
  }
};

// Global Error Handling Middleware
export const globalErrorHandler = (
  err: AppError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";

  if (process.env.NODE_ENV === "development") {
    devError(err, res);
  } else if (process.env.NODE_ENV === "production") {
    prodError(err, res);
  }
};
