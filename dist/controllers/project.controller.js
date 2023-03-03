"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addProjectController = exports.deleteProjectController = exports.getProjectByTitleController = exports.getProjectController = void 0;
const project_model_1 = __importDefault(require("../models/project.model"));
const getProjectController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const project = yield project_model_1.default.find({}, { title: 1, image: 1, category: 1 });
        res.status(200).json(project);
    }
    catch (error) {
        res.status(404).json({ message: error.message });
    }
});
exports.getProjectController = getProjectController;
const getProjectByTitleController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const project = yield project_model_1.default.findOne({ title: req.params.title });
        res.status(200).json(project);
    }
    catch (error) {
        res.status(404).json({ message: error.message });
    }
});
exports.getProjectByTitleController = getProjectByTitleController;
const addProjectController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const project = yield project_model_1.default.create(req.body);
        res.status(200).json(project);
    }
    catch (error) {
        res.status(404).json({ message: error.message });
    }
});
exports.addProjectController = addProjectController;
const deleteProjectController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const project = yield project_model_1.default.findOneAndDelete({ _id: req.params.id });
        res.status(200).json(project);
    }
    catch (error) {
        res.status(404).json({ message: error.message });
    }
});
exports.deleteProjectController = deleteProjectController;
