import React from "react";
import { ToolbarComponent } from "../common/toolbar";
import { Modal } from "../common/modal";
import { CreditDebitCardsComponent, NetBankingComponent } from "./components";
import { BottomNextComponent } from "../common/bottomNext";

import "./style.scss";
import {ModalOptions} from "../common/modal/Modal";

function PaymentOptions() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <ToolbarComponent helpVisibility="true" title="Pay Rs 32.00 using" />
      <div className="page-container" onClick={() => setModalShow(true)}>
        <CreditDebitCardsComponent />
        <NetBankingComponent />
        <Modal
          show={modalShow}
          title="Alert"
          content="Something went wrong please try again"
          option="dismiss"
          handleOption={() => setModalShow(false)}
        />
        <BottomNextComponent routePath="payment" title="Pay" />
      </div>
    </>
  );
}

        //<ModalOptions
        //  show={modalShow}
        //  title="Alert"
        //  content="Something went wrong please try again"
        //  option1="dismiss"
        //  option2="dismiss"
        //  handleOption1={() => setModalShow(false)}
        //  handleOption2={() => setModalShow(false)}
        ///>

export default PaymentOptions;
