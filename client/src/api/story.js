import { axiosClient } from './axios-instance';

export const getStories = async () => {
  try {
    const response = await axiosClient.get('/stories');
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const getStory = async (name) => {
  try {
    const response = await axiosClient.get(`/stories/${name}`);
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const getChapter = async (name, chapter, server) => {
  try {
    const response = await axiosClient.get(
      `/stories/${name}/content/${chapter}`,
      {
        timeout: 10000, // Wait for 7 seconds
        params: {
          source: server,
        },
      }
    );
    return response;
  } catch (error) {
    console.error(`Error: ${error}`);
  }
};
