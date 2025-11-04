import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import contactRoutes from "./routes/contactRoute.js";

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// ✅ MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected Successfully"))
  .catch((err) => console.log("❌ MongoDB Connection Error:", err));

// Routes
app.use("/api/contact", contactRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("🚀 Ezip Panjiyan Center API running...");
});

// Server Start
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🌐 Server running on http://localhost:${PORT}`));
