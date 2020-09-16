import React from "react";
import PropTypes from "prop-types";
import { SplashLoadingComponent } from "../App/common/splashLoading";
import { drinksIcon } from "../assets/images";
import { Redirect } from "react-router-dom";

const Loading = (props) => {
  if (props.pastDelay) {
    return (
      <SplashLoadingComponent motion={true} icon={drinksIcon} text="Loading" />
    );
  } else if (props.error) {
    return (
      <SplashLoadingComponent
        motion={false}
        icon={drinksIcon}
        text="Something went wrong, please try again."
        buttonFunc={() => <Redirect to="/home" />}
        buttonText="Home"
      />
    );
  } else {
    return <SplashLoadingComponent motion={true} icon={drinksIcon} text="" />;
  }
};

Loading.propTypes = {
  error: PropTypes.bool,
  pastDelay: PropTypes.bool,
};

export { Loading };
