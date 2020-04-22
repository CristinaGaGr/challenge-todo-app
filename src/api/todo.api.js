import { axiosInstance } from './api';

export const getToDos = () => {
	return axiosInstance.get('/todos');
};

export const getToDo = (id) => {
	return axiosInstance.get(`/todos/${id}`);
};

export const postToDo = (title, body) => {
	return axiosInstance.post('/todos', {title, body});
};

export const deleteToDo = (id) => {
	return axiosInstance.delete(`/todos/${id}`);
};

export const updateToDo = (id, data) => {
	return axiosInstance.put(`/todos/${id}`, data);
};


