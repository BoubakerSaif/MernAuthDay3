import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signin } from "../Redux/userSlice";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const { loggedInUser } = useSelector((state) => state.user);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const signinHandler = (e) => {
    e.preventDefault();
    dispatch(signin(user));
  };
  useEffect(() => {
    if (loggedInUser) {
      navigate("/");
    }
  }, [loggedInUser]);
  return (
    <div className="py-20 mt-14">
      <div className="flex h-full items-center justify-center">
        <div className="rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-900 flex-col flex h-full items-center justify-center sm:px-4">
          <div className="flex h-full flex-col justify-center gap-4 p-6">
            <div className="left-0 right-0 inline-block border-gray-200 px-2 py-2.5 sm:px-4">
              <form
                className="flex flex-col gap-4 pb-4"
                onSubmit={signinHandler}
              >
                <h1 className="mb-4 text-2xl font-bold  dark:text-white">
                  Login
                </h1>
                <div>
                  <div className="mb-2">
                    <label
                      className="text-sm font-medium text-gray-900 dark:text-gray-300"
                      for="email"
                    >
                      Email:
                    </label>
                  </div>
                  <div className="flex w-full rounded-lg pt-1">
                    <div className="relative w-full">
                      <input
                        onChange={handleChange}
                        className="block w-full border disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 border-gray-300 text-gray-900 focus:border-cyan-500 focus:ring-cyan-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-cyan-500 dark:focus:ring-cyan-500 p-2.5 text-sm rounded-lg"
                        type="email"
                        name="email"
                        placeholder="email@example.com"
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <div className="mb-2">
                    <label
                      className="text-sm font-medium text-gray-900 dark:text-gray-300"
                      data-testid="flowbite-label"
                      for="password"
                    >
                      Password
                    </label>
                  </div>
                  <div className="flex w-full rounded-lg pt-1">
                    <div className="relative w-full">
                      <input
                        onChange={handleChange}
                        className="block w-full border disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 border-gray-300 text-gray-900 focus:border-cyan-500 focus:ring-cyan-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-cyan-500 dark:focus:ring-cyan-500 p-2.5 text-sm rounded-lg"
                        type="password"
                        name="password"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <button
                    type="submit"
                    className="border transition-colors focus:ring-2 p-0.5 disabled:cursor-not-allowed border-transparent bg-sky-600 hover:bg-sky-700 active:bg-sky-800 text-white disabled:bg-gray-300 disabled:text-gray-700 rounded-lg "
                  >
                    <span className="flex items-center justify-center gap-1 font-medium py-1 px-2.5 text-base false">
                      Login
                    </span>
                  </button>
                </div>
              </form>
              <div className="min-w-[270px]">
                <div className="mt-4 text-center dark:text-gray-200">
                  New user?
                  <Link
                    className="text-blue-500 underline hover:text-blue-600"
                    to="/signup"
                  >
                    Create account here
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
