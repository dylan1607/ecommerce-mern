require("dotenv").config();
const User = require("../models/User");
const crypto = require("crypto-js");

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
  if (req.user.id === req.params.id || req.user.isAdmin) {
    //In request has password field
    const encrypt = (val) => {
      return crypto.AES.encrypt(val, process.env.SECRET_KEY).toString();
    };
    if (req.body.password) {
      req.body.password = encrypt(req.body.password);
    }

    //Find id and update
    try {
      console.log(req.body.password);
      const updateUser = await User.findByIdAndUpdate(
        req.user.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      const { isAdmin, password, ...updated } = updateUser._doc;
      res.status(200).json(updated);
    } catch (error) {
      res.status(500).json(error);
    }
  } else res.status(403).json("You are not allowed");
};

//get individual user by user id
const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "User not exist" });
  }
};

//Get user by query
const getUserByQuery = async (req, res) => {
  const query = req.query.name;
  try {
    const user = await User.find({
      //Match string in query for case insensitivity. $regex, $options
      fullname: { $regex: query, $options: "i" },
    });
    if (user.length > 0) {
      //Remove secrect field
      const data = user.map((item) => {
        const { password, isAdmin, ...obj } = item._doc;
        return obj;
      });
      res.status(200).json(data);
    } else res.status(200).json("Not found");
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error Server" });
  }
};

//Delete user by id
const deleteUser = async (req, res) => {
  if (req.user.id === req.params.id || req.user.isAdmin) {
    try {
      await User.findByIdAndDelete(req.user.id);
      res.status(200).json("User has been deleted...");
    } catch (error) {
      res.status(500).json(error);
    }
  } else res.status(403).json("Your are not allowed");
};

module.exports = {
  getAllUsers,
  updateUser,
  getUserById,
  getUserByQuery,
  deleteUser,
};
