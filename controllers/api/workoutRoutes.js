const { get } = require("..")
const db = require("./models");
const Exercise = require("./models/index")
const Workout = require("./models/index")


app.get("/workouts", (req, res) => {
    db.Workout.find({})
      .then(dbExercise => {
        res.json(dbExercise);
      })
      .catch(err => {
        res.json(err);
      })
  });

  app.
get
put
post
"/workouts"

get
"/workouts/range"

app.get("/workouts/range", (req, res) => {
    db.Exercise.find({})
      .then(dbExercise => {
        res.json(dbExercise);
      })
      .catch(err => {
        res.json(err);
      })
  });