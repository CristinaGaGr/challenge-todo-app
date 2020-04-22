import React from 'react';
import styles from './todo-list.module.scss';
import { useSelector } from 'react-redux';
import { Todo } from './todo/todo';

export const TodoList = () => {
	const todoList = useSelector((state) => state.todoReducer.toDoList);
	return (
		<div className={styles.container}>
			{todoList.map((e) =>
				<Todo key={e._id}
					  title={e.title}
					  body={e.body}
					  id={e._id}
					  done={e.done}
				/>
			)}
		</div>
	)
};