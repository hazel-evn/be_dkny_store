import { Router } from "express";
import { create, getAll, read } from "../controllers/category";

const router = Router();

router.post("/category", create);
router.get("/category", getAll);
router.get("/category/:slug", read);

export default router;