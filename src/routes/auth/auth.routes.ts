import { Router } from "express";
import { registerUser } from "../../controllers/auth/register";
import { checkSchema } from "express-validator";
import { handleValidationErrors } from "../../middlewares/validationErrorHandler";
import { userValidationSchema } from "../../validations/userValidationSchema";

const router = Router();
router.use(
  "/register",
  checkSchema(userValidationSchema),
  handleValidationErrors,
  registerUser
);

export default router;
