"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const projectSchema = new mongoose_1.Schema({
    title: Object,
    category: String,
    description: String,
    mainImage: String,
    content: Object,
    image: Object,
    credits: Object,
    listContent: [
        {
            title: String,
            description: String,
            image: String,
            imageAlt: String,
        },
    ],
}, {
    timestamps: true,
});
exports.default = projectSchema;
