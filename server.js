const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const router = require('express').Router();
// const Exercise = require("/models/index")
// const Workout = require("/models/index")

const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.MONGODB_URL || "mongodb://localhost/workoutDB", {
  useNewUrlParser: true
});

mongoose.connection.once('open', () => console.log('MONGO DB is Connected!!')).on('error', (error) => {
  console.log("Oh no! There is an error: " + error)
})

const db = require("./models");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());

app.use(express.static("public"));
router.use('/api', apiRoutes);

app.get("/", (req, res) => {
  res.send("Updated!");
});

app.get("/stats", (req, res) => {
  res.send("Hello World! THis is stats!")
});

app.get("/exercise", (req, res) => {
  db.Exercise.find({})
    .then(dbExercise => {
      res.json(dbExercise);
    })
    .catch(err => {
      res.json(err);
    })
});

app.get("/workout", (req, res) => {
  db.Workout.find({})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    })
});

// db.User.create({ name: "Ernest Hemingway" })
//   .then(dbUser => {
//     console.log(dbUser);
//   })
//   .catch(({ message }) => {
//     console.log(message);
//   });

// app.get("/notes", (req, res) => {
//   db.Note.find({})
//     .then(dbNote => {
//       res.json(dbNote);
//     })
//     .catch(err => {
//       res.json(err);
//     });
// });

// app.get("/user", (req, res) => {
//   db.User.find({})
//     .then(dbUser => {
//       res.json(dbUser);
//     })
//     .catch(err => {
//       res.json(err);
//     });
// });

// app.post("/submit", ({ body }, res) => {
//   db.Note.create(body)
//     .then(({ _id }) => db.User.findOneAndUpdate({}, { $push: { notes: _id } }, { new: true }))
//     .then(dbUser => {
//       res.json(dbUser);
//     })
//     .catch(err => {
//       res.json(err);
//     });
// });


// Start the server
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});

module.exports = router;