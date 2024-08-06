import express from "express";
import taskRouter from "./src/task/taskRouter.js";

const app = express();

// JSON middleware
app.use(express.json());

// Routes
app.use("/api/tasks", taskRouter); // Task router

export default app;
