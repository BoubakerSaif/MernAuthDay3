import asyncHandler from "express-async-handler";
import Todo from "../Model/todoModel.js";

const createTodo = asyncHandler(async (req, res) => {
  const { task } = req.body;
  try {
    const todo = await Todo.create({
      task: task,
      createdBy: req.user._id,
    });

    res.status(201).json(todo);
  } catch (error) {
    res.status(401);
    throw new Error(error);
  }
});

const getAllTodos = asyncHandler(async (req, res) => {
  try {
    const todos = await Todo.find().populate("createdBy");
    res.status(200).json(todos);
  } catch (error) {
    res.status(401);
    throw new Error(error);
  }
});

const updateTodo = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { newTask } = req.body;
  try {
    const todo = await Todo.findById(id);
    if (todo) {
      todo.task = newTask || todo.task;
      const updatedTodo = await todo.save();
      res.status(201).json(updatedTodo);
    } else {
      throw new Error("Todo not found");
    }
  } catch (error) {
    res.status(401);
    throw new Error(error);
  }
});

const deleteTodo = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const todo = await Todo.findByIdAndDelete(id);
    res.status(201).json(todo);
  } catch (error) {
    res.status(401);
    throw new Error(error);
  }
});

export { createTodo, updateTodo, deleteTodo, getAllTodos };
