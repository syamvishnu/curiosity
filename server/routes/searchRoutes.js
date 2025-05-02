import express from "express";
import { apiSearch } from "../controller/searchController.js";

const searchRouter = express.Router();

searchRouter.post("/", apiSearch);

export default searchRouter;
