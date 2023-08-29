import { call, put, takeLatest } from 'redux-saga/effects';
import {
	errorToaster,
	successToaster,
	warningToaster,
} from '../../../components/toastify';
import { axiosInstance } from '../../../services/AxiosInstance';
import { setReportData, setSurveyData } from '../../actions/reportActions';

function* createSurveySaga(action) {
	try {
		const { reportId, data } = action.payload;
		const response = yield axiosInstance.post(
			`report/${reportId}/survey/create`,
			data,
		);
		if (response.status === 200 || response.status === 201) {
			successToaster('survey created successfully!!');
			yield put(setReportData(response.data.data));
			yield call(getAllSurveySaga, {
				payload: { reportId,},
			});
		}
	} catch (error) {
		if (error.response.status === 400 || error.response.status === 401) {
			warningToaster(error.response.data.error.message);
		} else {
			errorToaster(error.response.data.error.message);
		}
	}
}

function* updateSurveySaga(action) {
	try {
		const { surveyId, data } = action.payload;
		const response = yield axiosInstance.put(`report/survey/${surveyId}`, data);
		if (response.status === 200 || response.status === 201) {
			successToaster('survey updated successfully!!');
		}
	} catch (error) {
		if (error.response.status === 400 || error.response.status === 401) {
			warningToaster(error.response.data.error.message);
		} else {
			errorToaster(error.response.data.error.message);
		}
	}
}

function* deleteSurveySaga(action) {
	try {
		const { reportId, surveyId } = action.payload;
		const response = yield axiosInstance.delete(
			`report/${reportId}/survey/delete/${surveyId}`,
		);
		if (response.status === 200 || response.status === 201) {
			successToaster('survey deleted successfully!!');
		}
	} catch (error) {
		if (error.response.status === 400 || error.response.status === 401) {
			warningToaster(error.response.data.error.message);
		} else {
			errorToaster(error.response.data.error.message);
		}
	}
}

function* getAllSurveySaga(action) {
	try {
		const { reportId } = action.payload;
		const response = yield axiosInstance.get(`report/${reportId}/survey`);
		if (response.status === 200 || response.status === 201) {
			successToaster('survey fetched successfully!!');
			yield put(setSurveyData(response.data.data));
		}
	} catch (error) {
		if (error.response.status === 400 || error.response.status === 401) {
			warningToaster(error.response.data.error.message);
		} else {
			errorToaster(error.response.data.error.message);
		}
	}
}

function* getSurveyByIdSaga(action) {
	try {
		const { surveyId } = action.payload;
		const response = yield axiosInstance.get(`report/survey/${surveyId}`);
		if (response.status === 200 || response.status === 201) {
			successToaster('survey fetched successfully!!');
		}
	} catch (error) {
		if (error.response.status === 400 || error.response.status === 401) {
			warningToaster(error.response.data.error.message);
		} else {
			errorToaster(error.response.data.error.message);
		}
	}
}

function* surveySaga() {
	yield takeLatest('CREATE_survey_IN_REPORT', createSurveySaga);
	yield takeLatest('UPDATE_survey_IN_REPORT', updateSurveySaga);
	yield takeLatest('DELETE_survey_IN_REPORT', deleteSurveySaga);
	yield takeLatest('GET_ALL_survey_IN_REPORT', getAllSurveySaga);
	yield takeLatest('GET_survey_BY_ID_IN_REPORT', getSurveyByIdSaga);
}

export default surveySaga;
