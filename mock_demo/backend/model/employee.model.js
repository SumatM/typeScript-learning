const mongose = require("mongoose");

const employeeSchema = mongose.Schema(
  {
    fname: {
      type: String,
      require: true,
    },
    lname: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
    },
    department: {
      type: String,
      require: true,
    },
    salary: {
      type: Number,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

const employeeModel = mongose.model("employee", employeeSchema);

module.exports = employeeModel;
