import express from "express";
import { 
  listCategory,
  createCategory,
  renderpageCreateCategory,
  renderpageUpdateCategory,
  UpdateCategory,
  renderpageDeleteCategory,
  deleteCategory
} from "../controllers/categoryController.js";
const router = express.Router();

 router.get("/", listCategory)

 router.get("/create", renderpageCreateCategory) //render ra from case
 router.post("/create", createCategory)

 router.get("/update/:id", renderpageUpdateCategory) //render ra from update
 router.post("/update/:id", UpdateCategory)

 router.get("/delete/:id", renderpageDeleteCategory) //render ra from update
 router.post("/delete", deleteCategory)
 
 export default router;
