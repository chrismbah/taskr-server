import { Router } from "express";
import { getUserProfile, updateProfile } from "../controllers/user.controller";
import { verifyToken } from "../middlewares/auth.middleware";
const router = Router();

router.get("/profile", verifyToken, getUserProfile);
router.patch("/update-profile", verifyToken, updateProfile);

export default router;
