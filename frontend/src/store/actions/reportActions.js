export const setReportID = (reportId) => {
	return {
		type: 'REPORT_ID_ACTION',
		payload: reportId,
	};
};

export const setReportDisclosure = (disclosure) => {
	return {
		type: 'REPORT_DISCLOSURE_ACTION',
		payload: disclosure,
	};
};

export const setUploadReport = (uploadReport) => {
	return {
		type: 'UPLOAD_REPORT_ACTION',
		payload: uploadReport,
	};
};

export const removeUploadReport = (name) => {
	return {
		type: 'REMOVE_UPLOAD_REPORT_ACTION',
		payload: {
			name,
		},
	};
};

export const setUploadReportData = (uploadReportData) => {
	return {
		type: 'UPLOAD_REPORT_DATA_ACTION',
		payload: uploadReportData,
	};
};

export const setFieldValueDataReport = (id, data) => {
	return {
		type: 'SET_FIELD_VALUE_DATA_REPORT',
		payload: {
			id,
			data,
		},
	};
};

export const setReportData = (reportData) => {
	return {
		type: 'SET_REPORT_DATA_ACTION',
		payload: reportData,
	};
};

export const setSurveyData = (surveyData) => {
	return {
		type: 'SET_SURVEY_DATA_ACTION',
		payload: surveyData,
	};
};

export const setStackholderData = (stackholderData) => {
	return {
		type: 'SET_STACKHOLDER_DATA_ACTION',
		payload: stackholderData,
	};
};

export const setGriData = (gri) => {
	return {
		type: 'SET_GRI_DATA_ACTION',
		payload: gri,
	};
};
