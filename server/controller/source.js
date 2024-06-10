const { listSources } = require("../config/loadConfig");

exports.listSources = async function (req, res, next) {
  try {
    const sources = await listSources();
    if (sources.length === 0) {
      throw new Error("Bad request");
    }

    res.status(200).json({
      status: "success",
      data: sources,
    });
  } catch (error) {
    res.status(400).json({
      status: "failed",
      message: error.message,
    });
  }
};
