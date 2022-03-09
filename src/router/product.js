const { Router } = require("express");
const { checkAdmin } = require("../middleware/checkAuth");

const router = Router();

router.get("/products",checkAdmin ,(req,res) => {
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
router.post("/products",checkAdmin ,(req,res) => {
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
module.exports = router;