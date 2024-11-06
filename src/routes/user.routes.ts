import { Router } from "express";
import { getUserProfile } from "../controllers/user.controllers";
import { verifyToken } from "../middlewares/verifyToken";
const router = Router();

router.get("/profile", verifyToken, getUserProfile);

export default router;
