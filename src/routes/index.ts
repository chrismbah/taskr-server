import { Router } from "express";
import userRoutes from "./user/user.routes";
import authRoutes from "./auth/auth.routes";
const router = Router();

router.use("/v1/users", userRoutes);
router.use("/v1/auth", authRoutes);

export default router;
