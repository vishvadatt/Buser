import { put, takeLatest } from 'redux-saga/effects';
import {
	errorToaster,
	successToaster,
	warningToaster,
} from '../../../components/toastify';
import { axiosInstance } from '../../../services/AxiosInstance';
import { setReportData } from '../../actions/reportActions';

function* reportCreateByFrameworkSaga(action) {
	try {
		const report = action.payload;
		const response = yield axiosInstance.post(`report/create`, report);
		if (response.status === 200 || response.status === 201) {
			successToaster('Report created successfully!!');
			yield put(setReportData(response.data.data));
		}
	} catch (error) {
		if (error.response.status === 400 || error.response.status === 401) {
			warningToaster(error.response.data.error.message);
		} else {
			errorToaster(error.response.data.error.message);
		}
	}
}

function* reportUpdateByFrameworkSaga(action) {
	try {
		const { reportId, data } = action.payload;
		const response = yield axiosInstance.put(`report/update/${reportId}`, data);
		if (response.status === 200 || response.status === 201) {
			successToaster('Report updated successfully!!');
			yield put(setReportData(response.data.data));
		}
	} catch (error) {
		if (error.response.status === 400 || error.response.status === 401) {
			warningToaster(error.response.data.error.message);
		} else {
			errorToaster(error.response.data.error.message);
		}
	}
}
function* reportApproveByFrameworkSaga(action) {
	try {
		const { reportId, approvers } = action.payload;
		const response = yield axiosInstance.put(`report/approve/${reportId}`, {
			approvers,
		});
		if (response.status === 200 || response.status === 201) {
			successToaster('approve request send successfully!!');
			yield put(setReportData(response.data.data));
		}
	} catch (error) {
		if (error.response.status === 400 || error.response.status === 401) {
			warningToaster(error.response.data.error.message);
		} else {
			errorToaster(error.response.data.error.message);
		}
	}
}

function* reportDeleteByFrameworkSaga(action) {
	try {
		const { reportId } = action.payload;
		const response = yield axiosInstance.delete(`report/delete/${reportId}`);
		if (response.status === 200 || response.status === 201) {
			successToaster('Report deleted successfully!!');
		}
	} catch (error) {
		if (error.response.status === 400 || error.response.status === 401) {
			warningToaster(error.response.data.error.message);
		} else {
			errorToaster(error.response.data.error.message);
		}
	}
}

function* reportGetAllByUserSaga(action) {
	try {
		const response = yield axiosInstance.get(`report/all`);
		if (response.status === 200 || response.status === 201) {
			successToaster('Report fetched successfully!!');
		}
	} catch (error) {
		if (error.response.status === 400 || error.response.status === 401) {
			warningToaster(error.response.data.error.message);
		} else {
			errorToaster(error.response.data.error.message);
		}
	}
}

function* reportGetByIdSaga(action) {
	try {
		const { reportId } = action.payload;
		const response = yield axiosInstance.get(`report/${reportId}`);
		if (response.status === 200 || response.status === 201) {
			successToaster('Report fetched successfully!!');
		}
	} catch (error) {
		if (error.response.status === 400 || error.response.status === 401) {
			warningToaster(error.response.data.error.message);
		} else {
			errorToaster(error.response.data.error.message);
		}
	}
}

function* reportSaga() {
	yield takeLatest('CREATE_REPORT_BY_FRAMEWORK', reportCreateByFrameworkSaga);
	yield takeLatest('UPDATE_REPORT_BY_FRAMEWORK', reportUpdateByFrameworkSaga);
	yield takeLatest('APPROVE_REPORT_BY_FRAMEWORK', reportApproveByFrameworkSaga);
	yield takeLatest('DELETE_REPORT_BY_FRAMEWORK', reportDeleteByFrameworkSaga);
	yield takeLatest('GET_ALL_REPORT_BY_USER', reportGetAllByUserSaga);
	yield takeLatest('GET_REPORT_BY_ID', reportGetByIdSaga);
}

export default reportSaga;
