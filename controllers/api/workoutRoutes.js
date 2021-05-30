const db = require("../../models");
const Workout = require("../../models/Workout")
const router = require('express').Router();


router.get("/workouts", (req, res) => {
    db.Workout.find({})
        .then(dbExercise => {
            res.json(dbExercise);
        })
        .catch(err => {
            res.json(err);
        })
});

router.get("/workouts/range", (req, res) => {
    db.Workout.find({})
        .sort({
            _id: -1
        }).limit(7)
        .then(dbWorkout => {
            console.log("this is DB WORKOUT", dbWorkout)


            res.json(dbWorkout);

        })
        .catch(err => {
            res.json(err);
        })
});


// PUT route for updating workouts (with exercises)
router.put("/workouts/:id", (req, res) => {
    const _id = req.params.id

    db.Workout.findOneAndUpdate({
            _id: _id
        }, {
            $push: {
                exercises: req.body
            },
            $inc: {
                totalDuration: req.body.duration
            },
            totalDistance: req.body.distance
        },

    ).then(function (updatedWorkout) {
        res.json(updatedWorkout);
    });
});

router.post("/workouts", ({
    body
}, res) => {
    db.Workout.create(body)
        .then(dbLibrary => {
            res.json(dbLibrary);
        })
        .catch(err => {
            res.json(err);
        });
});



module.exports = router;