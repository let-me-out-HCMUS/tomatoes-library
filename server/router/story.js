const express = require('express')
const {getStory} = require('../controller/story.js')

const storyRouter = express.Router();

storyRouter.route("/:storySlug/:chapter").get(getStory)

module.exports = storyRouter;