const DATABASE_URL = process.env.DATABASE_URL;
import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const promise = async () => {
      return new Promise((resolve: any, rejects: any) => {
        mongoose
          .connect(`${DATABASE_URL}`)
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
