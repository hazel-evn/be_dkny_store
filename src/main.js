import express from "express";
import productRouter from "./routes/product"
const app = express();
// Middleware
app.use(express.json());

// Router express
app.use("/api", productRouter);

// Connect
const PORT = 3000;
app.listen(PORT, () => {
    console.log("Server đang chạy ở cổng "+PORT);
})



