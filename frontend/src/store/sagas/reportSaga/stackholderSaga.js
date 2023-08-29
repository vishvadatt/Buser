import { call, put, takeLatest } from 'redux-saga/effects';
import {
	errorToaster,
	successToaster,
	warningToaster,
} from '../../../components/toastify';
import { axiosInstance } from '../../../services/AxiosInstance';
import { setReportData, setStackholderData } from '../../actions/reportActions';

function* createStackholderSaga(action) {
	try {
		const { reportId, data } = action.payload;
		const response = yield axiosInstance.post(
			`report/${reportId}/stackholder/create`,
			data,
		);
		if (response.status === 200 || response.status === 201) {
			successToaster('Stackholder created successfully!!');
			yield put(setReportData(response.data.data));
			yield call(getAllStackholderSaga, { payload: { reportId } });
		}
	} catch (error) {
		if (error.response.status === 400 || error.response.status === 401) {
			warningToaster(error.response.data.error.message);
		} else {
			errorToaster(error.response.data.error.message);
		}
	}
}

function* updateStackholderSaga(action) {
	try {
		const { reportId,stackholderId, data } = action.payload;
		const response = yield axiosInstance.put(
			`report/stackholder/${stackholderId}`,
			data,
		);
		if (response.status === 200 || response.status === 201) {
			successToaster('Stackholder updated successfully!!');
			yield call(getAllStackholderSaga, { payload: { reportId } });
		}
	} catch (error) {
		if (error.response.status === 400 || error.response.status === 401) {
			warningToaster(error.response.data.error.message);
		} else {
			errorToaster(error.response.data.error.message);
		}
	}
}

function* deleteStackholderSaga(action) {
	try {
		const { reportId, stackholderId } = action.payload;
		const response = yield axiosInstance.delete(
			`report/${reportId}/stackholder/delete/${stackholderId}`,
		);
		if (response.status === 200 || response.status === 201) {
			successToaster('Stackholder deleted successfully!!');
		}
	} catch (error) {
		if (error.response.status === 400 || error.response.status === 401) {
			warningToaster(error.response.data.error.message);
		} else {
			errorToaster(error.response.data.error.message);
		}
	}
}

function* getAllStackholderSaga(action) {
	try {
		const { reportId } = action.payload;
		const response = yield axiosInstance.get(`report/${reportId}/stackholder`);
		if (response.status === 200 || response.status === 201) {
			successToaster('Stackholder fetched successfully!!');
			yield put(setStackholderData(response.data.data));
		}
	} catch (error) {
		if (error.response.status === 400 || error.response.status === 401) {
			warningToaster(error.response.data.error.message);
		} else {
			errorToaster(error.response.data.error.message);
		}
	}
}

function* getStackholderByIdSaga(action) {
	try {
		const { stackholderId } = action.payload;
		const response = yield axiosInstance.get(
			`report/stackholder/${stackholderId}`,
		);
		if (response.status === 200 || response.status === 201) {
			successToaster('Stackholder fetched successfully!!');
		}
	} catch (error) {
		if (error.response.status === 400 || error.response.status === 401) {
			warningToaster(error.response.data.error.message);
		} else {
			errorToaster(error.response.data.error.message);
		}
	}
}

function* stackholderSaga() {
	yield takeLatest('CREATE_STACKHOLDER_IN_REPORT', createStackholderSaga);
	yield takeLatest('UPDATE_STACKHOLDER_IN_REPORT', updateStackholderSaga);
	yield takeLatest('DELETE_STACKHOLDER_IN_REPORT', deleteStackholderSaga);
	yield takeLatest('GET_ALL_STACKHOLDER_IN_REPORT', getAllStackholderSaga);
	yield takeLatest('GET_STACKHOLDER_BY_ID_IN_REPORT', getStackholderByIdSaga);
}

export default stackholderSaga;
