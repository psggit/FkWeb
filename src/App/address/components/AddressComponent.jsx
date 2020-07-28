import React from "react";
import "./style.scss";

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
function AddressComponent(props) {
  const addresses = props.savedUserAddresses;
	function RadioClick() {
		document.getElementByClassName("radiobtn")
	}

  return (
    <div className="address-container">
      {addresses.length == 0 && <EmptyAddressComponent />}
      {props.savedUserAddresses.map((address) => {
        return (
          <div key={address.address_id} className="address-wrap">
            <div
              onClick={() => props.selectAddressFunc(address.address_id)}
              className="address-detail-container"
            >
              <div className="clickableComponent">
                <div
                  className={
                    (props.selectedAddress.address_id == address.address_id
                      ? "selected "
                      : "") + "radiobtn"
                  }
                ></div>
                <div className="title no-fold-text">{address.type}</div>
                <div className="address line-clamp">
                  {address.flat_number + ", " + address.address}
                </div>
              </div>
              <div className="modify-container">
                <div onClick={(e) => e.stopPropagation()} className="edit">
                  EDIT
                </div>
                <div onClick={(e) => e.stopPropagation()} className="delete">
                  DELETE
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default AddressComponent;
