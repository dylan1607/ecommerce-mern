const User = require("../models/User");
const crypto = require("crypto-js");
const jwt = require("jsonwebtoken");
require("dotenv").config();

//Register Process Function
const registerUser = async (req, res) => {
  try {
    const { fullname, password, email } = req.body;

    //Check field input by user
    if (!(fullname && password && email))
      res.status(400).json("All input are required");

    //Check exist user
    const user = await User.findOne({ email: email.toLowerCase() });
    if (user)
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

    //Catch Error
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

//Login process Function
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    //Check user Exist
    const user = await User.findOne({
      email: email.toLowerCase(),
    });
    if (!user)
      return res.status(501).json("Account not exist. Please register !");
    else {
      const bytes = crypto.AES.decrypt(user.password, process.env.SECRET_KEY);
      const originalPassword = bytes.toString(crypto.enc.Utf8);
      if (password !== originalPassword) res.status(501).json("Wrong Password");
      else {
        //After authorization granted, Create user token
        const accessToken = jwt.sign(
          {
            id: user._id,
            password: user.password,
            isAdmin: user.isAdmin,
          },
          process.env.SECRET_KEY,
          { expiresIn: "1h" }
        );
        const { isAdmin, password, ...info } = user._doc; //IMPORTANT: prevent response with screct field
        res.status(200).json({ ...info, accessToken });
      }
    }
  } catch (error) {
    console.error(error);
  }
};

module.exports = { registerUser, loginUser };
