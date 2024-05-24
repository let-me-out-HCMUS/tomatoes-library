const express = require('express')
const {getStory, listStories, getStoryContent} = require('../controller/story.js')

const storyRouter = express.Router();

storyRouter.route("/:storySlug/content/:chapter").get(getStoryContent)
storyRouter.route("/:storySlug").get(getStory)
storyRouter.route("/").get(listStories)

module.exports = storyRouter;