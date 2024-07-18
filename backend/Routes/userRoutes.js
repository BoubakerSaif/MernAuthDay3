import express from "express";
import {
  authUser,
  logoutUser,
  registerUser,
  updateUser,
} from "../Controllers/userController.js";
import { protect } from "../Middlewares/authMiddleware.js";

const router = express.Router();

router.post("/", registerUser);
router.post("/auth", authUser);
router.post("/logout", logoutUser);
router.put("/", protect, updateUser);

export default router;
