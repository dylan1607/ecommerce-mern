require("dotenv").config();
const jwt = require("jsonwebtoken");

const verify = (req, res, next) => {
  const reqToken =
    req.headers.authorization ||
    req.body.authorization ||
    req.query.authorization;

  //Check token req exist ?
  if (!reqToken) {
    return res.status(403).json("Token is required for authentication");
  }

  //Processing token
  const token = reqToken.split(" ")[1];
  jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
    if (err) return res.status(401).json("Invalid Token");

    // Token vaild
    req.user = decoded;
    next();
  });
};
