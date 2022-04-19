import axiosClient from './axiosClient';

const productApi = {
  getProducts() {
    const url = `https://625ea0ee873d6798e2aaf907.mockapi.io/product`;
    return axiosClient.get(url);
  },
};
export default productApi;
