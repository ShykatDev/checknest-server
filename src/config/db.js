import mongoose from "mongoose";
import { config } from "./config.js";
import createHttpError from "http-errors";

const connectDB = async () => {
  console.log("🟡 Connecting DataBase...");
  try {
    mongoose.connection.on("connected", () => {
      console.log("🟢 Database connected successfully");
    });

    mongoose.connection.on("error", (err) => {
      const statusCode = err.status;
      return createHttpError(statusCode, "🔴 Failed to connect with DB");
    });

    await mongoose.connect(config.dbString);
  } catch (err) {
    console.log("🔴 Failed to connect with Database (initial connection)");
    process.exit(1);
  }
};

export default connectDB;
