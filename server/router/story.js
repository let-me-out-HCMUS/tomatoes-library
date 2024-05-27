const express = require("express");
const {
  getStory,
  listStories,
  getStoryContent,
  search,
} = require("../controller/story.js");

const storyRouter = express.Router();

storyRouter.route("/:storySlug").get(getStory);
storyRouter.route("/:storySlug/content/:chapter").get(getStoryContent);
storyRouter.route("/search").post(search);
storyRouter.route("/").get(listStories);

module.exports = storyRouter;
