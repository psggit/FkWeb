import React from "react";
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";

tcComponent.propTypes = {
  agreeTc: PropTypes.any,
};

function tcComponent(props) {
  const agreeTc = props.agreeTc;
  return (
    <div>
      <button onClick={agreeTc()}> AgreeAndContinue </button>
    </div>
  );
}

lFComponent.propTypes = {
  retryLogin: PropTypes.agreeTc,
};

function lFComponent() {
  return (
    <div>
      <div>login failed </div>
      <button> retry </button>
    </div>
  );
}

function AgreeAndContinueComponent(props) {
  const showTC = props.showTC;
  const loginInProgress = props.loginInProgress;
  const loginFailed = props.loginFailed;
  const loginSuccess = props.loginSuccess;
  if (showTC) {
    return <tcComponent props={props} />;
  } else if (loginInProgress) {
    return <div> Login in progress </div>;
  } else if (loginFailed) {
    return <lFComponent props={props} />;
  } else if (loginSuccess) {
    <Redirect to=" /user/info/create" />;
  }
}

export { AgreeAndContinueComponent };
