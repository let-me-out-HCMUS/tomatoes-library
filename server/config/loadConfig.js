const fs = require("fs");
const fetch = require("node-fetch");
const { JSDOM } = require("jsdom");

exports.getStoryContent = async function (source, storySlug, chapter) {
  try {
    const data = fs.readFileSync("./config/config.json", {
      encoding: "utf-8",
    });

    const config = JSON.parse(data);
    let sourceConfig = config.find((cfg) => cfg.source === source);
    if (!sourceConfig) {
      sourceConfig = config[0];
    }

    const params = sourceConfig.getContent.params.join(", ");

    const getContentFunc = new Function(
      "fetch",
      "JSDOM",
      `return async function(${params}){
                ${sourceConfig.getContent.handler}
            }`
    )(fetch, JSDOM);

    const result = await getContentFunc(storySlug, chapter);
    return result;
  } catch (error) {
    console.error("Error loading config:", error);
    return "";
  }
};

exports.listStories = async function () {
  try {
    const data = fs.readFileSync("./config/config.json", {
      encoding: "utf-8",
    });

    const config = JSON.parse(data);
    const totalStories = []
    for (let i = 0; i < config.length; i++){
      sourceConfig = config[i]
  
      const listStoriesFunc = new Function(
        "fetch",
        "JSDOM",
        `return async function(){
                  ${sourceConfig.listStories.handler}
              }`
      )(fetch, JSDOM);
  
      const result = await listStoriesFunc();
      for (let j = 0; j < result.length; j++){
        const idx = totalStories.findIndex(story => story.name === result[j].name)
        if (idx === -1){
          totalStories.push(result[j])
        } else {
          totalStories[idx].totalChapter = Math.max(totalStories[idx].totalChapter, result[j].totalChapter)
        }
      }
    }

    return totalStories;
  } catch (error) {
    console.error("Error loading config:", error);
    return [];
  }
};

exports.getStory = async function (source, storySlug) {
  try {
    const data = fs.readFileSync("./config/config.json", {
      encoding: "utf-8",
    });

    const config = JSON.parse(data);
    let sourceConfig = config.find((cfg) => cfg.source === source);
    if (!sourceConfig) {
      sourceConfig = config[0];
    }

    const params = sourceConfig.getStory.params.join(", ");

    const getStoryFunc = new Function(
      "fetch",
      "JSDOM",
      `return async function(${params}){
                ${sourceConfig.getStory.handler}
            }`
    )(fetch, JSDOM);

    const result = await getStoryFunc(storySlug);
    return result;
  } catch (error) {
    console.error("Error loading config:", error);
    return null;
  }
};

exports.search = async function (source, searchString) {
  try {
    const data = fs.readFileSync("./config/config.json", {
      encoding: "utf-8",
    });

    const config = JSON.parse(data);
    let sourceConfig = config.find((cfg) => cfg.source === source);
    if (!sourceConfig) {
      sourceConfig = config[0];
    }

    const params = sourceConfig.search.params.join(", ");

    const searchFunc = new Function(
      "fetch",
      "JSDOM",
      `return async function(${params}){
                ${sourceConfig.search.handler}
            }`
    )(fetch, JSDOM);

    const result = await searchFunc(searchString);
    return result;
  } catch (error) {
    console.error("Error loading config:", error);
    return [];
  }
};