import { Router } from "express";
import { create, getAll, read, remove } from "../controllers/category.js";
import { isAdmin, isAuth } from "../middleware/checkAuth.js";

const router = Router();

router.post("/categories", isAuth, isAdmin, create);
router.get("/categories", getAll);
router.get("/categories/:name", read);
router.delete("/categories/:id", isAdmin, remove);

export default router;
