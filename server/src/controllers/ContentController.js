const Tasks = require("../models/tasksData");

module.exports = {
  async update(req, res) {
    const { id } = req.params;
    const { description } = req.body;

    const tasks = await Tasks.findOne({ _id: id });

    if (description) {
      tasks.description = description;

      await tasks.save();
    }

    return res.json(tasks);
  },
};
