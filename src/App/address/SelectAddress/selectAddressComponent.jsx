import React, { useEffect } from "react";
import { ToolbarComponent } from "../../common/toolbar";
import AddressComponent from "./../components";
import AddAddressIcon from "../../../assets/images/add_address.svg";
import { BottomNextComponent } from "../../common/bottomNext";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import "./style.scss";

SelectAddressComponent.propTypes = {
  savedUserAddresses: PropTypes.array,
  selectedAddress: PropTypes.object,
  selectAddressFunc: PropTypes.func,
  onMountFunc: PropTypes.func,
};

function SelectAddressComponent(props) {
  useEffect(()=> {
    props.onMountFunc()
  },[]);
  const history = useHistory();
  function showAddAddress() {
    history.push("/address/create");
  }

  return (
    <>
      <ToolbarComponent helpVisibility="true" title="Choose Address" />
      <AddressComponent {...props} />
      <div className="add-new-address">
        <div className="title">Add New Address</div>
        <img src={AddAddressIcon} className="add-image" />
      <div className="page-container">
        <AddressComponent {...props} />
        <div className="add-new-address" onClick={showAddAddress}>
          <div className="title">Add New Address</div>
          <img src={AddAddressIcon} className="add-image" />
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
