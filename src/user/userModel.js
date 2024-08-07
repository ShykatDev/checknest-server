import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
  {
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    profile_image: { type: String, required: true },
    isPremium: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export const userModel = mongoose.model("User", userSchema);
