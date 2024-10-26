import express, { Application } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import logger from "morgan"
import routes from "./routes";

export const app: Application = express();

// Middlewares
app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use(logger('dev'));
app.use("/api", routes);

export default app;
