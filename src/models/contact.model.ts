import mongoose from "mongoose";

const Schema = mongoose.Schema;

const contactSchema = new Schema(
  {
    name: String,
    email: String,
    message: String,
    phone: String,
    address: String,
    facebook: String,
    instagram: String,
    twitter: String,
    linkedin: String,
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Contact", contactSchema);
