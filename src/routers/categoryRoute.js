import express from "express";
import { listCategory, createCategory, renderpageCreateCategory } from "../controllers/categoryController.js";
const router = express.Router();

 router.get("/", listCategory)
 router.get("/create", renderpageCreateCategory)
 router.post("/create", createCategory)
 
 export default router;
