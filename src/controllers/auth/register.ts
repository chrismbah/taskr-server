import { Request, Response } from "express";
import User from "../../models/User";
import { catchAsync } from "../../utils/catchAsync"; // Import catchAsync
import { AppResponse } from "../../utils/AppResponse";

export const registerUser = catchAsync(async (req: Request, res: Response) => {
  const user = await User.create(req.body);
  AppResponse(res, 201, user, "User created successfully");
});
