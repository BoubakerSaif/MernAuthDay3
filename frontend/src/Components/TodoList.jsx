import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTodos } from "../Redux/todoSlice";
import Todo from "./Todo";

const TodoList = () => {
  const dispatch = useDispatch();
  const { allTodos, createdTodo, deletedTodo, updatedTodo } = useSelector(
    (state) => state.todo
  );

  useEffect(() => {
    dispatch(getAllTodos());
  }, [createdTodo, deletedTodo, updatedTodo]);

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-gray-800 font-bold text-2xl uppercase mt-4">
        To-Do List
      </h1>
      {allTodos?.map((el) => (
        <Todo el={el} key={el._id} />
      ))}
    </div>
  );
};

export default TodoList;
