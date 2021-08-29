const express = require("express");
const router = express.Router();
const {
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
} = require("../controller/userController");
const verify = require("../middleware/authMiddleware");

//Get all user information - Only admin
router.get("/", verify, getAllUsers);

//Update user information by Id
router.put("/:id", verify, updateUser);

//Find user
router.get("/find/:id", getUserById);

//Delete user
router.delete("/:id", verify, deleteUser);

module.exports = router;
