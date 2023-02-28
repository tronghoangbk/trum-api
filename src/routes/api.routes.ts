import express from "express";
import path from "path";
import HomeRouter from "./home.routes";
const APIRouter = express.Router();

APIRouter.use("/static", express.static(path.join(__dirname, "../../public")));
APIRouter.use("/homepage", HomeRouter);
export default APIRouter;
