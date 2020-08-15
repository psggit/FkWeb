import React from "react";
import "./style.scss";
import PropTypes from "prop-types";
import { drinksIcon } from "../../../assets/images";
import { ButtonComponent } from "../bottomNext/BottomNextComponent";
import { useHistory } from "react-router-dom";

SplashLoadingComponent.propTypes = {
  text: PropTypes.string,
  icon: PropTypes.string,
  motion: PropTypes.bool,
  buttonText: PropTypes.any,
  buttonFunc: PropTypes.any,
  dontGoHome: PropTypes.bool,
};

function SplashLoadingComponent(props) {
  let history = useHistory();

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
          {!props.dontGoHome && (
            <div onClick={() => goHome()} className="splash-button">
              Go To Home
            </div>
          )}
        </>
      )}
    </div>
  );
}

export { SplashLoadingComponent };
