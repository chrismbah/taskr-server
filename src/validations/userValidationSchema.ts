import { Schema } from "express-validator";

export const userRegisterationSchema: Schema = {
  firstName: {
    isString: {
      errorMessage: "First name must be a string",
    },
    isLength: {
      options: { min: 1 },
      errorMessage: "First name is required",
    },
    trim: true,
    notEmpty: {
      errorMessage: "First name cannot be empty",
    },
  },
  lastName: {
    isString: {
      errorMessage: "Last name must be a string",
    },
    isLength: {
      options: { min: 1 },
      errorMessage: "Last name is required",
    },
    trim: true,
    notEmpty: {
      errorMessage: "Last name cannot be empty",
    },
  },
  email: {
    isEmail: {
      errorMessage: "Please provide a valid email address",
    },
    normalizeEmail: true,
    notEmpty: {
      errorMessage: "Email is required",
    },
  },
  password: {
    isLength: {
      options: { min: 8 },
      errorMessage: "Password should be at least 8 characters long",
    },
    notEmpty: {
      errorMessage: "Password cannot be empty",
    },
  },
};
