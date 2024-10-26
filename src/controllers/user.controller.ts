import { Request, Response } from "express";

export const userController = async (req: Request, res: Response) => {
  let users = ["Goon", "Tsuki", "Joe"];
  res.status(200).send(users);
};
