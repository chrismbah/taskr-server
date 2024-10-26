import { Router } from "express";
import { registerUser } from "../controllers/auth/register";
const router = Router();
router.use("/", registerUser);

export default router
