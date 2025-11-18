import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import connectDB from "./utils/db.js";

import { router as userRouter } from "./routes/userRoutes.js";
import { propertyRouter } from "./routes/propertyRouter.js";
import { bookingRouter } from "./routes/bookingRouter.js";

dotenv.config();

const app = express();

// =======================
// CORS SETUP
// =======================
app.use(
  cors({
    origin: process.env.ORIGIN_ACCESS_URL || "*", // Add Vercel URL here
    credentials: true,
  })
);

// =======================
// PARSERS
// =======================
app.use(express.json({ limit: "100mb" }));
app.use(express.urlencoded({ extended: true, limit: "100mb" }));
app.use(cookieParser());

// =======================
// CONNECT DATABASE
// =======================
connectDB();

// =======================
// ROUTES
// =======================
app.use("/api/v1/rent/user", userRouter);
app.use("/api/v1/rent/listing", propertyRouter);
app.use("/api/v1/rent/user/booking", bookingRouter);

// DEFAULT ROUTE (Fixes "Cannot GET /")
app.get("/", (req, res) => {
  res.send("HomelyHub Backend API is running...");
});

// =======================
// START SERVER
// =======================
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`🚀 HomelyHub backend running on port ${port}`);
});
