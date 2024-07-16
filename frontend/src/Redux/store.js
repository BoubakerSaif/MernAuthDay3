import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import authReducer from "./authSlice";
import todoReducer from "./todoSlice";

const store = configureStore({
  reducer: { user: userReducer, auth: authReducer, todo: todoReducer },
  devTools: true,
});

export default store;
