import React from "react";
import "../style.scss";

import { NewCardComponent } from "./NewCardComponent";
import { SavedCardComponent } from "./SavedCardComponent";
import { AddNewCardComponent } from "./AddNewCardComponent";

function CreditDebitCardsComponent() {
  return (
    <div className="card-container">
      <div className="card-title">Credit/Debit Cards</div>
      <NewCardComponent />
      <SavedCardComponent />
      <AddNewCardComponent />
    </div>
  );
}

export { CreditDebitCardsComponent };
