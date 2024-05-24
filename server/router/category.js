const express = require("express");
const { listCategories } = require("../controller/category.js");

const categoryRouter = express.Router();

categoryRouter.route("/").get(listCategories);

module.exports = categoryRouter;
