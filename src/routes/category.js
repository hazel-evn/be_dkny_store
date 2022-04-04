import { Router } from "express";
import { create, getAll, read } from "../controllers/category";
import { userById } from "../controllers/user";

const router = Router();

router.post("/categories/:userId", create);
router.get("/categories", getAll);
router.get("/categories/:slug", read);


router.param("userId", userById);
export default router;