import { NextFunction, Request, Response } from "express";
import User from "../models/User";
import { catchAsync } from "../utils/catchAsync"; // Import catchAsync
import { AppResponse } from "../utils/AppResponse";
import bcrypt from "bcryptjs";
import AppError from "../utils/AppError";
import jwt from "jsonwebtoken";
import "../config";

// Register User
export const registerUser = catchAsync(async (req: Request, res: Response) => {
  const { password, firstName, lastName, email } = req.body;
  // Hash password
  const hashedPassword = await bcrypt.hash(password, 10);
  // Create new user
  const user = await User.create({
    password: hashedPassword,
    firstName,
    lastName,
    email,
  });

  // Exclude password from the response
  const { password: _, ...userWithoutPassword } = user.toObject();
  AppResponse(res, 201, userWithoutPassword, "User registered successfully");
});

// Login User
export const loginUser = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { email, password } = req.body;
    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return next(new AppError("Invalid email or password", 401));
    }
    // Compare provided password with hashed password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      next(new AppError("Invalid email or password", 401));
    }
    // Generate JWT
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET!, {
      expiresIn: "7d", // Token expiration time
    });

    AppResponse(
      res,
      200,
      { token, user: { email: user.email, id: user._id } },
      "Login successful"
    );
  }
);
