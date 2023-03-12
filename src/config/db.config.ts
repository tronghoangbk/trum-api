const DATABASE_URL = process.env.DATABASE_URL;
import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const promise = async () => {
      return new Promise((resolve: any, rejects: any) => {
        mongoose
          .connect(`mongodb+srv://trumapi:trumapi@cluster0.nuoxdey.mongodb.net/trum?retryWrites=true&w=majority`)
          .then((res: any) => {
            resolve(res);
			console.log("Connected to database");
          })
          .catch((err: any) => {
            rejects(err);
          });
      });
    };
    const resolve = await promise();
  } catch (error: any) {
    console.log(error.message);
  }
};

export { connectDB };
