import React, { useState } from "react";
import PropTypes from "prop-types";

function OtherBanksComponent(props) {
  const [selectedBank, setSelectedBank] = useState("");

  const closeOtherBankOptions = () => {
    document.getElementById("otherBanksID").classList.add("hide");
  };

  const onNextButton = () => {
    closeOtherBankOptions();
    props.onBankSelected(selectedBank);
  };

  const banks = [
    {
      payment_method_type: "NB",
      payment_method: "NB_HDFC",
      description: "HDFC Bank",
      image_url:
        "https://res.cloudinary.com/www-hipbar-com/image/upload/c_scale,h_88,q_80/v1535119548/Bank%20Logos%20_56px%20/HDFC.png",
      listing_order: 1,
    },
    {
      payment_method_type: "NB",
      payment_method: "NB_DFC",
      description: "DFC Bank",
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
              <div
                className="radio_item flex vcenter"
                key={id.payment_method}
                id={id.payment_method}
                onClick={() => {
                  setSelectedBank(id.payment_method);
                }}
              >
                <input
                  type="radio"
                  id={id.payment_method}
                  name="payment_method"
                  onChange={() => {}}
                  checked={selectedBank == id.payment_method}
                />
                <div className="radiobtn" />
                <label
                  htmlFor={id.payment_method}
                  className="no-fold-text option flex vcenter"
                >
                  {id.description}
                </label>
              </div>
            ))}
          </div>
          <div className="option_footer flex vcenter hend">
            <div
              onClick={() => closeOtherBankOptions()}
              className="btun cancel"
            >
              Cancel
            </div>
            <div
              onClick={() => {
                if (selectedBank != "") {
                  onNextButton();
                }
              }}
              className={
                (selectedBank != "" ? "active " : "inactive ") + "btun"
              }
            >
              Next
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

OtherBanksComponent.propTypes = {
  onBankSelected: PropTypes.func,
};

export { OtherBanksComponent };
