import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors({
    origin: "http://localhost:5173", // Only accept requests from React frontend
    credentials: true                // Allow cookies/tokens to be sent if needed
}));
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);

// Database Connection
mongoose.connect(process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/socialAppX")
    .then(() => {
        console.log("Connected to MongoDB");
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    })
    .catch((error) => {
        console.error("Error connecting to MongoDB:", error);
    });
