"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const home_routes_1 = __importDefault(require("./home.routes"));
const contact_routes_1 = __importDefault(require("./contact.routes"));
const recruitment_routes_1 = __importDefault(require("./recruitment.routes"));
const project_routes_1 = __importDefault(require("./project.routes"));
const APIRouter = express_1.default.Router();
APIRouter.use("/static", express_1.default.static(path_1.default.join(__dirname, "../../public")));
APIRouter.use("/homepage", home_routes_1.default);
APIRouter.use("/contact", contact_routes_1.default);
APIRouter.use("/recruitment", recruitment_routes_1.default);
APIRouter.use("/project", project_routes_1.default);
exports.default = APIRouter;
