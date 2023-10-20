import express from "express";
import { addTodo, deleteById, getTodos, updateTodoById } from "./controllers.js";

const router = express.Router();

router.get("/todos", getTodos);

router.post("/todos", addTodo);

router.delete("/todos/:id", deleteById);

router.put("/todos/:id", updateTodoById);

export default router;
