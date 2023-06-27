const express = require("express");
const app = express(); //import express and then create an instance of the funtion under "app"
const db = require("./config/connection"); //imports the mongoDB connection
const routes = require("./routes"); //imports the routes folder

const PORT = 3001; //Sets the port to listen to

//middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

//A wrapper to the app connection so that the app runs and can make changes to the database
db.once("open", () => {
  console.log("mongoDB live"); //confirmation that the mongoDB is up
  app.listen(PORT, () => {
    console.log(`app live running on port ${PORT}!`); //confirmation that express is up
  });
});
