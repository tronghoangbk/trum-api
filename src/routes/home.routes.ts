import { Router } from "express";
import {
  getHomeContent,
  updateHomePageController,
} from "../controllers/home.controller";
const HomeRouter = Router();
HomeRouter.get("/", getHomeContent);
HomeRouter.put("/update", updateHomePageController);
export default HomeRouter;
