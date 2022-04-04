import { Router } from "express";
import { get, getAll, remove, create, putProduct } from "../controllers/product";
import { userById } from "../controllers/user";
import { checkAuth, isAdmin, isAuth, requiredSignin } from "../middleware/checkAuth";

const router = Router();

router.get("/products", getAll)
router.post("/products/:userId", requiredSignin, isAuth, isAdmin, create)
router.get("/products/:id", get)
router.delete("/products/:id/:userId", requiredSignin, isAuth, isAdmin, remove)
router.put("/products/:id/:userId", requiredSignin, isAuth, isAdmin, putProduct)

router.param("userId", userById);
export default router;