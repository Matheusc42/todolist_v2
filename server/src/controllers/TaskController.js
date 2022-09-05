const Tasks = require("../models/tasksData");

module.exports = {
  // Função que faz a leitura do Banco de Dados
  async read(req, res) {
    const taskList = await Tasks.find();
    return res.json(taskList);
  },

  //Função que faz a inserção do nosso registro no Banco de Dados
  async create(req, res) {
    const { title, description, priority, flagged } = req.body;

    const taskCreated = await Tasks.create({
      title,
      description,
      priority,
      flagged,
    });

    return res.json(taskCreated);
  },
  //Função que faz a deleção do registro no Banco de Dados
  async delete(req, res) {
    const { id } = req.params;

    const taskDeleted = await Tasks.findOneAndDelete({ _id: id });

    if (taskDeleted) {
      return res.json(taskDeleted);
    }
    return res.status(401).json({ error: "not found" });
  },
};
