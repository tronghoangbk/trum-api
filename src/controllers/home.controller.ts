import { Request, Response } from "express";
import HomeModel from "../models/home.model";

const getHomeContent = async (req: Request, res: Response) => {
  try {
    const homeContent = await HomeModel.findOne();
    res.status(200).json(homeContent);
  } catch (error: any) {
    res.status(404).json({ message: error.message });
  }
};

const updateHomePageController = async (req: Request, res: Response) => {
  try {
    const data = await HomeModel.findOneAndUpdate({}, req.body, { new: true });
    res.status(200).json(data);
  } catch (error: any) {
    res.status(404).json({ message: error.message });
  }
};

export { getHomeContent, updateHomePageController };
