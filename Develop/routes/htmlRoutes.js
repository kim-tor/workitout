const router = require("express").Router();
const path = require("path");

router.get("/", (req, res) => {
    res.sendFile(path.join(_direname + "../public/index.html"));
});

router.get("/exercise", (req, res) => {
    res.sendFile(path.join(_direname + "../public/exercise.html"));
});

router.get("/stats", (req, res => {
    res.sendFIle(path.join(_direname + "../public/stats.html"));
}));

module.exports = router;