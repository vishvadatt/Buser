import React from "react";
import SoftTypography from "components/SoftTypography";
import SoftBox from "components/SoftBox";
import PropTypes from "prop-types";

function Endpage({ formik, formData, index }) {
  const { values } = formik;

  const { meditations: meditationsV, dose: doseV } = values.page8[index];

  return (
    <>
      <SoftBox>
        <SoftTypography fontWeight="bold" fontSize="16px" marginTop="10px" marginBottom="8px">
          Please list any medications you are taking, include dose if possible (See also the next
          page with a list of some medications. Please include their dosages here):
        </SoftTypography>
        {/* <textarea name="" id="" rows="10"></textarea> */}
        <textarea
          className="textarea"
          value={meditationsV}
          name={`page8[${index}].meditations`}
          onChange={formik.handleChange}
        ></textarea>
      </SoftBox>
      <SoftBox>
        <SoftTypography fontWeight="bold" fontSize="16px" marginTop="10px" marginBottom="8px">
          Please list any supplements or herbal therapies you are taking, include dose if possible:
        </SoftTypography>
        {/* <textarea name="" id="" rows="10"></textarea> */}
        <textarea
          className="textarea"
          value={doseV}
          name={`page8[${index}].dose`}
          onChange={formik.handleChange}
        ></textarea>
      </SoftBox>
    </>
  );
}
Endpage.propTypes = {
  formData: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  formik: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  index: PropTypes.oneOfType([PropTypes.number, PropTypes.func]).isRequired,
};
export default Endpage;
