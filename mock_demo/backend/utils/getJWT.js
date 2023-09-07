const jwt = require("jsonwebtoken");

function getJsonWebToken(payload) {
  const token = jwt.sign(payload, "privateKey", { expiresIn: "24h" });
  return token;
}

module.exports = { getJsonWebToken };
