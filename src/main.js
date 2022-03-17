import express from "express";
import productRouter from "./routes/product";
import categoryRouter from "./routes/category";
import mongoose from "mongoose";
const app = express();
// Middleware
app.use(express.json());
// Router express
app.use("/api", productRouter);
app.use("/api", categoryRouter);
// Connect Database
mongoose.connect("mongodb://localhost:27017/nodejs")
    .then(() => console.log("Connect database thanh cong"));
// Connect
const PORT = 8000;
app.listen(PORT, () => {
    console.log("Server đang chạy ở cổng "+PORT);
})



