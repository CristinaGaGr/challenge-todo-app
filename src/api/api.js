import axios from 'axios';

const baseUrl =  'http://localhost:4000/api/v1';

export const axiosInstance = axios.create({
	baseURL: baseUrl
});

axiosInstance.interceptors.response.use(response => {
	return response.data;
}, error => {
	return Promise.reject(error);
});
