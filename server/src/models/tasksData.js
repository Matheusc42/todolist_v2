const mongoose = require("mongoose");

const TaskDataSchema = new mongoose.Schema({
  title: String,
  description: String,
  priority: Boolean,
  flagged: Boolean,
});

module.exports = mongoose.model("Tasks", TaskDataSchema);
