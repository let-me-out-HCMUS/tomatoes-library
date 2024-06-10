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

exports.listStories = async function (order) {
  try {
    const data = fs.readFileSync("./config/config.json", {
      encoding: "utf-8",
    });

    const config = JSON.parse(data);
    const totalStories = [];
    for (let i = 0; i < order.length; i++) {
      const sourceConfig = config.find(cfg => cfg.source === order[i]);

      const listStoriesFunc = new Function(
        "fetch",
        "JSDOM",
        `return async function(){
                  ${sourceConfig.listStories.handler}
              }`
      )(fetch, JSDOM);

      const result = await listStoriesFunc();
      for (let j = 0; j < result.length; j++) {
        const idx = totalStories.findIndex(
          (story) => story.name === result[j].name
        );
        if (idx === -1) {
          totalStories.push(result[j]);
        } else {
          totalStories[idx].totalChapter = Math.max(
            totalStories[idx].totalChapter,
            result[j].totalChapter
          );
        }
      }
    }

    return totalStories;
  } catch (error) {
    console.error("Error loading config:", error);
    return [];
  }
};

exports.getStory = async function (storySlug) {
  try {
    const data = fs.readFileSync("./config/config.json", {
      encoding: "utf-8",
    });

    const config = JSON.parse(data);
    const totalSource = [];
    let returnStory = {};
    for (let i = 0; i < config.length; i++) {
      sourceConfig = config[i];

      const params = sourceConfig.getStory.params.join(", ");

      try {
        const getStoryFunc = new Function(
          "fetch",
          "JSDOM",
          `return async function(${params}){
        ${sourceConfig.getStory.handler}
        }`
        )(fetch, JSDOM);

        const storyDetail = await getStoryFunc(storySlug);
        if (storyDetail != null) {
          returnStory = storyDetail;
          totalSource.push(sourceConfig.source);
        }
      } catch (err) {
        console.log("Cannot get data of source: ", sourceConfig.source, err)
      }
    }


    returnStory.source = totalSource;
    console.log(returnStory)
    return returnStory;
  } catch (error) {
    console.error("Error loading config:", error);
    return {};
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

exports.listCategories = async function (source) {
  try {
    const data = fs.readFileSync("./config/config.json", {
      encoding: "utf-8",
    });

    const config = JSON.parse(data);
    let sourceConfig = config.find((cfg) => cfg.source === source);
    if (!sourceConfig) {
      sourceConfig = config[0];
    }

    const listCategoriesFunc = new Function(
      "fetch",
      "JSDOM",
      `return async function(){
                ${sourceConfig.category.list.handler}
            }`
    )(fetch, JSDOM);

    const result = await listCategoriesFunc();
    return result;
  } catch (error) {
    console.error("Error loading config:", error);
    return [];
  }
};

exports.listStoriesByCategory = async function (source, categorySlug) {
  try {
    const data = fs.readFileSync("./config/config.json", {
      encoding: "utf-8",
    });

    const config = JSON.parse(data);
    let sourceConfig = config.find((cfg) => cfg.source === source);
    if (!sourceConfig) {
      sourceConfig = config[0];
    }

    const params = sourceConfig.category.getStories.params.join(", ");

    const listCategoriesFunc = new Function(
      "fetch",
      "JSDOM",
      `return async function(${params}){
                ${sourceConfig.category.getStories.handler}
            }`
    )(fetch, JSDOM);

    const result = await listCategoriesFunc(categorySlug);
    return result;
  } catch (error) {
    console.error("Error loading config:", error);
    return [];
  }
};

exports.listSources = async function () {
  try {
    const data = fs.readFileSync("./config/config.json", {
      encoding: "utf-8",
    });

    const config = JSON.parse(data);

    return config.map(cfg => {
      return {
        source: cfg.source,
        name: cfg.name
      }
    })
    
  } catch (error) {
    console.error("Error list sources: ", error)
  }
}