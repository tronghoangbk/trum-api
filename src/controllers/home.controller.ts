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
    function convert(str: string) {
      let arr = str.split("\n");
      let result = "";
      for (let i = 0; i < arr.length; i++) {
        result += `<p>${arr[i]}</p>`;
      }
      return result;
    }
    let newData = req.body;
    newData.listContent[4] = convert(newData.listContent[4]);
    const data = await HomeModel.findOneAndUpdate({}, newData, { new: true });
    res.status(200).json(data);
  } catch (error: any) {
    res.status(404).json({ message: error.message });
  }
};

export { getHomeContent, updateHomePageController };
