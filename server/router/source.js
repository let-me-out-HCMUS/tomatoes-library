const express = require("express");
const { listSources } = require("../controller/source.js");

const sourceRouter = express.Router();

sourceRouter.route("/").get(listSources);

module.exports = sourceRouter;
