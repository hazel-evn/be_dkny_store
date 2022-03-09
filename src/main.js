// const http = require("http");
// const server = http.createServer((req, res) => {
//     const url = req.url;
//     if(url === "/users"){
//         res.setHeader("Content-Type","text/html");
//         res.write("<html>");
//         res.write("<body>");
//         res.write("<ul>");
//         res.write("<li>");
//         res.write("<h1>User 1</h1>")
//         res.write("<li>");
//         res.write("<ul>");
//         res.write("</body>");
//         res.write("</html>");
//         res.end();
//     }else{
//         res.setHeader("Content-Type","text/html");
//         res.write("<html>");
//         res.write("<body>");
//         res.write("<h1>Home Page</h1>")
//         res.write("</body>");
//         res.write("</html>");
//         res.end();
//     }
// });

// const PORT = 1337;

// server.listen(PORT, () => {
//     console.log(`Server running in ${PORT}`);
// })

const express = require("express");
const app = express();

// Middleware
app.use(express.json());
const admin = (req,res,next) => {
    const manager = true;
    if(manager){
        console.log("Quản lý đây à");
        next();
    }else{
        res.redirect("/");
        console.log("Bạn không phải là quản lý");
    }
}
// Router express
app.get("/", (req,res) => {
    res.send("<h1>Home Page</h1>");
})
app.get("/products",admin ,(req,res) => {
    const products = [
        {
            id:1,
            name: "Product 1"
        },
        {
            id:2,
            name: "Product 2"
        }
    ];
    res.json(products);
})
app.post("/products",admin ,(req,res) => {
    const products = [
        {
            id:1,
            name: "Product 1"
        },
        {
            id:2,
            name: "Product 2"
        }
    ];
    products.push(req.body);
    res.json(products);
})
// Connect
const PORT = 3000;
app.listen(PORT, () => {
    console.log("Server đang chạy ở cổng "+PORT);
})



