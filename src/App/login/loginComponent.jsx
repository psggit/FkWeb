import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { SplashLoadingComponent } from "../common/splashLoading";
import { AlertWithOptions } from "../common/alert";
import { drinksIcon } from "../../assets/images";
import PropTypes from "prop-types";

GranTokenFailure.propTypes = {
  login: PropTypes.func,
  grantTokenErrorMessage: PropTypes.string,
  exitToFk: PropTypes.func,
};

function GranTokenFailure(props) {
  return (
    <AlertWithOptions
      title={"Login Failed"}
      content={props.grantTokenErrorMessage}
      option1={"TRY AGAIN"}
      option2={"EXIT"}
      handleOption1={props.login}
      handleOption2={props.exitToFk}
    />
  );
}

LoginComponent.propTypes = {
  loginInProgress: PropTypes.bool,
  loginFailed: PropTypes.bool,
  loginSuccess: PropTypes.bool,
  guessAddressInfo: PropTypes.object,
  guessAddressInProgress: PropTypes.bool,
  guessAddressFailed: PropTypes.bool,
  guessAddressSuccess: PropTypes.bool,
  deviceGps: PropTypes.string,
  showError: PropTypes.bool,
  errorMessage: PropTypes.string,
  redirect: PropTypes.string,
  login: PropTypes.func,
  guessAddress: PropTypes.func,
  closeError: PropTypes.func,
};

LFComponent.propTypes = {
  login: PropTypes.func,
};

function LFComponent(props) {
  const login = props.login;
  return (
    <>
      <SplashLoadingComponent
        motion={false}
        icon={drinksIcon}
        text="Something went wrong, please try again."
        buttonFunc={login}
        buttonText="Retry"
        dontGoHome={true}
      />
    </>
  );
}

function LoginComponent(props) {
  const loginSuccess = props.loginSuccess;
  const loginInProgress = props.loginInProgress;
  const loginFailed = props.loginFailed;
  const grantTokenError = props.grantTokenError;
  const [flow, setFlow] = useState("");
  //TODO: Fill these up
  const guessedAddress = props.guessAddressInfo.address;
  const guessAddressSuccess = props.guessAddressSuccess;
  const guessedCity = props.guessAddressInfo.city;
  const guessedState = props.guessAddressInfo.state;

  // const deviceGPS = props.deviceGps;
  const deviceGPS = "12.993818985957093,80.26090878993273";
  // const deviceGPS = "13.006928,80.255516";
  const trigger =
    !grantTokenError && !(loginSuccess || loginFailed || loginInProgress);
  useEffect(() => {
    if (trigger) {
      props.login();
    }
  });

  useEffect(() => {
    if (loginSuccess) {
      // Launch and Register Fresh Chat
      window.fcWidget.user.setProperties({
        firstName: props.userInfo.name,
        email: props.userInfo.email,
        phone: props.userInfo.mobile,
        userLoginType: "fk-web",
      });
      if (props.selectedAddress === null) {
        // Device GPS not available
        if (!deviceGPS) {
          setFlow("selectState");
        } else {
          props.guessAddress(deviceGPS);
        }
      } else {
        setFlow("home");
      }
    }
  }, [props.loginSuccess]);

  useEffect(() => {
    if (props.guessAddressSuccess) {
      if (!guessedCity) {
        setFlow("selectState");
      } else {
        if (!guessedAddress) {
          setFlow("selectAddress");
        } else {
          setFlow("home");
        }
      }
    }
  }, [props.guessAddressSuccess]);

  if (props.grantTokenError) {
    return <GranTokenFailure {...props} />;
  }

  if (loginInProgress) {
    return (
      <SplashLoadingComponent motion={true} icon={drinksIcon} text="Loading" />
    );
  } else if (loginFailed) {
    return <LFComponent login={props.login} />;
  } else if (loginSuccess && flow != "") {
    if (flow === "home") {
      return <Redirect to="/home" />;
    } else if (flow === "selectAddress") {
      return <Redirect to="/address/select/sf" />;
    } else if (flow === "selectState") {
      // TODO: Find the right URL
      return <Redirect to="/statecity/select" />;
    } else {
      return <div> UNKNOWN STATE</div>;
    }
  } else {
    return <div> </div>;
  }
}

export { LoginComponent };
