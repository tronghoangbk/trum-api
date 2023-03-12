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
exports.updateHomePageController = exports.getHomeContent = void 0;
const home_model_1 = __importDefault(require("../models/home.model"));
const getHomeContent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const homeContent = yield home_model_1.default.findOne();
        res.status(200).json(homeContent);
    }
    catch (error) {
        res.status(404).json({ message: error.message });
    }
});
exports.getHomeContent = getHomeContent;
const updateHomePageController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        function convert(str) {
            let arr = str.split("\n");
            let result = "";
            for (let i = 0; i < arr.length; i++) {
                result += `<p>${arr[i]}</p>`;
            }
            return result;
        }
        let newData = req.body;
        newData.listContent[2].description = convert(newData.listContent[2].description);
        const data = yield home_model_1.default.findOneAndUpdate({}, newData, { new: true });
        res.status(200).json(data);
    }
    catch (error) {
        res.status(404).json({ message: error.message });
    }
});
exports.updateHomePageController = updateHomePageController;
