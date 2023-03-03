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
exports.getContactController = void 0;
const contact_model_1 = __importDefault(require("../models/contact.model"));
const getContactController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const contact = yield contact_model_1.default.findOne();
        res.status(200).json(contact);
    }
    catch (error) {
        res.status(404).json({ message: error.message });
    }
});
exports.getContactController = getContactController;
const updateContactController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const contact = yield contact_model_1.default.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true });
        res.status(200).json(contact);
    }
    catch (error) {
        res.status(404).json({ message: error.message });
    }
});
