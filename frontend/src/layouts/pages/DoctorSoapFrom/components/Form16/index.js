import { Grid } from "@mui/material";
import SoftBox from "components/SoftBox";
import React, { useEffect } from "react";
import "./style.scss";
import InfoCommon from "../InfoCommon/index";
import FormField from "../FormField";
import { Formik } from "formik";
import initialValues from "./schema/initialValues";
import ComponentOne from "./Component/component1";
import ImageComponent1 from "./Component/ImageComponent1";
import ImageComponent2 from "./Component/ImageCoponent2";
import ImageComponent3 from "./Component/ImageComponent3";
import TextAreaComponent from "./Component/TextAreaComponent";
import ImageComponent4 from "./Component/ImageComponent4";
import ImageComponent5 from "./Component/ImageComponent5";
import TableTwo from "./Component/Table2";
import TableOne from "./Component/Table1";
import NextButton from "../../NextButton";
import { getDoctorShopFormDataAction } from "store/actions/actions";
import { useDispatch, useSelector } from "react-redux";
import SoftButton from "components/SoftButton";
import { doctorShopFormDataAction } from "store/actions/actions";
import PropTypes from "prop-types";

const Formsixteen = ({ stepIndex, setActiveStep }) => {
  const dispatch = useDispatch();
  const soappatientId = useSelector((state) => state.auth.patientSoapData.patientId);
  console.log("soappatientId..", soappatientId);
  const UserId = useSelector((state) => state.auth.auth._id);
  const token = useSelector((state) => state.auth.auth.idToken);
  const doctorShopFromDetails = useSelector((state) => state.auth.doctorShopForm?.page16);
  const patientSoapFormDetail = useSelector((state) => state?.auth?.patientSoapFormDetail);
  const selectedPatientId = useSelector((state) => state.auth.doctorShopForm?.patientId);

  console.log("doctorShopFromDetails..", doctorShopFromDetails);
  // useEffect(() => {
  //   dispatch(getDoctorShopFormDataAction({ patientId: soappatientId, /* practitionerId: UserId, */ token: token }));
  // }, []);
  useEffect(() => {
    let patientId = selectedPatientId ? selectedPatientId : soappatientId;
    if (patientSoapFormDetail.shouldShowPatientSoapFormDetail) {
      patientId = patientSoapFormDetail.patientId;
    }
    console.log("running log 16.");
    dispatch(
      getDoctorShopFormDataAction({
        patientId: patientId,
        /* practitionerId: UserId, */ token: token,
      })
    );
  }, [stepIndex]);
  return (
    <SoftBox>
      <Formik
        initialValues={{ ...initialValues, ...doctorShopFromDetails }}
        enableReinitialize
        onSubmit={(values) => {
          const data = {
            patientId: patientSoapFormDetail.shouldShowPatientSoapFormDetail
              ? patientSoapFormDetail.patientId
              : selectedPatientId
              ? selectedPatientId
              : soappatientId,
            // practitionerId: UserId,
            page16: values,
          };
          dispatch(
            doctorShopFormDataAction({
              data: data,
              token: token,
            })
          );
          setActiveStep(stepIndex + 1);
        }}
      >
        {(formik) => {
          console.log("formik..", formik.values);
          return (
            <>
              <InfoCommon formik={formik} />
              <Grid container spacing={1}>
                <Grid item lg={5} sm={6}>
                  <ComponentOne formik={formik} />
                </Grid>
                <Grid item lg={7} sm={6}></Grid>
              </Grid>
              <Grid container spacing={1}>
                <Grid item lg={6} sm={12} className="labelClass">
                  <Grid container spacing={1} mt={2} pt={4} className="mBottom1">
                    <ImageComponent1 formik={formik} />

                    <ImageComponent2 />
                  </Grid>
                </Grid>

                <Grid item lg={6} sm={12} className="ImgCompo3">
                  <ImageComponent3 formik={formik} />
                </Grid>
              </Grid>

              <TextAreaComponent formik={formik} />
              <Grid container>
                <Grid item lg={7} sm={12} xs={12} className="mBottom">
                  <ImageComponent4 />
                </Grid>
                <Grid item lg={5} sm={12} style={{ background: "#e2efda", marginTop: "78px" }}>
                  <ImageComponent5 />
                </Grid>
              </Grid>
              <Grid container mt={2} spacing={0}>
                <TableOne formik={formik} />
                <TableTwo formik={formik} />
              </Grid>
              <Grid container>
                <Grid lg={12} sm={12} xs={12}>
                  <span style={{ fontSize: "15px" }}>Notes:</span>
                  <textarea
                    style={{
                      width: "100%",
                      background: "#F1F4FF",
                      height: "100px",
                      border: "1px solid black",
                      outline: "none",
                      fontSize: "15px",
                    }}
                    name="notesArea2"
                    value={formik.values.notesArea2}
                    onChange={formik.handleChange}
                  />
                </Grid>
              </Grid>
              <div style={{ float: "right" }}>
                <SoftButton
                  variant="gradient"
                  color="dark"
                  onClick={() => {
                    if (formik.dirty) {
                      formik.handleSubmit();
                    } else {
                      setActiveStep(stepIndex + 1);
                    }
                  }}
                  className="nxt1"
                >
                  Next
                </SoftButton>
              </div>
            </>
          );
        }}
      </Formik>
    </SoftBox>
  );
};

Formsixteen.propTypes = {
  stepIndex: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  setActiveStep: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};
export default Formsixteen;
