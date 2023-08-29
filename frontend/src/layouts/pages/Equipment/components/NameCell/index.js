// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components


// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import "./style.css";

function NameCell({ name }) {
  return (
    <SoftBox display="flex" alignItems="center" >
      <SoftTypography variant="button" fontWeight="medium"  >
        {name}
      </SoftTypography>
    </SoftBox>
  );
}


NameCell.propTypes = {
 
  name: PropTypes.string.isRequired,

};

export default NameCell;
