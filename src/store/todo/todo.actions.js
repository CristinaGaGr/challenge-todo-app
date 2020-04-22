export const getToDoListRequest = () => {
	return {
		type: 'TODO_LIST_REQUEST'
	}
};


export const getToDoListResponse = (list) => {
	return {
		type: 'TODO_LIST_RESPONSE',
		payload: list
	}
};


export const createToDoRequest = (title, body) => {
	return {
		type: 'CREATE_TODO_REQUEST',
		payload: {
			title,
			body
		}
	}
};


export const createToDoResponse = (todo) => {
	return {
		type: 'CREATE_TODO_RESPONSE',
		payload: todo
	}
};


export const deleteToDoRequest = (id) => {
	return {
		type: 'DELETE_TODO_REQUEST',
		payload: id
	}
};


export const deleteToDoResponse = (id) => {
	return {
		type: 'DELETE_TODO_RESPONSE',
		payload: id
	}
};


export const updateTodoRequest = (id, data) => {
	return {
		type: 'UPDATE_TODO_REQUEST',
		payload: {
			id,
			data
		}
	}
};


export const updateTodoResponse = (todo) => {
	return {
		type: 'UPDATE_TODO_RESPONSE',
		payload: todo
	}
};


