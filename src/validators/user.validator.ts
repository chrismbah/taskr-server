import { Schema } from "express-validator";
import { emailValidator } from ".";
import { passwordValidator } from ".";
import { nameValidator } from ".";

export const userLoginSchema: Schema = {
  email: emailValidator,
  password: passwordValidator,
};

export const userRegistrationSchema: Schema = {
  firstName: nameValidator,
  lastName: nameValidator,
  email: emailValidator,
  password: passwordValidator,
};

export const updateProfileSchema: Schema = {
  firstName: nameValidator,
  lastName: nameValidator,
};
