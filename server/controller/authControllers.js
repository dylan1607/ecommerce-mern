const User = require("../models/User");
const crypto = require("crypto-js");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const registerUser = async (req, res) => {
  const encryptPassword = crypto.AES.encrypt(
    req.body.password,
    process.env.SECRET_KEY
  ).toString();

  const newUser = new User({
    username: req.body.username,
    password: encryptPassword,
    email: req.body.email,
  });
  try {
      const user = await newUser.save();
      res.status(201).json(user);
  } catch (error) {
      console.log(error);
      res.status(500).json(error)
  }
};

const loginUser = async (req, res) => {
    try {
        const user = await User.findOne({
            username: req.body.username;
        })
    } catch (error) {
        
    }
}
