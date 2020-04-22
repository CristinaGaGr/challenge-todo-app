import { takeLatest, call, put } from 'redux-saga/effects';
import { deleteToDo, getToDos, postToDo, updateToDo } from '../../api/todo.api';
import { createToDoResponse, deleteToDoResponse, getToDoListResponse, updateTodoResponse } from './todo.actions';


function* getToDoListEffect() {
	const list = yield call(getToDos);
	yield put(getToDoListResponse(list));
}


function* createToDoEffect(action) {
	const {title, body} = action.payload;
	const todo = yield call(postToDo, title, body);
	yield put(createToDoResponse(todo));
}


function* deleteToDoEffect(action) {
	yield call(deleteToDo, action.payload);
	yield put(deleteToDoResponse(action.payload));
}


function* updateToDoEffect(action) {
	const {id, data} = action.payload;
	const todo = yield call(updateToDo, id, data);
	yield put(updateTodoResponse(todo));
}


function* todoSagas() {
	yield takeLatest('TODO_LIST_REQUEST', getToDoListEffect);
	yield takeLatest('CREATE_TODO_REQUEST', createToDoEffect);
	yield takeLatest('DELETE_TODO_REQUEST', deleteToDoEffect);
	yield takeLatest('UPDATE_TODO_REQUEST', updateToDoEffect);
}


export default todoSagas;

