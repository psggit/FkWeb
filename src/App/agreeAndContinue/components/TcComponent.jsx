import "../styles/style.scss";
import React, { useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { appIcon, rightArrowIcon } from "../../../assets/images";

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
            location where I intend to use HipBar: The Drinks App & agree to its
            T&C. Further, I expressly instruct & authorise HipBar to{" "}
            <span>display pricing, content & catalog information </span>relating
            to alcoholic beverages in the HipBar App licensed for my use.
          </div>
        </div>
      </div>
      <div className="acButtonWrap">
        <div onClick={agreeTc} className="acButton">
          <div>Agree & Continue</div>
          <img src={rightArrowIcon} />
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

export { TcComponent };
