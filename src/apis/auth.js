import axiosClient from './axiosClient';

const authApi = {
  login(params) {
    const url = `/users/login`;
    return axiosClient.post(url, params);
  },
  register(data){
    const url =``
  }
  
};
