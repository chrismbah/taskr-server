import { Request, Response } from "express";

export const registerUser = async (req: Request, res: Response) => {
  res.status(200).json({
    message: "This is testing my routes for authentication",
  });
};
