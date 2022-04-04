import { Router } from "express";
import { create, getAll, read } from "../controllers/category";
import { userById } from "../controllers/user";
import { isAdmin, isAuth, requiredSignin } from "../middleware/checkAuth";

const router = Router();

router.post("/categories/:userId", requiredSignin, isAuth, isAdmin, create);
router.get("/categories", getAll);
router.get("/categories/:slug", read);


router.param("userId", userById);
export default router;