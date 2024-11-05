export interface ITask {
  title: string;
  description: string;
  status: string; // e.g., "pending", "in-progress", "completed"
  dueDate?: Date;
  createdAt: Date;
  updatedAt: Date;
}
