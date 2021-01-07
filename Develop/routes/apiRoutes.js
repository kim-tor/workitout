const router = require("express").Router();
const Workout = require("../models/workout.js");

// last workout
router.get("/api/workouts", (req,res) => {
    Workout.find({})
    .then(dbWorkout => {
        res.json(dbWorkout);
    }).catch(err => {
        res.status(400).json(err);
    });
});

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

//get workouts in range
router.get("/api/workouts/ranger", (req,res) => {
    Workout.find({})
    .then(dbWorkout => {
        res.json(dbWorkout);
    }).catch(err => {
        res.status(400).json(err);
    });
});

module.exports = router;