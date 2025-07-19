const express = require("express");
const router = express.Router();
const path = require("path");

const routesLoader = require("./controllers/routesLoader.js");
routesLoader(router, path.join(__dirname, "./routes/"));

module.exports = router;