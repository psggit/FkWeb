import React, { useLayoutEffect, useState } from "react";
import "./styles/style.scss";
import shield from "../../assets/images/shield.svg";
import { ToolbarComponent } from "../common/toolbar";
import { Redirect, Link } from "react-router-dom";
import PropTypes from "prop-types";
import { BottomNextComponent } from "../common/bottomNext";

LFComponent.propTypes = {
  login: PropTypes.func,
};

function LFComponent(props) {
  const login = props.login;
  return (
    <div>
      <div>login failed </div>
      <button onClick={login}> retry </button>
    </div>
  );
}

CollectInfoComponent.propTypes = {
  yob: PropTypes.string,
  gender: PropTypes.string,
  selectedID: PropTypes.string,
  consumerIDTypes: PropTypes.array,
  showConsumerIDs: PropTypes.bool,
  showDeclaration: PropTypes.bool,
  checkDeclaration: PropTypes.bool,
  selectedDocument: PropTypes.string,
  finalisedDocument: PropTypes.string,
  selectedDocumentValue: PropTypes.string,
  checkDeclarationFunc: PropTypes.func,
  changeBirthYear: PropTypes.func,
  changingGenderFunc: PropTypes.func,
  selectingIDProofFunc: PropTypes.func,
  changeDocumentValueFunc: PropTypes.func,
  finaliseIDProofFunc: PropTypes.func,
};

const OpenIDOptions = () => {
  document.getElementById("kycID").classList.remove("hide");
};

const CloseIDOptions = () => {
  document.getElementById("kycID").classList.add("hide");
};

function YearOfBirthInputComponent(props) {
  return (
    <div className="input-component">
      <div className="input-component-label">YEAR OF BIRTH</div>
      <div className="inputComponentField input">
        <input
          onChange={(e) => props.changeBirthYear(e.target.value)}
          className="input_field_100 dob"
          value={props.yob}
          type="number"
        />
      </div>
    </div>
  );
}

function GenderSelectionComponent(props) {
  const gender = props.gender;
  return (
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
  );
}

function InfoComponent(props) {
  return (
    <div className="input-component flex">
      <div className="input-info">
        HipBar is an age verified platform. Please select a proof of identity to
        confirm and continue.
      </div>
      <div className="input-shield">
        <img src={shield} />
      </div>
    </div>
  );
}

function SelectIDComponent(props) {
  const finalisedDocument = props.finalisedDocument;
  //const showConsumerIDs = props.showConsumerIDs;
  const selectedDocument = props.selectedDocument;
  const availableConsumerIDs = props.consumerIDTypes;
  const selectedDocumentValue = props.selectedDocumentValue;
  return (
    <>
      <div className="input-component">
        <div className="input-component-label">PROOF OF IDENTITY</div>
        <div className="inputComponentField input">
          <input
            placeholder="Select ID proof"
            onClick={() => OpenIDOptions()}
            className="input_field_100"
            value={finalisedDocument}
            type="text"
            readOnly
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
              <div className="radio_item flex vcenter" key={"key_" + id.idType}>
                <input
                  type="radio"
                  id={id.idType}
                  name="idType"
                  value={id.idType}
                  onClick={(e) => props.selectingIDProofFunc(e.target.value)}
                />
                <div className="radiobtn"></div>
                <label
                  htmlFor={id.idType}
                  className="no-fold-text option flex vcenter"
                >
                  {id.idType}
                </label>
              </div>
            ))}
          </div>
          <div className="option_footer flex vcenter hend">
            <div onClick={() => CloseIDOptions()} className="btun cancel">
              Cancel
            </div>
            <div
              onClick={() => {
                props.finaliseIDProofFunc(selectedDocument);
                CloseIDOptions();
              }}
              className={
                (selectedDocument != "" ? "active " : "inactive ") + "btun"
              }
            >
              Next
            </div>
          </div>
        </div>
      </div>
      <div
        className={(finalisedDocument == "" ? "hide " : "") + "input-component"}
      >
        <div className="input-component-label no-fold-text">
          ENTER YOUR <span className="caps">{finalisedDocument} </span> NUMBER
        </div>
        <div className="inputComponentField input">
          <input
            placeholder={"Enter your " + finalisedDocument + " number"}
            className="input_field_100"
            onChange={(e) => props.changeDocumentValueFunc(e.target.value)}
            value={selectedDocumentValue}
            type="text"
          />
        </div>
      </div>
    </>
  );
}
function CheckBoxComponent(props) {
  return (
    <div className="input-component">
      <div
        onClick={() => props.checkDeclarationFunc(true)}
        className={
          (props.checkDeclaration ? "selected " : "") +
          (props.showDeclaration ? "" : "inactive ") +
          "input-component-checkbox"
        }
      >
        <div className="checkbox"></div>
        <div className="checkbox-text">
          I declare that the details furnished above are correct
        </div>
      </div>
    </div>
  );
}

function CollectInfoComponent(props) {
  const yob = props.yob;
  const checkDeclaration = props.checkDeclaration;
  const showDeclaration = props.showDeclaration;

  return (
    <div className="page-container userBasicInfoComponent">
      <ToolbarComponent helpVisibility="true" title="Let's Get Started!" />
      <InfoComponent {...props} />
      <YearOfBirthInputComponent {...props} />
      <GenderSelectionComponent {...props} />
      <SelectIDComponent {...props} />
      <CheckBoxComponent {...props} />
      <BottomNextComponent
        routePath="/choose/location"
        title="Proceed"
        inActive={!checkDeclaration}
      />
    </div>
  );
}

UserBasicInfoComponent.propTypes = {
  yob: PropTypes.string,
  gender: PropTypes.string,
  selectedID: PropTypes.string,
  consumerIDTypes: PropTypes.array,
  showConsumerIDs: PropTypes.bool,
  changeBirthYear: PropTypes.func,
  changingGenderFunc: PropTypes.func,
  selectingIDProofFunc: PropTypes.func,
  selectedDocument: PropTypes.string,
  selectedDocumentValue: PropTypes.string,
  checkDeclarationFunc: PropTypes.func,

  loginInProgress: PropTypes.bool,
  loginFailed: PropTypes.bool,
  loginSuccess: PropTypes.bool,
  collectUserDetails: PropTypes.bool,
  login: PropTypes.func,
};

function UserBasicInfoComponent(props) {
  const loginSuccess = props.loginSuccess;
  const loginInProgress = props.loginInProgress;
  const loginFailed = props.loginFailed;
  const collectUserDetails = props.collectUserDetails;
  const trigger = !(loginSuccess || loginFailed || loginInProgress);
  useLayoutEffect(() => {
    if (trigger) {
      props.login();
    }
  });

  if (loginInProgress) {
    return <div> Login in progress </div>;
  } else if (loginFailed) {
    return <LFComponent login={props.login} />;
  } else if (loginSuccess) {
    if (!collectUserDetails) {
      return <Redirect to="/home" />;
    } else {
      return <CollectInfoComponent {...props} />;
    }
  } else {
    return <div> deff </div>;
  }
}
export { UserBasicInfoComponent };
