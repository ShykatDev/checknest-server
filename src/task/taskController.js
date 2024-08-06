import createHttpError from "http-errors";
import { taskModel } from "./taskModel.js";

export const createTask = async (req, res) => {
  // Push data to DB
  let newTask;
  try {
    newTask = taskModel.create(req.body);
  } catch (err) {
    return createHttpError(400, "Something went wrong while creating task");
  }

  return res.status(201).json({
    message: "OK",
  });
};
