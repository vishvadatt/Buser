import { takeLatest } from 'redux-saga/effects';
import {
	errorToaster,
	successToaster,
	warningToaster,
} from '../../components/toastify';
import { axiosInstance } from '../../services/AxiosInstance';

function* accountCompanyDetailsSaga(action) {
	try {
		const { email, companyDetails } = action.payload;
		const response = yield axiosInstance.put(`user/update-details`, {
			email,
			companyDetails,
		});
		if (response.status === 200 || response.status === 201) {
			console.log(response);
			successToaster('Company details updated successfully!!');
		}
	} catch (error) {
		if (error.response.status === 400 || error.response.status === 401) {
			warningToaster(error.response.data.error.message);
		} else {
			errorToaster(error.response.data.error.message);
		}
	}
}

function* accountSaga() {
	yield takeLatest('ADD_COMPANY_DETAILS', accountCompanyDetailsSaga);
}

export default accountSaga;
