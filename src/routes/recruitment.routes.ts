import { Router } from "express";
import { getRecruitmentController } from "../controllers/recruitment.controller";

const RecruitmentRouter = Router();
RecruitmentRouter.get("/", getRecruitmentController);

export default RecruitmentRouter;
