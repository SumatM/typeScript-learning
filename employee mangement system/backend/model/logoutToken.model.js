const { default: mongoose } = require("mongoose");
const moongoose = require("mongoose");

const tokenSchema = mongoose.Schema(
  {
    token: String,
  },
  {
    versionKey: false,
  }
);

const tokenModel = mongoose.model("token", tokenSchema);

module.exports = { tokenModel };
