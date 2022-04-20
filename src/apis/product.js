import axiosClient from './axiosClient';
import qs from 'query-string';

const productApi = {
  getProducts(params) {
    const query = qs.stringify(params);
    const url = `https://625ea0ee873d6798e2aaf907.mockapi.io/product?${query}`;
    return axiosClient.get(url);
  },
};
export default productApi;
