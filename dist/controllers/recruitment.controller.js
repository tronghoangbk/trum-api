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
exports.updateRecruitmentController = exports.getRecruitmentController = void 0;
const recruitment_model_1 = __importDefault(require("../models/recruitment.model"));
const getRecruitmentController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const recruitment = yield recruitment_model_1.default.findOne();
        res.status(200).json(recruitment);
    }
    catch (error) {
        res.status(404).json({ message: error.message });
    }
});
exports.getRecruitmentController = getRecruitmentController;
const updateRecruitmentController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const recruitment = yield recruitment_model_1.default.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true });
        res.status(200).json(recruitment);
    }
    catch (error) {
        res.status(404).json({ message: error.message });
    }
});
exports.updateRecruitmentController = updateRecruitmentController;
