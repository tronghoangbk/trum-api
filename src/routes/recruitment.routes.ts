import { Router } from "express";
import { getRecruitmentController, updateRecruitmentController, addHiringController } from "../controllers/recruitment.controller";

const RecruitmentRouter = Router();
RecruitmentRouter.get("/", getRecruitmentController);
RecruitmentRouter.put("/update", updateRecruitmentController);
RecruitmentRouter.post("/add-hiring", addHiringController);

export default RecruitmentRouter;
