import "./styles/style.scss";
import logo from "../../assets/images/drinksAppLogo.svg";
import { Redirect, Link } from "react-router-dom";
import React, { useLayoutEffect } from "react";
import PropTypes from "prop-types";

TcComponent.propTypes = {
  agreeTc: PropTypes.func,
  checkTC: PropTypes.func,
};

function TcComponent(props) {
  useLayoutEffect(() => {
    props.checkTC();
  });
  const agreeTc = props.agreeTc;
  return (
    <div className="aAndCWrap">
      <div className="brandBox">
        <img src={logo} />
        <div className="subHead">
          YOUR BAR <br /> ON THE CLOUD
        </div>
        <div className="tcWrap">
          <div className="tc">
            I undertake that I am of <span>legal drinking age</span> at the
            location where I intend to purchase drinks. Further, I expressly
            instruct & authorise HipBar to{" "}
            <span>display pricing, content & catalog information</span> relating
            to alcoholic beverages in the HipBar App license for my use.
          </div>
        </div>
      </div>
      <div className="acButtonWrap">
        <div onClick={agreeTc} className="acButton">
          Agree & Continue
        </div>
      </div>
      <div className="aAndCTerms">
        <Link to="/user-terms">
          <div className="tcLink">terms & conditions</div>
        </Link>
        <div className="tcLink">
          <Link to="/privacy-policy">
            <div className="subtcLink privacyLink">Privacy Policy</div>
          </Link>
          <Link to="/grievance-policy">
            <div className="subtcLink gpLink">Grievance Policy</div>
          </Link>
        </div>
      </div>
    </div>
  );
}

LFComponent.propTypes = {
  login: PropTypes.func,
};

function LFComponent(props) {
  const login = props.login;
  return (
    <div>
      <div>login failed </div>
      <button onClick={login}> retry </button>
    </div>
  );
}

function AgreeAndContinueComponent(props) {
  const showTC = props.showTC;
  const loginInProgress = props.loginInProgress;
  const loginFailed = props.loginFailed;
  const loginSuccess = props.loginSuccess;

  if (showTC) {
    return <TcComponent {...props} />;
  } else if (loginInProgress) {
    return <div> Login in progress </div>;
  } else if (loginFailed) {
    return <LFComponent login={props.login} />;
  } else if (loginSuccess) {
    // TODO:@hl05 redirect to the right places
    return <Redirect to="/cart" />;
  }
}

export { AgreeAndContinueComponent };
