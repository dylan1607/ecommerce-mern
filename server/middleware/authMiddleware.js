require("dotenv").config();
const jwt = require("jsonwebtoken");

const verify = (req, res, next) => {
  const token =
    req.headers.authorization ||
    req.body.authorization ||
    req.query.authorization;

  //Check token req exist ?
  if (!token) {
    return res.status(403).json("Token is required for authentication");
  }

  //Processing token
  jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
    if (err) return res.status(401).json("Invalid Token");
    // Token vaild
    req.user = decoded;
    next();
  });
};

module.exports = verify;
