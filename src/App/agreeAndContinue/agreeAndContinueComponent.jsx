import FKPlatform from "fk-platform-sdk/web";
import "./styles/style.scss";
import { Redirect } from "react-router-dom";
import React, { useState } from "react";
import PropTypes from "prop-types";
import { TcComponent, VisitHipBarComponent } from "./components";
import { AlertWithOptions } from "../common/alert";

AgreeAndContinueComponent.propTypes = {
  showTC: PropTypes.bool,
  selectedAddress: PropTypes.object,
};

function AgreeAndContinueComponent(props) {
  const showTC = props.showTC;
  let [showModal, setModal] = useState(true);
  const fnPermissionsGranted = () => {
    setModal(false);
    console.log("[permissions granted]");
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
    if (showTC) {
      return <TcComponent {...props} />;
    } else if (showModal) {
      return <AlertWithOptions {...alertDetails} />;
    } else if (!showModal && props.selectedAddress !== null) {
      return <Redirect to="/user/login/" />;
    }
    return <Redirect to="/user/login/" />;
    //return <Redirect to="/statecity/select" />;
  }
  return <VisitHipBarComponent />;
}

export { AgreeAndContinueComponent };
