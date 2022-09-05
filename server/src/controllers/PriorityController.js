const Tasks = require("../models/tasksData");

module.exports = {
  async readPriority(req, res) {
    const priority = req.query;
    const priorityTasks = await Tasks.find(priority);

    return res.json(priorityTasks);
  },

  async updatePriority(req, res) {
    const { id } = req.params;

    const tasks = await Tasks.findOne({ _id: id });

    if (tasks.priority) {
      tasks.priority = false;
    } else {
      tasks.priority = true;
    }

    await tasks.save();

    return res.json(tasks);
  },
};
