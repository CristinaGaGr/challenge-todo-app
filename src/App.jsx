import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getToDoListRequest } from './store/todo/todo.actions';
import { TodoList } from './components/todo-list/todo-list';
import { CreateTodoForm } from './components/create-todo-form/create-todo-form';


export const App = () => {
	const [showCreateForm, setShowCreateForm] = useState(false);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getToDoListRequest());
	}, [dispatch]);

	return (
		<div>
			<TodoList/>
			<button onClick={() => setShowCreateForm(true)}>Create a ToDo</button>
			{showCreateForm && <CreateTodoForm setShowCreateForm={setShowCreateForm}/>}
		</div>
	)
};
