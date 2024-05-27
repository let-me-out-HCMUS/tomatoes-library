const {
  getStoryContent,
  listStories,
  getStory,
  search,
} = require("../config/loadConfig");

exports.getStoryContent = async function (req, res, next) {
  try {
    const content = await getStoryContent(
      req.query.source,
      req.params.storySlug,
      req.params.chapter
    );
    if (content === "") {
      throw new Error("Story content not found");
    }

    res.status(200).json({
      status: "success",
      data: content,
    });
  } catch (error) {
    res.status(404).json({
      status: "failed",
      message: error.message,
    });
  }
};

exports.listStories = async function (req, res, next) {
  try {
    const stories = await listStories();
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

exports.getStory = async function (req, res, next) {
  try {
    const story = await getStory(req.params.storySlug);
    if (story === null) {
      throw new Error("Story not found");
    }

    res.status(200).json({
      status: "success",
      data: story,
    });
  } catch (error) {
    res.status(404).json({
      status: "failed",
      message: error.message,
    });
  }
};

exports.search = async function (req, res, next) {
  try {
    const stories = await search(req.query.source, req.body.searchString);

    if (stories.length === 0) {
      throw new Error("Story not found");
    }

    res.status(200).json({
      status: "success",
      data: stories,
    });
  } catch (error) {
    res.status(404).json({
      status: "failed",
      message: error.message,
    });
  }
};
