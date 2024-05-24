const express = require('express')
const {getStory, listStories} = require('../controller/story.js')

const storyRouter = express.Router();

storyRouter.route("/:storySlug/:chapter").get(getStory)
storyRouter.route("/").get(listStories)

module.exports = storyRouter;