import React from "react";
import "./style.scss";
import PropTypes from "prop-types";
import { drinksIcon } from "../../../assets/images";
import { useHistory } from "react-router-dom";
import { ButtonComponent } from "../bottomNext/BottomNextComponent";

SplashLoadingComponent.propTypes = {
  text: PropTypes.string,
  icon: PropTypes.string,
  motion: PropTypes.bool,
  buttonText: PropTypes.any,
  buttonFunc: PropTypes.any,
};

function SplashLoadingComponent(props) {
  function goHome() {
    history.push("/home");
  }
  return (
    <div className="splash-loading-container">
      <div
        className={
          (props.motion === true ? "splash-spinner-grow " : "") +
          "spinner-grow splash-spinner-adder spinner-adder"
        }
        role="status"
      >
        <span className="sr-only">Loading...</span>
      </div>
      <div className="splash-loading-msg">
        <img src={props.icon === undefined ? drinksIcon : props.icon} />
        {props.text}
      </div>
      {props.buttonText != undefined && (
        <>
          <div className="margin-tp">
            <ButtonComponent
              title={props.buttonText}
              onClickFunc={() => {
                props.buttonFunc();
              }}
            />
          </div>
          <div onClick={() => goHome()} className="splash-button">
            Go To Home
          </div>
        </>
      )}
    </div>
  );
}

export { SplashLoadingComponent };
