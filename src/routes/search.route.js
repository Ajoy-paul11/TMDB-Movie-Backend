import { Router } from "express";
import { searchMovie } from "../controllers/search.controller.js";


const router = Router();

router.get("/:query", searchMovie);

export default router;