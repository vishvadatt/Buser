import SoftBox from "components/SoftBox";
import SoftSelect from "components/SoftSelect";
// import React from "react";
import { Checkbox, Grid, Radio } from "@mui/material";

import PropTypes from "prop-types";
// import FormField from "../../FormField";
import { useSelector } from "react-redux";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { clientIntakeFormGet } from "store/actions/actions";
import { getDoctorShopFormDataAction } from "store/actions/actions";

// import "./style.css";
// import { doctorShopFormDataAction, clientIntakeFormGet, clientIntakeformDetails } from "store/actions/actions";

// export const DropDownComponent = () => {
//   return (
//     <>
//       <select placeholder="Select">
//         <option value="+">+</option>
//         <option value="-">-</option>
//       </select>
//     </>
//   )
// }
// export const DropDown = (propsValue) => {
//   console.log("propsValue...", propsValue);

//   return (
//     <>
//       <select
//         name={propsValue.name}
//         value={propsValue.value}
//         onChange={propsValue.formik.handleChange}
//       >
//         <option></option>
//         <option value="+">+</option>
//         <option value="-">-</option>
//       </select>
//     </>
//   );
// };
const Categorys = ({ form, stepIndex, index }) => {
  const dispatch = useDispatch();
  const patientSoapFormDetail = useSelector((state) => state?.auth?.patientSoapFormDetail);
  const selectedPatientId = useSelector((state) => state.auth.doctorShopForm?.patientId);

  const soappatientId = useSelector((state) => state.auth.patientSoapData.patientId);
  const UserId = useSelector((state) => state.auth.auth._id);
  const token = useSelector((state) => state.auth.auth.idToken);
  const clientIntakeformDetails = useSelector((state) => state.auth.clientIntakeForm?.page17);
  const clientIntakeformDetails1 = useSelector((state) => state.auth.clientIntakeForm?.page18);
  // const clientIntakeformDetails = useSelector((state) => state.auth.doctorShopForm?.page10);

  // console.log("vvii", clientIntakeformDetails)
  const cat0 = clientIntakeformDetails?.CategoryVII0radio;

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
  }, []);

  const cat1 =
    clientIntakeformDetails &&
    clientIntakeformDetails[clientIntakeformDetails.length - 1]?.CategoryIi;
  const cat2 =
    clientIntakeformDetails &&
    clientIntakeformDetails[clientIntakeformDetails.length - 1]?.CategoryII;
  const cat3 =
    clientIntakeformDetails &&
    clientIntakeformDetails[clientIntakeformDetails.length - 1]?.CategoryIII;
  const cat4 =
    clientIntakeformDetails &&
    clientIntakeformDetails[clientIntakeformDetails.length - 1]?.CategoryIV;
  const cat5 =
    clientIntakeformDetails &&
    clientIntakeformDetails[clientIntakeformDetails.length - 1]?.CategoryV;
  const cat6 =
    clientIntakeformDetails &&
    clientIntakeformDetails[clientIntakeformDetails.length - 1]?.CategoryVIi;
  const cat7 =
    clientIntakeformDetails &&
    clientIntakeformDetails[clientIntakeformDetails.length - 1]?.CategoryVII;
  console.log("cat7..", cat7);
  const cat8 =
    clientIntakeformDetails &&
    clientIntakeformDetails[clientIntakeformDetails.length - 1]?.CategoryVIII;
  const cat9 =
    clientIntakeformDetails &&
    clientIntakeformDetails[clientIntakeformDetails.length - 1]?.CategoryIX;
  const cat10 =
    clientIntakeformDetails &&
    clientIntakeformDetails[clientIntakeformDetails.length - 1]?.CategoryX;
  const cat11 =
    clientIntakeformDetails &&
    clientIntakeformDetails[clientIntakeformDetails.length - 1]?.CategoryXIi;

  const cat12 =
    clientIntakeformDetails1 &&
    clientIntakeformDetails1[clientIntakeformDetails1.length - 1]?.CategoryXII;
  const cat13 =
    clientIntakeformDetails1 &&
    clientIntakeformDetails1[clientIntakeformDetails1.length - 1]?.CategoryXIII;
  console.log("cat13..", cat13);
  const cat14 =
    clientIntakeformDetails1 &&
    clientIntakeformDetails1[clientIntakeformDetails1.length - 1]?.CategoryXIV;
  const cat15 =
    clientIntakeformDetails1 &&
    clientIntakeformDetails1[clientIntakeformDetails1.length - 1]?.CategoryXV;
  const cat16 =
    clientIntakeformDetails1 &&
    clientIntakeformDetails1[clientIntakeformDetails1.length - 1]?.CategoryXVI;
  const cat17 =
    clientIntakeformDetails1 &&
    clientIntakeformDetails1[clientIntakeformDetails1.length - 1]?.CategoryXVICont;
  console.log("cat17..", cat17);
  const cat18 =
    clientIntakeformDetails1 &&
    clientIntakeformDetails1[clientIntakeformDetails1.length - 1]?.CategoryXVII;
  const cat19 =
    clientIntakeformDetails1 &&
    clientIntakeformDetails1[clientIntakeformDetails1.length - 1]?.CategoryXVIII;
  const cat20 =
    clientIntakeformDetails1 &&
    clientIntakeformDetails1[clientIntakeformDetails1.length - 1]?.CategoryXIX;
  console.log("cat20..", cat20);
  const cat21 =
    clientIntakeformDetails1 &&
    clientIntakeformDetails1[clientIntakeformDetails1.length - 1]?.CategoryXX;

  console.log("cat12", cat12);

  const check1 = cat1?.filter(
    (item) =>
      item.CategoryIi0check === true ||
      item.CategoryIi1check === true ||
      item.CategoryIi2check === true ||
      item.CategoryIi3check === true
  );
  const check2 = cat2?.filter(
    (item) =>
      item.CategoryII0check === true ||
      item.CategoryII1check === true ||
      item.CategoryII2check === true ||
      item.CategoryII3check === true
  );
  const check3 = cat3?.filter(
    (item) =>
      item.CategoryIII0check === true ||
      item.CategoryIII1check === true ||
      item.CategoryIII2check === true ||
      item.CategoryIII3check === true
  );
  const check4 = cat4?.filter(
    (item) =>
      item.CategoryIV0check === true ||
      item.CategoryIV1check === true ||
      item.CategoryIV2check === true ||
      item.CategoryIV3check === true
  );
  const check5 = cat5?.filter(
    (item) =>
      item.CategoryV0check === true ||
      item.CategoryV1check === true ||
      item.CategoryV2check === true ||
      item.CategoryV3check === true
  );
  const check6 = cat6?.filter(
    (item) =>
      item.CategoryVIi0check === true ||
      item.CategoryVIi1check === true ||
      item.CategoryVIi2check === true ||
      item.CategoryVIi3check === true
  );
  const check7 = cat7?.filter(
    (item) =>
      !!item.CategoryVIIredio1 ||
      item.CategoryVII0check === true ||
      item.CategoryVII1check === true ||
      item.CategoryVII2check === true ||
      item.CategoryVII3check === true
  );
  const check8 = cat8?.filter(
    (item) =>
      item.CategoryVIII0check === true ||
      item.CategoryVIII1check === true ||
      item.CategoryVIII2check === true ||
      item.CategoryVIII3check === true
  );
  const check9 = cat9?.filter(
    (item) =>
      item.CategoryIX0check === true ||
      item.CategoryIX1check === true ||
      item.CategoryIX2check === true ||
      item.CategoryIX3check === true
  );
  const check10 = cat10?.filter(
    (item) =>
      item.CategoryX0check === true ||
      item.CategoryX1check === true ||
      item.CategoryX2check === true ||
      item.CategoryX3check === true
  );
  const check11 = cat11?.filter(
    (item) =>
      item.CategoryXIi0check === true ||
      item.CategoryXIi1check === true ||
      item.CategoryXIi2check === true ||
      item.CategoryXIi3check === true
  );
  const check12 = cat12?.filter(
    (item) =>
      item.CategoryXII0check === true ||
      item.CategoryXII1check === true ||
      item.CategoryXII2check === true ||
      item.CategoryXII3check === true
  );
  const check13 = cat13?.filter(
    (item) =>
      item.CategoryXIII0check === true ||
      item.CategoryXIII1check === true ||
      item.CategoryXIII2check === true ||
      item.CategoryXIII3check === true
  );
  console.log("check13...", check13);
  const check14 = cat14?.filter(
    (item) =>
      item.CategoryXIV0check === true ||
      item.CategoryXIV1check === true ||
      item.CategoryXIV2check === true ||
      item.CategoryXIV3check === true
  );
  const check15 = cat15?.filter(
    (item) =>
      (item !== null && item.CategoryXV0check === true) ||
      (item !== null && item.CategoryXV1check === true) ||
      (item !== null && item.CategoryXV2check === true) ||
      (item !== null && item.CategoryXV3check) === true
  );
  const check16 = cat16?.filter(
    (item) =>
      (item !== null && item.CategoryXVI0check === true) ||
      (item !== null && item.CategoryXVI1check === true) ||
      (item !== null && item.CategoryXVI2check === true) ||
      (item !== null && item.CategoryXVI3check) === true
  );
  const check17 = cat17?.filter(
    (item) =>
      (item !== null && item.CategoryXVICont0check === true) ||
      (item !== null && item.CategoryXVICont1check === true) ||
      (item !== null && item.CategoryXVICont2check === true) ||
      (item !== null && item.CategoryXVICont3check) === true
  );
  const check18 = cat18?.filter(
    (item) =>
      item.CategoryXVII0check === true ||
      item.CategoryXVII1check === true ||
      item.CategoryXVII2check === true ||
      item.CategoryXVII3check === true
  );
  const check19 = cat19?.filter(
    (item) =>
      item.CategoryXVIII0check === true ||
      item.CategoryXVIII1check === true ||
      item.CategoryXVIII2check === true ||
      item.CategoryXVIII3check === true
  );
  const check20 = cat20?.filter(
    (item) =>
      item.CategoryXIXradio ||
      item.CategoryXIX0check === true ||
      item.CategoryXIX1check === true ||
      item.CategoryXIX2check === true ||
      item.CategoryXIX3check === true
  );
  const check21 = cat21?.filter(
    (item) =>
      !!item.CategoryXXinput ||
      !!item.CategoryXXradio ||
      item.CategoryXX0check === true ||
      item.CategoryXX1check === true ||
      item.CategoryXX2check === true ||
      item.CategoryXX3check === true
  );

  // useEffect(() => {
  //   dispatch(
  //     clientIntakeFormGet({ patientId: soappatientId, /* practitionerId: UserId,*/ token: token })
  //   );
  // }, []);
  useEffect(() => {
    console.log("running log 13.");
    let patientId = patientSoapFormDetail.shouldShowPatientSoapFormDetail
      ? patientSoapFormDetail.patientId
      : selectedPatientId
      ? selectedPatientId
      : soappatientId;
    dispatch(
      clientIntakeFormGet({ patientId: patientId, /* practitionerId: UserId,*/ token: token })
    );
  }, [stepIndex]);
  return (
    <SoftBox>
      {check1?.length == 0 ? (
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
                  CategoryI
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
                                checked={data.CategoryIi0check}
                              />
                            </Grid>
                            <Grid item lg={1} sm={1} md={1} xs={3}>
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                checked={data.CategoryIi1check}
                              />
                            </Grid>{" "}
                            <Grid item lg={1} sm={1} md={1} xs={3}>
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                checked={data.CategoryIi2check}
                              />
                            </Grid>{" "}
                            <Grid item lg={1} sm={1} md={1} xs={3}>
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                checked={data.CategoryIi3check}
                              />
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

      {check2?.length == 0 ? (
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
                  CategoryII
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
                                checked={data.CategoryII0check}
                              />
                            </Grid>
                            <Grid item lg={1} sm={1} md={1} xs={3}>
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                checked={data.CategoryII1check}
                              />
                            </Grid>{" "}
                            <Grid item lg={1} sm={1} md={1} xs={3}>
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                checked={data.CategoryII2check}
                              />
                            </Grid>{" "}
                            <Grid item lg={1} sm={1} md={1} xs={3}>
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                checked={data.CategoryII3check}
                              />
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

      {check3?.length == 0 ? (
        ""
      ) : (
        <>
          <table
            style={{ width: "100%", height: "100%", overflow: "auto" }}
            border={1}
            className="content-table"
          >
            {/* <p>categories3</p> */}
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
                  CategoryIII
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
                                checked={data.CategoryIII0check}
                              />
                            </Grid>
                            <Grid item lg={1} sm={1} md={1} xs={3}>
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                checked={data.CategoryIII1check}
                              />
                            </Grid>{" "}
                            <Grid item lg={1} sm={1} md={1} xs={3}>
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                checked={data.CategoryIII2check}
                              />
                            </Grid>{" "}
                            <Grid item lg={1} sm={1} md={1} xs={3}>
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                checked={data.CategoryIII3check}
                              />
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
      {check4?.length == 0 ? (
        ""
      ) : (
        <>
          <table
            style={{ width: "100%", height: "100%", overflow: "auto" }}
            border={1}
            className="content-table"
          >
            {/* <p>categories3</p> */}
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
                  CategoryIV
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
                                checked={data.CategoryIV0check}
                              />
                            </Grid>
                            <Grid item lg={1} sm={1} md={1} xs={3}>
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                checked={data.CategoryIV1check}
                              />
                            </Grid>{" "}
                            <Grid item lg={1} sm={1} md={1} xs={3}>
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                checked={data.CategoryIV2check}
                              />
                            </Grid>{" "}
                            <Grid item lg={1} sm={1} md={1} xs={3}>
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                checked={data.CategoryIV3check}
                              />
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
      {check5?.length == 0 ? (
        ""
      ) : (
        <>
          <table
            style={{ width: "100%", height: "100%", overflow: "auto" }}
            border={1}
            className="content-table"
          >
            {/* <p>categories3</p> */}
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
                  CategoryV
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
                                checked={data.CategoryV0check}
                              />
                            </Grid>
                            <Grid item lg={1} sm={1} md={1} xs={3}>
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                checked={data.CategoryV1check}
                              />
                            </Grid>{" "}
                            <Grid item lg={1} sm={1} md={1} xs={3}>
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                checked={data.CategoryV2check}
                              />
                            </Grid>{" "}
                            <Grid item lg={1} sm={1} md={1} xs={3}>
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                checked={data.CategoryV3check}
                              />
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
      {check6?.length == 0 ? (
        ""
      ) : (
        <>
          <table
            style={{ width: "100%", height: "100%", overflow: "auto" }}
            border={1}
            className="content-table"
          >
            {/* <p>categories3</p> */}
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
                  CategoryVI
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
                                checked={data.CategoryVIi0check}
                              />
                            </Grid>
                            <Grid item lg={1} sm={1} md={1} xs={3}>
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                checked={data.CategoryVIi1check}
                              />
                            </Grid>{" "}
                            <Grid item lg={1} sm={1} md={1} xs={3}>
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                checked={data.CategoryVIi2check}
                              />
                            </Grid>{" "}
                            <Grid item lg={1} sm={1} md={1} xs={3}>
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                checked={data.CategoryVIi3check}
                              />
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
      {check7?.length == 0 && cat0 == undefined ? (
        ""
      ) : (
        <>
          <table
            style={{ width: "100%", height: "100%", overflow: "auto" }}
            border={1}
            className="content-table"
          >
            {/* <p>categories3</p> */}
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
                  CategoryVII
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
                                checked={data.CategoryVII0check}
                              />
                            </Grid>
                            <Grid item lg={1} sm={1} md={1} xs={3}>
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                checked={data.CategoryVII1check}
                              />
                            </Grid>{" "}
                            <Grid item lg={1} sm={1} md={1} xs={3}>
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                checked={data.CategoryVII2check}
                              />
                            </Grid>{" "}
                            <Grid item lg={1} sm={1} md={1} xs={3}>
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                checked={data.CategoryVII3check}
                              />
                            </Grid>
                          </Grid>
                        </td>
                      </tr>
                    </>
                  );
                })}
            </tbody>
            <tbody>
              <tr>
                <td
                  style={{
                    padding: "5px",
                    paddingLeft: "10px",
                    fontSize: "13px",
                    fontWeight: "550",
                  }}
                >
                  Have you been diagnosed with Celiac Disease, Irritable Bowel Syndrome,
                  Diverticulosis/Diverticulitis, or Leaky Gut Syndrome?
                </td>
                <td>
                  <Grid style={{ display: "flex", padding: "5px 10px" }}>
                    <Grid
                      // item
                      lg={2}
                      // sm={1}
                      // md={1}
                      // xs={1}
                      // ml={4}
                      style={{ display: "flex" }}
                    >
                      <span style={{ fontSize: "16px" }}>Yes</span>{" "}
                      <Radio style={{ marginLeft: "5px" }} checked={cat0 == "yes"} value="yes" />
                    </Grid>
                    <Grid
                      item
                      lg={2}
                      // sm={1}
                      // md={1}
                      // xs={1}
                      // ml={2}

                      style={{ display: "flex", padding: 0 }}
                    >
                      <span style={{ fontSize: "16px" }}>No</span>{" "}
                      <Radio style={{ marginLeft: "5px" }} checked={cat0 == "no"} value="no" />
                    </Grid>
                  </Grid>
                </td>
              </tr>
            </tbody>
          </table>
        </>
      )}
      {check8?.length === 0 ? (
        ""
      ) : (
        <>
          <table
            style={{ width: "100%", height: "100%", overflow: "auto" }}
            border={1}
            className="content-table"
          >
            {/* <p>categories3</p> */}
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
                  CategoryVIII
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
                                checked={data.CategoryVIII0check}
                              />
                            </Grid>
                            <Grid item lg={1} sm={1} md={1} xs={3}>
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                checked={data.CategoryVIII1check}
                              />
                            </Grid>{" "}
                            <Grid item lg={1} sm={1} md={1} xs={3}>
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                checked={data.CategoryVIII2check}
                              />
                            </Grid>{" "}
                            <Grid item lg={1} sm={1} md={1} xs={3}>
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                checked={data.CategoryVIII3check}
                              />
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
      {check9?.length === 0 ? (
        ""
      ) : (
        <>
          <table
            style={{ width: "100%", height: "100%", overflow: "auto" }}
            border={1}
            className="content-table"
          >
            {/* <p>categories3</p> */}
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
                  CategoryIX
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
                                checked={data.CategoryIX0check}
                              />
                            </Grid>
                            <Grid item lg={1} sm={1} md={1} xs={3}>
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                checked={data.CategoryIX1check}
                              />
                            </Grid>{" "}
                            <Grid item lg={1} sm={1} md={1} xs={3}>
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                checked={data.CategoryIX2check}
                              />
                            </Grid>{" "}
                            <Grid item lg={1} sm={1} md={1} xs={3}>
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                checked={data.CategoryIX3check}
                              />
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
      {check10?.length === 0 ? (
        ""
      ) : (
        <>
          <table
            style={{ width: "100%", height: "100%", overflow: "auto" }}
            border={1}
            className="content-table"
          >
            {/* <p>categories3</p> */}
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
                  CategoryX
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
                                checked={data.CategoryX0check}
                              />
                            </Grid>
                            <Grid item lg={1} sm={1} md={1} xs={3}>
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                checked={data.CategoryX1check}
                              />
                            </Grid>{" "}
                            <Grid item lg={1} sm={1} md={1} xs={3}>
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                checked={data.CategoryX2check}
                              />
                            </Grid>{" "}
                            <Grid item lg={1} sm={1} md={1} xs={3}>
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                checked={data.CategoryX3check}
                              />
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
      {check11?.length === 0 ? (
        ""
      ) : (
        <>
          <table
            style={{ width: "100%", height: "100%", overflow: "auto" }}
            border={1}
            className="content-table"
          >
            {/* <p>categories3</p> */}
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
                  CategoryXI
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
                                checked={data.CategoryXIi0check}
                              />
                            </Grid>
                            <Grid item lg={1} sm={1} md={1} xs={3}>
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                checked={data.CategoryXIi1check}
                              />
                            </Grid>{" "}
                            <Grid item lg={1} sm={1} md={1} xs={3}>
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                checked={data.CategoryXIi2check}
                              />
                            </Grid>{" "}
                            <Grid item lg={1} sm={1} md={1} xs={3}>
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                checked={data.CategoryXIi3check}
                              />
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
      {!!check12 && check12?.length > 0 && (
        <>
          <table
            style={{ width: "100%", height: "100%", overflow: "auto" }}
            border={1}
            className="content-table"
          >
            {/* <p>categories3</p> */}
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
                  CategoryXII
                </td>
              </tr>
              <tr>
                <th style={{ padding: "5px", fontSize: "15px", color: "#344767" }}>Question</th>
                <th style={{ padding: "5px", fontSize: "15px", color: "#344767" }}>Answer</th>
              </tr>
            </thead>

            <tbody>
              {check12 &&
                check12.map((data, item) => {
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
                                checked={data.CategoryXII0check}
                              />
                            </Grid>
                            <Grid item lg={1} sm={1} md={1} xs={3}>
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                checked={data.CategoryXII1check}
                              />
                            </Grid>{" "}
                            <Grid item lg={1} sm={1} md={1} xs={3}>
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                checked={data.CategoryXII2check}
                              />
                            </Grid>{" "}
                            <Grid item lg={1} sm={1} md={1} xs={3}>
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                checked={data.CategoryXII3check}
                              />
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
      {check13?.length === 0 ? (
        ""
      ) : (
        <>
          <table
            style={{ width: "100%", height: "100%", overflow: "auto" }}
            border={1}
            className="content-table"
          >
            {/* <p>categories3</p> */}
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
                  CategoryXIII
                </td>
              </tr>
              <tr>
                <th style={{ padding: "5px", fontSize: "15px", color: "#344767" }}>Question</th>
                <th style={{ padding: "5px", fontSize: "15px", color: "#344767" }}>Answer</th>
              </tr>
            </thead>

            <tbody>
              {check13 &&
                check13.map((data, item) => {
                  console.log("data..", data);
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
                                checked={data.CategoryXIII0check}
                              />
                            </Grid>
                            <Grid item lg={1} sm={1} md={1} xs={3}>
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                checked={data.CategoryXIII1check}
                              />
                            </Grid>{" "}
                            <Grid item lg={1} sm={1} md={1} xs={3}>
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                checked={data.CategoryXIII2check}
                              />
                            </Grid>{" "}
                            <Grid item lg={1} sm={1} md={1} xs={3}>
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                checked={data.CategoryXIII3check}
                              />
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
      {check14?.length === 0 ? (
        ""
      ) : (
        <>
          <table
            style={{ width: "100%", height: "100%", overflow: "auto" }}
            border={1}
            className="content-table"
          >
            {/* <p>categories3</p> */}
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
                  CategoryXIV
                </td>
              </tr>
              <tr>
                <th style={{ padding: "5px", fontSize: "15px", color: "#344767" }}>Question</th>
                <th style={{ padding: "5px", fontSize: "15px", color: "#344767" }}>Answer</th>
              </tr>
            </thead>

            <tbody>
              {check14 &&
                check14.map((data, item) => {
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
                                checked={data.CategoryXIV0check}
                              />
                            </Grid>
                            <Grid item lg={1} sm={1} md={1} xs={3}>
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                checked={data.CategoryXIV1check}
                              />
                            </Grid>{" "}
                            <Grid item lg={1} sm={1} md={1} xs={3}>
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                checked={data.CategoryXIV2check}
                              />
                            </Grid>{" "}
                            <Grid item lg={1} sm={1} md={1} xs={3}>
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                checked={data.CategoryXIV3check}
                              />
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
      {check15?.length === 0 ? (
        ""
      ) : (
        <>
          <table
            style={{ width: "100%", height: "100%", overflow: "auto" }}
            border={1}
            className="content-table"
          >
            {/* <p>categories3</p> */}
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
                  CategoryXV
                </td>
              </tr>
              <tr>
                <th style={{ padding: "5px", fontSize: "15px", color: "#344767" }}>Question</th>
                <th style={{ padding: "5px", fontSize: "15px", color: "#344767" }}>Answer</th>
              </tr>
            </thead>

            <tbody>
              {check15 &&
                check15.map((data, item) => {
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
                                checked={data.CategoryXV0check}
                              />
                            </Grid>
                            <Grid item lg={1} sm={1} md={1} xs={3}>
                              <Checkbox
                                style={{ marginLeft: "12px" }}
                                checked={data.CategoryXV1check}
                              />
                            </Grid>{" "}
                            <Grid item lg={1} sm={1} md={1} xs={3}>
                              <Checkbox
                                style={{ marginLeft: "18px" }}
                                checked={data.CategoryXV2check}
                              />
                            </Grid>{" "}
                            <Grid item lg={1} sm={1} md={1} xs={3}>
                              <Checkbox
                                style={{ marginLeft: "22px" }}
                                checked={data.CategoryXV3check}
                              />
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
      {check16?.length === 0 ? (
        ""
      ) : (
        <>
          <table
            style={{ width: "100%", height: "100%", overflow: "auto" }}
            border={1}
            className="content-table"
          >
            {/* <p>categories3</p> */}
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
                  CategoryXVI
                </td>
              </tr>
              <tr>
                <th style={{ padding: "5px", fontSize: "15px", color: "#344767" }}>Question</th>
                <th style={{ padding: "5px", fontSize: "15px", color: "#344767" }}>Answer</th>
              </tr>
            </thead>

            <tbody>
              {check16 &&
                check16.map((data, item) => {
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
                                checked={data.CategoryXVI0check}
                              />
                            </Grid>
                            <Grid item lg={1} sm={1} md={1} xs={3}>
                              <Checkbox
                                style={{ marginLeft: "12px" }}
                                checked={data.CategoryXVI1check}
                              />
                            </Grid>{" "}
                            <Grid item lg={1} sm={1} md={1} xs={3}>
                              <Checkbox
                                style={{ marginLeft: "18px" }}
                                checked={data.CategoryXVI2check}
                              />
                            </Grid>{" "}
                            <Grid item lg={1} sm={1} md={1} xs={3}>
                              <Checkbox
                                style={{ marginLeft: "22px" }}
                                checked={data.CategoryXVI3check}
                              />
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
      {check17?.length === 0 ? (
        ""
      ) : (
        <>
          <table
            style={{ width: "100%", height: "100%", overflow: "auto" }}
            border={1}
            className="content-table"
          >
            {/* <p>categories3</p> */}
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
                  CategoryXVI
                </td>
              </tr>
              <tr>
                <th style={{ padding: "5px", fontSize: "15px", color: "#344767" }}>Question</th>
                <th style={{ padding: "5px", fontSize: "15px", color: "#344767" }}>Answer</th>
              </tr>
            </thead>

            <tbody>
              {check17 &&
                check17.map((data, item) => {
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
                                checked={data.CategoryXVICont0check}
                              />
                            </Grid>
                            <Grid item lg={1} sm={1} md={1} xs={3}>
                              <Checkbox
                                style={{ marginLeft: "12px" }}
                                checked={data.CategoryXVICont1check}
                              />
                            </Grid>{" "}
                            <Grid item lg={1} sm={1} md={1} xs={3}>
                              <Checkbox
                                style={{ marginLeft: "18px" }}
                                checked={data.CategoryXVICont2check}
                              />
                            </Grid>{" "}
                            <Grid item lg={1} sm={1} md={1} xs={3}>
                              <Checkbox
                                style={{ marginLeft: "22px" }}
                                checked={data.CategoryXVICont3check}
                              />
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
      {check18?.length === 0 ? (
        ""
      ) : (
        <>
          <table
            style={{ width: "100%", height: "100%", overflow: "auto" }}
            border={1}
            className="content-table"
          >
            {/* <p>categories3</p> */}
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
                  CategoryXVII
                </td>
              </tr>
              <tr>
                <th style={{ padding: "5px", fontSize: "15px", color: "#344767" }}>Question</th>
                <th style={{ padding: "5px", fontSize: "15px", color: "#344767" }}>Answer</th>
              </tr>
            </thead>

            <tbody>
              {check18 &&
                check18.map((data, item) => {
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
                                checked={data.CategoryXVII0check}
                              />
                            </Grid>
                            <Grid item lg={1} sm={1} md={1} xs={3}>
                              <Checkbox
                                style={{ marginLeft: "12px" }}
                                checked={data.CategoryXVII1check}
                              />
                            </Grid>{" "}
                            <Grid item lg={1} sm={1} md={1} xs={3}>
                              <Checkbox
                                style={{ marginLeft: "18px" }}
                                checked={data.CategoryXVII2check}
                              />
                            </Grid>{" "}
                            <Grid item lg={1} sm={1} md={1} xs={3}>
                              <Checkbox
                                style={{ marginLeft: "22px" }}
                                checked={data.CategoryXVII3check}
                              />
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
      {check19?.length === 0 ? (
        ""
      ) : (
        <>
          <table
            style={{ width: "100%", height: "100%", overflow: "auto" }}
            border={1}
            className="content-table"
          >
            {/* <p>categories3</p> */}
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
                  CategoryXVIII
                </td>
              </tr>
              <tr>
                <th style={{ padding: "5px", fontSize: "15px", color: "#344767" }}>Question</th>
                <th style={{ padding: "5px", fontSize: "15px", color: "#344767" }}>Answer</th>
              </tr>
            </thead>

            <tbody>
              {check19 &&
                check19.map((data, item) => {
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
                                checked={data.CategoryXVIII0check}
                              />
                            </Grid>
                            <Grid item lg={1} sm={1} md={1} xs={3}>
                              <Checkbox
                                style={{ marginLeft: "12px" }}
                                checked={data.CategoryXVIII1check}
                              />
                            </Grid>{" "}
                            <Grid item lg={1} sm={1} md={1} xs={3}>
                              <Checkbox
                                style={{ marginLeft: "18px" }}
                                checked={data.CategoryXVIII2check}
                              />
                            </Grid>{" "}
                            <Grid item lg={1} sm={1} md={1} xs={3}>
                              <Checkbox
                                style={{ marginLeft: "22px" }}
                                checked={data.CategoryXVIII3check}
                              />
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
      {check20?.length === 0 ? (
        ""
      ) : (
        <>
          <table
            style={{ width: "100%", height: "100%", overflow: "auto" }}
            border={1}
            className="content-table"
          >
            {/* <p>categories3</p> */}
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
                  CategoryXIX
                </td>
              </tr>
              <tr>
                <th style={{ padding: "5px", fontSize: "15px", color: "#344767" }}>Question</th>
                <th style={{ padding: "5px", fontSize: "15px", color: "#344767" }}>Answer</th>
              </tr>
            </thead>

            <tbody>
              {check20 &&
                check20.map((data, item) => {
                  console.log("data..", data?.name);
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
                          {data.name == "Perimenopausal" ||
                          data.name == "Alternating menstrual cycle lengths" ||
                          data.name == "Extended menstrual cycle (greater than 32 days)" ||
                          data.name == "Shortened menstrual cycle (less than 24 days)" ? (
                            <>
                              <Grid style={{ display: "flex" }}>
                                <Grid
                                  item
                                  lg={1}
                                  sm={1}
                                  md={1}
                                  xs={6}
                                  ml={4}
                                  style={{ display: "flex", justifyContent: "center" }}
                                >
                                  <span style={{ fontSize: "16px" }}>Yes</span>{" "}
                                  <Radio
                                    style={{ marginLeft: "5px" }}
                                    checked={data?.CategoryXIXradio == "yes"}
                                    value="yes"
                                  />
                                </Grid>
                                <Grid
                                  item
                                  lg={1}
                                  sm={1}
                                  md={1}
                                  xs={6}
                                  ml={2}
                                  style={{ display: "flex", justifyContent: "center" }}
                                >
                                  <span style={{ fontSize: "16px" }}>No</span>{" "}
                                  <Radio
                                    style={{ marginLeft: "5px" }}
                                    checked={data?.CategoryXIXradio == "no"}
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
                                    checked={data.CategoryXIX0check}
                                  />
                                </Grid>
                                <Grid item lg={1} sm={1} md={1} xs={3}>
                                  <Checkbox
                                    style={{ marginLeft: "12px" }}
                                    checked={data.CategoryXIX1check}
                                  />
                                </Grid>{" "}
                                <Grid item lg={1} sm={1} md={1} xs={3}>
                                  <Checkbox
                                    style={{ marginLeft: "18px" }}
                                    checked={data.CategoryXIX2check}
                                  />
                                </Grid>{" "}
                                <Grid item lg={1} sm={1} md={1} xs={3}>
                                  <Checkbox
                                    style={{ marginLeft: "22px" }}
                                    checked={data.CategoryXIX3check}
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
      {check21?.length === 0 ? (
        ""
      ) : (
        <>
          <table
            style={{ width: "100%", height: "100%", overflow: "auto" }}
            border={1}
            className="content-table"
          >
            {/* <p>categories3</p> */}
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
                  CategoryXX
                </td>
              </tr>
              <tr>
                <th style={{ padding: "5px", fontSize: "15px", color: "#344767" }}>Question</th>
                <th style={{ padding: "5px", fontSize: "15px", color: "#344767" }}>Answer</th>
              </tr>
            </thead>

            <tbody>
              {check21 &&
                check21.map((data, item) => {
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
                          {data.name == "How many years have you been menopausal?" ? (
                            <>
                              <input value={data.CategoryXXinput} />
                            </>
                          ) : data.name == "Since menopause, do you ever have uterine bleeding?" ? (
                            <>
                              <Grid style={{ display: "flex" }}>
                                <Grid
                                  item
                                  lg={1}
                                  sm={1}
                                  md={1}
                                  xs={6}
                                  ml={4}
                                  style={{ display: "flex", justifyContent: "center" }}
                                >
                                  <span style={{ fontSize: "16px" }}>Yes</span>{" "}
                                  <Radio
                                    style={{ marginLeft: "5px" }}
                                    checked={data?.CategoryXXradio == "yes"}
                                    value="yes"
                                  />
                                </Grid>
                                <Grid
                                  item
                                  lg={1}
                                  sm={1}
                                  md={1}
                                  xs={6}
                                  ml={2}
                                  style={{ display: "flex", justifyContent: "center" }}
                                >
                                  <span style={{ fontSize: "16px" }}>No</span>{" "}
                                  <Radio
                                    style={{ marginLeft: "5px" }}
                                    checked={data?.CategoryXXradio == "no"}
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
                                    checked={data.CategoryXX0check}
                                  />
                                </Grid>
                                <Grid item lg={1} sm={1} md={1} xs={3}>
                                  <Checkbox
                                    style={{ marginLeft: "12px" }}
                                    checked={data.CategoryXX1check}
                                  />
                                </Grid>{" "}
                                <Grid item lg={1} sm={1} md={1} xs={3}>
                                  <Checkbox
                                    style={{ marginLeft: "18px" }}
                                    checked={data.CategoryXX2check}
                                  />
                                </Grid>{" "}
                                <Grid item lg={1} sm={1} md={1} xs={3}>
                                  <Checkbox
                                    style={{ marginLeft: "22px" }}
                                    checked={data.CategoryXX3check}
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
    </SoftBox>
  );
};
Categorys.propTypes = {
  formData: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  formik: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  form: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  stepIndex: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  index: PropTypes.number,
};
export default Categorys;
