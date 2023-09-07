const jwt = require("jsonwebtoken");

function authorization(req, res, next) {
  try {
    const token = req.headers.authorization.split(" ")[1];
    if (!token) {
      return res.status(401).json({ message: "No token provided" });
    }

    jwt.verify(token, "privateKey", (err, decoded) => {
      if (err) {
        return res
          .status(403)
          .json({ message: "Failed to authenticate token" });
      }

      next();
    });
  } catch (err) {
    res.status(400).json({ err: err });
  }
}

module.exports = { authorization };
