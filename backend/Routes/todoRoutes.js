import express from "express";
import {
  createTodo,
  deleteTodo,
  getAllTodos,
  updateTodo,
} from "../Controllers/todoController.js";
import { protect } from "../Middlewares/authMiddleware.js";

const router = express.Router();
router.post("/", protect, createTodo);
router.get("/", getAllTodos);
router.put("/:id", protect, updateTodo);
router.delete("/:id", protect, deleteTodo);

export default router;
