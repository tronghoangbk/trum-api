import { Router } from "express";
import {
  getProjectController,
  getProjectByTitleController,
  addProjectController,
  updateProjectController,
  deleteProjectController,
} from "../controllers/project.controller";

const ProjectRouter = Router();
ProjectRouter.get("/", getProjectController);
ProjectRouter.get("/get-by-title/:title", getProjectByTitleController);
ProjectRouter.put("/update/:id", updateProjectController);
ProjectRouter.delete("/delete/:id", deleteProjectController);
ProjectRouter.post("/add", addProjectController);

export default ProjectRouter;
