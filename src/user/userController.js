import createHttpError from "http-errors";
import bcrypt from "bcrypt";
import { userModel } from "./userModel.js";
// import { sign } from "jsonwebtoken";
import { config } from "../config/config.js";
import cloudinary from "../config/coludinary.js";
import path from "node:path";
import { dirname } from "../lib/utils.js";
import pkg from "jsonwebtoken";

const { sign } = pkg;

export const createUser = async (req, res, next) => {
  // validation
  const { first_name, last_name, email, password } = req.body;

  if (!first_name || !last_name || !email || !password) {
    return next(createHttpError(400, "All fields are required."));
  }
  // connect DB and check user existance
  try {
    const user = await userModel.findOne({ email });
    if (user) {
      return next(createHttpError(500, "User already exists with this email"));
    }
  } catch (err) {
    return next(createHttpError(500, "Error while getting user"));
  }

  // upload profile image to cloudinary
  const fileName = req.file.filename;
  const filePath = path.join(dirname, "../../uploads", fileName);

  const uploadProfileImage = await cloudinary.uploader
    .upload(filePath, {
      filename_override: fileName,
      folder: "profile-images",
    })
    .catch((error) => {
      console.log("❌ Cloudinary Error", error);
    });

  // create new user
  let newUser;

  // Hash Password
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    newUser = await userModel.create({
      ...req.body,
      profile_image: uploadProfileImage.url,
      password: hashedPassword,
    });
  } catch (err) {
    return next(createHttpError(500, "Error while creating user"));
  }

  // Genarate Token
  const token = sign({ sub: newUser._id }, config.jwtString, {
    expiresIn: "7d",
  });

  // Response
  return res.status(201).json({
    access_token: token,
  });
};

export const loginUser = async (req, res, next) => {
  return res.json({
    message: "login",
  });
};
