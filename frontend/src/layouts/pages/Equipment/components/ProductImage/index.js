// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";

import SoftButton from "components/SoftButton";

function Productimage({ image }) {
  console.log("image..",image);
  return (
    <SoftBox display="flex" alignItems="center">
        <img src={image} alt="" width="50%"  />
    </SoftBox>
  );
}

Productimage.defaultProps = {
  checked: false,
};

Productimage.propTypes = {
  image: PropTypes.string.isRequired,
};

export default Productimage;
