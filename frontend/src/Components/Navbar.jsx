import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { clearCredentials } from "../Redux/authSlice";
import { logout } from "../Redux/userSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userInfo } = useSelector((state) => state.auth);
  const logoutHandler = (e) => {
    e.preventDefault();
    dispatch(logout(navigate));
    dispatch(clearCredentials());
  };

  return (
    <header className="fixed inset-x-0 top-0 z-30 mx-auto w-full max-w-screen-md border border-gray-100 bg-white/80 py-3 shadow backdrop-blur-lg md:top-6 md:rounded-3xl lg:max-w-screen-lg">
      <div className="px-4">
        <div className="flex items-center justify-between">
          <div className="flex shrink-0">
            <Link to="/" aria-current="page" className="flex items-center">
              <img
                className="h-7 w-auto"
                src="https://w7.pngwing.com/pngs/972/511/png-transparent-todo-sketch-note-list-tasks-thumbnail.png"
                alt=""
              />
              <p className="sr-only">Mern AUTH</p>
            </Link>
          </div>
          <div className=" md:flex md:items-center md:justify-center md:gap-5">
            <Link
              aria-current="page"
              className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
              to="/"
            >
              Home
            </Link>
            {userInfo && (
              <Link
                className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
                to="/mytodos"
              >
                My Todos
              </Link>
            )}
          </div>
          {userInfo ? (
            <div className="flex items-center gap-2">
              <h3> {`${userInfo.firstName.toUpperCase()}`} </h3>
              <Link to="/profile">
                <img src={userInfo.photo} className=" h-11" />
              </Link>

              <button
                onClick={logoutHandler}
                className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="flex items-center justify-end gap-3">
              <Link
                className=" items-center justify-center rounded-xl bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 transition-all duration-150 hover:bg-gray-50 sm:inline-flex"
                to="/signup"
              >
                SignUp
              </Link>
              <Link
                className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                to="/signin"
              >
                SignIn
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
