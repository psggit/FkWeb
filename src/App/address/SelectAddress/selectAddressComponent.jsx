import React from "react";
import { ToolbarComponent } from "../../common/toolbar";
import AddressComponent from "./../components";
import AddAddressIcon from "../../../assets/images/add_address.svg";
import { BottomNextComponent } from "../../common/bottomNext";
import PropTypes from "prop-types";
import "./style.scss";

SelectAddressComponent.propTypes = {
  savedUserAddresses: PropTypes.array,
  selectedAddress: PropTypes.object,
  selectAddressFunc: PropTypes.func,
}

function SelectAddressComponent(props) {
  return (
    <div className = "page-container">
      <ToolbarComponent helpVisibility="true" title="Choose Address" />
      <AddressComponent {...props}/>
        <div className="add-new-address">
          <div className="title">Add New Address</div>
          <img src={AddAddressIcon} className="add-image" />
      </div>
      <BottomNextComponent routePath="/order/summary" inActive={(props.selectedAddress.address_id == undefined)} title="Proceed" />
    </div>
  );
}

export {SelectAddressComponent};
