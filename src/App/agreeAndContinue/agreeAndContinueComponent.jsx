import FKPlatform from "fk-platform-sdk/web";
import "./styles/style.scss";
import { Redirect } from "react-router-dom";
import React, { useState } from "react";
import PropTypes from "prop-types";
import { TcComponent, VisitHipBarComponent } from "./components";
import { AlertWithOptions } from "../common/alert";

AgreeAndContinueComponent.propTypes = {
  showTC: PropTypes.bool,
  redirect: PropTypes.string,
  selectedAddress: PropTypes.object,
};

function AgreeAndContinueComponent(props) {
  const showTC = props.showTC;
  const redirect = props.redirect;
  let [showModal, setModal] = useState(false);
  const fnPermissionsGranted = () => {
    setModal(false);
    navigator.geolocation.getCurrentPosition((loc) => {
      console.log(loc.coords.latitude);
    });
  };

  const fnPermissionsDenied = () => {
    setModal(false);
    console.log("[permissions denied]");
    return <Redirect to="/statecity/select" />;
  };
  const alertDetails = {
    title: 'Allow "HipBar" to access your location?',
    content: "HipBar wants your location to display stores near you",
    option1: "Don't Allow",
    option2: "Allow",
    handleOption1: fnPermissionsDenied,
    handleOption2: fnPermissionsGranted,
  };

  /*if (FKPlatform.isPlatformAvailable()) {
    // if (showTC) {
    //   return <TcComponent {...props} />;
    // } else if (props.selectedAddress !== null) {
    //   return <Redirect to="/user/login" />;
    // }
    // return <Redirect to="/statecity/select" />;
    if (showTC) {
      return <TcComponent {...props} />;
    } else if (showModal) {
      return <AlertWithOptions {...alertDetails} />;
    } else if (!showModal){
      console.log("showModal");
      return <Redirect to="/user/login/" />;

      //return <Redirect to="/statecity/select" />;
    }
  }
  return <VisitHipBarComponent />;*/
  if (FKPlatform.isPlatformAvailable()) {

    const redirectURL = (!redirect) ? `/user/login/` : `/user/login/${redirect}`;
    if (showTC) {
      return <TcComponent {...props} />;
    } else if (showModal) {
      return <AlertWithOptions {...alertDetails} />;
    } else if (!showModal && props.selectedAddress !== null) {
      return <Redirect to={redirectURL} />;
    }
    return <Redirect to={redirectURL} />;
    //return <Redirect to="/statecity/select" />;
  }
  return <VisitHipBarComponent />;
}

export { AgreeAndContinueComponent };
