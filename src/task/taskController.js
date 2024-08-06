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

export const getAllTasks = async (req, res) => {
  const allTasks = await taskModel.find();

  if (!allTasks.length) {
    return res.status(400).json({
      message: "No Task Found",
    });
  }
  return res.status(200).json(allTasks);
};
