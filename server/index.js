const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const chalk = require("chalk");

const DIST_DIR = path.join(__dirname, "../dist");

const app = express();
const port = process.env.PORT || 3003;

//bodyparsing middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//logger
app.use(morgan("tiny"));

app.use(express.static(DIST_DIR));

//use modular routes
app.use("/", require("../routes/index"));

//sync database then start server
app.listen(port, () =>
  console.log(chalk.black.bgWhite.bold(`Listening on port ${port}`)))