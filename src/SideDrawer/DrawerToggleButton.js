import React from "react";
import "./ToggleButton.css";

const DrawerToggleButton = props => (
  <button onClick={props.click} className="toggle-button">
    <div className="toggle-button-line"></div>
    <div className="toggle-button-line"></div>
    <div className="toggle-button-line"></div>
  </button>
);
export default DrawerToggleButton;
