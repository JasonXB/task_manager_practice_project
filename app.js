const express = require("express");
const app = express();
const tasks = require("./routes/tasks");

// Call middleware on all route handlers in this file
app.use(express.json()); // allows json data in req.body

// Route handlers for /api/v1/tasks are inside tasks.js
app.use("/api/v1/tasks", tasks); // called like a middleware function

// Set up port to broadcast to during development
const port = 3000;
app.listen(port, console.log(`server is listening on port ${port}`));
