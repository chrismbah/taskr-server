import { Router } from "express";
import { getAllUsers, createUser } from "../../controllers/user.controller";
import { checkSchema } from "express-validator";
import { handleValidationErrors } from "../../middlewares/validationErrorHandler";
import { userValidationSchema } from "../../validations/userValidationSchema";

const router = Router();

router.get("/", getAllUsers);
router.post(
  "/create-user",
  checkSchema(userValidationSchema),
  handleValidationErrors,
  createUser
);

export default router;
