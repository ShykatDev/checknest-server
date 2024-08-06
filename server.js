import app from "./app.js";
import { config } from "./src/config/config.js";
import connectDB from "./src/config/db.js";

const startServer = async () => {
  // Database connection
  await connectDB();

  app.listen(config.port, () => {
    console.log(`🟩 Server running on http://localhost:${config.port}`);
  });
};

await startServer();
