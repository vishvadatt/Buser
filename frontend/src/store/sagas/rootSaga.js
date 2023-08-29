import { all } from 'redux-saga/effects';
import accountSaga from './accountSaga';
import authSaga from './authSaga';
import reportSaga from './reportSaga/reportSaga';
import surveySaga from './reportSaga/surveySaga';
import stackholderSaga from './reportSaga/stackholderSaga';
import griSaga from './reportSaga/griSaga';

export default function* rootSaga() {
	yield all([
		authSaga(),
		accountSaga(),
		reportSaga(),
		surveySaga(),
		stackholderSaga(),
		griSaga(),
	]);
}
