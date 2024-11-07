import { Router } from "express";
import { loginUser, registerUser } from "../controllers/auth.controller";
import { checkSchema } from "express-validator";
import { handleValidationErrors } from "../middlewares/validation.middleware";
import {
  userRegistrationSchema,
  userLoginSchema,
} from "../validators/user.validator";

const router = Router();
router.post(
  "/register",
  checkSchema(userRegistrationSchema),
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
