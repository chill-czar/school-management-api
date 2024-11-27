import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import schoolRoutes from "./routes/schoolRoutes.js";

dotenv.config();

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error("MongoDB connection error:", error));

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use("/api", schoolRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
