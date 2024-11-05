import { Request, Response, NextFunction } from "express";
import { validationResult, ValidationError } from "express-validator";
import AppError from "../utils/AppError";

// Middleware for handling validation errors
export const handleValidationErrors = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const extractedErrors: { msg: string }[] = errors
      .array()
      .map((err: ValidationError) => ({
        msg: err.msg,
      }));
    const errorMessage = extractedErrors.map((err) => `${err.msg}`).join("; ");
    return next(new AppError(`Validation failed: ${errorMessage}`, 400));
  }

  next();
};
