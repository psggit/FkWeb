import React from "react";
import { ToolbarComponent } from "../common/toolbar";
import "./style.scss";
import { ModalComponent } from "../common/modal";
import { CreditDebitCardsComponent, NetBankingComponent } from "./components"

function Payment() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <ToolbarComponent helpVisibility="true" title="Pay Rs 32.00 using" />
      <div className="page-container">
        <CreditDebitCardsComponent />
        <NetBankingComponent />
        <ModalComponent title="Error" content="Something went wrong" show={modalShow} onHide={() => setModalShow(false)} />
      </div>
    </>
  );
}

export default Payment;
