import express from "express";
import path from "path";
import HomeRouter from "./home.routes";
import ContactRouter from "./contact.routes";
import RecruitmentRouter from "./recruitment.routes";
import ProjectRouter from "./project.routes";

const APIRouter = express.Router();

APIRouter.use("/static", express.static(path.join(__dirname, "../../public")));
APIRouter.use("/homepage", HomeRouter);
APIRouter.use("/contact", ContactRouter);
APIRouter.use("/recruitment", RecruitmentRouter);
APIRouter.use("/project", ProjectRouter);
export default APIRouter;
