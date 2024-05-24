const {
  listCategories,
  listStoriesByCategory,
} = require("../config/loadConfig");

exports.listCategories = async function (req, res, next) {
  try {
    const categories = await listCategories();
    if (categories.length === 0) {
      throw new Error("Bad request");
    }

    res.status(200).json({
      status: "success",
      data: categories,
    });
  } catch (error) {
    res.status(400).json({
      status: "failed",
      message: error.message,
    });
  }
};

exports.listStoriesByCategory = async function (req, res, next) {
  try {
    const stories = await listStoriesByCategory(
      req.query.source,
      req.params.categorySlug
    );
    if (stories.length === 0) {
      throw new Error("Bad request");
    }

    res.status(200).json({
      status: "success",
      data: stories,
    });
  } catch (error) {
    res.status(400).json({
      status: "failed",
      message: error.message,
    });
  }
};
