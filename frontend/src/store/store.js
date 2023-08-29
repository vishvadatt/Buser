import { applyMiddleware, combineReducers, createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import thunk from 'redux-thunk';
import { AuthReducer } from './reducers/reducer';
import { reportReducer } from './reducers/reportReducer';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from '@redux-saga/core';
import rootSaga from './sagas/rootSaga';
// import { reducer } from 'redux-form';

const authMiddleware = (store) => (next) => (action) => {
	if (action.type === 'LOGOUT_ACTION') {
		localStorage.removeItem('token');
	}
	return next(action);
};

const logger = createLogger({});
const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
	key: 'root',
	storage: storage,
	stateReconciler: autoMergeLevel2,
};
const reducers = combineReducers({
	auth: AuthReducer,
	report: reportReducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);
export const store = createStore(
	persistedReducer,
	{},
	applyMiddleware(thunk, logger, sagaMiddleware, authMiddleware),
);

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
