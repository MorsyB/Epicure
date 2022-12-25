import mongoose from "mongoose";

const connectDb = async () => {
  mongoose.set("strictQuery", true);
  await mongoose.connect("mongodb+srv://Morsy:MorsyB10@epicure.kve9fff.mongodb.net/?retryWrites=true&w=majority");
};

export { connectDb };
