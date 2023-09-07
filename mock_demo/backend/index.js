const express = require("express");
const { connection } = require("./db/db");
const { LoginRoute } = require("./route/login.route");
const { SignupRoute } = require("./route/signup.route");
const { employeeRoute } = require("./route/employee.route");
const cors = require("cors");
const { logOutRoute } = require("./route/logout.route");

const app = express();

app.use(cors());

app.use(express.json());

app.use("/login", LoginRoute);

app.use("/signup", SignupRoute);

app.use("/employee", employeeRoute);

app.use("/logout", logOutRoute);

app.get("/", (req, res) => {
  try {
    res.status(200).json({ message: "Welcome to Full Stack App API" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.listen(8080, async () => {
  try {
    await connection;
    console.log("server is running");
  } catch (err) {
    console.log(err.message);
  }
});
