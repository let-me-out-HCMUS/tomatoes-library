import { axiosClient } from './axios-instance';

export const getCategories = async () => {
  try {
    const response = await axiosClient.get('/categories');
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const getStoriesByCategory = async (categorySlug) => {
  try {
    const response = await axiosClient.get(
      `/categories/${categorySlug}/stories`
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};
