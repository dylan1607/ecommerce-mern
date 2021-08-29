const express = require("express");
const router = express.Router();
const {
  getAllUsers,
  updateUser,
  getUserById,
  getUserByQuery,
  deleteUser,
} = require("../controller/userController");
const verify = require("../middleware/authMiddleware");

//Get all user information - Only admin
router.get("/", verify, getAllUsers);

//Update user information by Id
router.put("/:id", verify, updateUser);

//Find user by id
router.get("/search/:id", getUserById);

//Find user by query
router.get("/search", getUserByQuery);

//Delete user
router.delete("/:id", verify, deleteUser);

module.exports = router;
