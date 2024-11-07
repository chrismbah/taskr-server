import jwt from "jsonwebtoken";
import "../config";
import { TOKEN_EXPIRATION } from "../constants";
export const generateToken = (userId: string) => {
  const payload = { id: userId };
  return jwt.sign(payload, process.env.JWT_SECRET!, {
    expiresIn: TOKEN_EXPIRATION,
  });
};
