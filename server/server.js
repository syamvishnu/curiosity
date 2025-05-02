import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import searchRouter from "./routes/searchRoutes.js";

const app = express();
dotenv.config();
const PORT = process.env.PORT || 5000;

app.use(express.json({ limit: "30mb" }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cookieParser());
app.use(cors({ origin: "http://localhost:3000", Credential: true }));

app.use("/api/data", searchRouter);

app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
