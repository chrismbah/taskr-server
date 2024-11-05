import { Schema } from "express-validator";

export const userValidationSchema: Schema = {
  username: {
    isLength: {
      errorMessage: "Username should be at least 3 chars long",
      options: { min: 3, max: 32 },
    },
    notEmpty: {
      errorMessage: "Username cannot be empty",
    },
    isString: {
      errorMessage: "Username must be a string",
    },
  },
  email: {
    isEmail: {
      errorMessage: "Please provide a valid email",
    },
    notEmpty: {
      errorMessage: "Email cannot be empty",
    },
    isLength: {
      errorMessage: "Email should be at least 3 chars long",
      options: { min: 3, max: 32 },
    },
  },
  password: {
    isLength: {
      errorMessage: "Password should be at least 8 chars long",
      options: { min: 8 },
    },
    notEmpty: {
      errorMessage: "Password cannot be empty",
    },
  },
};
