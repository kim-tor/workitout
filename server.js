const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3005;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGO_URI || "mongodb+srv://kitkat:zelmary17@cluster0.3jepf.mongodb.net/workout?retryWrites=true&w=majority",
{
    useNewUrlParser: true,
    useFindAndModify: false
});

// routes
app.use(require("./routes/apiRoutes.js"));
app.use(require("./routes/htmlRoutes.js"));

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
})