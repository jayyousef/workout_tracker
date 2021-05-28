const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const apiRoutes=require('./controllers/api/workoutRoutes')
const homeRoutes=require('./controllers/index')
// const Exercise = require("/models/index")
// const Workout = require("/models/index")
require('dotenv').config();

const PORT = process.env.PORT || 3000;

//connect to DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workoutDB", {
  useNewUrlParser: true, useUnifiedTopology: true
});
mongoose.connection.once('open', () => console.log('MONGO DB is Connected!!')).on('error', (error) => {
  console.log("Oh no! There is an error: " + error)
})

//require models
const db = require("./models");

const app = express();

app.use(logger("dev"));


//middleware
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());
app.use(express.static("public"));
app.use('/api', apiRoutes);
app.use('/', homeRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});