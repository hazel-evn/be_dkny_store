import express from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import productRouter from "./src/routes/product.js";
import categoryRouter from "./src/routes/category.js";
import authRouter from "./src/routes/auth.js";
import searchRouter from "./src/routes/search.js";
import mongoose from "mongoose";
import cors from "cors";
const app = express();
// Middleware
dotenv.config();
app.use(express.json());
app.use(cors());
// Router express
app.use("/api", productRouter);
app.use("/api", categoryRouter);
app.use("/api", authRouter);
app.use("/api", searchRouter);

// Connect Database
// mongoose.connect("mongodb+srv://vasloc202:Locva1102@cluster0.rhzkh.mongodb.net/nodejs")
//     .then(() => console.log("Connect database thanh cong"));

mongoose
  .connect("mongodb://localhost:27017/dknystore")
  .then(() => console.log("Connect database thanh cong"));
// Connect
app.post("/login", (req, res) => {
  const data = req.body;
  const accesstoken = jwt.sign(data, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: 60 * 60,
  });
  res.json({ accesstoken });
});
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log("Server đang chạy ở cổng " + PORT);
});
