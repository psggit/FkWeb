import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { EditText } from "../../common/editText";
import { ToolbarComponent } from "../../common/toolbar";
import { BottomNextComponent } from "../../common/bottomNext";
import { Redirect } from "react-router-dom";
import "./style.scss";

function SaveAddressCheckBoxComponent(props) {
  const [selectedBox, setSelectedBox] = useState("home");
  const [otherValue, setOtherValue] = useState("");
  return (
    <>
      <div className="input-component flex">
        <div
          onClick={() => setSelectedBox("home")}
          className={
            (selectedBox == "home" ? "selected " : "") +
            "input-component-checkbox"
          }
        >
          <div className="checkbox"></div>
          <div className="checkbox-select-text">HOME</div>
        </div>
        <div
          onClick={() => {
            setSelectedBox("other");
            props.updateField({ address_type: otherValue });
          }}
          className={
            (selectedBox == "other" ? "selected " : "") +
            "input-component-checkbox"
          }
        >
          <div className="checkbox"></div>
          <div className="checkbox-select-text">OTHER</div>
        </div>
      </div>
      <EditText
        placeholde="Home, Office, etc."
        rid="addressType"
        title="SAVE AS"
        inputType="text"
        onTextChanged={(id, value) => {
          setOtherValue(value);
          props.updateField({ address_type: value });
        }}
        inActive={selectedBox === "home" ? true : false}
      />
    </>
  );
}

AddressInputComponent.propTypes = {
  text: PropTypes.string,
  mapCenterGps: PropTypes.object,
  getAddressFromGps: PropTypes.func,
  address: PropTypes.object,
  updateField: PropTypes.func,
  reqStatus: PropTypes.string,
  createAddressFunc: PropTypes.func,
};

function AddressInputComponent(props) {
  const flatNumber = props.address.flat_number;
  const current_address = props.address.current_address;
  const pincode = props.address.pincode;
  const landmark = props.address.landmark;
  const address_type = props.address.address_type;
  const createAddressFunc = props.createAddressFunc;
  const reqStatus = props.reqStatus;
  useEffect(() => {
    props.getAddressFromGps(props.mapCenterGps);
  }, []);
  return (
    <div id="addressEditPage" className="page-container">
      <ToolbarComponent title="Your Address" />
      <EditText
        onTextChanged={(id, value) => {
          props.updateField({ flat_number: value });
        }}
        id="flatText"
        title="HOUSE/FLAT NO."
        value={flatNumber ? flatNumber : ""}
        inputType="text"
      />
      <EditText
        id="deliveryAddressText"
        title="DELIVERY ADDRESS"
        onTextChanged={(id, value) => {
          props.updateField({ current_address: value });
        }}
        isTextArea={true}
        value={current_address ? current_address : ""}
        inputType="text"
      />
      <EditText
        onTextChanged={(id, value) => {
          props.updateField({ pincode: value });
        }}
        id="pincodeText"
        title="PINCODE"
        value={pincode ? pincode : ""}
        inputType="text"
      />
      <EditText
        id="landMarkText"
        onTextChanged={(id, value) => {
          props.updateField({ landmark: value });
        }}
        title="LANDMARKS(OPTIONAL)"
        value={landmark ? landmark : ""}
        inputType="text"
      />
      <SaveAddressCheckBoxComponent {...props} />
      <BottomNextComponent
        inActive={
          reqStatus == "inProgress" || reqStatus == "success" ? true : false
        }
        onClickFunc={() => {
          createAddressFunc(props);
        }}
        title="Proceed"
      />
    </div>
  );
}

AddressEditComponent.propTypes = {
  mapCenterGps: PropTypes.object,
  reqStatus: PropTypes.string,
};

function AddressEditComponent(props) {
  const gpsSelected = props.mapCenterGps ? true : false;
  const reqStatus = props.reqStatus;
  if (gpsSelected === false) {
    return <Redirect to="/choose/location" />;
  } else if (reqStatus === "success") {
    return <Redirect to="/address/select/sf" />;
  } else {
    return <AddressInputComponent {...props} />;
  }
}

export { AddressEditComponent };