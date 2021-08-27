const User = require("../models/User");
const crypto = require("crypto-js");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const registerUser = async (req, res) => {
  try {
    const { fullname, password, email } = req.body;

    //Check field input by user
    if (!(fullname && password && email))
      res.status(400).json("All input are required");

    //Check exist user
    const oldUSer = await User.findOne({ email: email.toLowerCase() });
    if (oldUSer)
      return res.status(409).send("User already exist. Please login instead !");

    //Encrypt User password
    const encryptPassword = crypto.AES.encrypt(
      password,
      process.env.SECRET_KEY
    ).toString();

    //Create user in database
    const newUser = await User.create({
      fullname: fullname,
      password: encryptPassword,
      email: email.toLowerCase(),
    });
    res.status(201).json(newUser);
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
      const originalPassword = bytes.toString(crypto.enc.Utf8);
      if (req.body.password !== originalPassword)
        res.status(501).json("Wrong Password");
      else {
        //After authorization granted, doing something
      }
    }
  } catch (error) {}
};

module.exports = { registerUser, loginUser };
