const express = require("express");
const app = express();

app.use(express.json());

// Dummy data - Employees
let employees = [
  { id: 1, name: "John" },
  { id: 2, name: "Emma" },
];

// GET: Fetch all employees
app.get("/employees", (req, res) => {
  res.json(employees);
});

// POST: Add a new employee
app.post("/employees", (req, res) => {
  const employee = { id: employees.length + 1, name: req.body.name };
  employees.push(employee);
  res.status(201).json(employee);
});

// PUT: Update an employee
app.put("/employees/:id", (req, res) => {
  const employee = employees.find((e) => e.id == req.params.id);
  if (!employee) return res.status(404).send("Employee not found");
  employee.name = req.body.name;
  res.json(employee);
});

// DELETE: Remove an employee
app.delete("/employees/:id", (req, res) => {
  employees = employees.filter((e) => e.id != req.params.id);
  res.status(204).send();
});

// Start server
app.listen(3000, () => console.log("Server running on port 3000"));
