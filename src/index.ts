import app from "./app";
import { Request, Response, NextFunction } from "express";
import { connectDB } from "./config/db";

const PORT: number = 5050;
app.use("/", (req: Request, res: Response, next: NextFunction): void => {
  res.json({ message: "Allo! Catch-all route." });
});
connectDB();

if (process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test") {
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
}
