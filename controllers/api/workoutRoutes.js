const {
    get
} = require("..")
const db = require("../../models");
// const Exercise = require("./models/index")
// const Workout = require("./models/index")
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

router.get("/workouts/:id", (req, res) => {
    const _id = req.params.id

    db.Workout.findById({
            _id
        })
        .then(dbExercise => {
            res.json(dbExercise);
        })
        .catch(err => {
            res.json(err);
        })

});

// PUT route for updating workouts (with exercises)
router.put("/workouts/:id", (req, res) => {
    console.log(req.body);
    console.log(req.params.id);
    const _id = req.params.id

    db.Workout.findOneAndUpdate({_id: _id}, {
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

router.post("/workouts", ({body}, res) => {
    db.Workout.create(body)
        // .then(({_id}) => db.Workout.findOneAndUpdate({}, {
        //     $push: {
        //         workouts: _id
        //     }
        // }, {
        //     new: true
        // }))
        .then(dbLibrary => {
            res.json(dbLibrary);
        })
        .catch(err => {
            res.json(err);
        });
});


router.get("/workouts/range", (req, res) => {
    db.Workout.find({}).limit(7).sort({
            _id: -1
        })
        .then(dbWorkout => {
            res.json(dbWorkout);
            console.log(dbWorkout)
        })
        .catch(err => {
            res.json(err);
        })
});

module.exports = router;