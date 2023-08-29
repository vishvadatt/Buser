export function signupAction(userdata) {
  return {
    type: "REGISTER_USER",
    payload: userdata,
  };
}
export function popupAction(userdata) {
  return {
    type: "POPUP_USERDATA",
    payload: userdata,
  };
}
export function UpateUserAction(userdata) {
  return {
    type: "UPDATE_USER",
    payload: userdata,
  };
}
export function logout() {
  ("/authentication/sign-in");
  return {
    type: "LOGOUT_ACTION",
  };
}

export function loginToast(data) {
  return {
    type: "LOGIN_CONFIRMED_ACTION",
    payload: data,
  };
}

export function bookAppointmentToast(data) {
  return {
    type: "BOOK_APPOINTMENT_TOASTER",
    payload: data,
  };
}

export function loginSuccessAction(data) {
  return {
    type: "LOGIN_SUCCESS_ACTION",
    payload: data,
  };
}

export function clearMessage() {
  return {
    type: "CLEAR_MESSAGE",
  };
}

export function loginFailedAction(msg) {
  return {
    type: "LOGIN_FAILED_ACTION",
    payload: msg,
  };
}

export function loginAction(data) {
  console.log("action", data);
  return {
    type: "LOGIN_USER",
    payload: data,
  };
}
export function changesPasswordAction(data) {
  return {
    type: "CHANGE_PASSWORD",
    payload: data,
  };
}

export function reset_passwordAction(data) {
  return {
    type: "RESET_PASSWORD",
    payload: data,
  };
}
export function PainDetail_Action(data) {
  return {
    type: "PAINDETAIL",
    payload: data,
  };
}
export function forgot_password_action(data) {
  return {
    type: "FORGOT_PASSWORD",
    payload: data,
  };
}

export function loginStatus(value) {
  return {
    type: "SET_LOGIN_STATUS",
    payload: value,
  };
}

export function loginConfirmedAction(data) {
  return {
    type: "LOGIN_DATA",
    payload: data,
  };
}

export function setLoginDetails(data) {
  return {
    type: "SET_LOGIN_DATA",
    payload: data,
  };
}

export function confirmedSignupAction() {
  return {
    type: "SIGNUP_CONFIRMED_ACTION",
  };
}

export function confirmedPOPUPAction() {
  return {
    type: "POPUP_CONFIRMED_ACTION",
  };
}
export function confirmedResetAction() {
  return {
    type: "RESET_CONFIRMED_ACTION",
  };
}
export function confirmedForgotAction() {
  return {
    type: "FORGOT_CONFIRMED_ACTION",
  };
}
export function confirmedPainDetailAction() {
  return {
    type: "PAINDETAIL_CONFIRMED_ACTION",
  };
}
export function Changepassword_confirmAction() {
  return {
    type: "CHANGEPASSWORD_CONFIRMED_ACTION",
  };
}
export function signupFailedAction(message) {
  return {
    type: "SIGNUP_FAILED_ACTION",
    payload: message,
  };
}

export function getInformConsentListAction(data) {
  return {
    type: "INFORM_CONSENT_LIST",
    payload: data,
  };
}

export function getInformConsentListSuccessAction(data) {
  return {
    type: "INFORM_CONSENT_LIST_SUCCESS",
    payload: data,
  };
}

export function addInformConsentAction(data) {
  return {
    type: "ADD_INFORM_CONSENT",
    payload: data,
  };
}

export function latestServicePurchased(data) {
  return {
    type: "LATEST_SERVICE_PURCHASED",
    payload: data,
  };
}
export function latestServicePurchasedSuccess(data) {
  return {
    type: "LATEST_SERVICE_PURCHASED_SUCCESS",
    payload: data,
  };
}
export function isInformedFormAction(data) {
  return {
    type: "INFORMED_FORM_FILLED",
    payload: data,
  };
}

export function deductService(data) {
  return {
    type: "DEDUCT_SERVICE_ACTION",
    payload: data,
  };
}

export function deductServiceConfirm(data) {
  return {
    type: "DEDUCT_SERVICE_CONFIRM_ACTION",
    payload: data,
  };
}

export function addInformConsentSuccessAction(data) {
  return {
    type: "ADD_INFORM_CONSENT_SUCCESS",
    payload: data,
  };
}

export function getInformConsentAction(data) {
  return {
    type: "INFORM_CONSENT",
    payload: data,
  };
}

export function getInformConsentSuccessAction(data) {
  return {
    type: "INFORM_CONSENT_SUCCESS",
    payload: data,
  };
}

export function bookAppointmentFailedAction(message) {
  return {
    type: "BOOKAPPOINTMENT_FAILED_ACTION",
    payload: message,
  };
}

export function getTotalPendingAppointmentAction(payload) {
  return {
    type: "GET_PENDING_APPOINTMENTS",
    payload: payload,
  };
}

export function getTotalPendingClientAppointmentAction(payload) {
  return {
    type: "GET_PENDING_CLIENT_APPOINTMENTS",
    payload: payload,
  };
}
export function setTotalPendingAppointmentAction(payload) {
  return {
    type: "SET_PENDING_APPOINTMENTS_LIST",
    payload: payload,
  };
}

export function setTotalPendingClientAppointmentAction(payload) {
  return {
    type: "SET_PENDING_CLIENT_APPOINTMENTS_LIST",
    payload: payload,
  };
}

export function setSignupData(value) {
  return {
    type: "SET_SIGNUP_DATA",
    payload: value,
  };
}

export function setLoginUserId(value) {
  return {
    type: "SET_LOGIN_USER_ID",
    payload: value,
  };
}

export function setLoadingToggle(value) {
  return {
    type: "LOADING_TOGGLE_ACTION",
    payload: value,
  };
}

export function setFirstTimeLogin(value) {
  return {
    type: "SET_FIRST_TIME_LOGIN",
    payload: value,
  };
}

export function setForgetPasswordStatus(value) {
  return {
    type: "SET_FORGET_PASSWORD_STATUS",
    payload: value,
  };
}

export function dashBordPlanAction(payload) {
  console.log("dashbord...", payload);
  return {
    type: "DASHBORD_PLAN",
    payload: payload,
  };
}

export function dashBordSuccessAction(data) {
  return {
    type: "DASHBORD_SUCCESS_ACTION",
    payload: data,
  };
}

export function dashBordFailedAction(msg) {
  return {
    type: "DASHBORD_FAILED_ACTION",
    payload: msg,
  };
}

export function setAutoDebitAction(payload) {
  console.log("data...", payload);
  return {
    type: "SET_AUTODEBIT",
    payload: payload,
  };
}

export function paymentCheckout(value) {
  console.log("value...", value);
  return {
    type: "PAYMENT_CHECKOUT_START",
    payload: value,
  };
}

export function paymentCheckoutSuccess(value) {
  return {
    type: "PAYMENT_CHECKOUT_SUCCESS",
    payload: value,
  };
}

export function paymentCheckoutError(value) {
  return {
    type: "PAYMENT_CHECKOUT_ERROR",
    payload: value,
  };
}

export function purchaseDashBordPlan(data) {
  console.log("value...", data);
  return {
    type: "PURCHASE_DASHBORD_PLAN",
    payload: data,
  };
}

export function purchaseDashBordPlanSuccess(data) {
  return {
    type: "PURCHASE_DASHBORD_PLAN_SUCCESS",
    payload: data,
  };
}

export function purchaseDashBordPlanError(err) {
  return {
    type: "PURCHASE_DASHBORD_PLAN_ERROR",
    payload: err,
  };
}

export function planIdAction(payload) {
  console.log("data...", payload);
  return {
    type: "SET_PLAN_ID",
    payload: payload,
  };
}

export function serviceIdAction(payload) {
  console.log("data...", payload);
  return {
    type: "SERVICE_ID",
    payload: payload,
  };
}

export function isDashBordPurchaseAction(payload) {
  console.log("data...", payload);
  return {
    type: "IS_DASHBORD_PURCHASE",
    payload: payload,
  };
}

export function isDashBordAotoDebitAction(payload) {
  console.log("data...", payload);
  return {
    type: "IS_DASHBORD_AUTO_DEBIT",
    payload: payload,
  };
}

export function sessionIdAction(payload) {
  console.log("data...", payload);
  return {
    type: "SESSION_ID",
    payload: payload,
  };
}

export function intervalAction(payload) {
  console.log("data...", payload);
  return {
    type: "SET_INTERVAL",
    payload: payload,
  };
}

export function getPlanAction(payload) {
  console.log("data...hello", payload);
  return {
    type: "GET_PLAN_ACTION",
    payload: payload,
  };
}

export function getClientPlanAction(payload) {
  console.log("data...hello", payload);
  return {
    type: "GET_CLIENT_PLAN_ACTION",
    payload: payload,
  };
}
export function getPainListAction(data) {
  return {
    type: "GET_PAINLIST_ACTION",
    payload: data,
  };
}
export function getPainListSuccessAction(data) {
  return {
    type: "GET_PAINLIST_SUCCESS_ACTION",
    payload: data,
  };
}

export function getAllPlanAction(payload) {
  console.log("data...hello", payload);
  return {
    type: "GET_ALL_PLAN_ACTION",
    payload: payload,
  };
}
export function getAllPainListAction(data) {
  return {
    type: "GET_ALL_PAINLIST_ACTION",
    payload: data,
  };
}
export function getAllPainListSuccessAction(data) {
  return {
    type: "GET_ALL_PAINLIST_SUCCESS_ACTION",
    payload: data,
  };
}

export function getPlanSuccessAction(data) {
  return {
    type: "GET_PLAN_SUCCESS_ACTION",
    payload: data,
  };
}

export function getPlanErrorAction(msg) {
  return {
    type: "GET_PLAN_FAILED_ACTION",
    payload: msg,
  };
}
export function getEquipmentListAction(payload) {
  return {
    type: "EQUIPMENT_LIST",
    payload: payload,
  };
}
export function getEquipmentListSuccess(payload) {
  return {
    type: "EQUIPMENT_LIST_SUCCESS",
    payload: payload,
  };
}
export function getEquipmentListError(payload) {
  return {
    type: "EQUIPMENT_LIST_ERROR",
    payload: payload,
  };
}
export function findOneUserAction(data) {
  return {
    type: "FIND_ONE_USER_ACTION",
    payload: data,
  };
}

export function findOneUserSuccessAction(data) {
  return {
    type: "FIND_ONE_USER_SUCCESS_ACTION",
    payload: data,
  };
}

export function findOneUserErrorAction(data) {
  return {
    type: "FIND_ONE_USER_ERROR_ACTION",
    payload: data,
  };
}

export function findPaymentMethodAction(data) {
  console.log("action..", data);
  return {
    type: "FIND_PAYMENT_METHOD_ACTION",
    payload: data,
  };
}

export function findPaymentMethodSuccessAction(data) {
  return {
    type: "FIND_PAYMENT_METHOD_SUCCESS_ACTION",
    payload: data,
  };
}

export function findPaymentMethodErrorAction(data) {
  return {
    type: "FIND_PAYMENT_METHOD_ERROR_ACTION",
    payload: data,
  };
}

export function painListAction(data) {
  return {
    type: "PAINLIST_ACTION",
    payload: data,
  };
}

export function painListSuccessAction(data) {
  return {
    type: "PAIN_LIST_SUCCESS_ACTION",
    payload: data,
  };
}

export function painListErrorAction(data) {
  return {
    type: "PAIN_LIST_ERROR_ACTION",
    payload: data,
  };
}

export function selectedPainListAction(data) {
  return {
    type: "SELECTED_PAINLIST_ACTION",
    payload: data,
  };
}

export function selectedPainListSuccessAction(data) {
  return {
    type: "SELECTED_PAIN_LIST_SUCCESS_ACTION",
    payload: data,
  };
}

export function selectedPainListErrorAction(data) {
  return {
    type: "SELECTED_PAIN_LIST_ERROR_ACTION",
    payload: data,
  };
}

export function painListTypeAction(data) {
  console.log("action..", data);
  return {
    type: "PAINLIST_TYPE_ACTION",
    payload: data,
  };
}

export function painListTypeSuccessAction(data) {
  return {
    type: "PAIN_LIST_TYPE_SUCCESS_ACTION",
    payload: data,
  };
}

export function painListTypeErrorAction(data) {
  return {
    type: "PAIN_LIST_TYPE_ERROR_ACTION",
    payload: data,
  };
}

export function deleteDailyPaineAction(data) {
  console.log("action..", data);
  return {
    type: "DELETE_DAILY_PAIN_ACTION",
    payload: data,
  };
}

export function deleteDailyPainSuccessAction(data) {
  return {
    type: "DELETE_DAILY_PAIN_SUCCESS_ACTION",
    payload: data,
  };
}

export function deleteDailyPainErrorAction(data) {
  return {
    type: "DELETE_DAILY_PAIN_ERROR_ACTION",
    payload: data,
  };
}

export function deletePainAction(data) {
  console.log("action..", data);
  return {
    type: "DELETE_PAIN_ACTION",
    payload: data,
  };
}

export function reportListAction(data) {
  return {
    type: "GET_REPORTS_ACTION",
    payload: data,
  };
}

export function deletePainSuccessAction(data) {
  return {
    type: "DELETE_PAIN_SUCCESS_ACTION",
    payload: data,
  };
}

export function deletePainErrorAction(data) {
  return {
    type: "DELETE_PAIN_ERROR_ACTION",
    payload: data,
  };
}
export function reportListSuccessAction(data) {
  return {
    type: "GET_REPORT_SUCCESS_ACTION",
    payload: data,
  };
}

export function reportListErrorAction(data) {
  return {
    type: "GET_REPORT_ERROR_ACTION",
    payload: data,
  };
}

export function deleteLabReport(data) {
  return {
    type: "DELETE_LAB_REPORT",
    payload: data,
  };
}

export function uploadlabreport(data) {
  return {
    type: "UPLOAD_LAB_REPORT",
    payload: data,
  };
}

export function getpatientLetestAppointment(data) {
  console.log("datas--", data);

  return {
    type: "PATIENT_LETEST_APPOINTMENT",
    payload: data,
  };
}

export function setLabReportId(data) {
  return {
    type: "SET_LAB_REPORT_ID",
    payload: data,
  };
}

export function getSingleLabReport(data) {
  return {
    type: "GET_SINGLE_LAB_REPORT",
    payload: data,
  };
}

export function singleLabReportSuccess(data) {
  return {
    type: "SINGLE_LAB_SUCCESS_ACTION",
    payload: data,
  };
}
export function purchasePackege(data) {
  console.log("data", data);
  return {
    type: "GET_PHOTO_THERAPHI_PACKEGES",
    payload: data,
  };
}
export function getPurchaseSuccessAction(data) {
  return {
    type: "GET_PURCHASE_THERAPHI_SUCCESS_ACTION",
    payload: data,
  };
}

export function UploadReportToast() {
  return {
    type: "UPLOAD_REPORT_TOAST",
  };
}

export function getSearchPatient(data) {
  return {
    type: "GET_SEARCH_PATIENT",
    payload: data,
  };
}

export function getSearchPatientsuccess(data) {
  return {
    type: "GET_SEARCH_PATIENT_SUCCESS",
    payload: data,
  };
}
export function getSearchDoctorsPatient(data) {
  return {
    type: "GET_SEARCH_DOCTOR_PATIENT",
    payload: data,
  };
}

export function getSearchDoctorsPatientsuccess(data) {
  return {
    type: "GET_SEARCH_PATIENT_DOCTOR_SUCCESS",
    payload: data,
  };
}

export function patientsoapdata(data) {
  return {
    type: "PATIENT_SOAP_DATA",
    payload: data,
  };
}
export function patientClientIntake(data) {
  return {
    type: "PATIENT_CLIENT_INTAKE_DATA",
    payload: data,
  };
}

export function doctorShopFormDataAction(data) {
  return {
    type: "DOCTOR_SHOP_FORM_DATA_ACTION",
    payload: data,
  };
}

export function doctorShopFormDataErrorAction(data) {
  return {
    type: "DOCTOR_SHOP_FORM_DATA_ERROR_ACTION",
    payload: data,
  };
}

export function getDoctorShopFormDataAction(data) {
  return {
    type: "GET_DOCTOR_SHOP_FORM_DATA_ACTION",
    payload: data,
  };
}

export function getDoctorShopFormDataSuccessAction(data) {
  return {
    type: "GET_DOCTOR_SHOP_FORM_DATA_SUCCESS_ACTION",
    payload: data,
  };
}
//TOGGLE_PATIENT_SOAP_FORM_DETAILS
export function toggleSoapFormAction(data) {
  return {
    type: "TOGGLE_PATIENT_SOAP_FORM_DETAILS",
    payload: data,
  };
}
export function toggleIntakeFormAction(data) {
  return {
    type: "TOGGLE_PATIENT_INTAKE_FORM_DETAILS",
    payload: data,
  };
}
export function turnOffPreviewOfPatientSoapForm() {
  return {
    type: "TURN_OFF_PREVIEW_OF_PATIENT_SOAP_FORM",
  };
}
export function turnOffPreviewOfPatientIntakeForm() {
  return {
    type: "TURN_OFF_PREVIEW_OF_PATIENT_INTAKE_FORM",
  };
}

export function getDoctorShopFormDataErrorAction(data) {
  return {
    type: "GET_DOCTOR_SHOP_FORM_DATA_ERROR_ACTION",
    payload: data,
  };
}

export function setActiveSteps(data) {
  return {
    type: "SET_ACTIVE_STEP",
    payload: data,
  };
}

export function soapFormPatientData(data) {
  return {
    type: "SOPA_FORM_PATIENT_DATA",
    payload: data,
  };
}
export function clientIntakeFormPatientData(data) {
  return {
    type: "CLIENT_INTAKE_FORM_PATIENT_DATA",
    payload: data,
  };
}

export function clientIntakeFormCreate(data) {
  console.log("mediator", data);
  return {
    type: "CLIENT_INTAKE_FORM_CREATE",
    payload: data,
  };
}
export function clientIntakeFormUpdate(data) {
  return {
    type: "CLIENT_INTAKE_FORM_UPDATE",
    payload: data,
  };
}
export function clientIntakeFormGet(data) {
  return {
    type: "CLIENT_INTAKE_FORM_GET",
    payload: data,
  };
}
export function photoStore(data) {
  return {
    type: "PHOTO_THERAPHI_IMAGES",
    payload: data,
  };
}
export function photosData(data) {
  return {
    type: "PHOTO_GET_IMAGES",
    payload: data,
  };
}
export function getphotoErrorAction(data) {
  return {
    type: "GET_PHOTO_THERAPHI_IMAGES_ERROR",
    payload: data,
  };
}
export function getPhotoTheraphi(data) {
  return {
    type: "GET_PHOTO_THERAPHI_IMAGES",
    payload: data,
  };
}
export function getDoctorPhotoTheraphi(data) {
  return {
    type: "GET_DOCTOR_PHOTO_THERAPHI_IMAGES",
    payload: data,
  };
}
export function getPhotoTheraphiSuccessAction(data) {
  return {
    type: "GET_PHOTO_THERAPHI_SUCCESS_ACTION",
    payload: data,
  };
}
export function getDoctorPhotoTheraphiSuccessAction(data) {
  console.log(data, "GET_DOCTOR_PHOTO_THERAPHI_SUCCESS_ACTION");
  return {
    type: "GET_DOCTOR_PHOTO_THERAPHI_SUCCESS_ACTION",
    payload: data,
  };
}

export function getClientIntakeFormDataSuccessAction(data) {
  return {
    type: "GET_CLIENT_INTAKE_FORM_DATA_SUCCESS_ACTION",
    payload: data,
  };
}
export function getClientIntakeFormDataErrorAction(data) {
  return {
    type: "GET_CLIENT_INTAKE_FORM_DATA_ERROR_ACTION",
    payload: data,
  };
}

export function postInquiry(data) {
  return {
    type: "POST_INQUIRY",
    payload: data,
  };
}

export function getPhotoAndVideosAction(data) {
  return {
    type: "GET_PHOTO_AND_VIDEO_ACTION",
    payload: data,
  };
}

export function getPhotoAndVideosSuccessAction(data) {
  return {
    type: "GET_PHOTO_AND_VIDEO_SUCCESS_ACTION",
    payload: data,
  };
}

export function getPhotoAndVideosErrorAction(data) {
  return {
    type: "GET_PHOTO_AND_VIDEO_ERROR_ACTION",
    payload: data,
  };
}

export function getMyPhotosGalleryAction(data) {
  return {
    type: "GET_MY_PHOTOS_GALLERY_ACTION",
    payload: data,
  };
}

export function getMyPhotosGallerySuccessAction(data) {
  return {
    type: "GET_MY_PHOTOS_GALLERY_SUCCESS_ACTION",
    payload: data,
  };
}

export function getMyPhotosGalleryErrorAction(data) {
  return {
    type: "GET_MY_PHOTOS_GALLERY_ERROR_ACTION",
    payload: data,
  };
}

export function getClientPhotosGalleryAction(data) {
  return {
    type: "GET_CLIENT_PHOTOS_GALLERY_ACTION",
    payload: data,
  };
}

export function getClientPhotosGallerySuccessAction(data) {
  return {
    type: "GET_CLIENT_PHOTOS_GALLERY_SUCCESS_ACTION",
    payload: data,
  };
}

export function getClientPhotosGalleryErrorAction(data) {
  return {
    type: "GET_CLIENT_PHOTOS_GALLERY_ERROR_ACTION",
    payload: data,
  };
}

export function deletePhotoAndVideosAction(data) {
  return {
    type: "DELETE_PHOTO_AND_VIDEO_ACTION",
    payload: data,
  };
}

export function deletePhotoAndVideosErrorAction(data) {
  return {
    type: "DELETE_PHOTO_AND_VIDEO_ERROR_ACTION",
    payload: data,
  };
}

export function addPhotoAndVideosAction(data) {
  return {
    type: "ADD_PHOTO_AND_VIDEO_ACTION",
    payload: data,
  };
}

export function addPhotoAndVideosErrorAction(data) {
  return {
    type: "ADD_PHOTO_AND_VIDEO_ERROR_ACTION",
    payload: data,
  };
}

export function addNutritionAction(data) {
  return {
    type: "ADD_NUTRITION_ACTION",
    payload: data,
  };
}

export function addNutritionErrorAction(data) {
  return {
    type: "ADD_NUTRITION_ERROR_ACTION",
    payload: data,
  };
}

export function getNutritionAction(data) {
  return {
    type: "GET_NUTRITION_ACTION",
    payload: data,
  };
}

export function getNutritionSuccessAction(data) {
  return {
    type: "GET_NUTRITION_SUCCESS_ACTION",
    payload: data,
  };
}

export function getNutritionErrorAction(data) {
  return {
    type: "GET_NUTRITION_ERROR_ACTION",
    payload: data,
  };
}

export function deleteNutritionAction(data) {
  return {
    type: "DELETE_NUTRITION_ACTION",
    payload: data,
  };
}

export function deleteNutritionErrorAction(data) {
  return {
    type: "DELETE_NUTRITION_ERROR_ACTION",
    payload: data,
  };
}

export function getAllDoctorsAction(data) {
  return {
    type: "GET_ALL_DOCTORS",
    payload: data,
  };
}

export function getSearchedDoctorsAction(data) {
  return {
    type: "GET_SEARCHED_DOCTORS",
    payload: data,
  };
}

export function currentChatChangeUser(data) {
  return {
    type: "CURR_CHAT_CHANGE_USER",
    payload: data,
  };
}

export function CHAT_ACTIVE(data) {
  return {
    type: "CHAT_ACTIVE",
    payload: data,
  };
}

export function getChartDetailsAction(data) {
  return {
    type: "GET_CHART_DETAILS_ACTION",
    payload: data,
  };
}

export function getChartDetailSuccessAction(data) {
  return {
    type: "GET_CHART_DETAIL_SUCCESS_ACTION",
    payload: data,
  };
}

export function getChartDetailErrorAction(data) {
  return {
    type: "GET_CHART_DETAIL_ERROR_ACTION",
    payload: data,
  };
}

export function purchaseEducationProductAction(data) {
  return {
    type: "PURCHASE_EDUCATION_PRODUCT_ACTION",
    payload: data,
  };
}

export function purchaseEducationProductErrorAction(data) {
  return {
    type: "PURCHASE_EDUCATION_PRODUCT_ERROR_ACTION",
    payload: data,
  };
}

export function getPurchaseEducationProductAction(data) {
  return {
    type: "GET_PURCHASE_EDUCATION_PRODUCT_ACTION",
    payload: data,
  };
}

export function getPurchaseEducationProductSuccessAction(data) {
  return {
    type: "GET_PURCHASE_EDUCATION_PRODUCT_SUCCESS_ACTION",
    payload: data,
  };
}

export function getPurchaseEducationProductErrorAction(data) {
  return {
    type: "GET_PURCHASE_EDUCATION_PRODUCT_ERROR_ACTION",
    payload: data,
  };
}
export function getPurchasedEducationProductAction(data) {
  return {
    type: "GET_PURCHASED_EDUCATION_PRODUCT_ACTION",
    payload: data,
  };
}

export function getPurchasedEducationProductSuccessAction(data) {
  return {
    type: "GET_PURCHASED_EDUCATION_PRODUCT_SUCCESS_ACTION",
    payload: data,
  };
}

export function purchasedEducationProductCountAction(data) {
  return {
    type: "GET_PURCHASED_EDUCATION_PRODUCT_COUNT_SUCCESS_ACTION",
    payload: data,
  };
}

export function getDoctorSlotSuccessAction(data) {
  return {
    type: "GET_DOCTOR_SLOT_SUCCESS_ACTION",
    payload: data,
  };
}

export function getDoctorSlotDetailSuccessAction(data) {
  return {
    type: "GET_DOCTOR_SLOT_DETAIL_SUCCESS_ACTION",
    payload: data,
  };
}

export function getPurchasedEducationProductErrorAction(data) {
  return {
    type: "GET_PURCHASED_EDUCATION_PRODUCT_ERROR_ACTION",
    payload: data,
  };
}

export function doctoSlotData(data) {
  console.log("doctor id", data);
  return {
    type: "DOCTOR_SLOT_DATA",
    payload: data,
  };
}

export function doctoSlotDetail(data) {
  console.log("doctor id", data);
  return {
    type: "DOCTOR_SLOT_DETAIL",
    payload: data,
  };
}

export function bookedAppointmentDetail(data) {
  console.log("doctor id", data);
  return {
    type: "BOOKED_APPOINTMENT_DETAIL",
    payload: data,
  };
}

export function patientBookAppointment(data) {
  console.log("patient_id", data);
  return {
    type: "PATIENT_BOOK_APPOINTMENT",
    payload: data,
  };
}

export function createEventAction(data) {
  console.log("doctor_id", data);
  return {
    type: "DOCTOR_CREATE_EVENT",
    payload: data,
  };
}

export function eventListAction(data) {
  return {
    type: "EVENT_List",
    payload: data,
  };
}

export function getUpcomingEventListAction(data) {
  return {
    type: "EVENT_LIST_ACTION",
    payload: data,
  };
}

export function doctorBookedAppointment(data) {
  console.log("doctorId", data);
  return {
    type: "DOCTOR_BOOKED_APPOINTMENT",
    payload: data,
  };
}

export function confirmedBookAppointment() {
  console.log("Booked");
  return {
    type: "BOOK_APPOINTMENT_CONFIRMED_ACTION",
  };
}

export function confirmAppointmentSuccessAction() {
  return {
    type: "DOCTOR_BOOK_APPOINTMENT_CONFIRMED_ACTION",
  };
}

export function confirmedCreateEventAction() {
  console.log("Create");
  return {
    type: "CREATE_EVENT_CONFIRMED_ACTION",
  };
}

export function patientPurchaseServiceList(data) {
  console.log("patient id", data);
  return {
    type: "PATIENT_PURCHASE_SERVICE_LIST",
    payload: data,
  };
}

export function letestAppointmentDetail(data) {
  console.log("patient", data);
  return {
    type: "PATIENT_LAST_APPOINTMENT_DETAIL",
    payload: data,
  };
}

export function getPurchaseServiceListSuccessAction(data) {
  return {
    type: "GET_PURCHASE_SERVICE_LIST_SUCCESS_ACTION",
    payload: data,
  };
}

export function getWorkHistoryListSuccessAction(data) {
  return {
    type: "GET_WORK_HISTORY_LIST_SUCCESS_ACTION",
    payload: data,
  };
}

export function getPatientRecordListSuccessAction(data) {
  return {
    type: "GET_PATIENT_RECORDS_LIST_SUCCESS_ACTION",
    payload: data,
  };
}

export function getUpcomingClientListSuccessAction(data) {
  return {
    type: "GET_UPCOMING_CLIENT_LIST_SUCCESS_ACTION",
    payload: data,
  };
}

export function getUpcomingEventListSuccessAction(data) {
  return {
    type: "GET_UPCOMING_EVENT_LIST_SUCCESS_ACTION",
    payload: data,
  };
}

export function getEventListSuccessAction(data) {
  return {
    type: "GET_EVENT_LIST_SUCCESS_ACTION",
    payload: data,
  };
}

export function getDoctorSoapNotesListSuccessAction(data) {
  return {
    type: "GET_DOCTOR_SOAP_NOTES_SUCCESS_ACTION",
    payload: data,
  };
}

export function confirmAppointmentAction(data) {
  return {
    type: "CONFIRM_APPOINTMENT_ACTION",
    payload: data,
  };
}

export function confirmedDoctorBookedAppointmentList(data) {
  return {
    type: "DOCTOR_BOOKED_APPOINTMENT_LIST_SUCCESS_ACTION",
    payload: data,
  };
}

export function PatientCancelAppointmentSuccessAction(data) {
  return {
    type: "PATIENT_CANCEL_APPOINTMENT_SUCCESS_ACTION",
    payload: data,
  };
}

export function patientCancelAppointment(data) {
  console.log("datas--", data);
  return {
    type: "PATIENT_CANCEL_APPOINTMENT_ACTION",
    payload: data,
  };
}
export function confirmedDoctorBookedAppointmentDetail(data) {
  return {
    type: "DOCTOR_BOOKED_APPOINTMENT_DETAIL_SUCCESS_ACTION",
    payload: data,
  };
}

export function getWorkHistoryAction(payload) {
  console.log("work action", payload);
  return {
    type: "GET_WORK_HISTORY_LIST",
    payload: payload,
  };
}

export function getPatientRecordsAction(payload) {
  console.log("patientRecordsaction", payload);
  return {
    type: "GET_PATIENT_RECORDS_LIST",
    payload: payload,
  };
}

export function getSoapFormDetailsAction(payload) {
  console.log("getSoapFormDetailsAction payload", payload);
  return {
    type: "GET_PATIENT_SOAP_FORM_DETAILS",
    payload: payload,
  };
}

export function getIntakeFormDetailsAction(payload) {
  return {
    type: "GET_PATIENT_INTAKE_FORM_DETAILS",
    payload: payload,
  };
}

export function getDoctorSoapFormListAction(payload) {
  console.log("soap", payload);
  return {
    type: "GET_DOCTOR_SOAP_FORM_LIST",
    payload: payload,
  };
}

export function setGraphShowAction(payload) {
  return {
    type: "SET_GRAPH_SHOW_STATUS",
    payload: payload,
  };
}

export function setUpcommingAppointments(payload) {
  return {
    type: "SET_UPCOMMING_APPOINTMENTS",
    payload: payload,
  };
}

export function setUpcommingAppointmentsPatient(payload) {
  return {
    type: "SET_UPCOMMING_APPOINTMENTS_PATIENT",
    payload: payload,
  };
}

export function setDoctorSlots(payload) {
  return {
    type: "SET_DOCTOR_SLOTS",
    payload: payload,
  };
}

export function CHECK_VIDEO_THREAPY_BALANCE(payload) {
  return {
    type: "CHECK_VIDEO_THREAPY_BALANCE",
    payload: payload,
  };
}
export function setUpcomingClient(payload) {
  return {
    type: "SET_UPCOMING_CLIENT_SUCCESS_ACTION",
    payload: payload,
  };
}

export function CHECK_VIDEO_THREAPY_BALANCE_CONFIRM(payload) {
  return {
    type: "CHECK_VIDEO_THREAPY_BALANCE_CONFIRM",
    payload: payload,
  };
}
export function setUpcomingTotalAppointment(payload) {
  return {
    type: "SET_UPCOMING_TOTAL_APPOINTMENT_SUCCESS_ACTION",
    payload: payload,
  };
}

export function setCancelAppointment(payload) {
  return {
    type: "SET_CANCEL_APPOINTMENT_STATUS",
    payload: payload,
  };
}

export function setUpcomingClientAppointmentDate(payload) {
  return {
    type: "SET_UPCOMING_CLIENT_APPOINTMENT_DATE",
    payload: payload,
  };
}
export function setPatientUpcomingAppointmentDate(payload) {
  return {
    type: "SET_PATIENT_UPCOMING_APPOINTMENT_DATE",
    payload: payload,
  };
}

export function upcomingClientAction(payload) {
  return {
    type: "UPCOMING_CLIENT_LIST",
    payload: payload,
  };
}

export function upcomingTotalAppointmentAction(payload) {
  return {
    type: "UPCOMING_TOTAL_APPOINTMENT_LIST",
    payload: payload,
  };
}

export function getUpcomingClientsAction(payload) {
  return {
    type: "UPCOMING_CLIENT_LIST_ACTION",
    payload: payload,
  };
}

export function deniedAppointmentSuccessAction() {
  return {
    type: "DOCTOR_DENIED_APPOINTMENT_CONFIRMED_ACTION",
    payload: payload,
  };
}

export function updateWorkHistoryAction(payload) {
  return {
    type: "UPDATE_WORK_HISTORY_ACTION",
    payload: payload,
  };
}

export function updateWorkHistoryErrorAction(payload) {
  return {
    type: "UPDATE_WORK_HISTORY_ERROR",
    payload: payload,
  };
}

export function updateWorkHistoryMessage(payload) {
  return {
    type: "UPDATE_WORK_HISTORY_MESSAGE",
    payload: payload,
  };
}

export function deletePaymentMethodAction(payload) {
  return {
    type: "DELETE_PAYMENT_METHOD_ACTION",
    payload: payload,
  };
}

export function deletePaymentMethodErrorAction(payload) {
  return {
    type: "DELETE_PAYMENT_METHOD_ERROR_ACTION",
    payload: payload,
  };
}

export function deletePaymentMethodMessage(payload) {
  return {
    type: "DELETE_PAYMENT_METHOD_MESSAGE",
    payload: payload,
  };
}

export function getPainListType(payload) {
  return {
    type: "GET_PAINLIST_TYPE",
    payload: payload,
  };
}

export function getPainListTypeSuccess(payload) {
  return {
    type: "GET_PAINLIST_TYPE_SUCCESS",
    payload: payload,
  };
}

export function getPainListTypeError(payload) {
  return {
    type: "GET_PAINLIST_TYPE_ERROR",
    payload: payload,
  };
}

export function findOneInformConsent(payload) {
  return {
    type: "FIND_ONE_INFORM_CONSENT",
    payload: payload,
  };
}
export function findOneInformConsentSuccess(payload) {
  return {
    type: "FIND_ONE_INFORM_CONSENT_SUCCESS",
    payload: payload,
  };
}
export function findOneInformConsentError(payload) {
  return {
    type: "FIND_ONE_INFORM_CONSENT_ERROR",
    payload: payload,
  };
}

export function updateInformConsent(payload) {
  return {
    type: "UPDATE_INFORM_CONSENT",
    payload: payload,
  };
}
export function updateInformConsentError(payload) {
  return {
    type: "UPDATE_INFORM_CONSENT_ERROR",
    payload: payload,
  };
}

export function videoMessageTherapyAction(payload) {
  return {
    type: "VIDEO_MESSAGE_THERAPY_ACTION",
    payload: payload,
  };
}
export function videoMessageTherapySuccess(payload) {
  return {
    type: "VIDEO_MESSAGE_THERAPY_SUCCESS",
    payload: payload,
  };
}
export function videoMessageTherapyError(payload) {
  return {
    type: "VIDEO_MESSAGE_THERAPY_ERROR",
    payload: payload,
  };
}

export function clientVideoMessageTherapyAction(payload) {
  return {
    type: "CLIENT_VIDEO_MESSAGE_THERAPY_ACTION",
    payload: payload,
  };
}
export function clientVideoMessageTherapySuccess(payload) {
  return {
    type: "CLIENT_VIDEO_MESSAGE_THERAPY_SUCCESS",
    payload: payload,
  };
}
export function clientVideoMessageTherapyError(payload) {
  return {
    type: "CLIENT_VIDEO_MESSAGE_THERAPY_ERROR",
    payload: payload,
  };
}

export function informConsentStatus(payload) {
  return {
    type: "INFORM_CONSENT_STATUS",
    payload: payload,
  };
}

export function informConsentMessage(payload) {
  return {
    type: "INFORM_CONSENT_MESSAGE",
    payload: payload,
  };
}

export function SCREEN_RECORDING_WITH_VIDEO(payload) {
  return {
    type: "SCREEN_RECORDING_WITH_VIDEO",
    payload: payload,
  };
}

export function SET_RECORDING_MODEL(payload) {
  return {
    type: "SET_RECORDING_MODEL",
    payload: payload,
  };
}

export function SET_RECORDING_CHAT_ID(payload) {
  return {
    type: "SET_RECORDING_CHAT_ID",
    payload: payload,
  };
}
export function SET_RECORDING_USER_DETAILS(payload) {
  return {
    type: "SET_RECORDING_USER_DETAILS",
    payload: payload,
  };
}
export function stepIndexSoapForm(payload) {
  return {
    type: "STEP_INDEX_SOAP_FORM",
    payload: payload,
  };
}

export function GET_DOCTOR_BOOKINGS(data) {
  return {
    type: "GET_DOCTOR_BOOKINGS",
    payload: data,
  };
}
export function GET_DOCTOR_BOOKINGS_SUCCESS(data) {
  return {
    type: "GET_DOCTOR_BOOKINGS_SUCCESS",
    payload: data,
  };
}
export function SET_VMT_ACTICE_SESSION(data) {
  return {
    type: "SET_VMT_ACTICE_SESSION",
    payload: data,
  };
}

export function getPTCount(payload) {
  return {
    type: "GET_PT_COUNT",
    payload: payload,
  };
}
export function getPTCountSuccess(payload) {
  return {
    type: "GET_PT_COUNT_SUCCESS",
    payload: payload,
  };
}

export function SET_RECORDING_TYPE(data) {
  return {
    type: "SET_RECORDING_TYPE",
    payload: data,
  };
}
export function setLabsTab(payload) {
  return {
    type: "SET_LABS_TAB",
    payload: payload,
  };
}

export function SET_CALENDAR_SHEDULE(payload) {
  return {
    type: "SET_CALENDAR_SHEDULE",
    payload: payload,
  };
}

export function GET_CALENDER_SHEDULE_LIST(payload) {
  return {
    type: "GET_CALENDER_SHEDULE_LIST",
    payload: payload,
  };
}

export function GET_CALENDAR_SHEDULE_LIST_SUCCESS(payload) {
  return {
    type: "GET_CALENDAR_SHEDULE_LIST_SUCCESS",
    payload: payload,
  };
}

export function SET_BOOKING_SERVICE_AND_PLAN(payload) {
  return {
    type: "SET_BOOKING_SERVICE_AND_PLAN",
    payload: payload,
  };
}
export function BOOKED_APPOINTMENT_LIST_BY_DATE(payload) {
  return {
    type: "BOOKED_APPOINTMENT_LIST_BY_DATE",
    payload: payload,
  };
}
export function SET_BOOKING_TIMESLOT(payload) {
  return {
    type: "SET_BOOKING_TIMESLOT",
    payload: payload,
  };
}
export function SET_SELECTED_BOOKING_APT_DOC(payload) {
  return {
    type: "SET_SELECTED_BOOKING_APT_DOC",
    payload: payload,
  };
}
export function DELETE_CALENDAR_SHEDULE(payload) {
  return {
    type: "DELETE_CALENDAR_SHEDULE",
    payload: payload,
  };
}

export function CLIENT_PURCHASE_SERVICE_LIST_ACTION(payload) {
  return {
    type: "CLIENT_PURCHASE_SERVICE_LIST_ACTION",
    payload: payload,
  };
}
export function CLIENT_PURCHASE_SERVICE_LIST_SUCCESS(payload) {
  return {
    type: "CLIENT_PURCHASE_SERVICE_LIST_SUCCESS",
    payload: payload,
  };
}
export function DOCTOR_PURCHASE_SERVICE_LIST_ACTION(payload) {
  return {
    type: "DOCTOR_PURCHASE_SERVICE_LIST_ACTION",
    payload: payload,
  };
}
export function DOCTOR_PURCHASE_SERVICE_LIST_SUCCESS(payload) {
  return {
    type: "DOCTOR_PURCHASE_SERVICE_LIST_SUCCESS",
    payload: payload,
  };
}
export function EDUCATION_VIDEOS_LIST_ACTION(payload) {
  return {
    type: "EDUCATION_VIDEOS_LIST_ACTION",
    payload: payload,
  };
}
export function EDUCATION_VIDEOS_LIST_SUCCESS(payload) {
  return {
    type: "EDUCATION_VIDEOS_LIST_SUCCESS",
    payload: payload,
  };
}
export function FOUNDATION_FUNCTION_VIDEOS_LIST_ACTION(payload) {
  return {
    type: "FOUNDATION_FUNCTION_VIDEOS_LIST_ACTION",
    payload: payload,
  };
}
export function FOUNDATION_FUNCTION_VIDEOS_LIST_SUCCESS(payload) {
  return {
    type: "FOUNDATION_FUNCTION_VIDEOS_LIST_SUCCESS",
    payload: payload,
  };
}

export function LIVE_VIDEO_AND_INPERSON_VIDEO_LIST_ACTION(payload) {
  return {
    type: "LIVE_VIDEO_AND_INPERSON_VIDEO_LIST_ACTION",
    payload: payload,
  };
}

export function LIVE_VIDEO_AND_INPERSON_VIDEO_LIST_SUCCESS(payload) {
  return {
    type: "LIVE_VIDEO_AND_INPERSON_VIDEO_LIST_SUCCESS",
    payload: payload,
  };
}

export function LIVE_VIDEO_AND_INPERSON_PURCHASED_LIST_ACTION(payload) {
  return {
    type: "LIVE_VIDEO_AND_INPERSON_PURCHASED_LIST_ACTION",
    payload: payload,
  };
}

export function LIVE_VIDEO_AND_INPERSON_PURCHASED_LIST_SUCCESS(payload) {
  return {
    type: "LIVE_VIDEO_AND_INPERSON_PURCHASED_LIST_SUCCESS",
    payload: payload,
  };
}

export function VMT_VIDEO_LIST_ACTION(payload) {
  return {
    type: "VMT_VIDEO_LIST_ACTION",
    payload: payload,
  };
}

export function VMT_VIDEO_LIST_SUCCESS(payload) {
  return {
    type: "VMT_VIDEO_LIST_SUCCESS",
    payload: payload,
  };
}

export function VMT_PURCHASED_VIDEO_LIST_ACTION(payload) {
  return {
    type: "VMT_PURCHASED_VIDEO_LIST_ACTION",
    payload: payload,
  };
}

export function VMT_PURCHASED_VIDEO_LIST_SUCCESS(payload) {
  return {
    type: "VMT_PURCHASED_VIDEO_LIST_SUCCESS",
    payload: payload,
  };
}

export function VMT_PURCHASED_VIDEO_DETAILS(payload) {
  return {
    type: "VMT_PURCHASED_VIDEO_DETAILS",
    payload: payload,
  };
}

export function CLEAR_VMT_PURCHASED_VIDEO_DETAILS() {
  return {
    type: "CLEAR_VMT_PURCHASED_VIDEO_DETAILS",
  };
}

export function PT_GRANDE_LIST_ACTION(payload) {
  return {
    type: "PT_GRANDE_LIST_ACTION",
    payload: payload,
  };
}

export function PT_GRANDE_LIST_SUCCESS(payload) {
  return {
    type: "PT_GRANDE_LIST_SUCCESS",
    payload: payload,
  };
}

export function PT_PURCHASED_DETAILS(payload) {
  return {
    type: "PT_PURCHASED_DETAILS",
    payload: payload,
  };
}

export function CLEAR_PT_PURCHASED_DETAILS() {
  return {
    type: "CLEAR_PT_PURCHASED_DETAILS",
  };
}

export function EDUCATION_EVENT_LIST_ACTION(payload) {
  return {
    type: "EDUCATION_EVENT_LIST_ACTION",
    payload: payload,
  };
}
export function EDUCATION_EVENT_LIST_SUCCESS(payload) {
  return {
    type: "EDUCATION_EVENT_LIST_SUCCESS",
    payload: payload,
  };
}

export function ON_DEMAND_FOUNDATION_VIDEO_LIST_ACTION(payload) {
  return {
    type: "ON_DEMAND_FOUNDATION_VIDEO_LIST_ACTION",
    payload: payload,
  };
}
export function ON_DEMAND_FOUNDATION_VIDEO_LIST_SUCCESS(payload) {
  return {
    type: "ON_DEMAND_FOUNDATION_VIDEO_LIST_SUCCESS",
    payload: payload,
  };
}

export function ON_DEMAND_FOUNDATION_PURCHASED_LIST_ACTION(payload) {
  return {
    type: "ON_DEMAND_FOUNDATION_PURCHASED_LIST_ACTION",
    payload: payload,
  };
}
export function ON_DEMAND_FOUNDATION_PURCHASED_LIST_SUCCESS(payload) {
  return {
    type: "ON_DEMAND_FOUNDATION_PURCHASED_LIST_SUCCESS",
    payload: payload,
  };
}
export function SET_MY_EDUCATION_TAB(payload) {
  return {
    type: "SET_MY_EDUCATION_TAB",
    payload: payload,
  };
}
