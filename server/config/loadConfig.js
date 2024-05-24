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

    const result = await getContentFunc(sourceConfig.source, storySlug, chapter);
    return result;
  } catch (error) {
    console.error("Error loading config:", error);
    return "";
  }
};
