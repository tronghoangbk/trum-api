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
    const recruitment = await RecruitmentModel.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    );
    res.status(200).json(recruitment);
  } catch (error: any) {
    res.status(404).json({ message: error.message });
  }
};

export { getRecruitmentController, updateRecruitmentController };
