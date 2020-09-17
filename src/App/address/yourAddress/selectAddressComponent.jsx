import React from "react";
import { ToolbarComponent } from "../../common/toolbar";
import { SearchBoxComponent } from "../../common/searchBox";
import { AddressComponent } from "./../components";
import { addAddressIcon } from "../../../assets/images";
import { BottomNextComponent } from "../../common/bottomNext";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import "./style.scss";

SelectAddressComponent.propTypes = {
  savedUserAddresses: PropTypes.array,
  selectedAddress: PropTypes.object,
  selectAddressFunc: PropTypes.func,
};

function SelectAddressComponent(props) {
  const history = useHistory();
  function showAddAddress() {
    history.push("/address/create");
  }

  return (
    <>
      <ToolbarComponent helpVisibility={false} title="Choose Address" />
      <div className="page-container">
        <AddressComponent {...props} />
        <div className="add-new-address" onClick={showAddAddress}>
          <div className="title">Add New Address</div>
          <img src={addAddressIcon} className="add-image" />
        </div>
      </div>
      <BottomNextComponent
        routePath="/order/summary"
        inActive={props.selectedAddress.address_id == undefined}
        title="Proceed"
      />
    </>
  );
}

export { SelectAddressComponent };
