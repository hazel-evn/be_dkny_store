import { Router } from "express";
import { create, getAll, read } from "../controllers/category.js";
import { userById } from "../controllers/user.js";
import { isAdmin, isAuth, requiredSignin } from "../middleware/checkAuth.js";

const router = Router();

router.post("/categories/:userId", requiredSignin, isAuth, isAdmin, create);
router.get("/categories", getAll);
router.get("/categories/:name", read);


router.param("userId", userById);
export default router;