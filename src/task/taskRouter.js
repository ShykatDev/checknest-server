import express from "express";
import { createTask } from "./taskController.js";

const taskRouter = express.Router();

// Routing Methods
taskRouter.post("/", createTask);

export default taskRouter;
