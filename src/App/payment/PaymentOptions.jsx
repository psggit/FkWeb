import React from "react";
import { ToolbarComponent } from "../common/toolbar";
import { CreditDebitCardsComponent, NetBankingComponent } from "./components";
import { BottomNextComponent } from "../common/bottomNext";

import "./style.scss";
import { Alert } from "../common/alert";

const OpenIDOptions = () => {
  document.getElementById("otherBanksID").classList.remove("hide");
};

const CloseIDOptions = () => {
  document.getElementById("otherBanksID").classList.add("hide");
};

function OtherBanksComponent() {
  const banks = [
    {
      payment_method_type: "NB",
      payment_method: "NB_HDFC",
      description: "HDFC Bank",
      image_url:
        "https://res.cloudinary.com/www-hipbar-com/image/upload/c_scale,h_88,q_80/v1535119548/Bank%20Logos%20_56px%20/HDFC.png",
      listing_order: 1,
    },
  ];
  return (
    <>
      <div className="options-overlay flex center hide" id="otherBanksID">
        <div className="options">
          <div className="option_header flex vcenter no-fold-text">
            Select ID Proof
          </div>
          <div className="option_content">
            {banks.map((id) => (
              <div key={id.payment_method}>
                <input
                  type="radio"
                  id={id.payment_method}
                  name="payment_method"
                  value={id.payment_method}
                  onClick={() => CloseIDOptions()}
                />
                <label
                  htmlFor={id.payment_method}
                  className="no-fold-text option flex vcenter"
                >
                  {id.description}
                </label>
              </div>
            ))}
          </div>
          <div className="option_footer">
            <div onClick={() => CloseIDOptions()} className="cancel">
              Cancel
            </div>
            <div onClick={() => CloseIDOptions()} className="next">
              Next
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function PaymentOptions() {
  const [modalShow, setModalShow] = React.useState(false);

  const banks = [
    {
      payment_method_type: "NB",
      payment_method: "NB_HDFC",
      description: "HDFC Bank",
      image_url:
        "https://res.cloudinary.com/www-hipbar-com/image/upload/c_scale,h_88,q_80/v1535119548/Bank%20Logos%20_56px%20/HDFC.png",
      listing_order: 1,
    },
  ];
  return (
    <>
      <ToolbarComponent helpVisibility="true" title="Pay Rs 32.00 using" />
      <div className="page-container" onClick={() => setModalShow(true)}>
        <CreditDebitCardsComponent />
        <NetBankingComponent
          banks={banks}
          onBankSelected={OpenIDOptions}
          onOtherBankSelected={OpenIDOptions}
        />
        <Alert
          show={modalShow}
          title="Alert"
          content="Something went wrong please try again"
          option="dismiss"
          handleOption={() => setModalShow(false)}
        />
        <OtherBanksComponent />
        <BottomNextComponent routePath="/order/placed" title="Pay" />
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
