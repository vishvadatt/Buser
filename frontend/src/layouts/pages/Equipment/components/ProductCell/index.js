// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";

import SoftButton from "components/SoftButton";

function ProductCell({ link }) {
  return (
    <SoftBox display="flex" alignItems="center">
      {/* <Link to={link}> */}
      <SoftButton color="info" href={link} target="_blank">
        buy now
      </SoftButton>
      {/* </Link> */}
    </SoftBox>
  );
}

ProductCell.defaultProps = {
  checked: false,
};

ProductCell.propTypes = {
  link: PropTypes.string.isRequired,
};

export default ProductCell;
