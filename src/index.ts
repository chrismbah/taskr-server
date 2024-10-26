import app from "./app";

import { connectDB } from "./config/db";

const PORT: number = 5050;

connectDB();

if (process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test") {
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
}
