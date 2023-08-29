// import React from 'react'
import { useDispatch } from "react-redux";
import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { clientIntakeFormGet } from "store/actions/actions";
import { Checkbox, Grid } from "@mui/material";
import SoftTypography from "components/SoftTypography";

function Pain({ formik, page12, index }) {
  const { values } = formik;

  const orthopadic = values?.orthopadic;
  const neurological = values?.neurological;
  const injuries = values?.injuries;
  const brain = values?.brain;

  console.log(page12, "page12");

  //   const token = useSelector((state) => state.auth.auth.idToken);
  //   const dispatch = useDispatch();
  // const clientIntakeformDetails = useSelector((state) => state.auth.clientIntakeForm?.page8);
  // console.log("clientIntakeformDetailsvvvv", clientIntakeformDetails)
  //   const soappatientId = useSelector((state) => state.auth.patientSoapData.patientId);
  //   const UserId = useSelector((state) => state.auth.auth._id);
  // const pain = clientIntakeformDetails?.orthopedic;
  // const pain1 = clientIntakeformDetails?.neurological;
  // const pain2 = clientIntakeformDetails?.injuries;
  // const pain3 = clientIntakeformDetails?.brain;

  const pain = page12.page12[index]?.orthopedic;
  const pain1 = page12?.neurological;
  const pain2 = page12?.injuries;
  const pain3 = page12?.brain;

  console.log("pain1", pain);

  const check1 = pain?.filter((item) => item.orthopediccheck === true);
  const check2 = pain1?.filter((item) => item.neurologicalcheck === true);
  const check3 = pain2?.filter((item) => item.injuriescheck === true);
  const check4 = pain3?.filter((item) => item.braincheck === true);

  console.log("check1", check1);

  // useEffect(() => {
  //     dispatch(clientIntakeFormGet({ patientId: soappatientId, /* practitionerId: UserId, */ token:token }));
  // }, []);
  // useEffect(() => {
  //     dispatch(clientIntakeFormGet({ patientId: soappatientId, /* practitionerId: UserId, */ token:token }));
  // }, [stepIndex]);
  return (
    <div>
      {!!check1 && check1.length > 0 ? (
        <>
          <div>
            <SoftTypography fontWeight="bold" fontSize="16px" marginBottom="8px" mt={2}>
              <span style={{ borderBottom: "2px solid" }}>
                Orthopedic & Musculoskeletal Symptoms
              </span>
            </SoftTypography>
            {!!check1 &&
              check1.map((data, i) => {
                const value =
                  !!orthopadic &&
                  Object.keys(orthopadic).filter((keyName) => keyName === data.name);
                console.log("valueaaaa", value);
                return (
                  <>
                    <Grid container className="conditions">
                      <Grid item lg={2}>
                        <span style={{ fontSize: "16px", marginRight: "0.5rem" }}>{data.name}</span>
                      </Grid>

                      <Grid item lg={10}>
                        <input
                          value={!!orthopadic ? orthopadic[value] : ""}
                          type="text"
                          name={`orthopadik.${data.name}`}
                          onChange={formik.handleChange}
                        />
                      </Grid>
                    </Grid>
                  </>
                );
              })}
          </div>
        </>
      ) : (
        ""
      )}

      {!!check2 && check2.length > 0 ? (
        <>
          <div>
            <SoftTypography fontWeight="bold" fontSize="16px" marginBottom="8px" mt={2}>
              <span style={{ borderBottom: "2px solid" }}>Neurological Symptoms</span>
            </SoftTypography>
            {!!check2 &&
              check2.map((data, i) => {
                const value =
                  !!neurological &&
                  Object.keys(neurological).filter((keyName) => keyName === data.name);
                console.log("valueaaaa", value);
                return (
                  <>
                    <Grid container className="conditions">
                      <Grid item lg={2}>
                        <span style={{ fontSize: "16px", marginRight: "0.5rem" }}>{data.name}</span>
                      </Grid>

                      <Grid item lg={10}>
                        <input
                          value={!!neurological ? neurological[value] : ""}
                          type="text"
                          name={`neurological.${data.name}`}
                          onChange={formik.handleChange}
                        />
                      </Grid>
                    </Grid>
                  </>
                );
              })}
          </div>
        </>
      ) : (
        ""
      )}

      {!!check3 && check3.length > 0 ? (
        <>
          <div>
            <SoftTypography fontWeight="bold" fontSize="16px" marginBottom="8px" mt={2}>
              <span style={{ borderBottom: "2px solid" }}>Symptoms Associated with Injuries</span>
            </SoftTypography>
            {!!check3 &&
              check3.map((data, i) => {
                const value =
                  !!injuries && Object.keys(injuries).filter((keyName) => keyName === data.name);
                console.log("valueaaaa", value);
                return (
                  <>
                    <Grid container className="conditions">
                      <Grid item lg={2}>
                        <span style={{ fontSize: "16px", marginRight: "0.5rem" }}>{data.name}</span>
                      </Grid>

                      <Grid item lg={10}>
                        <input
                          value={!!injuries ? injuries[value] : ""}
                          type="text"
                          name={`injuries.${data.name}`}
                          onChange={formik.handleChange}
                        />
                      </Grid>
                    </Grid>
                  </>
                );
              })}
          </div>
        </>
      ) : (
        ""
      )}

      {!!check4 && check4.length > 0 ? (
        <>
          <div>
            <SoftTypography fontWeight="bold" fontSize="16px" marginBottom="8px" mt={2}>
              <span style={{ borderBottom: "2px solid" }}>Brain/Neuropsych/MTBI/PTSD Symptoms</span>
            </SoftTypography>
            {!!check4 &&
              check4.map((data, i) => {
                const value =
                  !!brain && Object.keys(brain).filter((keyName) => keyName === data.name);
                console.log("valueaaaa", value);
                return (
                  <>
                    <Grid container className="conditions">
                      <Grid item lg={2}>
                        <span style={{ fontSize: "16px", marginRight: "0.5rem" }}>{data.name}</span>
                      </Grid>

                      <Grid item lg={10}>
                        <input
                          value={!!brain ? brain[value] : ""}
                          type="text"
                          name={`brain.${data.name}`}
                          onChange={formik.handleChange}
                        />
                      </Grid>
                    </Grid>
                  </>
                );
              })}
          </div>
        </>
      ) : (
        ""
      )}
    </div>
  );
}
Pain.propTypes = {
  formData: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  formik: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  form: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  index: PropTypes.oneOfType([PropTypes.number, PropTypes.func]).isRequired,
  page12: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};
export default Pain;
