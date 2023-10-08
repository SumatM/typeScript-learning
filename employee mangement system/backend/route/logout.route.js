const express = require("express");
const { tokenModel } = require("../model/logoutToken.model");

const logOutRoute = express.Router();

logOutRoute.post("/", (req, res) => {
  try {
    const { token } = req.body;
    if (token) {
      let blackListedToken = tokenModel(req.body);
      blackListedToken.save();
      res.status(200).json({ message: "Logout Success" });
      return;
    } else {
      res.status(200).json({ message: "Please Login First" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = { logOutRoute };
