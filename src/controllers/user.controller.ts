import { NextFunction, Response } from "express";
import { catchAsync } from "../utils/catchAsync";
import User from "../models/User";
import { AuthRequest } from "../types";
import { AppResponse } from "../utils/AppResponse";
import AppError from "../utils/AppError";

// Get User Profile
export const getUserProfile = catchAsync(
  async (req: AuthRequest, res: Response, next: NextFunction) => {
    const userId = req.user?.id; // Retrieve user ID from the token data in req.user

    if (!userId) {
      return next(new AppError("User ID not found", 400));
    }
    // Fetch user data by ID
    const user = await User.findById(userId).select("-password"); // Exclude password field

    if (!user) {
      return next(new AppError("User not found", 404));
    }

    // Send the user profile data as response
    AppResponse(res, 200, user, "User profile fetched successfully");
  }
);

export const updateProfile = catchAsync(
  async (req: AuthRequest, res: Response, next: NextFunction) => {
    const userId = req.user?.id; // Retrieve user ID from the token data in req.user

    if (!userId) {
      return next(new AppError("User ID not found", 400));
    }

    // Destructure the fields that can be updated from the request body
    const { firstName, lastName } = req.body;

    // Find the user by ID
    const user = await User.findById(userId).select("-password");

    if (!user) {
      return next(new AppError("User not found", 404));
    }

    // Update the fields if provided
    user.firstName = firstName;
    user.lastName = lastName;

    // Save the updated user
    await user.save();

    // Send the updated user profile as response
    AppResponse(res, 200, user, "User profile updated successfully");
  }
);
