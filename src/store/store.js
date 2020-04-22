import { applyMiddleware, combineReducers, createStore, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';
import { todoReducer } from './todo/todo.reducer';
import todoSagas from './todo/todo.saga';


const reducers  = combineReducers({
	todoReducer
});

const sagaMiddleware = createSagaMiddleware();

export default createStore(reducers, compose(applyMiddleware(sagaMiddleware)));

function* rootSaga() {
	yield all([
		todoSagas()
	])
}

sagaMiddleware.run(rootSaga);