import express, { Application, Request, Response, NextFunction } from "express";
import { router as userRoutes } from "./routes/user.routes";
import { connectDB } from "../config/db";

export const app: Application = express();

app.use("/users", userRoutes);

app.use("/", (req: Request, res: Response, next: NextFunction): void => {
  res.json({ message: "Allo! Catch-all route." });
});

const PORT: number = 5050;
connectDB();
app.listen(PORT, (): void => console.log(`running on port ${PORT}`));
