import asyncHandler from "express-async-handler";
import User from "../Model/userModel.js";
import generateToken from "../Utils/generateToken.js";
// @desc Register new User
// route POST /api/users
// @access Public

const registerUser = asyncHandler(async (req, res) => {
  const { firstName, lastName, email, age, photo, password } = req.body;

  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  const user = await User.create({
    firstName,
    lastName,
    email,
    age,
    photo,
    password,
  });
  if (user) {
    generateToken(res, user._id);
    res.status(201).json({
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      age: user.age,
      photo: user.photo,
    });
  } else {
    throw new Error("Invalid user Data");
  }
});

// @desc Auth new User
// route POST /api/users/auth
// @access Public

const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user && (await user.matchPassword(password))) {
    generateToken(res, user._id);
    res.status(200).json({
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      age: user.age,
      photo: user.photo,
    });
  } else {
    res.status(401).json({ message: "Invalid Email or password" });
  }
});

// @desc Auth new User
// route POST /api/users/auth
// @access Public

const logoutUser = asyncHandler(async (req, res) => {
  res.cookie("JWT", "", { httpOnly: true, expires: new Date(0) });
  res.status(200).json({ messsage: "User Logged Out" });
});

export { registerUser, authUser, logoutUser };
