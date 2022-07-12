import express from "express";
import productRouter from "./src/routes/product.js";
import categoryRouter from "./src/routes/category.js";
import authRouter from "./src/routes/auth.js";
import searchRouter from "./src/routes/search.js";
import mongoose from "mongoose";
import cors from "cors";
const app = express();
// Middleware
app.use(express.json());
app.use(cors());
// Router express
app.use("/api", productRouter);
app.use("/api", categoryRouter);
app.use("/api", authRouter);
app.use("/api", searchRouter);

// Connect Database
mongoose.connect("mongodb+srv://vasloc202:Locva1102@cluster0.rhzkh.mongodb.net/nodejs")
    .then(() => console.log("Connect database thanh cong"));
// Connect
const PORT = 1230;
app.listen(PORT, () => {
    console.log("Server đang chạy ở cổng " + PORT);
})



