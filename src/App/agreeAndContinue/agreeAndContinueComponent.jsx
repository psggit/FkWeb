import "./styles/style.scss";
import { appIcon } from "../../assets/images";
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
        <img src={appIcon} />
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

AgreeAndContinueComponent.propTypes = {
  showTC: PropTypes.bool,
};

function AgreeAndContinueComponent(props) {
  const showTC = props.showTC;

  if (showTC) {
    return <TcComponent {...props} />;
  }
  return <Redirect to="/user/login" />;
}

export { AgreeAndContinueComponent };
