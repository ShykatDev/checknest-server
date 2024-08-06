import express from "express";
import { createTask, getAllTasks } from "./taskController.js";

const taskRouter = express.Router();

// Routing Methods
taskRouter.get("/", getAllTasks);
taskRouter.post("/", createTask);

export default taskRouter;
