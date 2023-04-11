const express = require("express");
const app = express();
const tasks = require("./routes/tasks");

// Call middleware on all route handlers in this file
app.use(express.json()); // allows json data in req.body

// Route handlers for /api/v1/tasks are inside tasks.js
app.use('/api/v1/tasks', tasks); // called like a middleware function


// Get basic details for all tasks
app.get("/api/v1/tasks", (req, res) => {
  res.status(200).send("Task Manager App Operational");
});
// Get all possible details for a single task
app.get("/api/v1/tasks/:id", (req, res) => {
  res.status(200).send("Task Manager App Operational");
});

// Create a new task
app.post("/api/v1/tasks", (req, res) => {
  res.status(200).send("Task Manager App Operational");
  res.status(200).send("");
});

// Update a task's name or completion status
app.put("/api/v1/tasks/:id", (req, res) => {
  res.status(200).send("Task Manager App Operational");
});

// Delete a task
app.delete("/api/v1/tasks/:id", (req, res) => {
  res.status(200).send("Task Manager App Operational");
});

// Set up port to broadcast to during development
const port = 3000;
app.listen(port, console.log(`server is listening on port ${port}`));
