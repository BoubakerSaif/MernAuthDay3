import React, { useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, updateTodo } from "../Redux/todoSlice";

const Todo = ({ el }) => {
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.auth);
  const [edit, setEdit] = useState(false);
  const editHandler = () => {
    if (edit) {
      setEdit(false);
    } else {
      setEdit(true);
    }
  };
  const [task, setTask] = useState(el.task);
  const updateHandler = (e) => {
    e.preventDefault();
    dispatch(updateTodo({ id: el._id, newTask: { newTask: task } }));
    editHandler();
  };
  return (
    <div className="max-w-2xl mx-auto mt-8">
      <div className="flex gap-3 bg-white border border-gray-300 rounded-xl overflow-hidden items-center justify-start">
        <div className="relative w-32 h-32 flex-shrink-0">
          <img
            className="absolute left-0 top-0 w-full h-full object-cover object-center transition duration-50"
            loading="lazy"
            src={el.createdBy.photo}
          />
        </div>

        <div className="flex flex-col gap-2 py-2 w-72 ">
          <p className="text-xl font-bold">{el.createdBy.firstName} </p>
          {edit ? (
            <input
              onChange={(e) => {
                setTask(e.target.value);
              }}
              type="text"
              defaultValue={el.task}
              className=" border-2 hover:border-red-400"
            />
          ) : (
            <p className="text-gray-500">{el.task}</p>
          )}

          {userInfo?.id == el?.createdBy._id ? (
            <span className="flex items-center gap-2 justify-start text-gray-500">
              {!edit ? (
                <MdDeleteForever
                  className=" text-red-600 text-2xl cursor-pointer "
                  onClick={() => {
                    dispatch(deleteTodo(el._id));
                  }}
                />
              ) : (
                ""
              )}

              {edit ? (
                <>
                  <button
                    onClick={editHandler}
                    className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white  rounded"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={updateHandler}
                    type="submit"
                    className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white  rounded"
                  >
                    Update
                  </button>
                </>
              ) : (
                <FaEdit
                  className=" text-yellow-500 text-2xl cursor-pointer "
                  onClick={editHandler}
                />
              )}
            </span>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default Todo;
