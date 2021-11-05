import React from "react";
import PropTypes from "prop-types";

export default function Controls({ onChange, onSubmit }) {
  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="greetingField">Hi, my name is:</label>
      <input
        id="nameField"
        name="nameField"
        type="text"
        onChange={(event) => onChange(event)}
      />
    </form>
  );
}

Controls.propTypes = {
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
};
