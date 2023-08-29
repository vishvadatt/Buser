// import {
//     Button,
//     FormControl,
//     FormControlLabel,
//     Grid,
//     Radio,
//     RadioGroup,
//     Typography,
//   } from "@mui/material";
//   import SoftBox from "components/SoftBox";
//   import SoftButton from "components/SoftButton";
//   import SoftSelect from "components/SoftSelect";
//   import SoftSnackbar from "components/SoftSnackbar";
//   import SoftTypography from "components/SoftTypography";
//   import Footer from "examples/Footer";
//   import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
//   import DashboardNavbar from "examples/Navbars/DashboardNavbar";
//   import { FieldArray, Form, Formik, useFormik, ErrorMessage } from "formik";
//   import FormField from "layouts/pages/account/components/FormField";
//   import moment from "moment";
//   import { useEffect, useState } from "react";
//   import { useDispatch, useSelector } from "react-redux";
//   import { Link, useNavigate } from "react-router-dom";
//   import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
//   import {
//     clearMessage,
//     PainDetail_Action,
//     painListAction,
//     painListTypeAction,
//   } from "store/actions/actions";
//   import selectData from "./data/selectData";
//   import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";
//   import shortId from "short-uuid";
//   console.log("selectData..", selectData);
//   import { ErrorComponent, validationSchema } from "./data/Validation";
//   import * as yup from "yup";
//   import DeleteIcon from "@mui/icons-material/Delete";
//   import ReactSelect from "react-select";
//   import { MinusCircleOutlined, PlusCircleOutlined } from "@ant-design/icons";
//   function DailyUpdateForm() {
//     const [painForm, setPainForm] = useState(false);
//     const UserId = useSelector((state) => state.auth.auth._id);
//     const navigate = useNavigate();
//     const dispatch = useDispatch();
//     const token = useSelector((state) => state.auth.auth.idToken);
//     // const [headpainLevel ,setHeadpainLevel] = useState("")
//     const successMessage = useSelector((state) => state.auth.successMessage);
//     const errorMessage = useSelector((state) => state.auth.errorMessage);
//     const [errorSB, setErrorSB] = useState(errorMessage ? true : false);
//     const painList = useSelector((state) => state.auth.painList);
//     const [painId, setPainId] = useState("");
//     console.log("painId...", painId !== "");
//     const painListType = useSelector((state) =>
//       state.auth.painListType[0]?.painDetail !== undefined
//         ? state.auth.painListType[0]?.painDetail
//         : []
//     );
//     console.log("painListType..", painListType);
//     let newPainList = painList.map((a) => ({ value: a._id, label: a.name }));
//     let newPainListType = painListType.map((a) => ({ value: a._id, label: a.code + "-" + a.description }));
//     console.log("newPainListType..", newPainListType);
//     const closeErrorSB = () => {
//       setErrorSB(false);
//       dispatch(clearMessage());
//     };
  
//     useEffect(() => {
//       if (successMessage !== "") {
//         navigate("/daily-updates");
//       }
//     }, [successMessage]);
//     // console.log("formik", formik.values);
  
//     useEffect(() => {
//       dispatch(painListAction({ token }));
//     }, []);
  
//     useEffect(() => {
//       if (painId !== "") {
//         dispatch(painListTypeAction({ token: token, painId: painId }));
//       }
//     }, [painId]);
  
//     return (
//       <DashboardLayout>
//         <DashboardNavbar />
        
      
//           <Formik
//             validationSchema={validationSchema}
//             initialValues={{
//               Sequence: "",
//               timeofSequence: "",
//               Nutrition: "",
//               timeofNutrition: "",
//               employeePainData: [
//                 { painName: "", PainType: [], painLevel: "", painFrequency: "", painDuration: "" },
//               ],
//             }}
//             onSubmit={(values) => {
//               console.log("values..", values);
//               dispatch(
//                 PainDetail_Action({
//                   userId: UserId,
//                   ...values,
//                   Date: moment().format("DD-MM-YYYY"),
//                 })
//               );
//             }}
//           >
//             {(formik, errors) => {
//               console.log("errors..", errors);
//               return (
//                 <Form>
//                   <>
//                     <Grid container spacing={3}>
//                       <Grid item xs={12} sm={6} lg={6}>
//                         <SoftBox
//                           display="flex"
//                           flexDirection="column"
//                           justifyContent="flex-end"
//                           height="100%"
//                         >
//                           <SoftBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
//                             <SoftTypography
//                               component="label"
//                               variant="caption"
//                               fontWeight="bold"
//                               textTransform="capitalize"
//                             >
//                               have you done your sequence exercises for today?
//                             </SoftTypography>
//                           </SoftBox>
//                           <SoftSelect
//                             placeholder="Please Select ..."
//                             options={selectData.questions}
//                             onChange={(e) => formik.setFieldValue("Sequence", e.value)}
//                           />
//                           {/* <ErrorMessage name="Sequence" /> */}
//                           <ErrorComponent name="Sequence" />
//                         </SoftBox>
//                       </Grid>
//                       {formik.values.Sequence === "Yes" && (
//                         <Grid item xs={12} sm={6} lg={6}>
//                           <FormField
//                             type="time"
//                             label="if yes then time of Sequence"
//                             name="timeofSequence"
//                             placeholder="name"
//                             value={formik.values.timeofSequence}
//                             onChange={formik.handleChange}
//                           />
//                           <ErrorComponent name="timeofSequence" />
//                         </Grid>
//                       )}
//                     </Grid>
//                     <Grid mt={0.5} container spacing={3}>
//                       <Grid item xs={12} sm={6} lg={6}>
//                         <SoftBox
//                           display="flex"
//                           flexDirection="column"
//                           justifyContent="flex-end"
//                           height="100%"
//                         >
//                           <SoftBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
//                             <SoftTypography
//                               component="label"
//                               variant="caption"
//                               fontWeight="bold"
//                               textTransform="capitalize"
//                             >
//                               have you taken your nutrition today?
//                             </SoftTypography>
//                           </SoftBox>
//                           <SoftSelect
//                             placeholder="Please Select ..."
//                             options={selectData.questions}
//                             onChange={(e) => formik.setFieldValue("Nutrition", e.value)}
//                           />
//                           <ErrorComponent name="Nutrition" />
//                         </SoftBox>
//                       </Grid>
//                       {formik.values.Nutrition === "Yes" && (
//                         <Grid item xs={12} sm={6} lg={6}>
//                           <FormField
//                             type="time"
//                             label="if yes then time of Nutrition"
//                             name="timeofNutrition"
//                             placeholder="name"
//                             value={formik.values.timeofNutrition}
//                             onChange={formik.handleChange}
//                           />
//                           <ErrorComponent name="timeofNutrition" />
//                         </Grid>
//                       )}
//                     </Grid>
  
//                     <Grid container>
//                       <FieldArray
//                         name="employeePainData"
//                         render={(arrayhelpers) => {
//                           return (
//                             <>
//                               {formik.values.employeePainData.map((emp, i) => (
//                                 <Grid container spacing={3} key={i} pt={3}>
//                                   {i > 0 && (
//                                     <Grid item xs={12} sm={12} lg={12}>
//                                       <SoftBox
//                                         display="flex"
//                                         flexDirection="row"
//                                         justifyContent="center"
//                                         // height="100%"
//                                       >
//                                         <SoftTypography mt={0}>
//                                           <p style={{ fontWeight: "bold" }}>
//                                             Click the Minus-Sign to remove Pains
//                                           </p>
//                                         </SoftTypography>
//                                       </SoftBox>
//                                       <SoftBox
//                                         display="flex"
//                                         flexDirection="row"
//                                         justifyContent="center"
//                                         height="100%"
//                                       >
//                                         <MinusCircleOutlined
//                                           style={{
//                                             cursor: "pointer",
//                                             fontSize: "25px",
//                                             color: "#344767",
//                                           }}
//                                           onClick={() => arrayhelpers.remove(i)}
//                                         />
//                                       </SoftBox>
//                                     </Grid>
//                                   )}
  
//                                   <Grid item xs={12} sm={6} lg={6}>
//                                     <SoftBox mb={0} ml={0.5} lineHeight={0} display="inline-block">
//                                       <SoftTypography
//                                         component="label"
//                                         variant="caption"
//                                         fontWeight="bold"
//                                         textTransform="capitalize"
//                                       >
//                                         Select Pain Area
//                                       </SoftTypography>
//                                     </SoftBox>
//                                     <SoftSelect
//                                       placeholder="Select Pain Area"
//                                       options={newPainList}
//                                       name={`employeePainData.${i}.painName`}
//                                       onChange={(e) => {
//                                         console.log("event..", e.length);
//                                         formik.setFieldValue(
//                                           `employeePainData.${i}.painName`,
//                                           e?.label
//                                         );
//                                         setPainId(e?.value);
//                                         console.log("event...", e);
//                                       }}
//                                     />
//                                     <ErrorComponent name={`employeePainData.${i}.painName`} />
//                                   </Grid>
  
//                                   <Grid item xs={12} sm={6} lg={6}>
//                                     <SoftBox mb={0} ml={0.5} lineHeight={0} display="inline-block">
//                                       <SoftTypography
//                                         component="label"
//                                         variant="caption"
//                                         fontWeight="bold"
//                                         textTransform="capitalize"
//                                       >
//                                         Select Pain Type
//                                       </SoftTypography>
//                                     </SoftBox>
//                                     {/* <SoftSelect
//                                       placeholder="Select Pain Type"
//                                       options={newPainListType}
//                                       onChange={(e) => {
//                                         formik.setFieldValue(
//                                           `employeePainData.${i}.PainType`,
//                                           e.label
//                                         );
//                                       }}
//                                     /> */}
//                                     {/* <SoftSelect
//                                       multiple
//                                       placeholder="Select Pain Type"
//                                       options={newPainListType}
//                                       onChange={(e) => {
//                                         formik.setFieldValue(
//                                           `employeePainData.${i}.PainType`,
//                                           e.label
//                                         );
//                                       }}
//                                     /> */}
//                                     <ReactSelect
//                                       styles={{
//                                         control: (baseStyles, state) => ({
//                                           ...baseStyles,
//                                           // borderColor: state.isFocused ? 'grey' : 'red',
//                                           // height : "40px",
//                                           fontSize: "15px !important",
//                                           borderRadius: "8px",
//                                         }),
//                                       }}
//                                       placeholder="Select Pain Type"
//                                       closeMenuOnSelect={false}
//                                       isMulti
//                                       options={newPainListType}
//                                       // value={props.value ? props.value : null}
//                                       onChange={(selected) => {
//                                         console.log("selected...", selected);
//                                         let arr = [];
//                                         selected.map((ptype) => arr.push(ptype.label));
//                                         console.log("arr..", arr);
//                                         formik.setFieldValue(`employeePainData.${i}.PainType`, arr);
//                                       }}
//                                     />
//                                     {/* <ErrorComponent name={`employeePainData.${i}.PainType`} /> */}
//                                   </Grid>
  
//                                   {/* <Grid item xs={12} sm={2} lg={1}></Grid> */}
  
//                                   <Grid item xs={12} sm={4} lg={4} mt={1}>
//                                     <SoftBox
//                                       display="flex"
//                                       flexDirection="column"
//                                       justifyContent="flex-end"
//                                       height="100%"
//                                     >
//                                       <SoftBox ml={0.5} lineHeight={0} display="inline-block">
//                                         <SoftTypography
//                                           component="label"
//                                           variant="caption"
//                                           fontWeight="bold"
//                                           textTransform="capitalize"
//                                         >
//                                           Select Pain Level
//                                         </SoftTypography>
//                                       </SoftBox>
//                                       <FormControl>
//                                         <RadioGroup
//                                           row
//                                           // value={headpainLevel}
//                                           onChange={(e) =>
//                                             formik.setFieldValue(
//                                               `employeePainData.${i}.painLevel`,
//                                               e.target.value
//                                             )
//                                           }
//                                           style={{ paddingLeft: "13px" }}
//                                         >
//                                           <FormControlLabel value="0" control={<Radio />} label="0" />
//                                           <FormControlLabel value="1" control={<Radio />} label="1" />
//                                           <FormControlLabel value="2" control={<Radio />} label="2" />
//                                           <FormControlLabel value="3" control={<Radio />} label="3" />
//                                           <FormControlLabel value="4" control={<Radio />} label="4" />
//                                           <FormControlLabel value="5" control={<Radio />} label="5" />
//                                           <FormControlLabel value="6" control={<Radio />} label="6" />
//                                           <FormControlLabel value="7" control={<Radio />} label="7" />
//                                           <FormControlLabel value="8" control={<Radio />} label="8" />
//                                           <FormControlLabel value="9" control={<Radio />} label="9" />
//                                           <FormControlLabel
//                                             value="10"
//                                             control={<Radio />}
//                                             label="10"
//                                           />
//                                         </RadioGroup>
//                                       </FormControl>
//                                       <ErrorComponent name={`employeePainData.${i}.painLevel`} />
//                                     </SoftBox>
//                                   </Grid>
  
//                                   <Grid item xs={12} sm={4} lg={4} mt={1}>
//                                     <SoftBox
//                                       display="flex"
//                                       flexDirection="column"
//                                       // justifyContent="flex-end"
//                                       height="100%"
//                                     >
//                                       <SoftBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
//                                         <SoftTypography
//                                           component="label"
//                                           variant="caption"
//                                           fontWeight="bold"
//                                           textTransform="capitalize"
//                                         >
//                                           Select Pain Frequency
//                                         </SoftTypography>
//                                       </SoftBox>
//                                       <SoftSelect
//                                         placeholder="daily/weekly/monthly"
//                                         options={selectData.Frequency}
//                                         onChange={(e) =>
//                                           formik.setFieldValue(
//                                             `employeePainData.${i}.painFrequency`,
//                                             e.value
//                                           )
//                                         }
//                                       />
//                                       <ErrorComponent name={`employeePainData.${i}.painFrequency`} />
//                                     </SoftBox>
//                                   </Grid>
//                                   <Grid item xs={12} sm={4} lg={4} mt={1}>
//                                     <SoftBox
//                                       display="flex"
//                                       flexDirection="column"
//                                       // justifyContent="flex-end"
//                                       height="100%"
//                                     >
//                                       <SoftBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
//                                         <SoftTypography
//                                           component="label"
//                                           variant="caption"
//                                           fontWeight="bold"
//                                           textTransform="capitalize"
//                                         >
//                                           Select Pain Duration
//                                         </SoftTypography>
//                                       </SoftBox>
//                                       <SoftSelect
//                                         placeholder="1 hour to 24 hours"
//                                         options={selectData.Hours}
//                                         onChange={(e) =>
//                                           formik.setFieldValue(
//                                             `employeePainData.${i}.painDuration`,
//                                             e.value
//                                           )
//                                         }
//                                       />
//                                       <ErrorComponent name={`employeePainData.${i}.painDuration`} />
//                                     </SoftBox>
//                                   </Grid>
//                                 </Grid>
//                               ))}
//                               <Grid item xs={12} sm={12} lg={12}>
//                                 <SoftBox
//                                   display="flex"
//                                   flexDirection="row"
//                                   justifyContent="center"
//                                   // height="100%"
//                                 >
//                                   <SoftTypography mt={4}>
//                                     <p style={{ fontWeight: "bold" }}>
//                                       Click the Plus-Sign to add more Pains
//                                     </p>
//                                   </SoftTypography>
//                                 </SoftBox>
//                                 <SoftBox
//                                   display="flex"
//                                   flexDirection="row"
//                                   justifyContent="center"
//                                   // height="100%"
//                                 >
//                                   <PlusCircleOutlined
//                                     style={{ cursor: "pointer", fontSize: "25px", color: "#344767" }}
//                                     onClick={() =>
//                                       arrayhelpers.insert(formik.values.employeePainData.length + 1, {
//                                         painName: "",
//                                         PainType: [],
//                                         painLevel: "",
//                                         painFrequency: "",
//                                         painDuration: "",
//                                       })
//                                     }
//                                   />
//                                 </SoftBox>
//                               </Grid>
//                             </>
//                           );
//                         }}
//                       />
//                     </Grid>
//                     <SoftBox my={2}>
//                       <SoftButton
//                         type="submit"
//                         variant="gradient"
//                         color="info"
//                         // onClick={() => {
//                         //   console.log("formik...", formik.values);
  
//                         //   dispatch(
//                         //     PainDetail_Action({
//                         //       userId: UserId,
//                         //       ...formik.values,
//                         //       Date: moment().format("DD-MM-YYYY"),
//                         //     })
//                         //   );
//                         // }}
//                       >
//                         submit
//                       </SoftButton>
//                     </SoftBox>
//                     <SoftSnackbar
//                       color={successMessage !== "" ? "success" : "error"}
//                       icon="star"
//                       title="Buser Institute"
//                       content={errorMessage || successMessage}
//                       open={errorMessage !== "" || successMessage !== "" ? true : false}
//                       onClose={closeErrorSB}
//                       close={closeErrorSB}
//                       bgWhite
//                     />
//                   </>
//                 </Form>
//               );
//             }}
//           </Formik>
//         </SoftBox>
//         <Footer />
//       </DashboardLayout>
//     );
//   }
  
//   export default Dropdown;
  