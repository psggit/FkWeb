import React, { useState, useEffect } from "react";
import { HeaderComponent } from "../../common/toolbar";
import { SearchBox } from "../../search/SearchBox";
import locationIcon from "../../../assets/images/location.svg";
import "../style.scss";

function CreateAddressComponent() {
  const [cancelBtn, SetCancelBtn] = useState(false);
  const cancelEnable = (val) => {
    SetCancelBtn(val);
  };

  useEffect(() => {
    window.addEventListener("focusout", () => {
      SetCancelBtn(false);
    });
  });

  return (
    <>
      <div>
        <HeaderComponent title="Add New Address">
          <div className="search-container">
            <SearchBox cancelEnable={cancelEnable} />
            {true ? <button>Cancel</button> : ""}
          </div>
        </HeaderComponent>
        <div className="page-container new-address-container">
          <div className="add-new-address-wrapper">
            <img className="add-new-address-icon" src={locationIcon} />
            <div className="address-detail">
              <div className="title">Dubai Bus Stand</div>
              <div className="address">Dubai City, Dubai</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export { CreateAddressComponent };
