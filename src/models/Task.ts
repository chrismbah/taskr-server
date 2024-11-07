import mongoose, { Schema, model } from "mongoose";
import { ITask } from "../../types/tasks";

// Create the Task schema
export const taskSchema: Schema<ITask> = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  status: {
    type: String,
    enum: ["pending", "in-progress", "completed"],
    default: "pending",
  },
  dueDate: { type: Date },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const Task = model<ITask>("Task", taskSchema);
export default Task;