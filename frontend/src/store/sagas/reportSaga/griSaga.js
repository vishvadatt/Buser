import { put, takeLatest } from 'redux-saga/effects';
import {
	errorToaster,
	successToaster,
	warningToaster,
} from '../../../components/toastify';
import { axiosInstance } from '../../../services/AxiosInstance';
import { setGriData } from '../../actions/reportActions';

function* getGriDisclosureTopics() {
	try {
		const response = yield axiosInstance.get(`disclosure/gri/all`);
		if (response.status === 200 || response.status === 201) {
			yield put(setGriData(response.data.data));
			successToaster('GRI Disclosure topics fetched successfully!!');
		}
	} catch (error) {
		if (error.response.status === 400 || error.response.status === 401) {
			warningToaster(error.response.data.error.message);
		} else {
			errorToaster(error.response.data.error.message);
		}
	}
}

function* addGriDisclosureTopic(action) {
	try {
		const response = yield axiosInstance.post(
			`disclosure/gri/add`,
			action.payload,
		);
		if (response.status === 200 || response.status === 201) {
			successToaster('GRI Disclosure topic added successfully!!');
		}
	} catch (error) {
		if (error.response.status === 400 || error.response.status === 401) {
			warningToaster(error.response.data.error.message);
		} else {
			errorToaster(error.response.data.error.message);
		}
	}
}

function* updateGriDisclosureTopic(action) {
	try {
		const { reportId, data } = action.payload;
		const response = yield axiosInstance.put(
			`disclosure/gri/update/${reportId}`,
			data,
		);
		if (response.status === 200 || response.status === 201) {
			successToaster('GRI Disclosure topic updated successfully!!');
		}
	} catch (error) {
		if (error.response.status === 400 || error.response.status === 401) {
			warningToaster(error.response.data.error.message);
		} else {
			errorToaster(error.response.data.error.message);
		}
	}
}

function* deleteGriDisclosureTopic(action) {
	try {
		const response = yield axiosInstance.delete(
			`disclosure/gri/delete/${action.payload}`,
		);
		if (response.status === 200 || response.status === 201) {
			successToaster('GRI Disclosure topic deleted successfully!!');
		}
	} catch (error) {
		if (error.response.status === 400 || error.response.status === 401) {
			warningToaster(error.response.data.error.message);
		} else {
			errorToaster(error.response.data.error.message);
		}
	}
}

function* griSaga() {
	yield takeLatest('GET_GRI_DISCLOSURE_TOPICS', getGriDisclosureTopics);
	yield takeLatest('ADD_GRI_DISCLOSURE_TOPIC', addGriDisclosureTopic);
	yield takeLatest('UPDATE_GRI_DISCLOSURE_TOPIC', updateGriDisclosureTopic);
	yield takeLatest('DELETE_GRI_DISCLOSURE_TOPIC', deleteGriDisclosureTopic);
}

export default griSaga;
