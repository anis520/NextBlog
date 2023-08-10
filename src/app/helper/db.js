import mongoose from "mongoose";

export const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGOURI);

    console.log("Db connected ....");
    // console.log(connection);
  } catch (error) {
    console.log(error);
  }
};
