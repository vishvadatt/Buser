import { Grid } from "@mui/material";
import SoftBox from "components/SoftBox";
import SoftButton from "components/SoftButton";
import SoftSelect from "components/SoftSelect";
import SoftSnackbar from "components/SoftSnackbar";
import SoftTypography from "components/SoftTypography";
import { Formik, useFormik } from "formik";
import FormField from "layouts/pages/account/components/FormField";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getNutritionAction } from "store/actions/actions";
import { addNutritionAction } from "store/actions/actions";
import * as yup from "yup";
// import { clearMessage, reportListAction, uploadlabreport } from "../../../store/actions/actions";
// import "./pagistyles.css";

const AddNutritionForm = (handleprops) => {
  const { handletabvalue } = handleprops;
  const successMessage = useSelector((state) => state.auth.successMessage);
  const errorMessage = useSelector((state) => state.auth.errorMessage);
  const [reportimg, setreportimg] = useState(null);
  const UserId = useSelector((state) => state.auth.auth._id);
  const token = useSelector((state) => state.auth.auth.idToken);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const validationSchema = yup.object({
    name: yup.string().required("Nutrition name is required"),
    uploadNutrition: yup.string().required("Nutrition is required"),
    description: yup.string().required("Description is required"),
  });

  const reportStatus = [
    { value: true, label: "true" },
    { value: false, label: "false" },
  ];

  return (
    <>
      <Formik
        initialValues={{
          uploadNutrition: "",
          name: "",
          description: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log("Val..", values);
          let formData = new FormData();
          formData.append("uploadNutrition", values?.uploadNutrition);
          formData.append("name", values?.name);
          formData.append("description", values?.description);
          formData.append("userId", UserId);


          dispatch(addNutritionAction({ data: formData, UserId, token }));

          setreportimg(null);
          // setTimeout(() => {
          //   dispatch(getNutritionAction({ UserId: UserId }));
          // },5000)
          handletabvalue();
        }}
      >
        {(formik) => {
          return (
            <>
              <Grid container spacing={0}>
                <Grid item xs={12} sm={4} className="fontTitle">
                  <div className="form-label-group">
                    <>
                      <FormField
                        type="file"
                        name="uploadNutrition"
                        label="Upload Nutrition:"
                        onChange={(e) => {
                          console.log("log..", e.target.files[0])
                          formik.setFieldValue("uploadNutrition", e.target.files[0])
                        }
                        }
                        id="files"
                        class="hidden"
                        style={{ color: "transparent", width: "auto" }}
                      />
                      {formik.touched.uploadNutrition && formik.errors.uploadNutrition && <div style={{ color: "red" }}>{formik.errors.uploadNutrition}</div>}
                    </>
                  </div>
                </Grid>
              </Grid>
              <Grid mt={0.5} container spacing={3}>
                <Grid item xs={12} sm={6} className="fontTitle">
                  <FormField
                    type="text"
                    placeholder="Enter Nutrition Name"
                    label="Nutrition Name:"
                    name="name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.name && formik.errors.name && <div style={{ color: "red" }}>{formik.errors.name}</div>}
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
                  {formik.touched.description && formik.errors.description && <div style={{ color: "red" }}>{formik.errors.description}</div>}
                </Grid>
              </Grid>
              <SoftBox my={4}>
                <SoftButton type="submit" variant="gradient" color="dark" onClick={formik.handleSubmit}>
                  submit
                </SoftButton>
              </SoftBox>
            </>
          );
        }}

      </Formik>
    </>
  );
};

export default AddNutritionForm;
