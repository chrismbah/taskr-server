import { Response } from "express";

export const AppResponse = <T>(
  res: Response,
  statusCode: number,
  data: T,
  message?: string
) => {
  return res.status(statusCode).json({
    statusCode,
    success: statusCode >= 200 && statusCode < 300,
    message:
      message ||
      (statusCode >= 200 && statusCode < 300
        ? "Request successful"
        : "Request failed"),
    data,
  });
};
