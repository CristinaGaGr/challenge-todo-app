import React, { useState } from 'react';
import Syles from './todo.module.scss';
import { deleteToDoRequest } from '../../../store/todo/todo.actions';
import { useDispatch } from 'react-redux';
import { UpdateTodoForm } from '../update-todo-form/update-todo-form';
import { CreateTodoForm } from '../../create-todo-form/create-todo-form';


export const Todo = ({title, body, id}) => {
	const [showUpdateForm, setShowUpdateForm] = useState(false);
	const dispatch = useDispatch();

	return (
		<div>
			<p>Title: {title}</p>
			<p>Body: {body}</p>
			<button onClick={() => dispatch(deleteToDoRequest(id))}>Delete</button>
			<button onClick={() => setShowUpdateForm(true)}>Update this ToDo</button>
			{showUpdateForm && <UpdateTodoForm
				title={title}
				body={body}
				id={id}
				setShowUpdateForm={setShowUpdateForm}
			/>}
		</div>
	)
};