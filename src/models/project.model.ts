import mongoose, { Schema } from "mongoose";

const projectSchema = new Schema(
  {
    title: Object,
    category: String,
    description: String,
    mainImage: String,
    mainImageAlt: String,
    video: String,
    videoAlt: String,
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

export default mongoose.model("Project", projectSchema);
