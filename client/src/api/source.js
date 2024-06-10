import { axiosClient } from './axios-instance';

export const getSources = async () => {
  try {
    const response = await axiosClient.get('/sources');
    return response;
  } catch (error) {
    console.error(error);
  }
};
