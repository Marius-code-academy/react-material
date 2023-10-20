import mongoose from "mongoose";
import Todo from "./Models/Todo.js";

export async function getTodos(req, res) {
  try {
    const todos = await Todo.find({}, { __v: 0 });

    res.status(200).json(todos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function addTodo(req, res) {
  const { title, body } = req.body;

  if (!title || !body) {
    return res.status(400).json({ message: "Title and body are required" });
  }

  try {
    const newTodo = await Todo.create({ title, body });

    res.status(201).json(newTodo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function deleteById(req, res) {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid id" });
  }

  try {
    const response = await Todo.findByIdAndDelete(id);

    if (response) {
      res.status(200).json({ message: "Todo deleted" });
    } else {
      res.status(404).json({ message: "Todo not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function updateTodoById(req, res) {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid id" });
  }

  try {
    const todo = await Todo.findById(id);
    todo.isFinished = !todo.isFinished;
    await todo.save();

    res.status(200).json(todo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
