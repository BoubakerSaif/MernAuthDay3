import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Provider } from "react-redux";
import Home from "./Pages/Home.jsx";
import Register from "./Pages/Register.jsx";
import Login from "./Pages/Login.jsx";
import store from "./Redux/store.js";
import PrivateRoute from "./Components/PrivateRoute.jsx";
import MyTodos from "./Pages/MyTodos.jsx";
import PrivateRouteLoggedInUser from "./Components/PrivateRouteLoggedInUser.jsx";
import { Profile } from "./Pages/Profile.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<Home />} />
      <Route path="" element={<PrivateRoute />}>
        <Route path="/signup" element={<Register />} />
        <Route path="/signin" element={<Login />} />
      </Route>
      <Route path="" element={<PrivateRouteLoggedInUser />}>
        <Route path="/mytodos" element={<MyTodos />} />
        <Route path="/profile" element={<Profile />} />
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
