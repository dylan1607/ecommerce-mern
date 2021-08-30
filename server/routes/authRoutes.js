const router = require("express").Router();
const { registerUser, loginUser } = require("../controller/authControllers");

router.post("/register", registerUser);
router.put("/login", loginUser);

module.exports = router;
