const express = require("express");
const router = express.Router();
const { getAllUsers, getUserById } = require("../controller/userController");
const verify = require("../middleware/authMiddleware");

router.get("/", verify, getAllUsers);
router.get("/:id", verify, getUserById);

module.exports = router;
