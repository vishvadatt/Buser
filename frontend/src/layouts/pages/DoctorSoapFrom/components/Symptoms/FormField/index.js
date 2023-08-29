// prop-type is a library for typechecking of props
import PropTypes from "prop-types";

// formik components
import { ErrorMessage, Field } from "formik";

// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftInput from "components/SoftInput";
import "../style.css";

function FormField({ label, name, ...rest }) {
  return (
    <SoftBox mb={0.5}>
      <SoftBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
        <SoftTypography
          component="label"
          variant="h6"
          fontWeight="bold"
          // textTransform="capitalize"
          className="main-label"
        >
          {label}
        </SoftTypography>
      </SoftBox>
      <Field {...rest} name={name} as={SoftInput} />
      <SoftBox mt={0.5}>
        <SoftTypography component="div" variant="caption" color="error">
          <ErrorMessage name={name} />
        </SoftTypography>
      </SoftBox>
    </SoftBox>
  );
}

// typechecking props for FormField

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default FormField;
