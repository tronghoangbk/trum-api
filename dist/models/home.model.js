"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const homeSchema = new Schema({
    title: { type: Array, default: [] },
    // title: [
    //   {
    //     content: { type: String },
    //     effect: { type: Array, default: [] },
    //   },
    // ],
    //   description: [{ content: String }],
    //   mainImage: String,
    //   swiper: [
    //     {
    //       content: String,
    //       description: String,
    //       image: String,
    //       imageAlt: String,
    //     },
    //   ],
    //   subTitle: [
    //     {
    //       content: String,
    //       effect: { type: Array, default: [] },
    //     },
    //   ],
    //   listContent: [
    //     {
    //       content: String,
    //       description: String,
    //       image: String,
    //       imageAlt: String,
    //     },
    //   ],
}, { timestamps: true });
const HomeModel = mongoose_1.default.model("home", homeSchema);
exports.default = HomeModel;
