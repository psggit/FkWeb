import React from "react";
import PropTypes from "prop-types";

import { lockIcon } from "../../../assets/images";

import "../style.scss";

SavedCardComponent.propTypes = {
  payment: PropTypes.object,
};

function SavedCardComponent(props) {
  const payment = props.payment.paymentOptionsDetails;

  return payment.cards.map((card, index) => {
    return (
      <form key={"card" + index} id="payment_form">
        <div key={"dcard" + index} className="saved-card-container">
          <div className="card-details">
            <div className="card-number">
              <div className="card-mask">XXXX-XXXX-XXXX-</div>
              <div className="card-last-digits">
                {card.card_number.split("-")[3]}
              </div>
            </div>
            <div className="card-expiry">
              {card.card_exp_month}/{card.card_exp_year}
            </div>
          </div>
          <div className="card-cvv-container">
            <img src={lockIcon} className="card-cvv-image" />
            <div
              type="text"
              id="cvvNumber"
              placeholder="CVV Number"
              className="card-cvv security_code_div"
            />
          </div>
        </div>
      </form>
    );
  });
}

export { SavedCardComponent };
