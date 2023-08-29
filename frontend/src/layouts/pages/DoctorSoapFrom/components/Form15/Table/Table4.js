import { Checkbox, FormControlLabel } from "@mui/material";
import SoftBox from "components/SoftBox";
import SoftSelect from "components/SoftSelect";
// import React from "react";
import PropTypes from "prop-types";
import FormField from "../../FormField";
import { useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import "./style.css";
import {
  doctorShopFormDataAction,
  clientIntakeFormGet,
  clientIntakeformDetails,
} from "store/actions/actions";
import axios from "axios";
import { axiosInstance } from "../../../../../../services/AxiosInstance";

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
const TableFour = ({ form, stepIndex, index }) => {
  const dispatch = useDispatch();
  const soappatientId = useSelector((state) => state.auth.patientSoapData.patientId);
  const UserId = useSelector((state) => state.auth.auth._id);
  const token = useSelector((state) => state.auth.auth.idToken);
  const clientIntakeformDetails = useSelector((state) => state.auth.clientIntakeForm?.page10);
  const patientSoapFormDetail = useSelector((state) => state?.auth?.patientSoapFormDetail);
  const selectedPatientId = useSelector((state) => state.auth.doctorShopForm?.patientId);
  const [photoTherapyQue, setPhotoTherapyQue] = useState([]);
  console.log("clientIntakeformDetails......", clientIntakeformDetails);
  // const queList = clientIntakeformDetails?.QuesList;
  const finalQue = clientIntakeformDetails?.QuesList.filter(
    (item) => item.QuesListInput.length > 0
  );
  let patientId = selectedPatientId ? selectedPatientId : soappatientId;
  if (patientSoapFormDetail.shouldShowPatientSoapFormDetail) {
    patientId = patientSoapFormDetail.patientId;
  }

  // useEffect(() => {
  //     dispatch(clientIntakeFormGet({ patientId: soappatientId, practitionerId: UserId, token: token }));
  // }, []);
  const getPhotoTherapy = async () => {
    const response = await axiosInstance.get(
      `photoTherapy/clientPhotoTherapyQuestionList/${patientId}`,
      {
        headers: {
          authorization: token,
        },
      }
    );
    console.log("res..", response.data.data.result);
    setPhotoTherapyQue(response.data.data.result);
  };
  useEffect(() => {
    getPhotoTherapy();
  }, []);

  useEffect(() => {
    console.log("running log 13.");
    let patientId = patientSoapFormDetail.shouldShowPatientSoapFormDetail
      ? patientSoapFormDetail.patientId
      : selectedPatientId
      ? selectedPatientId
      : soappatientId;
    dispatch(clientIntakeFormGet({ patientId: patientId, practitionerId: UserId, token: token }));
  }, [stepIndex]);
  return (
    <SoftBox>
      {finalQue === undefined ? (
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
                  LMPQRSTU POINTS:
                </td>
              </tr>
              <tr>
                <th style={{ padding: "5px", fontSize: "15px", color: "#344767" }}>Question</th>
                <th style={{ padding: "5px", fontSize: "15px", color: "#344767" }}>Answer</th>
              </tr>
            </thead>

            <tbody>
              {finalQue &&
                finalQue.map((data, item) => {
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
                        <td style={{ paddingLeft: "10px" }}>{data.QuesListInput}</td>
                      </tr>
                    </>
                  );
                })}
            </tbody>
          </table>
        </>
      )}
      <br />
      {
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
                Photo therapy Follow Up
              </td>
            </tr>
            <tr>
              <th style={{ padding: "5px", fontSize: "15px", color: "#344767" }}>Question</th>
              <th style={{ padding: "5px", fontSize: "15px", color: "#344767" }}>Answer</th>
            </tr>
          </thead>
          <tbody>
            {photoTherapyQue && photoTherapyQue?.length > 0 ? (
              photoTherapyQue?.map((data, i) => {
                console.log("data..", data?.quesAnsData);
                return (
                  <>
                    <tr>
                      <td
                        colSpan={2}
                        style={{
                          padding: "5px",
                          paddingLeft: "10px",
                          fontSize: "15px",
                          fontWeight: "550",
                          textAlign: "end",
                        }}
                      >
                        {data.visitDate}
                      </td>
                    </tr>

                    {data?.quesAnsData &&
                      data?.quesAnsData?.map((el, k) => {
                        return (
                          <tr key={k}>
                            <td
                              style={{
                                padding: "5px",
                                paddingLeft: "10px",
                                fontSize: "15px",
                                fontWeight: "550",
                              }}
                            >
                              {el?.question}
                            </td>
                            <td style={{ paddingLeft: "10px" }}>{el?.answer}</td>
                          </tr>
                        );
                      })}
                  </>
                );
              })
            ) : (
              <tr>
                <td>Not Found Question</td>
              </tr>
            )}
          </tbody>
        </table>
      }
    </SoftBox>
  );
};
TableFour.propTypes = {
  formData: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  formik: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  form: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  stepIndex: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  index: PropTypes.number,
};
export default TableFour;
