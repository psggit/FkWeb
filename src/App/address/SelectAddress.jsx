import React from "react";
import { ToolbarComponent } from "../common/toolbar";
import AddressComponent from "./components";
import { addAddressIcon } from "../../assets/images";
import { BottomNextComponent } from "../common/bottomNext";
import "./style.scss";

function SelectAddress() {
  return (
    <div>
      <ToolbarComponent helpVisibility="true" title="" />
      <div className="address-container">
        <AddressComponent />
        <div className="add-new-address">
          <div className="title">Add New Address</div>
          <img src={addAddressIcon} className="add-image" />
        </div>
      </div>
      <BottomNextComponent routePath="/order/summary" title="Proceed" />
    </div>
  );
}

export default SelectAddress;
