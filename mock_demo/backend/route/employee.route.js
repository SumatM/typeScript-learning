const express = require("express");
const employeeModel = require("../model/employee.model");
const { authorization } = require("../middleware/authorization");
const { authoriziToken } = require("../middleware/autorizeToken");

const employeeRoute = express.Router();

employeeRoute.use(authoriziToken);
employeeRoute.use(authorization);

employeeRoute.get("/", async (req, res) => {
  try {
    let { page, limit, q, order, sortBy } = req.query;

    page = parseInt(page) || 1;
    limit = parseInt(limit) || 5;
    sortBy = sortBy;
    q = q || "";

    let filterQuery = {};

    if (q != null) {
      filterQuery = {
        $or: [
          { fname: { $regex: new RegExp(q, "i") } },
          { lname: { $regex: new RegExp(q, "i") } },
        ],
      };
    }

    if (sortBy) {
      filterQuery = {
        department: sortBy,
      };
    }

    let sortQuery = {};

    if (order == "asc" || order == "desc") {
      sortQuery.salary = order === "asc" ? 1 : -1;
    }

    const Skip = (page - 1) * limit;

    if (order) {
      const employees = await employeeModel
        .find(filterQuery)
        .sort(sortQuery)
        .skip(Skip)
        .limit(parseInt(limit));
      const employeeCount = await employeeModel
        .count(filterQuery)
        .sort(sortQuery);
      res.status(200).json({ employees, employeeCount });
      return;
    } else {
      const employees = await employeeModel
        .find(filterQuery)
        .skip(Skip)
        .limit(parseInt(limit));
      const employeeCount = await employeeModel
        .count(filterQuery)
        .sort(sortQuery);
      res.status(200).json({ employees, employeeCount });
    }
  } catch (err) {
    console.log(err);
    res.status(400).json({ error: err.message });
  }
});

employeeRoute.post("/", async (req, res) => {
  try {
    const employee = employeeModel(req.body);
    employee.save();
    res.status(200).json({ message: "Employee Added", employee });
  } catch (err) {
    console.log(err);
    res.status(400).json({ error: err.message });
  }
});

employeeRoute.patch("/:id", async (req, res) => {
  try {
    const id = req.params.id;

    const employee = await employeeModel.findByIdAndUpdate(
      { _id: id },
      req.body
    );
    res.status(201).json({ message: "Employee updated", employee });
  } catch (err) {
    console.log(err);
    res.status(400).json({ error: err.message });
  }
});

employeeRoute.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    // console.log(req.params);
    const employee = await employeeModel.findOne({ _id: id });
    if (employee) {
      await employeeModel.findByIdAndRemove({ _id: id });
      res.status(200).json({ message: "Employee Removed" });
    } else {
      res.status(204).json({ message: "Employee not found" });
    }
  } catch (err) {
    console.log(err);
    res.status(400).json({ error: err.message });
  }
});

module.exports = { employeeRoute };
