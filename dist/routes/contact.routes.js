"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const contact_controller_1 = require("../controllers/contact.controller");
const ContactRouter = (0, express_1.Router)();
ContactRouter.get("/", contact_controller_1.getContactController);
ContactRouter.put("/update/", contact_controller_1.updateContactController);
exports.default = ContactRouter;
