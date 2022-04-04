import { Router } from "express";
import { search } from "../controllers/search";

const router = Router();

router.get("/search/:name", search);

export default router;