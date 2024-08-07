import express from "express";
import taskRouter from "./src/task/taskRouter.js";
import userRouter from "./src/user/userRouter.js";

const app = express();

// JSON middleware
app.use(express.json());

// Routes
app.use("/api/tasks", taskRouter); // Task router
app.use("/api/users", userRouter); // User router

export default app;
