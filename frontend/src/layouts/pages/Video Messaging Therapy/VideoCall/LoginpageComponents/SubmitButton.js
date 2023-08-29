import React from "react";
import PropTypes from "prop-types";

const SubmitButton = ({ handleSubmitButtonPressed }) => {
  return (
    <div className="login-page_button_container">
      <button
        className="login-page_button background_main_color text_main_color"
        onClick={handleSubmitButtonPressed}
      >
        START
      </button>
    </div>
  );
};
SubmitButton.propTypes = {
  handleSubmitButtonPressed: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};

export default SubmitButton;
