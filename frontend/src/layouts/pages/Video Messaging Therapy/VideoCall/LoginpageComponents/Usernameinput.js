import React from "react";
import PropTypes from "prop-types";

const UsernameInput = (props) => {
  const { username, setUsername } = props;

  return (
    <div className="login-page_input_container">
      <input
        placeholder="Enter your name"
        type="text"
        value={username}
        onChange={(event) => {
          setUsername(event.target.value);
        }}
        className="login-page_input background_main_color text_main_color"
      />
    </div>
  );
};
UsernameInput.propTypes = {
  username: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  setUsername: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};
export default UsernameInput;
