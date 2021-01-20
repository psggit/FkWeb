import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import { successIconOrange, crossRed } from "../../../assets/images";
import { ButtonComponent } from "../../common/bottomNext";
import { LoadingComponent } from "../../common/loading";
import { SplashLoadingComponent } from "../../common/splashLoading";
import { drinksIcon } from "../../../assets/images";
import "./styles/style.scss";

function PaymentStatusComponent(props) {
  let history = useHistory();
  useEffect(() => {
    let reqBody = {
      order_id: localStorage.getItem("redirect"),
    };
    props.verifyWebPayment(reqBody);
  }, []);

  const buttonFunc = () => {
    history.push("/order/payment/" + localStorage.getItem("redirect"));
  };

  if (props.verifyPayment.verifyPaymentProgress) {
    return <LoadingComponent />;
  }

  if (
    props.verifyPayment.verifyPaymentSuccess &&
    props.verifyPayment.status === "success"
  ) {
    return (
      <div className="statusWrap">
        <img src={successIconOrange} />
        <p className="payment-title">Payment received successfully!</p>
      </div>
    );
  }
  if (
    props.verifyPayment.verifyPaymentFailure ||
    props.verifyPayment.status === "failed"
  ) {
    return (
      <div className="statusWrap">
        <img src={crossRed} />
        <p className="payment-title">Payment has failed!</p>
        <br />
        <p className="payment-description">
          If the money has been debited, it'll be credited to the source account
          within 5 - 7 working days.
        </p>
        <ButtonComponent
          title={"Retry"}
          onClickFunc={() => {
            buttonFunc();
          }}
        />
      </div>
    );
  }
  return (
    <SplashLoadingComponent motion={true} icon={drinksIcon} text="Loading" />
  );
}

PaymentStatusComponent.propTypes = {
  verifyWebPayment: PropTypes.func,
  verifyPayment: PropTypes.object,
};

export { PaymentStatusComponent };
