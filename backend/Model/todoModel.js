import mongoose from "mongoose";

const todoSchema = mongoose.Schema({
  task: { type: String, required: true },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

const Todo = mongoose.model("Todo", todoSchema);

export default Todo;
