import React, { useEffect } from "react";
import { ToolbarComponent } from "../../common/toolbar";
import AddressComponent from "./../components";
import { addAddressIcon } from "../../../assets/images";
import { BottomNextComponent } from "../../common/bottomNext";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import "./style.scss";

SelectAddressComponent.propTypes = {
  savedUserAddresses: PropTypes.array,
  selectedAddress: PropTypes.object,
  selectAddressFunc: PropTypes.func,
  onMountFunc: PropTypes.func,
  flow:PropTypes.string,
};

function SelectAddressComponent(props) {
  useEffect(() => {
    props.onMountFunc();
  }, []);

  const flow = "checkout"
  const history = useHistory();

  function showAddAddress() {
    history.push("/choose/location");
  }

  function onClickProcess() {
    history.push(flow !== "signupflow" ?  "/order/summary" : "/home")
  }

  return (
    <>
      <ToolbarComponent helpVisibility="true" title="Choose Address" />
      <div className="page-container">
        <AddressComponent {...props} />
        <div className="add-new-address" onClick={showAddAddress}>
          <div className="title">Add New Address</div>
          <img src={addAddressIcon} className="add-image" />
        </div>
      </div>
      <BottomNextComponent
        onClickFunc = {onClickProcess}
        inActive={props.selectedAddress.address_id == undefined}
        title="Proceed"
      />
    </>
  );
}

export { SelectAddressComponent };
