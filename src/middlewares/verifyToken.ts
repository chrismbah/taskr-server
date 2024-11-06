import { NextFunction, Response, Request } from "express";
import jwt from "jsonwebtoken";
import "../config";
import AppError from "../utils/AppError";
import { AppResponse } from "../utils/AppResponse";

export interface AuthRequest extends Request {
  user?: any; // This will hold the user data from the token
}
const JWT_SECRET = process.env.JWT_SECRET;

export const verifyToken = (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization;
  if (!JWT_SECRET) return next(new AppError("JWT secret not found", 404));
  if (authHeader && authHeader.startsWith("Bearer ")) {
    const token = authHeader.split(" ")[1]; // Extract the token part after 'Bearer'

    // Verify the token
    jwt.verify(token, JWT_SECRET, (err, decoded) => {
      if (err) {
        return AppResponse(res, 201, "error", "Token is not valid or expired");
      }
      // Attach user data from the token to the request object
      req.user = decoded;
      console.log(decoded);
      // Continue to the next middleware or route handler
      next();
    });
  } else {
    // If no token is provided in the Authorization header
    return AppResponse(res, 401, "Authorization token is missing");
  }
};
