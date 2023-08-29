// prop-type is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Grid from "@mui/material/Grid";

// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// NewUser page components
import FormField from "layouts/pages/ProfileAfterlogin/components/FormField";
import "../UserInfo/style.css";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

function Socials({ formData }) {
  const { formField, values ,setFieldValue} = formData;
  const {  EmergencyName, EmergencyRelation } = formField;
  const {
    EmergencyName: EmergencyNameV,
    EmergencyRelation: EmergencyRelationV,
  } = values;

  return (
    <SoftBox>
      <SoftTypography variant="h5" fontWeight="bold">
        Emergency Contact Information
      </SoftTypography>
      <SoftBox mt={1.625}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <FormField
              type={EmergencyName.type}
              label={EmergencyName.label}
              name={EmergencyName.name}
              value={EmergencyNameV}
              placeholder={EmergencyName.placeholder}
              // error={errors.EmergencyName && touched.EmergencyName}
              // success={EmergencyNameV.length > 0 && !errors.EmergencyName}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
          <SoftBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
              <SoftTypography
                component="label"
                variant="caption"
                fontWeight="bold"
                textTransform="capitalize"
                mb={5}
              >
                Emergency Phone Number
              </SoftTypography>
            </SoftBox>
            <PhoneInput
              className="stylet"
              placeholder="Enter number"
              onChange={(value) => {
                setFieldValue("EmergencyPhoneNumber", value);
              }}
            />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
            <FormField
              type={EmergencyRelation.type}
              label={EmergencyRelation.label}
              name={EmergencyRelation.name}
              value={EmergencyRelationV}
              placeholder={EmergencyRelation.placeholder}
              // error={errors.EmergencyName && touched.EmergencyName}
              // success={EmergencyNameV.length > 0 && !errors.EmergencyName}
            />
          </Grid>
        </Grid>
      </SoftBox>
    </SoftBox>
  );
}

// typechecking props for Socials
Socials.propTypes = {
  formData: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};

export default Socials;
