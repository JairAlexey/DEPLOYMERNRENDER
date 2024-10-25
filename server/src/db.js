import mongoose from "mongoose";
import { MONGODB_URI } from "./config.js";

export const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log("MongoDB Atlas is connected");
  } catch (error) {
    console.error("Error connecting to MongoDB Atlas:", error.message);
  }
};