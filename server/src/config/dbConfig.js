const mongoose = require("mongoose");

const dbConfig =
  "mongodb+srv://admin:JfBEKvPrYJ6l4g3M@treinonodejs.0dqhqhn.mongodb.net/tasks?retryWrites=true&w=majority";

const connection = mongoose.connect(dbConfig, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;
