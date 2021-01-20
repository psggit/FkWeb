import React from "react";
import PropTypes from "prop-types";

import { NewCardComponent } from "./NewCardComponent";
import { SavedCardComponent } from "./SavedCardComponent";
import { AddNewCardComponent } from "./AddNewCardComponent";

import "../style.scss";

CreditDebitCardsComponent.propTypes = {
  payment: PropTypes.object,
  addNewCard: PropTypes.func,
  jpLoaded: PropTypes.bool,
};

function CreditDebitCardsComponent(props) {
  const payment = props.payment.paymentOptionsDetails;
  const jpLoaded = props.jpLoaded;
  const linkto = props.linkto;

  return (
    <div className="card-container">
      <div className="card-title">Credit/Debit Cards</div>
      {payment.cards.length === 0 ? (
        <NewCardComponent linkto={linkto} />
      ) : (
        <div>
          <SavedCardComponent {...props} jpLoaded={jpLoaded} />
          <AddNewCardComponent linkto={linkto}/>
        </div>
      )}
    </div>
  );
}

export { CreditDebitCardsComponent };
