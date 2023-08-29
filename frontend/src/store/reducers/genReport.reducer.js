import {
  GEN_REPORT_REQUEST,
  GEN_REPORT_SUCCESS,
  GEN_REPORT_FAILURE,
} from "../constant/constant";

const initialState = {
  coverImage: {
    id: "",
    name: "",
  },
  coverLayoutImage: {
    id: "",
    name: "",
  },
  contentPageDesignImage: {
    id: "",
    name: "",
  },
  logoImage: {
    id: "",
    name: "",
  },
  introduction: {
    text: "",
  },
  settings: {
    showLinkEvidentiary: false,
    showLinkBlockchain: false,
  },
  errorMessage: "",
  successMessage: "",
  showLoading: false,
  submitFormData: false,
};

export function genReportReducer(state = initialState, action) {
  switch (action.type) {
    case GEN_REPORT_REQUEST:
      return {
        coverImage: "",

        coverLayoutImage: "",
        contentPageDesignImage: "",
        logoImage: "",
        introduction: "",
        settings: {
          showLinkEvidentiary: false,
          showLinkBlockchain: false,
        },
        errorMessage: "",
        successMessage: "",
        showLoading: true,
        submitFormData: false,
      };
    case GEN_REPORT_SUCCESS:
      return {
        ...state,
        coverImage: "",

        coverLayoutImage: "",
        contentPageDesignImage: "",
        logoImage: "",
        introduction: "",
        settings: {
          showLinkEvidentiary: false,
          showLinkBlockchain: false,
        },
        errorMessage: "",
        successMessage: "",
        showLoading: false,
        submitFormData: true,
      };
    case GEN_REPORT_FAILURE:
      return {
        ...state,
        errorMessage: "",
        showLoading: false,
        submitFormData: false,
      };

    default:
      return { ...state };
  }
}
