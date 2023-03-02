import mongoose, { Schema } from "mongoose";

const recruitmentSchema = new Schema(
  {
    title: Object,
    category: String,
    description: String,
    listJob: [{ title: String, description: String }],
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Recruitment", recruitmentSchema);
