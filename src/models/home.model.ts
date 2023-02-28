import mongoose from "mongoose";
const Schema = mongoose.Schema;

const homeSchema = new Schema(
  {
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
  },
  { timestamps: true }
);
const HomeModel = mongoose.model("home", homeSchema);
export default HomeModel;
