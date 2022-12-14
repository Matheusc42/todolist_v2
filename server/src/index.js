//Imports
const express = require("express");
const routes = require("./routes");
const cors = require("cors");

const app = express();

//Server Acces Port
const port = 3001;
require("./config/dbConfig");

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(port, () => {
  console.log("It Works!");
});
