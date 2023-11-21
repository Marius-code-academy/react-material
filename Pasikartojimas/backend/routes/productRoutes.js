import express from "express";
import {
  addNewProduct,
  deleteProduct,
  getAllProducts,
  updateProduct,
} from "../controllers/controllers.js";

const router = express.Router();

router.get("/products", getAllProducts);

router.post("/products", addNewProduct);

router.delete("/products/:id", deleteProduct);

router.put("/products/:id", updateProduct);

export default router;
