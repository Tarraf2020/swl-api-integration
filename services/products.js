import api from "../utils/api";

export const getProducts = async () => {
  try {
    const response = await api.get(`/products`);
    return response.data;
  } catch (error) {
    return error.response;
  }
};
