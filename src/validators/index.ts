export const emailValidator = {
  isEmail: {
    errorMessage: "Please provide a valid email address",
  },
  normalizeEmail: true,
  notEmpty: {
    errorMessage: "Email is required",
  },
};

export const passwordValidator = {
  isLength: {
    options: { min: 8 },
    errorMessage: "Password should be at least 8 characters long",
  },
  notEmpty: {
    errorMessage: "Password cannot be empty",
  },
};

export const nameValidator = {
  isString: {
    errorMessage: "Name must be a string",
  },
  isLength: {
    options: { min: 1 },
    errorMessage: "Name is required",
  },
  trim: true,
  notEmpty: {
    errorMessage: "Name cannot be empty",
  },
};
