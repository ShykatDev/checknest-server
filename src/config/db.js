import mongoose from "mongoose";
import { config } from "./config.js";

const connectDB = async () => {
  console.log("🟡 Connecting DataBase...");
  try {
    mongoose.connection.on("connected", () => {
      console.log("🟢 Database connected successfully");
    });

    mongoose.connection.on("error", (err) => {
      console.log("❌ Failed to connect with Database", err);
    });

    await mongoose.connect(config.dbString);
  } catch (err) {
    console.log("❌ Failed to connect with Database (initial connection)");
  }
};

export default connectDB;
