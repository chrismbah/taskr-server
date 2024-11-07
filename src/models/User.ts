import mongoose, { Schema, model } from "mongoose";
import { IUser } from "../types/user";
import { taskSchema } from "./Task";

const userSchema: Schema<IUser> = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  isActive: { type: Boolean, default: true },
  lastLogin: {
    type: Date,
    default: Date.now,
  },
  password: { type: String, required: true },
  role: {
    type: String,
    enum: ["user", "admin", "superadmin"],
    default: "user",
  },
  tasks: [taskSchema], // Array of tasks associated with the user
  preferences: {
    notifications: { type: Boolean, default: true },
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

// Export the User model
const User = model<IUser>("User", userSchema);
export default User;
