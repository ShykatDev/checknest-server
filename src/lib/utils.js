import path from "path";
import { fileURLToPath } from "url";

// Get the current module's filename
const __filename = fileURLToPath(import.meta.url);

// Get the current module's directory
const __dirname = path.dirname(__filename);

export const dirname = __dirname;
