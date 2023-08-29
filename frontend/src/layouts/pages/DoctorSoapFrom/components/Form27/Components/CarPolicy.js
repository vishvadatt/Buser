import React, { useEffect } from "react";

import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import Grid from "@mui/material/Grid";
import FormField from "layouts/pages/account/components/FormField";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Box, Divider, Radio } from "@mui/material";
import { Form, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import "../style.css";
import PropTypes from "prop-types";

import PhoneInput from "react-phone-input-2";
import {
  getSearchPatient,
  patientsoapdata,
  soapFormPatientData,
  clientIntakeFormPatientData,
  getDoctorShopFormDataAction,
} from "store/actions/actions";
// import {
//   patientsoapdata,
//   // getDoctorShopFormDataAction,
//   doctorShopFromDetails,
//   doctorShopFormDataAction,
// } from "../../../../../store/actions/actions";
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  RadioGroup,
} from "@mui/material";

function CarPolicy({ formik, formData, stepIndex }) {
  const dispatch = useDispatch();

  // const { formField, setFieldValue } = form;
  // const { email } = formField;
  // const { name } = formField;
  const { handleChange, formField, errors, touched, setFieldValue } = formData;

  //   const { email } = formField;
  //   const { name } = formField;
  const { values } = formik;
  //   const patientlist = useSelector((state) => state.auth.searchpatientlist.result);
  //   const soappatientId = useSelector((state) => state.auth.patientSoapData.patientId);
  //   const UserId = useSelector((state) => state.auth.auth._id);

  //   const onSearch = (searchTerm) => {
  //     console.log("serchTerm", searchTerm.name);
  //     formik.setFieldValue(email.name, searchTerm.email);
  //     formik.setFieldValue(name.name, searchTerm.name);
  //     dispatch(patientsoapdata({ patientId: searchTerm._id }));
  //     dispatch(getDoctorShopFormDataAction({ patientId: searchTerm._id, practitionerId: UserId }));
  //     dispatch(soapFormPatientData(searchTerm._id));
  //   };
  //   console.log("setFieldValue", setFieldValue)
  const {
    name: nameV,
    todaydate: todaydateV,
    dob: dobV,
    height: heightV,
    weight: weightV,
    dominant: dominantV,
    address: addressV,
    city: cityV,
    zip: zipV,
    Cellphonenumber1: Cellphonenumber1V,
    phonenumbrCell1: phonenumbrCell1V,
    phonenumbrWork: phonenumbrWorkV,
    email: emailV,
    dl: dlV,
    health: healthV,
    policy: policyV,
    address1: address1V,
    city1: city1V,
    zip1: zip1V,
    adjuster: adjusterV,
    phone: phoneV,
    car: carV,
    address2: address2V,
    city2: city2V,
    zip2: zip2V,
    adjuster1: adjuster1V,
    phone1: phone1V,
    agent: agentV,
    phone2: phone2V,
    policy1: policy1V,
    claim: claimV,
    medicalpayments: medicalpaymentsV,
    uninsuredmotorist: uninsuredmotoristV,
    lawfirm: lawfirmV,
    address3: address3V,
    city3: city3V,
    zip3: zip3V,
    lawyer: lawyerV,
    phone3: phone3V,
    carpolicy: carpolicyV,
    patient: patientV,
    lossaccident: lossaccidentV,
    afteraccident: afteraccidentV,
    medicaltreatment: medicaltreatmentV,
    income: incomeV,
    propertydamage: propertydamageV,
    personal: personalV,
    phone4: phone4V,
    address4: address4V,
    city4: city4V,
    zip4: zip4V,
    lastname: lastnameV,
    type: typeV,
    lastphone: lastphoneV,
    lastamount: lastamountV,
    record: recordV,
  } = values;
  //   useEffect(() => {
  //     dispatch(getSearchPatient({ searchkey: nameV }));
  //   }, [nameV]);
  //   useEffect(() => {
  //     dispatch(getDoctorShopFormDataAction({ patientId: soappatientId, practitionerId: UserId }));
  //   }, []);
  //   useEffect(() => {
  //     dispatch(getDoctorShopFormDataAction({ patientId: soappatientId, practitionerId: UserId }));
  //   }, [stepIndex]);
  return (
    <Box mt={-2} >
      <Grid container spacing={3}>
        <Grid item xs={12} sm={8}>
          <FormField
            // type={Insuredoncarpolicy.type}
            label="Name Of Insured on your Car Policy"
            name="carpolicy"
            value={carpolicyV}
            placeholder="Insured on car policy"
            onChange={formik.handleChange}

            // error={errors.Insuredoncarpolicy && touched.Insuredoncarpolicy}
            // success={AdjusterV.length > 0 && !errors.Adjuster}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <FormField
            // type={Patient.type}
            label="For office use only Patient#"
            name="patient"
            value={patientV}
            placeholder="Patient"
            onChange={formik.handleChange}

            // error={errors.Patient && touched.Patient}
            // success={PhoneV.length > 0 && !errors.language}
          />
        </Grid>
      </Grid>

      <Grid container spacing={3} className="car-accident-row-container">
        <Grid item xs={12} sm={5} className="topspace">
          <FormField
            // type={Dateoflossaccident.type}
            label="Date of Loss/Accident?"
            name="lossaccident"
            value={lossaccidentV}
            placeholder="Date of loss/accident"
            onChange={formik.handleChange}

            // error={errors.Dateoflossaccident && touched.Dateoflossaccident}
            // onChange={(e) => setFieldValue("Dateoflossaccident", e.target.value)}
            // success={AdjusterV.length > 0 && !errors.Adjuster}
          />
        </Grid>
        <Grid item xs={12} sm={7}>
          <FormField
            // type={Dateforfirstsawanydoctor.type}
            label="Date you first saw any Doctor after accident"
            name="afteraccident"
            value={afteraccidentV}
            placeholder="Date for first saw any doctor"
            onChange={formik.handleChange}

            // error={errors.Dateforfirstsawanydoctor && touched.Dateforfirstsawanydoctor}
            // success={PhoneV.length > 0 && !errors.language}
          />
        </Grid>
      </Grid>

      <Grid container spacing={3} className="car-medical-treatment-row-container">
        <Grid item xs={12} sm={12} className="topspace">
          <FormField
            // type={Costofallmedicaltretmentsinceaccident.type}
            label="Cost of all medical treatment in accident"
            name="medicaltreatment"
            value={medicaltreatmentV}
            placeholder="Cost of all medical tretments in accident"
            onChange={formik.handleChange}

            // error={
            //   errors.Costofallmedicaltretmentsinceaccident &&
            //   touched.Costofallmedicaltretmentsinceaccident
            // }
            // success={AdjusterV.length > 0 && !errors.Adjuster}
          />
        </Grid>
      </Grid>

      <Grid container spacing={3} className="car-income-row-container">
        <Grid item xs={12} sm={12} className="topspace">
          <FormField
            // type={Howmuchincomeyoulost.type}
            label="How much income you lost"
            name="income"
            value={incomeV}
            placeholder="How much in come you lost"
            onChange={formik.handleChange}

            // error={errors.Howmuchincomeyoulost && touched.Howmuchincomeyoulost}
            // success={AdjusterV.length > 0 && !errors.Adjuster}
          />
        </Grid>
      </Grid>

      <Grid container spacing={3} className="car-damage-row-container">
        <Grid item xs={12} sm={12} className="topspace">
          <FormField
            // type={Propertydamageofyourcar.type}
            label="Property damage of your car"
            name="propertydamage"
            value={propertydamageV}
            placeholder="Property damage of your car"
            onChange={formik.handleChange}

            // error={errors.Propertydamageofyourcar && touched.Propertydamageofyourcar}
            // success={AdjusterV.length > 0 && !errors.Adjuster}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
CarPolicy.propTypes = {
  formik: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  // form: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  formData: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  stepIndex: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};
export default CarPolicy;
