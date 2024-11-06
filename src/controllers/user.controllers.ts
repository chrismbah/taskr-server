import { NextFunction, Response } from "express";
import { catchAsync } from "../utils/catchAsync";

export const getUserProfile = catchAsync(
  async (res: Response, req: Request, next: NextFunction) => {
    res.json("Hello");
  }
);
