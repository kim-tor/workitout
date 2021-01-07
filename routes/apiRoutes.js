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

    Workout.findByIdAndUpdate(
        req.params.id,        
           { $push: { exercise: req.body }},

        { new: true })
        .then(dbWorkout => {
            res.json(dbWorkout)
        }).catch(err => {
            res.status(400).json(err);
        });
});

//create a new workout
router.post("/api/workouts", ({ body }, res) => {
    //console.log("Added Workout");

    Workout.create(body)
        .then((dbWorkout => {
            res.json(dbWorkout);
        })).catch(err => {
            res.status(400).json(err);
        });
});

//get workouts in range
router.get("/api/workouts/range", (req,res) => {
    Workout.find({})
    .sort({date: -1})
    .then(dbWorkout => {
        res.json(dbWorkout);
    }).catch(err => {
        res.status(400).json(err);
    });
});

module.exports = router;