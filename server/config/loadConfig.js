exports.getContent = async function (source) {
  try {
    const data = await fs.readFileSync("./config.json", {
      encoding: "utf-8",
    });

    const config = JSON.parse(data);
    const sourceConfig = config.find(cfg => cfg.source === source)
    const params = sourceConfig.getContent.params.join(", ");

    const getContentFunc = new Function(
      "fetch",
      "JSDOM",
      `return async function(${params}){
                ${config.getContent.handler}
            }`
    )(fetch, JSDOM);

    const result = await getContentFunc(2);
    return result;
  } catch (error) {
    console.error("Error loading config:", error);
    return "";
  }
};
