import React from "react";
import { useHistory } from "react-router-dom";
import "../style.scss";

import { NewCardComponent } from "./NewCardComponent";
import { SavedCardComponent } from "./SavedCardComponent";
import { AddNewCardComponent } from "./AddNewCardComponent";

function CreditDebitCardsComponent() {
  const history = useHistory();

  function showAddNewCard() {
    history.push("/payment/add/new/card");
  }

  return (
    <div className="card-container">
      <div className="card-title">Credit/Debit Cards</div>
      <NewCardComponent onclick={showAddNewCard} />
      <SavedCardComponent />
      <AddNewCardComponent />
    </div>
  );
}

export { CreditDebitCardsComponent };
