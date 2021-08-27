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
};
