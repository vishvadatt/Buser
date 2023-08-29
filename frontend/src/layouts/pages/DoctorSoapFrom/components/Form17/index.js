import { Grid } from "@mui/material";
import SoftBox from "components/SoftBox";
import React, { useEffect } from "react";
import CommonIndex from "../InfoCommon/index";
import Graph1 from "assets/images/17Graph1.png";
import "./style.scss";
import Graph2 from "assets/images/17Graph2.png";
import Graph3 from "assets/images/17Graph3.png";
import ComponentOne from "./Components/component1";
import ComponentTwo from "./Components/component2";
import ComponentThree from "./Components/component3";
import ComponentFour from "./Components/component4";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getDoctorShopFormDataAction } from "store/actions/actions";
import { initialValues } from "./schema/index";
import { Form, Formik } from "formik";
import NextButton from "../../NextButton";
import SoftButton from "components/SoftButton";
import { doctorShopFormDataAction } from "store/actions/actions";
import PropTypes from "prop-types";

export const DropdownComponents = () => {
  return (
    <>
      <select className="dropDownInputComponent1">
        <option></option>
        <option value="+">+</option>
        <option value="-">-</option>
      </select>
    </>
  );
};

const Formseventy = ({ stepIndex, setActiveStep }) => {
  const dispatch = useDispatch();
  const soappatientId = useSelector((state) => state.auth.patientSoapData.patientId);
  const UserId = useSelector((state) => state.auth.auth._id);
  const token = useSelector((state) => state.auth.auth.idToken);

  console.log("soappatientId...", soappatientId);
  const doctorShopFromDetails = useSelector((state) => state.auth.doctorShopForm?.page17);
  console.log("doctorShopFromDetails..", doctorShopFromDetails);

  const patientSoapFormDetail = useSelector((state) => state?.auth?.patientSoapFormDetail);
  const selectedPatientId = useSelector((state) => state.auth.doctorShopForm?.patientId);

  // useEffect(() => {
  //   dispatch(getDoctorShopFormDataAction());
  // }, []);
  useEffect(() => {
    console.log("running log 17.");
    let patientId = selectedPatientId ? selectedPatientId : soappatientId;

    if (patientSoapFormDetail.shouldShowPatientSoapFormDetail) {
      patientId = patientSoapFormDetail.patientId;
    }
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
          console.log("Aaaa..", values);
          const data = {
            patientId: patientSoapFormDetail.shouldShowPatientSoapFormDetail
              ? patientSoapFormDetail.patientId
              : selectedPatientId
              ? selectedPatientId
              : soappatientId,
            // practitionerId: UserId,
            page17: values,
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
              <Form>
                <CommonIndex formik={formik} />
                <Grid container>
                  <Grid
                    item
                    lg={7}
                    sm={12}
                    xs={12}
                    style={{ background: "#e2efda", position: "relative" }}
                  >
                    <ComponentOne formik={formik} />
                  </Grid>
                  <Grid item lg={5} sm={12} xs={12} spacing={1}>
                    <ComponentTwo formik={formik} />
                  </Grid>
                </Grid>

                <Grid container spacing={1}>
                  <Grid item lg={7} sm={12} xs={12}>
                    <ComponentThree formik={formik} />
                  </Grid>
                  <Grid item lg={5} sm={12} xs={12} style={{ background: "#e2efda" }}>
                    <ComponentFour formik={formik} />
                  </Grid>
                </Grid>
                <Grid container mt={1}>
                  <Grid item lg={12} sm={12} xs={12}>
                    <span style={{ fontSize: "15px" }}>Notes:</span>
                    <textarea
                      style={{
                        width: "100%",
                        height: "300px",
                        background: "#F1F4FF",
                        border: "1px solid black",
                        outline: "none",
                        fontSize: "15px",
                      }}
                      value={formik.values.notesArea1}
                      name="notesArea1"
                      onChange={formik.handleChange}
                    />
                  </Grid>
                </Grid>
                <Grid container>
                  {/* <Grid lg={12}>
              <div style={{height : "250px",width : "300px",display : "flex",justifyContent : "center",alignItems : "center" ,position:"relative" }}>
              <span style={{height : "2px",width : "40%",backgroundColor : "black",display : "block",zIndex : 5,transform : "rotate(90deg)",position : "absolute" ,bottom:20}}></span>
                <div style={{width : "100%",height : "60%",background : "white",position : "relative",display : "flex",overflow : "hidden",zIndex : 2,flexDirection : "column",justifyContent : "flex-end",alignItems : "center"}}>
                  <span style={{height : "2px",width : "95%",backgroundColor : "black",display : "block",position : "relative",top : "2px"}}></span>
                  <span style={{height : "2px",width : "100%",backgroundColor : "black",display : "block",transform : "rotate(45deg)"}}></span>
                  <span style={{height : "2px",width : "100%",backgroundColor : "black",display : "block",transform : "rotate(315deg)",position : "relative",top : "-2px",zIndex : 0}}></span>
                  <span style={{height : "2px",width : "100%",backgroundColor : "black",display : "block",zIndex : 5,transform : "rotate(90deg)",position : "absolute"}}></span>
                </div>
                <input type="text" placeholder="140" style={{width : "50px",position : "absolute",top : 22,zIndex : 5}}/>
                <input type="text" placeholder="20" style={{width : "50px",position : "absolute",bottom : -70}}/>
                <input type="text" placeholder="30" style={{width : "50px",position : "absolute",bottom : 15,left : 10,zIndex : 5}}/>
                <input type="text" placeholder="45" style={{width : "50px",position : "absolute",bottom : 15,left : 10,zIndex : 5}}/>
                <input type="text" placeholder="30" style={{width : "50px",position : "absolute",bottom : 15,right : 10,zIndex : 5}}/>
                <input type="text" placeholder="45" style={{width : "50px",position : "absolute",top : 60,right : 10,zIndex : 5}}/>
                <input type="text" placeholder="45" style={{width : "50px",position : "absolute",top : 60,left : 10,zIndex : 5}}/>
              </div>
            </Grid> */}
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
              </Form>
            </>
          );
        }}
      </Formik>
    </SoftBox>
  );
};
Formseventy.propTypes = {
  stepIndex: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  setActiveStep: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};
export default Formseventy;
