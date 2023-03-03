"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const recruitment_controller_1 = require("../controllers/recruitment.controller");
const RecruitmentRouter = (0, express_1.Router)();
RecruitmentRouter.get("/", recruitment_controller_1.getRecruitmentController);
exports.default = RecruitmentRouter;
