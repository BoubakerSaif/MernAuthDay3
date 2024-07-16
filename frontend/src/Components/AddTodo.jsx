import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createTodo } from "../Redux/todoSlice";

const AddTodo = () => {
  const dispatch = useDispatch();
  const [task, setTask] = useState("");
  const addTodoHandler = (e) => {
    e.preventDefault();
    dispatch(createTodo({ task: task }));
    setTask("");
  };

  return (
    <div>
      <form
        className="w-full max-w-sm mx-auto px-4 py-2"
        onSubmit={addTodoHandler}
      >
        <div className="flex items-center border-b-2 border-teal-500 py-2">
          <input
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            value={task}
            placeholder="Add a task"
            onChange={(e) => {
              setTask(e.target.value);
            }}
          />
          <button
            className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
            type="submit"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTodo;
