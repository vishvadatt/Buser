// import { decodeToken } from 'react-jwt';.

// import { errorToast, successToast, warningToaster } from "../../components/toastify";

// import { errorToast } from "components/Toaster/toast";
import { successToast } from "components/Toaster/toast";
import { successToaster } from "components/toastify";
import { toast } from "react-toastify";
import { put, take, takeLatest } from "redux-saga/effects";
import _ from "lodash";
import { axiosInstance } from "../../services/AxiosInstance";
import {
  Changepassword_confirmAction,
  confirmedForgotAction,
  confirmedPainDetailAction,
  confirmedPOPUPAction,
  confirmedResetAction,
  confirmedSignupAction,
  dashBordFailedAction,
  dashBordSuccessAction,
  deleteDailyPainErrorAction,
  deleteDailyPainSuccessAction,
  deletePainErrorAction,
  deletePainSuccessAction,
  findOneUserErrorAction,
  findOneUserSuccessAction,
  findPaymentMethodErrorAction,
  findPaymentMethodSuccessAction,
  getEquipmentListSuccess,
  getPainListSuccessAction,
  getPlanErrorAction,
  getPlanSuccessAction,
  loginFailedAction,
  loginSuccessAction,
  painListErrorAction,
  painListSuccessAction,
  painListTypeErrorAction,
  painListTypeSuccessAction,
  paymentCheckoutSuccess,
  purchaseDashBordPlanError,
  patientsoapdata,
  purchaseDashBordPlanSuccess,
  signupFailedAction,
  UpateUserAction,
  reportListErrorAction,
  reportListSuccessAction,
  singleLabReportSuccess,
  UploadReportToast,
  uploadlabreportSuccessAction,
  uploadlabreportErrorAction,
  doctorShopFormDataErrorAction,
  getDoctorShopFormDataErrorAction,
  getDoctorShopFormDataSuccessAction,
  getSearchPatientsuccess,
  setActiveSteps,
  clientIntakeFormGet,
  getClientIntakeFormDataSuccessAction,
  getClientIntakeFormDataErrorAction,
  postInquiryErr,
  getPhotoAndVideosErrorAction,
  getPhotoAndVideosSuccessAction,
  addPhotoAndVideosErrorAction,
  addNutritionErrorAction,
  getNutritionSuccessAction,
  getNutritionErrorAction,
  deletePhotoAndVideosErrorAction,
  deleteNutritionErrorAction,
  getAllDoctorsAction,
  getSearchedDoctorsAction,
  getChartDetailSuccessAction,
  getChartDetailErrorAction,
  getPhotoAndVideosAction,
  reportListAction,
  getNutritionAction,
  getPainListAction,
  purchaseEducationProductErrorAction,
  getPurchaseEducationProductSuccessAction,
  getPurchaseEducationProductErrorAction,
  getPurchasedEducationProductSuccessAction,
  getPurchasedEducationProductErrorAction,
  getDoctorSlotSuccessAction,
  getDoctorSlotDetailSuccessAction,
  confirmedBookAppointment,
  bookAppointmentFailedAction,
  getPurchaseServiceListSuccessAction,
  confirmedDoctorBookedAppointmentList,
  confirmedDoctorBookedAppointmentDetail,
  getWorkHistoryListSuccessAction,
  getPatientRecordListSuccessAction,
  getDoctorSoapNotesListSuccessAction,
  purchasedEducationProductCountAction,
  setUpcommingAppointments,
  setUpcommingAppointmentsPatient,
  confirmedCreateEventAction,
  getEventListSuccessAction,
  setDoctorSlots,
  setCancelAppointment,
  getphotoErrorAction,
  CHECK_VIDEO_THREAPY_BALANCE_CONFIRM,
  photosData,
  getPhotoTheraphiSuccessAction,
  getPurchaseSuccessAction,
  getpackeges,
  setUpcomingClient,
  setUpcomingTotalAppointment,
  getUpcomingClientListSuccessAction,
  getUpcomingEventListSuccessAction,
  confirmAppointmentSuccessAction,
  PatientCancelAppointmentSuccessAction,
  deniedAppointmentSuccessAction,
  getDoctorPhotoTheraphiSuccessAction,
  letestAppointmentDetail,
  selectedPainListSuccessAction,
  selectedPainListErrorAction,
  getMyPhotosGallerySuccessAction,
  getMyPhotosGalleryErrorAction,
  getClientPhotosGallerySuccessAction,
  getClientPhotosGalleryErrorAction,
  getInformConsentListSuccessAction,
  getInformConsentSuccessAction,
  addInformConsentSuccessAction,
  deductServiceConfirm,
  isInformedFormAction,
  latestServicePurchasedSuccess,
  setTotalPendingAppointmentAction,
  setTotalPendingClientAppointmentAction,
  updateWorkHistoryErrorAction,
  updateWorkHistoryMessage,
  deletePaymentMethodErrorAction,
  deletePaymentMethodMessage,
  getPainListTypeError,
  getPainListTypeSuccess,
  findOneInformConsentSuccess,
  findOneInformConsentError,
  updateInformConsentError,
  getSearchDoctorsPatient,
  getSearchDoctorsPatientsuccess,
  videoMessageTherapySuccess,
  videoMessageTherapyError,
  clientVideoMessageTherapySuccess,
  clientVideoMessageTherapyError,
  informConsentStatus,
  GET_DOCTOR_BOOKINGS_SUCCESS,
  getPTCountSuccess,
  GET_CALENDAR_SHEDULE_LIST_SUCCESS,
  GET_CALENDER_SHEDULE_LIST,
  BOOKED_APPOINTMENT_LIST_BY_DATE,
  CLIENT_PURCHASE_SERVICE_LIST_SUCCESS,
  DOCTOR_PURCHASE_SERVICE_LIST_SUCCESS,
  EDUCATION_VIDEOS_LIST_SUCCESS,
  FOUNDATION_FUNCTION_VIDEOS_LIST_SUCCESS,
  LIVE_VIDEO_AND_INPERSON_VIDEO_LIST_SUCCESS,
  LIVE_VIDEO_AND_INPERSON_PURCHASED_LIST_SUCCESS,
  VMT_VIDEO_LIST_SUCCESS,
  VMT_PURCHASED_VIDEO_LIST_SUCCESS,
  PT_GRANDE_LIST_SUCCESS,
  EDUCATION_EVENT_LIST_SUCCESS,
  ON_DEMAND_FOUNDATION_VIDEO_LIST_SUCCESS,
  ON_DEMAND_FOUNDATION_PURCHASED_LIST_SUCCESS,
} from "../actions/actions";
import { userId } from "store/selectors/selector";
import moment from "moment";

// const TOKEN = useSelector((state) => state.auth.auth.idToken);

function checkBooleanValue(value) {
  if (value.length > 0) {
    if (value[0] === "on") return true;
    return false;
  } else {
    return false;
  }
}

function* registerUserSaga({ payload }) {
  try {
    // const { data, history } = action.payload;

    const response = yield axiosInstance.post("auth/signup", payload);
    console.log("responce", response);
    if (response.status === 200 || response.status === 201) {
      // successToast("Registration successfully!!");
      yield put(confirmedSignupAction());
      // console.log("responce",response)
      // yield put(signupAction(payload));
      // yield put(setLoadingToggle(true));
      // yield put(setFirstTimeLogin(true));
      // yield call(loginUserSaga(data));
    }
  } catch (error) {
    // if (error.response.status === 400 || error.response.status === 401) {
    //   warningToaster(error.response.data.error.message);
    // } else {
    // errorToast(error.response.data.error.message);
    yield put(signupFailedAction(error.response.data.error.message));
    // }
  }
}

function* PopupUserSaga({ payload }) {
  // `user/update-user/${id}{put}`
  const { data, id, token, navigate, userType } = payload;
  try {
    const response = yield axiosInstance.put(`user/update-user/${id}`, data, {
      headers: {
        authorization: token,
      },
    });

    if (response.status === 200 || response.status === 201) {
      yield put(confirmedPOPUPAction());
      yield put(informConsentStatus(response.data.data.isServicesFreez));
      const result = {
        disclaimers_flag: response.data.data.disclaimers_flag,
        indemnification_flag: response.data.data.indemnification_flag,
        cancellation_flag: response.data.data.cancellation_flag,
        practitioner_agreement_flag: response.data.data.practitioner_agreement_flag,
        practitioner_agreement_flagPage1: response.data.data?.practitioner_agreement_flagPage1,
        practitioner_agreement_flagPage2: response.data.data?.practitioner_agreement_flagPage2,
        practitioner_agreement_flagPage3: response.data.data?.practitioner_agreement_flagPage3,
        practitioner_agreement_flagPage4: response.data.data?.practitioner_agreement_flagPage4,
        practitioner_agreement_flagPage5: response.data.data?.practitioner_agreement_flagPage5,
      };
      const userdata = response.data.data;
      const isVerfied = response.data.data.cancellation_flag;

      const isDashBordPurchase = response.data.data.hasOwnProperty("isDashBordPurchase")
        ? response.data.data.isDashBordPurchase
        : false;
      const isExpiredDate = response.data.data.hasOwnProperty("isExpiredDate")
        ? response.data.data.isExpiredDate
        : null;
      const isFristProfileUpdate = response.data.data.hasOwnProperty("isFristProfileUpdate")
        ? response.data.data.isFristProfileUpdate
        : false;

      const isPlanPurchase = response.data.data.hasOwnProperty("isPlanPurchase")
        ? response.data.data.isPlanPurchase
        : false;

      const isPlanExpired = response.data.data.hasOwnProperty("isPlanExpired")
        ? response.data.data.isPlanExpired
        : null;

      const isDashBoardPlan = response.data.data.hasOwnProperty("dashBoardPlan")
        ? response.data.data.dashBoardPlan
        : [];

      const EducationProductList = response.data.data.hasOwnProperty("EducationProductList")
        ? response.data.data.EducationProductList
        : [];
      yield put(
        UpateUserAction({
          data: result,
          isVerfied,
          isFristProfileUpdate,
          isExpiredDate,
          isDashBordPurchase,
          isDashBoardPlan,
          EducationProductList,
          isPlanPurchase,
          isPlanExpired,
          userdata,
        })
      );

      // if (userType === "doctor") {
      //   console.log(userType, "userType in doctor");
      //   navigate("/practitionar-agreement-form");
      // } else if (userType === "client") {
      //   console.log(userType, "userType in client");
      //   navigate("/profileafterlogin");
      // }
    }
  } catch (error) {
    // yield put(signupFailedAction(error.response.data.error.message));
  }
}

function* loginUserSaga({ payload }) {
  try {
    // const { email, password } = action.payload;
    const response = yield axiosInstance.post("auth/login", payload);
    console.log("res..", response);
    if (response.status === 200) {
      console.log("responce", response);
      const result = {
        email: response.data.data.user.email,
        // userdata: response.data.data.user,
        idToken: response.data.data.token,
        name: response.data.data.user.name,
        _id: response.data.data.user._id,
        userType: response.data.data.user.userType,
        customerId: response.data.data.user.customerId,
        isDashBoardPlan: response.data.data.user.hasOwnProperty("dashBoardPlan")
          ? response.data.data.user.dashBoardPlan
          : [],
        EducationProductList: response.data.data.user.hasOwnProperty("EducationProductList")
          ? response.data.data.user.EducationProductList
          : [],
      };
      console.log("EducationProductList..", response.data.data.user.EducationProductList);
      const userdata = response.data.data.user;
      const termAndCondition = {
        disclaimers_flag: response.data.data.user.disclaimers_flag,
        indemnification_flag: response.data.data.user.indemnification_flag,
        cancellation_flag: response.data.data.user.cancellation_flag,
        practitioner_agreement_flag: response.data.data.practitioner_agreement_flag,
        practitioner_agreement_flagPage1: response.data.data?.practitioner_agreement_flagPage1,
        practitioner_agreement_flagPage2: response.data.data?.practitioner_agreement_flagPage2,
        practitioner_agreement_flagPage3: response.data.data?.practitioner_agreement_flagPage3,
        practitioner_agreement_flagPage4: response.data.data?.practitioner_agreement_flagPage4,
        practitioner_agreement_flagPage5: response.data.data?.practitioner_agreement_flagPage5,
      };
      yield put(informConsentStatus(response.data.data.user?.isServicesFreez));
      const isVerfied = response.data.data.user.cancellation_flag;
      const isFristProfileUpdate = response.data.data.user.hasOwnProperty("isFristProfileUpdate")
        ? response.data.data.user.isFristProfileUpdate
        : false;
      const isDashBordPurchase = response.data.data.user.hasOwnProperty("isDashBordPurchase")
        ? response.data.data.user.isDashBordPurchase
        : false;
      const isExpiredDate = response.data.data.user.hasOwnProperty("isExpiredDate")
        ? response.data.data.user.isExpiredDate
        : null;

      const isPlanPurchase = response.data.data.user.hasOwnProperty("isPlanPurchase")
        ? response.data.data.isPlanPurchase
        : false;

      const isPlanExpired = response.data.data.user.hasOwnProperty("isPlanExpired")
        ? response.data.data.isPlanExpired
        : null;

      yield put(loginSuccessAction(result));
      yield put(
        UpateUserAction({
          data: termAndCondition,
          isVerfied,
          isFristProfileUpdate,
          isDashBordPurchase,
          isExpiredDate,
          isPlanPurchase,
          isPlanExpired,
          userdata,
        })
      );
    }
  } catch (error) {
    yield put(loginFailedAction(error.response.data.error.message));
    // if (error.response.status === 400 || error.response.status === 401) {
    //   warningToaster(error.response.data.error.message);
    // } else {
    // }
  }
}

function* forgotPasswordSaga({ payload }) {
  try {
    // const { email, history } = action.payload;
    const response = yield axiosInstance.post("auth/forgot-password", payload);
    if (response.status === 200 || response.status === 201) {
      console.log("responce", response);

      yield put(confirmedForgotAction());
    }
  } catch (error) {
    yield put(loginFailedAction(error.response.data.error.message));
  }
}

function* PainDetailSaga({ payload }) {
  console.log("dailyUpdates", payload);
  try {
    const { data, token } = payload;
    const response = yield axiosInstance.post("dailyUpdates/add-dailyUpdates", data, {
      headers: {
        authorization: token,
      },
    });
    if (response.status === 200 || response.status === 201) {
      console.log("responce", response);

      yield put(confirmedPainDetailAction());
    }
  } catch (error) {
    yield put(loginFailedAction(error.response.data.error.message));
  }
}

function* resendOTPSaga(action) {
  try {
    const { email } = action.payload;
    const response = yield axiosInstance.post("auth/forgot-password", {
      email,
    });
    if (response.status === 200 || response.status === 201) {
      successToast("OTP sent to your registered email");
    }
  } catch (error) {
    // if (e.response.status === 400 || e.response.status === 401) {
    //   warningToaster(e.response.data.error.message);
    //   yield put(setForgetPasswordStatus(false));
    // } else {
    yield put(loginFailedAction(error.response.data.error.message));
    //   yield put(setForgetPasswordStatus(false));
    // }
  }
}

function* resetPasswordSaga({ payload }) {
  console.log("running", payload);
  try {
    // const { email, password, otp, history } = action.payload;
    const response = yield axiosInstance.post("auth/reset-password", payload);
    console.log("reset_password", response);
    if (response.data.code === 200) {
      console.log("succes");
      yield put(confirmedResetAction());
      // history.push("/login");
    }
  } catch (error) {
    yield put(loginFailedAction(error.response.data.error.message));
    // if (e.response.status === 400 || e.response.status === 401) {
    // 	warningToaster(e.response.data.error.message);
    // } else {
    // 	errorToast(e.response.data.error.message);
    // }
  }
}

function* changePasswordSaga({ payload }) {
  const body = {
    oldpassword: payload.oldpassword,
    newpassword: payload.newpassword,
  };
  const token = payload.token;
  console.log(body, token);
  try {
    const response = yield axiosInstance.put("auth/change-password", body, {
      headers: {
        authorization: token,
      },
    });

    console.log("change_password", response);
    if (response.status === 200) {
      yield put(Changepassword_confirmAction());
    }
  } catch (error) {
    // if (e.response.status === 400 || e.response.status === 401) {
    //   warningToaster(e.response.data.error.message);
    // } else {
    //   errorToast(e.response.data.error.message);
    // }
    yield put(loginFailedAction(error.response.data.error.message));
  }
}

function* getDashBordPlan({ payload }) {
  const { userType, userId, token } = payload;
  try {
    const response = yield axiosInstance.get(
      `plan/getPlan/${userId}?planType=dashbord&userType=${userType}`,
      {
        headers: {
          authorization: token,
        },
      }
    );

    console.log("res...", response.data.data.result);
    if (response.status === 200) {
      yield put(dashBordSuccessAction(response.data.data.result));
    }
  } catch (error) {
    yield put(dashBordFailedAction(error.response.data.error.message));
  }
}

function* paymentCheckoutSaga({ payload }) {
  try {
    // console.log(payload)
    const response = yield axiosInstance.post("stripe/purchase-service", payload);

    if (response.status === 200) {
      yield put(paymentCheckoutSuccess(response.data.data.id));
    }
  } catch (error) {
    console.log(error.message);
  }
}

function* purchaseDashBordSaga({ payload }) {
  // delete payload['id']
  const { id, data } = payload;

  try {
    // console.log(payload)
    const response = yield axiosInstance.post(`stripe/retriveSession?sessionId=${id}`, data);

    if (response.status === 200) {
      yield put(purchaseDashBordPlanSuccess(response.data.data.id));
    }
  } catch (error) {
    yield put(purchaseDashBordPlanError(error.response.data.error.message));
  }
}

function* getPlans({ payload }) {
  console.log("hello Paylod", payload);
  try {
    const response = yield axiosInstance.get(`plan/getPlan?userType=${payload}`, {
      headers: {
        authorization: token,
      },
    });

    if (response.status === 200) {
      yield put(getPlanSuccessAction(response.data.data.result));
    }
  } catch (error) {
    yield put(getPlanErrorAction(error.response.data.error.message));
  }
}

function* getClientPlans({ payload }) {
  const { clientId, userType, token } = payload;
  console.log("clientPaylod", clientId, userType);
  try {
    const response = yield axiosInstance.get(
      `plan/clientGetPlan/${clientId}?userType=${userType}`,
      {
        headers: {
          authorization: token,
        },
      }
    );

    if (response.status === 200) {
      yield put(getPlanSuccessAction(response.data.data.result));
    }
  } catch (error) {
    yield put(getPlanErrorAction(error.response.data.error.message));
  }
}

// getAll plans
function* getAllPlans({ payload }) {
  console.log("Paylod--", payload);
  const { token, clientId } = payload;
  try {
    // const response = yield axiosInstance.get(`plan/getAllPlans`);

    const response = yield axiosInstance.get(
      `plan/doctorGetServicePlan/${clientId}?userType=doctor`,
      {
        headers: {
          authorization: token,
        },
      }
    );

    // const response = yield axiosInstance.get(`plan/getPlan/${clientId}?userType=doctor`, {
    //   headers: {
    //     authorization: token,
    //   },
    // });

    console.log("res...", response.data.data.result);
    if (response.status === 200) {
      yield put(getPlanSuccessAction(response.data.data.result));
    }
  } catch (error) {
    yield put(getPlanErrorAction(error.response.data.error.message));
  }
}

function* getPainList({ payload }) {
  const { token, userId, search, pageNo, limit } = payload;
  try {
    const response = yield axiosInstance.get(
      `dailyUpdates/user-dailyUpdateList/${userId}?pageNo=${pageNo}&limit=${limit}&searchText=${
        search !== undefined ? search : ""
      }`,
      {
        headers: {
          authorization: token,
        },
      }
    );
    if (response.status === 200) {
      // const filterrows = response.data.data.map((data) => {
      //   let list = data.pains;
      //   let listarr = list[0];
      //   listarr = { ...listarr, _id: data._id };
      //   return listarr;
      // });

      // yield put(getPainListSuccessAction(_.flatten(filterrows)));
      yield put(getPainListSuccessAction(response.data.data.result));
    }
  } catch (error) {
    // yield put(getPainListAction(error.response.data.error.message));
  }
}

function* findOneUserDetails({ payload }) {
  try {
    const { userId, token } = payload;
    const response = yield axiosInstance.get(`user/findone-user/${userId}`, {
      headers: {
        authorization: token,
      },
    });
    if (response.status === 200) {
      console.log("response..", response.data.data);
      yield put(findOneUserSuccessAction(response?.data?.data));
      yield put(informConsentStatus(response.data.data?.isServicesFreez));
      // yield put(getPlanSuccessAction(response?.data?.data))
      // yield put(UpateUserAction({userdata : response?.data?.data}))
    }
  } catch (error) {
    yield put(findOneUserErrorAction(error));
  }
}
function* EquipmentGetSaga({ payload }) {
  try {
    console.log(payload, "datas--");
    const { page, postPerPage, searchText = "", filterCategory = "", token } = payload;

    const response = yield axiosInstance.get(
      `equipment/getEquipmentList?pageNo=${page}&limit=${postPerPage}&categoryFilter=${filterCategory}&searchText=`,
      {
        headers: {
          authorization: token,
        },
      }
    );
    console.log("response...", response);

    if (response.status === 200) {
      yield put(getEquipmentListSuccess(response?.data?.data));
    }
  } catch (error) {
    console.log(error.message);
  }
}

function* getPaymentsMethods({ payload }) {
  console.log("payload", payload);
  const { token } = payload;
  try {
    // console.log(payload)
    const response = yield axiosInstance.get("stripe/userFetchAllPaymentMethods", {
      headers: {
        authorization: token,
      },
    });
    console.log("response...", response.data?.data?.data);

    if (response.status === 200) {
      yield put(findPaymentMethodSuccessAction(response.data.data.data));
    }
  } catch (error) {
    yield put(findPaymentMethodErrorAction(error));
  }
}

function* deletePaymentMethods({ payload }) {
  const { cardId, token } = payload;
  try {
    const response = yield axiosInstance.delete(`stripe/removeCardDetail/${cardId}`, {
      headers: {
        authorization: token,
      },
    });
    yield put(deletePaymentMethodMessage());
  } catch (e) {
    yield put(deletePaymentMethodErrorAction(e));
  }
}

function* painList({ payload }) {
  const { token } = payload;
  try {
    const response = yield axiosInstance.get("pain/user-dailyUpdatesPainList", {
      headers: {
        authorization: token,
      },
    });

    if (response.status === 200) {
      yield put(painListSuccessAction(response.data.data.result));
    }
  } catch (e) {
    yield put(painListErrorAction(e));
  }
}

function* selectedPainList({ payload }) {
  const { token, patientId } = payload;

  try {
    const response = yield axiosInstance.get(`/dailyUpdates/userPainArea/${patientId}`, {
      headers: {
        authorization: token,
      },
    });
    if (response.status === 200) {
      let result = response.data.data[0].painData?.map((pain) => {
        return {
          painName: pain.name,
          painId: pain._id,
          leftSidePain: false,
          rightSidePain: false,
          PainType: "",
          painLevel: "",
          painFrequency: "",
          painDuration: "",
          antiGravity: "",
          painDescription: "",
        };
      });
      console.log(result);
      yield put(selectedPainListSuccessAction(result));
    }
  } catch (e) {
    yield put(selectedPainListErrorAction(e));
  }
}

function* painListType({ payload }) {
  const { painId, token } = payload;
  try {
    const response = yield axiosInstance.get(`pain/user-painDetailList/${painId}`, {
      headers: {
        authorization: token,
      },
    });
    console.log("response...", response.data.data.result);

    if (response.status === 200) {
      yield put(painListTypeSuccessAction(response.data.data.result));
    }
  } catch (e) {
    yield put(painListTypeErrorAction(e));
  }
}

// new Api
function* getPainTypeList({ payload }) {
  const { painName, token } = payload;
  console.log("painName..", typeof painName);
  try {
    const response = yield axiosInstance.get(`pain/painDetailList?painName=${painName}`, {
      headers: {
        authorization: token,
      },
    });
    // console.log("response..",response);
    yield put(getPainListTypeSuccess(response.data.data.result));
  } catch (e) {
    yield put(getPainListTypeError(e));
  }
}

function* deleteDailyPain({ payload }) {
  console.log("payload", payload);
  const { painId, token, UserId, search, pageNo, pagelimit } = payload;
  try {
    const response = yield axiosInstance.delete(`dailyUpdates/delete-dailyUpdates/${painId}`, {
      headers: {
        authorization: token,
      },
    });
    yield put(
      getPainListAction({
        token: token,
        userId: UserId,
        search: search,
        page: pageNo,
        pagelimit: pagelimit,
      })
    );
    console.log("response...", response.data.data);

    if (response.status === 200) {
      console.log("success...", response.data);
      yield put(deleteDailyPainSuccessAction(response.data.data));
    }
  } catch (e) {
    yield put(deleteDailyPainErrorAction(e));
  }
}

function* deletePain({ payload }) {
  console.log("payload", payload);
  const { mainId, token, UserId, search, pageNo, pagelimit } = payload;
  try {
    const response = yield axiosInstance.delete(
      `dailyUpdates/user-deleteAllDailyUpdates/${mainId}`,
      {
        headers: {
          authorization: token,
        },
      }
    );
    console.log("response...", response.data.data);
    yield put(
      getPainListAction({
        token: token,
        userId: UserId,
        search: search,
        page: pageNo,
        pagelimit: pagelimit,
      })
    );
    if (response.status === 200) {
      console.log("success...", response.data);
      yield put(deletePainSuccessAction(response.data.data));
    }
  } catch (e) {
    yield put(deletePainErrorAction(e));
  }
}

function* latestServicePurchase({ payload }) {
  const { latestServicePurchasedName } = payload;
  yield put(latestServicePurchasedSuccess({ latestServicePurchased: latestServicePurchasedName }));
}

function* reportList({ payload }) {
  console.log("paylo");
  const { UserId, token, search = "", page, limit } = payload;
  console.log(payload);
  console.log(page, "fff");
  try {
    const response = yield axiosInstance.get(
      `labReports/user-labReportList/${UserId}?pageNo=${page}&limit=${limit}&searchText=${search}`,
      {
        headers: {
          authorization: token,
        },
      }
    );
    if (response.status === 200) {
      yield put(reportListSuccessAction(response?.data?.data));
    }
  } catch (err) {
    console.log(err);
    yield put(reportListErrorAction(e));
  }
}

function* singlelabreport({ payload }) {
  console.log("payyyyyyyyyyyyy", payload);
  const { token, reportId } = payload;
  try {
    const response = yield axiosInstance.get(`labReports/detail-labReports/${reportId}`, {
      headers: {
        authorization: token,
      },
    });
    console.log("respppppp", response);
    // if(response.status === 200){
    yield put(singleLabReportSuccess(response.data.data));
    // }
  } catch (err) {
    console.log(err);
  }
}
function* purchasePackege({ payload }) {
  const { UserId, page, limit, token } = payload;
  console.log("token", UserId, token);
  console.log("userId..", payload);
  try {
    const response = yield axiosInstance.get(`photoTherapy/checkPhotoTherapyBalance/${UserId}`, {
      headers: {
        authorization: token,
      },
    });
    yield put(getPurchaseSuccessAction(response.data.data.result));
    console.log("response..222", response);
  } catch (err) {
    console.log("response..111", err);

    // yield put(getNutritionErrorAction(err));
  }
}

function* SearchPatient({ payload }) {
  console.log("payyyyyyyyyyyyy", payload);
  const { searchkey, token } = payload;
  try {
    const response = yield axiosInstance.get(`user/search-users?searchText=${searchkey}`, {
      headers: {
        authorization: token,
      },
    });
    // console.log("searchpat resppp", response.data.data);
    // if(response.status === 200){
    // let patientId = response.data.data.result[0]._id
    console.log("response.data.data serch", response.data.data);
    yield put(getSearchPatientsuccess(response.data.data));
    // yield put(patientsoapdata({patientId : response.data.data.result[0]._id}));
    // }
  } catch (err) {
    console.log(err);
  }
}
function* SearchDoctorsPatient({ payload }) {
  console.log("payyyyyyyyyyyyy", payload);
  const { searchkey, token, doctorId } = payload;
  console.log("searchkey..", searchkey);
  try {
    const response = yield axiosInstance.get(
      `doctorAppointmentSlot/doctorAllPatientRecordsList/${doctorId}?&pageNo=1&limit=10&searchText=${searchkey}`,
      {
        headers: {
          authorization: token,
        },
      }
    );
    // console.log("searchpat resppp", response.data.data);
    // if(response.status === 200){
    // let patientId = response.data.data.result[0]._id
    console.log("response.data.data serch", response.data.data);
    yield put(getSearchDoctorsPatientsuccess(response?.data?.data?.result[0]?.dataWithIds));
    // yield put(patientsoapdata({patientId : response.data.data.result[0]._id}));
    // }
  } catch (err) {
    console.log(err);
  }
}

function* deleteReport({ payload }) {
  const { reportId, token, UserId } = payload;
  try {
    const response = yield axiosInstance.delete(`labReports/user-deletelabReport/${reportId}`, {
      headers: {
        authorization: token,
      },
    });
    yield put(reportListAction({ UserId: UserId, page: 1, limit: 10, token: token }));
  } catch (err) {
    console.log(err);
  }
}

function* uploadLabReport({ payload }) {
  const { token, data, UserId } = payload;
  console.log(data, "dataaa");
  const config = {
    headers: {
      "content-type": "multipart/form-data",
      authorization: token,
    },
  };
  try {
    const response = yield axiosInstance.post(`labReports/user-addLabReports`, data, config);
    console.log("responseeeee", response);
    yield put(reportListAction({ UserId: UserId, page: 1, limit: 10, token: token }));
    yield put(UploadReportToast());
  } catch (err) {
    console.log("484444", err);
  }
}

function* createDoctorShopForm({ payload }) {
  const { data, token } = payload;
  console.log("create", payload);
  try {
    const response = yield axiosInstance.post(`doctorSoap/create_soapForm`, data, {
      headers: {
        authorization: token,
      },
    });
    // const updateResponse = yield axiosInstance.put(`doctorSoap/update-SoapForm/${response.data.data._id}`, payload)
    // console.log("responseeeee", updateResponse);
    yield put(confirmedPOPUPAction());
  } catch (err) {
    yield put(doctorShopFormDataErrorAction(err));
  }
}

function* postInquiry({ payload }) {
  console.log("payload", payload);
  try {
    const { value, token } = payload;
    console.log("values--", value);
    const response = yield axiosInstance.post(`contactUs/create_ContactUs`, value, {
      headers: {
        authorization: token,
      },
    });
    if (response.status === 200 || response.status === 201) {
      console.log(response, "responseeeee");
    }
  } catch (err) {
    console.log(err);
  }
}

function* storepatientsoapdata({ payload }) {
  console.log(payload);
}

function* getDoctorShopFormDetails({ payload }) {
  console.log("payload..", payload);
  // const {practitionerId} = payload;
  // console.log("practitionerId...",practitionerId);
  // const patientId = "6391fb1ecea213bf18a8a689";
  // const practitionerId = "6391f852cea213bf18a8a685"

  const { patientId, practitionerId, token } = payload;
  try {
    const updateResponse = yield axiosInstance.post(`doctorSoap/detail-soapForm`, payload, {
      headers: {
        authorization: token,
      },
    });
    yield put(getDoctorShopFormDataSuccessAction(updateResponse.data.data));
  } catch (err) {
    yield put(getDoctorShopFormDataErrorAction(err));
  }
}

function* setActiveStepSaga({ payload }) {
  // console.log("payload..",payload);
  // const {practitionerId} = payload;
  // console.log("practitionerId...",practitionerId);
  // const patientId = "6391fb1ecea213bf18a8a689";
  // const practitionerId = "6391f852cea213bf18a8a685"
  console.log("payyyyyyyyyyyy", payload);
  try {
    yield put(setActiveSteps(payload));
  } catch (err) {
    yield put(getDoctorShopFormDataErrorAction(err));
  }
}

function* createClientIntakeForm({ payload }) {
  console.log("payload...", payload);
  const { data, token } = payload;
  try {
    const response = yield axiosInstance.post(`doctorIntakeForm/create_intakeForm`, data, {
      headers: {
        authorization: token,
      },
    });
    console.log("Client-intake-form", response);
    // yield put(confirmedPOPUPAction());
  } catch (err) {
    yield put(getClientIntakeFormDataErrorAction(err));
  }
}
function* getPTCount({ payload }) {
  try {
    const { token, UserId } = payload;
    console.log("called");
    const res = yield axiosInstance.get(`photoTherapy/totalPendingPhotoTherapy/${UserId}`, {
      headers: {
        authorization: token,
      },
    });

    console.log(res, "ptttt");
    yield put(getPTCountSuccess(res?.data?.data?.result[0]?.total));
  } catch (error) {
    console.log(error);
  }
}
function* photoUpload({ payload }) {
  console.log(payload.token, "payload token", payload.formData);
  const config = {
    headers: { "content-type": "multipart/form-data", authorization: payload?.token },
  };
  try {
    const response = yield axiosInstance.post(
      `/photoTherapy/uploadPhotos`,
      payload.formData,
      config
    );
    // yield put(photosData(response))
    console.log("photostgkfw", response);
    console.log(response.data.status, "outside");
    if (response.data.status === "success") {
      console.log(response.data.status, "inside");
      payload.navigate("/photo-therapy");
    }
  } catch (err) {
    yield put(getphotoErrorAction(err));
  }
}

function* getClientIntakeFormDetails({ payload }) {
  const { patientId, token } = payload;

  try {
    const displayData = yield axiosInstance.post(`doctorIntakeForm/detail-intakeForm`, payload, {
      headers: {
        authorization: token,
      },
    });
    yield put(getClientIntakeFormDataSuccessAction(displayData.data.data));
  } catch (err) {
    yield put(getClientIntakeFormDataSuccessAction([]));
    yield put(getClientIntakeFormDataErrorAction(err));
  }
}

function* getIntakeFormDetails({ payload }) {
  const { token } = payload;

  try {
    const displayData = yield axiosInstance.post(
      "doctorIntakeForm/patient-ClientIntakeFormDetail",
      payload,
      {
        headers: {
          authorization: token,
        },
      }
    );
    yield put(getClientIntakeFormDataSuccessAction(displayData.data.data));
  } catch (err) {
    yield put(getClientIntakeFormDataSuccessAction([]));
    yield put(getClientIntakeFormDataErrorAction(err));
  }
}

function* getMyPhotoGallery({ payload }) {
  const { pageNo, limit, token, searchText } = payload;
  console.log(searchText, "searchText");
  try {
    const response = yield axiosInstance.get(
      `/photoTherapy/myPhotoTherapyList?searchText=${
        searchText !== undefined ? searchText : ""
      }&pageNo=${pageNo}&limit=${limit}`,
      {
        headers: {
          authorization: token,
        },
      }
    );
    yield put(getMyPhotosGallerySuccessAction(response.data.data));
  } catch (err) {
    yield put(getMyPhotosGalleryErrorAction(err));
  }
}

function* getClientPhotoGallery({ payload }) {
  const { pageNo, limit, token, searchText } = payload;
  console.log(searchText, "searchTextsearchText");
  try {
    const response = yield axiosInstance.get(
      `/photoTherapy/clientPhotoTherapyList?searchText=${searchText}&pageNo=${pageNo}&limit=${limit}`,
      {
        headers: {
          authorization: token,
        },
      }
    );
    yield put(getClientPhotosGallerySuccessAction(response.data.data));
    //  yield put(getPhotosGallerySuccessAction(response.data.data.result));
  } catch (err) {
    yield put(getClientPhotosGalleryErrorAction(err));
  }
}

function* getPhotoAndVideoDetails({ payload }) {
  const { UserId, page, limit, token } = payload;
  console.log("userId..", limit);
  try {
    // const response = yield axiosInstance.get(`chatMedia/fetchChatMediaList/${UserId}`);
    // yield put(getPhotoAndVideosSuccessAction(response.data.data.result));
    // console.log("response..",response);
    // `gallery/user-photoList/${UserId}?pageNo=${page}&limit=${limit !== undefined ? limit : 10}`
    const response = yield axiosInstance.get(`/chatMedia/photoTherapyData/${UserId}`, {
      headers: {
        authorization: token,
      },
    });
    // const response = yield axiosInstance.get(`gallery/user-photoList/${UserId}?pageNo=&limit=`);
    yield put(getPhotoAndVideosSuccessAction(response.data.data.result));
    console.log("response..", response.data.result);

    // yield put(getPhotoAndVideosSuccessAction(response.data.data.result.list));
  } catch (err) {
    yield put(getPhotoAndVideosErrorAction(err));
  }
}

function* deductService({ payload }) {
  const { token, userId } = payload;
  try {
    const responce = yield axiosInstance.post(
      "/photoTherapy/deductVideoTherapyCredit",
      {
        clientId: userId,
      },
      {
        headers: {
          authorization: token,
        },
      }
    );
    yield put(deductServiceConfirm(responce));
  } catch (err) {
    yield put(deductServiceConfirm(err));
  }
}

function* addPhotoAndVideoDetails({ payload }) {
  const { data, UserId } = payload;
  console.log("payload..", payload);
  const config = {
    headers: { "content-type": "multipart/form-data" },
  };
  try {
    // const response = yield axiosInstance.post(`gallery/user-uploadPhotos`,payload);
    const response = yield axiosInstance.post(`gallery/user-uploadPhotos`, data, config);
    console.log("response..", response);
    yield put(getPhotoAndVideosAction({ UserId: UserId, page: 1, limit: 10 }));
    yield put(confirmedPOPUPAction());
  } catch (err) {
    console.log("err..", err);
    yield put(addPhotoAndVideosErrorAction(err));
  }
}

function* getInformConsentList({ payload }) {
  const { Id, token, page, limit } = payload;
  console.log();
  try {
    const response = yield axiosInstance.get(
      `informConsent/getInformConsentList?pageNo=${page}&limit=${limit}`,
      {
        headers: { authorization: token },
      }
    );
    console.log(response, "getInformConsentList");
    if (response?.data?.status === "success") {
      yield put(
        getInformConsentListSuccessAction({
          result: response?.data?.data?.result,
          totalCount: response?.data?.data?.totalCount,
        })
      );
    }
  } catch (err) {
    // yield put(deletePhotoAndVideosErrorAction(err));
  }
}

function* getInformConsent({ payload }) {
  const { Id, token } = payload;
  try {
    const response = yield axiosInstance.get(`informConsent/getInformConsentDataById/${Id}`, {
      headers: { authorization: token },
    });
    console.log(response, "getInformConsentsss");
    if (response?.data?.status === "success") {
      yield put(getInformConsentSuccessAction(response?.data?.data));
    }
  } catch (err) {
    // yield put(deletePhotoAndVideosErrorAction(err));
  }
}

function* updateInformConsent({ payload }) {
  console.log("OOO...", payload);
  const { Id, data, token } = payload;
  // const newData = delete data._id
  console.log("LLL", Id, data, token);
  try {
    const response = yield axiosInstance.put(
      `informConsent/updateInformedConsentRecord/${Id}`,
      data,
      {
        headers: { authorization: token },
      }
    );
    console.log(response, "Update..");
  } catch (err) {
    console.log("err..", err);
    yield put(updateInformConsentError(err));
  }
}

function* addInformConsent({ payload }) {
  const { id, token, navigate, data } = payload;
  try {
    const response = yield axiosInstance.post(`informConsent/addInformConsent`, data, {
      headers: { authorization: token },
    });
    console.log(response, "addInformConsentsss1");
    if (response.status === 200 || response.status === 201) {
      yield put(isInformedFormAction({ isInformedFormFilled: id }));
      yield put(informConsentStatus(true));
      // localStorage.setItem("isServicesFreez",true);
      navigate("/profileafterlogin");
    }
  } catch (err) {
    // yield put(deletePhotoAndVideosErrorAction(err));
  }
}

function* findOneInformConsent({ payload }) {
  const { id, token } = payload;
  try {
    const response = yield axiosInstance.get(`informConsent/getLastInformedConsentRecord/${id}`, {
      headers: { authorization: token },
    });

    console.log(response.data.data.result[0], "addInformConsentsss1");
    if (response.status === 200 || response.status === 201) {
      yield put(findOneInformConsentSuccess(response.data.data.result[0]));
    }
  } catch (err) {
    yield put(findOneInformConsentError(err));
  }
}

function* deletePhotosVideos({ payload }) {
  const { Id, UserId } = payload;
  try {
    const response = yield axiosInstance.delete(`gallery/user-deletePhoto/${Id}`);
    yield put(getPhotoAndVideosAction({ UserId: UserId, page: 1, limit: 10 }));
  } catch (err) {
    yield put(deletePhotoAndVideosErrorAction(err));
  }
}

function* addNutritionDetails({ payload }) {
  const { data, UserId, token } = payload;
  console.log("payload..", payload);
  const config = {
    headers: {
      "content-type": "multipart/form-data",
      authorization: token,
    },
  };
  try {
    // const response = yield axiosInstance.post(`gallery/user-uploadPhotos`,payload);
    const response = yield axiosInstance.post(`Nutrition/user-createNutrition`, data, config);

    console.log("response..", response);
    yield put(getNutritionAction({ UserId: UserId, page: 1, limit: 10, token: token }));
    yield put(confirmedPOPUPAction());
  } catch (err) {
    console.log("err..", err);
    yield put(addNutritionErrorAction(err));
  }
}

function* getNutritionDetails({ payload }) {
  const { UserId, page, limit, token } = payload;
  console.log("userId..", page);
  try {
    const response = yield axiosInstance.get(
      `Nutrition/user-nutritionList/${UserId}?pageNo=${page}&limit=${
        limit !== undefined ? limit : 10
      }`,
      {
        headers: {
          authorization: token,
        },
      }
    );
    console.log("response..", response);
    yield put(getNutritionSuccessAction(response.data.data.result));
  } catch (err) {
    yield put(getNutritionErrorAction(err));
  }
}

function* getPhotoTheraphi({ payload }) {
  const { UserId, searchText, limit, pageNo, token } = payload;
  console.log("userId..", payload, token);
  try {
    const response = yield axiosInstance.get(
      `photoTherapy/photoList/${UserId}?limit=${limit}&pageNo=${pageNo}&searchText=${searchText?.searchText}`,
      {
        headers: {
          authorization: token,
        },
      }
    );
    console.log("response..", response);
    yield put(
      getPhotoTheraphiSuccessAction({
        result: response.data.data.result,
        totalCount: response.data.data.totalCount,
      })
    );
    return response;
  } catch (err) {
    // yield put(getNutritionErrorAction(err));
  }
}

function* getDoctorPhotoTheraphi({ payload }) {
  const { UserId, searchText = {}, limit = 10, pageNo = 1, token } = payload;
  console.log("userId..", payload.searchText?.searchText, token);
  const searchTextValue = searchText.searchText || " ";
  try {
    const response = yield axiosInstance.get(
      `photoTherapy/doctorPhotoList/${UserId}?limit=${limit}&pageNo=${pageNo}&searchText=${searchTextValue}`,
      {
        headers: {
          authorization: token,
        },
      }
    );
    console.log("response..", response);
    yield put(
      getDoctorPhotoTheraphiSuccessAction({
        result: response.data.data.result,
        totalCount: response.data.data.totalCount,
      })
    );
    return response;
  } catch (err) {
    // yield put(getNutritionErrorAction(err));
  }
}
function* deleteNutrition({ payload }) {
  const { Id, UserId, token } = payload;
  try {
    const response = yield axiosInstance.delete(`Nutrition/user-deleteNutrition/${Id}`, {
      headers: {
        authorization: token,
      },
    });
    yield put(getNutritionAction({ UserId: UserId, page: 1, limit: 10, token: token }));
  } catch (err) {
    yield put(deleteNutritionErrorAction(err));
  }
}

function* getAllDoctors() {
  try {
    const response = yield axiosInstance.get(`user/search-doctors`);
    console.log("all doctors", response);
    yield put(getAllDoctorsAction(response.data.data.result));
  } catch (err) {}
}

function* getSearchDoctorList({ payload }) {
  const { searchkey } = payload;
  try {
    const response = yield axiosInstance.get(`user/search-doctors?searchText=${searchkey}`);
    yield put(getSearchedDoctorsAction(response.data.data.result));

    console.log(response);
  } catch (err) {}
}

function* getChartDetails({ payload }) {
  // console.log("payload...", payload);
  const { data, token } = payload;

  // const data = {
  //   painName : painName,
  //   startDate : startDate,
  //   endDate : endDate
  // }
  // console.log("data...", data);
  try {
    const response = yield axiosInstance.post(`dailyUpdates/userDailyPainLevelData`, data, {
      headers: {
        authorization: token,
      },
    });
    console.log("response..", response.data.data.result);
    yield put(getChartDetailSuccessAction(response.data.data.result));
  } catch (err) {
    // yield put(getChartDetailErrorAction(err));

    yield put(getChartDetailSuccessAction([]));
  }
}

function* purchaseEducationProduct({ payload }) {
  console.log("payload...", payload);
  const { token } = payload;

  try {
    const response = yield axiosInstance.post(`EducationMaterial/Education-Product`, payload, {
      headers: {
        authorization: token,
      },
    });
    console.log("response.data.data.id..", response.data.data.id);
    yield put(paymentCheckoutSuccess(response.data.data.id));
  } catch (err) {
    yield put(purchaseEducationProductErrorAction(err));
  }
}

function* getPurchaseEducationProductDetails({ payload }) {
  console.log("payload...", payload);
  const { searchText, pageNo, limit, token } = payload;

  try {
    const response = yield axiosInstance.get(
      `EducationMaterial/getEducationMaterialList?searchText=${
        searchText !== undefined ? searchText : ""
      }&pageNo=${pageNo}&limit=${limit}`,
      {
        headers: {
          authorization: token,
        },
      }
    );
    console.log("education", response.data.data.result);
    yield put(getPurchaseEducationProductSuccessAction(response.data.data.result));
  } catch (err) {
    yield put(getPurchaseEducationProductErrorAction(err));
  }
}
function* getPurchasedEducationProductDetails({ payload }) {
  console.log("payload...", payload);
  const { searchText, pageNo, limit, token } = payload;
  try {
    const response = yield axiosInstance.get(
      `EducationMaterial/myPurchaseProductList?searchText=${
        searchText !== undefined ? searchText : ""
      }&pageNo=${pageNo - 1}&limit=${limit}`,
      {
        headers: {
          authorization: token,
        },
      }
    );
    console.log("fgdgfd", response.data.data.totalCount);
    yield put(purchasedEducationProductCountAction(response.data.data.totalCount));
    yield put(getPurchasedEducationProductSuccessAction(response.data.data.result[0].productList));
  } catch (err) {
    yield put(getPurchasedEducationProductErrorAction(err));
  }
}

function* storeDoctorSlotdata({ payload }) {
  console.log("payload...", payload);
  const { doctorId, Date, token } = payload;
  try {
    const response = yield axiosInstance.post(
      `doctorAppointmentSlot/doctorSlotList/${doctorId}`,
      payload,
      {
        headers: {
          authorization: token,
        },
      }
    );
    // console.log("doctor Slot List", response.data.data.result);
    yield put(getDoctorSlotSuccessAction(response.data.data.result));
  } catch (err) {
    console.log(err);
  }
}

function* storeDoctorSlotdetail({ payload }) {
  console.log("payload...", payload);
  const { slotId } = payload;
  try {
    const response = yield axiosInstance.get(`doctorAppointmentSlot/doctorSlotDetails/${slotId}`);
    // console.log("doctor Slot List", response.data.data.result);
    yield put(getDoctorSlotDetailSuccessAction(response.data.data.result));
  } catch (err) {
    console.log(err);
  }
}

function* getPurchaseServiceList({ payload }) {
  console.log("servicepayload...", payload);
  const { patientId, token, therapyType } = payload;
  const Data = {
    therapyType,
  };
  try {
    const response = yield axiosInstance.post(`user/myPurchaseServiceList/${patientId}`, Data, {
      headers: {
        authorization: token,
      },
    });
    console.log("patient Purchase Service List", response.data.data.result);
    yield put(getPurchaseServiceListSuccessAction(response.data.data.result));
  } catch (err) {
    console.log(err);
  }
}

function* getWorkHistoryList({ payload }) {
  console.log("work history payload...", payload);
  const { practitionerId, pageNo, limit, token, search } = payload;
  try {
    console.log("work history payload...", payload);
    const response = yield axiosInstance.get(
      `workHistory/work-history/${practitionerId}?searchText=${search}&pageNo=${pageNo}&limit=${limit}`,
      {
        headers: {
          authorization: token,
        },
      }
    );
    console.log("Work History List", response.data.data);
    yield put(getWorkHistoryListSuccessAction(response.data.data));
  } catch (err) {
    console.log(err);
  }
}

function* updateWorkHistory({ payload }) {
  const { id, data, token } = payload;
  try {
    const response = yield axiosInstance.put(
      `workHistory/updateDescriptionWorkHistory/${id}`,
      data,
      {
        headers: {
          authorization: token,
        },
      }
    );
    yield put(updateWorkHistoryMessage());
    console.log("response..", response);
  } catch (e) {
    yield put(updateWorkHistoryErrorAction(e));
  }
}

function* getPatientRecordsList({ payload }) {
  console.log("payload...", payload);
  const { doctorId, pageNo, limit, token, searchText } = payload;
  try {
    console.log("work history payload...", payload);
    const response = yield axiosInstance.get(
      `doctorAppointmentSlot/doctorAllPatientRecordsList/${doctorId}?&pageNo=${pageNo}&limit=${limit}&searchText=${searchText}`,
      {
        headers: {
          authorization: token,
        },
      }
    );

    const data1 = response?.data?.data;
    console.log("patient Records List------0", response);
    yield put(getPatientRecordListSuccessAction(data1));
  } catch (err) {
    console.log(err);
  }
}

function* getPatientSoapFormDetails({ payload }) {
  console.log("payload...", payload);

  const { practitionerId, patientId, token } = payload;
  const value = {
    practitionerId,
    patientId,
  };
  try {
    const response = yield axiosInstance.post(`doctorSoap/patient-SoapFormDetail`, value, {
      headers: {
        authorization: token,
      },
    });
    if (response.status === 200 || response.status === 201) {
      console.log("patient-SoapFormDetail", response);
      yield put(getDoctorShopFormDataSuccessAction(response.data.data));
    }
  } catch (err) {
    console.log(err);
  }
}

function* doctorUpcomingClientList({ payload }) {
  console.log("payload...", payload);
  const { doctorId, pageNo, limit } = payload;
  try {
    const response = yield axiosInstance.get(
      `doctorAppointmentSlot/upcomingClientList/${doctorId}?&pageNo=${pageNo}&limit=${limit}`
    );
    console.log("Client List", response.data.data);
    yield put(getUpcomingClientListSuccessAction(response.data.data));
  } catch (err) {
    console.log(err);
  }
}

function* confirmAppointmentAction({ payload }) {
  console.log("payload...", payload);
  const { appointmentId, token } = payload;
  try {
    const response = yield axiosInstance.get(
      `doctorAppointmentSlot/confirmAppointment/${appointmentId}`,
      {
        headers: {
          authorization: token,
        },
      }
    );
    if (response.status === 200 || response.status === 201) {
      yield put(confirmAppointmentSuccessAction());
    }
  } catch (err) {
    console.log(err);
  }
}

function* getTotalPendingAppointmentAction({ payload }) {
  const { patientId, token } = payload;

  try {
    const response = yield axiosInstance.get(`Appointment/totalPendingAppointments/${patientId}`, {
      headers: {
        authorization: token,
      },
    });
    if (response.status === 200 || response.status === 201) {
      yield put(setTotalPendingAppointmentAction(response.data.data.result));
    }
  } catch (err) {
    console.log(err);
  }
}

function* getTotalPendingClientAppointmentAction({ payload }) {
  const { doctorId, token } = payload;

  try {
    const response = yield axiosInstance.get(
      `doctorAppointmentSlot/totalPendingClient/${doctorId}`,
      {
        headers: {
          authorization: token,
        },
      }
    );
    console.log("response.data getTotalPendingClientAppointmentAction", response.data);
    if (response.status === 200 || response.status === 201) {
      yield put(setTotalPendingClientAppointmentAction(response.data.data.result));
    }
  } catch (err) {
    console.log(err);
  }
}

function* patientCancelAppointmentAction({ payload }) {
  console.log("payload...", payload);
  const { appointmentId, patientId, cancelReason, token } = payload;
  const value = {
    appointmentId,
    cancelReason,
  };
  try {
    const response = yield axiosInstance.post(
      `Appointment/patientCancelAppointment/${patientId}`,
      value,
      {
        headers: {
          authorization: token,
        },
      }
    );
    if (response.status === 200 || response.status === 201) {
      yield put(PatientCancelAppointmentSuccessAction());
    }
  } catch (err) {
    console.log(err);
  }
}

function* UpcomingEventList({ payload }) {
  console.log("payload...", payload);
  const { pageNo, limit, token } = payload;
  try {
    const response = yield axiosInstance.get(
      `event/upComingEventList?&pageNo=${pageNo}&limit=${limit}`,
      {
        headers: {
          authorization: token,
        },
      }
    );
    console.log("Client List", response.data.data);
    yield put(getUpcomingEventListSuccessAction(response.data.data));
  } catch (err) {
    console.log(err);
  }
}

function* EventList({ payload }) {
  try {
    const response = yield axiosInstance.get(`event/eventList`, {
      headers: {
        authorization: payload,
      },
    });
    console.log("eventList", response.data.data.result);
    yield put(getEventListSuccessAction(response.data.data.result));
  } catch (err) {
    console.log(err);
  }
}

function* getDoctorSoapNotesList({ payload }) {
  console.log("payload...", payload);
  const { doctorId, pageNo, limit, token } = payload;
  try {
    console.log("doctor soapForm payload...", payload);
    const response = yield axiosInstance.get(
      `doctorSoap/doctor-SoapFormList/${doctorId}?&pageNo=${pageNo}&limit=${limit}`,
      {
        headers: {
          authorization: token,
        },
      }
    );
    console.log("doctorSoapForm List", response.data.data);
    yield put(getDoctorSoapNotesListSuccessAction(response.data.data));
  } catch (err) {
    console.log(err);
  }
}

function* bookAppointmentSlot({ payload }) {
  console.log("payload...", payload);
  const { values, token } = payload;
  try {
    const response = yield axiosInstance.post(`Appointment/bookAppointment`, values, {
      headers: {
        authorization: token,
      },
    });
    console.log("letestAppointment--", response.data.data);
    if (response.status === 200 || response.status === 201) {
      // yield put(letestAppointmentDetail(response.data.data));
      yield put(confirmedBookAppointment());
    }
  } catch (err) {
    //console.log(err)
    console.log("error--", err.response.data.error.message);
    yield put(bookAppointmentFailedAction(err.response.data.error.message));
  }
}

function* DoctorCreateEvent({ payload }) {
  console.log("payload...", payload);
  const { values, token } = payload;
  try {
    const response = yield axiosInstance.post(`event/create_Event`, values);
    if (response.status === 200 || response.status === 201) {
      yield put(confirmedCreateEventAction());
    }
  } catch (err) {
    //console.log(err)
    console.log("error--", err.response.data.error.message);
    yield put(bookAppointmentFailedAction(err.response.data.error.message));
  }
}

function* doctorBookedAppointment({ payload }) {
  console.log("payload...", payload);
  const { doctorId, value, token } = payload;
  try {
    const response = yield axiosInstance.post(
      `doctorAppointmentSlot/doctorBookAppointmentList/${doctorId}`,
      value,
      {
        headers: {
          authorization: token,
        },
      }
    );
    if (response.status === 200 || response.status === 201) {
      yield put(confirmedDoctorBookedAppointmentList(response.data.data.result));
    } else {
      yield put(bookAppointmentFailedAction(error.response.data.error.message));
    }
  } catch (err) {
    console.log(err);
  }
}

function* storeBookAppointmentDetail({ payload }) {
  console.log("payload...", payload);
  const { doctorId, value } = payload;
  try {
    const response = yield axiosInstance.post(
      `doctorAppointmentSlot/BookedAppointmentPatientDetails/${doctorId}`,
      value
    );
    if (response.status === 200 || response.status === 201) {
      yield put(confirmedDoctorBookedAppointmentDetail(response.data.data.result));
    } else {
      //yield put(bookAppointmentFailedAction(error.response.data.error.message));
    }
  } catch (err) {
    console.log(err);
  }
}

function* setUpcommingAppointmentsAction({ payload }) {
  const { doctorId, token } = payload;
  try {
    const response = yield axiosInstance.get(
      `doctorAppointmentSlot/doctorUpcomingBookedAppointmentList/${doctorId}`,
      {
        headers: {
          authorization: token,
        },
      }
    );
    if (response.status === 200 || response.status === 201) {
      const responseData = response.data.data.result;
      const finalData =
        responseData.length > 0
          ? responseData.map((li) => {
              const dateMoment = moment(li.Date, "YYYY-MM-DD");
              const startTime = moment(li.startTime, "HH:mm");
              const endTime = moment(li.endTime, "HH:mm");
              let bookinglist = {
                ...li,
                start: moment(
                  dateMoment.set({
                    hour: startTime.hour(),
                    minute: startTime.minute(),
                  })
                ).toDate(),
                end: moment(
                  dateMoment.set({
                    hour: endTime.hour(),
                    minute: endTime.minute(),
                  })
                ).toDate(),
                serviceName: li?.Services[0]?.serviceName ?? "",
                doctorName: li?.doctor[0]?.name ?? "",
                patientName: li?.patient[0]?.name ?? "",
              };
              return bookinglist;
            })
          : [];
      yield put(setUpcommingAppointments(finalData));
    }
  } catch (err) {
    console.log(err);
  }
}

function* setUpcommingAppointmentsPatientAction({ payload }) {
  const { doctorId, token } = payload;
  console.log("upcomming", payload);
  try {
    const response = yield axiosInstance.get(
      `Appointment/UpcomingBookAppointmentList/${doctorId}`,
      {
        headers: {
          authorization: token,
        },
      }
    );
    if (response.status === 200 || response.status === 201) {
      const responseData = response.data.data.result;
      const finalData =
        responseData.length > 0
          ? responseData.map((li) => {
              const dateMoment = moment(li.Date, "YYYY-MM-DD");
              const startTime = moment(li.startTime, "HH:mm");
              const endTime = moment(li.endTime, "HH:mm");
              let bookinglist = {
                ...li,
                start: moment(
                  dateMoment.set({
                    hour: startTime.hour(),
                    minute: startTime.minute(),
                  })
                ).toDate(),
                end: moment(
                  dateMoment.set({
                    hour: endTime.hour(),
                    minute: endTime.minute(),
                  })
                ).toDate(),
                serviceName: li?.Services[0]?.serviceName ?? "",
                doctorName: li?.doctor[0]?.name ?? "",
              };
              return bookinglist;
            })
          : [];
      yield put(setUpcommingAppointmentsPatient(finalData));
    }
  } catch (err) {
    console.log(err);
  }
}

function* setDoctorSloatListAction({ payload }) {
  const { doctorId, token } = payload;
  try {
    const response = yield axiosInstance.get(
      `doctorAppointmentSlot/doctorSlotTimeList/${doctorId}`,
      {
        headers: {
          authorization: token,
        },
      }
    );
    if (response.status === 200 || response.status === 201) {
      yield put(setDoctorSlots(response.data.data.result));
    }
  } catch (err) {
    console.log(err);
  }
}

function* setUpcomingClientList({ payload }) {
  console.log("payyy", payload);
  const { doctorId, token } = payload;
  try {
    const response = yield axiosInstance.get(
      `doctorAppointmentSlot/totalUpcomingClient/${doctorId}`,
      {
        headers: {
          authorization: token,
        },
      }
    );
    if (response.status === 200 || response.status === 201) {
      console.log("resss", response);
      yield put(setUpcomingClient(response.data.data.result));
    }
  } catch (err) {
    console.log(err);
  }
}

function* setUpcomingAppointmentList({ payload }) {
  console.log("payyy", payload);
  const { patientId, token } = payload;
  try {
    const response = yield axiosInstance.get(`Appointment/totalUpcomingAppointments/${patientId}`, {
      headers: {
        authorization: token,
      },
    });
    if (response.status === 200 || response.status === 201) {
      console.log("resss", response);
      yield put(setUpcomingTotalAppointment(response.data.data.result));
    }
  } catch (err) {
    console.log(err);
  }
}

function* setCancelAppointmentAction({ payload }) {
  const { appointmentId, Date, Time, token } = payload;
  let values = {
    appointmentId: appointmentId,
    Date: Date,
    Time: Time,
  };
  const response = yield axiosInstance.post("Appointment/CancelAppointment", values, {
    headers: {
      authorization: token,
    },
  });
  if (response.status === 200 || response.status === 201) {
    yield put(setCancelAppointment(response.data.data.message));
  }
  try {
  } catch (err) {
    console.log(err);
  }
}

function* checkVideoTherapyBalance({ payload }) {
  try {
    const { token, userId } = payload;
    const response = yield axiosInstance.get(`/photoTherapy/videoTherapyBalance/${userId}`, {
      headers: {
        authorization: token,
      },
    });
    if (response.status === 200) {
      const credit = response.data.data.result[0].hasOwnProperty(
        "Video_Messaging_and_Photo_Therapy_Balance"
      )
        ? response.data.data.result[0]
        : 0;
      yield put(CHECK_VIDEO_THREAPY_BALANCE_CONFIRM(credit));
    }
  } catch (error) {
    console.log("error", error);
  }
}

function* setDeniedAppointmentAction({ payload }) {
  console.log("payload...", payload);
  const { appointmentId, token } = payload;
  try {
    const response = yield axiosInstance.get(
      `doctorAppointmentSlot/deniedAppointment/${appointmentId}`,
      {
        headers: {
          authorization: token,
        },
      }
    );
    if (response.status === 200 || response.status === 201) {
      yield put(deniedAppointmentSuccessAction());
    }
  } catch (err) {
    console.log(err);
  }
}

function* letestAppointmentAction({ payload }) {
  console.log("payload...", payload);
  const { patientId, token } = payload;
  try {
    const response = yield axiosInstance.get(`Appointment/patientLetestAppointment/${patientId}`, {
      headers: {
        authorization: token,
      },
    });
    if (response.status === 200 || response.status === 201) {
      yield put(yield put(letestAppointmentDetail(response.data.data.result)));
    }
  } catch (err) {
    console.log(err);
  }
}

function* videoTherapyGallary({ payload }) {
  console.log("payload...", payload);
  const { id, searchText, pageNo, limit, token } = payload;
  try {
    const response = yield axiosInstance.get(
      `videoMsgSession/myVideoMessagingList/${id}?searchText=${
        searchText !== undefined ? searchText : ""
      }&pageNo=${pageNo}&limit=${limit}`,
      {
        headers: {
          authorization: token,
        },
      }
    );

    if (response.status === 200 || response.status === 201) {
      yield put(yield put(videoMessageTherapySuccess(response.data.data.result)));
    }
  } catch (err) {
    yield put(videoMessageTherapyError(err));
  }
}

function* ClientVideoTherapyGallary({ payload }) {
  console.log("payload...", payload);
  const { id, searchText, pageNo, limit, token } = payload;
  try {
    const response = yield axiosInstance.get(
      `videoMsgSession/ClientVideoMessagingList/${id}?searchText=${
        searchText !== undefined ? searchText : ""
      }&pageNo=${pageNo}&limit=${limit}`,
      {
        headers: {
          authorization: token,
        },
      }
    );

    if (response.status === 200 || response.status === 201) {
      yield put(yield put(clientVideoMessageTherapySuccess(response.data.data.result)));
    }
  } catch (err) {
    yield put(clientVideoMessageTherapyError(err));
  }
}

function* getDoctorAppointments({ payload }) {
  const { doctorId, Date, token, id } = payload;
  try {
    const response = yield axiosInstance.post(
      `Appointment/doctorsAppoitmentList`,
      {
        doctorId: doctorId,
        Date: Date,
      },
      {
        headers: {
          authorization: token,
        },
      }
    );
    yield put(GET_DOCTOR_BOOKINGS_SUCCESS(response.data.data[0]));
    const response2 = yield axiosInstance.post(
      `Appointment/patientBookAppointmentList/${id}`,
      {
        Date: Date,
      },
      {
        headers: {
          authorization: token,
        },
      }
    );
    yield put(BOOKED_APPOINTMENT_LIST_BY_DATE(response2.data.data.result));
  } catch (err) {
    console.log(err);
  }
}

function* setCalendarShedule({ payload }) {
  const { data, token } = payload;
  console.log("payload", payload);
  try {
    const response = yield axiosInstance.post(`user/createDoctorSchedule`, data, {
      headers: {
        authorization: token,
      },
    });
    if (response.status === 200) {
      yield put(GET_CALENDER_SHEDULE_LIST({ token }));
    }
  } catch (err) {
    console.log(err);
  }
}
function* getCalendarSheduleList({ payload }) {
  const { token } = payload;
  console.log("payload", payload);
  try {
    const response = yield axiosInstance.get(`user/DoctorScheduleList`, {
      headers: {
        authorization: token,
      },
    });
    if (response.status === 200) {
      if (response.data.data.result.length > 0) {
        const calenderSheduleList =
          response.data.data.result[0].doctorSchedule.length > 0
            ? response.data.data.result[0].doctorSchedule.map((li) => {
                const fetchType = li?.timeArray.map((li) => {
                  if (li.type === "Live in person therapy") {
                    const data = li.city;
                    if (data === "San Diego") {
                      return "SD";
                    } else {
                      return "NY";
                    }
                  }
                });
                const city = _.compact(fetchType);
                return {
                  title: `${
                    li?.status
                      ? li?.timeArray[0]?.startTime +
                        "-" +
                        li?.timeArray[li?.timeArray.length - 1]?.endTime +
                        "  " +
                        (city.length > 0 ? `[ ${city.join(", ")} ]` : "")
                      : "Inactive"
                  }`,
                  start: li?.date,
                  end: li?.date,
                  // className: li?.status ? "booked" : "error",
                  display: "background",
                  backgroundColor: li?.status ? "green" : "red",
                  ...li,
                };
              })
            : [];
        yield put(GET_CALENDAR_SHEDULE_LIST_SUCCESS(calenderSheduleList));
      } else {
        yield put(GET_CALENDAR_SHEDULE_LIST_SUCCESS([]));
      }
    }
  } catch (err) {
    console.log(err);
  }
}

function* deleteCalendarShedule({ payload }) {
  const { date, token } = payload;
  try {
    const response = yield axiosInstance.post(
      `user/removeDoctorSchedule`,
      {
        Date: date,
      },
      {
        headers: {
          authorization: token,
        },
      }
    );
    if (response.status === 200) {
      yield put(GET_CALENDER_SHEDULE_LIST({ token }));
    }
  } catch (err) {
    console.log(err);
  }
}

function* clientAllSeriveList({ payload }) {
  const { pageNo = 1, pageLimit = 50, token } = payload;
  console.log("payload", payload);
  try {
    const response = yield axiosInstance.get(
      `service/clientMyPurchaseServiceList?pageNo=${pageNo}&limit=${pageLimit}`,
      {
        headers: {
          authorization: token,
        },
      }
    );
    if (response.status === 200) {
      yield put(CLIENT_PURCHASE_SERVICE_LIST_SUCCESS(response?.data?.data));
    }
  } catch (err) {
    console.log(err);
  }
}
function* doctorAllSeriveList({ payload }) {
  const { pageNo = 1, pageLimit = 50, token } = payload;
  console.log("payload", payload);
  try {
    const response = yield axiosInstance.get(
      `service/practitionerMyPurchaseServiceList?pageNo=${pageNo}&limit=${pageLimit}`,
      {
        headers: {
          authorization: token,
        },
      }
    );
    if (response.status === 200) {
      yield put(DOCTOR_PURCHASE_SERVICE_LIST_SUCCESS(response?.data?.data));
    }
  } catch (err) {
    console.log(err);
  }
}

function* educationVideosList({ payload }) {
  const { token, searchText = "" } = payload;
  try {
    const response = yield axiosInstance.get(
      `EducationMaterial/exerciseEducationVideoList?searchText=${searchText}`,
      {
        headers: {
          authorization: token,
        },
      }
    );
    if (response.status === 200) {
      yield put(EDUCATION_VIDEOS_LIST_SUCCESS(response?.data?.data?.result));
    }
  } catch (err) {
    console.log(err);
  }
}

function* liveVideoInPersonVideoList({ payload }) {
  const { token, searchText = "" } = payload;
  try {
    const response = yield axiosInstance.get(
      `doctorAppointmentSlot/practitionerVideoMeetingLinkList?searchText=${searchText}`,
      {
        headers: {
          authorization: token,
        },
      }
    );
    if (response.status === 200) {
      yield put(LIVE_VIDEO_AND_INPERSON_VIDEO_LIST_SUCCESS(response?.data?.data?.result));
    }
  } catch (err) {
    console.log(err);
  }
}

function* liveVideoInPersonPurchaseVideoList({ payload }) {
  const { token, searchText = "" } = payload;
  try {
    const response = yield axiosInstance.get(
      `EducationMaterial/myPurchaseEducationVideoList?searchText=${searchText}`,
      {
        headers: {
          authorization: token,
        },
      }
    );
    if (response.status === 200) {
      yield put(LIVE_VIDEO_AND_INPERSON_PURCHASED_LIST_SUCCESS(response?.data?.data?.result));
    }
  } catch (err) {
    console.log(err);
  }
}

function* VMTVideoList({ payload }) {
  const { token, searchText = "" } = payload;
  try {
    const response = yield axiosInstance.get(
      `videoMsgSession/PractitionerVmtEducationList?searchText=${searchText}`,
      {
        headers: {
          authorization: token,
        },
      }
    );
    if (response.status === 200) {
      yield put(VMT_VIDEO_LIST_SUCCESS(response?.data?.data?.result));
    }
  } catch (err) {
    console.log(err);
  }
}

function* VMTPurchaseVideoList({ payload }) {
  const { token, searchText = "" } = payload;
  try {
    const response = yield axiosInstance.get(
      `videoMsgSession/myPurchaseVmtEducationList?searchText=${searchText}`,
      {
        headers: {
          authorization: token,
        },
      }
    );
    if (response?.status === 200) {
      yield put(VMT_PURCHASED_VIDEO_LIST_SUCCESS(response?.data?.data?.result));
    }
  } catch (err) {
    console.log(err);
  }
}
function* getFoundationFunctionVidosList({ payload }) {
  const { token } = payload;
  try {
    const response = yield axiosInstance.get(
      "EducationMaterial/foundationOfFunctionCourseVideoList",
      {
        headers: {
          authorization: token,
        },
      }
    );
    if (response.status === 200) {
      yield put(FOUNDATION_FUNCTION_VIDEOS_LIST_SUCCESS(response?.data?.data?.result));
    }
  } catch (err) {
    console.log(err);
  }
}

function* GrandePTList({ payload }) {
  const { token, searchText = "" } = payload;
  try {
    const response = yield axiosInstance.get(
      `photoTherapy/practitionerPhotoTherapyEducationList?searchText=${searchText}`,
      {
        headers: {
          authorization: token,
        },
      }
    );
    if (response.status === 200) {
      yield put(PT_GRANDE_LIST_SUCCESS(response?.data?.data?.result));
    }
  } catch (err) {
    console.log(err);
  }
}
function* educationEventList({ payload }) {
  const { token } = payload;
  try {
    const response = yield axiosInstance.get(`event/practitionerEducationEventList`, {
      headers: {
        authorization: token,
      },
    });
    console.log(response.data.data, "wer");
    if (response.status === 200) {
      yield put(EDUCATION_EVENT_LIST_SUCCESS(response?.data?.data));
    }
  } catch (err) {
    console.log(err);
  }
}

function* onDemandVideoList({ payload }) {
  const { token } = payload;
  try {
    const response = yield axiosInstance.get("EducationMaterial/ondemandEducationSessionList", {
      headers: {
        authorization: token,
      },
    });
    console.log(response.data.data, "wer");
    if (response.status === 200) {
      yield put(ON_DEMAND_FOUNDATION_VIDEO_LIST_SUCCESS(response?.data?.data?.result));
    }
  } catch (err) {
    console.log(err);
  }
}

function* onDemandPurchasedVideoList({ payload }) {
  const { token } = payload;
  try {
    const response = yield axiosInstance.get("EducationMaterial/myPurchaseOnDemandSession", {
      headers: {
        authorization: token,
      },
    });
    console.log(response.data.data, "wer");
    if (response.status === 200) {
      yield put(ON_DEMAND_FOUNDATION_PURCHASED_LIST_SUCCESS(response?.data?.data?.result));
    }
  } catch (err) {
    console.log(err);
  }
}

function* authSaga() {
  yield takeLatest("REGISTER_USER", registerUserSaga);
  yield takeLatest("LOGIN_USER", loginUserSaga);
  yield takeLatest("FORGOT_PASSWORD", forgotPasswordSaga);
  yield takeLatest("RESET_PASSWORD", resetPasswordSaga);
  yield takeLatest("CHANGE_PASSWORD", changePasswordSaga);
  yield takeLatest("RESEND_OTP", resendOTPSaga);
  yield takeLatest("POPUP_USERDATA", PopupUserSaga);
  yield takeLatest("DASHBORD_PLAN", getDashBordPlan);
  yield takeLatest("PAINDETAIL", PainDetailSaga);

  yield takeLatest("PAYMENT_CHECKOUT_START", paymentCheckoutSaga);
  yield takeLatest("PURCHASE_DASHBORD_PLAN", purchaseDashBordSaga);
  yield takeLatest("GET_PAINLIST_ACTION", getPainList);
  yield takeLatest("EQUIPMENT_LIST", EquipmentGetSaga);

  yield takeLatest("GET_PLAN_ACTION", getPlans);
  yield takeLatest("GET_CLIENT_PLAN_ACTION", getClientPlans);
  yield takeLatest("GET_ALL_PLAN_ACTION", getAllPlans);

  yield takeLatest("CLIENT_PURCHASE_SERVICE_LIST_ACTION", clientAllSeriveList);
  yield takeLatest("DOCTOR_PURCHASE_SERVICE_LIST_ACTION", doctorAllSeriveList);
  yield takeLatest("EDUCATION_VIDEOS_LIST_ACTION", educationVideosList);
  yield takeLatest("LIVE_VIDEO_AND_INPERSON_VIDEO_LIST_ACTION", liveVideoInPersonVideoList);
  yield takeLatest(
    "LIVE_VIDEO_AND_INPERSON_PURCHASED_LIST_ACTION",
    liveVideoInPersonPurchaseVideoList
  );
  yield takeLatest("VMT_VIDEO_LIST_ACTION", VMTVideoList);
  yield takeLatest("VMT_PURCHASED_VIDEO_LIST_ACTION", VMTPurchaseVideoList);
  yield takeLatest("PT_GRANDE_LIST_ACTION", GrandePTList);

  yield takeLatest("ON_DEMAND_FOUNDATION_VIDEO_LIST_ACTION", onDemandVideoList);
  yield takeLatest("ON_DEMAND_FOUNDATION_PURCHASED_LIST_ACTION", onDemandPurchasedVideoList);

  yield takeLatest("FIND_ONE_USER_ACTION", findOneUserDetails);
  yield takeLatest("FIND_PAYMENT_METHOD_ACTION", getPaymentsMethods);
  yield takeLatest("DELETE_PAYMENT_METHOD_ACTION", deletePaymentMethods);
  yield takeLatest("PAINLIST_ACTION", painList);
  yield takeLatest("SELECTED_PAINLIST_ACTION", selectedPainList);
  yield takeLatest("PAINLIST_TYPE_ACTION", painListType);
  yield takeLatest("GET_PAINLIST_TYPE", getPainTypeList);

  yield takeLatest("DELETE_DAILY_PAIN_ACTION", deleteDailyPain);
  yield takeLatest("DELETE_PAIN_ACTION", deletePain);
  yield takeLatest("LATEST_SERVICE_PURCHASED", latestServicePurchase);

  yield takeLatest("GET_REPORTS_ACTION", reportList);
  yield takeLatest("DELETE_LAB_REPORT", deleteReport);
  yield takeLatest("UPLOAD_LAB_REPORT", uploadLabReport);
  yield takeLatest("GET_SINGLE_LAB_REPORT", singlelabreport);
  yield takeLatest("GET_SEARCH_PATIENT", SearchPatient);
  yield takeLatest("GET_SEARCH_DOCTOR_PATIENT", SearchDoctorsPatient);

  yield takeLatest("DOCTOR_SHOP_FORM_DATA_ACTION", createDoctorShopForm);
  yield takeLatest("GET_DOCTOR_SHOP_FORM_DATA_ACTION", getDoctorShopFormDetails);
  yield takeLatest("PATIENT_SOAP_DATA", storepatientsoapdata);
  yield takeLatest("SET_ACTIVE_STEP", setActiveStepSaga);

  yield takeLatest("CLIENT_INTAKE_FORM_CREATE", createClientIntakeForm);
  yield takeLatest("CLIENT_INTAKE_FORM_GET", getClientIntakeFormDetails);
  yield takeLatest("GET_PATIENT_INTAKE_FORM_DETAILS", getIntakeFormDetails);

  yield takeLatest("PHOTO_THERAPHI_IMAGES", photoUpload);
  yield takeLatest("PHOTO_GET_IMAGES", photosData);
  yield takeLatest("GET_PHOTO_THERAPHI_IMAGES", getPhotoTheraphi);
  yield takeLatest("GET_DOCTOR_PHOTO_THERAPHI_IMAGES", getDoctorPhotoTheraphi);
  yield takeLatest("GET_PHOTO_THERAPHI_PACKEGES", purchasePackege);

  yield takeLatest("POST_INQUIRY", postInquiry);
  yield takeLatest("GET_MY_PHOTOS_GALLERY_ACTION", getMyPhotoGallery);
  yield takeLatest("GET_CLIENT_PHOTOS_GALLERY_ACTION", getClientPhotoGallery);
  yield takeLatest("GET_PHOTO_AND_VIDEO_ACTION", getPhotoAndVideoDetails);
  yield takeLatest("DEDUCT_SERVICE_ACTION", deductService);
  yield takeLatest("ADD_PHOTO_AND_VIDEO_ACTION", addPhotoAndVideoDetails);
  yield takeLatest("DELETE_PHOTO_AND_VIDEO_ACTION", deletePhotosVideos);

  yield takeLatest("INFORM_CONSENT_LIST", getInformConsentList);
  yield takeLatest("INFORM_CONSENT", getInformConsent);
  yield takeLatest("ADD_INFORM_CONSENT", addInformConsent);
  yield takeLatest("FIND_ONE_INFORM_CONSENT", findOneInformConsent),
    yield takeLatest("UPDATE_INFORM_CONSENT", updateInformConsent);
  yield takeLatest("ADD_NUTRITION_ACTION", addNutritionDetails);
  yield takeLatest("GET_NUTRITION_ACTION", getNutritionDetails);
  yield takeLatest("DELETE_NUTRITION_ACTION", deleteNutrition);
  yield takeLatest("GET_ALL_DOCTORS_ACTION", getAllDoctors);
  yield takeLatest("SEARCHED_DOCTOR_LIST_ACTION", getSearchDoctorList);

  yield takeLatest("GET_CHART_DETAILS_ACTION", getChartDetails);

  yield takeLatest("PURCHASE_EDUCATION_PRODUCT_ACTION", purchaseEducationProduct);
  yield takeLatest("GET_PURCHASE_EDUCATION_PRODUCT_ACTION", getPurchaseEducationProductDetails);
  yield takeLatest("GET_PURCHASED_EDUCATION_PRODUCT_ACTION", getPurchasedEducationProductDetails);

  yield takeLatest("DOCTOR_SLOT_DATA", storeDoctorSlotdata);
  yield takeLatest("DOCTOR_SLOT_DETAIL", storeDoctorSlotdetail);
  yield takeLatest("PATIENT_BOOK_APPOINTMENT", bookAppointmentSlot);
  yield takeLatest("PATIENT_PURCHASE_SERVICE_LIST", getPurchaseServiceList);
  yield takeLatest("DOCTOR_BOOKED_APPOINTMENT", doctorBookedAppointment);
  yield takeLatest("BOOKED_APPOINTMENT_DETAIL", storeBookAppointmentDetail);
  yield takeLatest("GET_WORK_HISTORY_LIST", getWorkHistoryList);
  yield takeLatest("UPDATE_WORK_HISTORY_ACTION", updateWorkHistory);
  yield takeLatest("GET_PATIENT_RECORDS_LIST", getPatientRecordsList);
  yield takeLatest("GET_PATIENT_SOAP_FORM_DETAILS", getPatientSoapFormDetails);
  yield takeLatest("GET_DOCTOR_SOAP_FORM_LIST", getDoctorSoapNotesList);
  yield takeLatest("SET_UPCOMMING_APPOINTMENTS_ACTION", setUpcommingAppointmentsAction);
  yield takeLatest(
    "SET_UPCOMMING_APPOINTMENTS_PATIENT_ACTION",
    setUpcommingAppointmentsPatientAction
  );
  yield takeLatest("DOCTOR_CREATE_EVENT", DoctorCreateEvent);
  yield takeLatest("EVENT_List", EventList);
  yield takeLatest("DOCTOR_SLOTS_LIST_ACTION", setDoctorSloatListAction);
  yield takeLatest("SET_CANCEL_APPOINTMENT_STATUS_ACTION", setCancelAppointmentAction);
  yield takeLatest("CHECK_VIDEO_THREAPY_BALANCE", checkVideoTherapyBalance);
  yield takeLatest("UPCOMING_CLIENT_LIST", setUpcomingClientList);
  yield takeLatest("UPCOMING_TOTAL_APPOINTMENT_LIST", setUpcomingAppointmentList);
  yield takeLatest("UPCOMING_CLIENT_LIST_ACTION", doctorUpcomingClientList);
  yield takeLatest("EVENT_LIST_ACTION", UpcomingEventList);
  yield takeLatest("CONFIRM_APPOINTMENT_ACTION", confirmAppointmentAction);
  yield takeLatest("PATIENT_CANCEL_APPOINTMENT_ACTION", patientCancelAppointmentAction);
  yield takeLatest("SET_DENIED_APPOINTMENT_STATUS_ACTION", setDeniedAppointmentAction);
  yield takeLatest("PATIENT_LETEST_APPOINTMENT", letestAppointmentAction);
  yield takeLatest("GET_PENDING_APPOINTMENTS", getTotalPendingAppointmentAction);
  yield takeLatest("GET_PENDING_CLIENT_APPOINTMENTS", getTotalPendingClientAppointmentAction);

  yield takeLatest("VIDEO_MESSAGE_THERAPY_ACTION", videoTherapyGallary);
  yield takeLatest("CLIENT_VIDEO_MESSAGE_THERAPY_ACTION", ClientVideoTherapyGallary);
  yield takeLatest("GET_DOCTOR_BOOKINGS", getDoctorAppointments);

  yield takeLatest("GET_PT_COUNT", getPTCount);
  yield takeLatest("SET_CALENDAR_SHEDULE", setCalendarShedule);
  yield takeLatest("GET_CALENDER_SHEDULE_LIST", getCalendarSheduleList);
  yield takeLatest("DELETE_CALENDAR_SHEDULE", deleteCalendarShedule);
  yield takeLatest("FOUNDATION_FUNCTION_VIDEOS_LIST_ACTION", getFoundationFunctionVidosList);

  yield takeLatest("EDUCATION_EVENT_LIST_ACTION", educationEventList);
}

export default authSaga;
