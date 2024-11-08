import { NextFunction, Request, Response } from "express";
import User from "../models/User";
import { catchAsync } from "../utils/catchAsync";
import { AppResponse } from "../utils/AppResponse";
import bcrypt from "bcryptjs";
import AppError from "../utils/AppError";
import { generateToken } from "../utils/generateToken";

// Register User
export const registerUser = catchAsync(async (req: Request, res: Response) => {
  const { password, firstName, lastName, email } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await User.create({
    password: hashedPassword,
    firstName,
    lastName,
    email,
  });

  const { password: _, ...userWithoutPassword } = user.toObject();
  AppResponse(res, 201, userWithoutPassword, "User registered successfully");
});

// Login User
export const loginUser = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return next(new AppError("Invalid email or password", 401));
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return next(new AppError("Invalid email or password", 401));
    }
    const token = generateToken(user._id as string);
    // Set the token in an HttpOnly cookie
    res.cookie("jwt", token, {
      httpOnly: true,
      // secure: process.env.NODE_ENV === "production",
      // sameSite: "strict",
      // maxAge: 24 * 60 * 60 * 1000, // 1 day
      // signed: true,
    });

    AppResponse(
      res,
      200,
      { user: { email: user.email, id: user._id } },
      "Login successful"
    );
  }
);
