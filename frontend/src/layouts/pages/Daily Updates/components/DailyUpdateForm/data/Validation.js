import { ErrorMessage } from "formik";
import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  Sequence: Yup.string().required("Sequence Exercises are required"),
  Nutrition: Yup.string().required("Nutrition are required"),

  employeePainData: Yup.array().of(
    Yup.object().shape({
      painName: Yup.string().required("Please Select Pain Area"),
      // diagnosisName: Yup.object().required("Please Select Diagnosis Name"),
      // PainType : Yup.array().required("Please Select Pain Type Area"),

      // PainType : Yup.array().of(Yup.object().shape({
      //     PainType : Yup.string().required('select type')
      // })),
      antiGravity: Yup.string().required("Please Select Anti_Gravity"),
      painLevel: Yup.string().required("Please Select Pain Level"),
      painFrequency: Yup.string().required("Please Select Pain Frequency"),
      painDuration: Yup.string().required("Please Select Pain Duration"),
    })
  ),
  timeofSequence: Yup.string().when("Sequence", {
    is: "Yes",
    then: Yup.string().required("Time of Sequence are required"),
  }),

  timeofNutrition: Yup.string().when("Nutrition", {
    is: "Yes",
    then: Yup.string().required("Time of Sequence are required"),
  }),
});

export const ErrorComponent = (nameProps) => {
  const { name } = nameProps;
  return (
    <div style={{ color: "red", fontSize: "12px", fontWeight: "inherit" }}>
      <ErrorMessage name={name} />
    </div>
  );
};
