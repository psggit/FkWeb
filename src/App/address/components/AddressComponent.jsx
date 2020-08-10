import React, { useState } from "react";
import "./style.scss";
import PropTypes from "prop-types";
import { AlertWithOptions } from "../../common/alert";

function EmptyAddressComponent() {
  return (
    <div className="no-address">
      <div className="flex hcenter no-address-heading">No saved addresses</div>
      <div className="flex hcenter no-address-text">
        Save your address for a faster checkout the next time!
      </div>
    </div>
  );
}

AddressComponent.propTypes = {
  delelteAddressFunc: PropTypes.func,
  selectedAddress: PropTypes.object,
  savedUserAddresses: PropTypes.array,
  selectAddressFunc: PropTypes.func,
};

function AddressComponent(props) {
  let [hideModal, setHideModal] = useState(false);
  let [deleteAddressId, setDeleteAddressId] = useState(0);
  const addresses = props.savedUserAddresses;
  const alertDetails = {
    title: "Confirmation deletion",
    content: "Do you want to delete the selected address?",
    option1: "Yes",
    option2: "No",
    handleOption1: fnDeleteAddress,
    handleOption2: FnHideModal,
  };

  function getAddressClass(address) {
    if (props.selectedAddress) {
      if (props.selectedAddress.address_id == address.address_id) {
        return "selected radiobtn";
      } else {
        return "radiobtn";
      }
    } else {
      return "radiobtn";
    }
  }

  function FnHideModal() {
    setDeleteAddressId(0);
    setHideModal(false);
  }

  function fnDeleteAddress() {
    setHideModal(false);
    props.delelteAddressFunc(deleteAddressId);
  }

  function displayPrompt(_addressId) {
    setDeleteAddressId(_addressId);
    setHideModal(true);
  }

  return (
    <div className="address-container">
      {addresses.length == 0 && <EmptyAddressComponent />}
      {props.savedUserAddresses.map((address) => {
        return (
          <div key={address.address_id} className="address-wrap">
            <div
              onClick={() => props.selectAddressFunc(address)}
              className="address-detail-container"
            >
              <div className="clickableComponent">
                <div className={getAddressClass(address)}></div>
                <div className="title no-fold-text">{address.type}</div>
                <div className="address line-clamp">
                  {address.flat_number + ", " + address.address}
                </div>
              </div>
              <div className="modify-container">
                <div onClick={(e) => e.stopPropagation()} className="edit">
                  EDIT
                </div>
                <div
                  onClick={(e) => {
                    e.stopPropagation();
                    displayPrompt(address.address_id);
                  }}
                  className="delete"
                >
                  DELETE
                </div>
              </div>
            </div>
          </div>
        );
      })}
      {hideModal == true ? <AlertWithOptions {...alertDetails} /> : null}
    </div>
  );
}

export default AddressComponent;
