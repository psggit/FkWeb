import "./styles/style.scss";
import { Redirect } from "react-router-dom";
import React from "react";
import PropTypes from "prop-types";
import { TcComponent, VisitHipBarComponent } from "./components";

AgreeAndContinueComponent.propTypes = {
  showTC: PropTypes.bool,
  selectedAddress: PropTypes.object,
};

function AgreeAndContinueComponent(props) {
  const showTC = props.showTC;

  //  if (!navigator.appVersion.includes("flipkart")) {
  //    return <VisitHipBarComponent />;
  //  }

  if (showTC) {
    return <TcComponent {...props} />;
  } else if (props.selectedAddress !== null) {
    return <Redirect to="/user/login" />;
  }
  return <Redirect to="/statecity/select" />;
}

export { AgreeAndContinueComponent };
