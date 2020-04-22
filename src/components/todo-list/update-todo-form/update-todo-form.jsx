import React, { useState } from 'react';
import Styles from './update-todo-form.scss';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { updateTodoRequest } from '../../../store/todo/todo.actions';


export const UpdateTodoForm = ({setShowUpdateForm, title, body, id, done}) => {
	const [doneValue, setDoneValue] = useState(done);
	const {register, handleSubmit, errors, reset} = useForm();
	const dispatch = useDispatch();
	const onSubmit = (data) => {
		data = {...data, done: doneValue};
		dispatch(updateTodoRequest(id, data));
		reset();
		setShowUpdateForm(false);
	};
	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<input type="text" placeholder="title" name="title" defaultValue={title} ref={register({required: true})}/>
			<input type="text" placeholder="body" name="body" defaultValue={body} ref={register({required: true})}/>
			<input type="checkbox" placeholder="done" name="done" checked={doneValue} ref={register}
			onChange={() => setDoneValue(!doneValue)}/>
			<button type="submit">Update</button>
		</form>
	)
};