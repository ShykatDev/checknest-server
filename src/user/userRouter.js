import express from "express";
import multer from "multer";
import path from "node:path";
import { createUser, loginUser } from "./userController.js";
import { dirname } from "../lib/utils.js";

// multer config
const upload = multer({
  dest: "./uploads",
});

const userRouter = express.Router();

userRouter.post("/register", upload.single("profile_image"), createUser);
userRouter.post("/login", loginUser);

export default userRouter;
