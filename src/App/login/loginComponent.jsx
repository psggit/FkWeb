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
  setDeviceGps: PropTypes.func,
  guessAddressInProgress: PropTypes.bool,
  guessAddressFailed: PropTypes.bool,
  guessAddressSuccess: PropTypes.bool,
  locationPermission: PropTypes.bool,
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
  const deviceGPS = props.deviceGps;
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
      if (props.locationPermission) {
        navigator.geolocation.getCurrentPosition(
          (loc) => {
            if (loc.coords) {
              if (loc.coords.latitude && loc.coords.longitude) {
                var gps = loc.coords.latitude + "," + loc.coords.longitude;
                props.setDeviceGps(gps);
                props.guessAddress(gps);
                return;
              }
            }
            setFlow("selectState");
          },
          () => {
            setFlow("selectState");
          }
        );
      } else {
        if (props.selectedAddress) {
          setFlow("home");
        } else {
          setFlow("selectState");
        }
      }
    }
  }, [props.loginSuccess]);

  useEffect(() => {
    if (props.guessAddressSuccess) {
      if (!guessedCity) {
        setFlow("selectState");
      } else {
        if (props.selectedAddress) {
          setFlow("home");
        } else {
          setFlow("selectAddress");
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
