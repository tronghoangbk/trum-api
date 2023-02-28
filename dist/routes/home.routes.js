"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const home_controller_1 = require("../controllers/home.controller");
const HomeRouter = (0, express_1.Router)();
HomeRouter.get('/', home_controller_1.getHomeContent);
exports.default = HomeRouter;
