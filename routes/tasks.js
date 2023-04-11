// This file handles routes that begin with /api/v1/tasks
const express = require("express");
const router = express.Router();
const { getAllTasks } = require("../controllers/tasks");
router.route("/").get(getAllTasks);
module.exports = router;
