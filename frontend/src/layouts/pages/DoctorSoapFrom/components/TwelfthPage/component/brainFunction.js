import { Checkbox, FormControlLabel } from "@mui/material";
import SoftBox from "components/SoftBox";
import SoftSelect from "components/SoftSelect";
// import React from "react";
import { Grid, Radio } from "@mui/material";

import PropTypes from "prop-types";
// import FormField from "../../FormField";
import { useSelector } from "react-redux";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { clientIntakeFormGet } from "store/actions/actions";
import { getDoctorShopFormDataAction } from "store/actions/actions";

const BrainFunction = ({ form, stepIndex,clientIntakeDetails }) => {
  const dispatch = useDispatch();
  // const clientIntakeformDetails = useSelector((state) => state.auth.doctorShopForm?.page11);
  console.log("clientIntakeformDetails...", clientIntakeDetails);
  const soappatientId = useSelector((state) => state.auth.patientSoapData.patientId);
  const UserId = useSelector((state) => state.auth.auth._id);
  const token = useSelector((state) => state.auth.auth.idToken);
  const patientSoapFormDetail = useSelector((state) => state?.auth?.patientSoapFormDetail);
  const selectedPatientId = useSelector((state) => state.auth.doctorShopForm?.patientId);

  // const clientIntakeformDetails = useSelector((state) => state.auth.clientIntakeForm?.page19);
  // const clientIntakeformDetails11 = useSelector((state) => state.auth.clientIntakeForm?.page20);

  // const clientIntakeformDetails21 = useSelector((state) => state.auth.clientIntakeForm?.page21);
  // const clientIntakeformDetails22 = useSelector((state) => state.auth.clientIntakeForm?.page22);
  // const clientIntakeformDetails23 = useSelector((state) => state.auth.clientIntakeForm?.page23);

  const clientIntakeformDetails = clientIntakeDetails?.page19;
  const clientIntakeformDetails11 = clientIntakeDetails?.page20;

  const clientIntakeformDetails21 = clientIntakeDetails?.page21;
  const clientIntakeformDetails22 = clientIntakeDetails?.page22;
  const clientIntakeformDetails23 = clientIntakeDetails?.page23;

  useEffect(() => {
      dispatch(getDoctorShopFormDataAction({ patientId: soappatientId, /*practitionerId: UserId,*/ token: token }));
    }, []);
  useEffect(() => {
    let patientId = selectedPatientId ? selectedPatientId : soappatientId;

    if (patientSoapFormDetail.shouldShowPatientSoapFormDetail) {
      patientId = patientSoapFormDetail.patientId;
    }
    dispatch(
      getDoctorShopFormDataAction({
        patientId: patientId,
        /*practitionerId: UserId,*/ token: token,
      })
    );
  }, [stepIndex]);

  console.log("vvv", clientIntakeformDetails);
  const sec1 = clientIntakeformDetails?.sections1;
  const sec2 = clientIntakeformDetails?.sections2;
  const sec3 = clientIntakeformDetails?.sections3;
  const sec4 = clientIntakeformDetails?.sections4;
  const sec5 = clientIntakeformDetails?.sections5;
  const sec6 = clientIntakeformDetails11?.sections6;
  const sec7 = clientIntakeformDetails11?.sections7;
  const sec8 = clientIntakeformDetails11?.sections8;
  const sec9 = clientIntakeformDetails11?.sections9;
  const sec10 = clientIntakeformDetails11?.sections10;
  const sec11 = clientIntakeformDetails11?.sections11;

  const nsec1 = clientIntakeformDetails21?.sections1;
  const nsec2 = clientIntakeformDetails21?.sections2;
  const nsec3 = clientIntakeformDetails21?.sections3;
  const nsec4 = clientIntakeformDetails21?.sections4;
  const nsec5 = clientIntakeformDetails21?.sections5;
  const nsec6 = clientIntakeformDetails21?.sections6;
  const nsec7 = clientIntakeformDetails21?.sections7;
  const nsec8 = clientIntakeformDetails21?.sections8;

  const nsec9 = clientIntakeformDetails22?.section9;
  const nsec10 = clientIntakeformDetails22?.section10;
  const nsec11 = clientIntakeformDetails22?.section11;
  const nsec12 = clientIntakeformDetails22?.section12;
  const nsec13 = clientIntakeformDetails22?.section13;
  const nsec14 = clientIntakeformDetails22?.section14;

  const nut1 = clientIntakeformDetails23?.sectionsA;
  const nut2 = clientIntakeformDetails23?.sectionsB;
  const nut3 = clientIntakeformDetails23?.sections1;
  const nut4 = clientIntakeformDetails23?.sectionsC1;
  const nut5 = clientIntakeformDetails23?.sectionsC2;
  const nut6 = clientIntakeformDetails23?.section2;
  const nut7 = clientIntakeformDetails23?.section3;
  const nut8 = clientIntakeformDetails23?.section4;
  const nut9 = clientIntakeformDetails23?.section5;

  console.log("nsec6", nsec6);

  const check1 = sec1?.filter(
    (item) =>
      item.checkbox1 === true ||
      item.checkbox2 === true ||
      item.checkbox3 === true ||
      item.checkbox4 === true
  );
  const check2 = sec2?.filter(
    (item) =>
      item.checkbox1 === true ||
      item.checkbox2 === true ||
      item.checkbox3 === true ||
      item.checkbox4 === true
  );
  const check3 = sec3?.filter(
    (item) =>
      item.checkbox1 === true ||
      item.checkbox2 === true ||
      item.checkbox3 === true ||
      item.checkbox4 === true
  );
  const check4 = sec4?.filter(
    (item) =>
      item.checkbox1 === true ||
      item.checkbox2 === true ||
      item.checkbox3 === true ||
      item.checkbox4 === true
  );
  const check5 = sec5?.filter(
    (item) =>
      item.checkbox1 === true ||
      item.checkbox2 === true ||
      item.checkbox3 === true ||
      item.checkbox4 === true
  );
  const check6 = sec6?.filter(
    (item) =>
      item.checkbox1 === true ||
      item.checkbox2 === true ||
      item.checkbox3 === true ||
      item.checkbox4 === true
  );
  const check7 = sec7?.filter(
    (item) =>
      item.checkbox1 === true ||
      item.checkbox2 === true ||
      item.checkbox3 === true ||
      item.checkbox4 === true
  );
  const check8 = sec8?.filter(
    (item) =>
      item.checkbox1 === true ||
      item.checkbox2 === true ||
      item.checkbox3 === true ||
      item.checkbox4 === true
  );
  const check9 = sec9?.filter(
    (item) =>
      item.checkbox1 === true ||
      item.checkbox2 === true ||
      item.checkbox3 === true ||
      item.checkbox4 === true
  );
  const check10 = sec10?.filter(
    (item) =>
      item.checkbox1 === true ||
      item.checkbox2 === true ||
      item.checkbox3 === true ||
      item.checkbox4 === true
  );
  const check11 = sec11?.filter(
    (item) =>
      item.checkbox1 === true ||
      item.checkbox2 === true ||
      item.checkbox3 === true ||
      item.checkbox4 === true
  );

  const ncheck1 = nsec1?.filter(
    (item) =>
      item.checkbox1 === true ||
      item.checkbox2 === true ||
      item.checkbox3 === true ||
      item.checkbox4 === true
  );
  const ncheck2 = nsec2?.filter(
    (item) =>
      item.checkbox1 === true ||
      item.checkbox2 === true ||
      item.checkbox3 === true ||
      item.checkbox4 === true
  );
  const ncheck3 = nsec3?.filter(
    (item) =>
      item.checkbox1 === true ||
      item.checkbox2 === true ||
      item.checkbox3 === true ||
      item.checkbox4 === true
  );
  const ncheck4 = nsec4?.filter(
    (item) =>
      item.checkbox1 === true ||
      item.checkbox2 === true ||
      item.checkbox3 === true ||
      item.checkbox4 === true
  );
  const ncheck5 = nsec5?.filter(
    (item) =>
      item.checkbox1 === true ||
      item.checkbox2 === true ||
      item.checkbox3 === true ||
      item.checkbox4 === true
  );
  const ncheck6 = nsec6?.filter(
    (item) =>
      !!item.sections6radio ||
      item.checkbox1 === true ||
      item.checkbox2 === true ||
      item.checkbox3 === true ||
      item.checkbox4 === true
  );
  const ncheck7 = nsec7?.filter(
    (item) =>
      !!item.sections7radio ||
      item.checkbox1 === true ||
      item.checkbox2 === true ||
      item.checkbox3 === true ||
      item.checkbox4 === true
  );
  const ncheck8 = nsec8?.filter(
    (item) =>
      !!item.sections8radio ||
      item.checkbox1 === true ||
      item.checkbox2 === true ||
      item.checkbox3 === true ||
      item.checkbox4 === true
  );
  const ncheck9 = nsec9?.filter(
    (item) =>
      !!item.checkboxredio9 ||
      item.checkbox1 === true ||
      item.checkbox2 === true ||
      item.checkbox3 === true ||
      item.checkbox4 === true
  );
  const ncheck10 = nsec10?.filter(
    (item) =>
      !!item.checkboxredio1 ||
      item.checkbox1 === true ||
      item.checkbox2 === true ||
      item.checkbox3 === true ||
      item.checkbox4 === true
  );
  const ncheck11 = nsec11?.filter(
    (item) =>
      item.checkbox1 === true ||
      item.checkbox2 === true ||
      item.checkbox3 === true ||
      item.checkbox4 === true
  );
  const ncheck12 = nsec12?.filter(
    (item) =>
      !!item.checkboxredio12 ||
      item.checkbox1 === true ||
      item.checkbox2 === true ||
      item.checkbox3 === true ||
      item.checkbox4 === true
  );
  const ncheck13 = nsec13?.filter(
    (item) =>
      item.checkbox1 === true ||
      item.checkbox2 === true ||
      item.checkbox3 === true ||
      item.checkbox4 === true
  );
  const ncheck14 = nsec14?.filter(
    (item) =>
      item.checkbox1 === true ||
      item.checkbox2 === true ||
      item.checkbox3 === true ||
      item.checkbox4 === true
  );
  const nutsec1 = nut1?.filter(
    (item) =>
      item.checkbox1 === true ||
      item.checkbox2 === true ||
      item.checkbox3 === true ||
      item.checkbox4 === true
  );
  const nutsec2 = nut2?.filter(
    (item) =>
      item.checkbox1 === true ||
      item.checkbox2 === true ||
      item.checkbox3 === true ||
      item.checkbox4 === true
  );
  const nutsec3 = nut3?.filter(
    (item) =>
      item.checkbox1 === true ||
      item.checkbox2 === true ||
      item.checkbox3 === true ||
      item.checkbox4 === true
  );
  const nutsec4 = nut4?.filter(
    (item) =>
      item.checkbox1 === true ||
      item.checkbox2 === true ||
      item.checkbox3 === true ||
      item.checkbox4 === true
  );
  const nutsec5 = nut5?.filter(
    (item) =>
      item.checkbox1 === true ||
      item.checkbox2 === true ||
      item.checkbox3 === true ||
      item.checkbox4 === true
  );
  const nutsec6 = nut6?.filter(
    (item) =>
      item.checkbox1 === true ||
      item.checkbox2 === true ||
      item.checkbox3 === true ||
      item.checkbox4 === true
  );
  const nutsec7 = nut7?.filter(
    (item) =>
      item.checkbox1 === true ||
      item.checkbox2 === true ||
      item.checkbox3 === true ||
      item.checkbox4 === true
  );
  const nutsec8 = nut8?.filter(
    (item) =>
      item.checkbox1 === true ||
      item.checkbox2 === true ||
      item.checkbox3 === true ||
      item.checkbox4 === true
  );
  const nutsec9 = nut9?.filter(
    (item) =>
      item.checkbox1 === true ||
      item.checkbox2 === true ||
      item.checkbox3 === true ||
      item.checkbox4 === true
  );

  // useEffect(() => {
  //     dispatch(clientIntakeFormGet({ patientId: soappatientId,/* practitionerId: UserId,*/ token: token }));
  // }, []);
  // useEffect(() => {
  //     console.log("running log 13.");
  //     dispatch(clientIntakeFormGet({ patientId: soappatientId,/* practitionerId: UserId, */token: token }));
  // }, [stepIndex]);
  return (
    <SoftBox>
      {check1 === undefined ? (
        ""
      ) : (
        <>
          <table
            style={{ width: "100%", height: "100%", overflow: "auto" }}
            border={1}
            className="content-table"
          >
            <thead>
              <tr>
                <td
                  style={{
                    textAlign: "center",
                    padding: "5px",
                    fontSize: "18px",
                    color: "#344767",
                  }}
                  colSpan={2}
                >
                  LMPQRSTU POINTS:
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    textAlign: "center",
                    padding: "5px",
                    fontSize: "18px",
                    color: "#344767",
                  }}
                  colSpan={2}
                >
                  SECTION1
                </td>
              </tr>
              <tr>
                <th style={{ padding: "5px", fontSize: "15px", color: "#344767" }}>Question</th>
                <th style={{ padding: "5px", fontSize: "15px", color: "#344767" }}>Answer</th>
              </tr>
              
            </thead>

            <tbody>
              {check1 &&
                check1.map((data, item) => {
                  return (
                    <>
                      <tr>
                        <td
                          style={{
                            padding: "5px",
                            paddingLeft: "10px",
                            fontSize: "15px",
                            fontWeight: "550",
                          }}
                        >
                          {data.name}
                        </td>
                        <td style={{ paddingLeft: "10px" }}>
                          <Grid container>
                            <Grid item lg={1} sm={1} md={1} xs={3}>
                              <Checkbox
                                label="0"
                                style={{ marginLeft: "5px" }}
                                checked={data.checkbox1}
                              />
                            </Grid>
                            <Grid item lg={1} sm={1} md={1} xs={3}>
                              <Checkbox style={{ marginLeft: "5px" }} checked={data.checkbox2} />
                            </Grid>{" "}
                            <Grid item lg={1} sm={1} md={1} xs={3}>
                              <Checkbox style={{ marginLeft: "5px" }} checked={data.checkbox3} />
                            </Grid>{" "}
                            <Grid item lg={1} sm={1} md={1} xs={3}>
                              <Checkbox style={{ marginLeft: "5px" }} checked={data.checkbox4} />
                            </Grid>
                          </Grid>
                        </td>
                      </tr>
                    </>
                  );
                })}
            </tbody>
          </table>
        </>
      )}
      {check2 === undefined ? (
        ""
      ) : (
        <>
          <table
            style={{ width: "100%", height: "100%", overflow: "auto" }}
            border={1}
            className="content-table"
          >
            <thead>
              <tr>
                <td
                  style={{
                    textAlign: "center",
                    padding: "5px",
                    fontSize: "18px",
                    color: "#344767",
                  }}
                  colSpan={2}
                >
                  SECTION2
                </td>
              </tr>
              <tr>
                <th style={{ padding: "5px", fontSize: "15px", color: "#344767" }}>Question</th>
                <th style={{ padding: "5px", fontSize: "15px", color: "#344767" }}>Answer</th>
              </tr>
            </thead>
            <tbody>
              {check2 &&
                check2.map((data, item) => {
                  return (
                    <>
                      <tr>
                        <td
                          style={{
                            padding: "5px",
                            paddingLeft: "10px",
                            fontSize: "15px",
                            fontWeight: "550",
                          }}
                        >
                          {data.name}
                        </td>
                        <td style={{ paddingLeft: "10px" }}>
                          <Grid container>
                            <Grid item lg={1} sm={1} md={1} xs={3}>
                              <Checkbox
                                label="0"
                                style={{ marginLeft: "5px" }}
                                checked={data.checkbox1}
                              />
                            </Grid>
                            <Grid item lg={1} sm={1} md={1} xs={3}>
                              <Checkbox style={{ marginLeft: "5px" }} checked={data.checkbox2} />
                            </Grid>{" "}
                            <Grid item lg={1} sm={1} md={1} xs={3}>
                              <Checkbox style={{ marginLeft: "5px" }} checked={data.checkbox3} />
                            </Grid>{" "}
                            <Grid item lg={1} sm={1} md={1} xs={3}>
                              <Checkbox style={{ marginLeft: "5px" }} checked={data.checkbox4} />
                            </Grid>
                          </Grid>
                        </td>
                      </tr>
                    </>
                  );
                })}
            </tbody>
          </table>
        </>
      )}
      {check3 === undefined ? (
        ""
      ) : (
        <>
          <table
            style={{ width: "100%", height: "100%", overflow: "auto" }}
            border={1}
            className="content-table"
          >
            <thead>
              <tr>
                <td
                  style={{
                    textAlign: "center",
                    padding: "5px",
                    fontSize: "18px",
                    color: "#344767",
                  }}
                  colSpan={2}
                >
                  SECTION3
                </td>
              </tr>
              <tr>
                <th style={{ padding: "5px", fontSize: "15px", color: "#344767" }}>Question</th>
                <th style={{ padding: "5px", fontSize: "15px", color: "#344767" }}>Answer</th>
              </tr>
            </thead>
            <tbody>
              {check3 &&
                check3.map((data, item) => {
                  return (
                    <>
                      <tr>
                        <td
                          style={{
                            padding: "5px",
                            paddingLeft: "10px",
                            fontSize: "15px",
                            fontWeight: "550",
                          }}
                        >
                          {data.name}
                        </td>
                        <td style={{ paddingLeft: "10px" }}>
                          <Grid container>
                            <Grid item lg={1} sm={1} md={1} xs={3}>
                              <Checkbox
                                label="0"
                                style={{ marginLeft: "5px" }}
                                checked={data.checkbox1}
                              />
                            </Grid>
                            <Grid item lg={1} sm={1} md={1} xs={3}>
                              <Checkbox style={{ marginLeft: "5px" }} checked={data.checkbox2} />
                            </Grid>{" "}
                            <Grid item lg={1} sm={1} md={1} xs={3}>
                              <Checkbox style={{ marginLeft: "5px" }} checked={data.checkbox3} />
                            </Grid>{" "}
                            <Grid item lg={1} sm={1} md={1} xs={3}>
                              <Checkbox style={{ marginLeft: "5px" }} checked={data.checkbox4} />
                            </Grid>
                          </Grid>
                        </td>
                      </tr>
                    </>
                  );
                })}
            </tbody>
          </table>
        </>
      )}
      {check4 === undefined ? (
        ""
      ) : (
        <>
          <table
            style={{ width: "100%", height: "100%", overflow: "auto" }}
            border={1}
            className="content-table"
          >
            <thead>
              <tr>
                <td
                  style={{
                    textAlign: "center",
                    padding: "5px",
                    fontSize: "18px",
                    color: "#344767",
                  }}
                  colSpan={2}
                >
                  SECTION4
                </td>
              </tr>
              <tr>
                <th style={{ padding: "5px", fontSize: "15px", color: "#344767" }}>Question</th>
                <th style={{ padding: "5px", fontSize: "15px", color: "#344767" }}>Answer</th>
              </tr>
            </thead>
            <tbody>
              {check4 &&
                check4.map((data, item) => {
                  return (
                    <>
                      <tr>
                        <td
                          style={{
                            padding: "5px",
                            paddingLeft: "10px",
                            fontSize: "15px",
                            fontWeight: "550",
                          }}
                        >
                          {data.name}
                        </td>
                        <td style={{ paddingLeft: "10px" }}>
                          <Grid container>
                            <Grid item lg={1} sm={1} md={1} xs={3}>
                              <Checkbox
                                label="0"
                                style={{ marginLeft: "5px" }}
                                checked={data.checkbox1}
                              />
                            </Grid>
                            <Grid item lg={1} sm={1} md={1} xs={3}>
                              <Checkbox style={{ marginLeft: "5px" }} checked={data.checkbox2} />
                            </Grid>{" "}
                            <Grid item lg={1} sm={1} md={1} xs={3}>
                              <Checkbox style={{ marginLeft: "5px" }} checked={data.checkbox3} />
                            </Grid>{" "}
                            <Grid item lg={1} sm={1} md={1} xs={3}>
                              <Checkbox style={{ marginLeft: "5px" }} checked={data.checkbox4} />
                            </Grid>
                          </Grid>
                        </td>
                      </tr>
                    </>
                  );
                })}
            </tbody>
          </table>
        </>
      )}
      {check5 === undefined ? (
        ""
      ) : (
        <>
          <table
            style={{ width: "100%", height: "100%", overflow: "auto" }}
            border={1}
            className="content-table"
          >
            <thead>
              <tr>
                <td
                  style={{
                    textAlign: "center",
                    padding: "5px",
                    fontSize: "18px",
                    color: "#344767",
                  }}
                  colSpan={2}
                >
                  SECTION5
                </td>
              </tr>
              <tr>
                <th style={{ padding: "5px", fontSize: "15px", color: "#344767" }}>Question</th>
                <th style={{ padding: "5px", fontSize: "15px", color: "#344767" }}>Answer</th>
              </tr>
            </thead>
            <tbody>
              {check5 &&
                check5.map((data, item) => {
                  return (
                    <>
                      <tr>
                        <td
                          style={{
                            padding: "5px",
                            paddingLeft: "10px",
                            fontSize: "15px",
                            fontWeight: "550",
                          }}
                        >
                          {data.name}
                        </td>
                        <td style={{ paddingLeft: "10px" }}>
                          <Grid container>
                            <Grid item lg={1} sm={1} md={1} xs={3}>
                              <Checkbox
                                label="0"
                                style={{ marginLeft: "5px" }}
                                checked={data.checkbox1}
                              />
                            </Grid>
                            <Grid item lg={1} sm={1} md={1} xs={3}>
                              <Checkbox style={{ marginLeft: "5px" }} checked={data.checkbox2} />
                            </Grid>{" "}
                            <Grid item lg={1} sm={1} md={1} xs={3}>
                              <Checkbox style={{ marginLeft: "5px" }} checked={data.checkbox3} />
                            </Grid>{" "}
                            <Grid item lg={1} sm={1} md={1} xs={3}>
                              <Checkbox style={{ marginLeft: "5px" }} checked={data.checkbox4} />
                            </Grid>
                          </Grid>
                        </td>
                      </tr>
                    </>
                  );
                })}
            </tbody>
          </table>
        </>
      )}
      {check6 === undefined ? (
        ""
      ) : (
        <>
          <table
            style={{ width: "100%", height: "100%", overflow: "auto" }}
            border={1}
            className="content-table"
          >
            <thead>
              <tr>
                <td
                  style={{
                    textAlign: "center",
                    padding: "5px",
                    fontSize: "18px",
                    color: "#344767",
                  }}
                  colSpan={2}
                >
                  SECTION6
                </td>
              </tr>
              <tr>
                <th style={{ padding: "5px", fontSize: "15px", color: "#344767" }}>Question</th>
                <th style={{ padding: "5px", fontSize: "15px", color: "#344767" }}>Answer</th>
              </tr>
            </thead>
            <tbody>
              {check6 &&
                check6.map((data, item) => {
                  return (
                    <>
                      <tr>
                        <td
                          style={{
                            padding: "5px",
                            paddingLeft: "10px",
                            fontSize: "15px",
                            fontWeight: "550",
                          }}
                        >
                          {data.name}
                        </td>
                        <td style={{ paddingLeft: "10px" }}>
                          <Grid container>
                            <Grid item lg={1} sm={1} md={1} xs={3}>
                              <Checkbox
                                label="0"
                                style={{ marginLeft: "5px" }}
                                checked={data.checkbox1}
                              />
                            </Grid>
                            <Grid item lg={1} sm={1} md={1} xs={3}>
                              <Checkbox style={{ marginLeft: "5px" }} checked={data.checkbox2} />
                            </Grid>{" "}
                            <Grid item lg={1} sm={1} md={1} xs={3}>
                              <Checkbox style={{ marginLeft: "5px" }} checked={data.checkbox3} />
                            </Grid>{" "}
                            <Grid item lg={1} sm={1} md={1} xs={3}>
                              <Checkbox style={{ marginLeft: "5px" }} checked={data.checkbox4} />
                            </Grid>
                          </Grid>
                        </td>
                      </tr>
                    </>
                  );
                })}
            </tbody>
          </table>
        </>
      )}
      {check7 === undefined ? (
        ""
      ) : (
        <>
          <table
            style={{ width: "100%", height: "100%", overflow: "auto" }}
            border={1}
            className="content-table"
          >
            <thead>
              <tr>
                <td
                  style={{
                    textAlign: "center",
                    padding: "5px",
                    fontSize: "18px",
                    color: "#344767",
                  }}
                  colSpan={2}
                >
                  SECTION7
                </td>
              </tr>
              <tr>
                <th style={{ padding: "5px", fontSize: "15px", color: "#344767" }}>Question</th>
                <th style={{ padding: "5px", fontSize: "15px", color: "#344767" }}>Answer</th>
              </tr>
            </thead>
            <tbody>
              {check7 &&
                check7.map((data, item) => {
                  return (
                    <>
                      <tr>
                        <td
                          style={{
                            padding: "5px",
                            paddingLeft: "10px",
                            fontSize: "15px",
                            fontWeight: "550",
                          }}
                        >
                          {data.name}
                        </td>
                        <td style={{ paddingLeft: "10px" }}>
                          <Grid container>
                            <Grid item lg={1} sm={1} md={1} xs={3}>
                              <Checkbox
                                label="0"
                                style={{ marginLeft: "5px" }}
                                checked={data.checkbox1}
                              />
                            </Grid>
                            <Grid item lg={1} sm={1} md={1} xs={3}>
                              <Checkbox style={{ marginLeft: "5px" }} checked={data.checkbox2} />
                            </Grid>{" "}
                            <Grid item lg={1} sm={1} md={1} xs={3}>
                              <Checkbox style={{ marginLeft: "5px" }} checked={data.checkbox3} />
                            </Grid>{" "}
                            <Grid item lg={1} sm={1} md={1} xs={3}>
                              <Checkbox style={{ marginLeft: "5px" }} checked={data.checkbox4} />
                            </Grid>
                          </Grid>
                        </td>
                      </tr>
                    </>
                  );
                })}
            </tbody>
          </table>
        </>
      )}
      {check8 === undefined ? (
        ""
      ) : (
        <>
          <table
            style={{ width: "100%", height: "100%", overflow: "auto" }}
            border={1}
            className="content-table"
          >
            <thead>
              <tr>
                <td
                  style={{
                    textAlign: "center",
                    padding: "5px",
                    fontSize: "18px",
                    color: "#344767",
                  }}
                  colSpan={2}
                >
                  section8
                </td>
              </tr>
              <tr>
                <th style={{ padding: "5px", fontSize: "15px", color: "#344767" }}>Question</th>
                <th style={{ padding: "5px", fontSize: "15px", color: "#344767" }}>Answer</th>
              </tr>
            </thead>
            <tbody>
              {check8 &&
                check8.map((data, item) => {
                  return (
                    <>
                      <tr>
                        <td
                          style={{
                            padding: "5px",
                            paddingLeft: "10px",
                            fontSize: "15px",
                            fontWeight: "550",
                          }}
                        >
                          {data.name}
                        </td>
                        <td style={{ paddingLeft: "10px" }}>
                          <Grid container>
                            <Grid item lg={1} sm={1} md={1} xs={3}>
                              <Checkbox
                                label="0"
                                style={{ marginLeft: "5px" }}
                                checked={data.checkbox1}
                              />
                            </Grid>
                            <Grid item lg={1} sm={1} md={1} xs={3}>
                              <Checkbox style={{ marginLeft: "5px" }} checked={data.checkbox2} />
                            </Grid>{" "}
                            <Grid item lg={1} sm={1} md={1} xs={3}>
                              <Checkbox style={{ marginLeft: "5px" }} checked={data.checkbox3} />
                            </Grid>{" "}
                            <Grid item lg={1} sm={1} md={1} xs={3}>
                              <Checkbox style={{ marginLeft: "5px" }} checked={data.checkbox4} />
                            </Grid>
                          </Grid>
                        </td>
                      </tr>
                    </>
                  );
                })}
            </tbody>
          </table>
        </>
      )}
      {check9 === undefined ? (
        ""
      ) : (
        <>
          <table
            style={{ width: "100%", height: "100%", overflow: "auto" }}
            border={1}
            className="content-table"
          >
            <thead>
              <tr>
                <td
                  style={{
                    textAlign: "center",
                    padding: "5px",
                    fontSize: "18px",
                    color: "#344767",
                  }}
                  colSpan={2}
                >
                  SECTION9
                </td>
              </tr>
              <tr>
                <th style={{ padding: "5px", fontSize: "15px", color: "#344767" }}>Question</th>
                <th style={{ padding: "5px", fontSize: "15px", color: "#344767" }}>Answer</th>
              </tr>
            </thead>
            <tbody>
              {check9 &&
                check9.map((data, item) => {
                  return (
                    <>
                      <tr>
                        <td
                          style={{
                            padding: "5px",
                            paddingLeft: "10px",
                            fontSize: "15px",
                            fontWeight: "550",
                          }}
                        >
                          {data.name}
                        </td>
                        <td style={{ paddingLeft: "10px" }}>
                          <Grid container>
                            <Grid item lg={1} sm={1} md={1} xs={3}>
                              <Checkbox
                                label="0"
                                style={{ marginLeft: "5px" }}
                                checked={data.checkbox1}
                              />
                            </Grid>
                            <Grid item lg={1} sm={1} md={1} xs={3}>
                              <Checkbox style={{ marginLeft: "5px" }} checked={data.checkbox2} />
                            </Grid>{" "}
                            <Grid item lg={1} sm={1} md={1} xs={3}>
                              <Checkbox style={{ marginLeft: "5px" }} checked={data.checkbox3} />
                            </Grid>{" "}
                            <Grid item lg={1} sm={1} md={1} xs={3}>
                              <Checkbox style={{ marginLeft: "5px" }} checked={data.checkbox4} />
                            </Grid>
                          </Grid>
                        </td>
                      </tr>
                    </>
                  );
                })}
            </tbody>
          </table>
        </>
      )}
      {check10 === undefined ? (
        ""
      ) : (
        <>
          <table
            style={{ width: "100%", height: "100%", overflow: "auto" }}
            border={1}
            className="content-table"
          >
            <thead>
              <tr>
                <td
                  style={{
                    textAlign: "center",
                    padding: "5px",
                    fontSize: "18px",
                    color: "#344767",
                  }}
                  colSpan={2}
                >
                  SECTION10
                </td>
              </tr>
              <tr>
                <th style={{ padding: "5px", fontSize: "15px", color: "#344767" }}>Question</th>
                <th style={{ padding: "5px", fontSize: "15px", color: "#344767" }}>Answer</th>
              </tr>
            </thead>
            <tbody>
              {check10 &&
                check10.map((data, item) => {
                  return (
                    <>
                      <tr>
                        <td
                          style={{
                            padding: "5px",
                            paddingLeft: "10px",
                            fontSize: "15px",
                            fontWeight: "550",
                          }}
                        >
                          {data.name}
                        </td>
                        <td style={{ paddingLeft: "10px" }}>
                          <Grid container>
                            <Grid item lg={1} sm={1} md={1} xs={3}>
                              <Checkbox
                                label="0"
                                style={{ marginLeft: "5px" }}
                                checked={data.checkbox1}
                              />
                            </Grid>
                            <Grid item lg={1} sm={1} md={1} xs={3}>
                              <Checkbox style={{ marginLeft: "5px" }} checked={data.checkbox2} />
                            </Grid>{" "}
                            <Grid item lg={1} sm={1} md={1} xs={3}>
                              <Checkbox style={{ marginLeft: "5px" }} checked={data.checkbox3} />
                            </Grid>{" "}
                            <Grid item lg={1} sm={1} md={1} xs={3}>
                              <Checkbox style={{ marginLeft: "5px" }} checked={data.checkbox4} />
                            </Grid>
                          </Grid>
                        </td>
                      </tr>
                    </>
                  );
                })}
            </tbody>
          </table>
        </>
      )}
      {check11 === undefined ? (
        ""
      ) : (
        <>
          <table
            style={{ width: "100%", height: "100%", overflow: "auto" }}
            border={1}
            className="content-table"
          >
            <thead>
              <tr>
                <td
                  style={{
                    textAlign: "center",
                    padding: "5px",
                    fontSize: "18px",
                    color: "#344767",
                  }}
                  colSpan={2}
                >
                  SECTION11
                </td>
              </tr>
              <tr>
                <th style={{ padding: "5px", fontSize: "15px", color: "#344767" }}>Question</th>
                <th style={{ padding: "5px", fontSize: "15px", color: "#344767" }}>Answer</th>
              </tr>
            </thead>
            <tbody>
              {check11 &&
                check11.map((data, item) => {
                  return (
                    <>
                      <tr>
                        <td
                          style={{
                            padding: "5px",
                            paddingLeft: "10px",
                            fontSize: "15px",
                            fontWeight: "550",
                          }}
                        >
                          {data.name}
                        </td>
                        <td style={{ paddingLeft: "10px" }}>
                          <Grid container>
                            <Grid item lg={1} sm={1} md={1} xs={3}>
                              <Checkbox
                                label="0"
                                style={{ marginLeft: "5px" }}
                                checked={data.checkbox1}
                              />
                            </Grid>
                            <Grid item lg={1} sm={1} md={1} xs={3}>
                              <Checkbox style={{ marginLeft: "5px" }} checked={data.checkbox2} />
                            </Grid>{" "}
                            <Grid item lg={1} sm={1} md={1} xs={3}>
                              <Checkbox style={{ marginLeft: "5px" }} checked={data.checkbox3} />
                            </Grid>{" "}
                            <Grid item lg={1} sm={1} md={1} xs={3}>
                              <Checkbox style={{ marginLeft: "5px" }} checked={data.checkbox4} />
                            </Grid>
                          </Grid>
                        </td>
                      </tr>
                    </>
                  );
                })}
            </tbody>
          </table>
        </>
      )}
      {ncheck1 === undefined ? (
        ""
      ) : (
        <>
          <table
            style={{ width: "100%", height: "100%", overflow: "auto" }}
            border={1}
            className="content-table"
          >
            <thead>
              <tr>
                <td
                  style={{
                    textAlign: "center",
                    padding: "5px",
                    fontSize: "18px",
                    color: "#344767",
                  }}
                  colSpan={2}
                >
                  BRAIN HEALTH AND NUTRITION ASSESSMENT FORM™ (BHNAF),SECTION1
                </td>
              </tr>
              <tr>
                <th style={{ padding: "5px", fontSize: "15px", color: "#344767" }}>Question</th>
                <th style={{ padding: "5px", fontSize: "15px", color: "#344767" }}>Answer</th>
              </tr>
            </thead>
            <tbody>
              {ncheck1 &&
                ncheck1.map((data, item) => {
                  return (
                    <>
                      <tr>
                        <td
                          style={{
                            padding: "5px",
                            paddingLeft: "10px",
                            fontSize: "15px",
                            fontWeight: "550",
                          }}
                        >
                          {data.name}
                        </td>
                        <td style={{ paddingLeft: "10px" }}>
                          <Grid container>
                            <Grid item lg={1} sm={1} md={1} xs={3}>
                              <Checkbox
                                label="0"
                                style={{ marginLeft: "5px" }}
                                checked={data.checkbox1}
                              />
                            </Grid>
                            <Grid item lg={1} sm={1} md={1} xs={3}>
                              <Checkbox style={{ marginLeft: "5px" }} checked={data.checkbox2} />
                            </Grid>{" "}
                            <Grid item lg={1} sm={1} md={1} xs={3}>
                              <Checkbox style={{ marginLeft: "5px" }} checked={data.checkbox3} />
                            </Grid>{" "}
                            <Grid item lg={1} sm={1} md={1} xs={3}>
                              <Checkbox style={{ marginLeft: "5px" }} checked={data.checkbox4} />
                            </Grid>
                          </Grid>
                        </td>
                      </tr>
                    </>
                  );
                })}
            </tbody>
          </table>
        </>
      )}
      {ncheck2 === undefined ? (
        ""
      ) : (
        <>
          <table
            style={{ width: "100%", height: "100%", overflow: "auto" }}
            border={1}
            className="content-table"
          >
            <thead>
              <tr>
                <td
                  style={{
                    textAlign: "center",
                    padding: "5px",
                    fontSize: "18px",
                    color: "#344767",
                  }}
                  colSpan={2}
                >
                  SECTION2
                </td>
              </tr>
              <tr>
                <th style={{ padding: "5px", fontSize: "15px", color: "#344767" }}>Question</th>
                <th style={{ padding: "5px", fontSize: "15px", color: "#344767" }}>Answer</th>
              </tr>
            </thead>

            <tbody>
              {ncheck2 &&
                ncheck2.map((data, item) => {
                  return (
                    <>
                      <tr>
                        <td
                          style={{
                            padding: "5px",
                            paddingLeft: "10px",
                            fontSize: "15px",
                            fontWeight: "550",
                          }}
                        >
                          {data.name}
                        </td>
                        <td style={{ paddingLeft: "10px" }}>
                          <Grid container>
                            <Grid item lg={1} sm={1} md={1} xs={3}>
                              <Checkbox
                                label="0"
                                style={{ marginLeft: "5px" }}
                                checked={data.checkbox1}
                              />
                            </Grid>
                            <Grid item lg={1} sm={1} md={1} xs={3}>
                              <Checkbox style={{ marginLeft: "5px" }} checked={data.checkbox2} />
                            </Grid>{" "}
                            <Grid item lg={1} sm={1} md={1} xs={3}>
                              <Checkbox style={{ marginLeft: "5px" }} checked={data.checkbox3} />
                            </Grid>{" "}
                            <Grid item lg={1} sm={1} md={1} xs={3}>
                              <Checkbox style={{ marginLeft: "5px" }} checked={data.checkbox4} />
                            </Grid>
                          </Grid>
                        </td>
                      </tr>
                    </>
                  );
                })}
            </tbody>
          </table>
        </>
      )}
      {ncheck3 === undefined ? (
        ""
      ) : (
        <>
          <table
            style={{ width: "100%", height: "100%", overflow: "auto" }}
            border={1}
            className="content-table"
          >
            <thead>
              <tr>
                <td
                  style={{
                    textAlign: "center",
                    padding: "5px",
                    fontSize: "18px",
                    color: "#344767",
                  }}
                  colSpan={2}
                >
                  SECTION3
                </td>
              </tr>
              <tr>
                <th style={{ padding: "5px", fontSize: "15px", color: "#344767" }}>Question</th>
                <th style={{ padding: "5px", fontSize: "15px", color: "#344767" }}>Answer</th>
              </tr>
            </thead>

            <tbody>
              {ncheck3 &&
                ncheck3.map((data, item) => {
                  return (
                    <>
                      <tr>
                        <td
                          style={{
                            padding: "5px",
                            paddingLeft: "10px",
                            fontSize: "15px",
                            fontWeight: "550",
                          }}
                        >
                          {data.name}
                        </td>
                        <td style={{ paddingLeft: "10px" }}>
                          <Grid container>
                            <Grid item lg={1} sm={1} md={1} xs={3}>
                              <Checkbox
                                label="0"
                                style={{ marginLeft: "5px" }}
                                checked={data.checkbox1}
                              />
                            </Grid>
                            <Grid item lg={1} sm={1} md={1} xs={3}>
                              <Checkbox style={{ marginLeft: "5px" }} checked={data.checkbox2} />
                            </Grid>{" "}
                            <Grid item lg={1} sm={1} md={1} xs={3}>
                              <Checkbox style={{ marginLeft: "5px" }} checked={data.checkbox3} />
                            </Grid>{" "}
                            <Grid item lg={1} sm={1} md={1} xs={3}>
                              <Checkbox style={{ marginLeft: "5px" }} checked={data.checkbox4} />
                            </Grid>
                          </Grid>
                        </td>
                      </tr>
                    </>
                  );
                })}
            </tbody>
          </table>
        </>
      )}
      {ncheck4 === undefined ? (
        ""
      ) : (
        <>
          <table
            style={{ width: "100%", height: "100%", overflow: "auto" }}
            border={1}
            className="content-table"
          >
            <thead>
              <tr>
                <td
                  style={{
                    textAlign: "center",
                    padding: "5px",
                    fontSize: "18px",
                    color: "#344767",
                  }}
                  colSpan={2}
                >
                  SECTION4
                </td>
              </tr>
              <tr>
                <th style={{ padding: "5px", fontSize: "15px", color: "#344767" }}>Question</th>
                <th style={{ padding: "5px", fontSize: "15px", color: "#344767" }}>Answer</th>
              </tr>
            </thead>

            <tbody>
              {ncheck4 &&
                ncheck4.map((data, item) => {
                  return (
                    <>
                      <tr>
                        <td
                          style={{
                            padding: "5px",
                            paddingLeft: "10px",
                            fontSize: "15px",
                            fontWeight: "550",
                          }}
                        >
                          {data.name}
                        </td>
                        <td style={{ paddingLeft: "10px" }}>
                          <Grid container>
                            <Grid item lg={1} sm={1} md={1} xs={3}>
                              <Checkbox
                                label="0"
                                style={{ marginLeft: "5px" }}
                                checked={data.checkbox1}
                              />
                            </Grid>
                            <Grid item lg={1} sm={1} md={1} xs={3}>
                              <Checkbox style={{ marginLeft: "5px" }} checked={data.checkbox2} />
                            </Grid>{" "}
                            <Grid item lg={1} sm={1} md={1} xs={3}>
                              <Checkbox style={{ marginLeft: "5px" }} checked={data.checkbox3} />
                            </Grid>{" "}
                            <Grid item lg={1} sm={1} md={1} xs={3}>
                              <Checkbox style={{ marginLeft: "5px" }} checked={data.checkbox4} />
                            </Grid>
                          </Grid>
                        </td>
                      </tr>
                    </>
                  );
                })}
            </tbody>
          </table>
        </>
      )}
      {ncheck5 === undefined ? (
        ""
      ) : (
        <>
          <table
            style={{ width: "100%", height: "100%", overflow: "auto" }}
            border={1}
            className="content-table"
          >
            <thead>
              <tr>
                <td
                  style={{
                    textAlign: "center",
                    padding: "5px",
                    fontSize: "18px",
                    color: "#344767",
                  }}
                  colSpan={2}
                >
                  SECTION5
                </td>
              </tr>
              <tr>
                <th style={{ padding: "5px", fontSize: "15px", color: "#344767" }}>Question</th>
                <th style={{ padding: "5px", fontSize: "15px", color: "#344767" }}>Answer</th>
              </tr>
            </thead>
            <tbody>
              {ncheck5 &&
                ncheck5.map((data, item) => {
                  return (
                    <>
                      <tr>
                        <td
                          style={{
                            padding: "5px",
                            paddingLeft: "10px",
                            fontSize: "15px",
                            fontWeight: "550",
                          }}
                        >
                          {data.name}
                        </td>
                        <td style={{ paddingLeft: "10px" }}>
                          <Grid container>
                            <Grid item lg={1} sm={1} md={1} xs={3}>
                              <Checkbox
                                label="0"
                                style={{ marginLeft: "5px" }}
                                checked={data.checkbox1}
                              />
                            </Grid>
                            <Grid item lg={1} sm={1} md={1} xs={3}>
                              <Checkbox style={{ marginLeft: "5px" }} checked={data.checkbox2} />
                            </Grid>{" "}
                            <Grid item lg={1} sm={1} md={1} xs={3}>
                              <Checkbox style={{ marginLeft: "5px" }} checked={data.checkbox3} />
                            </Grid>{" "}
                            <Grid item lg={1} sm={1} md={1} xs={3}>
                              <Checkbox style={{ marginLeft: "5px" }} checked={data.checkbox4} />
                            </Grid>
                          </Grid>
                        </td>
                      </tr>
                    </>
                  );
                })}
            </tbody>
          </table>
        </>
      )}
      {ncheck6 === undefined ? (
        ""
      ) : (
        <>
          <table
            style={{ width: "100%", height: "100%", overflow: "auto" }}
            border={1}
            className="content-table"
          >
            <thead>
              <tr>
                <td
                  style={{
                    textAlign: "center",
                    padding: "5px",
                    fontSize: "18px",
                    color: "#344767",
                  }}
                  colSpan={2}
                >
                  SECTION6
                </td>
              </tr>
              <tr>
                <th style={{ padding: "5px", fontSize: "15px", color: "#344767" }}>Question</th>
                <th style={{ padding: "5px", fontSize: "15px", color: "#344767" }}>Answer</th>
              </tr>
            </thead>

            <tbody>
              {ncheck6 &&
                ncheck6.map((data, item) => {
                  return (
                    <>
                      <tr>
                        <td
                          style={{
                            padding: "5px",
                            paddingLeft: "10px",
                            fontSize: "15px",
                            fontWeight: "550",
                          }}
                        >
                          {data.name}
                        </td>
                        <td style={{ paddingLeft: "10px" }}>
                          {data.name == "Abnormal gag reflex" ? (
                            <>
                              <Grid style={{ display: "flex" }}>
                                <Grid
                                  item
                                  lg={1}
                                  sm={1}
                                  md={1}
                                  xs={1}
                                  ml={4}
                                  style={{ display: "flex", justifyContent: "center" }}
                                >
                                  <span style={{ fontSize: "16px" }}>Yes</span>{" "}
                                  <Radio
                                    style={{ marginLeft: "5px" }}
                                    checked={data?.sections6radio == "yes"}
                                    value="yes"
                                  />
                                </Grid>
                                <Grid
                                  item
                                  lg={1}
                                  sm={1}
                                  md={1}
                                  xs={1}
                                  ml={2}
                                  style={{ display: "flex", justifyContent: "center" }}
                                >
                                  <span style={{ fontSize: "16px" }}>No</span>{" "}
                                  <Radio
                                    style={{ marginLeft: "5px" }}
                                    checked={data?.sections6radio == "no"}
                                    value="no"
                                  />
                                </Grid>
                              </Grid>
                            </>
                          ) : (
                            <>
                              <Grid container>
                                <Grid item lg={1} sm={1} md={1} xs={3}>
                                  <Checkbox
                                    label="0"
                                    style={{ marginLeft: "5px" }}
                                    checked={data.checkbox1}
                                  />
                                </Grid>
                                <Grid item lg={1} sm={1} md={1} xs={3}>
                                  <Checkbox
                                    style={{ marginLeft: "5px" }}
                                    checked={data.checkbox2}
                                  />
                                </Grid>{" "}
                                <Grid item lg={1} sm={1} md={1} xs={3}>
                                  <Checkbox
                                    style={{ marginLeft: "5px" }}
                                    checked={data.checkbox3}
                                  />
                                </Grid>{" "}
                                <Grid item lg={1} sm={1} md={1} xs={3}>
                                  <Checkbox
                                    style={{ marginLeft: "5px" }}
                                    checked={data.checkbox4}
                                  />
                                </Grid>
                              </Grid>
                            </>
                          )}
                        </td>
                      </tr>
                    </>
                  );
                })}
            </tbody>
          </table>
        </>
      )}
      {ncheck7 === undefined ? (
        ""
      ) : (
        <>
          <table
            style={{ width: "100%", height: "100%", overflow: "auto" }}
            border={1}
            className="content-table"
          >
            <thead>
              <tr>
                <td
                  style={{
                    textAlign: "center",
                    padding: "5px",
                    fontSize: "18px",
                    color: "#344767",
                  }}
                  colSpan={2}
                >
                  section7
                </td>
              </tr>
              <tr>
                <th style={{ padding: "5px", fontSize: "15px", color: "#344767" }}>Question</th>
                <th style={{ padding: "5px", fontSize: "15px", color: "#344767" }}>Answer</th>
              </tr>
            </thead>
            <tbody>
              {ncheck7 &&
                ncheck7.map((data, item) => {
                  return (
                    <>
                      <tr>
                        <td
                          style={{
                            padding: "5px",
                            paddingLeft: "10px",
                            fontSize: "15px",
                            fontWeight: "550",
                          }}
                        >
                          {data.name}
                        </td>
                        <td style={{ paddingLeft: "10px" }}>
                          {data.name == "Brain fog (unclear thoughts or concentration)" ||
                          data.name == "Pain and inflammation" ||
                          data.name == "Noticeable variations in mental speed" ? (
                            <>
                              <Grid style={{ display: "flex" }}>
                                <Grid
                                  item
                                  lg={1}
                                  sm={1}
                                  md={1}
                                  xs={1}
                                  ml={4}
                                  style={{ display: "flex", justifyContent: "center" }}
                                >
                                  <span style={{ fontSize: "16px" }}>Yes</span>{" "}
                                  <Radio
                                    style={{ marginLeft: "5px" }}
                                    checked={data?.sections7radio == "yes"}
                                    value="yes"
                                  />
                                </Grid>
                                <Grid
                                  item
                                  lg={1}
                                  sm={1}
                                  md={1}
                                  xs={1}
                                  ml={2}
                                  style={{ display: "flex", justifyContent: "center" }}
                                >
                                  <span style={{ fontSize: "16px" }}>No</span>{" "}
                                  <Radio
                                    style={{ marginLeft: "5px" }}
                                    checked={data?.sections7radio == "no"}
                                    value="no"
                                  />
                                </Grid>
                              </Grid>
                            </>
                          ) : (
                            <>
                              <Grid container>
                                <Grid item lg={1} sm={1} md={1} xs={3}>
                                  <Checkbox
                                    label="0"
                                    style={{ marginLeft: "5px" }}
                                    checked={data.checkbox1}
                                  />
                                </Grid>
                                <Grid item lg={1} sm={1} md={1} xs={3}>
                                  <Checkbox
                                    style={{ marginLeft: "5px" }}
                                    checked={data.checkbox2}
                                  />
                                </Grid>{" "}
                                <Grid item lg={1} sm={1} md={1} xs={3}>
                                  <Checkbox
                                    style={{ marginLeft: "5px" }}
                                    checked={data.checkbox3}
                                  />
                                </Grid>{" "}
                                <Grid item lg={1} sm={1} md={1} xs={3}>
                                  <Checkbox
                                    style={{ marginLeft: "5px" }}
                                    checked={data.checkbox4}
                                  />
                                </Grid>
                              </Grid>
                            </>
                          )}
                        </td>
                      </tr>
                    </>
                  );
                })}
            </tbody>
          </table>
        </>
      )}
      {ncheck8 === undefined ? (
        ""
      ) : (
        <>
          <table
            style={{ width: "100%", height: "100%", overflow: "auto" }}
            border={1}
            className="content-table"
          >
            <thead>
              <tr>
                <td
                  style={{
                    textAlign: "center",
                    padding: "5px",
                    fontSize: "18px",
                    color: "#344767",
                  }}
                  colSpan={2}
                >
                  SECTION8
                </td>
              </tr>
              <tr>
                <th style={{ padding: "5px", fontSize: "15px", color: "#344767" }}>Question</th>
                <th style={{ padding: "5px", fontSize: "15px", color: "#344767" }}>Answer</th>
              </tr>
            </thead>

            <tbody>
              {ncheck8 &&
                ncheck8.map((data, item) => {
                  return (
                    <>
                      <tr>
                        <td
                          style={{
                            padding: "5px",
                            paddingLeft: "10px",
                            fontSize: "15px",
                            fontWeight: "550",
                          }}
                        >
                          {data.name}
                        </td>
                        <td style={{ paddingLeft: "10px" }}>
                          {data.name == "A 100% gluten-free diet" ? (
                            <>
                              <Grid style={{ display: "flex" }}>
                                <Grid
                                  item
                                  lg={1}
                                  sm={1}
                                  md={1}
                                  xs={1}
                                  ml={4}
                                  style={{ display: "flex", justifyContent: "center" }}
                                >
                                  <span style={{ fontSize: "16px" }}>Yes</span>{" "}
                                  <Radio
                                    style={{ marginLeft: "5px" }}
                                    checked={data?.sections8radio == "yes"}
                                    value="yes"
                                  />
                                </Grid>
                                <Grid
                                  item
                                  lg={1}
                                  sm={1}
                                  md={1}
                                  xs={1}
                                  ml={2}
                                  style={{ display: "flex", justifyContent: "center" }}
                                >
                                  <span style={{ fontSize: "16px" }}>No</span>{" "}
                                  <Radio
                                    style={{ marginLeft: "5px" }}
                                    checked={data?.sections8radio == "no"}
                                    value="no"
                                  />
                                </Grid>
                              </Grid>
                            </>
                          ) : (
                            <>
                              <Grid container>
                                <Grid item lg={1} sm={1} md={1} xs={3}>
                                  <Checkbox
                                    label="0"
                                    style={{ marginLeft: "5px" }}
                                    checked={data.checkbox1}
                                  />
                                </Grid>
                                <Grid item lg={1} sm={1} md={1} xs={3}>
                                  <Checkbox
                                    style={{ marginLeft: "5px" }}
                                    checked={data.checkbox2}
                                  />
                                </Grid>{" "}
                                <Grid item lg={1} sm={1} md={1} xs={3}>
                                  <Checkbox
                                    style={{ marginLeft: "5px" }}
                                    checked={data.checkbox3}
                                  />
                                </Grid>{" "}
                                <Grid item lg={1} sm={1} md={1} xs={3}>
                                  <Checkbox
                                    style={{ marginLeft: "5px" }}
                                    checked={data.checkbox4}
                                  />
                                </Grid>
                              </Grid>
                            </>
                          )}
                        </td>
                      </tr>
                    </>
                  );
                })}
            </tbody>
          </table>
        </>
      )}
      {ncheck9 === undefined ? (
        ""
      ) : (
        <>
          <table
            style={{ width: "100%", height: "100%", overflow: "auto" }}
            border={1}
            className="content-table"
          >
            <thead>
              <tr>
                <td
                  style={{
                    textAlign: "center",
                    padding: "5px",
                    fontSize: "18px",
                    color: "#344767",
                  }}
                  colSpan={2}
                >
                  SECTION9
                </td>
              </tr>
              <tr>
                <th style={{ padding: "5px", fontSize: "15px", color: "#344767" }}>Question</th>
                <th style={{ padding: "5px", fontSize: "15px", color: "#344767" }}>Answer</th>
              </tr>
            </thead>
            <tbody>
              {ncheck9 &&
                ncheck9.map((data, item) => {
                  return (
                    <>
                      <tr>
                        <td
                          style={{
                            padding: "5px",
                            paddingLeft: "10px",
                            fontSize: "15px",
                            fontWeight: "550",
                          }}
                        >
                          {data.name}
                        </td>
                        <td style={{ paddingLeft: "10px" }}>
                          {data.name ==
                          "Changes in brain function with stress, poor sleep, or immune activation" ? (
                            <>
                              <Grid container>
                                <Grid item lg={1} sm={1} md={1} xs={3}>
                                  <Checkbox
                                    label="0"
                                    style={{ marginLeft: "5px" }}
                                    checked={data.checkbox1}
                                  />
                                </Grid>
                                <Grid item lg={1} sm={1} md={1} xs={3}>
                                  <Checkbox
                                    style={{ marginLeft: "5px" }}
                                    checked={data.checkbox2}
                                  />
                                </Grid>{" "}
                                <Grid item lg={1} sm={1} md={1} xs={3}>
                                  <Checkbox
                                    style={{ marginLeft: "5px" }}
                                    checked={data.checkbox3}
                                  />
                                </Grid>{" "}
                                <Grid item lg={1} sm={1} md={1} xs={3}>
                                  <Checkbox
                                    style={{ marginLeft: "5px" }}
                                    checked={data.checkbox4}
                                  />
                                </Grid>
                              </Grid>
                            </>
                          ) : (
                            <>
                              <Grid style={{ display: "flex" }}>
                                <Grid
                                  item
                                  lg={1}
                                  sm={1}
                                  md={1}
                                  xs={1}
                                  ml={4}
                                  style={{ display: "flex", justifyContent: "center" }}
                                >
                                  <span style={{ fontSize: "16px" }}>Yes</span>{" "}
                                  <Radio
                                    style={{ marginLeft: "5px" }}
                                    checked={data?.checkboxredio9 == "yes"}
                                    value="yes"
                                  />
                                </Grid>
                                <Grid
                                  item
                                  lg={1}
                                  sm={1}
                                  md={1}
                                  xs={1}
                                  ml={2}
                                  style={{ display: "flex", justifyContent: "center" }}
                                >
                                  <span style={{ fontSize: "16px" }}>No</span>{" "}
                                  <Radio
                                    style={{ marginLeft: "5px" }}
                                    checked={data?.checkboxredio9 == "no"}
                                    value="no"
                                  />
                                </Grid>
                              </Grid>
                            </>
                          )}
                        </td>
                      </tr>
                    </>
                  );
                })}
            </tbody>
          </table>
        </>
      )}
      {ncheck10 === undefined ? (
        ""
      ) : (
        <>
          <table
            style={{ width: "100%", height: "100%", overflow: "auto" }}
            border={1}
            className="content-table"
          >
            <thead>
              <tr>
                <td
                  style={{
                    textAlign: "center",
                    padding: "5px",
                    fontSize: "18px",
                    color: "#344767",
                  }}
                  colSpan={2}
                >
                  SECTION10
                </td>
              </tr>
              <tr>
                <th style={{ padding: "5px", fontSize: "15px", color: "#344767" }}>Question</th>
                <th style={{ padding: "5px", fontSize: "15px", color: "#344767" }}>Answer</th>
              </tr>
            </thead>

            <tbody>
              {ncheck10 &&
                ncheck10.map((data, item) => {
                  return (
                    <>
                      <tr>
                        <td
                          style={{
                            padding: "5px",
                            paddingLeft: "10px",
                            fontSize: "15px",
                            fontWeight: "550",
                          }}
                        >
                          {data.name}
                        </td>
                        <td style={{ paddingLeft: "10px" }}>
                          {data.name == "A lack of artistic appreciation" ? (
                            <>
                              <Grid style={{ display: "flex" }}>
                                <Grid
                                  item
                                  lg={1}
                                  sm={1}
                                  md={1}
                                  xs={1}
                                  ml={4}
                                  style={{ display: "flex", justifyContent: "center" }}
                                >
                                  <span style={{ fontSize: "16px" }}>Yes</span>{" "}
                                  <Radio
                                    style={{ marginLeft: "5px" }}
                                    checked={data?.checkboxredio1 == "yes"}
                                    value="yes"
                                  />
                                </Grid>
                                <Grid
                                  item
                                  lg={1}
                                  sm={1}
                                  md={1}
                                  xs={1}
                                  ml={2}
                                  style={{ display: "flex", justifyContent: "center" }}
                                >
                                  <span style={{ fontSize: "16px" }}>No</span>{" "}
                                  <Radio
                                    style={{ marginLeft: "5px" }}
                                    checked={data?.checkboxredio1 == "no"}
                                    value="no"
                                  />
                                </Grid>
                              </Grid>
                            </>
                          ) : (
                            <>
                              <Grid container>
                                <Grid item lg={1} sm={1} md={1} xs={3}>
                                  <Checkbox
                                    label="0"
                                    style={{ marginLeft: "5px" }}
                                    checked={data.checkbox1}
                                  />
                                </Grid>
                                <Grid item lg={1} sm={1} md={1} xs={3}>
                                  <Checkbox
                                    style={{ marginLeft: "5px" }}
                                    checked={data.checkbox2}
                                  />
                                </Grid>{" "}
                                <Grid item lg={1} sm={1} md={1} xs={3}>
                                  <Checkbox
                                    style={{ marginLeft: "5px" }}
                                    checked={data.checkbox3}
                                  />
                                </Grid>{" "}
                                <Grid item lg={1} sm={1} md={1} xs={3}>
                                  <Checkbox
                                    style={{ marginLeft: "5px" }}
                                    checked={data.checkbox4}
                                  />
                                </Grid>
                              </Grid>
                            </>
                          )}
                        </td>
                      </tr>
                    </>
                  );
                })}
            </tbody>
          </table>
        </>
      )}
      {ncheck11 === undefined ? (
        ""
      ) : (
        <>
          <table
            style={{ width: "1000px", height: "100%", overflow: "auto" }}
            border={1}
            className="content-table"
          >
            <thead>
              <tr>
                <td
                  style={{
                    textAlign: "center",
                    padding: "5px",
                    fontSize: "18px",
                    color: "#344767",
                  }}
                  colSpan={2}
                >
                  SECTION11
                </td>
              </tr>
              <tr>
                <th style={{ padding: "5px", fontSize: "15px", color: "#344767" }}>Question</th>
                <th style={{ padding: "5px", fontSize: "15px", color: "#344767" }}>Answer</th>
              </tr>
            </thead>

            <tbody>
              {ncheck11 &&
                ncheck11.map((data, item) => {
                  return (
                    <>
                      <tr>
                        <td
                          style={{
                            padding: "5px",
                            paddingLeft: "10px",
                            fontSize: "15px",
                            fontWeight: "550",
                          }}
                        >
                          {data.name}
                        </td>
                        <td style={{ paddingLeft: "10px" }}>
                          <Grid container>
                            <Grid item lg={1} sm={1} md={1} xs={3}>
                              <Checkbox
                                label="0"
                                style={{ marginLeft: "5px" }}
                                checked={data.checkbox1}
                              />
                            </Grid>
                            <Grid item lg={1} sm={1} md={1} xs={3}>
                              <Checkbox style={{ marginLeft: "5px" }} checked={data.checkbox2} />
                            </Grid>{" "}
                            <Grid item lg={1} sm={1} md={1} xs={3}>
                              <Checkbox style={{ marginLeft: "5px" }} checked={data.checkbox3} />
                            </Grid>{" "}
                            <Grid item lg={1} sm={1} md={1} xs={3}>
                              <Checkbox style={{ marginLeft: "5px" }} checked={data.checkbox4} />
                            </Grid>
                          </Grid>
                        </td>
                      </tr>
                    </>
                  );
                })}
            </tbody>
          </table>
        </>
      )}
      {ncheck12 === undefined ? (
        ""
      ) : (
        <>
          <table
            style={{ width: "100%", height: "100%", overflow: "auto" }}
            border={1}
            className="content-table"
          >
            <thead>
              <tr>
                <td
                  style={{
                    textAlign: "center",
                    padding: "5px",
                    fontSize: "18px",
                    color: "#344767",
                  }}
                  colSpan={2}
                >
                  SECTION12
                </td>
              </tr>
              <tr>
                <th style={{ padding: "5px", fontSize: "15px", color: "#344767" }}>Question</th>
                <th style={{ padding: "5px", fontSize: "15px", color: "#344767" }}>Answer</th>
              </tr>
            </thead>
            <tbody>
              {ncheck12 &&
                ncheck12.map((data, item) => {
                  return (
                    <>
                      <tr>
                        <td
                          style={{
                            padding: "5px",
                            paddingLeft: "10px",
                            fontSize: "15px",
                            fontWeight: "550",
                          }}
                        >
                          {data.name}
                        </td>
                        <td style={{ paddingLeft: "10px" }}>
                          {data.name == "A decrease in visual memory (shapes and images)" ? (
                            <>
                              <Grid style={{ display: "flex" }}>
                                <Grid
                                  item
                                  lg={1}
                                  sm={1}
                                  md={1}
                                  xs={1}
                                  ml={4}
                                  style={{ display: "flex", justifyContent: "center" }}
                                >
                                  <span style={{ fontSize: "16px" }}>Yes</span>{" "}
                                  <Radio
                                    style={{ marginLeft: "5px" }}
                                    checked={data?.checkboxredio12 == "yes"}
                                    value="yes"
                                  />
                                </Grid>
                                <Grid
                                  item
                                  lg={1}
                                  sm={1}
                                  md={1}
                                  xs={1}
                                  ml={2}
                                  style={{ display: "flex", justifyContent: "center" }}
                                >
                                  <span style={{ fontSize: "16px" }}>No</span>{" "}
                                  <Radio
                                    style={{ marginLeft: "5px" }}
                                    checked={data?.checkboxredio12 == "no"}
                                    value="no"
                                  />
                                </Grid>
                              </Grid>
                            </>
                          ) : (
                            <>
                              <Grid container>
                                <Grid item lg={1} sm={1} md={1} xs={3}>
                                  <Checkbox
                                    label="0"
                                    style={{ marginLeft: "5px" }}
                                    checked={data.checkbox1}
                                  />
                                </Grid>
                                <Grid item lg={1} sm={1} md={1} xs={3}>
                                  <Checkbox
                                    style={{ marginLeft: "5px" }}
                                    checked={data.checkbox2}
                                  />
                                </Grid>{" "}
                                <Grid item lg={1} sm={1} md={1} xs={3}>
                                  <Checkbox
                                    style={{ marginLeft: "5px" }}
                                    checked={data.checkbox3}
                                  />
                                </Grid>{" "}
                                <Grid item lg={1} sm={1} md={1} xs={3}>
                                  <Checkbox
                                    style={{ marginLeft: "5px" }}
                                    checked={data.checkbox4}
                                  />
                                </Grid>
                              </Grid>
                            </>
                          )}
                        </td>
                      </tr>
                    </>
                  );
                })}
            </tbody>
          </table>
        </>
      )}
      {ncheck13 === undefined ? (
        ""
      ) : (
        <>
          <table
            style={{ width: "100%", height: "100%", overflow: "auto" }}
            border={1}
            className="content-table"
          >
            <thead>
              <tr>
                <td
                  style={{
                    textAlign: "center",
                    padding: "5px",
                    fontSize: "18px",
                    color: "#344767",
                  }}
                  colSpan={2}
                >
                  SECTION13
                </td>
              </tr>
              <tr>
                <th style={{ padding: "5px", fontSize: "15px", color: "#344767" }}>Question</th>
                <th style={{ padding: "5px", fontSize: "15px", color: "#344767" }}>Answer</th>
              </tr>
            </thead>
            <tbody>
              {ncheck13 &&
                ncheck13.map((data, item) => {
                  return (
                    <>
                      <tr>
                        <td
                          style={{
                            padding: "5px",
                            paddingLeft: "10px",
                            fontSize: "15px",
                            fontWeight: "550",
                          }}
                        >
                          {data.name}
                        </td>
                        <td style={{ paddingLeft: "10px" }}>
                          <Grid container>
                            <Grid item lg={1} sm={1} md={1} xs={3}>
                              <Checkbox
                                label="0"
                                style={{ marginLeft: "5px" }}
                                checked={data.checkbox1}
                              />
                            </Grid>
                            <Grid item lg={1} sm={1} md={1} xs={3}>
                              <Checkbox style={{ marginLeft: "5px" }} checked={data.checkbox2} />
                            </Grid>{" "}
                            <Grid item lg={1} sm={1} md={1} xs={3}>
                              <Checkbox style={{ marginLeft: "5px" }} checked={data.checkbox3} />
                            </Grid>{" "}
                            <Grid item lg={1} sm={1} md={1} xs={3}>
                              <Checkbox style={{ marginLeft: "5px" }} checked={data.checkbox4} />
                            </Grid>
                          </Grid>
                        </td>
                      </tr>
                    </>
                  );
                })}
            </tbody>
          </table>
        </>
      )}
      {ncheck14 === undefined ? (
        ""
      ) : (
        <>
          <table
            style={{ width: "100%", height: "100%", overflow: "auto" }}
            border={1}
            className="content-table"
          >
            <thead>
              <tr>
                <td
                  style={{
                    textAlign: "center",
                    padding: "5px",
                    fontSize: "18px",
                    color: "#344767",
                  }}
                  colSpan={2}
                >
                  SECTION14
                </td>
              </tr>
              <tr>
                <th style={{ padding: "5px", fontSize: "15px", color: "#344767" }}>Question</th>
                <th style={{ padding: "5px", fontSize: "15px", color: "#344767" }}>Answer</th>
              </tr>
            </thead>

            <tbody>
              {ncheck14 &&
                ncheck14.map((data, item) => {
                  return (
                    <>
                      <tr>
                        <td
                          style={{
                            padding: "5px",
                            paddingLeft: "10px",
                            fontSize: "15px",
                            fontWeight: "550",
                          }}
                        >
                          {data.name}
                        </td>
                        <td style={{ paddingLeft: "10px" }}>
                          <Grid container>
                            <Grid item lg={1} sm={1} md={1} xs={3}>
                              <Checkbox
                                label="0"
                                style={{ marginLeft: "5px" }}
                                checked={data.checkbox1}
                              />
                            </Grid>
                            <Grid item lg={1} sm={1} md={1} xs={3}>
                              <Checkbox style={{ marginLeft: "5px" }} checked={data.checkbox2} />
                            </Grid>{" "}
                            <Grid item lg={1} sm={1} md={1} xs={3}>
                              <Checkbox style={{ marginLeft: "5px" }} checked={data.checkbox3} />
                            </Grid>{" "}
                            <Grid item lg={1} sm={1} md={1} xs={3}>
                              <Checkbox style={{ marginLeft: "5px" }} checked={data.checkbox4} />
                            </Grid>
                          </Grid>
                        </td>
                      </tr>
                    </>
                  );
                })}
            </tbody>
          </table>
        </>
      )}

      {nutsec1 === undefined ? (
        ""
      ) : (
        <>
          <table
            style={{ width: "100%", height: "100%", overflow: "auto" }}
            border={1}
            className="content-table"
          >
            <thead>
              <tr>
                <td
                  style={{
                    textAlign: "center",
                    padding: "5px",
                    fontSize: "18px",
                    color: "#344767",
                  }}
                  colSpan={2}
                >
                  NEUROTRANSMITTER ASSESSMENT FORM™ (NTAF), SECTION A
                </td>
              </tr>
              <tr>
                <th style={{ padding: "5px", fontSize: "15px", color: "#344767" }}>Question</th>
                <th style={{ padding: "5px", fontSize: "15px", color: "#344767" }}>Answer</th>
              </tr>
            </thead>

            <tbody>
              {nutsec1 &&
                nutsec1.map((data, item) => {
                  return (
                    <>
                      <tr>
                        <td
                          style={{
                            padding: "5px",
                            paddingLeft: "10px",
                            fontSize: "15px",
                            fontWeight: "550",
                          }}
                        >
                          {data.name}
                        </td>
                        <td style={{ paddingLeft: "10px" }}>
                          <Grid container>
                            <Grid item lg={1} sm={1} md={1} xs={3}>
                              <Checkbox
                                label="0"
                                style={{ marginLeft: "5px" }}
                                checked={data.checkbox1}
                              />
                            </Grid>
                            <Grid item lg={1} sm={1} md={1} xs={3}>
                              <Checkbox style={{ marginLeft: "5px" }} checked={data.checkbox2} />
                            </Grid>{" "}
                            <Grid item lg={1} sm={1} md={1} xs={3}>
                              <Checkbox style={{ marginLeft: "5px" }} checked={data.checkbox3} />
                            </Grid>{" "}
                            <Grid item lg={1} sm={1} md={1} xs={3}>
                              <Checkbox style={{ marginLeft: "5px" }} checked={data.checkbox4} />
                            </Grid>
                          </Grid>
                        </td>
                      </tr>
                    </>
                  );
                })}
            </tbody>
          </table>
        </>
      )}
      {nutsec2 === undefined ? (
        ""
      ) : (
        <>
          <table
            style={{ width: "100%", height: "100%", overflow: "auto" }}
            border={1}
            className="content-table"
          >
            <thead>
              <tr>
                <td
                  style={{
                    textAlign: "center",
                    padding: "5px",
                    fontSize: "18px",
                    color: "#344767",
                  }}
                  colSpan={2}
                >
                  NEUROTRANSMITTER ASSESSMENT FORM™ (NTAF),SECTION B
                </td>
              </tr>
              <tr>
                <th style={{ padding: "5px", fontSize: "15px", color: "#344767" }}>Question</th>
                <th style={{ padding: "5px", fontSize: "15px", color: "#344767" }}>Answer</th>
              </tr>
            </thead>

            <tbody>
              {nutsec2 &&
                nutsec2.map((data, item) => {
                  return (
                    <>
                      <tr>
                        <td
                          style={{
                            padding: "5px",
                            paddingLeft: "10px",
                            fontSize: "15px",
                            fontWeight: "550",
                          }}
                        >
                          {data.name}
                        </td>
                        <td style={{ paddingLeft: "10px" }}>
                          <Grid container>
                            <Grid item lg={1} sm={1} md={1} xs={3}>
                              <Checkbox
                                label="0"
                                style={{ marginLeft: "5px" }}
                                checked={data.checkbox1}
                              />
                            </Grid>
                            <Grid item lg={1} sm={1} md={1} xs={3}>
                              <Checkbox style={{ marginLeft: "5px" }} checked={data.checkbox2} />
                            </Grid>{" "}
                            <Grid item lg={1} sm={1} md={1} xs={3}>
                              <Checkbox style={{ marginLeft: "5px" }} checked={data.checkbox3} />
                            </Grid>{" "}
                            <Grid item lg={1} sm={1} md={1} xs={3}>
                              <Checkbox style={{ marginLeft: "5px" }} checked={data.checkbox4} />
                            </Grid>
                          </Grid>
                        </td>
                      </tr>
                    </>
                  );
                })}
            </tbody>
          </table>
        </>
      )}
      {nutsec3 === undefined ? (
        ""
      ) : (
        <>
          <table
            style={{ width: "100%", height: "100%", overflow: "auto" }}
            border={1}
            className="content-table"
          >
            <thead>
              <tr>
                <td
                  style={{
                    textAlign: "center",
                    padding: "5px",
                    fontSize: "18px",
                    color: "#344767",
                  }}
                  colSpan={2}
                >
                  NEUROTRANSMITTER ASSESSMENT FORM™ (NTAF), SECTION, C,C1
                </td>
              </tr>
              <tr>
                <th style={{ padding: "5px", fontSize: "15px", color: "#344767" }}>Question</th>
                <th style={{ padding: "5px", fontSize: "15px", color: "#344767" }}>Answer</th>
              </tr>
            </thead>
            
            <tbody>
              {nutsec4 &&
                nutsec4.map((data, item) => {
                  return (
                    <>
                      <tr>
                        <td
                          style={{
                            padding: "5px",
                            paddingLeft: "10px",
                            fontSize: "15px",
                            fontWeight: "550",
                          }}
                        >
                          {data.name}
                        </td>
                        <td style={{ paddingLeft: "10px" }}>
                          <Grid container>
                            <Grid item lg={1} sm={1} md={1} xs={3}>
                              <Checkbox
                                label="0"
                                style={{ marginLeft: "5px" }}
                                checked={data.checkbox1}
                              />
                            </Grid>
                            <Grid item lg={1} sm={1} md={1} xs={3}>
                              <Checkbox style={{ marginLeft: "5px" }} checked={data.checkbox2} />
                            </Grid>{" "}
                            <Grid item lg={1} sm={1} md={1} xs={3}>
                              <Checkbox style={{ marginLeft: "5px" }} checked={data.checkbox3} />
                            </Grid>{" "}
                            <Grid item lg={1} sm={1} md={1} xs={3}>
                              <Checkbox style={{ marginLeft: "5px" }} checked={data.checkbox4} />
                            </Grid>
                          </Grid>
                        </td>
                      </tr>
                    </>
                  );
                })}
            </tbody>
          </table>
        </>
      )}
      {nutsec4 === undefined ? (
        ""
      ) : (
        <>
          <table
            style={{ width: "100%", height: "100%", overflow: "auto" }}
            border={1}
            className="content-table"
          >
            <thead>
              <tr>
                <td
                  style={{
                    textAlign: "center",
                    padding: "5px",
                    fontSize: "18px",
                    color: "#344767",
                  }}
                  colSpan={2}
                >
                  SECTION C2
                </td>
              </tr>
              <tr>
                <th style={{ padding: "5px", fontSize: "15px", color: "#344767" }}>Question</th>
                <th style={{ padding: "5px", fontSize: "15px", color: "#344767" }}>Answer</th>
              </tr>
            </thead>
            <tbody>
              {nutsec5 &&
                nutsec5.map((data, item) => {
                  return (
                    <>
                      <tr>
                        <td
                          style={{
                            padding: "5px",
                            paddingLeft: "10px",
                            fontSize: "15px",
                            fontWeight: "550",
                          }}
                        >
                          {data.name}
                        </td>
                        <td style={{ paddingLeft: "10px" }}>
                          <Grid container>
                            <Grid item lg={1} sm={1} md={1} xs={3}>
                              <Checkbox
                                label="0"
                                style={{ marginLeft: "5px" }}
                                checked={data.checkbox1}
                              />
                            </Grid>
                            <Grid item lg={1} sm={1} md={1} xs={3}>
                              <Checkbox style={{ marginLeft: "5px" }} checked={data.checkbox2} />
                            </Grid>{" "}
                            <Grid item lg={1} sm={1} md={1} xs={3}>
                              <Checkbox style={{ marginLeft: "5px" }} checked={data.checkbox3} />
                            </Grid>{" "}
                            <Grid item lg={1} sm={1} md={1} xs={3}>
                              <Checkbox style={{ marginLeft: "5px" }} checked={data.checkbox4} />
                            </Grid>
                          </Grid>
                        </td>
                      </tr>
                    </>
                  );
                })}
            </tbody>
          </table>
        </>
      )}
      {nutsec5 === undefined ? (
        ""
      ) : (
        <>
          <table
            style={{ width: "100%", height: "100%", overflow: "auto" }}
            border={1}
            className="content-table"
          >
            <thead>
              <tr>
                <td
                  style={{
                    textAlign: "center",
                    padding: "5px",
                    fontSize: "18px",
                    color: "#344767",
                  }}
                  colSpan={2}
                >
                  SECTION 1
                </td>
              </tr>
              <tr>
                <th style={{ padding: "5px", fontSize: "15px", color: "#344767" }}>Question</th>
                <th style={{ padding: "5px", fontSize: "15px", color: "#344767" }}>Answer</th>
              </tr>
            </thead>
            <tbody>
              {nutsec3 &&
                nutsec3.map((data, item) => {
                  return (
                    <>
                      <tr>
                        <td
                          style={{
                            padding: "5px",
                            paddingLeft: "10px",
                            fontSize: "15px",
                            fontWeight: "550",
                          }}
                        >
                          {data.name}
                        </td>
                        <td style={{ paddingLeft: "10px" }}>
                          <Grid container>
                            <Grid item lg={1} sm={1} md={1} xs={3}>
                              <Checkbox
                                label="0"
                                style={{ marginLeft: "5px" }}
                                checked={data.checkbox1}
                              />
                            </Grid>
                            <Grid item lg={1} sm={1} md={1} xs={3}>
                              <Checkbox style={{ marginLeft: "5px" }} checked={data.checkbox2} />
                            </Grid>{" "}
                            <Grid item lg={1} sm={1} md={1} xs={3}>
                              <Checkbox style={{ marginLeft: "5px" }} checked={data.checkbox3} />
                            </Grid>{" "}
                            <Grid item lg={1} sm={1} md={1} xs={3}>
                              <Checkbox style={{ marginLeft: "5px" }} checked={data.checkbox4} />
                            </Grid>
                          </Grid>
                        </td>
                      </tr>
                    </>
                  );
                })}
            </tbody>
          </table>
        </>
      )}
      {nutsec6 === undefined ? (
        ""
      ) : (
        <>
          <table
            style={{ width: "100%", height: "100%", overflow: "auto" }}
            border={1}
            className="content-table"
          >
            <thead>
              <tr>
                <td
                  style={{
                    textAlign: "center",
                    padding: "5px",
                    fontSize: "18px",
                    color: "#344767",
                  }}
                  colSpan={2}
                >
                  SECTION 2
                </td>
              </tr>
              <tr>
                <th style={{ padding: "5px", fontSize: "15px", color: "#344767" }}>Question</th>
                <th style={{ padding: "5px", fontSize: "15px", color: "#344767" }}>Answer</th>
              </tr>
            </thead>

            <tbody>
              {nutsec6 &&
                nutsec6.map((data, item) => {
                  return (
                    <>
                      <tr>
                        <td
                          style={{
                            padding: "5px",
                            paddingLeft: "10px",
                            fontSize: "15px",
                            fontWeight: "550",
                          }}
                        >
                          {data.name}
                        </td>
                        <td style={{ paddingLeft: "10px" }}>
                          <Grid container>
                            <Grid item lg={1} sm={1} md={1} xs={3}>
                              <Checkbox
                                label="0"
                                style={{ marginLeft: "5px" }}
                                checked={data.checkbox1}
                              />
                            </Grid>
                            <Grid item lg={1} sm={1} md={1} xs={3}>
                              <Checkbox style={{ marginLeft: "5px" }} checked={data.checkbox2} />
                            </Grid>{" "}
                            <Grid item lg={1} sm={1} md={1} xs={3}>
                              <Checkbox style={{ marginLeft: "5px" }} checked={data.checkbox3} />
                            </Grid>{" "}
                            <Grid item lg={1} sm={1} md={1} xs={3}>
                              <Checkbox style={{ marginLeft: "5px" }} checked={data.checkbox4} />
                            </Grid>
                          </Grid>
                        </td>
                      </tr>
                    </>
                  );
                })}
            </tbody>
          </table>
        </>
      )}
      {nutsec7 === undefined ? (
        ""
      ) : (
        <>
          <table
            style={{ width: "100%", height: "100%", overflow: "auto" }}
            border={1}
            className="content-table"
          >
            <thead>
              <tr>
                <td
                  style={{
                    textAlign: "center",
                    padding: "5px",
                    fontSize: "18px",
                    color: "#344767",
                  }}
                  colSpan={2}
                >
                  SECTION 3
                </td>
              </tr>
              <tr>
                <th style={{ padding: "5px", fontSize: "15px", color: "#344767" }}>Question</th>
                <th style={{ padding: "5px", fontSize: "15px", color: "#344767" }}>Answer</th>
              </tr>
            </thead>

            <tbody>
              {nutsec7 &&
                nutsec7.map((data, item) => {
                  return (
                    <>
                      <tr>
                        <td
                          style={{
                            padding: "5px",
                            paddingLeft: "10px",
                            fontSize: "15px",
                            fontWeight: "550",
                          }}
                        >
                          {data.name}
                        </td>
                        <td style={{ paddingLeft: "10px" }}>
                          <Grid container>
                            <Grid item lg={1} sm={1} md={1} xs={3}>
                              <Checkbox
                                label="0"
                                style={{ marginLeft: "5px" }}
                                checked={data.checkbox1}
                              />
                            </Grid>
                            <Grid item lg={1} sm={1} md={1} xs={3}>
                              <Checkbox style={{ marginLeft: "5px" }} checked={data.checkbox2} />
                            </Grid>{" "}
                            <Grid item lg={1} sm={1} md={1} xs={3}>
                              <Checkbox style={{ marginLeft: "5px" }} checked={data.checkbox3} />
                            </Grid>{" "}
                            <Grid item lg={1} sm={1} md={1} xs={3}>
                              <Checkbox style={{ marginLeft: "5px" }} checked={data.checkbox4} />
                            </Grid>
                          </Grid>
                        </td>
                      </tr>
                    </>
                  );
                })}
            </tbody>
          </table>
        </>
      )}
      {nutsec8 === undefined ? (
        ""
      ) : (
        <>
          <table
            style={{ width: "100%", height: "100%", overflow: "auto" }}
            border={1}
            className="content-table"
          >
            <thead>
              <tr>
                <td
                  style={{
                    textAlign: "center",
                    padding: "5px",
                    fontSize: "18px",
                    color: "#344767",
                  }}
                  colSpan={2}
                >
                  SECTION 4
                </td>
              </tr>
              <tr>
                <th style={{ padding: "5px", fontSize: "15px", color: "#344767" }}>Question</th>
                <th style={{ padding: "5px", fontSize: "15px", color: "#344767" }}>Answer</th>
              </tr>
            </thead>

            <tbody>
              {nutsec8 &&
                nutsec8.map((data, item) => {
                  return (
                    <>
                      <tr>
                        <td
                          style={{
                            padding: "5px",
                            paddingLeft: "10px",
                            fontSize: "15px",
                            fontWeight: "550",
                          }}
                        >
                          {data.name}
                        </td>
                        <td style={{ paddingLeft: "10px" }}>
                          <Grid container>
                            <Grid item lg={1} sm={1} md={1} xs={3}>
                              <Checkbox
                                label="0"
                                style={{ marginLeft: "5px" }}
                                checked={data.checkbox1}
                              />
                            </Grid>
                            <Grid item lg={1} sm={1} md={1} xs={3}>
                              <Checkbox style={{ marginLeft: "5px" }} checked={data.checkbox2} />
                            </Grid>{" "}
                            <Grid item lg={1} sm={1} md={1} xs={3}>
                              <Checkbox style={{ marginLeft: "5px" }} checked={data.checkbox3} />
                            </Grid>{" "}
                            <Grid item lg={1} sm={1} md={1} xs={3}>
                              <Checkbox style={{ marginLeft: "5px" }} checked={data.checkbox4} />
                            </Grid>
                          </Grid>
                        </td>
                      </tr>
                    </>
                  );
                })}
            </tbody>
          </table>
        </>
      )}
      {nutsec9 === undefined ? (
        ""
      ) : (
        <>
          <table
            style={{ width: "100%", height: "100%", overflow: "auto" }}
            border={1}
            className="content-table"
          >
            <thead>
              <tr>
                <td
                  style={{
                    textAlign: "center",
                    padding: "5px",
                    fontSize: "18px",
                    color: "#344767",
                  }}
                  colSpan={2}
                >
                  SECTION 5
                </td>
              </tr>
              <tr>
                <th style={{ padding: "5px", fontSize: "15px", color: "#344767" }}>Question</th>
                <th style={{ padding: "5px", fontSize: "15px", color: "#344767" }}>Answer</th>
              </tr>
            </thead>

            <tbody>
              {nutsec9 &&
                nutsec9.map((data, item) => {
                  return (
                    <>
                      <tr>
                        <td
                          style={{
                            padding: "5px",
                            paddingLeft: "10px",
                            fontSize: "15px",
                            fontWeight: "550",
                          }}
                        >
                          {data.name}
                        </td>
                        <td style={{ paddingLeft: "10px" }}>
                          <Grid container>
                            <Grid item lg={1} sm={1} md={1} xs={3}>
                              <Checkbox
                                label="0"
                                style={{ marginLeft: "5px" }}
                                checked={data.checkbox1}
                              />
                            </Grid>
                            <Grid item lg={1} sm={1} md={1} xs={3}>
                              <Checkbox style={{ marginLeft: "5px" }} checked={data.checkbox2} />
                            </Grid>{" "}
                            <Grid item lg={1} sm={1} md={1} xs={3}>
                              <Checkbox style={{ marginLeft: "5px" }} checked={data.checkbox3} />
                            </Grid>{" "}
                            <Grid item lg={1} sm={1} md={1} xs={3}>
                              <Checkbox style={{ marginLeft: "5px" }} checked={data.checkbox4} />
                            </Grid>
                          </Grid>
                        </td>
                      </tr>
                    </>
                  );
                })}
            </tbody>
          </table>
        </>
      )}
    </SoftBox>
  );
};
BrainFunction.propTypes = {
  formData: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  formik: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  form: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  stepIndex: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  clientIntakeDetails : PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};
export default BrainFunction;
