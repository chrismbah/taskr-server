import { Router } from "express";
import userRoutes from "./user/user.routes";
const router = Router();

router.use("/api/v1/users", userRoutes);

export default router;
