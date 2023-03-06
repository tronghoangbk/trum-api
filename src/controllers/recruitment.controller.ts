import { Response, Request } from "express";

import RecruitmentModel from "../models/recruitment.model";

const getRecruitmentController = async (req: Request, res: Response) => {
  try {
    const recruitment = await RecruitmentModel.findOne();
    res.status(200).json(recruitment);
  } catch (error: any) {
    res.status(404).json({ message: error.message });
  }
};

const updateRecruitmentController = async (req: Request, res: Response) => {
  try {
    const { title, description } = req.body;
    const newData = await RecruitmentModel.findOneAndUpdate(
      {},
      { title, description },
      { new: true }
    );
    res.status(200).json(newData);
  } catch (error: any) {
    res.status(404).json({ message: error.message });
  }
};

const addHiringController = async (req: Request, res: Response) => {
  try {
    const { title, description } = req.body;
    const newData = await RecruitmentModel.findOneAndUpdate(
      {},
      {$push: {listJob: {title, description}}},
      { new: true }
    );
    res.status(200).json(newData);
  } catch (error: any) {
    res.status(404).json({ message: error.message });
  }
};

export {
  getRecruitmentController,
  updateRecruitmentController,
  addHiringController,
};
