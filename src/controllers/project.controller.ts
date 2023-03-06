import { Response, Request } from "express";
import ProjectModel from "../models/project.model";

const getProjectController = async (req: Request, res: Response) => {
  try {
    const project = await ProjectModel.find(
      { },
      { title: 1, mainImage: 1, category: 1 }
    );
    res.status(200).json(project);
  } catch (error: any) {
    res.status(404).json({ message: error.message });
  }
};

const getProjectByTitleController = async (req: Request, res: Response) => {
  try {
    const project = await ProjectModel.findOne({ title: req.params.title });
    res.status(200).json(project);
  } catch (error: any) {
    res.status(404).json({ message: error.message });
  }
};

const addProjectController = async (req: Request, res: Response) => {
  try {
    const project = await ProjectModel.create(req.body);
    res.status(200).json(project);
  } catch (error: any) {
    res.status(404).json({ message: error.message });
  }
};

const deleteProjectController = async (req: Request, res: Response) => {
  try {
    const project = await ProjectModel.findOneAndDelete({ _id: req.params.id });
    res.status(200).json(project);
  } catch (error: any) {
    res.status(404).json({ message: error.message });
  }
};

const updateProjectController = async (req: Request, res: Response) => {
  try {
    const project = await ProjectModel.findOneAndUpdate(
      { _id: req.params.id },
      req.body
    );
    res.status(200).json(project);
  } catch (error: any) {
    res.status(404).json({ message: error.message });
  }
};


export {
  getProjectController,
  getProjectByTitleController,
  deleteProjectController,
  addProjectController,
  updateProjectController
};
