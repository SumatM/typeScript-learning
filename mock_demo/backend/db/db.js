const mongose = require("mongoose");
require("dotenv").config();

const connection = mongose.connect(process.env.mongoURL);

module.exports = { connection };
