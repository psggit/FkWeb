import React from "react";
import { ToolbarComponent } from "../common/toolbar";
import AddressComponent from "./components";
import AddAddressIcon from "../../assets/images/add_address.svg";
import { BottomNextComponent } from "../common/bottomNext";
import "./style.scss";

function SelectAddress() {
  return (
    <div>
      <ToolbarComponent helpVisibility="true" title="Choose Address" />
      <div className="address-container">
        <AddressComponent />
        <div className="add-new-address">
          <div className="title">Add New Address</div>
          <img src={AddAddressIcon} className="add-image" />
        </div>
      </div>
      <BottomNextComponent routePath="/order/summary" title="Proceed" />
    </div>
  );
}

export default SelectAddress;
