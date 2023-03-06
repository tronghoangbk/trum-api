import { Router } from "express";
import {
  getContactController,
  updateContactController,
} from "../controllers/contact.controller";

const ContactRouter = Router();
ContactRouter.get("/", getContactController);
ContactRouter.put("/update/", updateContactController);

export default ContactRouter;
