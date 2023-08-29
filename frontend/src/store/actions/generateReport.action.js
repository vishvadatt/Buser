import { GEN_REPORT_SUCCESS, GEN_REPORT_REQUEST } from "../constant/constant";

export const generateReportAction = (data) => {
  return (dispatch) => {
    dispatch({
      type: GEN_REPORT_REQUEST,
    });

    setTimeout(() => {
      dispatch({
        type: GEN_REPORT_SUCCESS,
        payload: data,
      });
    }, 3000);
  };
};
