import React, { useState } from "react";
import PropTypes from "prop-types";
import { EditText } from "../../common/editText";
import { ToolbarComponent } from "../../common/toolbar";
import { BottomNextComponent } from "../../common/bottomNext";
import "./style.scss";

AddressEditComponent.propTypes = {
  text: PropTypes.string,
};

function SaveAddressCheckBoxComponent(props) {
  const [selectedBox, setSelectedBox] = useState("home");
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
          onClick={() => setSelectedBox("other")}
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
        onTextChanged={() => DoNothing()}
        inActive={selectedBox === "home" ? true : false}
      />
    </>
  );
}

function DoNothing() {
  return;
}

function AddressEditComponent(props) {
  return (
    <div id="addressEditPage" className="page-container">
      <ToolbarComponent title="Your Address" />
      <EditText
        id="deliveryAddressText"
        title="DELIVERY ADDRESS"
        onTextChanged={() => DoNothing()}
        isTextArea={true}
        inputType="text"
      />
      <EditText
        onTextChanged={() => DoNothing()}
        id="pincodeText"
        title="PINCODE"
        inputType="text"
      />
      <EditText
        onTextChanged={() => DoNothing()}
        id="flatText"
        title="HOUSE/FLAT NO."
        inputType="text"
      />
      <EditText
        id="landMarkText"
        title="LANDMARKS(OPTIONAL)"
        onTextChanged={() => DoNothing()}
        inputType="text"
      />
      <SaveAddressCheckBoxComponent />
      <BottomNextComponent routePath="/order/summary" title="Proceed" />
    </div>
  );
}

export { AddressEditComponent };
