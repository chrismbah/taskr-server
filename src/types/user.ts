import { Document } from "mongoose";
import { ITask } from "./tasks";

export interface IUser extends Document {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  isActive: boolean;
  lastLogin: Date;
  role: "user" | "admin" | "superadmin"; // e.g., "admin", "user"
  tasks: ITask[]; // Array of tasks associated with the user
  preferences: {
    notifications: boolean; // For task notifications
  };
  createdAt: Date;
  updatedAt: Date;
}
