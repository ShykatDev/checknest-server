import { config as conf } from "dotenv";
conf();

const _config = {
  port: process.env.PORT,
  dbString: process.env.MONGO_CONNECTION_STRING,
  jwtString: process.env.JWT_SECRET,
  cloudinary_cloud: process.env.CLOUDINARY_CLOUD,
  cloudinary_api_key: process.env.CLOUDINARY_API_KEY,
  cloudinary_api_secret: process.env.CLOUDINARY_API_SECRET,
};

export const config = Object.freeze(_config);
