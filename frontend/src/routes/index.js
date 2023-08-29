import { SuccessSoft, ErrorSoft } from "components/Toaster/toast";
import { successToaster } from "components/toastify";
import Plans from "layouts/dashboards/plans/Plans";

import React, { lazy, Suspense, useEffect } from "react";
import { useSelector } from "react-redux";
import { HashRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";

const Default = lazy(() => import("layouts/dashboards/default"));
import moment from "moment";
import { CircularProgress } from "@mui/material";
import { SET_BOOKING_SERVICE_AND_PLAN } from "store/actions/actions";
import { useDispatch } from "react-redux";

export const Loading = () => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CircularProgress style={{ color: "#2F3459" }} size={60} />
    </div>
  );
};
// const CreateTemplate = lazy(() =>
//   import(
//     "../jsx/pages/reporting page/CreateReportWithFileUpload/Template/CreateTemplate"
//   )
// );

// const AgreeToTerms = lazy(() => import('../jsx/pages/auth/AgreeToTerms'));
// const ResetPassword = lazy(() => import('../jsx/pages/auth/ResetPassword'));
// const CreateFileUploadTemplates = lazy(() =>
//   import(
//     "../jsx/pages/reporting page/CreateReportWithFileUpload/CreateFileUploadTemplates"
//   )
// );
// const Reports = lazy(() =>
//   import("../jsx/pages/reporting page/CreateReportWithFileUpload/Reports")
// );
// const ExistReportFramework = lazy(() =>
//   import("../jsx/pages/reporting page/CreateReportWithFramework")
// );
// const ReportingPage = lazy(() =>
//   import("../jsx/pages/reporting page/ReportingPage")
// );
// const CustomReportingTemplate = lazy(() =>
//   import("../jsx/pages/reporting page/CustomReport/CustomReportingTemplate")
// );
const Home = lazy(() => import("layouts/dashboards/home"));
const Registration = lazy(() => import("../layouts/authentication/sign-up"));
const Login = lazy(() => import("../layouts/authentication/sign-in"));
const ForgotPassword = lazy(() => import("../layouts/authentication/Forgot-password"));
const ResetPassword = lazy(() => import("../layouts/authentication/reset-password"));
const AccountSetting = lazy(() => import("../layouts/pages/account/settings/index"));
const TermsAndSignature = lazy(() => import("../layouts/pages/termsandsignature/index"));
const PractitionerAgreement = lazy(() =>
  import("../layouts/pages/Practitionar-Agreement-Form/index")
);
const InformedConsent = lazy(() => import("../layouts/pages/Informed-Consent/index"));
const InformedConsentView = lazy(() => import("../layouts/pages/Informed-Consent/informedConsent"));
const DocInformedConsentView = lazy(() => import("../layouts/pages/Docinformed Consent/index"));
const Services = lazy(() => import("../layouts/pages/Services/index"));

const MyServices = lazy(() => import("../layouts/pages/My Services/index"));

const ClientIntakeForm = lazy(() => import("../layouts/pages/Client-Intake-Form/index"));
const Calendar = lazy(() => import("../layouts/pages/calendar/index"));
const CalendarShedule = lazy(() => import("../layouts/pages/calenderShedule/CalendarShedule"));
const BookAppointments = lazy(() => import("../layouts/pages/Book Appointments/index"));
const PurchaseService = lazy(() =>
  import("../layouts/pages/Book Appointments/component/PurchaseService/index")
);
const UpcomingAppointments = lazy(() => import("../layouts/pages/Upcoming Appointments/index"));
const PhotoTherapy = lazy(() => import("../layouts/pages/Photo Therapy/index"));
const Instructions = lazy(() => import("../layouts/pages/Photo Therapy/Instructions/Instructions"));

const ViewMore = lazy(() => import("../layouts/pages/Photo Therapy/components/viewmore"));
const Upload = lazy(() => import("../layouts/pages/Photo Therapy/components/upload"));
const VideoMessagingTherapy = lazy(() => import("../layouts/pages/Video Messaging Therapy/index"));
const InstructionPages = lazy(() =>
  import("../layouts/pages/Video Messaging Therapy/instructionPages/index")
);
const LiveVideoTherapy = lazy(() => import("../layouts/pages/Live Video Therapy/index"));
const LiveInPersonTherapy = lazy(() => import("../layouts/pages/Live In Person Therapy/index"));
const PhotosandVideos = lazy(() => import("../layouts/pages/Photos and Videos/index"));
const PhotosVideosDetails = lazy(() =>
  import("../layouts/pages/Photos and Videos/Component/details")
);
const Labs = lazy(() => import("../layouts/pages/Labs/index"));
const AddReport = lazy(() => import("../layouts/pages/Labs/LabsForm"));
const ClientReport = lazy(() => import("../layouts/pages/Labs/ClientReport"));
const Sequences = lazy(() => import("../layouts/pages/Sequences/index"));
const Nutrition = lazy(() => import("../layouts/pages/Nutrition/index"));
const DailyUpdates = lazy(() => import("../layouts/pages/Daily Updates/index"));
const DailyUpdateForm = lazy(() =>
  import("../layouts/pages/Daily Updates/components/DailyUpdateForm/index")
);
const ProgressChart = lazy(() => import("../layouts/pages/Progress Chart/index"));
const Equipment = lazy(() => import("../layouts/pages/Equipment/index"));
const ContactUs = lazy(() => import("../layouts/pages/Contact Us/index"));
const Profile = lazy(() => import("../layouts/pages/Profile/index"));
const Zoom = lazy(() => import("../layouts/pages/Profile/components/zoom"));
const LabReport = lazy(() => import("../layouts/pages/Labs/LabReport"));
const NewSetting = lazy(() => import("../layouts/pages/NewSetting/index"));
const ProfileAfterlogin = lazy(() => import("../layouts/pages/ProfileAfterlogin/index"));
const Dashbordplan = lazy(() =>
  import("../layouts/pages/pricing-page/components/dashbordCard/index")
);
const Messages = lazy(() => import("../layouts/pages/messages/index"));
const InformedConsentForm = lazy(() => import("../layouts/pages/Informed Consent/index"));
const PractitionerAgreementForm = lazy(() =>
  import("../layouts/pages/Practitioner Agreement/index")
);
const DoctorSoapForm = lazy(() => import("../layouts/pages/DoctorSoapFrom/index"));
const Schedule = lazy(() => import("../layouts/pages/Schedule/index"));
const UpcomingEvents = lazy(() => import("../layouts/pages/Upcoming Events/index"));
const EventDetail = lazy(() =>
  import("../layouts/pages/Upcoming Events/components/EventDetail/EventDetail")
);
const UpcomingClients = lazy(() => import("../layouts/pages/Upcoming Clients/index"));
const PatientRecords = lazy(() => import("../layouts/pages/Patient Records/index"));
const ShopNote = lazy(() => import("../layouts/pages/SOAP Note/index"));
const ClinicalGuidLineProgram = lazy(() =>
  import("../layouts/pages/Clinical Guideline Program/index")
);
const SequenceGenerator = lazy(() => import("../layouts/pages/Sequence Generator/index"));
const WorkHistory = lazy(() => import("../layouts/pages/Work History/index"));
const Education = lazy(() => import("../layouts/pages/Education/index"));
const DocInformedConsent = lazy(() => import("../layouts/pages/Docinformed Consent/index"));
const EducationMaterial = lazy(() => import("../layouts/pages/Education Material/index"));
const EducationMaterialVideos = lazy(() =>
  import("../layouts/pages/Education Material/EducationArchivesVideos/Videos")
);
const FoundationFunctionVideos = lazy(() =>
  import("../layouts/pages/Education Material/FoundationsFunctionVideos/FoundationFunctionVideos")
);
const GrandeRoundArchives = lazy(() =>
  import("../layouts/pages/Education Material/Grande Round Education videos/index")
);
const GrandeRoundPurchasedVideoListVideos = lazy(() =>
  import("../layouts/pages/Education Material/Grande Round Purchased Videos/index")
);
const VideoAndQuiz = lazy(() =>
  import("../layouts/pages/Education Material/Grande Round Purchased Videos/ViewVideo&Quiz/index")
);
const VMTVideoAndQuiz = lazy(() =>
  import("../layouts/pages/Education Material/Grande Round Purchased Videos/VMTVideo&Quiz/index")
);
const PTPhotoAndQuiz = lazy(() =>
  import("../layouts/pages/Education Material/Grande Round Purchased Videos/PTPhoto&Quiz")
);
const EducationEvents = lazy(() =>
  import("../layouts/pages/Education Material/Education Events/index")
);

const OnDemandPurchase = lazy(() =>
  import("../layouts/pages/Education Material/on-demand videos/OnDemandPurchase")
);
const FoundationVideoDetail = lazy(() =>
  import("../layouts/pages/Education Material/FoundationsFunctionVideos/FoundationVideoDetail")
);

const CalendarTimeSlot = lazy(() =>
  import("../layouts/pages/calendar/components/calendarTimeSlot")
);
const AdvanceEducation = lazy(() =>
  import("../layouts/pages/Education Material/Advance Education/index")
);
const AffiliatePractioner = lazy(() =>
  import("../layouts/pages/Education Material/Affiliate Practitioner/index")
);

const BookAppointmentTimeSlot = lazy(() =>
  import("../layouts/pages/Book Appointments/component/calendarTimeSlot")
);

const VideoCall = lazy(() =>
  import("../layouts/pages/Video Messaging Therapy/VideoCall/LoginpageComponents/index")
);
const VideoCallDashboard = lazy(() =>
  import("../layouts/pages/Video Messaging Therapy/VideoCall/Dashboard/Dashboard")
);
const PractitionerPerformance = lazy(() =>
  import("../layouts/pages/Practitioner Performance/index")
);
const AppointmentDetails = lazy(() =>
  import("../layouts/pages/Upcoming Appointments/Appointment Detalis/index")
);
const BookAppointmentsInstructions = lazy(() =>
  import("../layouts/pages/Book Appointments/component/Instructions/index")
);
// const ChangePassword = lazy(() => import("../layouts/pages/account/settings/components/ChangePassword"));
// const ForgotPassword = lazy(() => import('../jsx/pages/auth/ForgotPassword'));
// const Home = lazy(() => import('../jsx/components/Dashboard/Home'));

// const InitialSetup = lazy(() =>
// 	import('../jsx/pages/initialSetup/InitialSetup'),
// );
// const AccountSetting = lazy(() =>
// 	import('../jsx/pages/accountSetting/AccountSetting'),
// );
// const Subscription = lazy(() => import('../jsx/pages/Subscription/Index'));
// const UserManagement = lazy(() => import('../jsx/pages/UserManagement/Index'));
// const OngoingReport = lazy(() => import('../jsx/pages/onGoingReport/Index'));
// const Invite = lazy(() => import('../jsx/pages/Invite/Index'));
// const PublishedReport = lazy(() =>
// 	import('../jsx/pages/publishedReport/Index'),
// );

// const WelcomeStakeholder = lazy(() =>
// 	import('../jsx/pages/reporting page/Stakeholder/WelcomeStakeholder'),
// );
// const SignoffSurvey = lazy(() =>
// 	import('../jsx/pages/reporting page/signoff/Signoff'),
// );

// const DesignFramework = lazy(() => import('../jsx/pages/DesignFramework'));
// const MaterialRankingAndSelection = lazy(() =>
// 	import('../jsx/pages/reporting page/Stakeholder/MaterialRankingAndSelection'),
// );

function Routers() {
  const successMessage = useSelector((state) => state.auth.successMessage);
  const errorMessage = useSelector((state) => state.auth.errorMessage);

  return (
    <Suspense
      fallback={
        // <div id="preloader">
        //   <div className="sk-three-bounce">
        //     <div className="sk-child sk-bounce1"></div>
        //     <div className="sk-child sk-bounce2"></div>
        //     <div className="sk-child sk-bounce3"></div>
        //   </div>
        // </div>
        <Loading />
      }
    >
      {SuccessSoft(successMessage)}
      {ErrorSoft(errorMessage)}
      <Routes>
        <Route path="/authentication/sign-up" element={<Registration />} />
        <Route path="/authentication/sign-in" element={<Login />} />
        <Route path="/authentication/forgot-password" element={<ForgotPassword />} />
        <Route path="/authentication/reset-password" element={<ResetPassword />} />
        <Route path="*" element={<Navigate to="/authentication/sign-in" />} />
      </Routes>
    </Suspense>
  );
}

function ProtectedRoutes() {
  const successMessage = useSelector((state) => state.auth.successMessage);
  const errorMessage = useSelector((state) => state.auth.errorMessage);
  const location = useLocation();
  const istermCompleted = useSelector((state) => state.auth.isVerfied);
  const isFristProfileUpdate = useSelector((state) => state.auth.isFristProfileUpdate);
  const isDashBordPurchase = useSelector((state) => state.auth.auth.isDashBordPurchase);
  const isExpiredDate = useSelector((state) => state.auth.auth.isExpiredDate);
  let currentDate = moment().format("YYYY-MM-DDThh:mm:ssn");
  const dispatch = useDispatch();
  const isAuthSubscription = isDashBordPurchase && isExpiredDate > currentDate;

  const isServiceProfileUpdates = useSelector((state) => state.auth.isServiceProfileUpdates);
  const isPlanPurchase = useSelector((state) => state.auth.auth.isPlanPurchase);
  const isPlanExpired = useSelector((state) => state.auth.auth.isPlanExpired);
  const isPractitioner = useSelector((state) => state.auth.auth.userType);

  // let currentDate = moment().format("YYYY-MM-DDThh:mm:ssn");
  const isPractitionerTrue = isPractitioner == "student" || "doctor" || "client";
  const isServiceSubscription = isPlanPurchase && isPlanExpired > currentDate;

  useEffect(() => {
    if (!location.pathname.includes("/book-appointments")) {
      dispatch(SET_BOOKING_SERVICE_AND_PLAN({}));
    }
  }, [location.pathname]);

  return (
    <Suspense
      fallback={
        // <div id="preloader">
        //   <div className="sk-three-bounce">
        //     <div className="sk-child sk-bounce1"></div>
        //     <div className="sk-child sk-bounce2"></div>
        //     <div className="sk-child sk-bounce3"></div>
        //   </div>
        // </div>

        <Loading />
      }
    >
      {SuccessSoft(successMessage)}
      {ErrorSoft(errorMessage)}

      <Routes>
        {/* <Route path='/' exact element={<Default />} /> */}
        {/* <Route path="/popup" element={<ScrollDialog />} /> */}
        {/* <Route path="/informed-consent-form" element={<InformedConsentForm />} /> */}
        {/* <Route path="/informed-consent-form" element={<InformedConsentForm />} /> */}

        <Route path="/doctor-soap-form" element={<DoctorSoapForm />} />
        {/* <Route path="/tempRoute" element={< DocInformedConsent />} /> */}
        {istermCompleted && isFristProfileUpdate ? (
          // {isPractitionerTrue ? (
          // ) : (
          <>
            {isAuthSubscription ? (
              <>
                {/* DocInformedConsentView */}
                <Route path="/informed-consent" element={<InformedConsent />} />
                <Route path="/informed-consents-view" element={<InformedConsentView />} />
                <Route path="/informed-consent-view" element={<DocInformedConsentView />} />
                <Route
                  path="/associate-practitioner-agreement"
                  element={<PractitionerAgreement />}
                />
                <Route path="/welcome" element={<Default />} />
                <Route path="*" element={<Navigate to="/welcome" />} />
                <Route path="/home" element={<Home />} />
                {/* {isServiceSubscription ? <> */}

                <Route path="/profileafterlogin" element={<ProfileAfterlogin />} />
                <Route path="/informed-consent-form-new" element={<InformedConsentForm />} />
                {/* <Route path="/informed-consent-form" element={<InformedConsentForm />} /> */}
                <Route path="/termsandsignaturenew" element={<TermsAndSignature />} />
                <Route path="/client-intake-form" element={<ClientIntakeForm />} />
                <Route path="/video-messaging-therapy/video-call" element={<VideoCall />} />
                <Route
                  path="/video-messaging-therapy/video-call/Dashboard"
                  element={<VideoCallDashboard />}
                />

                <Route path="/services" element={<Services />} />
                <Route path="/myServices" element={<MyServices />} />
                <Route path="/informed-consent" element={<InformedConsent />} />

                <Route path="/calendar" element={<Calendar />} />
                <Route path="/calendar/timeSlot" element={<CalendarTimeSlot />} />
                <Route path="/book-appointments" element={<BookAppointments />} />
                <Route
                  path="/book-appointments/instructions"
                  element={<BookAppointmentsInstructions />}
                />

                <Route path="/purchase-service" element={<PurchaseService />} />

                <Route path="/upcoming-Events" element={<UpcomingEvents />} />
                <Route path="/upcoming-Events/event_detail" element={<EventDetail />} />
                <Route path="/book-appointments/timeSlot" element={<BookAppointmentTimeSlot />} />
                <Route path="/upcoming-appointments" element={<UpcomingAppointments />} />

                <Route path="/photo-therapy" element={<PhotoTherapy />} />
                <Route path="/photo-therapy-instructions" element={<Instructions />} />
                <Route path="/view-more" element={<ViewMore />} />
                <Route path="/upload" element={<Upload />} />

                <Route path="/video-messaging-therapy" element={<VideoMessagingTherapy />} />
                <Route path="/video-messaging-therapy-instruction" element={<InstructionPages />} />
                <Route path="/live-video-portal" element={<LiveVideoTherapy />} />
                <Route path="/live-in-person-portal" element={<LiveInPersonTherapy />} />
                <Route path="/photo-video" element={<PhotosandVideos />} />
                <Route path="/details" element={<PhotosVideosDetails />} />
                <Route path="/labs" element={<Labs />} />
                <Route path="/labs/upload-report" element={<AddReport />} />
                <Route path="/labs/client-report" element={<ClientReport />} />
                <Route path="/sequences" element={<Sequences />} />
                <Route path="/nutrition" element={<Nutrition />} />
                <Route path="/daily-updates" element={<DailyUpdates />} />
                <Route path="/daily-updates/daily-updates-form" element={<DailyUpdateForm />} />
                <Route path="/progress-chart" element={<ProgressChart />} />
                <Route path="/equipment" element={<Equipment />} />
                <Route path="/contact-us" element={<ContactUs />} />
                <Route path="/messages" element={<Messages />} />
                <Route path="/report" element={<LabReport />} />
                <Route path="/appointment-details" element={<AppointmentDetails />} />

                {isPractitioner === "doctor" && (
                  <>
                    {/* <Route path="/informed-consent" element={<DocInformedConsent />}/> */}

                    <Route path="/schedule" element={<Schedule />} />
                    <Route path="/calender-shedule" element={<CalendarShedule />} />
                    <Route path="/upcoming-Events" element={<UpcomingEvents />} />
                    <Route path="/upcoming-Clients" element={<UpcomingClients />} />
                    <Route path="/patient-Records" element={<PatientRecords />} />
                    {/* <Route path="/SOAP-Note" element={<ShopNote />} /> */}
                    <Route path="/upcoming-appointment" element={<UpcomingAppointments />} />
                    <Route
                      path="/Clinical-Guideline-Program"
                      element={<ClinicalGuidLineProgram />}
                    />
                    <Route path="/Sequence-Generator" element={<SequenceGenerator />} />
                    <Route path="/Work-History" element={<WorkHistory />} />
                    <Route path="/practitioner-performance" element={<PractitionerPerformance />} />
                    <Route path="/Education" element={<Education />} />
                    <Route path="/Education-Material" element={<EducationMaterial />} />
                    <Route
                      path="/Education-Material/EducationArchives"
                      element={<EducationMaterialVideos />}
                    />
                    <Route
                      path="/Education-Material/FundationFunctionCourse"
                      element={<FoundationFunctionVideos />}
                    />
                    <Route
                      path="/Education-Material/OnDemand/SessionDetails/:id"
                      element={<FoundationVideoDetail />}
                    />
                    <Route
                      path="/Education-Material/GrandeRoundArchives"
                      element={<GrandeRoundArchives />}
                    />
                    <Route
                      path="/Education-Material/GrandeRoundPurchasedVideos"
                      element={<GrandeRoundPurchasedVideoListVideos />}
                    />
                    <Route
                      path="/Education-Material/GrandeRoundPurchasedVideos/VideoAndQuiz/:id"
                      element={<VideoAndQuiz />}
                    />

                    <Route
                      path="/Education-Material/GrandeRoundPurchasedVideos/VMTVideoAndQuiz"
                      element={<VMTVideoAndQuiz />}
                    />

                    <Route
                      path="/Education-Material/GrandeRoundPurchasedVideos/PTPhotoAndQuiz"
                      element={<PTPhotoAndQuiz />}
                    />
                    <Route
                      path="/Education-Material/EducationEvents"
                      element={<EducationEvents />}
                    />
                    <Route
                      path="/Education-Material/On-Demand-PurchaseVideos"
                      element={<OnDemandPurchase />}
                    />
                    <Route
                      path="/Education-Material/AdvanceEducation"
                      element={<AdvanceEducation />}
                    />
                    <Route
                      path="/Education-Material/AffiliatePractioner"
                      element={<AffiliatePractioner />}
                    />
                  </>
                )}

                {/* : <>
                  <Route path="/services" element={<Services />} />
                  <Route path="*" element={<Navigate to="/services" />} />
                </>} */}
              </>
            ) : (
              <>
                <Route path="/dashbordplan" element={<Dashbordplan />} />
                <Route path="*" element={<Navigate to="/dashbordplan" />} />
                {/* <Route path="/doctor-soap-form" element={<DoctorSoapForm />} /> */}
              </>
            )}
            <Route path="/newsettings" element={<NewSetting />} />
            <Route path="/settings" element={<AccountSetting />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/zoom-connection" element={<Zoom />} />
            <Route path="*" element={<Navigate to="/welcome" />} />
          </>
        ) : (
          // )}
          // </>

          <>
            {/* <Route path="/termsandsignature" element={<TermsAndSignature />} /> */}
            {/* <Route path="*" element={<Navigate to="/informed-consent-form" />} />: */}
            {isPractitioner === "doctor" ? (
              <>
                {/* that changed  */}
                {/* {!istermCompleted ? ( */}
                {/* <> */}

                <Route path="/informed-consent-form" element={<InformedConsentForm />} />

                {/* </> */}
                {/* ) : ( */}
                {/* <> */}
                <Route
                  path="/practitionar-agreement-form"
                  element={<PractitionerAgreementForm />}
                />

                {/* <Route path="*" element={<Navigate to="/practitionar-agreement-form" />} /> */}
                <Route path="*" element={<Navigate to="/informed-consent-form" />} />
                {/* </> */}
                {/* )} */}
                {/* <Route
                  path="/practitionar-agreement-form"
                  element={<PractitionerAgreementForm />}
                /> */}
              </>
            ) : (
              <>
                {/* {!istermCompleted && 
                  <>  */}
                <Route path="/termsandsignature" element={<TermsAndSignature />} />
                <Route path="*" element={<Navigate to="/termsandsignature" />} />
                {/* </>
                } */}
              </>
            )}
            <Route path="/profileafterlogin" element={<ProfileAfterlogin />} />
            {/* <Route path="/doctor-soap-form" element={<DoctorSoapForm />} /> */}
          </>
        )}
        {/* <Route path="/Dashbordplan" element={<Dashbordplan />} /> */}

        {/* <Route path="/#change-password" element={<ChangePassword/>} /> */}

        {/* <Route path="*" element={<Navigate to="/dashboards/default" />} /> */}
        {/* Create Report Routes */}
        {/* <Route path='/create-report' component={ReportingPage} />
					<Route path='/genreport' component={GenerateReportPage} />
					<Route path='/report-exist' component={ExistReportFramework} />
					<Route
						exact
						path='/templates'
						component={CreateFileUploadTemplates}
					/>
					<Route path='/stakeholder-welcome' component={WelcomeStakeholder} />
					<Route path='/templates/add' component={CreateTemplate} />
					<Route path='/report/upload' component={UploadReport} />
					<Route path='/reports' component={Reports} />
					<Route
						path='/use-custom-report'
						component={CustomReportingTemplate}
					/>
					<Route path='/report/signoff' component={SignoffSurvey} />
					<Route
						path='/report/material-ranking'
						component={MaterialRankingAndSelection}
					/> */}
        {/* End of Create Report Routes */}
        {/* <Route path='/genreport' component={GenerateReportPage} />
					<Route path='/design-framework/template-library'>
						<DesignFramework />
					</Route>

					<Route path='/account-setting' exact component={AccountSetting} />
					<Route
						path='/account-setting/subscription'
						component={Subscription}
					/>

					<Route path='/user-management' component={UserManagement} />
					<Route path='/ongoing-report' component={OngoingReport} />
					<Route path='/invite' component={Invite} />
					<Route path='/published-report' component={PublishedReport} /> */}
        {/* < route Navigate from='*' to='/dashboard' /> */}
      </Routes>
    </Suspense>
  );
}

export default {
  Routers,
  ProtectedRoutes,
};
