const { tokenModel } = require("../model/logoutToken.model");

async function authoriziToken(req, res, next) {
  try {
    const tokens = await tokenModel.find(req.body);
    const token = req.headers.authorization?.split(" ")[1];
    if (token) {
      tokens.forEach((item) => {
        if (item.token == token) {
          res.status(401).json({ message: "Please Login First" });
          return;
        }
      });
      next();
    } else {
      res.status(401).json({ message: "Please Login First" });
    }
  } catch (err) {
    res.status(400).json({ message: err });
    return;
  }
}

module.exports = { authoriziToken };
