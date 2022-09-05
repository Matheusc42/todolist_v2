const mongoose = require("mongoose");

const dbConfig = "Here you can put your Connection String to your MongoDB database ^^"
  

const connection = mongoose.connect(dbConfig, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;
