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
    res.status(500).json(error);
  }
};

const loginUser = async (req, res) => {
  try {
    const user = await User.findOne({
      username: req.body.username,
    });
    if (!user) res.status(501).json("Wrong Username or Password");
    else {
    //   res.status(201).json(user);
    const bytes = crypto.AES.decrypt(user.password, process.env.SECRET_KEY);
    const originalPassword = bytes.toString(crypto.enc.Utf8)
    if(req.body.password !== originalPassword) res.status(501).json("Wrong Password");
    else {
        //After authorization granted, doing something
        
    }
    }
  } catch (error) {}
};

module.exports = { registerUser, loginUser };
