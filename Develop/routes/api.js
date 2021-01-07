const router = require("express").Router();
const Workout = require("../models/workout.js");

//update a current workout
router.put("/api/workouts/:id", (req, res) => {

    Workout.findOneAndUpdate(
        { id: req.params.id },
        {
            $inc: { totalDuration: req.body.duration },
            $push: { exercise: req.body }
        },
        { new: true })
        .then(dbWorkout => {
            res.json(dbWorkout)
        }).catch(err => {
            res.status(400).json(err);
        });
});

//create a new workout
router.post("/api/workouts", ({ body }, res) => {
    console.log("Added Workout");

    Workout.create(body)
        .then((dbWorkout => {
            res.json(dbWorkout);
        })).catch(err => {
            res.status(400).json(err);
        });
});