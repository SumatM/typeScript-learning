const express = require("express");
const userModel = require("../model/users.model");
const bcrypt = require("bcrypt");
const { getJsonWebToken } = require("../utils/getJWT");

const LoginRoute = express.Router();

LoginRoute.post("/", async (req, res) => {
  try {
    const { password, email, role } = req.body;
    const user = await userModel.findOne({ email });
    // console.log(user)
    if (user) {
      bcrypt.compare(password, user?.password, (err, result) => {
        //  console.log(err,result)
        if (result) {
          const token = getJsonWebToken({ email, role });
          // console.log(token)
          res.status(200).json({ message: "Login Sucessful", token });
        } else {
          console.log(err);
          res.status(400).json({ error: err });
        }
      });
    } else {
      res.status(200).json({ message: "User not found. Please SignUp first" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
});

module.exports = { LoginRoute };
