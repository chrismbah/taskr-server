// src/config/db.ts
import mongoose from "mongoose";
import ".";

// MongoDB Connection Function
export const connectDB = async (): Promise<void> => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URL as string);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error}`);
  }
};
