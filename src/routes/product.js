import { Router } from "express";
import {
  get,
  getAll,
  remove,
  create,
  putProduct,
} from "../controllers/product.js";
import { isAdmin, isAuth } from "../middleware/checkAuth.js";
const router = Router();

router.get("/products", getAll);
router.post("/products", isAuth, isAdmin, create);
router.get("/products/:id", get);
router.delete("/products/:id", isAuth, isAdmin, remove);
router.put("/products/:id", isAuth, isAdmin, putProduct);

export default router;
