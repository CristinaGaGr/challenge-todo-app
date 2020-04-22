import React from 'react';
import Styles from './create-todo-form.scss';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { createToDoRequest } from '../../store/todo/todo.actions';


export const CreateTodoForm = ({setShowCreateForm}) => {
	const {register, handleSubmit, errors, reset} = useForm();
	const dispatch = useDispatch();
	const onSubmit = (data) => {
		const {title, body} = data;
		dispatch(createToDoRequest(title, body));
		reset();
		setShowCreateForm(false);
	};
	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<input type="text" placeholder="title" name="title" ref={register({required: true})}/>
			<input type="text" placeholder="body" name="body" ref={register({required: true})}/>
			<input type="submit"/>
		</form>
	)
};