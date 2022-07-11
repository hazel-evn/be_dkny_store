import express from "express";
import productRouter from "./routes/product.js";
import categoryRouter from "./routes/category.js";
import authRouter from "./routes/auth.js";
import searchRouter from "./routes/search.js";
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
mongoose.connect("mongodb://localhost:27017/nodejs", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("Connect database thanh cong"));
// Connect
const PORT = 3333;
app.listen(PORT, () => {
    console.log("Server đang chạy ở cổng " + PORT);
})



