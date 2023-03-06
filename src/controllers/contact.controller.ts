import { Response, Request } from "express";
import contactModel from "../models/contact.model";

const getContactController = async (req: Request, res: Response) => {
  try {
    const contact = await contactModel.findOne();
    res.status(200).json(contact);
  } catch (error: any) {
    res.status(404).json({ message: error.message });
  }
};

const updateContactController = async (req: Request, res: Response) => {
  try {
    const contact = await contactModel.findOneAndUpdate({}, req.body, {
      new: true,
    });
    res.status(200).json(contact);
  } catch (error: any) {
    res.status(404).json({ message: error.message });
  }
};

export { getContactController, updateContactController };
