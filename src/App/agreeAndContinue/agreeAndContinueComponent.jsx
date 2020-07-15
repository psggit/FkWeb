import React from "react";
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";

TcComponent.propTypes = {
  agreeTc: PropTypes.func,
};

function TcComponent(props) {
  const agreeTc = props.agreeTc;
  return (
    <div>
      <button onClick={agreeTc}> AgreeAndContinue </button>
    </div>
  );
}

LFComponent.propTypes = {
  retryLogin: PropTypes.agreeTc,
};

function LFComponent() {
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
    return <TcComponent agreeTc={props.agreeTc} />;
  } else if (loginInProgress) {
    return <div> Login in progress </div>;
  } else if (loginFailed) {
    return <LFComponent />;
  } else if (loginSuccess) {
    return <Redirect to=" /user/info/create" />;
  }
}

export { AgreeAndContinueComponent };
