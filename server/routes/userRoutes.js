const express = require("express");
const router = express.Router();
const { getAllUsers, getUserById } = require("../controller/userController");

router.get("/", getAllUsers);
router.get("/:id", getUserById);

module.exports = router;
