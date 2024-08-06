import app from "./app.js";
import { config } from "./src/config/config.js";
import connectDB from "./src/config/db.js";

// Database connection

const startServer = async () => {
  await connectDB();

  app.listen(config.port, () => {
    console.log(`🟩 Server running on http://localhost:${config.port}`);
  });
};

await startServer();
