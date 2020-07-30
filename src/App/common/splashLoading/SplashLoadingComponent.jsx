import React from "react";
import "./style.scss";
import PropTypes from "prop-types";

SplashLoadingComponent.propTypes = {
  text: PropTypes.string,
  icon: PropTypes.string,
  motion: PropTypes.bool,
  buttonText: PropTypes.any,
  buttonFunc: PropTypes.any,
}

function SplashLoadingComponent(props) {
  return (
    <div className="splash-loading-container">
      <div className={(props.motion ===true ? "splash-spinner-grow ": "") + "spinner-grow splash-spinner-adder spinner-adder"} role="status">
        <span className="sr-only">Loading...</span>
      </div>
      <div className="splash-loading-msg">
      	<img src={props.icon} />
	  {props.text}
      </div>
	  { props.buttonText != undefined &&
	      <div className="splash-button" onClick={() => {props.buttonFunc()}}>
		  {props.buttonText}
	      </div>
	  }
    </div>
  );
}

export { SplashLoadingComponent };
