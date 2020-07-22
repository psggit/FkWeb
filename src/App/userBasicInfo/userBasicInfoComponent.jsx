import React from "react";
import "./styles/style.scss";
import shield from "../../assets/images/shield.svg";
import { ToolbarComponent } from "../common/toolbar";
import { Redirect, Link } from "react-router-dom";
import PropTypes from "prop-types";

UserBasicInfoComponent.propTypes = {
  yob: PropTypes.string,
  gender: PropTypes.string,
  selectedID: PropTypes.string,
  consumerIDTypes: PropTypes.array,
  showConsumerIDs: PropTypes.bool,
  changeBirthYear: PropTypes.func,
  selectingIDProofFunc: PropTypes.func,
  selectedDocument: PropTypes.string,
  selectedDocumentValue: PropTypes.string,
};

const OpenIDOptions = () => {
  document.getElementById("kycID").classList.remove("hide");
};

const CloseIDOptions = () => {
  document.getElementById("kycID").classList.add("hide");
};

function UserBasicInfoComponent(props) {
  const yob = props.yob;
  const gender = props.gender;
  const availableConsumerIDs = props.consumerIDTypes;
  const showConsumerIDs = props.showConsumerIDs;
  const selectedDocument = props.selectedDocument;
  const selectedDocumentValue = props.selectedDocumentValue;
  return (
    <div className="page-container userBasicInfoComponent">
      <ToolbarComponent helpVisibility="true" title="Let's Get Started!" />
      <div className="input-component flex">
        <div className="input-info">
          HipBar is an age verified platform. Please select a proof of identity
          to confirm and continue.
        </div>
        <div className="input-shield">
          <img src={shield} />
        </div>
      </div>
      <div className="input-component">
        <div className="input-component-label">YEAR OF BIRTH</div>
        <div className="inputComponentField input">
          <input
            onChange={(e) => props.changeBirthYear(e.target.value)}
            className="input_field_100 dob"
            value={yob}
            type="number"
          />
        </div>
      </div>
      <div className="input-component">
        <div className="input-component-label">GENDER</div>
        <div className="one-button-select-component">
          <div
            onClick={() => props.changingGenderFunc("male")}
            className={(gender == "male" ? "selected " : "") + "input-select"}
          >
            Male
          </div>
          <div
            onClick={() => props.changingGenderFunc("female")}
            className={(gender == "female" ? "selected " : "") + "input-select"}
          >
            Female
          </div>
          <div
            onClick={() => props.changingGenderFunc("na")}
            className={(gender == "na" ? "selected " : "") + "input-select"}
          >
            Non-Binary
          </div>
        </div>
      </div>
      <div className="input-component">
        <div className="input-component-label">PROOF OF IDENTITY</div>
        <div className="inputComponentField input">
          <input
            placeholder="Select ID proof"
            onClick={() => OpenIDOptions()}
            className="input_field_100"
            value={selectedDocument}
            type="text"
            readOnly
          />
        </div>
      </div>
      <div
        className={(selectedDocument == "" ? "hide " : "") + "input-component"}
      >
        <div className="input-component-label no-fold-text">
          ENTER YOUR <span className="caps">{selectedDocument} </span> NUMBER
        </div>
        <div className="inputComponentField input">
          <input
            placeholder={"Enter your " + selectedDocument + " number"}
            className="input_field_100"
            value={selectedDocumentValue}
            type="text"
          />
        </div>
      </div>
      <div className="options-overlay flex center hide" id="kycID">
        <div className="options">
          <div className="option_header flex vcenter no-fold-text">
            Select ID Proof
          </div>
          <div className="option_content">
            {availableConsumerIDs.map((id) => (
              <div key={id.idType}>
                <input
                  type="radio"
                  id={id.idType}
                  name="idType"
                  value={id.idType}
                  onClick={(e) => props.selectingIDProofFunc(e.target.value)}
                />
                <label
                  htmlFor={id.idType}
                  className="no-fold-text option flex vcenter"
                >
                  {" "}
                  {id.idType}{" "}
                </label>
              </div>
            ))}
          </div>
          <div className="option_footer">
            <div onClick={() => CloseIDOptions()} className="cancel">
              Cancel
            </div>
            <div
              onClick={(e) => props.selectingIDProofFunc(e)}
              className="next"
            >
              Next
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export { UserBasicInfoComponent };
