import { Request, Response, NextFunction } from "express";
import User from "../models/User";
import { catchAsync } from "../utils/catchAsync"; // Import catchAsync
import { AppResponse } from "../utils/AppResponse";

export const createUser = catchAsync(async (req: Request, res: Response) => {
  const user = await User.create(req.body);
  AppResponse(res, 201, user, "User created successfully");
});

// Get all users
export const getAllUsers = catchAsync(async (req: Request, res: Response) => {
  const users = await User.find();
  AppResponse(res, 201, users, "User fetched successfully");
});
