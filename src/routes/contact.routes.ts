import { Router } from "express";
import { getContactController } from "../controllers/contact.controller";
const ContactRouter = Router();
ContactRouter.get("/", getContactController);

export default ContactRouter;
