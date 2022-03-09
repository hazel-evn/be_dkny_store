const express = require("express");
const app = express();
const productRouter = require("./router/product");

// Middleware
app.use(express.json());

// Router express
app.use("/api", productRouter);

// Connect
const PORT = 3000;
app.listen(PORT, () => {
    console.log("Server đang chạy ở cổng "+PORT);
})



