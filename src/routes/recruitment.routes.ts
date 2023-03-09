import { Router } from "express";
import {
  getRecruitmentController,
  updateRecruitmentController,
  addHiringController,
  deleteHiringController,
  updateHiringController,
} from "../controllers/recruitment.controller";

const RecruitmentRouter = Router();
RecruitmentRouter.get("/", getRecruitmentController);
RecruitmentRouter.put("/update", updateRecruitmentController);
RecruitmentRouter.post("/add-hiring", addHiringController);
RecruitmentRouter.delete("/delete-hiring/:id", deleteHiringController);
RecruitmentRouter.put("/update-hiring/:id", updateHiringController);

export default RecruitmentRouter;
