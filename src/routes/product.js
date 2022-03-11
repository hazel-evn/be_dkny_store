import { Router } from "express";
import { get, getAll, remove, create, putProduct } from "../controllers/product"
import { checkAuth } from "../middleware/checkAuth";

const router = Router();

router.get("/products",checkAuth , getAll)
router.post("/products",checkAuth, create )
router.get("/products/:id", get)
router.delete("/products/:id", remove)
router.put("/products/:id", putProduct )
export default router;