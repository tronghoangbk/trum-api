import { Schema } from "mongoose";

const projectSchema = new Schema(
  {
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
  },
  {
    timestamps: true,
  }
);

export default projectSchema;
