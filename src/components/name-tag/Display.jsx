import React from "react";
import PropTypes from "prop-types";

const Display = ({ greeting, name }) => (
  <div>
    <select name="selectList">
      <option value="option 1">Hi, my name is:</option>
      <option value="option 2">Where are my pants?</option>
    </select>
    <span>{name}</span>
    <button aria-label="create-button">Make your nametag!</button>
  </div>
);

Display.propTypes = {
  greeting: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Display;
