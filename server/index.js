
import { connectDB } from "./database/db.js";
import { PORT } from "./config/config.js";
import app from "./app.js";

connectDB();

app.listen(PORT);
console.log(`Server is running on port ${PORT}`);