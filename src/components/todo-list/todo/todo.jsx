import React, { useState } from 'react';
import styles from './todo.module.scss';
import { deleteToDoRequest } from '../../../store/todo/todo.actions';
import { useDispatch } from 'react-redux';
import { UpdateTodoForm } from '../update-todo-form/update-todo-form';


export const Todo = ({title, body, id, done}) => {
	const [showUpdateForm, setShowUpdateForm] = useState(false);
	const dispatch = useDispatch();

	return (
		<div className={styles.container}>
			<div className={styles.subContainer}>
				<div>
					<p><strong>Title:</strong> {title}</p>
					<p><strong>Body:</strong> {body}</p>
					<p><strong>Done:</strong> {done.toString()}</p>
				</div>
				<div>
					<button onClick={() => dispatch(deleteToDoRequest(id))}>Delete</button>
					<button onClick={() => setShowUpdateForm(!showUpdateForm)}>Update this ToDo</button>
				</div>
			</div>

			{showUpdateForm && <UpdateTodoForm
				title={title}
				body={body}
				id={id}
				done={done}
				setShowUpdateForm={setShowUpdateForm}
			/>}
		</div>
	)
};