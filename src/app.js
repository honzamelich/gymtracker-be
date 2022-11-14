const express = require("express");
require("dotenv").config();
const helmet = require("helmet");
const cors = require("cors");
const morgan = require("morgan");

// Init express app
const app = express();

// Init internal middleware - JSON
app.use(express.json());

// Init 3rd party middleware
app.use(helmet());
app.use(cors());
app.use(morgan("dev"));

module.exports = app;
