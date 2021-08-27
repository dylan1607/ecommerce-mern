require("dotenv").config();
const User = require("../models/User");

//get all Users
const getAllUsers = async (req, res) => {
  if (req.user.isAdmin) {
    try {
      const users = await User.find({});
      res.status(200).json(users);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server Error" });
    }
  }
};

//get individual user by user id
const getUserById = async (req, res) => {
  try {
    const user = await Product.findById(req.params.id);
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

module.exports = {
  getAllUsers,
  getUserById,
};
