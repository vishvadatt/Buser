import { REHYDRATE } from "redux-persist";
// import { successMessage } from "../selectors/selector";
import { useDispatch, useSelector } from "react-redux";

const initialState = {
  auth: {
    email: "",
    idToken: "",
    isDashBoardPlan: [],
    EducationProductList: [],
    userdata: {},
    servicePlan: [],
  },
  signupDetails: {},
  doctorPhotolist: [],
  informedConsentList: [],
  totalConsent: 0,
  informedConsent: {},
  photolistTotalCount: 0,
  doctorPhotolistTotalCount: 0,
  errorMessage: "",
  loginToast: false,
  successMessage: "",
  loginUserData: {},
  loginStatus: false,
  userId: "",
  showLoading: false,
  isForgettingPassword: false,
  firstTimeLogin: false,
  resetPasswordEmail: "",
  termAndCondition: {},
  isVerfied: false,
  latestServicePurchased: null,
  dashBordPlan: [],
  paymentInformation: "",
  // termAndCondition: {},
  // isVerfied: false,
  autodebit: false,
  // paymentInformation: "",
  purchaseDashBord: {},
  setPlanId: "",
  serviceId: "",
  isDashBordPurchase: false,
  isInformedFormFilled: false,
  isDashBordAutoDebit: false,
  isFristProfileUpdate: false,
  loading: false,
  sessionId: "",
  setInterval: "",
  plansData: [],
  painData: [],
  findOneUser: {},
  equipmentsList: [],
  paymentMethods: [],
  painList: [],
  painListType: [],
  selectedPainList: [],
  reportList: [],
  searchpatientlist: [],
  getAllPlans: [],
  doctorShopForm: [],
  patientSoapFormDetail: {
    shouldShowPatientSoapFormDetail: false,
    patientId: "",
  },
  patientIntakeFormDetail: {
    shouldShowPatientIntakeFormDetail: false,
    patientId: "",
  },
  clientIntakeForm: [],
  patientSoapData: {},
  patientClientIntake: {},
  activeStep: 0,
  soapFormPatientData: [],
  clientIntakeFormPatientData: [],
  // patientSoapData: {},
  // activeStep: 0,
  photoAndVideosData: [],
  nutritionData: [],
  getAllDoctors: [],
  getSearchedDoctors: [],
  chartDetails: [],
  photoGalley: [],
  clientPhotoGalley: [],
  currentChatChangeUser: {},
  chatId: null,
  educationProduct: [],
  mypurchasededucationProduct: [],
  mypurchasededucationProductCount: [],
  doctorSlotList: [],
  doctorSlotDetail: [
    {
      _id: "",
      book: "",
      startTime: {
        start: "",
        end: "",
      },
      doctor: [
        {
          _id: "",
          name: "",
          email: "",
        },
      ],
    },
  ],
  //doctorSlotDetail:[],
  myPurchaseServiceList: [
    // {
    //   _id: "",
    //   service: [],
    // },
  ],
  doctorBookedAppointmentList: [],
  doctorBookedAppointmentDetail: [],
  workHistoryList: [],
  patientRecordsList: [],
  doctorSoapNotes: [],
  eventList: [],
  graphShow: false,
  chatActive: false,
  upcommingAppointments: [],
  upcommingAppointmentPatient: [],
  videoTherapyBalance: 0,
  doctorSlots: [],
  deductServiceData: {},
  cancelAppointmet: null,
  upcomingClientList: [],
  pendingAppointmentList: [],
  pendingClientAppointmentList: [],
  doctorUpcomingClientList: [],
  UpcomingEventList: [],
  upcomingClientAppointmentDate: null,
  patientUpcomingAppointmentDate: null,
  patientLetestAppointmentDetail: [],
  painTypeList: [],
  findOneInformConsent: [],
  videoTherapyGallary: [],
  clientVideoTherapyGallary: [],
  informConsentStatus: false,
  screenRecordingWithVideo: false,
  isRecordingModelActive: false,
  recordingChatId: "",
  recordingUserDetails: {},
  stepIndexSoapForm: 0,
  doctorAppointmentBookings: {},
  vmtActiveSession: "",
  pTCount: "",
  labsTabValue: 0,
  screenRecordingType: null,
  calendarSheduleList: [],
  selectedServiceAndPlan: {},
  bookedAppointmentListByDate: [],
  bookingTimeSlot: {},
  selectedAptDoc: "",
  clientAllServiceList: [],
  doctorAllServiceList: [],
  educationVideosList: [],
  foundationFunctionVideosList: [],
  grandeRoundVideoList: [],
  grandeRoundPurchasedVideoList: [],
  grandeRoundVMTVideoList: [],
  grandeRoundPurchasedVMTList: [],
  VMTPurchasedVideoDetails: {},
  grandeRoundPTList: [],
  PTPurchasedDetails: {},
  educationEventList: [],
  onDemandVideoList: [],
  onDemandPurchasedVideoList: [],
  myEducationTab: 0,
};

export function AuthReducer(state = initialState, action) {
  switch (action.type) {
    case "SIGNUP_CONFIRMED_ACTION":
      return {
        ...state,
        errorMessage: "",
        successMessage: "SignUp Successfully",
      };
    case "POPUP_CONFIRMED_ACTION":
      return {
        ...state,
        errorMessage: "",
        successMessage: "SAVED",
      };
    case "PAINDETAIL_CONFIRMED_ACTION":
      return {
        ...state,
        errorMessage: "",
        successMessage: "PAIN DETAILS SAVED",
      };
    case "UPDATE_USER":
      return {
        ...state,
        termAndCondition: action.payload.data,
        isVerfied: action.payload.isVerfied,
        isFristProfileUpdate: action.payload.isFristProfileUpdate,

        auth: {
          ...state.auth,
          userdata: action.payload.userdata,
          isExpiredDate: action.payload.isExpiredDate,
          isDashBordPurchase: action.payload.isDashBordPurchase,
          isPlanExpired: action.payload.isPlanExpired,
          isPlanPurchase: action.payload.isPlanPurchase,
        },
      };
    case "INFORMED_FORM_FILLED":
      return {
        ...state,
        isInformedFormFilled: action.payload.isInformedFormFilled,
      };
    case "LATEST_SERVICE_PURCHASED_SUCCESS":
      return {
        ...state,
        latestServicePurchased: action.payload.latestServicePurchased,
      };
    case "RESET_CONFIRMED_ACTION":
      return {
        ...state,
        errorMessage: "",
        successMessage: "RESET password Successfully",
      };
    case "CHANGEPASSWORD_CONFIRMED_ACTION":
      return {
        ...state,
        errorMessage: "",
        successMessage: "Password Change Successfully",
      };
    case "FORGOT_CONFIRMED_ACTION":
      return {
        ...state,
        errorMessage: "",
        successMessage: "OTP sent Successfully in your e-mail",
      };
    case "FORGOT_PASSWORD":
      return {
        ...state,
        resetPasswordEmail: action.payload.email,
      };

    case "LOGIN_USER":
      return {
        ...state,
        auth: action.payload,
      };

    case "LOGIN_SUCCESS_ACTION":
      return {
        ...state,
        successMessage: "Login Successfully",
        auth: action.payload,
      };

    case "CLEAR_MESSAGE":
      return {
        ...state,
        successMessage: "",
        errorMessage: "",
      };

    case "LOGIN_FAILED_ACTION":
    case "SIGNUP_FAILED_ACTION":
      return {
        ...state,
        errorMessage: action.payload,
        successMessage: "",
      };

    case "BOOK_APPOINTMENT_TOASTER":
      return {
        ...state,
        errorMessage: "You Already Have Appointment at this time",
        successMessage: "",
      };
    case "LOGOUT_ACTION":
      return {
        ...initialState,
        errorMessage: "",
        successMessage: "Logout Successfully",
        auth: {
          email: "",
          idToken: "",
        },
        loginStatus: false,
        isVerfied: false,
        termAndCondition: {},
        painData: [],
        chatActive: false,
      };

    case "SET_SIGNUP_DATA":
      return {
        ...state,
        signupDetails: action.payload,
      };

    case "SET_FIRST_TIME_LOGIN":
      return {
        ...state,
        firstTimeLogin: action.payload,
      };

    case "SET_LOGIN_DATA":
      return {
        ...state,
        loginUserData: action.payload,
      };

    case "SET_LOGIN_STATUS":
      return {
        ...state,
        loginStatus: action.payload,
      };

    case "SET_LOGIN_USER_ID": {
      return {
        ...state,
        userId: action.payload,
      };
    }

    case "INFORM_CONSENT_LIST_SUCCESS": {
      console.log(action.payload, "informedConsentList");
      return {
        ...state,
        informedConsentList: action?.payload?.result,
        totalConsent: action?.payload?.totalCount,
      };
    }
    case "SCREEN_RECORDING_WITH_VIDEO": {
      return {
        ...state,
        screenRecordingWithVideo: action.payload,
      };
    }
    case "SET_RECORDING_MODEL": {
      return {
        ...state,
        isRecordingModelActive: action.payload,
      };
    }
    case "SET_RECORDING_CHAT_ID": {
      return {
        ...state,
        recordingChatId: action.payload,
      };
    }
    case "SET_RECORDING_USER_DETAILS": {
      return {
        ...state,
        recordingUserDetails: action.payload,
      };
    }

    case "INFORM_CONSENT_SUCCESS": {
      console.log(action.payload, "informedConsent.....");
      return {
        ...state,
        informedConsent: action.payload,
      };
    }

    case "LOADING_TOGGLE_ACTION": {
      return {
        ...state,
        showLoading: action.payload,
      };
    }

    case "SET_FORGET_PASSWORD_STATUS": {
      return {
        ...state,
        isForgettingPassword: action.payload,
      };
    }

    case "PAYMENT_CHECKOUT_SUCCESS": {
      return {
        ...state,
        paymentInformation: action.payload,
      };
    }

    case "DASHBORD_SUCCESS_ACTION": {
      return {
        ...state,
        dashBordPlan: action.payload,
      };
    }

    case "SET_AUTODEBIT": {
      return {
        ...state,
        autodebit: action.payload,
      };
    }

    case "PURCHASE_DASHBORD_PLAN_SUCCESS": {
      return {
        ...state,
        purchaseDashBord: action.payload,
      };
    }

    case "SET_PLAN_ID": {
      return {
        ...state,
        setPlanId: action.payload,
      };
    }

    case "SERVICE_ID": {
      return {
        ...state,
        serviceId: action.payload,
      };
    }

    case "IS_DASHBORD_PURCHASE": {
      return {
        ...state,
        isDashBordPurchase: action.payload,
      };
    }

    case "IS_DASHBORD_AUTO_DEBIT": {
      return {
        ...state,
        isDashBordAutoDebit: action.payload,
      };
    }

    case "SESSION_ID": {
      return {
        ...state,
        sessionId: action.payload,
      };
    }

    case "SET_INTERVAL": {
      return {
        ...state,
        setInterval: action.payload,
      };
    }

    case "GET_PLAN_SUCCESS_ACTION": {
      return {
        ...state,
        plansData: action.payload,
      };
    }
    case "GET_PAINLIST_ACTION": {
      return {
        ...state,

        loading: true,
      };
    }
    case "GET_PAINLIST_SUCCESS_ACTION": {
      return {
        ...state,
        painData: action.payload,
        loading: false,
      };
    }

    case "SELECTED_PAIN_LIST_SUCCESS_ACTION": {
      return {
        ...state,
        selectedPainList: action.payload,
      };
    }
    case "EQUIPMENT_LIST_SUCCESS": {
      return {
        ...state,
        equipmentsList: action.payload,
      };
    }
    case "FIND_ONE_USER_SUCCESS_ACTION": {
      return {
        ...state,
        auth: {
          ...state.auth,
          userdata: action.payload,
        },
        // findOneUser : action.payload,
        loading: false,
      };
    }

    case "FIND_PAYMENT_METHOD_SUCCESS_ACTION": {
      return {
        ...state,
        paymentMethods: action.payload,
      };
    }

    // case "PAIN_LIST_SUCCESS_ACTION": {
    //   return {
    //     ...state,
    //     painList: action.payload,
    //   };
    // }
    case "PAIN_LIST_SUCCESS_ACTION": {
      return {
        ...state,
        painList: action.payload,
      };
    }
    case "GET_PHOTO_THERAPHI_SUCCESS_ACTION": {
      return {
        ...state,
        photolist: action.payload.result,
        photolistTotalCount: action.payload.totalCount,
      };
    }

    case "GET_DOCTOR_PHOTO_THERAPHI_SUCCESS_ACTION": {
      console.log(action.payload, "GET_DOCTOR_PHOTO_THERAPHI_SUCCESS_ACTION");
      return {
        ...state,
        doctorPhotolist: action.payload.result,
        doctorPhotolistTotalCount: action.payload.totalCount,
      };
    }

    case "GET_PURCHASE_THERAPHI_SUCCESS_ACTION": {
      return {
        ...state,
        pucheslist: action.payload,
      };
    }
    case "PAIN_LIST_TYPE_SUCCESS_ACTION": {
      return {
        ...state,
        painListType: action.payload,
      };
    }

    case "GET_REPORT_SUCCESS_ACTION": {
      return {
        ...state,
        reportList: action.payload,
      };
    }
    case "GET_WORK_HISTORY_LIST_SUCCESS_ACTION": {
      return {
        ...state,
        workHistoryList: action.payload,
      };
    }
    case "GET_PATIENT_RECORDS_LIST_SUCCESS_ACTION": {
      return {
        ...state,
        patientRecordsList: action.payload,
      };
    }
    case "GET_UPCOMING_CLIENT_LIST_SUCCESS_ACTION": {
      return {
        ...state,
        doctorUpcomingClientList: action.payload,
      };
    }

    case "GET_UPCOMING_EVENT_LIST_SUCCESS_ACTION": {
      return {
        ...state,
        UpcomingEventList: action.payload,
      };
    }

    case "DELETE_REPORT_SUCCESS_ACTION": {
      return {
        ...state,
        report: action.payload,
      };
    }

    case "SET_LAB_REPORT_ID": {
      return {
        ...state,
        labreportId: action.payload,
      };
    }

    // case "GET_SINGLE_LAB_REPORT" : {
    //   return {
    //     ...state,
    //     signlelabreport : action.payload
    //   }
    // }

    case "SINGLE_LAB_SUCCESS_ACTION": {
      return {
        ...state,
        signlelabreport: action.payload,
      };
    }

    case "SET_VBAICHECKBOXES_VALUE": {
      return {
        ...state,
        vBAICheckboxes: action.payload,
      };
    }
    case "UPLOAD_REPORT_TOAST":
      return {
        ...state,
        errorMessage: "",
        successMessage: "Report Added Successfully",
      };
    case "DOCTOR_BOOK_APPOINTMENT_CONFIRMED_ACTION":
      return {
        ...state,
        errorMessage: "",
        successMessage: "Appointment Confirm Successfully",
      };

    case "GET_SEARCH_PATIENT":
      return {
        ...state,
        searchpatient: action.payload,
      };

    case "GET_SEARCH_PATIENT_SUCCESS":
      return {
        ...state,
        searchpatientlist: action.payload,
      };
    case "GET_SEARCH_DOCTOR_PATIENT":
      return {
        ...state,
        searchpatient: action.payload,
      };

    case "GET_SEARCH_PATIENT_DOCTOR_SUCCESS":
      return {
        ...state,
        searchpatientlist: action.payload,
      };
    case "SET_LABS_TAB": {
      return {
        ...state,
        labsTabValue: action.payload,
      };
    }
    case "GET_ALL_PAINLIST_ACTION":
      return {
        ...state,
        getAllPlans: action.payload,
      };
    case "GET_MY_PHOTOS_GALLERY_SUCCESS_ACTION":
      return {
        ...state,
        photoGalley: action.payload,
      };
    case "GET_CLIENT_PHOTOS_GALLERY_SUCCESS_ACTION":
      return {
        ...state,
        clientPhotoGalley: action.payload,
      };
    case "GET_DOCTOR_SHOP_FORM_DATA_SUCCESS_ACTION":
      return {
        ...state,
        doctorShopForm: action.payload,
      };
    case "TOGGLE_PATIENT_SOAP_FORM_DETAILS":
      return {
        ...state,
        patientSoapFormDetail: action.payload,
      };
    case "TURN_OFF_PREVIEW_OF_PATIENT_SOAP_FORM": {
      return {
        ...state,
        doctorShopForm: {},
        patientSoapFormDetail: {
          ...state.patientSoapFormDetail,
          shouldShowPatientSoapFormDetail: false,
        },
      };
    }

    case "TOGGLE_PATIENT_INTAKE_FORM_DETAILS":
      return {
        ...state,
        patientIntakeFormDetail: action.payload,
      };

    case "TURN_OFF_PREVIEW_OF_PATIENT_INTAKE_FORM": {
      return {
        ...state,
        clientIntakeForm: [],
        patientIntakeFormDetail: {
          ...state.patientIntakeFormDetail,
          shouldShowPatientIntakeFormDetail: false,
        },
      };
    }

    case "GET_CLIENT_INTAKE_FORM_DATA_SUCCESS_ACTION":
      return {
        ...state,
        clientIntakeForm: action.payload,
      };

    case "PATIENT_SOAP_DATA":
      return {
        ...state,
        patientSoapData: action.payload,
      };
    case "PATIENT_CLIENT_INTAKE_DATA":
      return {
        ...state,
        patientClientIntake: action.payload,
      };

    case "SET_ACTIVE_STEP":
      return {
        ...state,
        activeStep: action.payload,
      };

    case "SOPA_FORM_PATIENT_DATA":
      return {
        ...state,
        soapFormPatientData: action.payload,
      };
    case "CLIENT_INTAKE_FORM_PATIENT_DATA":
      return {
        ...state,
        clientIntakeFormPatientData: action.payload,
      };

    case "POST_INQUIRY":
      return {
        ...state,
        errorMessage: "",
        successMessage: "Message send Successfully",
      };

    case "GET_PHOTO_AND_VIDEO_SUCCESS_ACTION":
      console.log(action, "Getphotollllllllll");
      return {
        ...state,
        photoAndVideosData: action.payload,
      };

    case "GET_NUTRITION_SUCCESS_ACTION":
      return {
        ...state,
        nutritionData: action.payload,
      };

    case "GET_ALL_DOCTORS":
      return {
        ...state,
        getAllDoctors: action.payload,
      };

    case "GET_SEARCHED_DOCTORS":
      return {
        ...state,
        getSearchedDoctors: action.payload,
      };
    case "GET_CHART_DETAIL_SUCCESS_ACTION":
      return {
        ...state,
        chartDetails: action.payload,
      };

    case "CURR_CHAT_CHANGE_USER":
      return {
        ...state,
        currentChatChangeUser: action?.payload,
        chatId:
          action?.payload?.curUserID > action?.payload?.data?.uid
            ? action?.payload?.curUserID + action?.payload?.data?.uid
            : action?.payload?.data?.uid + action?.payload?.curUserID,
      };

    case "CHAT_ACTIVE":
      return {
        ...state,
        chatActive: action.payload,
      };

    case "GET_PURCHASE_EDUCATION_PRODUCT_SUCCESS_ACTION":
      return {
        ...state,
        educationProduct: action.payload,
      };
    case "GET_PURCHASED_EDUCATION_PRODUCT_SUCCESS_ACTION":
      return {
        ...state,
        mypurchasededucationProduct: action.payload,
      };
    case "GET_PURCHASED_EDUCATION_PRODUCT_COUNT_SUCCESS_ACTION":
      return {
        ...state,
        mypurchasededucationProductCount: action.payload,
      };

    case "GET_DOCTOR_SLOT_SUCCESS_ACTION":
      return {
        ...state,
        doctorSlotList: action.payload,
      };
    case "GET_PURCHASE_SERVICE_LIST_SUCCESS_ACTION":
      return {
        ...state,
        myPurchaseServiceList: action.payload,
      };
    case "GET_DOCTOR_SOAP_NOTES_SUCCESS_ACTION":
      return {
        ...state,
        doctorSoapNotes: action.payload,
      };
    case "GET_DOCTOR_SLOT_DETAIL_SUCCESS_ACTION":
      return {
        ...state,
        doctorSlotDetail: action.payload,
      };
    case "PATIENT_LAST_APPOINTMENT_DETAIL":
      return {
        ...state,
        patientLetestAppointmentDetail: action.payload,
      };
    case "DOCTOR_BOOKED_APPOINTMENT_LIST_SUCCESS_ACTION":
      return {
        ...state,
        doctorBookedAppointmentList: action.payload,
      };
    case "BOOK_APPOINTMENT_CONFIRMED_ACTION":
      return {
        ...state,
        errorMessage: "",
        successMessage: "",
      };
    case "CREATE_EVENT_CONFIRMED_ACTION":
      return {
        ...state,
        errorMessage: "",
        successMessage: "Event Created Successfully",
      };

    case "DOCTOR_DENIED_APPOINTMENT_CONFIRMED_ACTION":
      return {
        ...state,
        errorMessage: "",
        successMessage: "Appointment Denied Successfully",
      };

    case "PATIENT_CANCEL_APPOINTMENT_SUCCESS_ACTION":
      return {
        ...state,
        errorMessage: "",
        successMessage: "Appointment Cancel Successfully",
      };
    case "GET_EVENT_LIST_SUCCESS_ACTION":
      return {
        ...state,
        eventList: action.payload,
      };

    case "SET_UPCOMING_CLIENT_APPOINTMENT_DATE": {
      return {
        ...state,
        upcomingClientAppointmentDate: action.payload,
      };
    }

    case "SET_PATIENT_UPCOMING_APPOINTMENT_DATE": {
      return {
        ...state,
        patientUpcomingAppointmentDate: action.payload,
      };
    }

    case "SET_UPCOMING_CLIENT_SUCCESS_ACTION":
      return {
        ...state,
        upcomingClientList: action.payload,
      };
    case "SET_PENDING_APPOINTMENTS_LIST": {
      return {
        ...state,
        pendingAppointmentList: action.payload,
      };
    }

    case "SET_PENDING_CLIENT_APPOINTMENTS_LIST": {
      return {
        ...state,
        pendingClientAppointmentList: action.payload,
      };
    }
    case "SET_UPCOMING_TOTAL_APPOINTMENT_SUCCESS_ACTION":
      return {
        ...state,
        upcomingTotalAppointmentList: action.payload,
      };

    case "BOOKAPPOINTMENT_FAILED_ACTION":
      return {
        ...state,
        errorMessage: action.payload,
        successMessage: "",
      };

    case "DOCTOR_BOOKED_APPOINTMENT_DETAIL_SUCCESS_ACTION":
      return {
        ...state,
        doctorBookedAppointmentDetail: action.payload,
      };
    case "SET_GRAPH_SHOW_STATUS": {
      return {
        ...state,
        graphShow: action.payload,
      };
    }
    case "SET_UPCOMMING_APPOINTMENTS": {
      return {
        ...state,
        upcommingAppointments: action.payload,
      };
    }

    case "SET_UPCOMMING_APPOINTMENTS_PATIENT": {
      return {
        ...state,
        upcommingAppointmentPatient: action.payload,
      };
    }
    case "DEDUCT_SERVICE_CONFIRM_ACTION": {
      return {
        ...state,
        deductServiceData: action.payload,
      };
    }
    case "SET_DOCTOR_SLOTS": {
      return {
        ...state,
        doctorSlots: action.payload,
      };
    }

    case "CHECK_VIDEO_THREAPY_BALANCE_CONFIRM": {
      return {
        ...state,
        videoTherapyBalance: action.payload,
      };
    }

    case "SET_CANCEL_APPOINTMENT_STATUS": {
      return {
        ...state,
        cancelAppointmet: action.payload,
      };
    }
    case "UPDATE_WORK_HISTORY_MESSAGE":
      return {
        ...state,
        errorMessage: "",
        successMessage: "Description Update Successfully...!",
      };
    case "DELETE_PAYMENT_METHOD_MESSAGE":
      return {
        ...state,
        errorMessage: "",
        successMessage: "Delete Successfully...!",
      };

    case "GET_PAINLIST_TYPE_SUCCESS": {
      return {
        ...state,
        painTypeList: action.payload,
      };
    }
    case "FIND_ONE_INFORM_CONSENT_SUCCESS": {
      return {
        ...state,
        findOneInformConsent: action.payload,
      };
    }
    case "VIDEO_MESSAGE_THERAPY_SUCCESS": {
      return {
        ...state,
        videoTherapyGallary: action.payload,
      };
    }

    case "CLIENT_VIDEO_MESSAGE_THERAPY_SUCCESS": {
      return {
        ...state,
        clientVideoTherapyGallary: action.payload,
      };
    }

    case "INFORM_CONSENT_STATUS": {
      return {
        ...state,
        informConsentStatus: action.payload,
      };
    }
    case "INFORM_CONSENT_MESSAGE": {
      return {
        ...state,
        errorMessage: "",
        successMessage: "Your Inform-Consent-Page Under Review Please Contact Of Admin",
      };
    }
    case "STEP_INDEX_SOAP_FORM": {
      return {
        ...state,
        stepIndexSoapForm: action.payload,
      };
    }
    case "GET_PT_COUNT_SUCCESS": {
      return {
        ...state,
        pTCount: action.payload,
      };
    }
    case "GET_DOCTOR_BOOKINGS_SUCCESS":
      return {
        ...state,
        doctorAppointmentBookings: action.payload,
      };
    case "SET_VMT_ACTICE_SESSION":
      return {
        ...state,
        vmtActiveSession: action.payload,
      };
    case "SET_RECORDING_TYPE":
      return {
        ...state,
        screenRecordingType: action.payload,
      };
    case "GET_CALENDAR_SHEDULE_LIST_SUCCESS":
      return {
        ...state,
        calendarSheduleList: action.payload,
      };
    case "SET_BOOKING_SERVICE_AND_PLAN":
      return {
        ...state,
        selectedServiceAndPlan: action.payload,
      };
    case "BOOKED_APPOINTMENT_LIST_BY_DATE":
      return {
        ...state,
        bookedAppointmentListByDate: action.payload,
      };
    case "SET_BOOKING_TIMESLOT":
      return {
        ...state,
        bookingTimeSlot: action.payload,
      };
    case "SET_SELECTED_BOOKING_APT_DOC":
      return {
        ...state,
        selectedAptDoc: action.payload,
      };
    case "CLIENT_PURCHASE_SERVICE_LIST_SUCCESS":
      return {
        ...state,
        clientAllServiceList: action.payload,
      };
    case "DOCTOR_PURCHASE_SERVICE_LIST_SUCCESS":
      return {
        ...state,
        doctorAllServiceList: action.payload,
      };
    case "EDUCATION_VIDEOS_LIST_SUCCESS":
      return {
        ...state,
        educationVideosList: action.payload,
      };
    case "FOUNDATION_FUNCTION_VIDEOS_LIST_SUCCESS":
      return {
        ...state,
        foundationFunctionVideosList: action.payload,
      };
    case "LIVE_VIDEO_AND_INPERSON_VIDEO_LIST_SUCCESS":
      return {
        ...state,
        grandeRoundVideoList: action.payload,
      };

    case "LIVE_VIDEO_AND_INPERSON_PURCHASED_LIST_SUCCESS":
      return {
        ...state,
        grandeRoundPurchasedVideoList: action.payload,
      };

    case "VMT_VIDEO_LIST_SUCCESS":
      return {
        ...state,
        grandeRoundVMTVideoList: action.payload,
      };

    case "VMT_PURCHASED_VIDEO_LIST_SUCCESS":
      return {
        ...state,
        grandeRoundPurchasedVMTList: action.payload,
      };

    case "VMT_PURCHASED_VIDEO_DETAILS":
      return {
        ...state,
        VMTPurchasedVideoDetails: action.payload,
      };

    case "CLEAR_VMT_PURCHASED_VIDEO_DETAILS":
      return {
        ...state,
        VMTPurchasedVideoDetails: {},
      };
    case "PT_GRANDE_LIST_SUCCESS":
      return {
        ...state,
        grandeRoundPTList: action.payload,
      };

    case "PT_PURCHASED_DETAILS":
      return {
        ...state,
        PTPurchasedDetails: action.payload,
      };

    case "CLEAR_PT_PURCHASED_DETAILS":
      return {
        ...state,
        PTPurchasedDetails: {},
      };

    case "EDUCATION_EVENT_LIST_SUCCESS":
      return {
        ...state,
        educationEventList: action.payload,
      };

    case "ON_DEMAND_FOUNDATION_VIDEO_LIST_SUCCESS":
      return {
        ...state,
        onDemandVideoList: action.payload,
      };

    case "ON_DEMAND_FOUNDATION_PURCHASED_LIST_SUCCESS":
      return {
        ...state,
        onDemandPurchasedVideoList: action.payload,
      };
    case "SET_MY_EDUCATION_TAB":
      return {
        ...state,
        myEducationTab: action.payload,
      };
    case REHYDRATE:
      return {
        ...state,
        loginUserData:
          action.payload && action.payload.auth.loginUserData
            ? action.payload.auth.loginUserData
            : {},
        findOneUser:
          action.payload && action.payload.auth.findOneUser ? action.payload.auth.findOneUser : {},
        loginStatus:
          action.payload && action.payload.auth.loginStatus
            ? action.payload.auth.loginStatus
            : false,
        auth: action.payload && action.payload.auth.auth ? action.payload.auth.auth : {},
        signupDetails:
          action.payload && action.payload.auth.signupDetails
            ? action.payload.auth.signupDetails
            : {},
        // errorMessage:
        //   action.payload && action.payload.auth.errorMessage
        //     ? action.payload.auth.errorMessage
        //     : "",
        // successMessage:
        //   action.payload && action.payload.auth.successMessage
        //     ? action.payload.auth.successMessage
        //     : "",
        userId: action.payload && action.payload.auth.userId ? action.payload.auth.userId : "",
        // showLoading:
        //   action.payload && action.payload.auth.showLoading
        //     ? action.payload.auth.showLoading
        //     : false,
        // firstTimeLogin:
        //   action.payload && action.payload.auth.firstTimeLogin
        //     ? action.payload.auth.firstTimeLogin
        //     : false,
        // isForgettingPassword:
        //   action.payload && action.payload.auth.isForgettingPassword
        //     ? action.payload.auth.isForgettingPassword
        //     : false,
        // termAndCondition:
        //   action.payload && action.payload.auth.termAndCondition
        //     ? action.payload.auth.termAndCondition
        //     : {},
        isVerfied:
          action.payload && action.payload.auth.isVerfied ? action.payload.auth.isVerfied : false,
        setPlanId:
          action.payload && action.payload.auth.setPlanId ? action.payload.auth.setPlanId : "",
        serviceId:
          action.payload && action.payload.auth.serviceId ? action.payload.auth.serviceId : "",
        isDashBordPurchase:
          action.payload && action.payload.auth.isDashBordPurchase
            ? action.payload.auth.isDashBordPurchase
            : false,
        isInformedFormFilled:
          action.payload && action.payload.auth.isInformedFormFilled
            ? action.payload.auth.isInformedFormFilled
            : false,
        latestServicePurchased:
          action.payload && action.payload.auth.latestServicePurchased
            ? action.payload.auth.latestServicePurchased
            : null,
        isDashBordAutoDebit:
          action.payload && action.payload.auth.isDashBordAutoDebit
            ? action.payload.auth.isDashBordAutoDebit
            : false,
        sessionId:
          action.payload && action.payload.auth.sessionId ? action.payload.auth.sessionId : "",
        setInterval:
          action.payload && action.payload.auth.setInterval ? action.payload.auth.setInterval : "",
        isFristProfileUpdate:
          action.payload && action.payload.auth.isFristProfileUpdate
            ? action.payload.auth.isFristProfileUpdate
            : false,
        painData:
          action.payload && action.payload.auth.painData ? action.payload.auth.painData : [],

        deductServiceData:
          action.payload && action.payload.auth.deductServiceData
            ? action.payload.auth.deductServiceData
            : {},
        equipmentsList:
          action.payload && action.payload.auth.equipmentsList
            ? action.payload.auth.equipmentsList
            : [],
        paymentMethods:
          action.payload && action.payload.auth.paymentMethods
            ? action.payload.auth.paymentMethods
            : [],
        painList:
          action.payload && action.payload.auth.painList ? action.payload.auth.painList : [],
        selectedPainList:
          action.payload && action.payload.auth.selectedPainList
            ? action.payload.auth.selectedPainList
            : [],
        painListType:
          action.payload && action.payload.auth.painListType
            ? action.payload.auth.painListType
            : [],
        patientSoapData:
          action.payload && action.payload.auth.patientSoapData
            ? action.payload.auth.patientSoapData
            : [],
        activeStep:
          action.payload && action.payload.auth.activeStep ? action.payload.auth.activeStep : 0,
        soapFormPatientData:
          action.payload && action.payload.auth.soapFormPatientData
            ? action.payload.auth.soapFormPatientData
            : [],
        photoGalley:
          action.payload && action.payload.auth.photoGalley ? action.payload.auth.photoGalley : [],

        clientPhotoGalley:
          action.payload && action.payload.auth.clientPhotoGalley
            ? action.payload.auth.clientPhotoGalley
            : [],
        patientSoapData:
          action.payload && action.payload.auth.patientSoapData
            ? action.payload.auth.patientSoapData
            : [],
        patientClientIntake:
          action.payload && action.payload.auth.patientClientIntake
            ? action.payload.auth.patientClientIntake
            : [],
        activeStep:
          action.payload && action.payload.auth.activeStep ? action.payload.auth.activeStep : 0,
        soapFormPatientData:
          action.payload && action.payload.auth.soapFormPatientData
            ? action.payload.auth.soapFormPatientData
            : [],
        clientIntakeFormPatientData:
          action.payload && action.payload.auth.clientIntakeFormPatientData
            ? action.payload.auth.clientIntakeFormPatientData
            : [],
        clientIntakeForm:
          action.payload && action.payload.auth.clientIntakeForm
            ? action.payload.auth.clientIntakeForm
            : [],
        photoAndVideosData:
          action.payload && action.payload ? action.payload.auth.photoAndVideosData : [],
        nutritionData:
          action.payload && action.payload.auth.nutritionData
            ? action.payload.auth.nutritionData
            : [],
        getAllDoctors:
          action.payload && action.payload.auth.getAllDoctors
            ? action.payload.auth.getAllDoctors
            : [],
        getSearchedDoctors:
          action.payload && action.payload.auth.getSearchedDoctors
            ? action.payload.auth.getSearchedDoctors
            : [],
        educationProduct:
          action.payload && action.payload.auth.educationProduct
            ? action.payload.auth.educationProduct
            : [],
        mypurchasededucationProduct:
          action.payload && action.payload.auth.mypurchasededucationProduct
            ? action.payload.auth.mypurchasededucationProduct
            : [],
        chatActive: action.payload && action.payload.chatActive ? action.payload.chatActive : false,
        videoTherapyBalance:
          action.payload && action.payload.videoTherapyBalance
            ? action.payload.videoTherapyBalance
            : 0,
        videoTherapyGallary:
          action.payload && action.payload.auth.videoTherapyGallary
            ? action.payload.auth.videoTherapyGallary
            : [],
        clientVideoTherapyGallary:
          action.payload && action.payload.auth.clientVideoTherapyGallary
            ? action.payload.auth.clientVideoTherapyGallary
            : [],
        informConsentStatus:
          action.payload && action.payload.auth.informConsentStatus
            ? action.payload.auth.informConsentStatus
            : false,
        isRecordingModelActive:
          action.payload && action.payload.auth.isRecordingModelActive
            ? action.payload.auth.isRecordingModelActive
            : false,
        recordingChatId:
          action.payload && action.payload.auth.recordingChatId
            ? action.payload.auth.recordingChatId
            : "",
        recordingUserDetails:
          action.payload && action.payload.auth.recordingUserDetails
            ? action.payload.auth.recordingUserDetails
            : {},
        chatId: action.payload && action.payload.auth.chatId ? action.payload.auth.chatId : "",
        currentChatChangeUser:
          action.payload && action.payload.auth.currentChatChangeUser
            ? action.payload.auth.currentChatChangeUser
            : {},
        informConsentStatus:
          action.payload && action.payload.auth.informConsentStatus
            ? action.payload.auth.informConsentStatus
            : false,
        stepIndexSoapForm:
          action.payload && action.payload.auth.stepIndexSoapForm
            ? action.payload.auth.stepIndexSoapForm
            : 0,
        doctorAppointmentBookings:
          action.payload && action.payload.auth.doctorAppointmentBookings
            ? action.payload.auth.doctorAppointmentBookings
            : {},
        vmtActiveSession:
          action.payload && action.payload.auth.vmtActiveSession
            ? action.payload.auth.vmtActiveSession
            : "",
        selectedServiceAndPlan:
          action.payload && action.payload.auth.selectedServiceAndPlan
            ? action.payload.auth.selectedServiceAndPlan
            : {},
        bookingTimeSlot:
          action.payload && action.payload.auth.bookingTimeSlot
            ? action.payload.auth.bookingTimeSlot
            : {},
        clientAllServiceList:
          action.payload && action.payload.auth.clientAllServiceList
            ? action.payload.auth.clientAllServiceList
            : [],
        doctorAllServiceList:
          action.payload && action.payload.auth.doctorAllServiceList
            ? action.payload.auth.doctorAllServiceList
            : [],

        myEducationTab:
          action.payload && action.payload.auth.myEducationTab
            ? action.payload.auth.myEducationTab
            : 0,
        patientSoapFormDetail:
          action.payload && action.payload.auth.patientSoapFormDetail
            ? action.payload.auth.patientSoapFormDetail
            : { shouldShowPatientSoapFormDetail: false, patientId: "" },
        patientIntakeFormDetail:
          action.payload && action.payload.auth.patientIntakeFormDetail
            ? action.payload.auth.patientIntakeFormDetail
            : { shouldShowPatientIntakeFormDetail: false, patientId: "" },
      };
    case "PAYMENT_CHECKOUT_START":
    case "PAYMENT_CHECKOUT_ERROR":
    default:
      return {
        ...state,
      };
  }
}
