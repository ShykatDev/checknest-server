import express from "express";

const app = express();

// JSON middleware
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  return res.status(200).json({
    message: "ok",
  });
});

export default app;
