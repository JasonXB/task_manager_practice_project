const express = require("express");
const app = express();

// READ DATA
app.get("/hello", (req, res) => {
  res.status(200).send("Task Manager App Operational");
});
app.get("/getAllTasks", (req, res) => {
  res.status(200).send("Task Manager App Operational");
});

// CREATE NEW DATA
app.post("/addNewTask", (req, res) => {
  res.status(200).send("Task Manager App Operational");
});

// UPDATE DATA
app.put("/renameTask", (req, res) => {
  res.status(200).send("Task Manager App Operational");
});
app.put("/completeTask", (req, res) => {
  res.status(200).send("Task Manager App Operational");
});
app.put("/uncompleteTask", (req, res) => {
  res.status(200).send("Task Manager App Operational");
});

// DELETE DATA
app.delete("/deleteTask", (req, res) => {
  res.status(200).send("Task Manager App Operational");
});

const port = 3000; // set up port to broadcast to during development
app.listen(port, console.log(`server is listening on port ${port}`));
