import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import SoftBox from "components/SoftBox";
import "./style.css";
import InfoCommon from "../InfoCommon/index";
import { Checkbox, Grid } from "@mui/material";
import NextButton from "../../NextButton";
import { useDispatch } from "react-redux";
import { doctorShopFormDataAction } from "store/actions/actions";
import { getDoctorShopFormDataAction } from "store/actions/actions";
import { useSelector } from "react-redux";
import { Form, Formik, FieldArray } from "formik";
import initialValues from "./schema/initialValues";
import PropTypes from "prop-types";
import SoftButton from "components/SoftButton";
import { MinusCircleOutlined, PlusCircleOutlined } from "@ant-design/icons";
import SoftTypography from "components/SoftTypography";
import LeftSpineeval from "./components/LeftSpineeval";
import RightSpineeval from "./components/RightSpineeval";

function index({ stepIndex, setActiveStep }) {
  const soappatientId = useSelector((state) => state.auth.patientSoapData.patientId);
  const UserId = useSelector((state) => state.auth.auth._id);
  const token = useSelector((state) => state.auth.auth.idToken);

  const patientSoapFormDetail = useSelector((state) => state?.auth?.patientSoapFormDetail);
  const selectedPatientId = useSelector((state) => state.auth.doctorShopForm?.patientId);

  const dispatch = useDispatch();

  const doctorShopFromDetails = useSelector((state) => state.auth.doctorShopForm?.page23);
  // useEffect(() => {
  //   dispatch(getDoctorShopFormDataAction({ patientId: soappatientId, /* practitionerId: UserId, */ token: token }));
  // }, []);
  useEffect(() => {
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
          console.log("lllll", values);
          const data = {
            patientId: patientSoapFormDetail.shouldShowPatientSoapFormDetail
              ? patientSoapFormDetail.patientId
              : selectedPatientId
                ? selectedPatientId
                : soappatientId,
            // practitionerId: UserId,
            page23: values,
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
          console.log("formik...23", formik.values);
          const { values } = formik;
          const {
            spinf1: spinf1V,
            spinf2: spinf2V,
            spinf3: spinf3V,
            spinf4: spinf4V,
            spinf5: spinf5V,
            spinf6: spinf6V,
            spinf7: spinf7V,
            spinfront1: spinfront1V,
            spinfront2: spinfront2V,
            spinfront3: spinfront3V,
            spinfront4: spinfront4V,
            spinfront5: spinfront5V,
            spinfront6: spinfront6V,
            spinfront7: spinfront7V,
            spinfront8: spinfront8V,
            spinfront9: spinfront9V,
            spinfront10: spinfront10V,
            spinfront11: spinfront11V,
            spinfront12: spinfront12V,
            spinfrontsub1: spinfrontsub1V,
            spinfrontsub2: spinfrontsub2V,
            spinfrontsub3: spinfrontsub3V,
            spinfrontsub4: spinfrontsub4V,
            spinfrontsub5: spinfrontsub5V,
            spinfrontsubleft: spinfrontsubleftV,
            spinfrontsubright: spinfrontsubrightV,
            spinfrontsublefttop: spinfrontsublefttopV,
            spinfrontsubleftbottom: spinfrontsubleftbottomV,
            spinfrontsubrighttop: spinfrontsubrighttopV,
            spinfrontsubrightbottom: spinfrontsubrightbottomV,

            spinbonesub1: spinbonesub1V,
            spinbonesub2: spinbonesub2V,
            spinbonesub3: spinbonesub3V,
            spinbonesub4: spinbonesub4V,
            spinbtwosub1: spinbtwosub1V,
            spinbtwosub2: spinbtwosub2V,
            spinbtwosub3: spinbtwosub3V,
            spinbtwosub4: spinbtwosub4V,
            spinbthreesub1: spinbthreesub1V,
            spinbthreesub2: spinbthreesub2V,
            spinbthreesub3: spinbthreesub3V,
            spinbthreesub4: spinbthreesub4V,
            spinbfoursub1: spinbfoursub1V,
            spinbfoursub2: spinbfoursub2V,
            spinbfoursub3: spinbfoursub3V,
            spinbfoursub4: spinbfoursub4V,
            spinbfivesub1: spinbfivesub1V,
            spinbfivesub2: spinbfivesub2V,
            spinbfivesub3: spinbfivesub3V,
            spinbfivesub4: spinbfivesub4V,
            spinbsixsub1: spinbsixsub1V,
            spinbsixsub2: spinbsixsub2V,
            spinbsixsub3: spinbsixsub3V,
            spinbsixsub4: spinbsixsub4V,
            spinbsevensub1: spinbsevensub1V,
            spinbsevensub2: spinbsevensub2V,
            spinbsevensub3: spinbsevensub3V,
            spinbsevensub4: spinbsevensub4V,

            spinbackone1: spinbackone1V,
            spinbackone2: spinbackone2V,
            spinbackone3: spinbackone3V,
            spinbackone4: spinbackone4V,
            spinbacktwo1: spinbacktwo1V,
            spinbacktwo2: spinbacktwo2V,
            spinbacktwo3: spinbacktwo3V,
            spinbacktwo4: spinbacktwo4V,
            spinbackthree1: spinbackthree1V,
            spinbackthree2: spinbackthree2V,
            spinbackthree3: spinbackthree3V,
            spinbackthree4: spinbackthree4V,
            spinbackfour1: spinbackfour1V,
            spinbackfour2: spinbackfour2V,
            spinbackfour3: spinbackfour3V,
            spinbackfour4: spinbackfour4V,
            spinbackfive1: spinbackfive1V,
            spinbackfive2: spinbackfive2V,
            spinbackfive3: spinbackfive3V,
            spinbackfive4: spinbackfive4V,
            spinbacksix1: spinbacksix1V,
            spinbacksix2: spinbacksix2V,
            spinbacksix3: spinbacksix3V,
            spinbacksix4: spinbacksix4V,
            spinbackseven1: spinbackseven1V,
            spinbackseven2: spinbackseven2V,
            spinbackseven3: spinbackseven3V,
            spinbackseven4: spinbackseven4V,
            spinbackeight1: spinbackeight1V,
            spinbackeight2: spinbackeight2V,
            spinbackeight3: spinbackeight3V,
            spinbackeight4: spinbackeight4V,
            spinbacknine1: spinbacknine1V,
            spinbacknine2: spinbacknine2V,
            spinbacknine3: spinbacknine3V,
            spinbacknine4: spinbacknine4V,
            spinbackten1: spinbackten1V,
            spinbackten2: spinbackten2V,
            spinbackten3: spinbackten3V,
            spinbackten4: spinbackten4V,
            spinbackeleven1: spinbackeleven1V,
            spinbackeleven2: spinbackeleven2V,
            spinbackeleven3: spinbackeleven3V,
            spinbackeleven4: spinbackeleven4V,
            spinbacktwlve1: spinbacktwlve1V,
            spinbacktwlve2: spinbacktwlve2V,
            spinbacktwlve3: spinbacktwlve3V,
            spinbacktwlve4: spinbacktwlve4V,

            spinbacksubone1: spinbacksubone1V,
            spinbacksubone2: spinbacksubone2V,
            spinbacksubone3: spinbacksubone3V,
            spinbacksubone4: spinbacksubone4V,
            spinbacksubtwo1: spinbacksubtwo1V,
            spinbacksubtwo2: spinbacksubtwo2V,
            spinbacksubtwo3: spinbacksubtwo3V,
            spinbacksubtwo4: spinbacksubtwo4V,
            spinbacksubthree1: spinbacksubthree1V,
            spinbacksubthree2: spinbacksubthree2V,
            spinbacksubthree3: spinbacksubthree3V,
            spinbacksubthree4: spinbacksubthree4V,
            spinbacksubfour1: spinbacksubfour1V,
            spinbacksubfour2: spinbacksubfour2V,
            spinbacksubfour3: spinbacksubfour3V,
            spinbacksubfour4: spinbacksubfour4V,
            spinbacksubfive1: spinbacksubfive1V,
            spinbacksubfive2: spinbacksubfive2V,
            spinbacksubfive3: spinbacksubfive3V,
            spinbacksubfive4: spinbacksubfive4V,

            spinbacktopleft: spinbacktopleftV,
            spinbacktopright: spinbacktoprightV,
            spinbackmiddleleft: spinbackmiddleleftV,
            spinbackmiddleright: spinbackmiddlerightV,
            spinbackbottomleft: spinbackbottomleftV,
            spinbackbottomright: spinbackbottomrightV,
          } = values;
          console.log("page23", spinfront2V);
          return (
            <>
              <Box>
                <InfoCommon formik={formik} />
              </Box>
              <Grid>
                <FieldArray
                  name="spineDetails"
                  render={(arrayhelpers, push) => {
                    console.log("formik.values.spineDetails", formik.values.spineDetails);
                    return (
                      <>
                        {formik.values.spineDetails.map((data, i) => {
                          return (
                            <>
                              {i > 0 && (
                                <Grid item xs={12} sm={12} lg={12} mb={1}>
                                  <SoftBox
                                    display="flex"
                                    flexDirection="row"
                                    justifyContent="center"
                                  // height="100%"
                                  >
                                    <SoftTypography mt={3}>
                                      <p style={{ fontWeight: "bold", textAlign: "center" }}>
                                        Click the Minus-Sign to remove Form
                                      </p>
                                    </SoftTypography>
                                  </SoftBox>
                                  <SoftBox
                                    display="flex"
                                    flexDirection="row"
                                    justifyContent="center"
                                    height="100%"
                                  >
                                    <MinusCircleOutlined
                                      style={{
                                        cursor: "pointer",
                                        fontSize: "25px",
                                        color: "#344767",
                                      }}
                                      onClick={() => arrayhelpers.remove(i)}
                                    />
                                  </SoftBox>
                                </Grid>
                              )}
                              <Box mt={5}>
                                <Grid container spacing={2}>
                                  <Grid sm={12} md={12} lg={6} className="spinalimg">
                                    <LeftSpineeval formik={formik} index={i} />
                                  </Grid>
                                  <Grid sm={12} md={12} lg={6} className="spinalimg">
                                    {/* <p className="rightSpineeval">
                                      Right
                                    </p>
                                    <p className="leftSpineeval">
                                      Left
                                    </p> */}
                                    <RightSpineeval formik={formik} index={i} />
                                  </Grid>
                                </Grid>
                              </Box>
                            </>
                          );
                        })}
                        <Box mt={1}>
                          <div className="newspinebtn">
                            <button
                              type="button"
                              onClick={
                                () => arrayhelpers.insert(formik.values.spineDetails.length + 1)
                                // arrayhelpers.push(formik.values.excerciseDetails)
                              }
                            >
                              New Spine Eval Page
                            </button>
                          </div>
                        </Box>
                      </>
                    );
                  }}
                />
              </Grid>

              <div style={{ float: "right" }}>
                <SoftButton
                  className="nxt1"
                  variant="gradient"
                  color="dark"
                  onClick={() => {
                    if (formik.dirty) {
                      formik.handleSubmit();
                    } else {
                      setActiveStep(stepIndex + 1);
                    }
                  }}
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
}
index.propTypes = {
  formik: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  setActiveStep: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};
export default index;
