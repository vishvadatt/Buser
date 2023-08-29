import { Grid } from "@mui/material";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import SoftBox from "components/SoftBox";
import SoftButton from "components/SoftButton";
import { Formik } from "formik";
import FormField from "layouts/pages/account/components/FormField";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import {
  reportListAction,
  uploadlabreport,
  getpatientLetestAppointment,
} from "../../../store/actions/actions";
import "./pagistyles.css";
import Footer from "examples/Footer";

const LabsForm = (handleprops) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const { handletabvalue } = handleprops;
  const [reportimg, setreportimg] = useState(null);
  const UserId = useSelector((state) => state.auth.auth._id);
  const token = useSelector((state) => state.auth.auth.idToken);
  const latestService = useSelector((state) => state.auth.latestServicePurchased);
  useEffect(() => {
    dispatch(getpatientLetestAppointment({ patientId: UserId, token: token }));
  }, []);
  // const letestAppointment = useSelector((state) => state.auth.patientLetestAppointmentDetail);

  const patientLetestAppointment = useSelector((state) =>
    state.auth.patientLetestAppointmentDetail !== undefined
      ? state.auth.patientLetestAppointmentDetail
      : []
  );

  const searchParams = new URLSearchParams(location.search);
  const clientId = searchParams.get("clientId");

  const validationSchema = Yup.object({
    reportName: Yup.string().required("Report name is required"),
    report: Yup.string().required("Report is required"),
    description: Yup.string().required("Description is required"),
  });

  const handleServiceType = () => {
    if (patientLetestAppointment.length > 0) {
      if (patientLetestAppointment[0].therapyType === "Live Video") {
        navigate("/live-video-portal");
      }
    }
  };
  const handlNavigate = () => {
    if (clientId) {
      navigate("/labs");
    } else if (latestService === "Video_Messaging_and_Photo_Therapy_Balance") {
      navigate("/video-messaging-therapy");
    } else if (latestService === "live_Video_Online_Exercise_Therapy_Balance") {
      navigate("/live-video-portal");
    } else if (latestService === "live_In_Person_and_Travel_Exercise_Therapy_Balance") {
      navigate("/live-in-person-portal");
    } else if (!latestService) {
      navigate("/labs");
    }
  };
  const handleBack = () => {
    navigate("/labs");
  };
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SoftBox className="upload-box" style={{ paddingBottom: "0px" }}>
        <SoftButton onClick={handleBack} className="upload-btn">
          Back
        </SoftButton>
      </SoftBox>
      <>
        <Formik
          validationSchema={validationSchema}
          initialValues={{
            reportName: "",
            description: "",
            report: "",
          }}
          onSubmit={async (values) => {
            let formData = new FormData();
            formData.append("report", values?.report);
            formData.append("reportName", values?.reportName);
            formData.append("description", values?.description);
            if (clientId) {
              formData.append("userId", clientId);
              formData.append("doctorId", UserId);
            } else {
              formData.append("userId", UserId);
            }
            // console.log(formData);
            // formData.forEach((value, key) => {
            //   console.log(key, value);
            // });
            dispatch(uploadlabreport({ token: token, data: formData, UserId }));
            setreportimg(null);
            handleServiceType();
            // setTimeout(() => {
            //   dispatch(reportListAction({ token: token, UserId: UserId ,page : 1,limit : 10}));
            // },5000)
            // await handletabvalue();
            handlNavigate();
          }}
        >
          {(formik) => {
            return (
              <>
                <Grid container spacing={0} marginTop={3}>
                  <Grid item xs={12} sm={4} className="fontTitle">
                    {/* <FormControl type="file" label="Upload images" name="fristname" /> */}
                    <div className="form-label-group">
                      <>
                        {/* <span>Select Report</span> */}
                        <FormField
                          type="file"
                          name="report"
                          label="Select Report:"
                          // onChange={(e) => setreportimg(e.target.files[0])}
                          onChange={(e) => {
                            formik.setFieldValue("report", e.target.files[0]);
                          }}
                          id="files"
                          class="hidden"
                          style={{ color: "transparent", width: "auto" }}
                        />
                        {formik.touched.report && formik.errors.report && (
                          <div style={{ color: "red" }}>{formik.errors.report}</div>
                        )}
                      </>
                    </div>
                  </Grid>
                </Grid>
                <Grid mt={0.5} container spacing={3}>
                  <Grid item xs={12} sm={6} className="fontTitle">
                    <FormField
                      type="text"
                      placeholder="Enter Report Name"
                      label="Report Name:"
                      name="reportName"
                      value={formik.values.reportName}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched.reportName && formik.errors.reportName && (
                      <div style={{ color: "red" }}>{formik.errors.reportName}</div>
                    )}
                  </Grid>
                  <Grid item xs={12} sm={6} className="fontTitle">
                    <FormField
                      type="text"
                      placeholder="Enter Description"
                      label="Description:"
                      name="description"
                      value={formik.values.description}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched.description && formik.errors.description && (
                      <div style={{ color: "red" }}>{formik.errors.description}</div>
                    )}
                  </Grid>
                </Grid>
                <SoftBox my={4}>
                  <SoftButton
                    type="submit"
                    variant="gradient"
                    color="dark"
                    onClick={formik.handleSubmit}
                  >
                    submit
                  </SoftButton>
                </SoftBox>
              </>
            );
          }}
        </Formik>
      </>
      <Footer />
    </DashboardLayout>
  );
};

export default LabsForm;
