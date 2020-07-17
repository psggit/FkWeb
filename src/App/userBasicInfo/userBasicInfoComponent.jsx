import React from "react";
import "./styles/style.scss";
import logo from "../../assets/images/drinksAppLogo.svg";
import { Redirect, Link } from "react-router-dom";
import PropTypes from "prop-types";

UserBasicInfoComponent.propTypes = {
  agreeTc: PropTypes.func,
};

function UserBasicInfoComponent(props) {
  const agreeTc = props.agreeTc;
  return (
    <div className="component">
      USER BASIC INFO
    </div>
  );
}
export { UserBasicInfoComponent };
