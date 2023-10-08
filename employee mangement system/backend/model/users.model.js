const mongose = require("mongoose");

const userSchema = mongose.Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  role: {
    type: String,
    default: "admin",
  },
});

const userModel = mongose.model("users", userSchema);

module.exports = userModel;
