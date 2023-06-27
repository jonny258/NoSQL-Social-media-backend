const { connect, connection } = require("mongoose");

connect("mongodb://127.0.0.1:27017/socialMedia"); //this connects the server to the 27017 connection the socialMedia database
//If there is no socialMedia database one automatically gets created, you can view the data/databases on mongoDB compass

module.exports = connection;
