import React, { useEffect } from "react";
import TodoList from "../Components/TodoList";
import AddTodo from "../Components/AddTodo";
import { useSelector } from "react-redux";

const Home = () => {
  const { userInfo } = useSelector((state) => state.auth);
  return (
    <>
      <div className=" mt-24">
        {userInfo ? <AddTodo /> : ""}

        <TodoList />
      </div>
    </>
  );
};

export default Home;
