const express = require("express");
const {
  listCategories,
  listStoriesByCategory,
} = require("../controller/category.js");

const categoryRouter = express.Router();

categoryRouter.route("/:categorySlug/stories").get(listStoriesByCategory);
categoryRouter.route("/").get(listCategories);

module.exports = categoryRouter;
