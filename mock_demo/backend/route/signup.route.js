const express = require("express");
const userModel = require("../model/users.model");
const bcrypt = require("bcrypt");
const { getJsonWebToken } = require("../utils/getJWT");

const SignupRoute = express.Router();

SignupRoute.post("/", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });
    if (!user) {
      bcrypt.hash(password, 3, async (err, hash) => {
        if (hash) {
          const newUser = await userModel({ ...req.body, password: hash });
          newUser.save();
          res.status(200).json({ message: "User added", newUser });
        } else {
          res.status(200).json({ error: err.message });
        }
      });
    } else {
      res.status(200).json({ message: "User Already Exist" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
});

module.exports = { SignupRoute };
