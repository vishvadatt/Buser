import { REHYDRATE } from 'redux-persist';

const initialState = {
	reportId: '',
	disclosure: {
		General: [],
		Economic: [],
		Social: [],
		Environmental: [],
	},
	gri: [],
	reportData: {},
	uploadReport: [],
	uploadReportData: [],
	surveyData: [],
	stackholderData: [],
};

export function reportReducer(state = initialState, action) {
	switch (action.type) {
		case 'REPORT_ID_ACTION':
			return {
				...state,
				reportId: action.payload,
			};
		case 'REPORT_DISCLOSURE_ACTION':
			return {
				...state,
				disclosure: action.payload,
			};
		case 'UPLOAD_REPORT_ACTION':
			return {
				...state,
				uploadReport: action.payload,
			};
		case 'REMOVE_UPLOAD_REPORT_ACTION':
			return {
				...state,
				uploadReport: state.uploadReport.filter(
					(report) => report.name !== action.payload.name,
				),
			};
		case 'UPLOAD_REPORT_DATA_ACTION':
		case 'SET_FIELD_VALUE_DATA_REPORT':
			return {
				...state,
				uploadReportData: action.payload,
			};

		case 'SET_REPORT_DATA_ACTION':
			return {
				...state,
				reportData: action.payload,
			};

		case 'SET_STACKHOLDER_DATA_ACTION':
			return {
				...state,
				stackholderData: action.payload,
			};

		case 'SET_SURVEY_DATA_ACTION':
			return {
				...state,
				surveyData: action.payload,
			};

		case 'SET_GRI_DATA_ACTION':
			return {
				...state,
				gri: action.payload,
			};

		case REHYDRATE:
			return {
				...state,
				reportId:
					action.payload && action.payload.reportId
						? action.payload.reportId
						: '',
				disclosure:
					action.payload && action.payload.disclosure
						? action.payload.disclosure
						: initialState.disclosure,
				uploadReport:
					action.payload && action.payload.uploadReport
						? action.payload.uploadReport
						: initialState.uploadReport,
				removeReport:
					action.payload && action.payload.removeReport
						? action.payload.removeReport
						: initialState.removeReport,
				uploadReportData:
					action.payload && action.payload.uploadReportData
						? action.payload.uploadReportData
						: initialState.uploadReportData,
				reportData:
					action.payload && action.payload.reportData
						? action.payload.reportData
						: initialState.reportData,
				surveyData:
					action.payload && action.payload.surveyData
						? action.payload.surveyData
						: initialState.surveyData,
				stackholderData:
					action.payload && action.payload.stackholderData
						? action.payload.stackholderData
						: initialState.stackholderData,
				gri:
					action.payload && action.payload.gri
						? action.payload.gri
						: initialState.gri,
			};
		default:
			return {
				...state,
			};
	}
}
