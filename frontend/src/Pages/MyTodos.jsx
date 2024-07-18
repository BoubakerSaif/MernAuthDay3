import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTodos } from "../Redux/todoSlice";
import Todo from "../Components/Todo";

const MyTodos = () => {
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.auth);
  const { allTodos, updatedTodo, deletedTodo } = useSelector(
    (state) => state.todo
  );
  useEffect(() => {
    dispatch(getAllTodos());
  }, [deletedTodo, updatedTodo]);
  return (
    <div className=" mt-24">
      {allTodos
        ?.filter((el) => el.createdBy._id == userInfo.id)
        .map((el) => (
          <Todo el={el} key={el._id} />
        ))}
    </div>
  );
};

export default MyTodos;
