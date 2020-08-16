import React from "react";
import PropTypes from "prop-types";

import { useHistory } from "react-router-dom";

import { NewCardComponent } from "./NewCardComponent";
import { SavedCardComponent } from "./SavedCardComponent";
import { AddNewCardComponent } from "./AddNewCardComponent";

import "../style.scss";

CreditDebitCardsComponent.propTypes = {
  payment: PropTypes.object,
  addNewCard: PropTypes.func,
};

function CreditDebitCardsComponent(props) {
  const payment = props.payment.paymentOptionsDetails;

  return (
    <div className="card-container">
      <div className="card-title">Credit/Debit Cards</div>
      {payment.cards.length === 0 ? (
        <NewCardComponent />
      ) : (
        <div>
          <SavedCardComponent {...props} />
          <AddNewCardComponent />
        </div>
      )}
    </div>
  );
}

export { CreditDebitCardsComponent };
