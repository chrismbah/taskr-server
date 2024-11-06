import { Router } from "express";
import { loginUser, registerUser } from "../controllers/auth.controllers";
import { checkSchema } from "express-validator";
import { handleValidationErrors } from "../middlewares/validationErrorHandler";
import {
  userRegisterationSchema,
  userLoginSchema,
} from "../validations/userValidationSchema";

const router = Router();
router.post(
  "/register",
  checkSchema(userRegisterationSchema),
  handleValidationErrors,
  registerUser
);
router.post(
  "/login",
  checkSchema(userLoginSchema),
  handleValidationErrors,
  loginUser
);

export default router;
