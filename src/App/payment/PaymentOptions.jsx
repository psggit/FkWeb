import React from "react";
import { ToolbarComponent } from "../common/toolbar";
import { ModalComponent } from "../common/modal";
import { CreditDebitCardsComponent, NetBankingComponent } from "./components";
import { BottomNextComponent } from "../common/bottomNext";

import "./style.scss";

function PaymentOptions() {
  const [modalShow, setModalShow] = React.useState(false);

  function retry() {
//    setModalShow(false);
  }

  function close() {}

  return (
    <>
      <ToolbarComponent helpVisibility="true" title="Pay Rs 32.00 using" />
      <div className="page-container" onClick={() => setModalShow(true)}>
        <CreditDebitCardsComponent />
        <NetBankingComponent />
        <ModalComponent
          title="Error"
          content="Something went wrong"
          actionitems={[
            {
              name: "Retry",
              func: retry(),
            },
            {
              name: "close",
              func: close(),
            },
          ]}
          show={modalShow}
        />
        <BottomNextComponent routePath="payment" title="Pay" />
      </div>
    </>
  );
}

export default PaymentOptions;
