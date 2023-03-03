"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const project_controller_1 = require("../controllers/project.controller");
const ProjectRouter = (0, express_1.Router)();
ProjectRouter.get('/', project_controller_1.getProjectController);
ProjectRouter.get('/get-by-title/:title', project_controller_1.getProjectByTitleController);
ProjectRouter.put('/update/:id', project_controller_1.getProjectController);
exports.default = ProjectRouter;
