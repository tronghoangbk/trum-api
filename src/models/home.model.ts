import mongoose from "mongoose";
const Schema = mongoose.Schema;

const homeSchema = new Schema(
  {
    title: [
      {
        content: { type: String },
        effect: { type: Array, default: [] },
      },
    ],
    description: [{ content: String }],
    mainImage: String,
    subTitle: [
      {
        content: { type: String },
        effect: { type: Array, default: [] },
      },
    ],
    listContent: [
      {
        content: { type: String },
        description: { type: String },
        image: { type: String },
      },
    ],
  },
  { timestamps: true }
);
const HomeModel = mongoose.model("home", homeSchema);
export default HomeModel;
