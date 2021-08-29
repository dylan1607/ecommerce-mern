require("dotenv").config();
const User = require("../models/User");
const crypt = require("crypto-js");

//get all Users
const getAllUsers = async (req, res) => {
  const query = req.query.new;
  if (req.user.isAdmin) {
    try {
      const users = query
        ? await User.find().sort({ _id: -1 })
        : await User.find();
      res.status(200).json(users);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server Error" });
    }
  }
};

//Update user
const updateUser = async (req, res) => {
  if (req.user.id === req.params.id || req.user.admin) {
    if (req.body.password) {
      req.body.password = crypt.AES.encrypt(
        req.body.password,
        process.env.SECRET_KEY
      ).toString();
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

//Delete user by id
const deleteUser = async (req, res) => {};

module.exports = {
  getAllUsers,
  updateUser,
  getUserById,
  deleteUser,
};
