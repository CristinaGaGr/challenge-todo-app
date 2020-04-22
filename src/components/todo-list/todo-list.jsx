import React from 'react';
import styles from './todo-list.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { deleteToDoRequest } from '../../store/todo/todo.actions';
import { Todo } from './todo/todo';

export const TodoList = () => {
	const todoList = useSelector((state) => state.todoReducer.toDoList);
	return (
		<div>
			{todoList.map((e) =>
				<Todo key={e._id}
					  title={e.title}
					  body={e.body}
					  id={e._id}
				/>
			)}
		</div>
	)
};