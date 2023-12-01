const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
require("dotenv").config();
const authenticated = (req, res, next) => {
  const token = req.cookies.token || req.headers.authorization
  console.log(token,'token');
  try {
    if (token) {
      let decoded = jwt.verify(token, process.env.JWT_SECRET);
      console.log(decoded.userID,'userid.')
      if (decoded) {
        req.body.userID = decoded.userID;
        next();
      } else {
        return res.send({ msg: "Invalid token" });
      }
    }
  } catch (error) {
    res.send({ msg: "Please Login first" });
    console.log(error);
  }
};
module.exports = {
    authenticated
}