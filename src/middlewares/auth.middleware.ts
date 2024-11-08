import { NextFunction, Response, Request } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import "../config";
import AppError from "../utils/AppError";
import { AuthRequest } from "../types";

const JWT_SECRET = process.env.JWT_SECRET;

export const verifyToken = (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  const token = req.cookies.jwt; // Read token from cookie
  if (!JWT_SECRET) {
    return next(new AppError("JWT secret not found", 404));
  }
  if (!token) next(new AppError("Authorization token is missing", 401));
  console.log(token)
  jwt.verify(
    token,
    JWT_SECRET,
    (err: Error | null, decoded: string | JwtPayload | undefined) => {
      if (err) {
        return next(new AppError("Token is not valid or expired", 401));
      }
      req.user = decoded; // Attach decoded payload to the request object
      next();
    }
  );
};
