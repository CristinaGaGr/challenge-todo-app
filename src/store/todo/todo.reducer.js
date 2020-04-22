const initialState = {
	toDoList: [],
	selectedToDo: null
};



export const todoReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'TODO_LIST_RESPONSE':
			return  {
				...state,
				toDoList: action.payload
			};
		case 'CREATE_TODO_RESPONSE':
			return  {
				...state,
				toDoList: [...state.toDoList, action.payload]
			};
		case 'DELETE_TODO_RESPONSE':
			return {
				...state,
				toDoList: [...state.toDoList.filter((e) => e._id !== action.payload)]
			};
		case 'UPDATE_TODO_RESPONSE':
			const index = state.toDoList.findIndex((e) => e._id === action.payload._id);
			return  {
				...state,
				toDoList: [
					...state.toDoList.slice(0, index),
					action.payload,
					...state.toDoList.slice(index +1)
				]
			};
		default:
			return state;
	}
};
