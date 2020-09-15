import React, { useEffect } from "react";
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
  showError: PropTypes.bool,
  errorMessage: PropTypes.string,
  redirect: PropTypes.string,
  login: PropTypes.func,
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
  const trigger =
    !grantTokenError && !(loginSuccess || loginFailed || loginInProgress);
  useEffect(() => {
    if (trigger) {
      props.login();
    }
  });

  useEffect(() => {
    if (loginSuccess) {
      window.fcWidget.user.setProperties({
        firstName: props.userInfo.name,
        email: props.userInfo.email,
        phone: props.userInfo.mobile,
        userLoginType: "fk-web",
      });
    }
  }, [props.loginSuccess]);

  if (props.grantTokenError) {
    return <GranTokenFailure {...props} />;
  }

  if (loginInProgress) {
    return (
      <SplashLoadingComponent motion={true} icon={drinksIcon} text="Loading" />
    );
  } else if (loginFailed) {
    return <LFComponent login={props.login} />;
  } else if (loginSuccess) {
    if (props.selectedAddress !== null) {
      return <Redirect to="/home" />;
    } else {
      return <Redirect to="/address/select/sf" />;
    }
  } else {
    return <div> </div>;
  }
}

export { LoginComponent };
