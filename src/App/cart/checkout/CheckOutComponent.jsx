import React from "react";
import nextIcon from "../../../assets/images/next.svg";
import "./style.scss";
import { useHistory } from "react-router-dom";

function CheckOutComponent() {
  const history = useHistory();
  function showSelectAddress() {
    history.push("/address/select");
  }
  return (
    <div className="bottom-bar">
      <div className="btn" onClick={showSelectAddress}>
        <div className="btn-label">Checkout</div>
        <img className="btn-arrow" src={nextIcon} />
      </div>
    </div>
  );
}

export { CheckOutComponent };
