/*Este arquivo é responsável pelo gerenciamento das rotas da aplicação.
Aqui importamos nossa controller e as suas funções, para utilizarmos as funções
já escritas em nossas rotas, dessa forma deixamos o nosso código mais organizado.*/

const express = require("express");
const routes = express.Router();

const TaskController = require("./controllers/TaskController");
const PriorityController = require("./controllers/PriorityController");
const ContentController = require("./controllers/ContentController");

//ROUTES OPERACIONAIS

//Route Post Tasks. Responsável por criar uma task
routes.post("/tasks", TaskController.create);
//Route Get Tasks. Responsável pela captura das tasks
routes.get("/tasks", TaskController.read);
//Route Delete Tasks. Responsável por excluir uma task
routes.delete("/tasks/:id", TaskController.delete);

//ROUTES PRIORITY

//Route Get Priorities. Responsável por filtrar prioridades através de uma query
routes.get("/priorities", PriorityController.readPriority);
//Route Post Priorities. Responsável por alterar o estado da prioridade
routes.post("/priorities/:id", PriorityController.updatePriority);

//ROUTES CONTENT

//Route Post Content. Responsável por atualizar uma task.
routes.post("/content/:id", ContentController.update);

module.exports = routes;
