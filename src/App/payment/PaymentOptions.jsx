import React from "react";
import { ToolbarComponent } from "../common/toolbar";
import { ModalComponent } from "../common/modal";
import { CreditDebitCardsComponent, NetBankingComponent } from "./components";
import { BottomNextComponent } from "../common/bottomNext";

import "./style.scss";
import {LoadingComponent} from "../common/loading";

function PaymentOptions() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <ToolbarComponent helpVisibility="true" title="Pay Rs 32.00 using" />
      <div className="page-container" onClick={() => setModalShow(true)}>
        <CreditDebitCardsComponent />
        <NetBankingComponent />
        <ModalComponent
          title="Error"
          content="Something went wrong"
          option="Retry"
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
        <BottomNextComponent routePath="payment" title="Pay" />
      </div>
    </>
  );
}

export default PaymentOptions;
