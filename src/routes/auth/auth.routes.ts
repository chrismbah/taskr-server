import { Router } from "express";
import { registerUser } from "../../controllers/auth/register";
import { checkSchema } from "express-validator";
import { handleValidationErrors } from "../../middlewares/validationErrorHandler";
import { userRegisterationSchema } from "../../validations/userValidationSchema";

const router = Router();
router.use(
  "/register",
  checkSchema(userRegisterationSchema),
  handleValidationErrors,
  registerUser
);

export default router;
